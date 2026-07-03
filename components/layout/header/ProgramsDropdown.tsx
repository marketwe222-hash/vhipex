"use client";

import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  IconArrowRight,
  IconAward,
  IconBook,
  IconBriefcase,
  IconCertificate,
  IconChevronDown,
  IconChevronUp,
  IconClipboardList,
  IconClock,
  IconFileDescription,
  IconFlame,
  IconMapPin,
  IconPhone,
  IconPlus,
  IconStarFilled,
  IconUsers,
} from "@tabler/icons-react";
import { dropdownVariants, drawerItemVariants } from "./animations";
import { COLOR_MAP, ITEM_BADGE_MAP } from "./navigation";
import type { DropdownItem, DropdownSection } from "./types";

// ─── Shared style tokens (mirrors HeroSection) ────────────────────────────────

const GLASS_CARD: React.CSSProperties = {
  background: "var(--glass-bg)",
  backdropFilter: "var(--glass-blur)",
  WebkitBackdropFilter: "var(--glass-blur)",
  border: "1px solid var(--glass-border)",
  borderRadius: "14px",
};

const GLASS_CARD_SM: React.CSSProperties = {
  background: "var(--glass-bg-sm)",
  backdropFilter: "var(--glass-blur-sm)",
  WebkitBackdropFilter: "var(--glass-blur-sm)",
  border: "1px solid var(--glass-border)",
  borderRadius: "10px",
};

const DIVIDER: React.CSSProperties = {
  borderBottom: "1px solid var(--glass-border)",
};

// ─── ItemBadge ────────────────────────────────────────────────────────────────

function ItemBadge({ type }: { type: keyof typeof ITEM_BADGE_MAP }) {
  const s = ITEM_BADGE_MAP[type];
  return (
    <span
      style={{
        fontSize: "8px",
        fontWeight: 700,
        letterSpacing: "0.04em",
        padding: "1px 5px",
        borderRadius: "99px",
        background: s.bg,
        color: s.color,
        whiteSpace: "nowrap",
        flexShrink: 0,
        border: `1px solid ${s.color}30`,
      }}
    >
      {s.label}
    </span>
  );
}

// ─── ProgramRow ───────────────────────────────────────────────────────────────

function ProgramRow({
  item,
  onClose,
}: {
  item: DropdownItem;
  onClose: () => void;
}) {
  return (
    <Link
      href={item.href}
      onClick={onClose}
      style={{
        display: "flex",
        alignItems: "flex-start",
        gap: "8px",
        padding: "6px 8px",
        borderRadius: "8px",
        textDecoration: "none",
        transition: "background 0.15s, border-color 0.15s",
        cursor: "pointer",
        border: "1px solid transparent",
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.background = "var(--glass-bg-sm)";
        el.style.borderColor = "var(--glass-border)";
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.background = "transparent";
        el.style.borderColor = "transparent";
      }}
    >
      <span
        style={{
          marginTop: "2px",
          flexShrink: 0,
          color: "var(--accent-primary)",
        }}
      >
        {item.icon}
      </span>
      <div style={{ flex: 1, minWidth: 0 }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "5px",
            flexWrap: "wrap",
          }}
        >
          <span
            style={{
              fontSize: "12px",
              fontWeight: 500,
              color: "var(--text-primary)",
              lineHeight: 1.2,
            }}
          >
            {item.label}
          </span>
          {item.badge && <ItemBadge type={item.badge} />}
        </div>
        <span
          style={{
            fontSize: "10.5px",
            color: "var(--text-muted)",
            lineHeight: 1.3,
          }}
        >
          {item.description}
        </span>
      </div>
      <IconArrowRight
        size={11}
        stroke={2}
        style={{
          color: "var(--text-muted)",
          flexShrink: 0,
          marginTop: "3px",
          opacity: 0.4,
        }}
      />
    </Link>
  );
}

// ─── SectionCard ──────────────────────────────────────────────────────────────

const PREVIEW_COUNT = 4;

