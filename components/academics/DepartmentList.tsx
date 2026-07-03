"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, type ReactNode } from "react";
import Link from "next/link";
import {
  IconPlant,
  IconDeviceDesktop,
  IconEngine,
  IconStethoscope,
  IconBriefcase,
  IconChartBar,
  IconBook,
  IconBuildingBank,
  IconArrowRight,
  IconCertificate,
} from "@tabler/icons-react";
import { PROGRAM_CATEGORIES } from "@/data/programs";
import type { CategorySlug } from "@/data/programs";

const ICONS: Record<string, ReactNode> = {
  agriculture: <IconPlant size={22} stroke={1.8} />,
  engineering: <IconEngine size={22} stroke={1.8} />,
  health: <IconStethoscope size={22} stroke={1.8} />,
  commerce: <IconBuildingBank size={22} stroke={1.8} />,
  education: <IconBook size={22} stroke={1.8} />,
  hospitality: <IconBriefcase size={22} stroke={1.8} />,
  other: <IconDeviceDesktop size={22} stroke={1.8} />,
  cqp: <IconChartBar size={22} stroke={1.8} />,
};

// Aligned to globals.css brand palette (--blue-500, --red-500, --amber-500, --green-500)
const COLOR_MAP: Record<string, string> = {
  warning: "#f59e0b",
  blue: "#1a3adb",
  red: "#dc143c",
  success: "#10b981",
};

export default function DepartmentList() {
  const [activeFilter, setActiveFilter] = useState<CategorySlug | "all">("all");

  const filtered =
    activeFilter === "all"
      ? PROGRAM_CATEGORIES
      : PROGRAM_CATEGORIES.filter((c) => c.slug === activeFilter);

  const totalPrograms = PROGRAM_CATEGORIES.flatMap((c) => c.programs).length;

  return (
    <section
      id="programs"
      className="relative py-24 overflow-hidden"
      style={{ background: "var(--bg-base)" }}
    >
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        {/* Header */}
        <div className="text-center mb-12">
          <p
            className="text-xs uppercase tracking-[0.28em] font-semibold mb-3"
            style={{ color: "var(--text-link)" }}
          >
            Academic Departments
          </p>
          <h2
            className="text-3xl md:text-5xl font-bold mb-4"
            style={{
              fontFamily: "Georgia, 'Times New Roman', serif",
              color: "var(--text-primary)",
            }}
          >
            {PROGRAM_CATEGORIES.length} Fields of Study
          </h2>
          <p
            className="text-base max-w-2xl mx-auto"
            style={{ color: "var(--text-secondary)" }}
          >
            {totalPrograms} programs from National Diploma to Master's degree,
            aligned with CEMAC industry standards.
          </p>
        </div>

        {/* Filter bar */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          <button
            onClick={() => setActiveFilter("all")}
            className="px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-[0.14em] transition-all duration-200"
            style={{
              background:
                activeFilter === "all"
                  ? "var(--blue-500)"
                  : "var(--glass-bg-subtle)",
              color: activeFilter === "all" ? "white" : "var(--text-secondary)",
              border: `1px solid ${activeFilter === "all" ? "var(--blue-500)" : "var(--glass-border)"}`,
            }}
          >
            All
          </button>
          {PROGRAM_CATEGORIES.map((cat) => {
            const isActive = activeFilter === cat.slug;
            const color = COLOR_MAP[cat.color] ?? "var(--blue-500)";
            return (
              <button
                key={cat.slug}
                onClick={() => setActiveFilter(cat.slug as CategorySlug)}
                className="px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-[0.14em] transition-all duration-200"
                style={{
                  background: isActive
                    ? `${color}20`
                    : "var(--glass-bg-subtle)",
                  color: isActive ? color : "var(--text-secondary)",
                  border: `1px solid ${isActive ? color : "var(--glass-border)"}`,
                }}
              >
                {cat.name}
              </button>
            );
          })}
        </div>

        {/* Cards — masonry via CSS columns */}
        <motion.div
          layout
          className="columns-1 md:columns-2 lg:columns-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((category, index) => {
              const color = COLOR_MAP[category.color] ?? "var(--blue-500)";
              const icon = ICONS[category.slug] ?? (
                <IconDeviceDesktop size={22} stroke={1.8} />
              );
              const topPrograms = category.programs.slice(0, 4);

              return (
                <motion.div
                  key={category.slug}
                  layout
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ delay: index * 0.06, duration: 0.45 }}
                  className="group relative overflow-hidden rounded-2xl flex flex-col mb-6 break-inside-avoid"
                  style={{ minHeight: "360px" }}
                >
                  {/* Cover image */}
                  <div className="absolute inset-0">
                    <img
                      src={category.coverImage}
                      alt={category.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div
                      className="absolute inset-0"
                      style={{
                        background:
                          "linear-gradient(to top, rgba(2,6,23,0.97) 40%, rgba(2,6,23,0.55) 100%)",
                      }}
                    />
                  </div>

                  {/* Content */}
                  <div className="relative z-10 flex flex-col h-full p-6">
                    {/* Top row */}
                    <div className="flex items-start justify-between mb-auto">
                      <div
                        className="inline-flex items-center justify-center w-11 h-11 rounded-xl"
                        style={{ background: `${color}25`, color }}
                      >
                        {icon}
                      </div>
                      <span
                        className="rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em]"
                        style={{
                          background: `${color}20`,
                          color,
                          border: `1px solid ${color}40`,
                        }}
                      >
                        {category.sectionBadge}
                      </span>
                    </div>

                    {/* Bottom content */}
                    <div className="mt-auto">
                      <p
                        className="text-[11px] uppercase tracking-[0.2em] font-semibold mb-1"
                        style={{ color }}
                      >
                        {category.programs.length} Programs
                      </p>
                      <h3
                        className="text-2xl font-bold text-white mb-2"
                        style={{
                          fontFamily: "Georgia, 'Times New Roman', serif",
                        }}
                      >
                        {category.name}
                      </h3>
                      <p className="text-sm leading-relaxed text-slate-300 mb-4">
                        {category.description}
                      </p>

                      {/* Program name pills */}
                      <div className="flex flex-wrap gap-1.5 mb-5">
                        {topPrograms.map((p) => (
                          <span
                            key={p.slug}
                            className="rounded-md px-2 py-0.5 text-[10px] font-medium text-slate-200"
                            style={{
                              background: "rgba(255,255,255,0.08)",
                              border: "1px solid rgba(255,255,255,0.12)",
                            }}
                          >
                            {p.name}
                          </span>
                        ))}
                        {category.programs.length > 4 && (
                          <span
                            className="rounded-md px-2 py-0.5 text-[10px] font-medium text-slate-400"
                            style={{ background: "rgba(255,255,255,0.05)" }}
                          >
                            +{category.programs.length - 4} more
                          </span>
                        )}
                      </div>

                      <Link
                        href={`/academics/${category.slug}`}
                        className="inline-flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-bold transition-all duration-200 group/btn"
                        style={{
                          background: `${color}18`,
                          color,
                          border: `1px solid ${color}35`,
                        }}
                        onMouseEnter={(e) => {
                          (e.currentTarget as HTMLElement).style.background =
                            `${color}30`;
                        }}
                        onMouseLeave={(e) => {
                          (e.currentTarget as HTMLElement).style.background =
                            `${color}18`;
                        }}
                      >
                        <IconCertificate size={15} stroke={2} />
                        View All Programs
                        <IconArrowRight
                          size={14}
                          stroke={2.5}
                          className="transition-transform duration-200 group-hover/btn:translate-x-0.5"
                        />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
