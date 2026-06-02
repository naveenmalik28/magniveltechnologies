import Link from "next/link";
import Image from "next/image";
import { site } from "@/lib/site";
import { Icon } from "@/components/icon";

const links = [
  ["About", "/about"],
  ["Services", "/services"],
  ["Portfolio", "/portfolio"],
  ["Technologies", "/technologies"],
  ["Contact", "/contact"],
];

const serviceLinks = [
  "Web Development",
  "Mobile App Development",
  "AI & Automation",
  "Custom Software",
  "Cloud & DevOps",
];

const socialLinks = [
  { label: "LinkedIn", href: site.socials.linkedin, icon: "linkedin" },
  { label: "Instagram", href: site.socials.instagram, icon: "instagram" },
];

export function Navigation() {
  return (
    <header className="sticky top-0 z-50 border-b border-subtle-border bg-white/86 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-5 px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="group flex min-w-0 items-center gap-2.5 text-base font-extrabold tracking-tight text-heading sm:text-lg">
          <Image
            src="/logo.jpg"
            alt="Magnivel Technologies logo"
            width={36}
            height={36}
            className="rounded-lg object-cover shadow-md shadow-accent/15 transition-transform group-hover:scale-105"
            priority
          />
          <span className="truncate">
            Magnivel <span className="gradient-text">Technologies</span>
          </span>
        </Link>

        <div className="hidden items-center gap-7 text-sm font-semibold text-muted md:flex">
          {links.map(([label, href]) => (
            <Link key={href} href={href} className="transition-colors hover:text-accent-dark">
              {label}
            </Link>
          ))}
        </div>

        <Link href="/contact" className="btn-primary px-4 py-2.5 text-sm">
          Get Consultation
        </Link>
      </nav>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="dark-panel border-t border-white/10">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 md:grid-cols-3 lg:px-8">
        <div className="flex flex-col gap-4">
          <Link href="/" className="group flex items-center gap-2.5 text-lg font-extrabold tracking-tight text-white">
            <Image
              src="/logo.jpg"
              alt="Magnivel Technologies logo"
              width={34}
              height={34}
              className="rounded-lg object-cover shadow-md shadow-cyan-400/20"
            />
            <span>
              Magnivel <span className="text-cyan-200">Technologies</span>
            </span>
          </Link>
          <p className="max-w-sm text-sm leading-relaxed text-slate-300">
            Scalable websites, mobile apps, AI-powered platforms, and custom software for businesses that need clean execution and dependable growth.
          </p>
          <div className="flex items-center gap-3 pt-2">
            {socialLinks.map((social) => (
              <a
                key={social.href}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Follow Magnivel Technologies on ${social.label}`}
                title={social.label}
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-slate-300 transition-all hover:-translate-y-0.5 hover:border-cyan-300/60 hover:text-white"
              >
                <Icon name={social.icon} size={18} />
              </a>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-4 text-sm text-slate-300">
          <p className="text-xs font-bold uppercase tracking-widest text-white">Contact</p>
          <a className="flex items-center gap-2 transition-colors hover:text-white" href={`mailto:${site.email}`}>
            <Icon name="mail" size={16} className="text-cyan-300" />
            {site.email}
          </a>
          <a className="flex items-center gap-2 transition-colors hover:text-white" href={site.url} target="_blank" rel="noopener noreferrer">
            <Icon name="globe" size={16} className="text-cyan-300" />
            {site.url.replace("https://", "")}
          </a>
          <p className="flex items-center gap-2">
            <Icon name="clock" size={16} className="text-cyan-300" />
            Response within 24 hours
          </p>
        </div>

        <div className="flex flex-col gap-4 text-sm text-slate-300">
          <p className="text-xs font-bold uppercase tracking-widest text-white">Core Services</p>
          <div className="grid gap-2">
            {serviceLinks.map((service) => (
              <Link key={service} className="inline-flex items-center gap-2 transition-colors hover:text-white" href="/services">
                <Icon name="chevron-right" size={14} className="text-cyan-300" />
                {service}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 py-6 text-xs text-slate-400">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 sm:flex-row sm:px-6 lg:px-8">
          <p>Copyright {new Date().getFullYear()} Magnivel Technologies. All rights reserved.</p>
          <p>Built for stable, secure software growth.</p>
        </div>
      </div>
    </footer>
  );
}