function SectionCard({
  section,
  onClose,
}: {
  section: DropdownSection;
  onClose: () => void;
}) {
  const [expanded, setExpanded] = useState(false);
  const c = COLOR_MAP[section.color];
  const hasMore = section.items.length > PREVIEW_COUNT;
  const hiddenCount = section.items.length - PREVIEW_COUNT;
  const visibleItems = expanded
    ? section.items
    : section.items.slice(0, PREVIEW_COUNT);

  return (
    <div
      style={{
        ...GLASS_CARD,
        padding: "12px",
        display: "flex",
        flexDirection: "column",
        gap: "3px",
        boxShadow: "0 4px 24px rgba(0,0,0,0.08)",
        transition: "background 0.18s ease, border-color 0.18s ease",
      }}
      onMouseEnter={(e) => {
        // slightly brighten on hover — same feel as HeroVideo card
        (e.currentTarget as HTMLElement).style.borderColor =
          "var(--accent-primary)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.borderColor =
          "var(--glass-border)";
      }}
    >
      {/* Card header */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: "8px",
          paddingBottom: "8px",
          ...DIVIDER,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
          <span
            style={{
              fontSize: "11px",
              fontWeight: 700,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color: "var(--text-primary)",
            }}
          >
            {section.heading}
          </span>
          {section.sectionBadge && (
            <span
              style={{
                fontSize: "8.5px",
                fontWeight: 700,
                letterSpacing: "0.05em",
                padding: "2px 5px",
                borderRadius: "99px",
                background: c.badgeBg,
                color: c.badgeText,
                whiteSpace: "nowrap",
                border: `1px solid ${c.badgeText}25`,
              }}
            >
              {section.sectionBadge}
            </span>
          )}
        </div>
        <Link
          href={section.viewAllHref}
          onClick={onClose}
          style={{
            fontSize: "10px",
            fontWeight: 600,
            color: c.badgeText,
            textDecoration: "none",
            display: "flex",
            alignItems: "center",
            gap: "3px",
            whiteSpace: "nowrap",
            padding: "3px 7px",
            borderRadius: "6px",
            background: c.badgeBg,
            border: `1px solid ${c.badgeText}25`,
            transition: "opacity 0.15s",
          }}
          onMouseEnter={(e) =>
            ((e.currentTarget as HTMLElement).style.opacity = "0.7")
          }
          onMouseLeave={(e) =>
            ((e.currentTarget as HTMLElement).style.opacity = "1")
          }
        >
          View all <IconArrowRight size={9} stroke={2.5} />
        </Link>
      </div>

      {/* Items */}
      <div style={{ display: "flex", flexDirection: "column", gap: "1px" }}>
        {visibleItems.map((item) => (
          <ProgramRow key={item.href} item={item} onClose={onClose} />
        ))}
      </div>

      {/* Show more/less */}
      {hasMore && (
        <button
          onClick={() => setExpanded((v) => !v)}
          style={{
            marginTop: "6px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "5px",
            padding: "6px 10px",
            borderRadius: "8px",
            fontSize: "10.5px",
            fontWeight: 600,
            cursor: "pointer",
            border: `1px dashed ${c.badgeText}50`,
            background: "transparent",
            color: c.badgeText,
            transition: "background 0.15s",
            width: "100%",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLElement).style.background = c.badgeBg;
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLElement).style.background = "transparent";
          }}
        >
          {expanded ? (
            <>
              <IconChevronUp size={11} stroke={2.5} /> Show less
            </>
          ) : (
            <>
              <IconPlus size={11} stroke={2.5} /> {hiddenCount} more program
              {hiddenCount > 1 ? "s" : ""}
            </>
          )}
        </button>
      )}

      {/* View all CTA — same style as HeroSection's glass btn */}
      <Link
        href={section.viewAllHref}
        onClick={onClose}
        style={{
          ...GLASS_CARD_SM,
          marginTop: "4px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "5px",
          padding: "7px 10px",
          fontSize: "11px",
          fontWeight: 600,
          textDecoration: "none",
          color: c.infoText,
          transition: "opacity 0.15s",
        }}
        onMouseEnter={(e) =>
          ((e.currentTarget as HTMLElement).style.opacity = "0.75")
        }
        onMouseLeave={(e) =>
          ((e.currentTarget as HTMLElement).style.opacity = "1")
        }
      >
        <IconFileDescription size={11} stroke={2} />
        {section.viewAllLabel}
        <IconArrowRight size={10} stroke={2.5} />
      </Link>
    </div>
  );
}

// ─── ProgramsDropdown ─────────────────────────────────────────────────────────

