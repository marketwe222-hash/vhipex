"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { motion, useInView, Variants } from "framer-motion";
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
  IconSparkles,
  IconDeviceLaptop,
} from "@tabler/icons-react";
import { PROGRAM_CATEGORIES } from "@/data/programs";
import type { ReactNode } from "react";

// ─── Icon map ─────────────────────────────────────────────────────────────────

const ICONS: Record<string, ReactNode> = {
  agriculture: <IconPlant size={32} stroke={1.4} />,
  engineering: <IconEngine size={32} stroke={1.4} />,
  health: <IconStethoscope size={32} stroke={1.4} />,
  commerce: <IconBuildingBank size={32} stroke={1.4} />,
  education: <IconBook size={32} stroke={1.4} />,
  hospitality: <IconBriefcase size={32} stroke={1.4} />,
  other: <IconDeviceLaptop size={32} stroke={1.4} />,
  cqp: <IconChartBar size={32} stroke={1.4} />,
};

const COLOR_MAP: Record<string, string> = {
  warning: "#f59e0b",
  blue: "#3b82f6",
  red: "#ef4444",
  success: "#10b981",
};

const WHY_US = [
  {
    title: "Bilingual Delivery",
    body: "All programs taught in both French and English, preparing graduates for regional and international careers.",
  },
  {
    title: "Industry Partnerships",
    body: "120+ partner companies provide internships, field visits, and direct recruitment pipelines for our students.",
  },
  {
    title: "CEMAC/LMD Aligned",
    body: "Degrees fully recognised across the CEMAC economic zone and compatible with European LMD frameworks.",
  },
  {
    title: "Practical-First Curriculum",
    body: "70% of contact hours are lab, workshop, or field-based so graduates hit the ground running from day one.",
  },
];

// ─── Variants ─────────────────────────────────────────────────────────────────

const containerVariants: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.05 } },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  },
};

// ─── Background ───────────────────────────────────────────────────────────────

function SectionBg() {
  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 overflow-hidden pointer-events-none"
    >
      <div
        className="absolute top-[5%] right-[-6%] w-[42vw] h-[42vw] max-w-[560px] max-h-[560px] rounded-full opacity-25"
        style={{
          background:
            "radial-gradient(circle, var(--hero-orb-primary) 0%, transparent 65%)",
        }}
      />
      <div
        className="absolute bottom-[0%] left-[-5%] w-[32vw] h-[32vw] max-w-[420px] max-h-[420px] rounded-full opacity-20"
        style={{
          background:
            "radial-gradient(circle, var(--hero-orb-secondary) 0%, transparent 65%)",
        }}
      />
      <svg
        className="absolute inset-0 w-full h-full opacity-[0.03]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="feat-grid"
            width="64"
            height="64"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 64 0 L 0 0 0 64"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.8"
              style={{ color: "var(--text-primary)" }}
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#feat-grid)" />
      </svg>
    </div>
  );
}

// ─── Category card ────────────────────────────────────────────────────────────

