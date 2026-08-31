"use client";

import { useState, useRef } from "react";

type FormState = "idle" | "loading" | "success" | "error";

export function ContactForm() {
  const [state, setState] = useState<FormState>("idle");
  const [message, setMessage] = useState("");
  const [validationErrors, setValidationErrors] = useState<Record<string, string>>({});

  // Description auto-resize ref
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  // Handle auto-resizing textarea
  function handleDescriptionChange() {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = "auto";
      textarea.style.height = `${textarea.scrollHeight}px`;
    }
  }

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    setState("loading");
    setMessage("");
    setValidationErrors({});

    const formData = new FormData(form);
    const fullName = formData.get("fullName") as string;
    const email = formData.get("email") as string;
    const companyName = formData.get("companyName") as string;
    const serviceType = formData.get("serviceType") as string;
    const messageText = formData.get("message") as string;

    // Client-side validations
    const errors: Record<string, string> = {};
    if (!fullName || fullName.trim().length < 2) {
      errors.fullName = "Full name must be at least 2 characters.";
    } else if (fullName.trim().length > 100) {
      errors.fullName = "Full name must not exceed 100 characters.";
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailPattern.test(email.trim())) {
      errors.email = "Please enter a valid email address.";
    }

    if (!serviceType) {
      errors.serviceType = "Please select a service option.";
    }

    if (!messageText || messageText.trim().length < 20) {
      errors.message = "Project description must be at least 20 characters.";
    } else if (messageText.trim().length > 2000) {
      errors.message = "Project description must not exceed 2000 characters.";
    }

    if (Object.keys(errors).length > 0) {
      setValidationErrors(errors);
      setState("idle");
      return;
    }

    const website = formData.get("website") as string;
    const budget = formData.get("budget") as string;

    const payload = {
      fullName,
      email,
      companyName,
      serviceType,
      budget: budget || "",
      timeline: "",
      message: messageText,
      website: website || "",
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const result = (await response.json()) as { message?: string };

      if (response.ok) {
        form.reset();
        if (textareaRef.current) textareaRef.current.style.height = "auto";
        setState("success");
        setMessage(result.message || "Your inquiry has been received successfully.");
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
      <div className="glass-card flex flex-col items-center justify-center p-10 text-center sm:p-14 animate-fade-up max-w-xl mx-auto rounded-[24px] border border-subtle-border bg-white shadow-xl">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-teal-50 text-[#0F766E] border border-teal-100 shadow-md shadow-teal-50">
          <svg className="h-8 w-8 animate-bounce" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="font-heading mt-6 text-2xl font-extrabold text-heading">Thank You!</h3>
        <p className="mt-3 text-sm leading-relaxed text-muted font-sans">
          Your project inquiry has been received successfully.<br />
          Our team will review your requirements and contact you shortly.
        </p>
        <button
          onClick={() => setState("idle")}
          className="btn-primary mt-8 w-full max-w-xs py-3 text-xs font-bold uppercase tracking-wider"
        >
          Send Another Inquiry
        </button>
      </div>
    );
  }

  return (
    <>
      {/* Styles block for exact design guidelines */}
      <style>{`
        .contact-input {
          height: 56px !important;
          border-radius: 16px !important;
          background-color: #FFFFFF !important;
          border: 1px solid #E5E7EB !important;
          padding: 0 18px !important;
          font-size: 14px !important;
          font-weight: 500 !important;
          color: #1F2937 !important;
          outline: none !important;
          transition: all 0.25s ease-in-out !important;
          width: 100% !important;
        }
        .contact-input:focus {
          border-color: #0F766E !important;
          box-shadow: 0 0 0 4px rgba(15, 118, 110, 0.1) !important;
        }
        .contact-label {
          display: flex;
          flex-direction: column;
          gap: 8px;
          font-size: 13px;
          font-weight: 600;
          color: #374151;
        }
      `}</style>

      <form onSubmit={onSubmit} className="grid gap-6 p-6 sm:p-8 rounded-[24px] border border-subtle-border bg-white shadow-xl">
        {/* Honeypot field for bot prevention */}
        <input name="website" type="text" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
        <div className="grid gap-6 sm:grid-cols-2">
          {/* Full Name */}
          <label className="contact-label">
            <span>Full Name <span className="text-red-500">*</span></span>
            <input
              name="fullName"
              type="text"
              required
              placeholder="Enter your full name"
              className={`contact-input ${validationErrors.fullName ? "border-red-500" : ""}`}
            />
            {validationErrors.fullName && (
              <p className="text-xs font-semibold text-red-500 mt-1">{validationErrors.fullName}</p>
            )}
          </label>

          {/* Email Address */}
          <label className="contact-label">
            <span>Email Address <span className="text-red-500">*</span></span>
            <input
              name="email"
              type="email"
              required
              placeholder="Enter your email address"
              className={`contact-input ${validationErrors.email ? "border-red-500" : ""}`}
            />
            {validationErrors.email && (
              <p className="text-xs font-semibold text-red-500 mt-1">{validationErrors.email}</p>
            )}
          </label>

          {/* Company Name */}
          <label className="contact-label">
            <span>Company Name <span className="text-gray-400 font-normal">(Optional)</span></span>
            <input
              name="companyName"
              type="text"
              placeholder="Enter company name"
              className="contact-input"
            />
          </label>

          {/* Service Required */}
          <label className="contact-label">
            <span>Service Required <span className="text-red-500">*</span></span>
            <div className="relative">
              <select
                name="serviceType"
                required
                defaultValue=""
                className={`contact-input appearance-none pr-10 ${
                  validationErrors.serviceType ? "border-red-500" : ""
                }`}
              >
                <option value="" disabled className="text-gray-400">
                  Choose a service
                </option>
                <option value="Website Development">Website Development</option>
                <option value="Web Application Development">Web Application Development</option>
                <option value="Mobile App Development">Mobile App Development</option>
                <option value="SaaS Development">SaaS Development</option>
                <option value="AI Solutions">AI Solutions</option>
                <option value="Custom Software">Custom Software</option>
                <option value="UI/UX Design">UI/UX Design</option>
                <option value="E-commerce Development">E-commerce Development</option>
                <option value="Other">Other</option>
              </select>
              <span className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-gray-400">
                <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                </svg>
              </span>
            </div>
            {validationErrors.serviceType && (
              <p className="text-xs font-semibold text-red-500 mt-1">{validationErrors.serviceType}</p>
            )}
          </label>

          {/* Budget Range */}
          <label className="contact-label sm:col-span-2">
            <span>Budget Range <span className="text-gray-400 font-normal">(Optional)</span></span>
            <div className="relative">
              <select
                name="budget"
                defaultValue=""
                className="contact-input appearance-none pr-10"
              >
                <option value="">Select a budget range</option>
                <option value="Under $1,000">Under $1,000</option>
                <option value="$1,000 - $3,000">$1,000 – $3,000</option>
                <option value="$3,000 - $5,000">$3,000 – $5,000</option>
                <option value="$5,000 - $10,000">$5,000 – $10,000</option>
                <option value="$10,000 - $25,000">$10,000 – $25,000</option>
                <option value="$25,000+">$25,000+</option>
                <option value="Let's Discuss">Let&apos;s Discuss</option>
              </select>
              <span className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-gray-400">
                <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                </svg>
              </span>
            </div>
          </label>
        </div>

        {/* Project Description */}
        <label className="contact-label">
          <span>Project Description <span className="text-red-500">*</span></span>
          <textarea
            name="message"
            required
            ref={textareaRef}
            rows={4}
            onChange={handleDescriptionChange}
            placeholder="Tell us about your project — what you want to build, who it's for, and any specific requirements."
            className={`contact-input resize-none py-4 min-h-[120px] overflow-hidden ${
              validationErrors.message ? "border-red-500" : ""
            }`}
          />
          {validationErrors.message && (
            <p className="text-xs font-semibold text-red-500 mt-1">{validationErrors.message}</p>
          )}
        </label>

        {/* Status Alerts */}
        {message && state === "error" && (
          <div className="text-center p-3.5 rounded-2xl border border-red-200 bg-red-50 text-red-600 text-xs font-semibold animate-fade-in">
            {message}
          </div>
        )}

        {/* Submission Button */}
        <button
          disabled={state === "loading"}
          className="btn-primary w-full py-4 disabled:cursor-not-allowed disabled:opacity-50 text-sm font-bold uppercase tracking-wider mt-2 flex items-center justify-center gap-2.5 h-[56px] rounded-2xl cursor-pointer"
        >
          {state === "loading" ? (
            <>
              <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
              </svg>
              <span>Sending Inquiry...</span>
            </>
          ) : (
            "Send Project Inquiry"
          )}
        </button>

        {/* What Happens Next */}
        <div className="rounded-2xl border border-subtle-border bg-[#F7F4EF]/50 p-5 mt-1">
          <p className="text-xs font-bold uppercase tracking-widest text-accent-secondary mb-3">What Happens Next</p>
          <div className="grid gap-2.5 text-xs text-muted leading-relaxed">
            <div className="flex items-start gap-2.5">
              <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary text-[10px] font-bold mt-0.5">1</span>
              <span>We review your requirements within 24 hours.</span>
            </div>
            <div className="flex items-start gap-2.5">
              <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary text-[10px] font-bold mt-0.5">2</span>
              <span>We schedule a call to discuss scope, timeline, and budget.</span>
            </div>
            <div className="flex items-start gap-2.5">
              <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary text-[10px] font-bold mt-0.5">3</span>
              <span>We send you a detailed proposal with clear deliverables.</span>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}

