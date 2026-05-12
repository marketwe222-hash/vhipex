"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  useCallback,
} from "react";

// ─── Types ───────────────────────────────────────────────────────────────────

type Role = "ADMIN" | "STUDENT";

type Student = {
  id: string;
  firstName: string;
  lastName: string;
  studentId: string;
  class: string;
  department?: string | null;
};

type User = {
  id: string;
  email: string;
  role: Role;
  student?: Student | null;
};

type AuthState = {
  user: User | null;
  loading: boolean;
  error: string | null;
};

type AuthContextType = AuthState & {
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  clearError: () => void;
  isAdmin: boolean;
  isStudent: boolean;
  isAuthenticated: boolean;
};

// ─── Context ─────────────────────────────────────────────────────────────────

const AuthContext = createContext<AuthContextType | null>(null);

// ─── Provider ────────────────────────────────────────────────────────────────

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [state, setState] = useState<AuthState>({
    user: null,
    loading: true,
    error: null,
  });

  // Fetch current session on mount
  const fetchMe = useCallback(async () => {
    try {
      const res = await fetch("/api/auth/me", { credentials: "include" });
      if (res.ok) {
        const user: User = await res.json();
        setState({ user, loading: false, error: null });
      } else {
        setState({ user: null, loading: false, error: null });
      }
    } catch {
      setState({ user: null, loading: false, error: null });
    }
  }, []);

  useEffect(() => {
    fetchMe();
  }, [fetchMe]);

  // ── Login ──────────────────────────────────────────────────────────────────
  const login = useCallback(async (email: string, password: string) => {
    setState((prev) => ({ ...prev, loading: true, error: null }));
    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        setState((prev) => ({
          ...prev,
          loading: false,
          error: data.error ?? "Login failed",
        }));
        throw new Error(data.error ?? "Login failed");
      }

      setState({ user: data.user, loading: false, error: null });
    } catch (err) {
      const message = err instanceof Error ? err.message : "Login failed";
      setState((prev) => ({ ...prev, loading: false, error: message }));
      throw err;
    }
  }, []);

  // ── Logout ─────────────────────────────────────────────────────────────────
  const logout = useCallback(async () => {
    setState((prev) => ({ ...prev, loading: true }));
    try {
      await fetch("/api/auth/logout", {
        method: "POST",
        credentials: "include",
      });
    } finally {
      setState({ user: null, loading: false, error: null });
    }
  }, []);

  // ── Clear Error ────────────────────────────────────────────────────────────
  const clearError = useCallback(() => {
    setState((prev) => ({ ...prev, error: null }));
  }, []);

  // ── Derived ───────────────────────────────────────────────────────────────
  const isAdmin = state.user?.role === "ADMIN";
  const isStudent = state.user?.role === "STUDENT";
  const isAuthenticated = !!state.user;

  return (
    <AuthContext.Provider
      value={{
        ...state,
        login,
        logout,
        clearError,
        isAdmin,
        isStudent,
        isAuthenticated,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

// ─── Hook ─────────────────────────────────────────────────────────────────────

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used inside AuthProvider");
  return ctx;
}
