"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { site } from "@/lib/site";
import { Icon } from "@/components/icon";

const servicesList = [
  { label: "Website Development", href: "/website-development", desc: "Corporate sites, CMS, and landing pages", icon: "globe" },
  { label: "Web Application Development", href: "/web-application-development", desc: "Interactive customer portals & dashboards", icon: "globe" },
  { label: "SaaS Development", href: "/saas-development", desc: "Multi-tenant subscription systems", icon: "layers" },
  { label: "E-commerce Development", href: "/ecommerce-development", desc: "High-performance online stores", icon: "layers" },
  { label: "Mobile App Development", href: "/mobile-app-development", desc: "iOS, Android, cross-platform apps", icon: "smartphone" },
  { label: "AI Solutions", href: "/ai-solutions", desc: "Private knowledge bases & LLM tools", icon: "brain" },
  { label: "UI/UX Design", href: "/ui-ux-design", desc: "Figma wireframes & design systems", icon: "palette" },
  { label: "API Development", href: "/api-development", desc: "RESTful, GraphQL, & integrations", icon: "server" },
  { label: "Custom Software", href: "/custom-software-development", desc: "Tailored enterprise operations panels", icon: "code" },
  { label: "Ready Websites", href: "/ready-websites", desc: "Browse & purchase pre-built websites", icon: "globe" },
];

const pricingList = [
  { label: "Website Cost (India)", href: "/website-development-cost-india", desc: "Indian web budgets & parameters" },
  { label: "Mobile App Cost", href: "/mobile-app-development-cost", desc: "iOS & Android app estimations" },
  { label: "Custom Software Cost", href: "/custom-software-cost", desc: "Enterprise application factors" },
  { label: "AI Chatbot Cost", href: "/ai-chatbot-development-cost", desc: "Chatbots & LLM scaling costs" },
  { label: "SaaS Platform Cost", href: "/saas-development-cost", desc: "Multi-tenant MVP architectures" },
];

const industriesList = [
  { label: "Schools", href: "/software-for-schools", icon: "book" },
  { label: "Colleges", href: "/software-for-colleges", icon: "book-open" },
  { label: "Healthcare", href: "/software-for-healthcare", icon: "shield" },
  { label: "Real Estate", href: "/software-for-real-estate", icon: "map-pin" },
  { label: "Restaurants", href: "/software-for-restaurants", icon: "clock" },
  { label: "Manufacturing", href: "/software-for-manufacturing", icon: "wrench" },
  { label: "Startups", href: "/software-for-startups", icon: "rocket" },
];

const resourceList = [
  { label: "Expert Blog", href: "/blog", desc: "AI, Web, & Startup insights", icon: "message-circle" },
  { label: "Resource Center", href: "/resources", desc: "Guides, tools & checklists hub", icon: "server" },
  { label: "Checklists", href: "/checklists", desc: "Interactive launch check-lists", icon: "check-circle" },
  { label: "Templates", href: "/templates", desc: "Prototyping & specs files", icon: "palette" },
  { label: "Guides & Manuals", href: "/guides", desc: "AI & SEO implementation guides", icon: "book" },
];

const toolsList = [
  { label: "Website Cost Calculator", href: "/resources/website-cost-calculator" },
  { label: "AI Prompt Generator", href: "/resources/ai-prompt-generator" },
  { label: "SEO Meta Generator", href: "/resources/seo-meta-generator" },
  { label: "QR Code Generator", href: "/resources/qr-code-generator" },
  { label: "ROI Automation Calculator", href: "/resources/roi-calculator" },
];

