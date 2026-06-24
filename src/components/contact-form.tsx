"use client";

import { useState, useRef, useEffect } from "react";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";

type FormState = "idle" | "loading" | "success" | "error";

interface CountryInfo {
  name: string;
  code: string;
  flag: string;
}

export function ContactForm() {
  const [state, setState] = useState<FormState>("idle");
  const [message, setMessage] = useState("");
  const [validationErrors, setValidationErrors] = useState<Record<string, string>>({});

  // Phone input state
  const [phone, setPhone] = useState("");

  // Country dropdown states
  const [country, setCountry] = useState("");
  const [countriesList, setCountriesList] = useState<CountryInfo[]>([]);
  const [loadingCountries, setLoadingCountries] = useState(false);
  const [countrySearch, setCountrySearch] = useState("");
  const [isCountryOpen, setIsCountryOpen] = useState(false);
  const countryRef = useRef<HTMLDivElement>(null);

  // Description auto-resize ref
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  // Automatic country detection
  const [detectedCountry, setDetectedCountry] = useState("in");

  useEffect(() => {
    // Detect country on mount
    if (typeof window !== "undefined") {
      const lang = navigator.language || (navigator.languages && navigator.languages[0]);
      if (lang) {
        const parts = lang.split("-");
        if (parts.length > 1) {
          const countryCode = parts[1].toLowerCase();
          if (countryCode.length === 2) {
            setDetectedCountry(countryCode);
            return;
          }
        }
      }
      try {
        const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
        if (tz) {
          if (tz.includes("Calcutta") || tz.includes("Kolkata") || tz.includes("Asia/Kolkata")) {
            setDetectedCountry("in");
          } else if (tz.includes("Europe/London") || tz.includes("London")) {
            setDetectedCountry("gb");
          } else if (tz.includes("Australia/")) {
            setDetectedCountry("au");
          } else if (tz.includes("Canada/") || tz.includes("America/Toronto")) {
            setDetectedCountry("ca");
          } else if (tz.includes("Singapore")) {
            setDetectedCountry("sg");
          } else if (tz.includes("Dubai") || tz.includes("Asia/Dubai")) {
            setDetectedCountry("ae");
          } else if (tz.includes("Berlin") || tz.includes("Europe/Berlin")) {
            setDetectedCountry("de");
          }
        }
      } catch {}
    }
  }, []);

  // Click outside listener for country dropdown
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (countryRef.current && !countryRef.current.contains(event.target as Node)) {
        setIsCountryOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Lazy-load countries list on focus/click
  async function loadCountries() {
    if (countriesList.length > 0 || loadingCountries) return;
    setLoadingCountries(true);
    try {
      const mod = await import("@/lib/countries");
      setCountriesList(mod.countries);
    } catch (err) {
      console.error("Failed to load country list", err);
    } finally {
      setLoadingCountries(false);
    }
  }

  // Handle auto-resizing textarea
  function handleDescriptionChange() {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = "auto";
      textarea.style.height = `${textarea.scrollHeight}px`;
    }
  }

  const filteredCountries = countriesList.filter((c) =>
    c.name.toLowerCase().includes(countrySearch.toLowerCase())
  );

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
    const budget = formData.get("budget") as string;
    const timeline = formData.get("timeline") as string;
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

    // Phone validation
    const phoneDigits = phone.replace(/\D/g, "");
    if (!phone || phoneDigits.length < 7 || phoneDigits.length > 15 || !phone.startsWith("+")) {
      errors.phone = "Please enter a valid international phone number (e.g. +91 98765 43210).";
    }

    if (!country) {
      errors.country = "Please select your country.";
    }

    if (!serviceType) {
      errors.serviceType = "Please select a service option.";
    }

    if (!budget) {
      errors.budget = "Please select a budget range.";
    }

    if (!timeline) {
      errors.timeline = "Please select an expected timeline.";
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

    // Build payload using E.164 phone string
    const payload = {
      fullName,
      email,
      phoneNumber: phone,
      companyName,
      country,
      serviceType,
      budget,
      timeline,
      message: messageText,
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
        setPhone("");
        setCountry("");
        setCountrySearch("");
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
      {/* Styles block for exact design guidelines and library overrides */}
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
        .react-international-phone-input-container {
          display: flex;
          width: 100%;
          position: relative;
        }
        .react-international-phone-country-selector-button {
          height: 56px !important;
          border-radius: 16px 0 0 16px !important;
          border: 1px solid #E5E7EB !important;
          border-right: none !important;
          background-color: #FFFFFF !important;
          padding: 0 14px !important;
          cursor: pointer;
          transition: all 0.25s ease-in-out !important;
        }
        .react-international-phone-country-selector-button:focus-visible {
          outline: 2px solid #0F766E !important;
        }
        .react-international-phone-input {
          height: 56px !important;
          width: 100% !important;
          border-radius: 0 16px 16px 0 !important;
          border: 1px solid #E5E7EB !important;
          background-color: #FFFFFF !important;
          color: #1F2937 !important;
          font-size: 14px !important;
          font-weight: 500 !important;
          padding: 0 16px !important;
          transition: all 0.25s ease-in-out !important;
        }
        .react-international-phone-input:focus {
          border-color: #0F766E !important;
          box-shadow: 0 0 0 4px rgba(15, 118, 110, 0.1) !important;
          outline: none !important;
        }
      `}</style>

      <form onSubmit={onSubmit} className="grid gap-6 p-6 sm:p-8 rounded-[24px] border border-subtle-border bg-white shadow-xl">
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

          {/* Phone Number */}
          <div className="contact-label">
            <span>Phone Number <span className="text-red-500">*</span></span>
            <PhoneInput
              defaultCountry={detectedCountry}
              value={phone}
              onChange={(phone) => setPhone(phone)}
              placeholder="Enter phone number"
            />
            {validationErrors.phone && (
              <p className="text-xs font-semibold text-red-500 mt-1">{validationErrors.phone}</p>
            )}
          </div>

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

          {/* Searchable Country Selector */}
          <div className="contact-label" ref={countryRef}>
            <span>Country <span className="text-red-500">*</span></span>
            <div className="relative">
              <button
                type="button"
                onClick={() => {
                  loadCountries();
                  setIsCountryOpen(!isCountryOpen);
                }}
                className={`contact-input text-left flex items-center justify-between ${
                  validationErrors.country ? "border-red-500" : ""
                }`}
              >
                <span className={country ? "text-heading" : "text-gray-400"}>
                  {country || "Select your country"}
                </span>
                <svg className="h-4 w-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {isCountryOpen && (
                <div className="absolute z-50 mt-1.5 w-full rounded-2xl border border-gray-200 bg-white p-2 shadow-xl animate-fade-in max-h-72 overflow-hidden flex flex-col">
                  <input
                    type="text"
                    placeholder="Search country..."
                    value={countrySearch}
                    onChange={(e) => setCountrySearch(e.target.value)}
                    className="w-full h-11 px-3 border border-gray-200 rounded-xl outline-none focus:border-[#0F766E] text-sm mb-2"
                  />
                  <div className="overflow-y-auto flex-1 min-h-[160px]">
                    {loadingCountries ? (
                      <div className="p-4 text-center text-xs text-gray-400">Loading country list...</div>
                    ) : filteredCountries.length === 0 ? (
                      <div className="p-4 text-center text-xs text-gray-400">No countries found</div>
                    ) : (
                      filteredCountries.map((c) => (
                        <button
                          key={c.code}
                          type="button"
                          onClick={() => {
                            setCountry(c.name);
                            setIsCountryOpen(false);
                            setCountrySearch("");
                          }}
                          className="w-full text-left px-3 py-2.5 rounded-lg hover:bg-gray-50 flex items-center gap-3 text-sm text-heading hover:text-[#0F766E] transition-colors"
                        >
                          <span>{c.flag}</span>
                          <span className="font-medium">{c.name}</span>
                        </button>
                      ))
                    )}
                  </div>
                </div>
              )}
            </div>
            {validationErrors.country && (
              <p className="text-xs font-semibold text-red-500 mt-1">{validationErrors.country}</p>
            )}
          </div>

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

          {/* Project Budget */}
          <label className="contact-label">
            <span>Project Budget <span className="text-red-500">*</span></span>
            <div className="relative">
              <select
                name="budget"
                required
                defaultValue=""
                className={`contact-input appearance-none pr-10 ${
                  validationErrors.budget ? "border-red-500" : ""
                }`}
              >
                <option value="" disabled className="text-gray-400">
                  Select your budget
                </option>
                <option value="Less than $1,000">Less than $1,000</option>
                <option value="$1,000 - $5,000">$1,000 - $5,000</option>
                <option value="$5,000 - $10,000">$5,000 - $10,000</option>
                <option value="$10,000+">$10,000+</option>
              </select>
              <span className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-gray-400">
                <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                </svg>
              </span>
            </div>
            {validationErrors.budget && (
              <p className="text-xs font-semibold text-red-500 mt-1">{validationErrors.budget}</p>
            )}
          </label>

          {/* Project Timeline */}
          <label className="contact-label">
            <span>Project Timeline <span className="text-red-500">*</span></span>
            <div className="relative">
              <select
                name="timeline"
                required
                defaultValue=""
                className={`contact-input appearance-none pr-10 ${
                  validationErrors.timeline ? "border-red-500" : ""
                }`}
              >
                <option value="" disabled className="text-gray-400">
                  Select expected timeline
                </option>
                <option value="Immediately">Immediately</option>
                <option value="Within 2 Weeks">Within 2 Weeks</option>
                <option value="Within 1 Month">Within 1 Month</option>
                <option value="1-3 Months">1-3 Months</option>
                <option value="Flexible">Flexible</option>
              </select>
              <span className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-gray-400">
                <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                </svg>
              </span>
            </div>
            {validationErrors.timeline && (
              <p className="text-xs font-semibold text-red-500 mt-1">{validationErrors.timeline}</p>
            )}
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
            placeholder="Tell us about your project requirements, business goals, preferred technologies, and expected timeline."
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
      </form>
    </>
  );
}
