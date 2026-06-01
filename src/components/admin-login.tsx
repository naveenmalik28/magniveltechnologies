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
    setError(result.message || "Unable to sign in.");
    setLoading(false);
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-4 rounded-lg border border-emerald-950/10 bg-white p-6 shadow-sm">
      <label className="grid gap-2 text-sm font-medium text-slate-800">
        Email
        <input name="email" type="email" required className="rounded-md border border-slate-300 px-3 py-2" />
      </label>
      <label className="grid gap-2 text-sm font-medium text-slate-800">
        Password
        <input name="password" type="password" required className="rounded-md border border-slate-300 px-3 py-2" />
      </label>
      <button disabled={loading} className="rounded-md bg-emerald-700 px-5 py-3 text-sm font-semibold text-white">
        {loading ? "Signing in..." : "Sign in"}
      </button>
      {error ? <p className="text-sm text-red-700">{error}</p> : null}
    </form>
  );
}
