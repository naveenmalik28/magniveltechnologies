"use client";

import { useState } from "react";
import { serviceOptions } from "@/lib/site";

type FormState = "idle" | "loading" | "success" | "error";



export function ContactForm() {
  const [state, setState] = useState<FormState>("idle");
  const [message, setMessage] = useState("");
  const [validationErrors, setValidationErrors] = useState<Record<string, string>>({});

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    setState("loading");
    setMessage("");
    setValidationErrors({});

    const formData = new FormData(form);
    const fullName = formData.get("fullName") as string;
    const email = formData.get("email") as string;

    const country = formData.get("country") as string;
    const messageText = formData.get("message") as string;
    const serviceType = formData.get("serviceType") as string;

    // Client-side validations
    const errors: Record<string, string> = {};
    if (!fullName || fullName.trim().length < 2) {
      errors.fullName = "Full name must be at least 2 characters.";
    }
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailPattern.test(email.trim())) {
      errors.email = "Please enter a valid email address.";
    }
    if (!country || country.trim().length < 2) {
      errors.country = "Country name is required.";
    }
    if (!serviceType) {
      errors.serviceType = "Please select a service option.";
    }
    if (!messageText || messageText.trim().length < 20) {
      errors.message = "Please describe your project (minimum 20 characters).";
    }

    if (Object.keys(errors).length > 0) {
      setValidationErrors(errors);
      setState("idle");
      return;
    }

    try {
      const payload = Object.fromEntries(formData.entries());
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const result = (await response.json()) as { message?: string };

      if (response.ok) {
        form.reset();
        setState("success");
        setMessage(result.message || "Your inquiry has been sent successfully.");
        return;
      }

      setState("error");
      setMessage(result.message || "Please check the form fields and try again.");
    } catch {
      setState("error");
      setMessage("Unable to submit inquiry right now. Please try again.");
    }
  }



  if (state === "success") {
    return (
      <div className="glow-card flex flex-col items-center justify-center p-8 text-center sm:p-12 animate-fade-up">
        {/* Animated Checkmark */}
        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-emerald-400/15 text-emerald-400 shadow-inner">
          <svg className="h-10 w-10 animate-bounce" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="mt-6 text-2xl font-extrabold text-heading">Inquiry Received!</h3>
        <p className="mt-3 text-sm leading-relaxed text-muted max-w-sm">
          Thank you for reaching out. We have saved your project details. Our engineering lead will review your request and get back to you within 24 hours.
        </p>
        <button
          onClick={() => setState("idle")}
          className="btn-secondary mt-8 w-full max-w-xs py-2.5 text-xs font-bold"
        >
          Submit Another Request
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="glass-card grid gap-6 p-6 sm:p-8">
      {/* Step 1: Contact Information */}
      <div>
        <h3 className="text-sm font-bold uppercase tracking-wider text-accent-dark">1. Personal & Company Info</h3>
        <div className="mt-4 grid gap-5 sm:grid-cols-2 animate-fade-in">
          <Field
            name="fullName"
            label="Full Name"
            placeholder="John Doe"
            error={validationErrors.fullName}
          />
          <Field
            name="email"
            label="Email Address"
            type="email"
            placeholder="john@example.com"
            error={validationErrors.email}
          />
          
          <Field
            name="companyName"
            label="Company Name"
            required={false}
            placeholder="Optional"
            className="sm:col-span-2"
          />
        </div>
      </div>

      <hr className="border-subtle-border/50" />

      {/* Step 2: Project Specifications */}
      <div>
        <h3 className="text-sm font-bold uppercase tracking-wider text-accent-dark">2. Project Specifications</h3>
        <div className="mt-4 grid gap-5 sm:grid-cols-2">
          {/* Country Field with Manual entry */}
          <Field
            name="country"
            label="Country"
            placeholder="e.g. India, United States"
            error={validationErrors.country}
          />

          {/* Service Selection */}
          <Select
            name="serviceType"
            label="Service Required"
            placeholder="Select service area"
            options={serviceOptions}
            error={validationErrors.serviceType}
          />
        </div>

        {/* Message / Description */}
        <div className="mt-5">
          <label className="grid gap-2 text-sm font-semibold text-heading font-semibold">
            <span>Project Description <span className="text-accent">*</span></span>
            <textarea
              name="message"
              required
              minLength={20}
              rows={5}
              placeholder="Explain the scope, timeline, integrations, or automation goals (minimum 20 characters)..."
              className={`input resize-none ${
                validationErrors.message ? "border-red-500 focus:border-red-500 focus:ring-red-100" : "border-subtle-border focus:border-accent"
              }`}
            />
          </label>
          {validationErrors.message && (
            <p className="mt-1 text-xs font-semibold text-red-500">{validationErrors.message}</p>
          )}
        </div>
      </div>

      {/* Form State Alerts */}
      {message && (
        <div className={`text-center p-3 rounded-lg border text-xs font-semibold ${
          state === "error"
            ? "bg-red-500/10 border-red-500/30 text-red-400"
            : "bg-emerald-500/10 border-emerald-500/30 text-emerald-400"
        }`}>
          {message}
        </div>
      )}

      {/* Submission Button */}
      <button
        disabled={state === "loading"}
        className="btn-primary w-full py-3.5 disabled:cursor-not-allowed disabled:opacity-50 text-xs font-bold uppercase tracking-wider mt-2"
      >
        {state === "loading" ? (
          <>
            <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white inline-block" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
            </svg>
            Submitting Inquiry...
          </>
        ) : (
          "Send Inquiry to Tech Team"
        )}
      </button>
    </form>
  );
}

function Field({
  name,
  label,
  type = "text",
  required = true,
  placeholder,
  error,
  className = "",
}: {
  name: string;
  label: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
  error?: string;
  className?: string;
}) {
  return (
    <label className={`grid gap-2 text-sm font-semibold text-heading ${className}`}>
      <span>{label} {required && <span className="text-accent">*</span>}</span>
      <input
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className={`input ${
          error ? "border-red-500 focus:border-red-500" : ""
        }`}
      />
      {error && <p className="text-xs font-semibold text-red-500">{error}</p>}
    </label>
  );
}

function Select({
  name,
  label,
  placeholder,
  options,
  error,
}: {
  name: string;
  label: string;
  placeholder: string;
  options: string[];
  error?: string;
}) {
  return (
    <label className="grid gap-2 text-sm font-semibold text-heading">
      <span>{label} <span className="text-accent">*</span></span>
      <span className="relative">
        <select
          name={name}
          required
          defaultValue=""
          className={`input appearance-none pr-10 ${
            error ? "border-red-500 focus:border-red-500" : ""
          }`}
        >
          <option value="" disabled className="bg-surface text-muted">
            {placeholder}
          </option>
          {options.map((option) => (
            <option key={option} value={option} className="bg-surface text-heading">
              {option}
            </option>
          ))}
        </select>
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-dimmed"
        >
          <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
            <path
              fillRule="evenodd"
              d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
              clipRule="evenodd"
            />
          </svg>
        </span>
      </span>
      {error && <p className="text-xs font-semibold text-red-500">{error}</p>}
    </label>
  );
}
