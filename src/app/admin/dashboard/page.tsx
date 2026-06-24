import Link from "next/link";
import { prisma } from "@/lib/db";
import { Icon } from "@/components/icon";
import { AdminFrame } from "@/components/admin-frame";

export const metadata = { title: "Admin Console | Magnivel Technologies" };
export const dynamic = "force-dynamic";

type Summary = {
  total: number;
  newLeads: number;
  activeLeads: number;
  closed: number;
};

export default async function AdminDashboardPage() {
  const [total, newLeads, activeLeads, closed] = await Promise.all([
    prisma.lead.count({ where: { archived: false } }),
    prisma.lead.count({ where: { status: "new", archived: false } }),
    prisma.lead.count({ where: { status: { in: ["contacted", "in discussion", "proposal sent"] }, archived: false } }),
    prisma.lead.count({ where: { status: { in: ["won", "closed"] }, archived: false } }),
  ]);
  const summary: Summary = { total, newLeads, activeLeads, closed };

  return (
    <AdminFrame title="Dashboard Console" activeTab="dashboard">
      {/* Overview stats grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {[
          { label: "Total Inquiries", value: summary.total, icon: "globe", color: "text-slate-600 bg-slate-50 border-slate-200" },
          { label: "New Requests", value: summary.newLeads, icon: "zap", color: "text-accent-dark bg-accent-subtle border-accent/15" },
          { label: "Active Discussions", value: summary.activeLeads, icon: "message-circle", color: "text-yellow-600 bg-yellow-50 border-yellow-200" },
          { label: "Won & Closed", value: summary.closed, icon: "check-circle", color: "text-emerald-600 bg-emerald-50 border-emerald-200" },
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
