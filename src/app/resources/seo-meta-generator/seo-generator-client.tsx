"use client";

import { useState } from "react";
import { PageHeader, PageShell } from "@/components/page-shell";
import { Icon } from "@/components/icon";

export function SeoGeneratorClient() {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [slug, setSlug] = useState("my-page-url");
  const [copied, setCopied] = useState(false);

  const titleLength = title.length;
  const descLength = desc.length;

  const getTitleStatus = () => {
    if (titleLength === 0) return { label: "Empty", class: "text-dimmed" };
    if (titleLength < 40) return { label: "Too Short", class: "text-amber-500 font-bold" };
    if (titleLength <= 60) return { label: "Optimal (40-60)", class: "text-accent font-bold" };
    return { label: "Too Long (Over 60)", class: "text-red-400 font-bold" };
  };

  const getDescStatus = () => {
    if (descLength === 0) return { label: "Empty", class: "text-dimmed" };
    if (descLength < 110) return { label: "Too Short", class: "text-amber-500 font-bold" };
    if (descLength <= 160) return { label: "Optimal (110-160)", class: "text-accent font-bold" };
    return { label: "Too Long (Over 160)", class: "text-red-400 font-bold" };
  };

  const handleCopy = () => {
    const xml = `<title>${title || "Page Title"}</title>\n<meta name="description" content="${desc || "Page Description"}" />`;
    navigator.clipboard.writeText(xml);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <PageShell>
      <PageHeader
        eyebrow="Interactive Tool"
        title="SEO Metadata Tags Builder & Preview"
        description="Verify your meta tags before indexing. Write titles and descriptions, monitor character lengths, and preview how the snippet will look in Google Search."
      />

      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-[1.2fr_1.8fr] items-start">
          <div className="rounded-2xl border border-subtle-border bg-surface p-6 shadow-md grid gap-5">
            <label className="grid gap-2 text-sm font-semibold text-heading">
              <div className="flex justify-between items-center text-xs">
                <span>1. Meta Title Tag</span>
                <span className={getTitleStatus().class}>{titleLength} chars - {getTitleStatus().label}</span>
              </div>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="e.g. Magnivel Technologies | Premium Software & AI Solutions"
                className="w-full rounded-lg border border-subtle-border bg-background px-3.5 py-2.5 text-xs sm:text-sm text-foreground placeholder:text-dimmed focus:outline-none focus:border-accent"
              />
            </label>

            <label className="grid gap-2 text-sm font-semibold text-heading">
              <div className="flex justify-between items-center text-xs">
                <span>2. Meta Description Snippet</span>
                <span className={getDescStatus().class}>{descLength} chars - {getDescStatus().label}</span>
              </div>
              <textarea
                rows={3}
                value={desc}
                onChange={(e) => setDesc(e.target.value)}
                placeholder="e.g. We design and build secure, fast, and scalable digital products. Contact our AI and software engineering team today for a free consultation."
                className="w-full rounded-lg border border-subtle-border bg-background px-3.5 py-2.5 text-xs sm:text-sm text-foreground placeholder:text-dimmed focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/15 resize-none"
              />
            </label>

            <label className="grid gap-2 text-sm font-semibold text-heading">
              <span>3. URL slug</span>
              <input
                type="text"
                value={slug}
                onChange={(e) => setSlug(e.target.value.toLowerCase().replace(/\s+/g, "-"))}
                placeholder="e.g. website-development-services"
                className="w-full rounded-lg border border-subtle-border bg-background px-3.5 py-2.5 text-xs sm:text-sm text-foreground placeholder:text-dimmed focus:outline-none focus:border-accent"
              />
            </label>
          </div>

          <div className="grid gap-6">
            <div className="rounded-2xl border border-subtle-border bg-surface p-6 shadow-md">
              <span className="font-mono text-[10px] uppercase text-muted tracking-wider font-bold block mb-4 border-b border-subtle-border pb-2">
                Google Desktop Search Snippet Preview
              </span>
              <div className="font-sans max-w-xl text-left bg-slate-50 p-4 rounded-xl border border-slate-200">
                <span className="text-xs text-slate-600 block truncate leading-none">
                  https://magnivel.com &gt; {slug || "page-path"}
                </span>
                <h3 className="mt-1.5 text-base text-blue-800 hover:underline cursor-pointer font-normal line-clamp-1">
                  {title || "Magnivel Technologies — Enter title text on left..."}
                </h3>
                <p className="mt-1 text-xs text-slate-600 leading-normal line-clamp-2">
                  {desc || "Enter meta description text on left to preview Google Search snippet appearance..."}
                </p>
              </div>
            </div>

            <div className="rounded-2xl border border-subtle-border bg-surface p-6 shadow-md grid gap-3">
              <div className="flex justify-between items-center">
                <span className="text-xs font-bold uppercase tracking-wider text-muted">HTML Tags Code Snippet</span>
                <button
                  type="button"
                  onClick={handleCopy}
                  className="inline-flex items-center gap-1.5 rounded-lg border border-subtle-border bg-background px-3 py-1.5 text-xs font-bold text-heading hover:border-accent cursor-pointer transition-colors"
                >
                  <Icon name={copied ? "check" : "code"} size={14} />
                  {copied ? "Copied!" : "Copy HTML"}
                </button>
              </div>

              <pre className="rounded-xl border border-subtle-border bg-background p-3 text-xs font-mono text-foreground overflow-x-auto whitespace-pre-wrap">
                {`<title>${title || "Page Title"}</title>\n<meta name="description" content="${desc || "Page Description"}" />`}
              </pre>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
