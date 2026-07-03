"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  IconLanguage,
  IconMail,
  IconMapPin,
  IconMoon,
  IconPhone,
  IconSun,
  IconUserCircle,
} from "@tabler/icons-react";
import { logoVariants } from "./animations";
import { LANGUAGES } from "./navigation";

export function TopBar({ scrolled }: { scrolled: boolean }) {
  const [activeLang, setActiveLang] = useState("en");

  return (
    <div
      className="hidden lg:block"
      style={{
        borderBottom: "none",
        background: scrolled ? "var(--navbar-bg)" : "transparent",
        backdropFilter: scrolled ? "var(--navbar-blur)" : "none",
        WebkitBackdropFilter: scrolled ? "var(--navbar-blur)" : "none",
        transition: "background 0.4s ease",
      }}
    >
      <div
        className="mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 2xl:px-10"
        style={{ height: "34px", maxWidth: "1280px" }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
          <a
            href="tel:+237677000000"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "5px",
              fontSize: "11.5px",
              color: "var(--text-muted)",
              textDecoration: "none",
              transition: "color 0.15s",
            }}
            onMouseEnter={(e) =>
              ((e.currentTarget as HTMLElement).style.color =
                "var(--text-primary)")
            }
            onMouseLeave={(e) =>
              ((e.currentTarget as HTMLElement).style.color =
                "var(--text-muted)")
            }
          >
            <IconPhone size={12} stroke={1.8} />
            +237 652 761 202
          </a>
          <a
            href="mailto:info@vihipex.com"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "5px",
              fontSize: "11.5px",
              color: "var(--text-muted)",
              textDecoration: "none",
              transition: "color 0.15s",
            }}
            onMouseEnter={(e) =>
              ((e.currentTarget as HTMLElement).style.color =
                "var(--text-primary)")
            }
            onMouseLeave={(e) =>
              ((e.currentTarget as HTMLElement).style.color =
                "var(--text-muted)")
            }
          >
            <IconMail size={12} stroke={1.8} />
            info@vihipex.com
          </a>
          <Link
            href="/contact"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "5px",
              fontSize: "11.5px",
              color: "var(--text-muted)",
              textDecoration: "none",
              transition: "color 0.15s",
            }}
            onMouseEnter={(e) =>
              ((e.currentTarget as HTMLElement).style.color =
                "var(--text-primary)")
            }
            onMouseLeave={(e) =>
              ((e.currentTarget as HTMLElement).style.color =
                "var(--text-muted)")
            }
          >
            <IconMapPin size={12} stroke={1.8} />
            Bafoussam · Yaoundé
          </Link>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
          <IconLanguage
            size={13}
            stroke={1.8}
            style={{ color: "var(--text-muted)" }}
          />
          {LANGUAGES.map((lang) => (
            <button
              key={lang.code}
              onClick={() => setActiveLang(lang.code)}
              aria-label={`Switch to ${lang.full}`}
              style={{
                padding: "2px 8px",
                borderRadius: "5px",
                fontSize: "11px",
                fontWeight: activeLang === lang.code ? 700 : 500,
                cursor: "pointer",
                border:
                  activeLang === lang.code
                    ? "1px solid var(--glass-border)"
                    : "1px solid transparent",
                background:
                  activeLang === lang.code
                    ? "var(--glass-bg-subtle)"
                    : "transparent",
                color:
                  activeLang === lang.code
                    ? "var(--text-primary)"
                    : "var(--text-muted)",
                transition: "all 0.15s",
                letterSpacing: "0.04em",
              }}
            >
              {lang.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export function Logo() {
  return (
    <motion.div variants={logoVariants} initial="hidden" animate="show">
      <Image src="/icons/logo.png" alt="Logo" width={120} height={120} />
    </motion.div>
  );
}

export function ThemeToggle({
  theme,
  toggleTheme,
}: {
  theme: string;
  toggleTheme: () => void;
}) {
  return (
    <motion.button
      onClick={toggleTheme}
      aria-label="Toggle theme"
      whileHover={{ scale: 1.07 }}
      whileTap={{ scale: 0.93 }}
      style={{
        width: 38,
        height: 38,
        borderRadius: "10px",
        border: "1px solid var(--glass-border)",
        background: "var(--glass-bg-subtle)",
        backdropFilter: "var(--glass-blur-sm)",
        WebkitBackdropFilter: "var(--glass-blur-sm)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
        color: "var(--text-secondary)",
        flexShrink: 0,
      }}
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={theme}
          initial={{ opacity: 0, rotate: -30, scale: 0.7 }}
          animate={{ opacity: 1, rotate: 0, scale: 1 }}
          exit={{ opacity: 0, rotate: 30, scale: 0.7 }}
          transition={{ duration: 0.22, ease: "easeOut" }}
          style={{ display: "flex" }}
        >
          {theme === "light" ? (
            <IconMoon size={17} stroke={1.8} />
          ) : (
            <IconSun size={17} stroke={1.8} />
          )}
        </motion.span>
      </AnimatePresence>
    </motion.button>
  );
}

export function PortalIcon() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.35, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
    >
      <Link
        href="/login"
        aria-label="Student portal"
        style={{
          width: 38,
          height: 38,
          borderRadius: "10px",
          border: "1px solid var(--glass-border)",
          background: "var(--glass-bg-subtle)",
          backdropFilter: "var(--glass-blur-sm)",
          WebkitBackdropFilter: "var(--glass-blur-sm)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "var(--text-secondary)",
          textDecoration: "none",
          flexShrink: 0,
          transition: "color 0.18s, background 0.18s",
        }}
        onMouseEnter={(e) => {
          const el = e.currentTarget as HTMLElement;
          el.style.color = "var(--accent-primary)";
          el.style.background = "var(--glass-bg)";
        }}
        onMouseLeave={(e) => {
          const el = e.currentTarget as HTMLElement;
          el.style.color = "var(--text-secondary)";
          el.style.background = "var(--glass-bg-subtle)";
        }}
      >
        <IconUserCircle size={20} stroke={1.6} />
      </Link>
    </motion.div>
  );
}
