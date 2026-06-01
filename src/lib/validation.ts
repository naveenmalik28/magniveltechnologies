import { budgets, serviceOptions } from "./site";

export type ContactInput = {
  fullName: string;
  email: string;
  phone: string;
  companyName: string;
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
    phone: clean(body.phone),
    companyName: clean(body.companyName),
    serviceType: clean(body.serviceType),
    budget: clean(body.budget),
    message: clean(body.message),
  };

  if (data.fullName.length < 2) return { error: "Full name is required." };
  if (!emailPattern.test(data.email)) return { error: "A valid email is required." };
  if (data.phone.length < 7) return { error: "A valid phone number is required." };
  if (!serviceOptions.includes(data.serviceType)) return { error: "Please select a valid service." };
  if (!budgets.includes(data.budget)) return { error: "Please select a valid budget." };
  if (data.message.length < 20) return { error: "Project description must be at least 20 characters." };
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
