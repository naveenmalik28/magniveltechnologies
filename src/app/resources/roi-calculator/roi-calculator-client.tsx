"use client";

import { useState } from "react";
import Link from "next/link";
import { PageHeader, PageShell } from "@/components/page-shell";
import { Icon } from "@/components/icon";

export function RoiCalculatorClient() {
  const [currency, setCurrency] = useState<"INR" | "USD">("USD");
  const [hours, setHours] = useState(15);
  const [rate, setRate] = useState(30);
  const [staff, setStaff] = useState(3);
  const [copied, setCopied] = useState(false);

  const calculateWeeklyCost = () => hours * rate * staff;
  const calculateYearlyCost = () => calculateWeeklyCost() * 52;
  const calculateYearlySavings = () => {
    return Math.round(calculateYearlyCost() * 0.8);
  };

  const cSign = currency === "INR" ? "₹" : "$";

  const handleCopySummary = () => {
    const summaryText = `Magnivel Automation ROI Summary:\n- Annual Cost Savings: ${cSign}${calculateYearlySavings().toLocaleString()}\n- Current Manual Annual Cost: ${cSign}${calculateYearlyCost().toLocaleString()}\n- Inputs: ${hours} hrs/wk, ${staff} team members, ${cSign}${rate}/hr rate`;
    navigator.clipboard.writeText(summaryText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <PageShell>
      <PageHeader
        eyebrow="Interactive Tool"
        title="AI & Software ROI Automation Calculator"
        description="Estimate operational cost savings. Configure labor hours, employee counts, and average wage rates to calculate financial gains from workflow automation."
      />

      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-[1.5fr_1fr] items-start">
          <div className="rounded-2xl border border-subtle-border bg-surface p-6 shadow-md grid gap-6">
            <div className="flex justify-between items-center">
              <span className="text-sm font-bold text-heading">1. Choose Currency</span>
              <span className="relative flex rounded-lg border border-subtle-border bg-background p-1 w-32">
                <button
                  type="button"
                  onClick={() => {
                    setCurrency("INR");
                    setRate(800);
                  }}
                  className={`flex-1 rounded-md py-1 text-xs font-bold transition-all cursor-pointer ${
                    currency === "INR" ? "bg-accent text-white shadow-sm" : "text-muted"
                  }`}
                >
                  INR (₹)
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setCurrency("USD");
                    setRate(30);
                  }}
                  className={`flex-1 rounded-md py-1 text-xs font-bold transition-all cursor-pointer ${
                    currency === "USD" ? "bg-accent text-white shadow-sm" : "text-muted"
                  }`}
                >
                  USD ($)
                </button>
              </span>
            </div>

            <hr className="border-subtle-border/50" />

            <div className="grid gap-2">
              <div className="flex justify-between items-center text-sm font-bold text-heading">
                <span>2. Manual Hours Spent per Week (Per Person)</span>
                <span className="text-accent-dark">{hours} Hours</span>
              </div>
              <input
                type="range"
                min="1"
                max="60"
                value={hours}
                onChange={(e) => setHours(Number(e.target.value))}
                className="w-full h-1.5 bg-background-secondary rounded-lg appearance-none cursor-pointer accent-accent"
              />
              <span className="text-[10px] text-muted">Includes data copy-paste, file sorting, and manual verification tasks.</span>
            </div>

            <hr className="border-subtle-border/50" />

            <div className="grid gap-2">
              <div className="flex justify-between items-center text-sm font-bold text-heading">
                <span>3. Average Hourly Wage</span>
                <span className="text-accent-dark">{cSign}{rate} / Hour</span>
              </div>
              <input
                type="range"
                min={currency === "INR" ? 150 : 10}
                max={currency === "INR" ? 3000 : 150}
                step={currency === "INR" ? 50 : 5}
                value={rate}
                onChange={(e) => setRate(Number(e.target.value))}
                className="w-full h-1.5 bg-background-secondary rounded-lg appearance-none cursor-pointer accent-accent"
              />
            </div>

            <hr className="border-subtle-border/50" />

            <div className="grid gap-2">
              <div className="flex justify-between items-center text-sm font-bold text-heading">
                <span>4. Number of Team Members Affected</span>
                <span className="text-accent-dark">{staff} People</span>
              </div>
              <input
                type="range"
                min="1"
                max="50"
                value={staff}
                onChange={(e) => setStaff(Number(e.target.value))}
                className="w-full h-1.5 bg-background-secondary rounded-lg appearance-none cursor-pointer accent-accent"
              />
            </div>
          </div>

          <div className="rounded-2xl dark-panel p-6 shadow-2xl flex flex-col justify-between min-h-[380px] sticky top-24">
            <div>
              <p className="text-[10px] font-extrabold uppercase tracking-widest text-accent-secondary">Estimated Annual ROI Savings</p>
              <h3 className="mt-4 text-3xl font-extrabold text-white">
                {cSign} {calculateYearlySavings().toLocaleString()}
                <span className="text-xs font-normal text-white/80 block mt-1">80% automation efficiency factor</span>
              </h3>
              <ul className="mt-6 space-y-2.5 text-xs text-white/90 font-semibold border-t border-white/10 pt-5">
                <li className="flex justify-between items-center">
                  <span className="text-white/70 font-normal">Current Annual Cost:</span>
                  <span>{cSign}{calculateYearlyCost().toLocaleString()}</span>
                </li>
                <li className="flex justify-between items-center">
                  <span className="text-white/70 font-normal">Weekly Hours Saved:</span>
                  <span>{Math.round(hours * staff * 0.8)} Hours</span>
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
                {copied ? "Copied to Clipboard!" : "Copy ROI Summary"}
              </button>
              <Link href="/contact" className="inline-flex items-center justify-center gap-2 rounded-full font-bold uppercase tracking-wider text-xs px-4 py-3 bg-white text-primary hover:bg-accent-light hover:text-primary transition-colors w-full text-center">
                Automate Workflows
                <Icon name="arrow-right" size={12} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
