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
        setMessage(result.message || "Your inquiry has been sent.");
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
    <form onSubmit={onSubmit} className="grid gap-4 rounded-lg border border-emerald-950/10 bg-white p-5 shadow-sm">
      <div className="grid gap-4 sm:grid-cols-2">
        <Field name="fullName" label="Full Name" />
        <Field name="email" label="Email" type="email" />
        <Field name="phone" label="Phone Number" />
        <Field name="companyName" label="Company Name" required={false} />
        <Select name="serviceType" label="Service Required" options={serviceOptions} />
        <Select name="budget" label="Budget" options={budgets} />
      </div>
      <label className="grid gap-2 text-sm font-medium text-slate-800">
        Project Description
        <textarea
          name="message"
          required
          minLength={20}
          rows={5}
          className="rounded-md border border-slate-300 px-3 py-2 outline-none focus:border-emerald-700 focus:ring-2 focus:ring-emerald-100"
        />
      </label>
      <button
        disabled={state === "loading"}
        className="rounded-md bg-emerald-700 px-5 py-3 text-sm font-semibold text-white hover:bg-emerald-800 disabled:cursor-not-allowed disabled:bg-slate-400"
      >
        {state === "loading" ? "Sending..." : "Submit Inquiry"}
      </button>
      {message ? (
        <p className={state === "error" ? "text-sm text-red-700" : "text-sm text-emerald-700"}>{message}</p>
      ) : null}
    </form>
  );
}

function Field({
  name,
  label,
  type = "text",
  required = true,
}: {
  name: string;
  label: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <label className="grid gap-2 text-sm font-medium text-slate-800">
      {label}
      <input
        name={name}
        type={type}
        required={required}
        className="rounded-md border border-slate-300 px-3 py-2 outline-none focus:border-emerald-700 focus:ring-2 focus:ring-emerald-100"
      />
    </label>
  );
}

function Select({ name, label, options }: { name: string; label: string; options: string[] }) {
  return (
    <label className="grid gap-2 text-sm font-medium text-slate-800">
      {label}
      <select
        name={name}
        required
        defaultValue=""
        className="rounded-md border border-slate-300 px-3 py-2 outline-none focus:border-emerald-700 focus:ring-2 focus:ring-emerald-100"
      >
        <option value="" disabled>
          Select
        </option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </label>
  );
}
