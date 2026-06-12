"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
import { IconArrowRight, IconClock } from "@tabler/icons-react";
import { PROGRAM_CATEGORIES } from "@/data/programs";
import type { ProgramLevel } from "@/data/programs";

const LEVEL_META: Record<ProgramLevel, { label: string; color: string }> = {
  ND: { label: "National Diploma", color: "#f59e0b" },
  BTS: { label: "BTS", color: "#3b82f6" },
  HND: { label: "Higher National Diploma", color: "#8b5cf6" },
  Licence: { label: "Bachelor's Degree", color: "#10b981" },
  Master: { label: "Master's Degree", color: "#ef4444" },
  CAPIEMP: { label: "CAPIEMP", color: "#06b6d4" },
  CAPIET: { label: "CAPIET", color: "#ec4899" },
  CQP: { label: "CQP", color: "#f97316" },
  DQP: { label: "DQP", color: "#a3e635" },
  AQP: { label: "AQP", color: "#fbbf24" },
};

const BADGE_COLORS: Record<string, { bg: string; text: string }> = {
  popular: { bg: "#ef444420", text: "#ef4444" },
  new: { bg: "#10b98120", text: "#10b981" },
  demand: { bg: "#f59e0b20", text: "#f59e0b" },
  prestige: { bg: "#3b82f620", text: "#3b82f6" },
};

// All levels that actually appear in the data
const ALL_LEVELS: ProgramLevel[] = Array.from(
  new Set(
    PROGRAM_CATEGORIES.flatMap((c) => c.programs.flatMap((p) => p.levels)),
  ),
) as ProgramLevel[];

