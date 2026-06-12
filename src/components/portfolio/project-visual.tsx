"use client";

import { TemplateFrame } from "./template-frame";

export type VisualType =
  | "analytics"
  | "dashboard"
  | "ai"
  | "saas"
  | "healthcare"
  | "mobile"
  | "realestate";

const urls: Record<VisualType, string> = {
  analytics: "leads.agencypro.io",
  dashboard: "ops.enterprisehub.com",
  ai: "support.aiassist.app",
  saas: "dashboard.analytics-saas.io",
  healthcare: "portal.healthsched.com",
  mobile: "shop.retailapp.com",
  realestate: "listings.apexproperties.ae",
};

export function ProjectVisual({ type }: { type: VisualType }) {
  const isMobile = type === "mobile";

  return (
    <TemplateFrame variant={isMobile ? "mobile" : "browser"} url={urls[type]}>
      {renderTemplate(type)}
    </TemplateFrame>
  );
}

function renderTemplate(type: VisualType) {
  switch (type) {
    case "analytics":
      return <AnalyticsTemplate />;
    case "dashboard":
      return <DashboardTemplate />;
    case "ai":
      return <AiChatTemplate />;
    case "saas":
      return <SaasTemplate />;
    case "healthcare":
      return <HealthcareTemplate />;
    case "mobile":
      return <MobileShopTemplate />;
    case "realestate":
      return <RealEstateTemplate />;
    default:
      return null;
  }
}

function AnalyticsTemplate() {
  return (
    <div className="flex h-full flex-col bg-[#0b1020] p-2.5 sm:p-3">
      <div className="flex items-center justify-between border-b border-white/8 pb-2">
        <div className="flex items-center gap-1.5">
          <div className="h-4 w-4 rounded bg-gradient-to-br from-accent to-accent-light" />
          <span className="text-[8px] font-bold text-white sm:text-[9px]">AgencyPro</span>
        </div>
        <div className="hidden gap-2 sm:flex">
          {["Services", "Work", "Contact"].map((l) => (
            <span key={l} className="text-[7px] text-white/40">{l}</span>
          ))}
        </div>
      </div>
      <div className="mt-2 flex flex-1 flex-col gap-2 sm:flex-row">
        <div className="flex flex-1 flex-col justify-center rounded-lg border border-white/8 bg-gradient-to-br from-accent/15 to-transparent p-2.5">
          <span className="text-[7px] font-bold uppercase tracking-wider text-accent-light">Convert More Leads</span>
          <p className="mt-1 text-[10px] font-extrabold leading-tight text-white sm:text-xs">
            Scale Your Agency With Intelligent Capture
          </p>
          <div className="mt-2 h-5 w-16 rounded bg-accent text-[7px] font-bold leading-5 text-white text-center">Get Started</div>
        </div>
        <div className="w-full rounded-lg border border-white/8 bg-white/5 p-2 sm:w-[42%]">
          <p className="text-[7px] font-bold text-white/60">Lead Analytics</p>
          <div className="mt-1.5 flex h-10 items-end gap-0.5">
            {[40, 65, 50, 80, 70, 95, 75].map((h, i) => (
              <div
                key={i}
                className="flex-1 rounded-sm bg-gradient-to-t from-accent to-accent-light"
                style={{ height: `${h}%` }}
              />
            ))}
          </div>
          <div className="mt-1.5 grid grid-cols-2 gap-1">
            <div className="rounded bg-emerald-400/15 px-1 py-0.5 text-center text-[7px] font-bold text-emerald-300">+3x Leads</div>
            <div className="rounded bg-accent/15 px-1 py-0.5 text-center text-[7px] font-bold text-accent-light">97 SEO</div>
          </div>
        </div>
      </div>
    </div>
  );
}

