import Link from "next/link";
import { Icon } from "@/components/icon";

export function PageCta({
  title = "Ready to Build Something Amazing?",
  description = "Let's discuss your next software, AI, or digital transformation project.",
  primaryLabel = "Book Consultation",
  primaryHref = "/contact",
}: {
  title?: string;
  description?: string;
  primaryLabel?: string;
  primaryHref?: string;
}) {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="glass-card relative overflow-hidden p-8 text-center sm:p-12">
        <div className="pointer-events-none absolute right-0 top-0 h-48 w-48 rounded-full bg-accent/15 blur-3xl" />
        <div className="pointer-events-none absolute left-0 bottom-0 h-40 w-40 rounded-full bg-accent-light/10 blur-3xl" />
        <h2 className="relative text-2xl font-extrabold text-heading sm:text-3xl">
          {title.includes("Amazing") ? (
            <>
              Ready to Build Something{" "}
              <span className="gradient-text">Amazing?</span>
            </>
          ) : (
            title
          )}
        </h2>
        <p className="relative mx-auto mt-4 max-w-2xl text-sm text-muted sm:text-base">
          {description}
        </p>
        <div className="relative mt-8 flex flex-wrap justify-center gap-4">
          <Link href={primaryHref} className="btn-primary">
            {primaryLabel}
            <Icon name="arrow-right" size={16} />
          </Link>
          <a href="mailto:contact@magnivel.com" className="btn-secondary">
            Contact Us
            <Icon name="mail" size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
