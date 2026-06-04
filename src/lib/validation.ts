import { serviceOptions } from "./site";

export type ContactInput = {
  fullName: string;
  email: string;
  phoneCode: string;
  phoneNumber: string;
  companyName: string;
  country: string;
  serviceType: string;
  budget: string;
  message: string;
};

export type LoginInput = {
  email: string;
  password: string;
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function clean(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

export function validateContact(payload: unknown): { data?: ContactInput; error?: string } {
  const body = payload as Record<string, unknown>;
  const data: ContactInput = {
    fullName: clean(body.fullName),
    email: clean(body.email).toLowerCase(),
    phoneCode: clean(body.phoneCode),
    phoneNumber: clean(body.phoneNumber),
    companyName: clean(body.companyName),
    country: clean(body.country),
    serviceType: clean(body.serviceType),
    budget: clean(body.budget) || "Not provided",
    message: clean(body.message),
  };

  if (data.fullName.length < 2) return { error: "Full name must be at least 2 characters." };
  if (!emailPattern.test(data.email)) return { error: "Please enter a valid email address." };
  if (!data.phoneCode) return { error: "Country code is required." };
  if (!data.phoneNumber) return { error: "Phone number is required." };
  if (!/^\d+$/.test(data.phoneNumber)) return { error: "Phone number must contain only numbers." };
  if (data.phoneNumber.length < 7 || data.phoneNumber.length > 15) return { error: "Please enter a valid phone number (7 to 15 digits)." };
  if (data.country.length < 2) return { error: "Country name is required (minimum 2 characters)." };
  if (!serviceOptions.includes(data.serviceType)) return { error: "Please select a valid service option." };
  if (data.message.length < 20) return { error: "Please describe your project (minimum 20 characters)." };
  if (data.message.length > 3000) return { error: "Project description is too long." };

  return { data };
}

export function validateLogin(payload: unknown): { data?: LoginInput; error?: string } {
  const body = payload as Record<string, unknown>;
  const data = {
    email: clean(body.email).toLowerCase(),
    password: clean(body.password),
  };

  if (!emailPattern.test(data.email)) return { error: "A valid email is required." };
  if (data.password.length < 8) return { error: "Password must be at least 8 characters." };
  return { data };
}
