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
    const phoneCode = formData.get("phoneCode") as string;
    const phoneNumber = formData.get("phoneNumber") as string;
    const country = formData.get("country") as string;
    const serviceType = formData.get("serviceType") as string;
    const budget = formData.get("budget") as string;
    const timeline = formData.get("timeline") as string;
    const messageText = formData.get("message") as string;

    // Client-side validations
    const errors: Record<string, string> = {};
    if (!fullName || fullName.trim().length < 2) {
      errors.fullName = "Full name must be at least 2 characters.";
    }
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailPattern.test(email.trim())) {
      errors.email = "Please enter a valid email address.";
    }
    if (!phoneCode || phoneCode.trim().length < 1) {
      errors.phoneCode = "Country code is required.";
    }
    if (!phoneNumber || phoneNumber.trim().length < 6) {
      errors.phoneNumber = "Phone number must be at least 6 digits.";
    }
    if (!country || country.trim().length < 2) {
      errors.country = "Country name is required.";
    }
    if (!serviceType) {
      errors.serviceType = "Please select a service option.";
    }
    if (!budget) {
      errors.budget = "Please select a project budget range.";
    }
    if (!timeline) {
      errors.timeline = "Please select a project timeline.";
    }
    if (!messageText || messageText.trim().length < 20) {
      errors.message = "Please describe your project (minimum 20 characters).";
    }

    if (Object.keys(errors).length > 0) {
      setValidationErrors(errors);
      setState("idle");
      return;
    }

    // Append timeline to the message payload before serializing
    const finalMessage = `[Project Timeline: ${timeline}]\n\nProject Description:\n${messageText}`;
    formData.set("message", finalMessage);

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
      <div className="glass-card flex flex-col items-center justify-center p-10 text-center sm:p-14 animate-fade-up">
        {/* Animated Checkmark */}
        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-accent/10 text-accent border border-accent/20 shadow-md shadow-accent/5">
          <svg className="h-10 w-10 animate-bounce" fill="none" stroke="currentColor" strokeWidth="3.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="font-heading mt-8 text-2xl font-extrabold uppercase tracking-widest text-heading">Verification Success</h3>
        <p className="mt-4 text-xs leading-relaxed text-muted max-w-sm font-sans">
          Your secure project transmission is complete. Our engineering lead will review your request and initialize communication within 24 hours.
        </p>
        <button
          onClick={() => setState("idle")}
          className="btn-secondary mt-10 w-full max-w-xs py-3 text-xs font-bold"
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
        <h3 className="font-heading text-xs font-bold uppercase tracking-widest text-accent-secondary">01 // Personal & Company Info</h3>
        <div className="mt-6 grid gap-5 sm:grid-cols-2 animate-fade-in">
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
          
          <div className="flex gap-2">
            <div className="w-[90px] shrink-0">
              <label className="label">
                <span>Code <span className="text-accent-secondary">*</span></span>
                <input
                  name="phoneCode"
                  type="text"
                  required
                  placeholder="+91"
                  defaultValue="+91"
                  className={`input mt-2 ${validationErrors.phoneCode ? "border-red-500" : ""}`}
                />
              </label>
            </div>
            <div className="flex-1">
              <Field
                name="phoneNumber"
                label="Phone Number"
                type="tel"
                placeholder="9876543210"
                error={validationErrors.phoneNumber}
              />
            </div>
          </div>

          <Field
            name="companyName"
            label="Company Name"
            required={false}
            placeholder="Optional"
          />
        </div>
      </div>

      <hr className="border-subtle-border" />

      {/* Step 2: Project Specifications */}
      <div>
        <h3 className="font-heading text-xs font-bold uppercase tracking-widest text-accent-secondary">02 // Project Specifications</h3>
        <div className="mt-6 grid gap-5 sm:grid-cols-2">
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

          {/* Budget Selection */}
          <Select
            name="budget"
            label="Project Budget"
            placeholder="Select budget range"
            options={[
              "Under $1,000 (INR 80k)",
              "$1,000 - $3,000 (INR 80k - 2.5L)",
              "$3,000 - $5,000 (INR 2.5L - 4L)",
              "$5,000 - $10,000 (INR 4L - 8L)",
              "$10,000 - $25,000 (INR 8L - 20L)",
              "$25,000+ (INR 20L+)",
              "Let's Discuss"
            ]}
            error={validationErrors.budget}
          />

          {/* Timeline Selection */}
          <Select
            name="timeline"
            label="Project Timeline"
            placeholder="Select project timeline"
            options={[
              "Immediate (Start now)",
              "1 - 3 Months",
              "3 - 6 Months",
              "Flexible / Ongoing"
            ]}
            error={validationErrors.timeline}
          />
        </div>

        {/* Message / Description */}
        <div className="mt-5">
          <label className="label">
            <span>Project Description <span className="text-accent-secondary">*</span></span>
            <textarea
              name="message"
              required
              minLength={20}
              rows={5}
              placeholder="Explain the scope, timeline, integrations, or automation goals (minimum 20 characters)..."
              className={`input resize-none mt-2 ${
                validationErrors.message ? "border-red-500 focus:border-red-500 focus:ring-red-100" : "border-subtle-border focus:border-accent"
              }`}
            />
          </label>
          {validationErrors.message && (
            <p className="mt-1.5 text-xs font-semibold text-red-500">{validationErrors.message}</p>
          )}
        </div>
      </div>

      {/* Form State Alerts */}
      {message && (
        <div className={`text-center p-3 rounded-lg border text-xs font-semibold ${
          state === "error"
            ? "bg-red-50 border-red-200 text-red-600"
            : "bg-accent-subtle border-accent/20 text-accent"
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
    <label className={`label ${className}`}>
      <span>{label} {required && <span className="text-accent-secondary">*</span>}</span>
      <input
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className={`input mt-2 ${
          error ? "border-red-500 focus:border-red-500" : ""
        }`}
      />
      {error && <p className="mt-1.5 text-xs font-semibold text-red-500">{error}</p>}
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
    <label className="label">
      <span>{label} <span className="text-accent-secondary">*</span></span>
      <span className="relative mt-2 block">
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
          className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-muted"
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
      {error && <p className="mt-1.5 text-xs font-semibold text-red-500">{error}</p>}
    </label>
  );
}