function CategoryCard({
  category,
  index,
}: {
  category: (typeof PROGRAM_CATEGORIES)[0];
  index: number;
}) {
  const [hovered, setHovered] = useState(false);
  const color = COLOR_MAP[category.color] ?? "#3b82f6";
  const icon = ICONS[category.slug] ?? (
    <IconDeviceDesktop size={32} stroke={1.4} />
  );
  const topOutcomes = Array.from(
    new Set(category.programs.flatMap((p) => p.outcomes)),
  ).slice(0, 3);

  return (
    <motion.div
      variants={fadeUp}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="glass rounded-2xl p-6 flex flex-col gap-4 group cursor-default relative overflow-hidden"
      whileHover={{ scale: 1.02, y: -5 }}
      transition={{ type: "spring", stiffness: 280, damping: 22 }}
    >
      {/* Top accent */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-[3px] rounded-t-2xl"
        animate={{ opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        style={{ background: `linear-gradient(90deg, ${color}, transparent)` }}
      />

      {/* Icon */}
      <div
        className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0"
        style={{
          background: `${color}15`,
          color,
          border: `1px solid ${color}30`,
        }}
      >
        {icon}
      </div>

      {/* Text */}
      <div className="flex-1">
        <div className="flex items-start justify-between gap-2 mb-2">
          <h3
            className="text-[16.5px] font-bold m-0 leading-snug"
            style={{
              fontFamily: "Georgia, 'Times New Roman', serif",
              color: "var(--text-primary)",
            }}
          >
            {category.name}
          </h3>
          <span
            className="rounded-full px-2 py-0.5 text-[10px] font-bold uppercase tracking-[0.12em] flex-shrink-0 mt-0.5"
            style={{
              background: `${color}15`,
              color,
              border: `1px solid ${color}30`,
            }}
          >
            {category.programs.length} programs
          </span>
        </div>
        <p
          className="text-[13.5px] leading-relaxed m-0 mb-3"
          style={{ color: "var(--text-secondary)" }}
        >
          {category.description}
        </p>

        {/* Level badges */}
        <div className="flex flex-wrap gap-1.5 mb-3">
          {category.sectionBadge.split(" / ").map((lvl) => (
            <span
              key={lvl}
              className="text-[11px] font-medium px-2.5 py-1 rounded-lg"
              style={{
                background: "var(--badge-blue-bg)",
                color: "var(--badge-blue-text)",
                border: "1px solid var(--input-border)",
              }}
            >
              {lvl}
            </span>
          ))}
        </div>

        {/* Top outcomes */}
        <div className="space-y-1">
          {topOutcomes.map((o) => (
            <p
              key={o}
              className="text-[12px] flex items-center gap-1.5 m-0"
              style={{ color: "var(--text-muted)" }}
            >
              <span
                className="inline-block w-1 h-1 rounded-full flex-shrink-0"
                style={{ background: color }}
              />
              {o}
            </p>
          ))}
        </div>
      </div>

      {/* CTA */}
      <Link
        href={`/academics/${category.slug}`}
        className="flex items-center gap-1.5 mt-auto no-underline group/link"
        style={{ color }}
      >
        <span className="text-[12.5px] font-semibold tracking-wide">
          Explore programs
        </span>
        <motion.span
          animate={{ x: hovered ? 4 : 0 }}
          transition={{ duration: 0.2 }}
          style={{ display: "flex" }}
        >
          <IconArrowRight size={14} stroke={2.2} />
        </motion.span>
      </Link>
    </motion.div>
  );
}

// ─── Main ─────────────────────────────────────────────────────────────────────

export default function FeaturesSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

  return (
    <section
      ref={sectionRef}
      className="relative py-24 lg:py-32 overflow-hidden"
      style={{ background: "var(--bg-base)" }}
    >
      <SectionBg />
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-10 2xl:px-12">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-14"
        >
          <span
            className="glass-sm inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11.5px] font-semibold tracking-widest uppercase mb-4"
            style={{
              border: "1px solid var(--glass-border)",
              color: "var(--text-secondary)",
            }}
          >
            <IconSparkles size={13} stroke={2} /> Academic Programs
          </span>
          <h2
            className="text-[clamp(1.8rem,4vw,3rem)] font-bold m-0 mb-4 leading-tight"
            style={{
              fontFamily: "Georgia, 'Times New Roman', serif",
              letterSpacing: "-0.02em",
              color: "var(--text-primary)",
            }}
          >
            {PROGRAM_CATEGORIES.length} Fields.{" "}
            <span style={{ color: "var(--accent-primary)" }}>One Mission.</span>
          </h2>
          <p
            className="text-[clamp(1rem,1.6vw,1.1rem)] max-w-[54ch] mx-auto m-0 leading-relaxed"
            style={{ color: "var(--text-secondary)" }}
          >
            Every program at VIHIPEX is designed around what employers in
            Cameroon and the wider CEMAC region actually need — not just theory,
            but real, deployable skills.
          </p>
        </motion.div>

        {/* Categories grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"
        >
          {PROGRAM_CATEGORIES.map((cat, i) => (
            <CategoryCard key={cat.slug} category={cat} index={i} />
          ))}
        </motion.div>

        {/* Why us */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-20"
        >
          <p
            className="text-center text-[11.5px] font-semibold tracking-widest uppercase mb-6"
            style={{ color: "var(--text-muted)" }}
          >
            Why choose VIHIPEX
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {WHY_US.map((item) => (
              <div
                key={item.title}
                className="glass-sm rounded-2xl p-5"
                style={{ border: "1px solid var(--glass-border)" }}
              >
                <p
                  className="text-[13.5px] font-bold m-0 mb-1.5"
                  style={{ color: "var(--text-primary)" }}
                >
                  {item.title}
                </p>
                <p
                  className="text-[12.5px] leading-relaxed m-0"
                  style={{ color: "var(--text-muted)" }}
                >
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.9, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mt-14 text-center"
        >
          <Link
            href="/academics"
            className="btn-primary inline-flex items-center gap-2 px-8 py-4 text-[14.5px] font-semibold rounded-xl no-underline tracking-tight"
          >
            View All {PROGRAM_CATEGORIES.flatMap((c) => c.programs).length}{" "}
            Programs
            <motion.span
              animate={{ x: [0, 4, 0] }}
              transition={{
                duration: 1.6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <IconArrowRight size={16} stroke={2.2} />
            </motion.span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
