"use client";

import { useState } from "react";
import { PageHeader, PageShell } from "@/components/page-shell";
import { Icon } from "@/components/icon";

export default function QRCodeGenerator() {
  const [text, setText] = useState("https://www.magnivel.com");
  const [color, setColor] = useState("#0f172a");

  // Clean hex code (strip #) for API compat
  const cleanColor = color.replace("#", "");
  const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&color=${cleanColor}&data=${encodeURIComponent(text || "Magnivel")}`;

  return (
    <PageShell>
      <PageHeader
        eyebrow="Interactive Tool"
        title="Custom QR Code Generator"
        description="Create dynamic QR codes. Input your URL or text, choose your brand hex color, and generate clean QR codes ready to download."
      />

      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-[1.5fr_1fr] items-center">
          {/* Controls box */}
          <div className="rounded-2xl border border-subtle-border bg-white p-6 shadow-md grid gap-5">
            {/* Input URL/Text */}
            <label className="grid gap-2 text-sm font-semibold text-heading">
              <span>1. Enter URL or Text to Encode</span>
              <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="e.g. https://www.example.com"
                className="w-full rounded-lg border border-subtle-border bg-white px-3.5 py-2.5 text-xs sm:text-sm text-heading focus:outline-none focus:border-accent"
              />
            </label>

            {/* Color Picker */}
            <label className="grid gap-2 text-sm font-semibold text-heading">
              <span>2. Customize QR Color</span>
              <div className="flex gap-3 items-center">
                <input
                  type="color"
                  value={color}
                  onChange={(e) => setColor(e.target.value)}
                  className="h-9 w-12 rounded border border-subtle-border cursor-pointer bg-white"
                />
                <input
                  type="text"
                  value={color.toUpperCase()}
                  onChange={(e) => setColor(e.target.value)}
                  className="rounded-lg border border-subtle-border px-3 py-1.5 text-xs font-mono font-semibold w-24 text-heading focus:outline-none focus:border-accent"
                />
              </div>
            </label>
          </div>

          {/* QR Display Card */}
          <div className="rounded-2xl border border-subtle-border bg-white p-6 shadow-md text-center flex flex-col items-center justify-center">
            <span className="font-mono text-[10px] uppercase text-dimmed tracking-wider font-bold block mb-4">
              Generated QR Code Preview
            </span>
            <div className="h-52 w-52 rounded-xl border border-slate-200 bg-slate-50 flex items-center justify-center overflow-hidden shadow-inner p-2.5">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={qrUrl}
                alt="Dynamic QR Code"
                className="object-contain"
                width={200}
                height={200}
              />
            </div>
            <p className="mt-4 text-[10px] text-dimmed leading-normal">
              Scan with your smartphone camera to load encoded data immediately.
            </p>
            <a
              href={qrUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary w-full py-2 text-xs font-bold mt-5 inline-flex items-center justify-center gap-1.5 cursor-pointer"
            >
              <Icon name="external-link" size={13} />
              Open Image File
            </a>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