export function ProgramsDropdown({
  sections,
  onClose,
  topOffset,
}: {
  sections: DropdownSection[];
  onClose: () => void;
  topOffset: number;
}) {
  const totalPrograms = sections.reduce((acc, s) => acc + s.items.length, 0);

  return (
    <motion.div
      variants={dropdownVariants}
      initial="hidden"
      animate="show"
      exit="exit"
      style={{
        position: "fixed",
        top: `${topOffset}px`,
        left: 0,
        right: 0,
        width: "100%",
        // ← same base as HeroSection
        background: "var(--bg-base)",
        backdropFilter: "var(--glass-blur)",
        WebkitBackdropFilter: "var(--glass-blur)",
        borderBottom: "1px solid var(--glass-border)",
        borderTop: "1px solid var(--glass-border)",
        zIndex: 49,
        boxShadow: "0 24px 64px rgba(0,0,0,0.14)",
        transformOrigin: "top center",
        maxHeight: `calc(100vh - ${topOffset + 12}px)`,
        overflowY: "auto",
      }}
    >
      <div
        style={{ maxWidth: "1400px", margin: "0 auto", padding: "18px 28px" }}
      >
        {/* ── Header row ── */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: "14px",
            paddingBottom: "12px",
            ...DIVIDER,
          }}
        >
          <div>
            <h3
              style={{
                fontSize: "14px",
                fontWeight: 700,
                color: "var(--text-primary)",
                margin: 0,
                letterSpacing: "0.01em",
                fontFamily: "Georgia, 'Times New Roman', serif",
              }}
            >
              VIHIPEX Academic Programs
            </h3>
            <p
              style={{
                fontSize: "11px",
                color: "var(--text-muted)",
                margin: "2px 0 0",
              }}
            >
              {totalPrograms} programs across {sections.length} fields — CAPIEMP
              · CAPIET · ND · HPD · CQP · AQP · DQP · BTS · DEGREE · Master
            </p>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            {/* How to Apply — glass-sm style from HeroSection */}
            <Link
              href="/admissions"
              onClick={onClose}
              style={{
                ...GLASS_CARD_SM,
                display: "flex",
                alignItems: "center",
                gap: "5px",
                padding: "6px 12px",
                fontSize: "11.5px",
                fontWeight: 600,
                textDecoration: "none",
                color: "var(--text-secondary)",
              }}
            >
              <IconClipboardList size={12} stroke={2} />
              How to Apply
            </Link>

            {/* Apply Now — accent red badge */}
            <Link
              href="/admissions/apply"
              onClick={onClose}
              style={{
                ...GLASS_CARD_SM,
                display: "flex",
                alignItems: "center",
                gap: "5px",
                padding: "6px 12px",
                fontSize: "11.5px",
                fontWeight: 600,
                textDecoration: "none",
                color: "var(--badge-red-text)",
                background: "var(--error-bg)",
                border: "1px solid var(--error-border)",
              }}
            >
              <IconFlame size={12} stroke={2} />
              Apply Now
            </Link>

            {/* Full Catalog — btn-primary same as HeroSection CTA */}
            <Link
              href="/academics"
              onClick={onClose}
              className="btn-primary"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "5px",
                padding: "6px 14px",
                borderRadius: "8px",
                fontSize: "11.5px",
                fontWeight: 600,
                textDecoration: "none",
              }}
            >
              <IconBook size={12} stroke={2} />
              Full Catalog
              <IconArrowRight size={11} stroke={2.5} />
            </Link>
          </div>
        </div>

        {/* ── Section cards grid ── */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "10px",
          }}
        >
          {sections.map((section) => (
            <SectionCard
              key={section.heading}
              section={section}
              onClose={onClose}
            />
          ))}
        </div>

        {/* ── Footer strip ── */}
        <div
          style={{
            marginTop: "14px",
            paddingTop: "12px",
            borderTop: "1px solid var(--glass-border)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "8px",
          }}
        >
          {/* Info pills — mirrors HeroSection trust badges */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "16px",
              flexWrap: "wrap",
            }}
          >
            {[
              {
                icon: <IconUsers size={11} stroke={2} />,
                label: "500+ Students Enrolled",
              },
              {
                icon: <IconClock size={11} stroke={2} />,
                label: "1–3 Year Programs",
              },
              {
                icon: <IconMapPin size={11} stroke={2} />,
                label: "Bafoussam & Yaoundé, Cameroon",
              },
              {
                icon: <IconPhone size={11} stroke={2} />,
                label: "10,000 frs Registration",
              },
              {
                icon: <IconStarFilled size={10} stroke={2} />,
                label: "MINEFOP Accredited — Arrêté 000010",
              },
            ].map(({ icon, label }) => (
              <div
                key={label}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "5px",
                  color: "var(--text-muted)",
                  fontSize: "11px",
                  whiteSpace: "nowrap",
                }}
              >
                <span style={{ color: "var(--accent-primary)" }}>{icon}</span>
                {label}
              </div>
            ))}
          </div>

          {/* Quick-link pills — glass-sm style */}
          <div style={{ display: "flex", gap: "6px" }}>
            <Link
              href="/academics/cqp"
              onClick={onClose}
              style={{
                ...GLASS_CARD_SM,
                display: "flex",
                alignItems: "center",
                gap: "4px",
                padding: "5px 10px",
                fontSize: "11px",
                fontWeight: 600,
                textDecoration: "none",
                color: "var(--success-text)",
                background: "var(--success-bg)",
                border: "1px solid var(--success-border)",
              }}
            >
              <IconCertificate size={12} stroke={2} />
              CQP / DQP Short Courses
            </Link>
            <Link
              href="/academics/masters"
              onClick={onClose}
              style={{
                ...GLASS_CARD_SM,
                display: "flex",
                alignItems: "center",
                gap: "4px",
                padding: "5px 10px",
                fontSize: "11px",
                fontWeight: 600,
                textDecoration: "none",
                color: "var(--badge-blue-text)",
                background: "var(--info-bg)",
                border: "1px solid var(--info-border)",
              }}
            >
              <IconAward size={12} stroke={2} />
              Master&apos;s Programs
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// ─── MobileProgramsAccordion ──────────────────────────────────────────────────

