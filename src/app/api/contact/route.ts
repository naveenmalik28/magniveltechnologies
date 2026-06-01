import { NextResponse } from "next/server";
import { getPool } from "@/lib/db";
import { sendLeadEmails } from "@/lib/mail";
import { validateContact } from "@/lib/validation";

export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  try {
    const validation = validateContact(await request.json());
    if (!validation.data) {
      return NextResponse.json({ message: validation.error }, { status: 400 });
    }

    const lead = validation.data;
    await getPool().execute(
      `INSERT INTO leads
        (full_name, email, phone, company_name, service_type, budget, message)
       VALUES
        (:fullName, :email, :phone, :companyName, :serviceType, :budget, :message)`,
      lead,
    );

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
