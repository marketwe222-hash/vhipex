"use client";

import { useTheme } from "@/context/ThemeContext";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle theme"
      className="relative w-14 h-7 rounded-full transition-all duration-300 flex items-center px-1"
      style={{
        background:
          theme === "dark"
            ? "var(--glass-bg-strong)"
            : "var(--glass-bg-strong)",
        border: "1px solid var(--glass-border)",
        backdropFilter: "var(--glass-blur-sm)",
      }}
    >
      {/* Track icons */}
      <span className="absolute left-1.5 text-[11px]">🌙</span>
      <span className="absolute right-1.5 text-[11px]">☀️</span>

      {/* Sliding thumb */}
      <span
        className="w-5 h-5 rounded-full flex items-center justify-center text-[11px] shadow-sm transition-transform duration-300 z-10"
        style={{
          background: "var(--btn-primary-bg)",
          transform: theme === "dark" ? "translateX(0px)" : "translateX(28px)",
        }}
      >
        {theme === "dark" ? "🌙" : "☀️"}
      </span>
    </button>
  );
}
