"use client";

import { useRouter } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import { Icon } from "@/components/icon";

const REMEMBERED_EMAIL_KEY = "magnivel_admin_remembered_email";

export function AdminLoginForm() {
  const router = useRouter();
  const formRef = useRef<HTMLFormElement>(null);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  // Restore remembered email on initial browser mount
  useEffect(() => {
    try {
      const savedEmail = localStorage.getItem(REMEMBERED_EMAIL_KEY);
      if (savedEmail) {
        setEmail(savedEmail);
        setRememberMe(true);
      }
    } catch {
      // LocalStorage access may fail in certain restricted browser contexts
    }
  }, []);

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setError("");

    const formElement = event.currentTarget;
    const payload = {
      email,
      password,
      remember: rememberMe,
    };

    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        // Cache remembered email in browser storage
        try {
          if (rememberMe) {
            localStorage.setItem(REMEMBERED_EMAIL_KEY, email);
          } else {
            localStorage.removeItem(REMEMBERED_EMAIL_KEY);
          }
        } catch {
          // Ignore storage restrictions
        }

        // Explicitly trigger browser Password Manager credential save prompt
        if (typeof window !== "undefined" && "credentials" in navigator) {
          try {
            const PwdCred = (window as unknown as { PasswordCredential?: new (form: HTMLFormElement) => Credential }).PasswordCredential;
            if (PwdCred) {
              const cred = new PwdCred(formElement);
              await navigator.credentials.store(cred);
            }
          } catch {
            // Non-critical fallback for browsers with partial Credential API support
          }
        }

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
      ref={formRef}
      id="admin-login-form"
      name="adminLoginForm"
      method="post"
      action="/api/auth/login"
      onSubmit={onSubmit}
      className="glass-card grid gap-5 p-6 sm:p-8"
      autoComplete="on"
    >
      {/* Email / Username field */}
      <div className="grid gap-2">
        <label htmlFor="admin-email" className="text-sm font-semibold text-heading flex items-center justify-between">
          <span>Email Address</span>
          <span className="text-[10px] text-muted font-normal">Browser autofill supported</span>
        </label>
        <div className="relative">
          <input
            id="admin-email"
            name="email"
            type="email"
            required
            autoComplete="username"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="admin@magnivel.com"
            className="w-full rounded-lg border border-subtle-border bg-background px-3.5 py-2.5 text-xs sm:text-sm text-foreground placeholder:text-dimmed focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/15 transition-all"
          />
        </div>
      </div>

      {/* Password field with reveal toggle */}
      <div className="grid gap-2">
        <div className="flex items-center justify-between">
          <label htmlFor="admin-password" className="text-sm font-semibold text-heading">
            Password
          </label>
        </div>
        <div className="relative">
          <input
            id="admin-password"
            name="password"
            type={showPassword ? "text" : "password"}
            required
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="••••••••"
            className="w-full rounded-lg border border-subtle-border bg-background px-3.5 py-2.5 pr-10 text-xs sm:text-sm text-foreground placeholder:text-dimmed focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/15 transition-all"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-muted hover:text-heading transition-colors p-1"
            aria-label={showPassword ? "Hide password" : "Show password"}
            tabIndex={-1}
          >
            <Icon name={showPassword ? "eye-off" : "eye"} size={16} />
          </button>
        </div>
      </div>

      {/* Remember me option */}
      <div className="flex items-center justify-between text-xs pt-1">
        <label htmlFor="admin-remember" className="flex items-center gap-2 cursor-pointer select-none text-muted hover:text-heading transition-colors">
          <input
            id="admin-remember"
            type="checkbox"
            name="remember"
            checked={rememberMe}
            onChange={(e) => setRememberMe(e.target.checked)}
            className="h-4 w-4 rounded border-subtle-border text-primary focus:ring-accent/20 cursor-pointer accent-primary"
          />
          <span className="font-medium">Remember on this browser</span>
        </label>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={loading}
        className="btn-primary w-full py-3.5 mt-2 text-xs font-heading font-bold shadow-md shadow-primary/20"
      >
        {loading ? (
          <>
            <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white inline-block" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
            </svg>
            Verifying Credentials...
          </>
        ) : (
          "Sign In to Console"
        )}
      </button>

      {error ? (
        <div className="mt-2 text-center p-3 rounded-lg border border-red-200 bg-red-50 text-red-600 text-xs font-semibold animate-fade-in">
          {error}
        </div>
      ) : null}
    </form>
  );
}
