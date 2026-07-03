"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { IconChevronDown } from "@tabler/icons-react";
import { navItemVariants } from "./animations";
import { ProgramsDropdown } from "./ProgramsDropdown";
import type { NavLink } from "./types";

export function DesktopNavLink({
  link,
  index,
  isActive,
  dropdownTopOffset,
}: {
  link: NavLink;
  index: number;
  isActive: boolean;
  dropdownTopOffset: number;
}) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const hasDropdown = !!link.dropdown;

  useEffect(() => {
    if (!dropdownOpen) return;
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node))
        setDropdownOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [dropdownOpen]);

  return (
    <motion.div
      ref={ref}
      custom={index}
      variants={navItemVariants}
      initial="hidden"
      animate="show"
      style={{ position: "relative" }}
      onMouseEnter={() => hasDropdown && setDropdownOpen(true)}
      onMouseLeave={() => hasDropdown && setDropdownOpen(false)}
    >
      <Link
        href={link.href}
        style={{
          padding: "6px 13px",
          borderRadius: "8px",
          fontSize: "13.5px",
          fontWeight: 500,
          letterSpacing: "0.01em",
          textDecoration: "none",
          display: "flex",
          alignItems: "center",
          gap: "6px",
          position: "relative",
          color: isActive ? "var(--accent-primary)" : "var(--text-secondary)",
          background: isActive ? "var(--glass-bg-subtle)" : "transparent",
          transition: "background 0.18s ease, color 0.18s ease",
        }}
        onMouseEnter={(e) => {
          if (!isActive) {
            (e.currentTarget as HTMLElement).style.background =
              "var(--btn-ghost-bg-hover)";
            (e.currentTarget as HTMLElement).style.color =
              "var(--text-primary)";
          }
        }}
        onMouseLeave={(e) => {
          if (!isActive) {
            (e.currentTarget as HTMLElement).style.background = "transparent";
            (e.currentTarget as HTMLElement).style.color =
              "var(--text-secondary)";
          }
        }}
      >
        <span
          style={{ display: "none" }}
          className="hidden xl:block"
          aria-hidden="true"
        >
          {link.icon}
        </span>
        {link.label}
        {hasDropdown && (
          <motion.span
            animate={{ rotate: dropdownOpen ? 180 : 0 }}
            transition={{ duration: 0.2 }}
            style={{ display: "flex", color: "var(--text-muted)" }}
          >
            <IconChevronDown size={13} stroke={2} />
          </motion.span>
        )}
        {isActive && (
          <motion.span
            layoutId="nav-active-pill"
            style={{
              position: "absolute",
              bottom: 2,
              left: "50%",
              x: "-50%",
              width: "16px",
              height: "2px",
              borderRadius: "99px",
              background: "var(--accent-primary)",
            }}
            transition={{ type: "spring", stiffness: 380, damping: 30 }}
          />
        )}
      </Link>
      <AnimatePresence>
        {hasDropdown && dropdownOpen && (
          <ProgramsDropdown
            sections={link.dropdown!}
            onClose={() => setDropdownOpen(false)}
            topOffset={dropdownTopOffset}
          />
        )}
      </AnimatePresence>
    </motion.div>
  );
}
