import Link from "next/link";
import { site } from "@/lib/site";

const links = [
  ["About", "/about"],
  ["Services", "/services"],
  ["Portfolio", "/portfolio"],
  ["Technologies", "/technologies"],
  ["Contact", "/contact"],
];

export function Navigation() {
  return (
    <header className="sticky top-0 z-30 border-b border-emerald-950/10 bg-white/90 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="text-lg font-semibold tracking-tight text-emerald-950">
          Magnivel
        </Link>
        <div className="hidden items-center gap-6 text-sm font-medium text-slate-700 md:flex">
          {links.map(([label, href]) => (
            <Link key={href} href={href} className="hover:text-emerald-700">
              {label}
            </Link>
          ))}
        </div>
        <a
          href={`mailto:${site.email}`}
          className="rounded-md bg-emerald-700 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-emerald-800"
        >
          Get Free Consultation
        </a>
      </nav>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-emerald-950/10 bg-emerald-950 text-white">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6 md:grid-cols-3 lg:px-8">
        <div>
          <p className="text-lg font-semibold">{site.name}</p>
          <p className="mt-3 max-w-sm text-sm text-emerald-50/75">
            Websites, apps, SaaS products and AI solutions for growing businesses.
          </p>
        </div>
        <div className="text-sm text-emerald-50/75">
          <p className="font-semibold text-white">Contact</p>
          <a className="mt-3 block hover:text-white" href={`mailto:${site.email}`}>
            {site.email}
          </a>
          <a className="mt-2 block hover:text-white" href={site.url}>
            {site.url}
          </a>
        </div>
        <div className="text-sm text-emerald-50/75">
          <p className="font-semibold text-white">Admin</p>
          <Link className="mt-3 block hover:text-white" href="/admin/login">
            Lead dashboard
          </Link>
        </div>
      </div>
    </footer>
  );
}
