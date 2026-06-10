"use client";

import { useState } from "react";
import Link from "next/link";
import { PageHeader, PageShell } from "@/components/page-shell";
import { Icon } from "@/components/icon";

export default function ROICalculator() {
  const [currency, setCurrency] = useState<"INR" | "USD">("USD");
  const [hours, setHours] = useState(15);
  const [rate, setRate] = useState(30);
  const [staff, setStaff] = useState(3);

  const calculateWeeklyCost = () => hours * rate * staff;
  const calculateYearlyCost = () => calculateWeeklyCost() * 52;
  const calculateYearlySavings = () => {
    // Standard automation ROI averages 80% overhead reduction
    return Math.round(calculateYearlyCost() * 0.8);
  };

  const cSign = currency === "INR" ? "₹" : "$";

  return (
    <PageShell>
      <PageHeader
        eyebrow="Interactive Tool"
        title="AI & Software ROI Automation Calculator"
        description="Estimate operational cost savings. Configure labor hours, employee counts, and average wage rates to calculate financial gains from workflow automation."
      />

      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-[1.5fr_1fr] items-start">
          {/* Controls box */}
          <div className="rounded-2xl border border-subtle-border bg-surface p-6 shadow-md grid gap-6">
            {/* Currency selector */}
            <div className="flex justify-between items-center">
              <span className="text-sm font-bold text-heading">1. Choose Currency</span>
              <span className="relative flex rounded-lg border border-subtle-border bg-background p-1 w-32">
                <button
                  type="button"
                  onClick={() => {
                    setCurrency("INR");
                    setRate(800); // Set default INR rate
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
                    setRate(30); // Set default USD rate
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

            {/* Slider for Hours */}
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
                className="w-full h-1.5 bg-white/10 rounded-lg appearance-none cursor-pointer accent-accent"
              />
              <span className="text-[10px] text-muted">Includes data copy-paste, file sorting, and manual verification tasks.</span>
            </div>

            <hr className="border-subtle-border/50" />

            {/* Slider for Hourly rate */}
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
                className="w-full h-1.5 bg-white/10 rounded-lg appearance-none cursor-pointer accent-accent"
              />
              <span className="text-[10px] text-muted">Average hourly cost including employee benefits and overheads.</span>
            </div>

            <hr className="border-subtle-border/50" />

            {/* Slider for Staff count */}
            <div className="grid gap-2">
              <div className="flex justify-between items-center text-sm font-bold text-heading">
                <span>4. Number of Employees Executing Task</span>
                <span className="text-accent-dark">{staff} Staff</span>
              </div>
              <input
                type="range"
                min="1"
                max="20"
                value={staff}
                onChange={(e) => setStaff(Number(e.target.value))}
                className="w-full h-1.5 bg-white/10 rounded-lg appearance-none cursor-pointer accent-accent"
              />
              <span className="text-[10px] text-muted">Number of team members performing this repetitive process.</span>
            </div>
          </div>

          {/* Savings Summary */}
          <div className="rounded-2xl dark-panel p-6 shadow-2xl flex flex-col justify-between h-[360px] sticky top-24">
            <div>
              <p className="text-[10px] font-extrabold uppercase tracking-widest text-cyan-200">Estimated Annual Savings</p>
              <h3 className="mt-4 text-3xl font-extrabold text-white">
                {cSign} {calculateYearlySavings().toLocaleString()}
                <span className="text-xs font-normal text-slate-300 block mt-1">Based on 80% automation ratios</span>
              </h3>
              
              <div className="mt-6 border-t border-white/10 pt-5 text-xs text-slate-200 grid gap-2 font-semibold">
                <div className="flex justify-between">
                  <span className="text-slate-400">Current Cost / Week:</span>
                  <span>{cSign} {calculateWeeklyCost().toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Current Cost / Year:</span>
                  <span>{cSign} {calculateYearlyCost().toLocaleString()}</span>
                </div>
              </div>
            </div>

            <Link href="/contact" className="btn-primary w-full py-3 text-xs uppercase tracking-wider text-center font-bold">
              Build Automation System
              <Icon name="arrow-right" size={12} />
            </Link>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
