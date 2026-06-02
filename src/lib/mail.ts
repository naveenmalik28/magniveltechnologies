import nodemailer from "nodemailer";
import { site } from "./site";
import { ContactInput } from "./validation";

function getTransport() {
  return nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT || 465),
    secure: Number(process.env.SMTP_PORT || 465) === 465,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });
}

export async function sendLeadEmails(lead: ContactInput) {
  if (!process.env.SMTP_HOST || !process.env.SMTP_USER || !process.env.SMTP_PASS) {
    console.warn("SMTP is not fully configured. Skipping lead emails.");
    return;
  }

  const transport = getTransport();
  const from = `"${site.name}" <${process.env.SMTP_USER}>`;

  await Promise.all([
    transport.sendMail({
      from,
      to: site.email,
      subject: "New Inquiry From Magnivel Website",
      text: [
        `Name: ${lead.fullName}`,
        `Email: ${lead.email}`,
        `Phone: ${lead.phone}`,
        `Company: ${lead.companyName || "Not provided"}`,
        `Client Region: ${lead.clientRegion}`,
        `Service: ${lead.serviceType}`,
        `Budget: ${lead.budget}`,
        "",
        lead.message,
      ].join("\n"),
    }),
    transport.sendMail({
      from,
      to: lead.email,
      subject: "Thank You For Contacting Magnivel Technologies",
      text: [
        "Thank you for contacting Magnivel Technologies.",
        "",
        "We have received your inquiry and our team will contact you shortly.",
        "",
        `Website: ${site.url}`,
        `Email: ${site.email}`,
      ].join("\n"),
    }),
  ]);
}
