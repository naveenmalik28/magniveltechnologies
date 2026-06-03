"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export function AdminLoginForm() {
  const router = useRouter();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setError("");
    const payload = Object.fromEntries(new FormData(event.currentTarget).entries());

    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        router.push("/admin/dashboard");
        router.refresh();
        return;
      }

      const result = (await response.json()) as { message?: string };
      setError(result.message || "Unable to sign in. Verify your email and password.");
    } catch {
      setError("Unable to sign in right now. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form 
      onSubmit={onSubmit} 
      className="grid gap-5 rounded-xl border border-subtle-border bg-surface/50 p-6 sm:p-8 shadow-2xl relative glow-card backdrop-blur-md"
    >
      <label className="grid gap-2 text-sm font-medium text-muted">
        <span>Email Address</span>
        <input 
          name="email" 
          type="email" 
          required 
          placeholder="admin@magnivel.com"
          className="rounded-lg border border-subtle-border bg-background/50 px-3.5 py-2.5 text-white outline-none focus:border-accent focus:ring-2 focus:ring-accent/15 placeholder:text-dimmed transition-all"
        />
      </label>
      
      <label className="grid gap-2 text-sm font-medium text-muted">
        <span>Password</span>
        <input 
          name="password" 
          type="password" 
          required 
          placeholder="••••••••"
          className="rounded-lg border border-subtle-border bg-background/50 px-3.5 py-2.5 text-white outline-none focus:border-accent focus:ring-2 focus:ring-accent/15 placeholder:text-dimmed transition-all"
        />
      </label>
      
      <button 
        disabled={loading} 
        className="mt-2 w-full inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-accent to-accent-light px-5 py-3.5 text-sm font-semibold text-white hover:shadow-lg hover:shadow-accent/25 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 disabled:cursor-not-allowed disabled:opacity-50"
      >
        {loading ? (
          <>
            <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
            </svg>
            Verifying...
          </>
        ) : (
          "Sign In to Console"
        )}
      </button>
      
      {error ? (
        <div className="mt-2 text-center p-3 rounded-lg border border-red-500/20 bg-red-950/20 text-red-400 text-xs font-semibold">
          {error}
        </div>
      ) : null}
    </form>
  );
}
