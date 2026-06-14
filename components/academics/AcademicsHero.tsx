"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { IconArrowRight, IconShieldCheck } from "@tabler/icons-react";
import { PROGRAM_CATEGORIES } from "@/data/programs";

const allPrograms = PROGRAM_CATEGORIES.flatMap((c) => c.programs);
const totalPrograms = allPrograms.length;
const totalFields = PROGRAM_CATEGORIES.length;
const uniqueLevels = Array.from(
  new Set(allPrograms.flatMap((p) => p.levels)),
).length;

const STATS = [
  { value: `${totalPrograms}+`, label: "Programs Offered" },
  { value: totalFields.toString(), label: "Fields of Study" },
  { value: uniqueLevels.toString(), label: "Qualification Levels" },
  { value: "MINEFOP", label: "Accredited" },
];

const MARQUEE_ITEMS = [
  ...PROGRAM_CATEGORIES.map((c) => c.name),
  ...PROGRAM_CATEGORIES.map((c) => c.name),
];

export default function AcademicsHero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-slate-950 pt-32 pb-0">
      {/* Grid background */}
      <div className="absolute inset-0 opacity-[0.04]">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="grid"
              width="64"
              height="64"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 64 0 L 0 0 0 64"
                fill="none"
                stroke="white"
                strokeWidth="0.6"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Orbs */}
      <div
        className="absolute -top-32 -left-32 w-[700px] h-[700px] rounded-full blur-3xl opacity-10"
        style={{
          background:
            "radial-gradient(circle, var(--accent-primary) 0%, transparent 65%)",
        }}
      />
      <div
        className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full blur-3xl opacity-8"
        style={{
          background: "radial-gradient(circle, #ef4444 0%, transparent 65%)",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-10 text-center">
        {/* Trust badge */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900/80 px-4 py-2 mb-8"
        >
          <IconShieldCheck
            size={15}
            stroke={1.8}
            className="text-emerald-400"
          />
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-300">
            MINEFOP Accredited · Arrêté 000010
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.1 }}
          className="text-[clamp(2.8rem,7vw,5.5rem)] font-bold leading-[1.04] tracking-tight mb-6 text-white"
          style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
        >
          Shape Your Career
          <br />
          <span style={{ color: "var(--accent-primary)" }}>at VIHIPEX</span>
        </motion.h1>

        {/* Sub */}
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.18 }}
          className="text-[clamp(1rem,1.8vw,1.2rem)] leading-relaxed max-w-2xl mx-auto mb-10 text-slate-300"
        >
          {totalPrograms} professional programs across {totalFields} fields —
          from short CQP courses to Master's degrees, built for real careers in
          Cameroon and the CEMAC region.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.26 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-16"
        >
          <Link
            href="#programs"
            className="inline-flex items-center gap-2 rounded-xl bg-white px-7 py-3.5 text-sm font-bold text-slate-950 transition hover:bg-slate-100"
          >
            Explore Programs
            <IconArrowRight size={16} stroke={2.5} />
          </Link>
          <Link
            href="/admissions/apply"
            className="inline-flex items-center gap-2 rounded-xl border border-slate-600 bg-slate-900/60 px-7 py-3.5 text-sm font-bold text-white transition hover:border-slate-400 hover:bg-slate-800/60"
          >
            Apply Now
          </Link>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.34 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto mb-20"
        >
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.42 + i * 0.07, duration: 0.45 }}
              className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5 text-center"
            >
              <p
                className="text-3xl font-bold text-white mb-1"
                style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
              >
                {stat.value}
              </p>
              <p className="text-[11px] uppercase tracking-[0.18em] text-slate-400 font-medium">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Marquee strip */}
      <div className="relative z-10 w-full overflow-hidden border-t border-b border-slate-800 bg-slate-900/40 py-3">
        <motion.div
          className="flex gap-8 whitespace-nowrap"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
        >
          {MARQUEE_ITEMS.map((name, i) => (
            <span
              key={i}
              className="text-xs uppercase tracking-[0.22em] font-semibold text-slate-500 flex-shrink-0"
            >
              {name}
              <span className="ml-8 text-slate-700">·</span>
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
