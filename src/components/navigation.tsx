"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { site } from "@/lib/site";
import { Icon } from "@/components/icon";

const servicesList = [
  { label: "Website Development", href: "/website-development-services", desc: "Corporate sites, CMS, portals", icon: "globe" },
  { label: "Mobile App Development", href: "/mobile-app-development", desc: "iOS, Android, cross-platform apps", icon: "smartphone" },
  { label: "Custom Software", href: "/custom-software-development", desc: "Tailored enterprise operations", icon: "code" },
  { label: "AI Chatbot Development", href: "/ai-chatbot-development", desc: "Gemini, Claude, GPT bots", icon: "brain" },
  { label: "AI Automation Services", href: "/ai-automation-services", desc: "Workflow optimization & agents", icon: "sparkles" },
  { label: "SaaS Development", href: "/saas-development", desc: "Multi-tenant subscription systems", icon: "layers" },
  { label: "Ecommerce Development", href: "/ecommerce-development", desc: "High-performance online stores", icon: "layers" },
  { label: "UI/UX Design Services", href: "/ui-ux-design-services", desc: "Premium interface wireframes", icon: "palette" },
  { label: "SEO Services", href: "/seo-services", desc: "Core Web Vitals & organic growth", icon: "trending-up" },
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
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-white/8 bg-background/90 shadow-lg shadow-black/20 backdrop-blur-xl py-3"
          : "border-b border-transparent bg-background/60 backdrop-blur-md py-4"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="group flex min-w-0 items-center gap-2.5 text-base font-extrabold tracking-tight text-heading sm:text-lg">
          <Image
            src="/logo.jpg"
            alt="Magnivel Technologies logo"
            width={38}
            height={38}
            className="rounded-lg object-cover shadow-md shadow-accent/15 transition-transform group-hover:scale-105"
            priority
          />
          <span className="truncate">
            Magnivel <span className="gradient-text">Technologies</span>
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden items-center gap-6 text-sm font-semibold text-muted lg:flex">
          <Link href="/about" className="transition-colors hover:text-accent-dark">
            About
          </Link>

          {/* Services Mega Dropdown */}
          <div
            className="relative group py-2"
            onMouseEnter={() => setActiveDropdown("services")}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button className="flex items-center gap-1 transition-colors hover:text-accent-dark cursor-pointer font-semibold text-muted">
              Services
              <Icon name="chevron-down" size={14} className={`transition-transform duration-200 ${activeDropdown === "services" ? "rotate-180" : ""}`} />
            </button>
            <div className="absolute left-1/2 top-full z-50 w-[600px] -translate-x-1/2 pt-2 transition-all duration-300 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto">
              <div className="rounded-xl border border-white/10 bg-surface/95 backdrop-blur-xl p-6 shadow-2xl shadow-black/40 grid grid-cols-2 gap-4">
                {servicesList.map((srv) => (
                  <Link key={srv.href} href={srv.href} className="flex gap-3 rounded-lg p-2.5 transition-colors hover:bg-surface-hover">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-accent-subtle text-accent-dark border border-accent/10">
                      <Icon name={srv.icon} size={16} />
                    </span>
                    <div>
                      <h4 className="text-xs font-bold text-heading">{srv.label}</h4>
                      <p className="mt-0.5 text-[10px] text-dimmed font-medium leading-normal">{srv.desc}</p>
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
            <button className="flex items-center gap-1 transition-colors hover:text-accent-dark cursor-pointer font-semibold text-muted">
              Pricing
              <Icon name="chevron-down" size={14} className={`transition-transform duration-200 ${activeDropdown === "pricing" ? "rotate-180" : ""}`} />
            </button>
            <div className="absolute left-1/2 top-full z-50 w-[320px] -translate-x-1/2 pt-2 transition-all duration-300 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto">
              <div className="rounded-xl border border-white/10 bg-surface/95 backdrop-blur-xl p-4 shadow-2xl shadow-black/40 flex flex-col gap-1">
                {pricingList.map((prc) => (
                  <Link key={prc.href} href={prc.href} className="rounded-lg p-2.5 transition-colors hover:bg-surface-hover">
                    <h4 className="text-xs font-bold text-heading">{prc.label}</h4>
                    <p className="text-[10px] text-dimmed leading-normal">{prc.desc}</p>
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
            <button className="flex items-center gap-1 transition-colors hover:text-accent-dark cursor-pointer font-semibold text-muted">
              Industries
              <Icon name="chevron-down" size={14} className={`transition-transform duration-200 ${activeDropdown === "industries" ? "rotate-180" : ""}`} />
            </button>
            <div className="absolute left-1/2 top-full z-50 w-[240px] -translate-x-1/2 pt-2 transition-all duration-300 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto">
              <div className="rounded-xl border border-white/10 bg-surface/95 backdrop-blur-xl p-3 shadow-2xl shadow-black/40 flex flex-col gap-0.5">
                {industriesList.map((ind) => (
                  <Link key={ind.href} href={ind.href} className="flex items-center gap-2.5 rounded-lg p-2 transition-colors hover:bg-surface-hover">
                    <span className="text-accent-dark">
                      <Icon name={ind.icon === "book-open" || ind.icon === "book" ? "layers" : ind.icon} size={14} />
                    </span>
                    <span className="text-xs font-bold text-heading">{ind.label}</span>
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
            <button className="flex items-center gap-1 transition-colors hover:text-accent-dark cursor-pointer font-semibold text-muted">
              Technologies
              <Icon name="chevron-down" size={14} className={`transition-transform duration-200 ${activeDropdown === "tech" ? "rotate-180" : ""}`} />
            </button>
            <div className="absolute left-1/2 top-full z-50 w-[240px] -translate-x-1/2 pt-2 transition-all duration-300 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto">
              <div className="rounded-xl border border-white/10 bg-surface/95 backdrop-blur-xl p-3 shadow-2xl shadow-black/40 flex flex-col gap-0.5">
                {techList.map((tc) => (
                  <Link key={tc.href} href={tc.href} className="flex items-center gap-2.5 rounded-lg p-2 transition-colors hover:bg-surface-hover">
                    <span className="text-accent-dark">
                      <Icon name="code" size={14} />
                    </span>
                    <span className="text-xs font-bold text-heading">{tc.label}</span>
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
            <button className="flex items-center gap-1 transition-colors hover:text-accent-dark cursor-pointer font-semibold text-muted">
              Resources & Tools
              <Icon name="chevron-down" size={14} className={`transition-transform duration-200 ${activeDropdown === "resources" ? "rotate-180" : ""}`} />
            </button>
            <div className="absolute right-0 top-full z-50 w-[560px] pt-2 transition-all duration-300 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto">
              <div className="rounded-xl border border-white/10 bg-surface/95 backdrop-blur-xl p-5 shadow-2xl shadow-black/40 grid grid-cols-[1.2fr_1fr] gap-5">
                <div>
                  <h4 className="text-[10px] font-extrabold uppercase tracking-widest text-dimmed px-2.5 mb-2">Resource Library</h4>
                  <div className="flex flex-col gap-1">
                    {resourceList.map((res) => (
                      <Link key={res.href} href={res.href} className="flex gap-2.5 rounded-lg p-2 transition-colors hover:bg-surface-hover">
                        <span className="text-accent-dark mt-0.5">
                          <Icon name={res.icon} size={14} />
                        </span>
                        <div>
                          <h5 className="text-xs font-bold text-heading leading-none">{res.label}</h5>
                          <p className="mt-0.5 text-[10px] text-dimmed">{res.desc}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
                <div className="border-l border-subtle-border pl-5">
                  <h4 className="text-[10px] font-extrabold uppercase tracking-widest text-dimmed px-1 mb-2">Free Client Tools</h4>
                  <div className="flex flex-col gap-1">
                    {toolsList.map((tool) => (
                      <Link key={tool.href} href={tool.href} className="rounded-lg p-2 text-xs font-bold text-heading hover:bg-surface-hover hover:text-accent-dark transition-colors flex items-center gap-1.5">
                        <Icon name="zap" size={12} className="text-amber-500" />
                        {tool.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Link href="/portfolio" className="transition-colors hover:text-accent-dark">
            Portfolio
          </Link>
        </div>

        {/* Action Button & Hamburger */}
        <div className="flex items-center gap-3">
          <Link href="/contact" className="btn-primary hidden px-4 py-2.5 text-xs sm:inline-flex">
            Start Your Project
          </Link>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-surface text-heading hover:bg-surface-hover transition-colors lg:hidden"
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
            <Link className="transition-colors hover:text-accent-dark" href="/ai-chatbot-development">AI & ML Solutions</Link>
            <Link className="transition-colors hover:text-accent-dark" href="/website-development-services">Web Development</Link>
            <Link className="transition-colors hover:text-accent-dark" href="/mobile-app-development">Mobile Apps</Link>
            <Link className="transition-colors hover:text-accent-dark" href="/saas-development">SaaS Development</Link>
            <Link className="transition-colors hover:text-accent-dark" href="/aws-development">Cloud & DevOps</Link>
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
