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
    <AdminFrame title="Dashboard Console">
      {/* Overview stats grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {[
          { label: "Total Inquiries", value: summary.total, icon: "globe", color: "from-slate-500/20 to-slate-500/5 border-slate-500/20 text-slate-400" },
          { label: "New Requests", value: summary.newLeads, icon: "zap", color: "from-accent/20 to-accent/5 border-accent/20 text-accent-light" },
          { label: "Contacted Leads", value: summary.contacted, icon: "message-circle", color: "from-yellow-500/20 to-yellow-500/5 border-yellow-500/20 text-yellow-400" },
          { label: "Closed Accounts", value: summary.closed, icon: "check-circle", color: "from-emerald-500/20 to-emerald-500/5 border-emerald-500/20 text-emerald-400" },
        ].map((item) => (
          <div 
            key={item.label} 
            className={`rounded-xl border bg-linear-to-br bg-surface p-6 shadow-xl relative overflow-hidden group hover:border-white/10 transition-all duration-300 glow-card`}
          >
            <div className="flex justify-between items-start">
              <span className={`flex h-10 w-10 items-center justify-center rounded-lg bg-surface/80 border ${item.color.split(" ")[2]}`}>
                <Icon name={item.icon} size={18} className={item.color.split(" ")[3]} />
              </span>
              <span className="text-xs font-semibold text-dimmed uppercase tracking-wider">Metrics</span>
            </div>
            
            <div className="mt-6 flex flex-col">
              <span className="text-sm font-semibold text-muted tracking-wide">{item.label}</span>
              <span className="mt-2 text-4xl font-extrabold text-white tracking-tight leading-none">
                {item.value}
              </span>
            </div>
          </div>
        ))}
      </div>
      
      {/* Quick Actions Panel */}
      <div className="mt-8 rounded-xl border border-subtle-border bg-surface p-6">
        <h2 className="text-lg font-bold text-white mb-4">Console Quick Actions</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <Link 
            href="/admin/leads" 
            className="flex items-center gap-4 rounded-lg border border-subtle-border bg-background/50 p-4 hover:border-accent-light/40 transition-all duration-200"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent-subtle text-accent-light border border-accent/15">
              👁
            </span>
            <div>
              <p className="text-sm font-bold text-white">Review Lead Files</p>
              <p className="text-xs text-muted mt-0.5">Filter, search and update inquiry items</p>
            </div>
          </Link>
          
          <a 
            href="/" 
            className="flex items-center gap-4 rounded-lg border border-subtle-border bg-background/50 p-4 hover:border-accent-light/40 transition-all duration-200"
            target="_blank" 
            rel="noopener noreferrer"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent-subtle text-accent-light border border-accent/15">
              🌍
            </span>
            <div>
              <p className="text-sm font-bold text-white">View Public Landing</p>
              <p className="text-xs text-muted mt-0.5">Test production user form triggers</p>
            </div>
          </a>
        </div>
      </div>
    </AdminFrame>
  );
}

export function AdminFrame({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <main className="min-h-screen bg-background text-foreground bg-grid">
      <header className="border-b border-subtle-border bg-surface/80 backdrop-blur-md sticky top-0 z-40">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <Link href="/" className="group inline-flex items-center gap-2.5 text-lg font-extrabold tracking-tight text-white">
              <Image 
                src="/logo.jpg" 
                alt="Magnivel Technologies Logo" 
                width={32} 
                height={32} 
                className="rounded-full object-cover shadow-sm shadow-accent/15" 
              />
              <span>
                Magnivel <span className="bg-linear-to-r from-accent to-accent-light bg-clip-text text-transparent">Technologies</span>
              </span>
            </Link>
            <span className="text-xs font-semibold px-2 py-0.5 rounded border border-white/10 bg-white/5 text-muted/80 ml-2">
              Console
            </span>
          </div>
          
          <div className="flex items-center gap-6">
            <nav className="flex gap-6 text-sm font-semibold text-muted">
              <Link href="/admin/dashboard" className="hover:text-white transition-colors py-1 relative hover:after:w-full">
                Dashboard
              </Link>
              <Link href="/admin/leads" className="hover:text-white transition-colors py-1 relative hover:after:w-full">
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
          <h1 className="text-2xl font-extrabold text-white tracking-tight">{title}</h1>
          <span className="text-xs font-mono text-dimmed">Access IP: Secured Session</span>
        </div>
        {children}
      </div>
    </main>
  );
}
