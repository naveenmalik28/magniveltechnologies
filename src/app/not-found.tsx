import { Metadata } from "next";
import Link from "next/link";
import { Icon } from "@/components/icon";

export const metadata: Metadata = {
  title: "Page Not Found | Magnivel Technologies",
  description: "The page you're looking for doesn't exist. Return to our homepage or explore our services.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background text-foreground px-4">
      <div className="max-w-md text-center">
        <div className="mb-8">
          <h1 className="text-8xl font-bold text-primary mb-2">404</h1>
          <div className="w-24 h-1 bg-gradient-to-r from-[#071A33] to-[#1769E0] mx-auto rounded-full" />
        </div>

        <h2 className="text-4xl font-bold text-heading mb-4">Page Not Found</h2>
        
        <p className="text-muted text-lg mb-8">
          Oops! The page you&apos;re looking for doesn&apos;t exist. It might have been moved or deleted.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary-hover transition-colors duration-200"
          >
            <Icon name="arrow-left" size={18} />
            Back to Home
          </Link>
          
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-primary text-primary font-semibold rounded-lg hover:bg-primary/5 transition-colors duration-200"
          >
            <Icon name="mail" size={18} />
            Get Help
          </Link>
        </div>

        <div className="mt-12 pt-8 border-t border-subtle-border">
          <p className="text-sm text-dimmed mb-4">You might want to explore:</p>
          <div className="grid grid-cols-2 gap-3">
            {[
              { href: "/", label: "Home" },
              { href: "/services", label: "Services" },
              { href: "/contact", label: "Contact" },
              { href: "/about", label: "About" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-primary hover:text-primary transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