const techList = [
  { label: "Python Development", href: "/python-development" },
  { label: "React Development", href: "/react-development" },
  { label: "Django Development", href: "/django-development" },
  { label: "Node.js Development", href: "/api-development" },
  { label: "AWS Cloud Setup", href: "/aws-development" },
  { label: "AI & ML Development", href: "/ai-solutions" },
];

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className="fixed top-4 left-1/2 z-50 w-full max-w-7xl -translate-x-1/2 px-4 transition-all duration-500"
    >
      <nav className={`mx-auto flex items-center justify-between gap-4 rounded-full border px-6 py-2.5 shadow-sm backdrop-blur-md transition-all duration-500 ${
        scrolled
          ? "border-black/5 bg-[rgba(248,246,240,0.85)] shadow-[0_10px_30px_rgba(7,26,51,0.04)] py-2"
          : "border-black/5 bg-[rgba(248,246,240,0.85)] py-3.5"
      }`}>
        {/* Logo */}
        <Link href="/" className="group flex min-w-0 items-center gap-2 text-base font-extrabold tracking-widest text-heading">
          <Image
            src="/logo.jpg"
            alt="Magnivel Technologies logo"
            width={32}
            height={32}
            className="rounded-full object-cover border border-accent-secondary/20 transition-transform group-hover:scale-105"
            priority
          />
          <span className="truncate font-heading uppercase text-[11px] tracking-wider font-bold">
            Magnivel <span className="text-primary">Technologies</span>
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden items-center gap-6 font-heading font-bold lg:flex">
          <Link href="/about" className="link-underline text-xs font-medium tracking-wide font-heading text-heading hover:text-primary transition-colors">
            About
          </Link>

          {/* Services Mega Dropdown */}
          <div
            className="relative group py-2"
            onMouseEnter={() => setActiveDropdown("services")}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button className="flex items-center gap-1 text-xs font-medium tracking-wide font-heading text-heading hover:text-primary transition-colors cursor-pointer">
              Services
              <Icon name="chevron-down" size={12} className={`transition-transform duration-200 ${activeDropdown === "services" ? "rotate-180" : ""}`} />
            </button>
            <div className="absolute left-1/2 top-full z-50 w-[600px] -translate-x-1/2 pt-2 transition-all duration-300 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto">
              <div className="rounded-xl border border-subtle-border bg-surface p-6 shadow-xl grid grid-cols-2 gap-4">
                {servicesList.map((srv) => (
                  <Link key={srv.href} href={srv.href} className="flex gap-3 rounded-lg p-2.5 transition-colors hover:bg-background-secondary">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-accent-subtle text-primary border border-primary/10">
                      <Icon name={srv.icon} size={16} />
                    </span>
                    <div>
                      <h4 className="text-xs font-bold text-heading font-heading">{srv.label}</h4>
                      <p className="mt-0.5 text-[10px] text-muted font-medium leading-normal">{srv.desc}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Pricing Dropdown */}
          <div
            className="relative group py-2"
            onMouseEnter={() => setActiveDropdown("pricing")}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button className="flex items-center gap-1 text-xs font-medium tracking-wide font-heading text-heading hover:text-primary transition-colors cursor-pointer">
              Pricing
              <Icon name="chevron-down" size={12} className={`transition-transform duration-200 ${activeDropdown === "pricing" ? "rotate-180" : ""}`} />
            </button>
            <div className="absolute left-1/2 top-full z-50 w-[320px] -translate-x-1/2 pt-2 transition-all duration-300 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto">
              <div className="rounded-xl border border-subtle-border bg-surface p-4 shadow-xl flex flex-col gap-1">
                {pricingList.map((prc) => (
                  <Link key={prc.href} href={prc.href} className="rounded-lg p-2.5 transition-colors hover:bg-background-secondary">
                    <h4 className="text-xs font-bold text-heading font-heading">{prc.label}</h4>
                    <p className="text-[10px] text-muted leading-normal">{prc.desc}</p>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Industries Dropdown */}
          <div
            className="relative group py-2"
            onMouseEnter={() => setActiveDropdown("industries")}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button className="flex items-center gap-1 text-xs font-medium tracking-wide font-heading text-heading hover:text-primary transition-colors cursor-pointer">
              Industries
              <Icon name="chevron-down" size={12} className={`transition-transform duration-200 ${activeDropdown === "industries" ? "rotate-180" : ""}`} />
            </button>
            <div className="absolute left-1/2 top-full z-50 w-[240px] -translate-x-1/2 pt-2 transition-all duration-300 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto">
              <div className="rounded-xl border border-subtle-border bg-surface p-3 shadow-xl flex flex-col gap-0.5">
                {industriesList.map((ind) => (
                  <Link key={ind.href} href={ind.href} className="flex items-center gap-2.5 rounded-lg p-2 transition-colors hover:bg-background-secondary">
                    <span className="text-primary">
                      <Icon name={ind.icon === "book-open" || ind.icon === "book" ? "layers" : ind.icon} size={14} />
                    </span>
                    <span className="text-xs font-bold text-heading font-heading">{ind.label}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Tech Dropdown */}
          <div
            className="relative group py-2"
            onMouseEnter={() => setActiveDropdown("tech")}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button className="flex items-center gap-1 text-xs font-medium tracking-wide font-heading text-heading hover:text-primary transition-colors cursor-pointer">
              Technologies
              <Icon name="chevron-down" size={12} className={`transition-transform duration-200 ${activeDropdown === "tech" ? "rotate-180" : ""}`} />
            </button>
            <div className="absolute left-1/2 top-full z-50 w-[240px] -translate-x-1/2 pt-2 transition-all duration-300 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto">
              <div className="rounded-xl border border-subtle-border bg-surface p-3 shadow-xl flex flex-col gap-0.5">
                {techList.map((tc) => (
                  <Link key={tc.href} href={tc.href} className="flex items-center gap-2.5 rounded-lg p-2 transition-colors hover:bg-background-secondary">
                    <span className="text-primary">
                      <Icon name="code" size={14} />
                    </span>
                    <span className="text-xs font-bold text-heading font-heading">{tc.label}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Resources & Tools Mega Dropdown */}
          <div
            className="relative group py-2"
            onMouseEnter={() => setActiveDropdown("resources")}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button className="flex items-center gap-1 text-xs font-medium tracking-wide font-heading text-heading hover:text-primary transition-colors cursor-pointer">
              Resources & Tools
              <Icon name="chevron-down" size={12} className={`transition-transform duration-200 ${activeDropdown === "resources" ? "rotate-180" : ""}`} />
            </button>
            <div className="absolute right-0 top-full z-50 w-[560px] pt-2 transition-all duration-300 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto">
              <div className="rounded-xl border border-subtle-border bg-surface p-5 shadow-xl grid grid-cols-[1.2fr_1fr] gap-5">
                <div>
                  <h4 className="text-[10px] font-bold font-heading uppercase tracking-widest text-primary px-2.5 mb-2">Resource Library</h4>
                  <div className="flex flex-col gap-1">
                    {resourceList.map((res) => (
                      <Link key={res.href} href={res.href} className="flex gap-2.5 rounded-lg p-2 transition-colors hover:bg-background-secondary">
                        <span className="text-primary mt-0.5">
                          <Icon name={res.icon} size={14} />
                        </span>
                        <div>
                          <h5 className="text-xs font-bold text-heading font-heading leading-none">{res.label}</h5>
                          <p className="mt-0.5 text-[10px] text-muted">{res.desc}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
                <div className="border-l border-subtle-border pl-5">
                  <h4 className="text-[10px] font-bold font-heading uppercase tracking-widest text-accent-secondary px-1 mb-2">Free Client Tools</h4>
                  <div className="flex flex-col gap-1">
                    {toolsList.map((tool) => (
                      <Link key={tool.href} href={tool.href} className="rounded-lg p-2 text-xs font-bold text-heading font-heading hover:bg-background-secondary hover:text-primary transition-colors flex items-center gap-1.5">
                        <Icon name="zap" size={12} className="text-accent-secondary" />
                        {tool.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Action Button & Hamburger */}
        <div className="flex items-center gap-3">
          <div className="hidden lg:block">
            <Link href="/contact" className="btn-primary !hidden px-4 py-2.5 text-xs lg:!inline-flex">
              Start Project
            </Link>
          </div>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-subtle-border bg-surface text-heading hover:bg-background-secondary transition-colors lg:hidden"
            aria-label="Toggle Navigation Menu"
          >
            <Icon name={mobileMenuOpen ? "x" : "menu"} size={20} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-subtle-border bg-surface/95 backdrop-blur-xl animate-fade-in shadow-xl">
          <div className="mx-auto max-w-7xl space-y-4 px-4 py-6 sm:px-6 font-semibold text-muted">
            <Link
              href="/about"
              onClick={() => setMobileMenuOpen(false)}
              className="block rounded-lg p-2.5 text-xs font-medium tracking-wide font-heading text-heading hover:text-primary transition-colors"
            >
              About
            </Link>

            {/* Mobile Services Accordion */}
            <AccordionSection title="Services">
              <div className="grid gap-2 pl-4 py-2">
                {servicesList.map((srv) => (
                  <Link
                    key={srv.href}
                    href={srv.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center gap-2 rounded-md p-1.5 text-xs hover:text-primary"
                  >
                    <Icon name={srv.icon} size={12} className="text-primary" />
                    {srv.label}
                  </Link>
                ))}
              </div>
            </AccordionSection>

            {/* Mobile Pricing Accordion */}
            <AccordionSection title="Pricing & Cost">
              <div className="grid gap-2 pl-4 py-2">
                {pricingList.map((prc) => (
                  <Link
                    key={prc.href}
                    href={prc.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block rounded-md p-1.5 text-xs hover:text-primary"
                  >
                    {prc.label}
                  </Link>
                ))}
              </div>
            </AccordionSection>

            {/* Mobile Industries Accordion */}
            <AccordionSection title="Industries">
              <div className="grid gap-2 pl-4 py-2">
                {industriesList.map((ind) => (
                  <Link
                    key={ind.href}
                    href={ind.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center gap-2 rounded-md p-1.5 text-xs hover:text-primary"
                  >
                    <Icon name={ind.icon === "book-open" || ind.icon === "book" ? "layers" : ind.icon} size={12} className="text-primary" />
                    {ind.label}
                  </Link>
                ))}
              </div>
            </AccordionSection>

            {/* Mobile Technologies Accordion */}
            <AccordionSection title="Technologies">
              <div className="grid gap-2 pl-4 py-2">
                {techList.map((tc) => (
                  <Link
                    key={tc.href}
                    href={tc.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block rounded-md p-1.5 text-xs hover:text-primary"
                  >
                    {tc.label}
                  </Link>
                ))}
              </div>
            </AccordionSection>

            {/* Mobile Resources Accordion */}
            <AccordionSection title="Resources & Free Tools">
              <div className="grid gap-4 pl-4 py-2">
                <div>
                  <h5 className="text-[10px] font-extrabold uppercase tracking-widest text-dimmed mb-1.5">Materials</h5>
                  <div className="grid gap-2">
                    {resourceList.map((res) => (
                      <Link
                        key={res.href}
                        href={res.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="flex items-center gap-2 text-xs hover:text-primary"
                      >
                        <Icon name={res.icon} size={12} className="text-primary" />
                        {res.label}
                      </Link>
                    ))}
                  </div>
                </div>
                <div>
                  <h5 className="text-[10px] font-extrabold uppercase tracking-widest text-dimmed mb-1.5">Tools</h5>
                  <div className="grid gap-2">
                    {toolsList.map((tool) => (
                      <Link
                        key={tool.href}
                        href={tool.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="block text-xs hover:text-primary"
                      >
                        {tool.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </AccordionSection>

            <Link
              href="/careers"
              onClick={() => setMobileMenuOpen(false)}
              className="block rounded-lg p-2.5 text-xs font-medium tracking-wide font-heading text-heading hover:text-primary transition-colors"
            >
              Careers
            </Link>

            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="btn-primary block w-full py-3 text-center text-xs"
            >
              Start Your Project
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

function AccordionSection({ title, children }: { title: string; children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between rounded-lg p-2.5 text-xs font-medium tracking-wide font-heading text-heading hover:text-primary transition-colors cursor-pointer"
      >
        <span>{title}</span>
        <Icon name="chevron-down" size={14} className={`transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} />
      </button>
      {isOpen && <div className="border-l-2 border-accent/10 ml-4 pl-2">{children}</div>}
    </div>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-[#0F2847] bg-[#071A33] text-[#94A3B8]">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 md:grid-cols-2 lg:grid-cols-5 lg:px-8">
        <div className="flex flex-col gap-4 lg:col-span-2">
          <Link href="/" className="group flex items-center gap-2.5 text-lg font-extrabold tracking-tight text-[#F8F6F0]">
            <Image
              src="/logo.jpg"
              alt="Magnivel Technologies logo"
              width={36}
              height={36}
              className="rounded-lg object-cover border border-[#0F2847]"
            />
            <span>
              Magnivel <span className="text-[#3B82F6]">Technologies</span>
            </span>
          </Link>
          <p className="max-w-sm text-sm leading-relaxed text-[#94A3B8]">
            We build web applications, mobile apps, and custom AI tools designed to help businesses scale. Modern engineering with a focus on speed, performance, and real results.
          </p>
          <div className="flex items-start gap-2.5 text-xs text-[#94A3B8] max-w-sm">
            <Icon name="map-pin" size={16} className="text-[#3B82F6] shrink-0 mt-0.5" />
            <div>
              <p className="font-bold uppercase tracking-wider text-[10px] text-[#CBD5E1]">{site.address.title}</p>
              <p className="mt-0.5 text-xs leading-relaxed text-[#94A3B8]">
                {site.address.full}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3 pt-1">
            <a
              href={site.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-[#0F2847] bg-white/5 text-[#94A3B8] transition-all hover:-translate-y-0.5 hover:border-[#3B82F6] hover:text-[#F8F6F0]"
            >
              <Icon name="linkedin" size={16} />
            </a>
            <a
              href={site.socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-[#0F2847] bg-white/5 text-[#94A3B8] transition-all hover:-translate-y-0.5 hover:border-[#3B82F6] hover:text-[#F8F6F0]"
            >
              <Icon name="instagram" size={16} />
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-4 text-sm text-[#94A3B8]">
          <p className="text-xs font-extrabold uppercase tracking-widest text-[#F8F6F0]">Services</p>
          <div className="grid gap-2.5">
            <Link className="transition-colors text-[#CBD5E1] hover:text-[#F8F6F0]" href="/custom-software-development">Custom Software</Link>
            <Link className="transition-colors text-[#CBD5E1] hover:text-[#F8F6F0]" href="/ai-solutions">AI Solutions</Link>
            <Link className="transition-colors text-[#CBD5E1] hover:text-[#F8F6F0]" href="/website-development">Website Development</Link>
            <Link className="transition-colors text-[#CBD5E1] hover:text-[#F8F6F0]" href="/mobile-app-development">Mobile Apps</Link>
            <Link className="transition-colors text-[#CBD5E1] hover:text-[#F8F6F0]" href="/saas-development">SaaS Development</Link>
            <Link className="transition-colors text-[#CBD5E1] hover:text-[#F8F6F0]" href="/api-development">API Development</Link>
          </div>
        </div>

        <div className="flex flex-col gap-4 text-sm text-[#94A3B8]">
          <p className="text-xs font-extrabold uppercase tracking-widest text-[#F8F6F0]">Technologies</p>
          <div className="grid gap-2.5">
            <Link className="transition-colors text-[#CBD5E1] hover:text-[#F8F6F0]" href="/react-development">React & Next.js</Link>
            <Link className="transition-colors text-[#CBD5E1] hover:text-[#F8F6F0]" href="/python-development">Python & Django</Link>
            <Link className="transition-colors text-[#CBD5E1] hover:text-[#F8F6F0]" href="/nodejs-development">Node.js</Link>
            <Link className="transition-colors text-[#CBD5E1] hover:text-[#F8F6F0]" href="/aws-development">AWS Cloud</Link>
            <Link className="transition-colors text-[#CBD5E1] hover:text-[#F8F6F0]" href="/technologies">All Technologies</Link>
          </div>
        </div>

        <div className="flex flex-col gap-4 text-sm text-[#94A3B8]">
          <p className="text-xs font-extrabold uppercase tracking-widest text-[#F8F6F0]">Quick Links</p>
          <div className="grid gap-2.5">
            <Link className="transition-colors text-[#CBD5E1] hover:text-[#F8F6F0]" href="/about">About Us</Link>
            <Link className="transition-colors text-[#CBD5E1] hover:text-[#F8F6F0]" href="/careers">Careers</Link>
            <Link className="transition-colors text-[#CBD5E1] hover:text-[#F8F6F0]" href="/blog">Blog</Link>
            <Link className="transition-colors text-[#CBD5E1] hover:text-[#F8F6F0]" href="/contact">Contact</Link>
            <Link className="transition-colors text-[#CBD5E1] hover:text-[#F8F6F0]" href="/resources">Resources</Link>
          </div>
          <div className="mt-2 border-t border-[#0F2847] pt-4">
            <a className="flex items-center gap-2 transition-colors text-[#CBD5E1] hover:text-[#F8F6F0]" href={`mailto:${site.email}`}>
              <Icon name="mail" size={14} className="text-[#3B82F6]" />
              {site.email}
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-[#0F2847] py-6 text-xs text-[#64748B]">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 sm:flex-row sm:px-6 lg:px-8">
          <p>© {new Date().getFullYear()} Magnivel Technologies. All rights reserved.</p>
          <p className="text-[#64748B]">Global delivery across India, USA, Europe, UAE &amp; Southeast Asia</p>
        </div>
      </div>
    </footer>
  );
}
