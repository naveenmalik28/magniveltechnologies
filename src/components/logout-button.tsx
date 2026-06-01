"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { Icon } from "./icon";

export function LogoutButton() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  async function handleLogout() {
    if (!confirm("Are you sure you want to sign out of the control console?")) {
      return;
    }
    setLoading(true);
    try {
      const response = await fetch("/api/auth/logout", { method: "POST" });
      if (response.ok) {
        router.push("/admin/login");
        router.refresh();
      }
    } catch (e) {
      console.error("Sign out failed:", e);
    } finally {
      setLoading(false);
    }
  }

  return (
    <button
      disabled={loading}
      onClick={handleLogout}
      className="inline-flex items-center gap-1.5 rounded-lg border border-red-500/20 bg-red-500/10 px-3 py-1.5 text-xs font-semibold text-red-400 hover:bg-red-500/20 hover:border-red-400 transition-all duration-250 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
      title="Sign out of Admin Console"
    >
      <Icon name="logout" size={13} />
      {loading ? "Signing out..." : "Sign out"}
    </button>
  );
}
