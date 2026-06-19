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
  { label: "Node.js Development", href: "/nodejs-development" },
  { label: "AWS Cloud Setup", href: "/aws-development" },
  { label: "AI & ML Development", href: "/ai-development" },
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
      <nav className={`mx-auto flex items-center justify-between gap-4 rounded-full border px-6 py-2.5 shadow-2xl backdrop-blur-2xl transition-all duration-500 ${
        scrolled
          ? "border-accent-secondary/20 bg-[#0B1215]/80 shadow-[0_20px_50px_rgba(0,0,0,0.5)] py-2"
          : "border-white/5 bg-[#111A1E]/40 py-3.5"
      }`}>
        {/* Logo */}
        <Link href="/" className="group flex min-w-0 items-center gap-2 text-base font-extrabold tracking-widest text-white">
          <Image
            src="/logo.jpg"
            alt="Magnivel Technologies logo"
            width={32}
            height={32}
            className="rounded-full object-cover border border-accent-secondary/20 transition-transform group-hover:scale-105"
            priority
          />
          <span className="truncate font-heading uppercase text-[11px] tracking-wider font-bold">
            Magnivel <span className="text-accent-secondary">Tech</span>
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden items-center gap-6 font-heading font-bold lg:flex">
          <Link href="/about" className="link-underline text-[10px] uppercase tracking-widest text-muted hover:text-accent-secondary transition-colors">
            About
          </Link>

          {/* Services Mega Dropdown */}
          <div
            className="relative group py-2"
            onMouseEnter={() => setActiveDropdown("services")}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button className="flex items-center gap-1 text-[10px] uppercase tracking-widest text-muted hover:text-accent-secondary transition-colors cursor-pointer font-bold font-heading">
              Services
              <Icon name="chevron-down" size={12} className={`transition-transform duration-200 ${activeDropdown === "services" ? "rotate-180" : ""}`} />
            </button>
            <div className="absolute left-1/2 top-full z-50 w-[600px] -translate-x-1/2 pt-2 transition-all duration-300 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto">
              <div className="rounded-xl border border-white/5 bg-[#111A1E]/95 backdrop-blur-2xl p-6 shadow-2xl shadow-black/80 grid grid-cols-2 gap-4">
                {servicesList.map((srv) => (
                  <Link key={srv.href} href={srv.href} className="flex gap-3 rounded-lg p-2.5 transition-colors hover:bg-white/5">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-accent-subtle text-accent-secondary border border-accent/10">
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
            <button className="flex items-center gap-1 text-[10px] uppercase tracking-widest text-muted hover:text-accent-secondary transition-colors cursor-pointer font-bold font-heading">
              Pricing
              <Icon name="chevron-down" size={12} className={`transition-transform duration-200 ${activeDropdown === "pricing" ? "rotate-180" : ""}`} />
            </button>
            <div className="absolute left-1/2 top-full z-50 w-[320px] -translate-x-1/2 pt-2 transition-all duration-300 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto">
              <div className="rounded-xl border border-white/5 bg-[#111A1E]/95 backdrop-blur-2xl p-4 shadow-2xl shadow-black/80 flex flex-col gap-1">
                {pricingList.map((prc) => (
                  <Link key={prc.href} href={prc.href} className="rounded-lg p-2.5 transition-colors hover:bg-white/5">
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
            <button className="flex items-center gap-1 text-[10px] uppercase tracking-widest text-muted hover:text-accent-secondary transition-colors cursor-pointer font-bold font-heading">
              Industries
              <Icon name="chevron-down" size={12} className={`transition-transform duration-200 ${activeDropdown === "industries" ? "rotate-180" : ""}`} />
            </button>
            <div className="absolute left-1/2 top-full z-50 w-[240px] -translate-x-1/2 pt-2 transition-all duration-300 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto">
              <div className="rounded-xl border border-white/5 bg-[#111A1E]/95 backdrop-blur-2xl p-3 shadow-2xl shadow-black/80 flex flex-col gap-0.5">
                {industriesList.map((ind) => (
                  <Link key={ind.href} href={ind.href} className="flex items-center gap-2.5 rounded-lg p-2 transition-colors hover:bg-white/5">
                    <span className="text-accent-secondary">
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
            <button className="flex items-center gap-1 text-[10px] uppercase tracking-widest text-muted hover:text-accent-secondary transition-colors cursor-pointer font-bold font-heading">
              Technologies
              <Icon name="chevron-down" size={12} className={`transition-transform duration-200 ${activeDropdown === "tech" ? "rotate-180" : ""}`} />
            </button>
            <div className="absolute left-1/2 top-full z-50 w-[240px] -translate-x-1/2 pt-2 transition-all duration-300 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto">
              <div className="rounded-xl border border-white/5 bg-[#111A1E]/95 backdrop-blur-2xl p-3 shadow-2xl shadow-black/80 flex flex-col gap-0.5">
                {techList.map((tc) => (
                  <Link key={tc.href} href={tc.href} className="flex items-center gap-2.5 rounded-lg p-2 transition-colors hover:bg-white/5">
                    <span className="text-accent-secondary">
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
            <button className="flex items-center gap-1 text-[10px] uppercase tracking-widest text-muted hover:text-accent-secondary transition-colors cursor-pointer font-bold font-heading">
              Resources & Tools
              <Icon name="chevron-down" size={12} className={`transition-transform duration-200 ${activeDropdown === "resources" ? "rotate-180" : ""}`} />
            </button>
            <div className="absolute right-0 top-full z-50 w-[560px] pt-2 transition-all duration-300 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto">
              <div className="rounded-xl border border-white/5 bg-[#111A1E]/95 backdrop-blur-2xl p-5 shadow-2xl shadow-black/80 grid grid-cols-[1.2fr_1fr] gap-5">
                <div>
                  <h4 className="text-[10px] font-bold font-heading uppercase tracking-widest text-accent-dark px-2.5 mb-2">Resource Library</h4>
                  <div className="flex flex-col gap-1">
                    {resourceList.map((res) => (
                      <Link key={res.href} href={res.href} className="flex gap-2.5 rounded-lg p-2 transition-colors hover:bg-white/5">
                        <span className="text-accent-secondary mt-0.5">
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
                <div className="border-l border-white/5 pl-5">
                  <h4 className="text-[10px] font-bold font-heading uppercase tracking-widest text-accent-dark px-1 mb-2">Free Client Tools</h4>
                  <div className="flex flex-col gap-1">
                    {toolsList.map((tool) => (
                      <Link key={tool.href} href={tool.href} className="rounded-lg p-2 text-xs font-bold text-heading font-heading hover:bg-white/5 hover:text-accent-secondary transition-colors flex items-center gap-1.5">
                        <Icon name="zap" size={12} className="text-accent-secondary" />
                        {tool.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Link href="/portfolio" className="link-underline text-[10px] uppercase tracking-widest text-muted hover:text-accent-secondary transition-colors">
            Portfolio
          </Link>
        </div>

        {/* Action Button & Hamburger */}
        <div className="flex items-center gap-3">
          <Link href="/contact" className="btn-primary hidden px-4 py-2.5 text-xs sm:inline-flex">
            Start Project
          </Link>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/5 bg-[#111A1E]/80 text-white hover:bg-white/5 transition-colors lg:hidden"
            aria-label="Toggle Navigation Menu"
          >
            <Icon name={mobileMenuOpen ? "x" : "menu"} size={20} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-white/10 bg-surface/95 backdrop-blur-xl animate-fade-in shadow-xl">
          <div className="mx-auto max-w-7xl space-y-4 px-4 py-6 sm:px-6 font-semibold text-muted">
            <Link
              href="/about"
              onClick={() => setMobileMenuOpen(false)}
              className="block rounded-lg p-2.5 text-sm hover:bg-surface-hover hover:text-heading"
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
                    className="flex items-center gap-2 rounded-md p-1.5 text-xs hover:text-accent-dark"
                  >
                    <Icon name={srv.icon} size={12} className="text-accent-light" />
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
                    className="block rounded-md p-1.5 text-xs hover:text-accent-dark"
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
                    className="flex items-center gap-2 rounded-md p-1.5 text-xs hover:text-accent-dark"
                  >
                    <Icon name={ind.icon === "book-open" || ind.icon === "book" ? "layers" : ind.icon} size={12} className="text-accent-light" />
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
                    className="block rounded-md p-1.5 text-xs hover:text-accent-dark"
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
                        className="flex items-center gap-2 text-xs hover:text-accent-dark"
                      >
                        <Icon name={res.icon} size={12} className="text-accent-light" />
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
                        className="block text-xs hover:text-accent-dark"
                      >
                        {tool.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </AccordionSection>

            <Link
              href="/portfolio"
              onClick={() => setMobileMenuOpen(false)}
              className="block rounded-lg p-2.5 text-sm hover:bg-surface-hover hover:text-heading"
            >
              Portfolio
            </Link>

            <Link
              href="/careers"
              onClick={() => setMobileMenuOpen(false)}
              className="block rounded-lg p-2.5 text-sm hover:bg-surface-hover hover:text-heading"
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
        className="flex w-full items-center justify-between rounded-lg p-2.5 text-sm hover:bg-surface-hover hover:text-heading font-semibold text-muted cursor-pointer"
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
    <footer className="border-t border-white/8 bg-surface">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 md:grid-cols-2 lg:grid-cols-5 lg:px-8">
        <div className="flex flex-col gap-4 lg:col-span-2">
          <Link href="/" className="group flex items-center gap-2.5 text-lg font-extrabold tracking-tight text-heading">
            <Image
              src="/logo.jpg"
              alt="Magnivel Technologies logo"
              width={36}
              height={36}
              className="rounded-lg object-cover shadow-md shadow-accent/20"
            />
            <span>
              Magnivel <span className="gradient-text">Technologies</span>
            </span>
          </Link>
          <p className="max-w-sm text-sm leading-relaxed text-muted">
            Premium AI-powered software engineering. We build intelligent web platforms, mobile applications, SaaS products, and enterprise solutions for ambitious brands worldwide.
          </p>
          <div className="flex items-center gap-3 pt-1">
            <a
              href={site.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-muted transition-all hover:-translate-y-0.5 hover:border-accent/40 hover:text-accent-dark"
            >
              <Icon name="linkedin" size={16} />
            </a>
            <a
              href={site.socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-muted transition-all hover:-translate-y-0.5 hover:border-accent/40 hover:text-accent-dark"
            >
              <Icon name="instagram" size={16} />
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-4 text-sm text-muted">
          <p className="text-xs font-extrabold uppercase tracking-widest text-heading">Services</p>
          <div className="grid gap-2.5">
            <Link className="transition-colors hover:text-accent-dark" href="/custom-software-development">Custom Software</Link>
            <Link className="transition-colors hover:text-accent-dark" href="/ai-solutions">AI Solutions</Link>
            <Link className="transition-colors hover:text-accent-dark" href="/website-development">Website Development</Link>
            <Link className="transition-colors hover:text-accent-dark" href="/mobile-app-development">Mobile Apps</Link>
            <Link className="transition-colors hover:text-accent-dark" href="/saas-development">SaaS Development</Link>
            <Link className="transition-colors hover:text-accent-dark" href="/api-development">API Development</Link>
          </div>
        </div>

        <div className="flex flex-col gap-4 text-sm text-muted">
          <p className="text-xs font-extrabold uppercase tracking-widest text-heading">Technologies</p>
          <div className="grid gap-2.5">
            <Link className="transition-colors hover:text-accent-dark" href="/react-development">React & Next.js</Link>
            <Link className="transition-colors hover:text-accent-dark" href="/python-development">Python & Django</Link>
            <Link className="transition-colors hover:text-accent-dark" href="/nodejs-development">Node.js</Link>
            <Link className="transition-colors hover:text-accent-dark" href="/aws-development">AWS Cloud</Link>
            <Link className="transition-colors hover:text-accent-dark" href="/technologies">All Technologies</Link>
          </div>
        </div>

        <div className="flex flex-col gap-4 text-sm text-muted">
          <p className="text-xs font-extrabold uppercase tracking-widest text-heading">Quick Links</p>
          <div className="grid gap-2.5">
            <Link className="transition-colors hover:text-accent-dark" href="/about">About Us</Link>
            <Link className="transition-colors hover:text-accent-dark" href="/portfolio">Portfolio</Link>
            <Link className="transition-colors hover:text-accent-dark" href="/careers">Careers</Link>
            <Link className="transition-colors hover:text-accent-dark" href="/blog">Blog</Link>
            <Link className="transition-colors hover:text-accent-dark" href="/contact">Contact</Link>
            <Link className="transition-colors hover:text-accent-dark" href="/resources">Resources</Link>
          </div>
          <div className="mt-2 border-t border-white/8 pt-4">
            <a className="flex items-center gap-2 transition-colors hover:text-accent-dark" href={`mailto:${site.email}`}>
              <Icon name="mail" size={14} className="text-accent-light" />
              {site.email}
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/8 py-6 text-xs text-dimmed">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 sm:flex-row sm:px-6 lg:px-8">
          <p>© {new Date().getFullYear()} Magnivel Technologies. All rights reserved.</p>
          <p className="text-dimmed">Global delivery across India, USA, Europe, UAE &amp; Southeast Asia</p>
        </div>
      </div>
    </footer>
  );
}
