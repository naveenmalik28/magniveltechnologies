"use client";

import { type ReactNode } from "react";

export function TemplateFrame({
  children,
  variant = "browser",
  url = "app.magnivel.com",
}: {
  children: ReactNode;
  variant?: "browser" | "mobile";
  url?: string;
}) {
  if (variant === "mobile") {
    return (
      <div className="flex h-full items-center justify-center p-4 sm:p-6">
        <div className="relative w-[42%] min-w-[100px] max-w-[140px]">
          <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-accent/30 to-accent-light/20 blur-xl" />
          <div className="relative overflow-hidden rounded-[1.4rem] border-2 border-white/25 bg-[#0b1020] shadow-2xl">
            <div className="flex justify-center bg-[#131a2e] py-1.5">
              <div className="h-1 w-10 rounded-full bg-white/20" />
            </div>
            <div className="aspect-[9/16] overflow-hidden bg-[#0b1020]">
              {children}
            </div>
            <div className="flex justify-center bg-[#131a2e] py-1">
              <div className="h-1 w-8 rounded-full bg-white/15" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex h-full items-center justify-center p-3 sm:p-4 md:p-6">
      <div className="relative w-full max-w-[94%]">
        <div className="absolute -inset-2 rounded-2xl bg-gradient-to-br from-accent/25 via-transparent to-accent-light/20 blur-2xl" />
        <div className="relative overflow-hidden rounded-xl border border-white/15 bg-[#131a2e] shadow-2xl shadow-black/40">
          {/* Browser chrome */}
          <div className="flex items-center gap-1.5 border-b border-white/10 bg-[#0b1020]/90 px-2.5 py-1.5 sm:gap-2 sm:px-3 sm:py-2">
            <span className="h-1.5 w-1.5 rounded-full bg-red-400/90 sm:h-2 sm:w-2" />
            <span className="h-1.5 w-1.5 rounded-full bg-amber-400/90 sm:h-2 sm:w-2" />
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400/90 sm:h-2 sm:w-2" />
            <div className="mx-auto flex max-w-[55%] flex-1 items-center justify-center rounded-md border border-white/8 bg-white/5 px-2 py-0.5">
              <span className="truncate font-mono text-[7px] text-white/50 sm:text-[9px]">
                {url}
              </span>
            </div>
          </div>
          {/* Content area — no fixed aspect-ratio, uses natural height */}
          <div className="overflow-hidden bg-[#0b1020]">{children}</div>
        </div>
      </div>
    </div>
  );
}
