import { Metadata } from "next";
import { ContactForm } from "@/components/contact-form";
import { Icon } from "@/components/icon";
import { PageHeader, PageShell } from "@/components/page-shell";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact Us | Magnivel Technologies",
  description:
    "Get in touch with Magnivel Technologies to discuss your software development needs. Free consultation for custom web apps, SaaS platforms, mobile apps, and AI solutions.",
  keywords: ["contact", "get in touch", "software consultation", "development inquiry"],
  openGraph: {
    title: "Contact Us | Magnivel Technologies",
    description:
      "Start your next software project with Magnivel Technologies. Have an idea? Tell us about your project requirements, and our team will follow up promptly.",
    url: "https://magnivel.com/contact",
    type: "website",
  },
  alternates: {
    canonical: "https://magnivel.com/contact",
  },
};

const contactDetails = [
  {
    icon: "mail",
    label: "Send an Inquiry",
    value: site.email,
    href: `mailto:${site.email}`,
  },
  {
    icon: "globe",
    label: "Official Hub",
    value: site.url.replace("https://", ""),
    href: site.url,
  },
  {
    icon: "clock",
    label: "Response Time",
    value: "Within 24 hours",
  },
  {
    icon: "shield",
    label: "Secure Defaults",
    value: "NDAs & data-encryption ready",
  },
];

export default function ContactPage() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="Get In Touch"
        title="Start your next software project with Magnivel Technologies."
        description="Have an idea for a custom SaaS, enterprise dashboard, high-performance website, or mobile application? Tell us about your project requirements, and our engineering team will follow up promptly."
      />

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:grid lg:grid-cols-[0.85fr_1.15fr] lg:gap-12 lg:px-8 items-start">
        <div className="glass-card mb-10 flex flex-col gap-6 p-6 sm:p-8 lg:mb-0">
          <div>
            <h2 className="text-xl font-extrabold text-heading">Business Connections</h2>
            <p className="mt-2 text-sm text-muted leading-relaxed">
              Partner with Magnivel Technologies to build stable, maintainable, and high-conversion software solutions.
            </p>
          </div>

          <div className="flex flex-col gap-4 border-t border-subtle-border pt-5">
            {contactDetails.map((item) => (
              <div key={item.label} className="flex items-center gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-accent/20 bg-accent/10 text-accent-dark">
                  <Icon name={item.icon} size={16} />
                </span>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-dimmed">{item.label}</p>
                  {item.href ? (
                    <a
                      className="mt-0.5 text-sm font-semibold text-foreground transition hover:text-accent-dark"
                      href={item.href}
                      target={item.icon === "globe" ? "_blank" : undefined}
                      rel={item.icon === "globe" ? "noopener noreferrer" : undefined}
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="mt-0.5 text-sm font-semibold text-foreground">{item.value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="rounded-xl border border-accent/20 bg-accent/5 p-4">
            <p className="text-xs font-bold text-accent-dark">Global Delivery</p>
            <p className="mt-1 text-xs text-muted leading-relaxed">
              Serving clients across India, North America, Europe, UAE, and Southeast Asia.
            </p>
          </div>
        </div>

        <div className="w-full">
          <ContactForm />
        </div>
      </section>
    </PageShell>
  );
}
