import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { sendLeadEmails } from "@/lib/mail";
import { validateContact } from "@/lib/validation";

export const dynamic = "force-dynamic";

// In-memory sliding-window IP rate limiter
const ipRequestMap = new Map<string, number[]>();
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000; // 10 minutes
const MAX_REQUESTS_PER_WINDOW = 5;

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const timestamps = ipRequestMap.get(ip) || [];
  const validTimestamps = timestamps.filter((ts) => now - ts < RATE_LIMIT_WINDOW_MS);

  if (validTimestamps.length >= MAX_REQUESTS_PER_WINDOW) {
    return true;
  }

  validTimestamps.push(now);
  ipRequestMap.set(ip, validTimestamps);
  return false;
}

function getErrorCode(error: unknown) {
  return typeof error === "object" && error !== null && "code" in error
    ? String((error as { code?: unknown }).code)
    : "";
}

function getErrorMessage(error: unknown) {
  return error instanceof Error ? error.message : String(error);
}

function contactFailureResponse(error: unknown) {
  const code = getErrorCode(error);
  const message = getErrorMessage(error);

  console.error("Contact form database submission failed:", { code, message, error });

  if (["P1000", "P1001", "P1002", "P1003"].includes(code)) {
    return NextResponse.json(
      { message: "Service is temporarily busy. Please try again in a few minutes." },
      { status: 503 },
    );
  }

  return NextResponse.json(
    { message: "Unable to submit inquiry right now. Please try again later." },
    { status: 500 },
  );
}

export async function POST(request: Request) {
  try {
    const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "127.0.0.1";

    if (isRateLimited(ip)) {
      return NextResponse.json(
        { message: "Too many submission attempts. Please wait a few minutes before trying again." },
        { status: 429 },
      );
    }

    let body: unknown;
    try {
      body = await request.json();
    } catch {
      return NextResponse.json({ message: "Invalid request body." }, { status: 400 });
    }

    // Honeypot anti-spam check: bots fill hidden fields like 'website' or 'b_hp'
    const recordBody = body as Record<string, unknown>;
    if (recordBody.website || recordBody.b_hp) {
      console.warn(`Honeypot bot caught from IP: ${ip}`);
      // Return fake 200 response to trick bot into stopping
      return NextResponse.json({ message: "Thank you. Your inquiry has been received." });
    }

    const validation = validateContact(body);
    if (!validation.data) {
      return NextResponse.json({ message: validation.error }, { status: 400 });
    }

    const lead = validation.data;
    await prisma.lead.create({
      data: {
        full_name: lead.fullName,
        email: lead.email,
        phone_code: lead.phoneCode || "",
        phone_number: lead.phoneNumber || "",
        company_name: lead.companyName || null,
        country: lead.country || "",
        service_type: lead.serviceType,
        budget: lead.budget || "",
        timeline: lead.timeline || "",
        message: lead.message,
      },
    });

    try {
      await sendLeadEmails(lead);
    } catch (emailError) {
      console.error("Lead saved, but email delivery failed", emailError);
    }

    return NextResponse.json({ message: "Thank you. Your inquiry has been received." });
  } catch (error) {
    return contactFailureResponse(error);
  }
}
