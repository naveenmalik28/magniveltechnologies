import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { sendLeadEmails } from "@/lib/mail";
import { validateContact } from "@/lib/validation";

export const dynamic = "force-dynamic";

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
        phone: lead.phone,
        company_name: lead.companyName || null,
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
    console.error("Contact form database submission failed", error);
    return NextResponse.json({ message: "Unable to submit inquiry right now." }, { status: 500 });
  }
}
