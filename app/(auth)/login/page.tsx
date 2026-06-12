"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import {
  IconEye,
  IconEyeOff,
  IconLoader2,
  IconMail,
  IconLock,
} from "@tabler/icons-react";
import { useAuth } from "@/context/AuthContext";

export default function LoginPage() {
  const router = useRouter();
  const {
    login,
    loading,
    error,
    clearError,
    isAuthenticated,
    isAdmin,
    isStudent,
  } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    if (!loading && isAuthenticated) {
      if (isAdmin) router.replace("/admin/dashboard");
      else if (isStudent) router.replace("/portal/dashboard");
    }
  }, [isAuthenticated, isAdmin, isStudent, loading, router]);

  useEffect(() => {
    if (error) clearError();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [email, password]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password || submitting) return;
    setSubmitting(true);
    try {
      await login(email, password);
    } catch {
      // error handled in context
    } finally {
      setSubmitting(false);
    }
  };

  const isLoading = submitting || loading;

  return (
    <div className="w-full">
      {/* Heading */}
      <div className="mb-8">
        <h1
          className="text-4xl font-bold mb-2"
          style={{
            fontFamily: "Georgia, 'Times New Roman', serif",
            color: "var(--text-primary)",
            letterSpacing: "-0.02em",
          }}
        >
          Welcome back.
        </h1>
        <p className="text-sm" style={{ color: "var(--text-muted)" }}>
          Don't have an account?{" "}
          <Link
            href="/register"
            className="font-semibold hover:underline"
            style={{ color: "var(--accent-primary)" }}
          >
            Register here
          </Link>
        </p>
      </div>

      {/* Error banner */}
      {error && (
        <div
          className="flex items-start gap-3 p-4 rounded-xl text-sm mb-6"
          style={{
            background: "var(--error-bg)",
            border: "1px solid var(--error-border)",
            color: "var(--error-text)",
          }}
        >
          <span className="shrink-0 mt-0.5">⚠</span>
          <span>{error}</span>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Email */}
        <div
          className="flex items-center gap-3 px-4 py-3.5 rounded-xl"
          style={{
            background: "var(--glass-bg-strong)",
            border: "1px solid var(--glass-border)",
            backdropFilter: "var(--glass-blur)",
          }}
        >
          <IconMail
            size={18}
            style={{ color: "var(--text-muted)", flexShrink: 0 }}
          />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email address"
            autoComplete="email"
            required
            disabled={isLoading}
            className="flex-1 bg-transparent text-sm outline-none disabled:opacity-50 placeholder:text-[var(--text-muted)]"
            style={{ color: "var(--text-primary)" }}
          />
        </div>

        {/* Password */}
        <div
          className="flex items-center gap-3 px-4 py-3.5 rounded-xl"
          style={{
            background: "var(--glass-bg-strong)",
            border: "1px solid var(--glass-border)",
            backdropFilter: "var(--glass-blur)",
          }}
        >
          <IconLock
            size={18}
            style={{ color: "var(--text-muted)", flexShrink: 0 }}
          />
          <input
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            autoComplete="current-password"
            required
            disabled={isLoading}
            className="flex-1 bg-transparent text-sm outline-none disabled:opacity-50 placeholder:text-[var(--text-muted)]"
            style={{ color: "var(--text-primary)" }}
          />
          <button
            type="button"
            onClick={() => setShowPassword((v) => !v)}
            tabIndex={-1}
            style={{ color: "var(--text-muted)" }}
          >
            {showPassword ? <IconEyeOff size={18} /> : <IconEye size={18} />}
          </button>
        </div>

        {/* Remember + Forgot */}
        <div className="flex items-center justify-between">
          <label className="flex items-center gap-2 cursor-pointer select-none">
            <div
              className="w-5 h-5 rounded-md border flex items-center justify-center"
              style={{
                borderColor: "var(--glass-border)",
                background: "var(--glass-bg)",
              }}
            >
              {/* unchecked by default — wire up if needed */}
            </div>
            <span className="text-sm" style={{ color: "var(--text-muted)" }}>
              Remember me
            </span>
          </label>
          <Link
            href="/forgot-password"
            className="text-sm font-semibold hover:underline"
            style={{ color: "var(--accent-primary)" }}
          >
            Forgot password?
          </Link>
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={isLoading || !email || !password}
          className="btn-primary w-full py-4 text-sm font-semibold flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none rounded-xl"
        >
          {isLoading ? (
            <>
              <IconLoader2 size={17} className="animate-spin" />
              Signing in…
            </>
          ) : (
            "Sign In →"
          )}
        </button>
      </form>

      {/* Terms */}
      <p
        className="text-xs text-center mt-8"
        style={{ color: "var(--text-muted)" }}
      >
        By signing in you agree to our{" "}
        <Link href="/terms" className="underline hover:opacity-80">
          Terms
        </Link>{" "}
        and{" "}
        <Link href="/privacy" className="underline hover:opacity-80">
          Privacy Policy
        </Link>
        .
      </p>
    </div>
  );
}
