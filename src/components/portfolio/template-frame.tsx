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
            <div className="aspect-[9/16] overflow-hidden bg-[#0b1020]">{children}</div>
            <div className="flex justify-center bg-[#131a2e] py-1">
              <div className="h-1 w-8 rounded-full bg-white/15" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex h-full items-center justify-center p-4 sm:p-6">
      <div className="relative w-full max-w-[92%]">
        <div className="absolute -inset-2 rounded-2xl bg-gradient-to-br from-accent/25 via-transparent to-accent-light/20 blur-2xl" />
        <div className="relative overflow-hidden rounded-xl border border-white/15 bg-[#131a2e] shadow-2xl shadow-black/40">
          <div className="flex items-center gap-2 border-b border-white/10 bg-[#0b1020]/90 px-3 py-2">
            <span className="h-2 w-2 rounded-full bg-red-400/90" />
            <span className="h-2 w-2 rounded-full bg-amber-400/90" />
            <span className="h-2 w-2 rounded-full bg-emerald-400/90" />
            <div className="mx-auto flex max-w-[55%] flex-1 items-center justify-center rounded-md border border-white/8 bg-white/5 px-2 py-0.5">
              <span className="truncate font-mono text-[8px] text-white/50 sm:text-[9px]">{url}</span>
            </div>
          </div>
          <div className="aspect-[16/10] overflow-hidden bg-[#0b1020]">{children}</div>
        </div>
      </div>
    </div>
  );
}
