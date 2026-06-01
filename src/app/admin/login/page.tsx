import { redirect } from "next/navigation";
import { AdminLoginForm } from "@/components/admin-login";
import { requireAdminFromCookies } from "@/lib/auth";
import Link from "next/link";
import Image from "next/image";

export const metadata = { title: "Admin Portal | Magnivel Technologies" };
export const dynamic = "force-dynamic";

export default async function AdminLoginPage() {
  const admin = await requireAdminFromCookies();
  if (admin) redirect("/admin/dashboard");

  return (
    <main className="relative grid min-h-screen place-items-center bg-background bg-grid gradient-mesh px-4 py-16 overflow-hidden">
      {/* Glow mesh */}
      <div className="absolute top-1/4 left-1/2 h-[400px] w-[600px] -translate-x-1/2 rounded-full bg-accent/5 blur-[120px] pointer-events-none" />
      
      <div className="relative w-full max-w-md flex flex-col gap-6 z-10">
        {/* Brand Header */}
        <div className="text-center flex flex-col items-center gap-3">
          <Link href="/" className="group inline-flex items-center gap-2.5 text-2xl font-extrabold tracking-tight text-white">
            <Image 
              src="/logo.jpg" 
              alt="Magnivel Technologies Logo" 
              width={40} 
              height={40} 
              className="rounded-full object-cover shadow-lg shadow-accent/20" 
            />
            <span>
              Magnivel <span className="bg-gradient-to-r from-accent-light to-[#a855f7] bg-clip-text text-transparent">Technologies</span>
            </span>
          </Link>
          <h1 className="mt-4 text-xl font-bold tracking-tight text-white">
            Control Console
          </h1>
          <p className="text-xs text-muted leading-relaxed max-w-xs">
            Sign in with authorized administrative credentials to review project leads and client inquiries.
          </p>
        </div>

        <AdminLoginForm />

        <div className="text-center mt-4">
          <Link href="/" className="text-xs font-semibold text-accent-light hover:underline inline-flex items-center gap-1.5">
            ← Return to public website
          </Link>
        </div>
      </div>
    </main>
  );
}
