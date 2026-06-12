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
  IconUser,
  IconId,
} from "@tabler/icons-react";
import { useAuth } from "@/context/AuthContext";

export default function RegisterPage() {
  const router = useRouter();
  const { isAuthenticated, loading } = useAuth();

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    studentId: "",
    password: "",
    confirmPassword: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    if (!loading && isAuthenticated) router.replace("/portal/dashboard");
  }, [isAuthenticated, loading, router]);

  const update =
    (field: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement>) => {
      setForm((prev) => ({ ...prev, [field]: e.target.value }));
      if (error) setError(null);
    };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (form.password.length < 8) {
      setError("Password must be at least 8 characters.");
      return;
    }
    if (form.password !== form.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    setSubmitting(true);
    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName: form.firstName,
          lastName: form.lastName,
          email: form.email,
          studentId: form.studentId,
          password: form.password,
        }),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error ?? "Registration failed. Please try again.");
        return;
      }
      setSuccess(true);
      setTimeout(() => router.push("/login"), 2500);
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  const isLoading = submitting || loading;
  const canSubmit =
    form.firstName &&
    form.lastName &&
    form.email &&
    form.studentId &&
    form.password &&
    form.confirmPassword;

  // Shared input container style
  const inputBox = {
    background: "var(--glass-bg-strong)",
    border: "1px solid var(--glass-border)",
    backdropFilter: "var(--glass-blur)",
  };

  if (success) {
    return (
      <div className="w-full text-center py-16 space-y-4">
        <div
          className="w-20 h-20 rounded-full flex items-center justify-center text-4xl mx-auto"
          style={{
            background: "var(--success-bg)",
            color: "var(--success-text)",
          }}
        >
          ✓
        </div>
        <h2
          className="text-2xl font-bold"
          style={{ fontFamily: "Georgia, serif", color: "var(--text-primary)" }}
        >
          Account Created!
        </h2>
        <p className="text-sm" style={{ color: "var(--text-muted)" }}>
          Redirecting you to login…
        </p>
      </div>
    );
  }

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
          Create account.
        </h1>
        <p className="text-sm" style={{ color: "var(--text-muted)" }}>
          Already have an account?{" "}
          <Link
            href="/login"
            className="font-semibold hover:underline"
            style={{ color: "var(--accent-primary)" }}
          >
            Sign in
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
        {/* Name row */}
        <div className="grid grid-cols-2 gap-3">
          <div
            className="flex items-center gap-3 px-4 py-3.5 rounded-xl"
            style={inputBox}
          >
            <IconUser
              size={18}
              style={{ color: "var(--text-muted)", flexShrink: 0 }}
            />
            <input
              type="text"
              value={form.firstName}
              onChange={update("firstName")}
              placeholder="First name"
              required
              disabled={isLoading}
              className="flex-1 bg-transparent text-sm outline-none disabled:opacity-50 placeholder:text-[var(--text-muted)] min-w-0"
              style={{ color: "var(--text-primary)" }}
            />
          </div>
          <div
            className="flex items-center gap-3 px-4 py-3.5 rounded-xl"
            style={inputBox}
          >
            <input
              type="text"
              value={form.lastName}
              onChange={update("lastName")}
              placeholder="Last name"
              required
              disabled={isLoading}
              className="flex-1 bg-transparent text-sm outline-none disabled:opacity-50 placeholder:text-[var(--text-muted)] min-w-0"
              style={{ color: "var(--text-primary)" }}
            />
          </div>
        </div>

        {/* Student ID */}
        <div
          className="flex items-center gap-3 px-4 py-3.5 rounded-xl"
          style={inputBox}
        >
          <IconId
            size={18}
            style={{ color: "var(--text-muted)", flexShrink: 0 }}
          />
          <input
            type="text"
            value={form.studentId}
            onChange={update("studentId")}
            placeholder="Student ID  (e.g. VHX-2024-0001)"
            required
            disabled={isLoading}
            className="flex-1 bg-transparent text-sm outline-none disabled:opacity-50 placeholder:text-[var(--text-muted)]"
            style={{ color: "var(--text-primary)" }}
          />
        </div>

        {/* Email */}
        <div
          className="flex items-center gap-3 px-4 py-3.5 rounded-xl"
          style={inputBox}
        >
          <IconMail
            size={18}
            style={{ color: "var(--text-muted)", flexShrink: 0 }}
          />
          <input
            type="email"
            value={form.email}
            onChange={update("email")}
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
          style={inputBox}
        >
          <IconLock
            size={18}
            style={{ color: "var(--text-muted)", flexShrink: 0 }}
          />
          <input
            type={showPassword ? "text" : "password"}
            value={form.password}
            onChange={update("password")}
            placeholder="Password  (min. 8 characters)"
            autoComplete="new-password"
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

        {/* Confirm Password */}
        <div
          className="flex items-center gap-3 px-4 py-3.5 rounded-xl"
          style={{
            ...inputBox,
            borderColor:
              form.confirmPassword && form.password !== form.confirmPassword
                ? "var(--error-border)"
                : "var(--glass-border)",
          }}
        >
          <IconLock
            size={18}
            style={{ color: "var(--text-muted)", flexShrink: 0 }}
          />
          <input
            type={showConfirm ? "text" : "password"}
            value={form.confirmPassword}
            onChange={update("confirmPassword")}
            placeholder="Confirm password"
            autoComplete="new-password"
            required
            disabled={isLoading}
            className="flex-1 bg-transparent text-sm outline-none disabled:opacity-50 placeholder:text-[var(--text-muted)]"
            style={{ color: "var(--text-primary)" }}
          />
          <button
            type="button"
            onClick={() => setShowConfirm((v) => !v)}
            tabIndex={-1}
            style={{ color: "var(--text-muted)" }}
          >
            {showConfirm ? <IconEyeOff size={18} /> : <IconEye size={18} />}
          </button>
        </div>
        {form.confirmPassword && form.password !== form.confirmPassword && (
          <p className="text-xs -mt-2" style={{ color: "var(--error-text)" }}>
            Passwords don't match
          </p>
        )}

        {/* Submit */}
        <button
          type="submit"
          disabled={isLoading || !canSubmit}
          className="btn-primary w-full py-4 text-sm font-semibold flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none rounded-xl"
        >
          {isLoading ? (
            <>
              <IconLoader2 size={17} className="animate-spin" />
              Creating account…
            </>
          ) : (
            "Create Account →"
          )}
        </button>
      </form>

      {/* Terms */}
      <p
        className="text-xs text-center mt-8"
        style={{ color: "var(--text-muted)" }}
      >
        By registering you agree to our{" "}
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
