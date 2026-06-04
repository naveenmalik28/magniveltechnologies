import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { sendLeadEmails } from "@/lib/mail";
import { validateContact } from "@/lib/validation";

export const dynamic = "force-dynamic";

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

  if (message.includes("DATABASE_URL is not configured")) {
    console.error("Contact form configuration error: DATABASE_URL is missing");
    return NextResponse.json(
      { message: "Database is not configured. Please check Vercel environment variables." },
      { status: 500 },
    );
  }

  if (code === "P2021") {
    console.error("Contact form database error: leads table is missing");
    return NextResponse.json(
      { message: "Database table is missing. Please run migrations on your Vercel environment." },
      { status: 500 },
    );
  }

  if (code === "P2022") {
    console.error("Contact form database error: a leads column is missing");
    return NextResponse.json(
      { message: "Database schema is out of date. Please run migrations on your Vercel environment." },
      { status: 500 },
    );
  }

  if (["P1000", "P1001", "P1002", "P1003"].includes(code)) {
    console.error("Contact form database connection error:", code, message);
    return NextResponse.json(
      { message: "Database connection failed. Please try again later." },
      { status: 503 },
    );
  }

  console.error("Contact form database submission failed", error);
  return NextResponse.json({ message: "Unable to submit inquiry right now." }, { status: 500 });
}

export async function POST(request: Request) {
  try {
    let body: unknown;
    try {
      body = await request.json();
    } catch {
      return NextResponse.json({ message: "Invalid request body." }, { status: 400 });
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
        phone_code: lead.phoneCode,
        phone_number: lead.phoneNumber,
        company_name: lead.companyName || null,
        country: lead.country,
        service_type: lead.serviceType,
        budget: lead.budget,
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
