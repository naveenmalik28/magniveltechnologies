"use client";

import { useState } from "react";
import { budgets, serviceOptions } from "@/lib/site";

type State = "idle" | "loading" | "success" | "error";

export function ContactForm() {
  const [state, setState] = useState<State>("idle");
  const [message, setMessage] = useState("");

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    setState("loading");
    setMessage("");

    try {
      const formData = new FormData(form);
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
      setMessage(result.message || "Please check the form and try again.");
    } catch {
      setState("error");
      setMessage("Unable to submit inquiry right now. Please try again.");
    }
  }

  return (
    <form 
      onSubmit={onSubmit} 
      className="grid gap-5 rounded-xl border border-subtle-border bg-surface/50 p-6 sm:p-8 backdrop-blur-md shadow-2xl relative glow-card"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <Field name="fullName" label="Full Name" placeholder="John Doe" />
        <Field name="email" label="Email Address" type="email" placeholder="john@example.com" />
        <Field name="phone" label="Phone Number" placeholder="+91 99999 99999" />
        <Field name="companyName" label="Company Name" required={false} placeholder="Optional" />
        <Select
          name="serviceType"
          label="Service Required"
          placeholder="Select Service"
          options={serviceOptions}
        />
        <Select
          name="budget"
          label="Project Budget"
          placeholder="Select Project Budget"
          options={budgets}
        />
      </div>
      
      <label className="grid gap-2 text-sm font-medium text-muted">
        <span>Project Description <span className="text-accent">*</span></span>
        <textarea
          name="message"
          required
          minLength={20}
          rows={5}
          placeholder="Tell us what you want to build (min 20 characters)..."
          className="rounded-lg border border-subtle-border bg-background/50 px-3.5 py-2.5 text-white outline-none focus:border-accent focus:ring-2 focus:ring-accent/15 placeholder:text-dimmed transition-all resize-none"
        />
      </label>

      <button
        disabled={state === "loading"}
        className="mt-2 w-full inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-accent to-[#8b5cf6] px-5 py-3.5 text-sm font-semibold text-white hover:shadow-lg hover:shadow-accent/25 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 disabled:cursor-not-allowed disabled:opacity-50 disabled:transform-none disabled:shadow-none"
      >
        {state === "loading" ? (
          <>
            <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
            </svg>
            Submitting Inquiry...
          </>
        ) : (
          "Submit Project Request"
        )}
      </button>

      {message ? (
        <div className={`mt-3 text-center p-3 rounded-lg border text-sm font-medium ${
          state === "error" 
            ? "bg-red-950/20 border-red-500/20 text-red-400" 
            : "bg-emerald-950/20 border-emerald-500/20 text-emerald-400"
        }`}>
          {message}
        </div>
      ) : null}
    </form>
  );
}

function Field({
  name,
  label,
  type = "text",
  required = true,
  placeholder,
}: {
  name: string;
  label: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <label className="grid gap-2 text-sm font-medium text-muted">
      <span>{label} {required && <span className="text-accent">*</span>}</span>
      <input
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="rounded-lg border border-subtle-border bg-background/50 px-3.5 py-2.5 text-white outline-none focus:border-accent focus:ring-2 focus:ring-accent/15 placeholder:text-dimmed transition-all"
      />
    </label>
  );
}

function Select({
  name,
  label,
  placeholder,
  options,
}: {
  name: string;
  label: string;
  placeholder: string;
  options: string[];
}) {
  return (
    <label className="grid gap-2 text-sm font-medium text-muted">
      <span>{label} <span className="text-accent">*</span></span>
      <span className="relative">
        <select
          name={name}
          required
          defaultValue=""
          className="w-full appearance-none rounded-lg border border-subtle-border bg-background/50 px-3.5 py-2.5 pr-10 text-white outline-none focus:border-accent focus:ring-2 focus:ring-accent/15 transition-all"
        >
          <option value="" disabled className="bg-surface text-muted">
            {placeholder}
          </option>
          {options.map((option) => (
            <option key={option} value={option} className="bg-surface text-white">
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
    </label>
  );
}
