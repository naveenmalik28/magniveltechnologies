"use client";

import { useState } from "react";
import Link from "next/link";
import { PageHeader, PageShell } from "@/components/page-shell";
import { Icon } from "@/components/icon";

export function CalculatorClient() {
  const [currency, setCurrency] = useState<"INR" | "USD">("INR");
  const [pages, setPages] = useState(1);
  const [design, setDesign] = useState<"template" | "custom" | "premium">("template");
  const [cms, setCms] = useState(false);
  const [ecommerce, setEcommerce] = useState(false);
  const [auth, setAuth] = useState(false);
  const [seo, setSeo] = useState(false);
  const [copied, setCopied] = useState(false);

  // Estimation math tailored for INR (starts at ₹10,000 for 1 page) and USD (starts at $120 for 1 page)
  const calculatePrice = () => {
    if (currency === "INR") {
      let totalINR = 10000; // Base price for 1 page

      // Additional pages beyond 1
      if (pages > 1) {
        totalINR += (pages - 1) * 2000; // ₹2,000 per additional page
      }

      // Visual Design Tiers
      if (design === "custom") totalINR += 8000;
      if (design === "premium") totalINR += 20000;

      // Optional Modules
      if (cms) totalINR += 5000;
      if (ecommerce) totalINR += 12000;
      if (auth) totalINR += 8000;
      if (seo) totalINR += 4000;

      return totalINR;
    } else {
      let totalUSD = 120; // Base price for 1 page

      // Additional pages beyond 1
      if (pages > 1) {
        totalUSD += (pages - 1) * 25; // $25 per additional page
      }

      // Visual Design Tiers
      if (design === "custom") totalUSD += 100;
      if (design === "premium") totalUSD += 250;

      // Optional Modules
      if (cms) totalUSD += 60;
      if (ecommerce) totalUSD += 150;
      if (auth) totalUSD += 100;
      if (seo) totalUSD += 50;

      return totalUSD;
    }
  };

  const formattedPrice = calculatePrice().toLocaleString();
  const currencySymbol = currency === "INR" ? "₹" : "$";

  const handleCopySummary = () => {
    const summaryText = `Magnivel Technologies - Estimated Website Budget: ${currencySymbol} ${formattedPrice}\nDetails:\n- Pages: ${pages}\n- Design: ${design}\n- CMS: ${cms ? "Yes" : "No"}\n- E-commerce: ${ecommerce ? "Yes" : "No"}\n- Auth: ${auth ? "Yes" : "No"}\n- SEO: ${seo ? "Yes" : "No"}`;
    navigator.clipboard.writeText(summaryText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <PageShell>
      <PageHeader
        eyebrow="Interactive Tool"
        title="Website Development Cost Calculator"
        description="Estimate your budget instantly. Adjust page numbers, check features, and select design quality tiers to calculate real-time cost ranges."
      />

      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-[1.5fr_1fr] items-start">
          {/* Controls Panel */}
          <div className="rounded-2xl border border-subtle-border bg-surface p-6 shadow-md grid gap-6">
            {/* Currency Selector */}
            <div className="flex justify-between items-center">
              <span className="text-sm font-bold text-heading">1. Select Currency</span>
              <span className="relative flex rounded-lg border border-subtle-border bg-background p-1 w-32">
                <button
                  type="button"
                  onClick={() => setCurrency("INR")}
                  className={`flex-1 rounded-md py-1 text-xs font-bold transition-all cursor-pointer ${
                    currency === "INR" ? "bg-accent text-white shadow-sm" : "text-muted"
                  }`}
                >
                  INR (₹)
                </button>
                <button
                  type="button"
                  onClick={() => setCurrency("USD")}
                  className={`flex-1 rounded-md py-1 text-xs font-bold transition-all cursor-pointer ${
                    currency === "USD" ? "bg-accent text-white shadow-sm" : "text-muted"
                  }`}
                >
                  USD ($)
                </button>
              </span>
            </div>

            <hr className="border-subtle-border/50" />

            {/* Slider for Pages */}
            <div className="grid gap-2">
              <div className="flex justify-between items-center text-sm font-bold text-heading">
                <span>2. Number of Pages</span>
                <span className="text-accent-dark">{pages} {pages === 1 ? "Page" : "Pages"}</span>
              </div>
              <input
                type="range"
                min="1"
                max="50"
                value={pages}
                onChange={(e) => setPages(Number(e.target.value))}
                className="w-full h-1.5 bg-background-secondary rounded-lg appearance-none cursor-pointer accent-accent"
              />
              <span className="text-[10px] text-muted">Includes headers, content sections, and contact layouts.</span>
            </div>

            <hr className="border-subtle-border/50" />

            {/* Radio Group for Design Tiers */}
            <div className="grid gap-3">
              <span className="text-sm font-bold text-heading">3. Visual Design Quality</span>
              <div className="grid gap-2">
                {[
                  ["template", "Template Theme Base", "Basic customized theme setup. Good for simple launches."],
                  ["custom", "Professional Custom Layout", "Tailored grid design with optimized conversions."],
                  ["premium", "Premium Immersive Branding", "Immersive custom visuals, 3D illustrations, scroll animations."]
                ].map(([val, label, desc]) => (
                  <label
                    key={val}
                    className={`rounded-xl border p-3 flex gap-3 cursor-pointer select-none transition-all ${
                      design === val ? "bg-accent-subtle border-accent" : "border-subtle-border bg-surface hover:border-border-hover"
                    }`}
                  >
                    <input
                      type="radio"
                      name="design"
                      value={val}
                      checked={design === val}
                      onChange={() => setDesign(val as "template" | "custom" | "premium")}
                      className="mt-1 accent-accent"
                    />
                    <div>
                      <h4 className="text-xs font-extrabold text-heading">{label}</h4>
                      <p className="text-[10px] text-muted mt-1">{desc}</p>
                    </div>
                  </label>
                ))}
              </div>
            </div>

            <hr className="border-subtle-border/50" />

            {/* Checkboxes for Modules */}
            <div className="grid gap-3">
              <span className="text-sm font-bold text-heading">4. Choose Modules</span>
              <div className="grid gap-3">
                {[
                  [cms, setCms, "Content Management System (CMS)", "Allow non-technical text edits."],
                  [ecommerce, setEcommerce, "E-Commerce Integrations", "Shopping cart database and product catalogues."],
                  [auth, setAuth, "User Logins & Profiles", "Secure portals, JWT validations, user profiles."],
                  [seo, setSeo, "Premium Technical SEO Markup", "Dynamic FAQ/Article structured schemas injection."]
                ].map(([state, setState, label, desc]) => (
                  <label key={label as string} className="flex gap-3 cursor-pointer select-none items-start">
                    <input
                      type="checkbox"
                      checked={state as boolean}
                      onChange={(e) => (setState as (val: boolean) => void)(e.target.checked)}
                      className="mt-1 accent-accent"
                    />
                    <div>
                      <h4 className="text-xs font-bold text-heading">{label as string}</h4>
                      <p className="text-[10px] text-muted mt-0.5">{desc as string}</p>
                    </div>
                  </label>
                ))}
              </div>
            </div>
          </div>

          {/* Results Summary Box */}
          <div className="rounded-2xl dark-panel p-6 shadow-2xl flex flex-col justify-between min-h-[380px] sticky top-24">
            <div>
              <p className="text-[10px] font-extrabold uppercase tracking-widest text-accent-secondary">Estimated Cost Range</p>
              <h3 className="mt-4 text-3xl font-extrabold text-white">
                {currencySymbol} {formattedPrice}
                <span className="text-xs font-normal text-white/80 block mt-1">± 10% estimation range</span>
              </h3>
              <ul className="mt-6 space-y-2.5 text-xs text-white/90 font-semibold border-t border-white/10 pt-5">
                <li className="flex items-center gap-1.5">
                  <Icon name="check-circle" size={13} className="text-accent-secondary" />
                  Codebase ownership included
                </li>
                <li className="flex items-center gap-1.5">
                  <Icon name="check-circle" size={13} className="text-accent-secondary" />
                  Full mobile responsive grids
                </li>
                <li className="flex items-center gap-1.5">
                  <Icon name="check-circle" size={13} className="text-accent-secondary" />
                  Speed optimized default configs
                </li>
              </ul>
            </div>

            <div className="space-y-2 mt-6">
              <button
                type="button"
                onClick={handleCopySummary}
                className="inline-flex items-center justify-center gap-2 rounded-full font-bold uppercase tracking-wider text-xs px-4 py-2.5 bg-white/10 text-white hover:bg-white/20 transition-colors w-full text-center border border-white/20 cursor-pointer"
              >
                <Icon name={copied ? "check" : "code"} size={12} />
                {copied ? "Copied to Clipboard!" : "Copy Spec Summary"}
              </button>
              <Link href="/contact" className="inline-flex items-center justify-center gap-2 rounded-full font-bold uppercase tracking-wider text-xs px-4 py-3 bg-white text-primary hover:bg-accent-light hover:text-primary transition-colors w-full text-center">
                Submit Spec Proposal
                <Icon name="arrow-right" size={12} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
