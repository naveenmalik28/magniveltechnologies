import { redirect } from "next/navigation";
import { AdminLoginForm } from "@/components/admin-login";
import { requireAdminFromCookies } from "@/lib/auth";

export const metadata = { title: "Admin Login" };
export const dynamic = "force-dynamic";

export default async function AdminLoginPage() {
  const admin = await requireAdminFromCookies();
  if (admin) redirect("/admin/dashboard");

  return (
    <main className="grid min-h-screen place-items-center bg-slate-50 px-4 py-12">
      <div className="w-full max-w-md">
        <p className="text-sm font-semibold uppercase tracking-widest text-emerald-700">Magnivel Admin</p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight text-emerald-950">Sign in to manage leads</h1>
        <div className="mt-6">
          <AdminLoginForm />
        </div>
      </div>
    </main>
  );
}
