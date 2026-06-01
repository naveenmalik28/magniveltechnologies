import { Metadata } from "next";
import { ContactForm } from "@/components/contact-form";
import { PageHeader, PageShell } from "@/components/page-shell";
import { Icon } from "@/components/icon";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact Us | Magnivel Technologies",
  description: "Get in touch with Magnivel Technologies to discuss your software development needs. Free consultation for custom web apps, SaaS platforms, mobile apps, and AI solutions.",
  keywords: ["contact", "get in touch", "software consultation", "development inquiry"],
  openGraph: {
    title: "Contact Us | Magnivel Technologies",
    description: "Start your next software project with Magnivel Technologies. Have an idea? Tell us about your timeline and budget, and our team will follow up promptly.",
    url: "https://magnivel.com/contact",
    type: "website",
  },
  alternates: {
    canonical: "https://magnivel.com/contact",
  },
};

export default function ContactPage() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="Get In Touch"
        title="Start your next software project with Magnivel Technologies."
        description="Have an idea for a custom SaaS, enterprise dashboard, high-performance website, or mobile application? Tell us about your timeline and budget, and our engineering team will follow up promptly."
      />
      
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:grid lg:grid-cols-[0.8fr_1.2fr] lg:gap-12 lg:px-8 items-start">
        {/* Left Side Details */}
        <div className="rounded-xl border border-subtle-border bg-surface p-6 sm:p-8 shadow-2xl relative overflow-hidden glow-card mb-10 lg:mb-0 flex flex-col gap-6">
          <div>
            <h2 className="text-xl font-bold text-white">Business Connections</h2>
            <p className="mt-2 text-xs text-muted leading-relaxed">
              Partner with Magnivel Technologies to build stable, maintainable, and high-conversion software solutions.
            </p>
          </div>
          
          <div className="flex flex-col gap-4 border-t border-subtle-border/50 pt-5">
            <div className="flex gap-4 items-center">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent-subtle text-accent-light border border-accent/15">
                <Icon name="mail" size={16} />
              </span>
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-dimmed">Send an Inquiry</p>
                <a className="text-sm font-semibold text-white mt-0.5 hover:text-accent-light transition-colors" href={`mailto:${site.email}`}>
                  {site.email}
                </a>
              </div>
            </div>
            
            <div className="flex gap-4 items-center">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent-subtle text-accent-light border border-accent/15">
                <Icon name="globe" size={16} />
              </span>
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-dimmed">Official Hub</p>
                <a className="text-sm font-semibold text-white mt-0.5 hover:text-accent-light transition-colors" href={site.url} target="_blank" rel="noopener noreferrer">
                  {site.url.replace("https://", "")}
                </a>
              </div>
            </div>

            <div className="flex gap-4 items-center">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent-subtle text-accent-light border border-accent/15">
                <Icon name="shield" size={16} />
              </span>
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-dimmed">Secure Defaults</p>
                <p className="text-xs text-muted mt-0.5 font-medium">NDAs & data-encryption ready</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side Form */}
        <div className="w-full">
          <ContactForm />
        </div>
      </section>
    </PageShell>
  );
}
