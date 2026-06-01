import { Footer, Navigation } from "./navigation";

export function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground selection:bg-accent/30 selection:text-white">
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
    <section className="relative overflow-hidden border-b border-subtle-border py-20 sm:py-24 bg-grid gradient-mesh-subtle">
      {/* Background radial glow */}
      <div className="absolute top-0 left-1/4 h-[350px] w-[600px] -translate-x-1/2 rounded-full bg-accent/10 blur-[100px] pointer-events-none" />
      
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-accent-subtle px-3 py-1 text-xs font-semibold tracking-wider uppercase text-accent-light border border-accent/10 shadow-sm animate-fade-in">
          {eyebrow}
        </span>
        <h1 className="mt-6 max-w-4xl text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl leading-tight">
          {title}
        </h1>
        <p className="mt-6 max-w-2xl text-lg sm:text-xl leading-relaxed text-muted animate-fade-up delay-150">
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
      <span className="text-xs font-bold uppercase tracking-widest text-accent-light bg-accent-subtle/50 px-2.5 py-1 rounded border border-accent/5">
        {eyebrow}
      </span>
      <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl leading-tight">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base sm:text-lg leading-relaxed text-muted">
          {description}
        </p>
      ) : null}
    </div>
  );
}
