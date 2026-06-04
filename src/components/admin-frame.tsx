import Link from "next/link";
import Image from "next/image";
import { LogoutButton } from "@/components/logout-button";

export function AdminFrame({ 
  title, 
  children,
  activeTab
}: { 
  title: string; 
  children: React.ReactNode;
  activeTab?: "dashboard" | "leads";
}) {
  return (
    <main className="min-h-screen bg-background text-foreground bg-grid">
      <header className="border-b border-subtle-border bg-white/86 backdrop-blur-xl sticky top-0 z-40">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <Link href="/" className="group flex items-center gap-2.5 text-base font-extrabold tracking-tight text-heading sm:text-lg">
              <Image 
                src="/logo.jpg" 
                alt="Magnivel Technologies Logo" 
                width={32} 
                height={32} 
                className="rounded-full object-cover shadow-sm shadow-accent/15 transition-transform group-hover:scale-105" 
              />
              <span>
                Magnivel <span className="gradient-text">Technologies</span>
              </span>
            </Link>
            <span className="text-xs font-semibold px-2 py-0.5 rounded border border-subtle-border bg-background text-accent-dark ml-2">
              Console
            </span>
          </div>
          
          <div className="flex items-center gap-6">
            <nav className="flex gap-6 text-sm font-semibold">
              <Link 
                href="/admin/dashboard" 
                className={`transition-colors py-1 relative hover:text-accent-dark ${
                  activeTab === "dashboard"
                    ? "text-accent-dark font-bold after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:bg-accent"
                    : "text-muted"
                }`}
              >
                Dashboard
              </Link>
              <Link 
                href="/admin/leads" 
                className={`transition-colors py-1 relative hover:text-accent-dark ${
                  activeTab === "leads"
                    ? "text-accent-dark font-bold after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:bg-accent"
                    : "text-muted"
                }`}
              >
                Leads List
              </Link>
            </nav>
            <div className="h-4 w-px bg-subtle-border/60" />
            <LogoutButton />
          </div>
        </div>
      </header>
      
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between border-b border-subtle-border/60 pb-6 mb-8">
          <h1 className="text-2xl font-extrabold text-heading tracking-tight">{title}</h1>
          <span className="text-xs font-mono text-dimmed">Access IP: Secured Session</span>
        </div>
        {children}
      </div>
    </main>
  );
}