export default function CurriculumTable() {
  const [activeLevel, setActiveLevel] = useState<ProgramLevel>(ALL_LEVELS[0]);

  const meta = LEVEL_META[activeLevel];

  // Groups: category → programs that have this level
  const groups = PROGRAM_CATEGORIES.map((cat) => ({
    category: cat,
    programs: cat.programs.filter((p) => p.levels.includes(activeLevel)),
  })).filter((g) => g.programs.length > 0);

  const totalCount = groups.reduce((acc, g) => acc + g.programs.length, 0);

  return (
    <section
      className="relative py-24 overflow-hidden"
      style={{ background: "var(--bg-gradient)" }}
    >
      <div
        className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full blur-3xl opacity-[0.07]"
        style={{
          background:
            "radial-gradient(circle, var(--accent-primary) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        {/* Header */}
        <div className="text-center mb-12">
          <p
            className="text-xs uppercase tracking-[0.28em] font-semibold mb-3"
            style={{ color: "var(--accent-primary)" }}
          >
            Qualification Levels
          </p>
          <h2
            className="text-3xl md:text-5xl font-bold mb-4"
            style={{
              fontFamily: "Georgia, 'Times New Roman', serif",
              color: "var(--text-primary)",
            }}
          >
            Programs by Level
          </h2>
          <p
            className="text-base max-w-2xl mx-auto"
            style={{ color: "var(--text-secondary)" }}
          >
            Filter by qualification to find the right entry point for your
            career path.
          </p>
        </div>

        {/* Level tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {ALL_LEVELS.map((level) => {
            const m = LEVEL_META[level];
            const isActive = activeLevel === level;
            return (
              <button
                key={level}
                onClick={() => setActiveLevel(level)}
                className="px-4 py-2 rounded-full text-xs font-bold uppercase tracking-[0.16em] transition-all duration-200"
                style={{
                  background: isActive
                    ? `${m.color}22`
                    : "var(--glass-bg-subtle)",
                  color: isActive ? m.color : "var(--text-muted)",
                  border: `1.5px solid ${isActive ? m.color : "var(--glass-border)"}`,
                }}
              >
                {level}
              </button>
            );
          })}
        </div>

        {/* Count pill */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeLevel}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <span
                className="rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em]"
                style={{
                  background: `${meta.color}18`,
                  color: meta.color,
                  border: `1px solid ${meta.color}30`,
                }}
              >
                {meta.label}
              </span>
              <span className="text-sm" style={{ color: "var(--text-muted)" }}>
                {totalCount} program{totalCount !== 1 ? "s" : ""} available at
                this level
              </span>
            </div>

            {/* Program groups */}
            <div className="space-y-8">
              {groups.map((group, gi) => (
                <motion.div
                  key={group.category.slug}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: gi * 0.07, duration: 0.4 }}
                >
                  {/* Category heading */}
                  <div
                    className="flex items-center gap-3 mb-4 pb-3"
                    style={{ borderBottom: "1px solid var(--divider)" }}
                  >
                    <span
                      className="text-sm font-bold uppercase tracking-[0.18em]"
                      style={{ color: "var(--text-primary)" }}
                    >
                      {group.category.name}
                    </span>
                    <span
                      className="rounded-full px-2.5 py-0.5 text-[10px] font-semibold"
                      style={{
                        background: "var(--glass-bg-subtle)",
                        color: "var(--text-muted)",
                        border: "1px solid var(--glass-border)",
                      }}
                    >
                      {group.programs.length} program
                      {group.programs.length !== 1 ? "s" : ""}
                    </span>
                  </div>

                  {/* Program rows */}
                  <div className="space-y-3">
                    {group.programs.map((program) => (
                      <div
                        key={program.slug}
                        className="flex flex-col sm:flex-row sm:items-center gap-4 rounded-xl p-4 transition-colors duration-150"
                        style={{
                          background: "var(--glass-bg-subtle)",
                          border: "1px solid var(--glass-border)",
                        }}
                      >
                        {/* Left */}
                        <div className="flex-1 min-w-0">
                          <div className="flex flex-wrap items-center gap-2 mb-1">
                            <span
                              className="text-base font-semibold"
                              style={{ color: "var(--text-primary)" }}
                            >
                              {program.name}
                            </span>
                            {program.badge && BADGE_COLORS[program.badge] && (
                              <span
                                className="rounded-full px-2 py-0.5 text-[10px] font-bold uppercase tracking-[0.12em]"
                                style={{
                                  background: BADGE_COLORS[program.badge].bg,
                                  color: BADGE_COLORS[program.badge].text,
                                }}
                              >
                                {program.badge}
                              </span>
                            )}
                          </div>
                          <p
                            className="text-sm mb-2"
                            style={{ color: "var(--text-muted)" }}
                          >
                            {program.description}
                          </p>
                          {/* All levels the program offers */}
                          <div className="flex flex-wrap gap-1.5">
                            {program.levels.map((lvl) => (
                              <span
                                key={lvl}
                                className="rounded-md px-2 py-0.5 text-[10px] font-semibold uppercase"
                                style={{
                                  background:
                                    lvl === activeLevel
                                      ? `${meta.color}20`
                                      : "var(--glass-bg)",
                                  color:
                                    lvl === activeLevel
                                      ? meta.color
                                      : "var(--text-muted)",
                                  border: `1px solid ${lvl === activeLevel ? `${meta.color}40` : "var(--glass-border)"}`,
                                }}
                              >
                                {lvl}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Right */}
                        <div className="flex items-center gap-4 flex-shrink-0">
                          <div
                            className="flex items-center gap-1.5 text-xs"
                            style={{ color: "var(--text-muted)" }}
                          >
                            <IconClock size={13} stroke={1.8} />
                            {program.duration}
                          </div>
                          <Link
                            href={`/academics/${group.category.slug}/${program.slug}`}
                            className="inline-flex items-center gap-1.5 rounded-lg px-3 py-2 text-xs font-bold transition-colors duration-150"
                            style={{
                              background: `${meta.color}15`,
                              color: meta.color,
                              border: `1px solid ${meta.color}30`,
                            }}
                            onMouseEnter={(e) => {
                              (
                                e.currentTarget as HTMLElement
                              ).style.background = `${meta.color}28`;
                            }}
                            onMouseLeave={(e) => {
                              (
                                e.currentTarget as HTMLElement
                              ).style.background = `${meta.color}15`;
                            }}
                          >
                            View Details
                            <IconArrowRight size={12} stroke={2.5} />
                          </Link>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
