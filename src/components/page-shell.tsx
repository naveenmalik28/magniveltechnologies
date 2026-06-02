import { Footer, Navigation } from "./navigation";

export function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground selection:bg-accent/20 selection:text-heading">
      <Navigation />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}

export function PageHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <section className="relative overflow-hidden border-b border-subtle-border bg-grid gradient-mesh-subtle py-20 sm:py-24">
      <div className="absolute left-1/2 top-0 h-72 w-[42rem] -translate-x-1/2 rounded-full bg-cyan-subtle blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <span className="inline-flex items-center gap-2 rounded-full border border-accent/15 bg-white px-3 py-1 text-xs font-bold uppercase tracking-widest text-accent-dark shadow-sm">
          <span className="h-1.5 w-1.5 rounded-full bg-accent-light" />
          {eyebrow}
        </span>
        <h1 className="mt-6 max-w-4xl text-4xl font-extrabold leading-tight tracking-tight text-heading sm:text-5xl lg:text-6xl">
          {title}
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted sm:text-xl">
          {description}
        </p>
      </div>
    </section>
  );
}

export function SectionTitle({
  eyebrow,
  title,
  description,
  className = "",
}: {
  eyebrow: string;
  title: string;
  description?: string;
  className?: string;
}) {
  return (
    <div className={`max-w-3xl ${className}`}>
      <span className="inline-flex rounded-full border border-accent/15 bg-accent-subtle px-3 py-1 text-xs font-bold uppercase tracking-widest text-accent-dark">
        {eyebrow}
      </span>
      <h2 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight text-heading sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}
