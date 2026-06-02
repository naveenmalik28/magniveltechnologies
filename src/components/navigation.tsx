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
  "Website Development",
  "Web Application Development",
  "Mobile App Development",
  "SaaS Development",
  "AI Solutions",
];

const socialLinks = [
  { label: "LinkedIn", href: site.socials.linkedin, icon: "linkedin" },
  { label: "Instagram", href: site.socials.instagram, icon: "instagram" },
];

export function Navigation() {
  return (
    <header className="sticky top-0 z-50 border-b border-subtle-border bg-background/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="group flex items-center gap-2.5 text-lg font-bold tracking-tight text-white">
          <Image 
            src="/logo.jpg" 
            alt="Magnivel Technologies Logo" 
            width={32} 
            height={32} 
            className="rounded-full object-cover transition-transform group-hover:scale-105 shadow-md shadow-accent/15" 
            priority
          />
          <span className="font-sans">
            Magnivel <span className="bg-gradient-to-r from-accent-light to-[#a855f7] bg-clip-text text-transparent group-hover:from-accent group-hover:to-[#8b5cf6] transition-all duration-300">Technologies</span>
          </span>
        </Link>
        <div className="hidden items-center gap-8 text-sm font-medium text-muted md:flex">
          {links.map(([label, href]) => (
            <Link 
              key={href} 
              href={href} 
              className="transition-colors hover:text-white relative py-1 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-accent after:transition-all hover:after:w-full"
            >
              {label}
            </Link>
          ))}
        </div>
        <div className="flex items-center gap-4">
          <Link
            href="/contact"
            className="rounded-lg bg-accent px-4 py-2.5 text-sm font-semibold text-white shadow-lg shadow-accent/20 hover:bg-accent-light hover:shadow-accent/30 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
          >
            Get Consultation
          </Link>
        </div>
      </nav>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-subtle-border bg-surface text-foreground">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 md:grid-cols-3 lg:px-8">
        <div className="flex flex-col gap-4">
          <Link href="/" className="group flex items-center gap-2.5 text-lg font-bold tracking-tight text-white">
            <Image 
              src="/logo.jpg" 
              alt="Magnivel Technologies Logo" 
              width={32} 
              height={32} 
              className="rounded-full object-cover shadow-md shadow-accent/10" 
            />
            <span className="font-sans">
              Magnivel <span className="bg-gradient-to-r from-accent-light to-[#a855f7] bg-clip-text text-transparent">Technologies</span>
            </span>
          </Link>
          <p className="max-w-sm text-sm text-muted leading-relaxed">
            High-performance websites, custom web applications, mobile experiences, and secure SaaS/AI integrations structured for speed, stability, and growth.
          </p>
          <div className="flex flex-col gap-3 pt-2">
            <p className="text-xs font-semibold uppercase tracking-wide text-white">Follow Us</p>
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.href}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Follow Magnivel Technologies on ${social.label}`}
                  title={social.label}
                  className="flex h-10 w-10 items-center justify-center rounded-lg border border-subtle-border bg-background text-muted transition-all hover:-translate-y-0.5 hover:border-accent/60 hover:text-white hover:shadow-lg hover:shadow-accent/10"
                >
                  <Icon name={social.icon} size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4 text-sm text-muted">
          <p className="font-semibold text-white tracking-wide uppercase text-xs">Contact & Support</p>
          <div className="flex flex-col gap-2">
            <a className="hover:text-white transition-colors flex items-center gap-2" href={`mailto:${site.email}`}>
              <span className="text-accent">✉</span> {site.email}
            </a>
            <a className="hover:text-white transition-colors flex items-center gap-2" href={site.url} target="_blank" rel="noopener noreferrer">
              <span className="text-accent">🌍</span> {site.url.replace("https://", "")}
            </a>
          </div>
        </div>
        <div className="flex flex-col gap-4 text-sm text-muted">
          <p className="font-semibold text-white tracking-wide uppercase text-xs">Core Services</p>
          <div className="flex flex-col gap-2">
            {serviceLinks.map((service) => (
              <Link 
                key={service} 
                className="hover:text-white transition-colors inline-flex items-center gap-1.5" 
                href="/services"
              >
                ✦ {service}
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-subtle-border/40 py-6 text-center text-xs text-dimmed">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p>© {new Date().getFullYear()} Magnivel Technologies. All rights reserved.</p>
          <p className="text-dimmed/50">Designed with passion for stable, secure software growth.</p>
        </div>
      </div>
    </footer>
  );
}