export function MobileProgramsAccordion({
  sections,
  itemIndex,
}: {
  sections: DropdownSection[];
  itemIndex: number;
}) {
  const [open, setOpen] = useState(false);
  const [openSection, setOpenSection] = useState<string | null>(null);
  const toggleSection = (heading: string) =>
    setOpenSection((prev) => (prev === heading ? null : heading));

  return (
    <motion.div
      custom={itemIndex}
      variants={drawerItemVariants}
      initial="closed"
      animate="open"
      exit="closed"
    >
      {/* Top-level toggle */}
      <button
        onClick={() => setOpen((v) => !v)}
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "10px 13px",
          borderRadius: "10px",
          fontSize: "15px",
          fontWeight: 500,
          textAlign: "left",
          background: "transparent",
          border: "none",
          cursor: "pointer",
          color: "var(--text-primary)",
          borderLeft: "3px solid transparent",
          marginBottom: "2px",
        }}
      >
        <span style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <IconBriefcase size={15} stroke={1.8} />
          Programs
        </span>
        <motion.span
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          style={{ color: "var(--text-muted)", display: "flex" }}
        >
          <IconChevronDown size={15} stroke={2} />
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: [0.4, 0, 0.2, 1] }}
            style={{ overflow: "hidden" }}
          >
            <div style={{ paddingLeft: "8px", paddingBottom: "8px" }}>
              {/* Quick-action 2×2 grid — glass-sm cards matching HeroSection */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "6px",
                  marginBottom: "10px",
                  padding: "0 4px",
                }}
              >
                {[
                  {
                    href: "/academics",
                    icon: <IconBook size={12} stroke={2} />,
                    label: "All Programs",
                    color: "var(--accent-primary)",
                    bg: "var(--glass-bg-sm)",
                    border: "var(--glass-border)",
                  },
                  {
                    href: "/admissions/apply",
                    icon: <IconFlame size={12} stroke={2} />,
                    label: "Apply Now",
                    color: "var(--badge-red-text)",
                    bg: "var(--error-bg)",
                    border: "var(--error-border)",
                  },
                  {
                    href: "/academics/cqp",
                    icon: <IconCertificate size={12} stroke={2} />,
                    label: "CQP/DQP",
                    color: "var(--success-text)",
                    bg: "var(--success-bg)",
                    border: "var(--success-border)",
                  },
                  {
                    href: "/academics/masters",
                    icon: <IconAward size={12} stroke={2} />,
                    label: "Masters",
                    color: "var(--badge-blue-text)",
                    bg: "var(--info-bg)",
                    border: "var(--info-border)",
                  },
                ].map(({ href, icon, label, color, bg, border }) => (
                  <Link
                    key={href}
                    href={href}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "5px",
                      padding: "8px 10px",
                      borderRadius: "8px",
                      fontSize: "12px",
                      fontWeight: 600,
                      textDecoration: "none",
                      border: `1px solid ${border}`,
                      color,
                      background: bg,
                      backdropFilter: "var(--glass-blur-sm)",
                      WebkitBackdropFilter: "var(--glass-blur-sm)",
                    }}
                  >
                    {icon}
                    {label}
                  </Link>
                ))}
              </div>

              {/* Accordion sections — glass-card style */}
              {sections.map((section) => {
                const c = COLOR_MAP[section.color];
                const isOpen = openSection === section.heading;
                return (
                  <div
                    key={section.heading}
                    style={{
                      marginBottom: "4px",
                      borderRadius: "10px",
                      // ← glass card exactly like HeroSection's stat card
                      ...GLASS_CARD,
                      overflow: "hidden",
                      boxShadow: "0 4px 16px rgba(0,0,0,0.07)",
                    }}
                  >
                    <button
                      onClick={() => toggleSection(section.heading)}
                      style={{
                        width: "100%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        padding: "9px 12px",
                        // slightly brighter glass on open
                        background: isOpen ? "var(--glass-bg)" : "transparent",
                        border: "none",
                        cursor: "pointer",
                        transition: "background 0.15s",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "6px",
                        }}
                      >
                        <span
                          style={{
                            fontSize: "11px",
                            fontWeight: 700,
                            letterSpacing: "0.08em",
                            textTransform: "uppercase",
                            color: "var(--text-muted)",
                          }}
                        >
                          {section.heading}
                        </span>
                        {section.sectionBadge && (
                          <span
                            style={{
                              fontSize: "8.5px",
                              fontWeight: 600,
                              padding: "1px 5px",
                              borderRadius: "99px",
                              background: c.badgeBg,
                              color: c.badgeText,
                              whiteSpace: "nowrap",
                            }}
                          >
                            {section.sectionBadge}
                          </span>
                        )}
                      </div>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "6px",
                        }}
                      >
                        <span
                          style={{
                            fontSize: "10px",
                            color: c.badgeText,
                            fontWeight: 600,
                          }}
                        >
                          {section.items.length} programs
                        </span>
                        <motion.span
                          animate={{ rotate: isOpen ? 180 : 0 }}
                          transition={{ duration: 0.18 }}
                          style={{
                            color: "var(--text-muted)",
                            display: "flex",
                            flexShrink: 0,
                          }}
                        >
                          <IconChevronDown size={13} stroke={2} />
                        </motion.span>
                      </div>
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{
                            duration: 0.22,
                            ease: [0.4, 0, 0.2, 1],
                          }}
                          style={{ overflow: "hidden" }}
                        >
                          <div style={{ padding: "4px 8px 8px" }}>
                            {section.items.map((item) => (
                              <Link
                                key={item.href}
                                href={item.href}
                                style={{
                                  display: "flex",
                                  alignItems: "flex-start",
                                  gap: "8px",
                                  padding: "7px 8px",
                                  borderRadius: "8px",
                                  textDecoration: "none",
                                  marginBottom: "1px",
                                  border: "1px solid transparent",
                                  transition:
                                    "background 0.15s, border-color 0.15s",
                                }}
                                onMouseEnter={(e) => {
                                  const el = e.currentTarget as HTMLElement;
                                  el.style.background = "var(--glass-bg-sm)";
                                  el.style.borderColor = "var(--glass-border)";
                                }}
                                onMouseLeave={(e) => {
                                  const el = e.currentTarget as HTMLElement;
                                  el.style.background = "transparent";
                                  el.style.borderColor = "transparent";
                                }}
                              >
                                <span
                                  style={{
                                    color: "var(--accent-primary)",
                                    marginTop: "1px",
                                    flexShrink: 0,
                                  }}
                                >
                                  {item.icon}
                                </span>
                                <div>
                                  <div
                                    style={{
                                      display: "flex",
                                      alignItems: "center",
                                      gap: "5px",
                                      flexWrap: "wrap",
                                    }}
                                  >
                                    <span
                                      style={{
                                        fontSize: "13px",
                                        fontWeight: 500,
                                        color: "var(--text-primary)",
                                      }}
                                    >
                                      {item.label}
                                    </span>
                                    {item.badge && (
                                      <ItemBadge type={item.badge} />
                                    )}
                                  </div>
                                  <div
                                    style={{
                                      fontSize: "11px",
                                      color: "var(--text-muted)",
                                      marginTop: "1px",
                                    }}
                                  >
                                    {item.description}
                                  </div>
                                </div>
                              </Link>
                            ))}

                            {/* Section CTA — glass-sm style */}
                            <Link
                              href={section.viewAllHref}
                              style={{
                                ...GLASS_CARD_SM,
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                gap: "5px",
                                marginTop: "6px",
                                padding: "7px 12px",
                                fontSize: "11.5px",
                                fontWeight: 600,
                                textDecoration: "none",
                                color: c.infoText,
                                background: c.infoBg,
                                border: `1px solid ${c.infoBorder}`,
                              }}
                            >
                              <IconFileDescription size={11} stroke={2} />
                              {section.viewAllLabel}
                              <IconArrowRight size={10} stroke={2.5} />
                            </Link>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
