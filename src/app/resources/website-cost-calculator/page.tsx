"use client";

import { useState } from "react";
import Link from "next/link";
import { PageHeader, PageShell } from "@/components/page-shell";
import { Icon } from "@/components/icon";

export default function WebsiteCostCalculator() {
  const [currency, setCurrency] = useState<"INR" | "USD">("INR");
  const [pages, setPages] = useState(5);
  const [design, setDesign] = useState<"template" | "custom" | "premium">("custom");
  const [cms, setCms] = useState(false);
  const [ecommerce, setEcommerce] = useState(false);
  const [auth, setAuth] = useState(false);
  const [seo, setSeo] = useState(false);

  // Estimation math
  const calculatePrice = () => {
    let basePriceUSD = 400;
    
    // Page cost
    basePriceUSD += pages * 45;

    // Design level multiplier
    if (design === "custom") basePriceUSD += 500;
    if (design === "premium") basePriceUSD += 1200;

    // Features
    if (cms) basePriceUSD += 300;
    if (ecommerce) basePriceUSD += 600;
    if (auth) basePriceUSD += 500;
    if (seo) basePriceUSD += 250;

    // Convert if currency is INR
    if (currency === "INR") {
      const rate = 83; // Standard conversion rate
      const price = basePriceUSD * rate;
      // Round to nearest 5k
      return Math.round(price / 5000) * 5000;
    }

    // Round to nearest 100
    return Math.round(basePriceUSD / 100) * 100;
  };

  const formattedPrice = calculatePrice().toLocaleString();

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
          <div className="rounded-2xl border border-subtle-border bg-white p-6 shadow-md grid gap-6">
            {/* Currency Selector */}
            <div className="flex justify-between items-center">
              <span className="text-sm font-bold text-heading">1. Select Currency</span>
              <span className="relative flex rounded-lg border border-subtle-border bg-background p-1 w-32">
                <button
                  type="button"
                  onClick={() => setCurrency("INR")}
                  className={`flex-1 rounded-md py-1 text-xs font-bold transition-all cursor-pointer ${
                    currency === "INR" ? "bg-white text-accent shadow-sm" : "text-dimmed"
                  }`}
                >
                  INR (₹)
                </button>
                <button
                  type="button"
                  onClick={() => setCurrency("USD")}
                  className={`flex-1 rounded-md py-1 text-xs font-bold transition-all cursor-pointer ${
                    currency === "USD" ? "bg-white text-accent shadow-sm" : "text-dimmed"
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
                <span className="text-accent">{pages} Pages</span>
              </div>
              <input
                type="range"
                min="1"
                max="50"
                value={pages}
                onChange={(e) => setPages(Number(e.target.value))}
                className="w-full h-1.5 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-accent"
              />
              <span className="text-[10px] text-dimmed">Includes headers, content sections, and contact layouts.</span>
            </div>

            <hr className="border-subtle-border/50" />

            {/* Radio Group for Design Tiers */}
            <div className="grid gap-3">
              <span className="text-sm font-bold text-heading">3. Visual Design Quality</span>
              <div className="grid gap-2">
                {[
                  ["template", "Template Theme Base", "Basic customized theme setup. Good for basic testing."],
                  ["custom", "Professional Custom Layout", "Tailored grid files design. Optimized conversions."],
                  ["premium", "Premium Immersive Branding", "Immersive custom visuals, 3D illustrations, scroll animations."]
                ].map(([val, label, desc]) => (
                  <label
                    key={val}
                    className={`rounded-xl border p-3 flex gap-3 cursor-pointer select-none transition-all ${
                      design === val ? "bg-accent-subtle/30 border-accent" : "border-subtle-border bg-slate-50/30"
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
          <div className="rounded-2xl dark-panel p-6 shadow-2xl flex flex-col justify-between h-[360px] sticky top-24">
            <div>
              <p className="text-[10px] font-extrabold uppercase tracking-widest text-cyan-200">Estimated Cost Range</p>
              <h3 className="mt-4 text-3xl font-extrabold text-white">
                {currency === "INR" ? "₹" : "$"} {formattedPrice}
                <span className="text-xs font-normal text-slate-300 block mt-1">± 10% estimation range</span>
              </h3>
              <ul className="mt-6 space-y-2.5 text-xs text-slate-200 font-semibold border-t border-white/10 pt-5">
                <li className="flex items-center gap-1.5">
                  <Icon name="check-circle" size={13} className="text-cyan-300" />
                  Codebase ownership included
                </li>
                <li className="flex items-center gap-1.5">
                  <Icon name="check-circle" size={13} className="text-cyan-300" />
                  Full mobile responsive grids
                </li>
                <li className="flex items-center gap-1.5">
                  <Icon name="check-circle" size={13} className="text-cyan-300" />
                  Speed optimized default configs
                </li>
              </ul>
            </div>

            <Link href="/contact" className="btn-primary w-full py-3 text-xs uppercase tracking-wider text-center font-bold">
              Submit Spec Proposal
              <Icon name="arrow-right" size={12} />
            </Link>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