function DashboardTemplate() {
  return (
    <div className="flex h-full bg-[#0b1020]">
      <div className="hidden w-[22%] border-r border-white/8 bg-[#131a2e] p-2 sm:block">
        <div className="mb-3 h-3 w-3/4 rounded bg-white/10" />
        {["Overview", "Customers", "Workflows", "Reports"].map((item, i) => (
          <div
            key={item}
            className={`mb-1 rounded px-1.5 py-1 text-[7px] font-semibold ${i === 0 ? "bg-accent/20 text-accent-light" : "text-white/40"}`}
          >
            {item}
          </div>
        ))}
      </div>
      <div className="flex flex-1 flex-col p-2.5">
        <p className="text-[8px] font-bold text-white">Operations Overview</p>
        <div className="mt-2 grid grid-cols-2 gap-1.5 sm:grid-cols-4">
          {[
            { l: "Customers", v: "1,284" },
            { l: "Revenue", v: "$84K" },
            { l: "Tasks", v: "342" },
            { l: "Reports", v: "28" },
          ].map((s) => (
            <div key={s.l} className="rounded border border-white/8 bg-white/5 p-1.5">
              <p className="text-[6px] text-white/50">{s.l}</p>
              <p className="text-[9px] font-bold text-white">{s.v}</p>
            </div>
          ))}
        </div>
        <div className="mt-2 flex-1 rounded border border-white/8 bg-white/5 p-2">
          <div className="space-y-1.5">
            {[
              { l: "Sales Pipeline", w: 82 },
              { l: "Support Queue", w: 58 },
              { l: "Onboarding", w: 91 },
              { l: "Retention", w: 74 },
            ].map((row) => (
              <div key={row.l}>
                <div className="flex justify-between text-[6px] text-white/50">
                  <span>{row.l}</span>
                  <span>{row.w}%</span>
                </div>
                <div className="mt-0.5 h-1 rounded-full bg-white/10">
                  <div className="h-full rounded-full bg-gradient-to-r from-accent to-accent-light" style={{ width: `${row.w}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function AiChatTemplate() {
  return (
    <div className="flex h-full bg-[#0b1020]">
      <div className="hidden w-[30%] border-r border-white/8 bg-[#131a2e] p-2 sm:block">
        <p className="text-[7px] font-bold text-white/60">Tickets</p>
        {["#1842 Password reset", "#1841 Billing issue", "#1840 API access"].map((t, i) => (
          <div key={t} className={`mt-1 rounded px-1.5 py-1 text-[6px] ${i === 0 ? "bg-accent/15 text-accent-light" : "text-white/40"}`}>
            {t}
          </div>
        ))}
      </div>
      <div className="flex flex-1 flex-col p-2.5">
        <div className="flex items-center gap-1.5 border-b border-white/8 pb-2">
          <div className="h-4 w-4 rounded-full bg-gradient-to-br from-accent to-accent-secondary" />
          <span className="text-[8px] font-bold text-white">AI Support Agent</span>
          <span className="ml-auto rounded bg-emerald-400/20 px-1 text-[6px] text-emerald-300">Live</span>
        </div>
        <div className="flex flex-1 flex-col justify-end gap-1.5 py-2">
          <div className="max-w-[80%] rounded-lg rounded-bl-none bg-white/10 px-2 py-1.5 text-[7px] text-white/80">
            How can I reset my account password?
          </div>
          <div className="max-w-[85%] self-center rounded-lg bg-accent/15 px-2 py-1 text-[6px] text-accent-light">
            Routing to Account Specialist…
          </div>
          <div className="max-w-[80%] self-end rounded-lg rounded-br-none bg-emerald-400/15 px-2 py-1.5 text-[7px] text-emerald-200">
            Draft ready — 75% faster response ✓
          </div>
        </div>
        <div className="flex gap-1 rounded-lg border border-white/10 bg-white/5 p-1.5">
          <div className="flex-1 text-[6px] text-white/30">Type a message…</div>
          <div className="rounded bg-accent px-1.5 text-[6px] font-bold text-white">Send</div>
        </div>
      </div>
    </div>
  );
}

function SaasTemplate() {
  return (
    <div className="flex h-full flex-col bg-[#0b1020] p-2.5">
      <div className="flex items-center justify-between">
        <span className="text-[8px] font-bold text-white">Analytics SaaS</span>
        <span className="rounded-full bg-violet-400/20 px-1.5 py-0.5 text-[6px] font-bold text-violet-300">Pro Plan</span>
      </div>
      <div className="mt-2 grid grid-cols-3 gap-1.5">
        {[
          { l: "MRR", v: "$48K", c: "text-emerald-300" },
          { l: "Tenants", v: "120+", c: "text-accent-light" },
          { l: "Churn", v: "1.2%", c: "text-amber-300" },
        ].map((m) => (
          <div key={m.l} className="rounded border border-white/8 bg-white/5 p-1.5 text-center">
            <p className="text-[6px] text-white/50">{m.l}</p>
            <p className={`text-[9px] font-bold ${m.c}`}>{m.v}</p>
          </div>
        ))}
      </div>
      <div className="mt-2 flex-1 rounded border border-white/8 bg-white/5 p-2">
        <p className="text-[7px] font-semibold text-white/60">Usage Analytics</p>
        <svg viewBox="0 0 100 40" className="mt-1 h-full w-full" preserveAspectRatio="none">
          <polyline
            fill="none"
            stroke="url(#saasGrad)"
            strokeWidth="1.5"
            points="0,35 15,28 30,32 45,18 60,22 75,10 90,14 100,8"
          />
          <defs>
            <linearGradient id="saasGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#6366f1" />
              <stop offset="100%" stopColor="#06b6d4" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function HealthcareTemplate() {
  const days = ["M", "T", "W", "T", "F", "S", "S"];
  const calendarDays = Array.from({ length: 14 }, (_, i) => i + 1);
  const highlightedDays = [4, 9, 12]; // Mon, Wed, Fri appointments

  const appointments = [
    { time: "Mon 10:00", desc: "Dr. Sharma", on: true },
    { time: "Wed 2:30", desc: "Telemedicine", on: true },
    { time: "Fri 9:00", desc: "Follow-up", on: false },
  ];

  return (
    <div className="flex flex-col bg-[#0b1020] p-2.5 sm:p-3">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1.5">
          <div className="flex h-4 w-4 items-center justify-center rounded bg-gradient-to-br from-emerald-500 to-cyan-500">
            <span className="text-[6px] font-bold text-white">H</span>
          </div>
          <span className="text-[8px] font-bold text-white sm:text-[9px]">
            Patient Portal
          </span>
        </div>
        <span className="flex items-center gap-1 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-1.5 py-0.5 text-[6px] font-semibold text-emerald-300 sm:text-[7px]">
          <span className="h-1 w-1 rounded-full bg-emerald-400" />
          Secure
        </span>
      </div>

      {/* Calendar section */}
      <div className="mt-2 rounded-lg border border-white/8 bg-white/[0.03] p-2">
        {/* Day headers */}
        <div className="grid grid-cols-7 gap-0.5 text-center">
          {days.map((d, i) => (
            <span
              key={`${d}-${i}`}
              className="text-[6px] font-semibold uppercase text-white/40 sm:text-[7px]"
            >
              {d}
            </span>
          ))}
        </div>

        {/* Calendar grid with explicit cell height */}
        <div className="mt-1 grid grid-cols-7 gap-0.5">
          {calendarDays.map((day) => {
            const isHighlighted = highlightedDays.includes(day);
            return (
              <div
                key={day}
                className={`flex h-4 items-center justify-center rounded text-[5px] sm:h-5 sm:text-[6px] ${
                  isHighlighted
                    ? "border border-emerald-400/40 bg-emerald-400/15 font-bold text-emerald-300"
                    : "bg-white/5 text-white/30"
                }`}
              >
                {day}
              </div>
            );
          })}
        </div>
      </div>

      {/* Appointment list — always visible */}
      <div className="mt-2 space-y-1">
        {appointments.map((slot) => (
          <div
            key={slot.time}
            className="flex items-center gap-1.5 rounded-md border border-white/8 bg-white/5 px-2 py-1.5 sm:py-2"
          >
            <span
              className={`h-1.5 w-1.5 shrink-0 rounded-full ${
                slot.on ? "bg-emerald-400" : "bg-white/20"
              }`}
            />
            <span className="text-[7px] font-semibold text-white/80 sm:text-[8px]">
              {slot.time}
            </span>
            <span className="text-[6px] text-white/40 sm:text-[7px]">—</span>
            <span className="text-[6px] text-white/60 sm:text-[7px]">
              {slot.desc}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function MobileShopTemplate() {
  return (
    <div className="flex h-full flex-col bg-[#0b1020] p-2">
      <div className="flex items-center justify-between">
        <span className="text-[7px] font-bold text-white">Shop</span>
        <div className="flex gap-1">
          <div className="h-3 w-3 rounded bg-white/10" />
          <div className="h-3 w-3 rounded bg-white/10" />
        </div>
      </div>
      <div className="mt-1.5 rounded-lg bg-gradient-to-r from-accent/30 to-accent-light/20 p-2">
        <p className="text-[7px] font-bold text-white">Summer Sale</p>
        <p className="text-[6px] text-white/60">Up to 40% off</p>
      </div>
      <div className="mt-1.5 grid flex-1 grid-cols-2 gap-1">
        {[1, 2, 3, 4].map((n) => (
          <div key={n} className="flex flex-col rounded border border-white/8 bg-white/5 p-1">
            <div className="aspect-square rounded bg-gradient-to-br from-accent/20 to-accent-secondary/20" />
            <div className="mt-0.5 h-1 w-3/4 rounded bg-white/20" />
            <p className="mt-0.5 text-[6px] font-bold text-accent-light">${(n * 12 + 9).toFixed(0)}</p>
          </div>
        ))}
      </div>
      <div className="mt-1 flex justify-around border-t border-white/8 pt-1">
        {["Home", "Shop", "Cart", "Profile"].map((tab, i) => (
          <span key={tab} className={`text-[5px] ${i === 1 ? "text-accent-light font-bold" : "text-white/30"}`}>{tab}</span>
        ))}
      </div>
    </div>
  );
}

function RealEstateTemplate() {
  return (
    <div className="flex h-full flex-col bg-[#0b1020] p-2.5">
      <div className="flex items-center gap-2">
        <div className="flex-1 rounded border border-white/10 bg-white/5 px-2 py-1 text-[6px] text-white/40">
          Search properties…
        </div>
        <div className="rounded bg-accent px-1.5 py-1 text-[6px] font-bold text-white">QR</div>
      </div>
      <div className="mt-2 flex flex-1 gap-2">
        <div className="flex flex-1 flex-col gap-1.5">
          {[1, 2].map((n) => (
            <div key={n} className="flex gap-1.5 rounded border border-white/8 bg-white/5 p-1.5">
              <div className="h-8 w-10 shrink-0 rounded bg-gradient-to-br from-cyan-500/30 to-emerald-500/20" />
              <div className="flex-1">
                <p className="text-[7px] font-bold text-white">Luxury Villa {n}</p>
                <p className="text-[6px] text-white/50">Dubai Marina</p>
                <p className="text-[7px] font-bold text-accent-light">${n * 450}K</p>
              </div>
            </div>
          ))}
        </div>
        <div className="hidden w-[38%] rounded border border-white/8 bg-white/5 p-1 sm:block">
          <div className="relative h-full rounded bg-[#131a2e]">
            <div className="absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent-light shadow-lg shadow-accent-light/50" />
            <div className="absolute left-1/2 top-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 animate-ping rounded-full bg-accent-light/30" />
          </div>
        </div>
      </div>
    </div>
  );
}
