import { ContactForm } from "@/components/contact-form";
import { PageHeader, PageShell } from "@/components/page-shell";
import { site } from "@/lib/site";

export const metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="Contact"
        title="Start your Magnivel Technologies project."
        description="Send an inquiry for websites, web apps, mobile apps, SaaS development, AI integration or custom software."
      />
      <section className="mx-auto grid max-w-7xl gap-8 px-4 py-16 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
        <div className="rounded-lg border border-emerald-950/10 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-emerald-950">Business contact</h2>
          <a className="mt-5 block text-emerald-700" href={`mailto:${site.email}`}>
            {site.email}
          </a>
          <a className="mt-3 block text-emerald-700" href={site.url}>
            {site.url}
          </a>
        </div>
        <ContactForm />
      </section>
    </PageShell>
  );
}
