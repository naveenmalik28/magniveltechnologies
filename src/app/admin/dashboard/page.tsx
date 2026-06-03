import Link from "next/link";
import Image from "next/image";
import { prisma } from "@/lib/db";
import { Icon } from "@/components/icon";
import { LogoutButton } from "@/components/logout-button";

export const metadata = { title: "Admin Console | Magnivel Technologies" };
export const dynamic = "force-dynamic";

type Summary = {
  total: number;
  newLeads: number;
  contacted: number;
  closed: number;
};

export default async function AdminDashboardPage() {
  const [total, newLeads, contacted, closed] = await Promise.all([
    prisma.lead.count(),
    prisma.lead.count({ where: { status: "new" } }),
    prisma.lead.count({ where: { status: "contacted" } }),
    prisma.lead.count({ where: { status: "closed" } }),
  ]);
  const summary: Summary = { total, newLeads, contacted, closed };

  return (
    <AdminFrame title="Dashboard Console" activeTab="dashboard">
      {/* Overview stats grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {[
          { label: "Total Inquiries", value: summary.total, icon: "globe", color: "text-slate-600 bg-slate-50 border-slate-200" },
          { label: "New Requests", value: summary.newLeads, icon: "zap", color: "text-accent-dark bg-accent-subtle border-accent/15" },
          { label: "Contacted Leads", value: summary.contacted, icon: "message-circle", color: "text-yellow-600 bg-yellow-50 border-yellow-200" },
          { label: "Closed Accounts", value: summary.closed, icon: "check-circle", color: "text-emerald-600 bg-emerald-50 border-emerald-200" },
        ].map((item) => (
          <div 
            key={item.label} 
            className="rounded-xl border border-subtle-border bg-surface p-6 shadow-xl relative overflow-hidden group transition-all duration-300 glow-card"
          >
            <div className="flex justify-between items-start">
              <span className={`flex h-10 w-10 items-center justify-center rounded-lg border ${item.color}`}>
                <Icon name={item.icon} size={18} />
              </span>
              <span className="text-xs font-bold text-dimmed uppercase tracking-wider">Metrics</span>
            </div>
            
            <div className="mt-6 flex flex-col">
              <span className="text-sm font-semibold text-muted tracking-wide">{item.label}</span>
              <span className="mt-2 text-4xl font-extrabold text-heading tracking-tight leading-none">
                {item.value}
              </span>
            </div>
          </div>
        ))}
      </div>
      
      {/* Quick Actions Panel */}
      <div className="mt-8 rounded-xl border border-subtle-border bg-surface p-6">
        <h2 className="text-lg font-bold text-heading mb-4">Console Quick Actions</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <Link 
            href="/admin/leads" 
            className="flex items-center gap-4 rounded-lg border border-subtle-border bg-background/50 p-4 hover:border-accent/40 hover:bg-surface-hover transition-all duration-200"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent-subtle text-accent-dark border border-accent/15">
              👁
            </span>
            <div>
              <p className="text-sm font-bold text-heading">Review Lead Files</p>
              <p className="text-xs text-muted mt-0.5">Filter, search and update inquiry items</p>
            </div>
          </Link>
          
          <a 
            href="/" 
            className="flex items-center gap-4 rounded-lg border border-subtle-border bg-background/50 p-4 hover:border-accent/40 hover:bg-surface-hover transition-all duration-200"
            target="_blank" 
            rel="noopener noreferrer"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent-subtle text-accent-dark border border-accent/15">
              🌍
            </span>
            <div>
              <p className="text-sm font-bold text-heading">View Public Landing</p>
              <p className="text-xs text-muted mt-0.5">Test production user form triggers</p>
            </div>
          </a>
        </div>
      </div>
    </AdminFrame>
  );
}

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
