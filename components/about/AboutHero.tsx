"use client";

import { motion } from "framer-motion";
import {
  IconMapPin,
  IconCalendar,
  IconCertificate,
  IconUsers,
  IconBuildingBank,
  IconStar,
} from "@tabler/icons-react";

// ─── Data ─────────────────────────────────────────────────────────────────────

const QUICK_FACTS = [
  {
    icon: <IconCalendar size={20} stroke={1.8} />,
    label: "Established",
    value: "2022",
    sub: "Yaoundé, Cameroon",
    color: "blue",
  },
  {
    icon: <IconMapPin size={20} stroke={1.8} />,
    label: "Campuses",
    value: "2 Cities",
    sub: "Bafoussam & Yaoundé",
    color: "red",
  },
  {
    icon: <IconCertificate size={20} stroke={1.8} />,
    label: "Accreditation",
    value: "MINEFOP",
    sub: "Arrêté No. 000010",
    color: "success",
  },
  {
    icon: <IconUsers size={20} stroke={1.8} />,
    label: "Students",
    value: "500+",
    sub: "Currently Enrolled",
    color: "warning",
  },
  {
    icon: <IconBuildingBank size={20} stroke={1.8} />,
    label: "Programs",
    value: "40+",
    sub: "Across 8 Fields",
    color: "blue",
  },
  {
    icon: <IconStar size={20} stroke={1.8} />,
    label: "Qualifications",
    value: "ND → Master",
    sub: "CEMAC / LMD Aligned",
    color: "success",
  },
];

const COLOR_STYLES: Record<
  string,
  { bg: string; text: string; border: string }
> = {
  blue: {
    bg: "var(--badge-blue-bg)",
    text: "var(--badge-blue-text)",
    border: "var(--info-border)",
  },
  red: {
    bg: "var(--badge-red-bg)",
    text: "var(--badge-red-text)",
    border: "var(--error-border)",
  },
  success: {
    bg: "var(--success-bg)",
    text: "var(--success-text)",
    border: "var(--success-border)",
  },
  warning: {
    bg: "var(--warning-bg)",
    text: "var(--warning-text)",
    border: "var(--warning-border)",
  },
};

// ─── Component ────────────────────────────────────────────────────────────────

export default function AboutHero() {
  return (
    <section
      className="relative min-h-[85vh] flex items-center justify-center overflow-hidden pt-28 pb-20"
      style={{ background: "var(--bg-base)" }}
    >
      {/* Background grid pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="about-grid"
              width="60"
              height="60"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 60 0 L 0 0 0 60"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.5"
                style={{ color: "var(--text-primary)" }}
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#about-grid)" />
        </svg>
      </div>

      {/* Accent orbs */}
      <div
        className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full blur-3xl opacity-10 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, var(--accent-primary) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full blur-3xl opacity-10 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, var(--accent-secondary) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-10 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
          style={{
            background: "var(--glass-bg-subtle)",
            border: "1px solid var(--glass-border)",
          }}
        >
          <span
            className="w-2 h-2 rounded-full animate-pulse"
            style={{ background: "var(--accent-primary)" }}
          />
          <span
            className="text-sm font-semibold tracking-wide"
            style={{ color: "var(--text-secondary)" }}
          >
            MINEFOP Accredited · Arrêté No. 000010
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-bold leading-[1.08] tracking-tight mb-6"
          style={{
            fontFamily: "Georgia, 'Times New Roman', serif",
            fontSize: "clamp(2.4rem, 6vw, 4.5rem)",
            letterSpacing: "-0.02em",
            color: "var(--text-primary)",
          }}
        >
          Transforming Talent Into{" "}
          <span style={{ color: "var(--accent-primary)" }}>
            Industry Leaders
          </span>
        </motion.h1>

        {/* Sub-headline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="leading-relaxed max-w-3xl mx-auto mb-4"
          style={{
            fontSize: "clamp(1rem, 1.8vw, 1.2rem)",
            color: "var(--text-secondary)",
          }}
        >
          VHIPEX University Institute for Professionals bridges the gap between
          education and employment through practical, industry-aligned programs
          that prepare graduates for real-world success across Cameroon, Central
          Africa, and beyond.
        </motion.p>

        {/* Accreditation note */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-sm mb-12 font-medium"
          style={{ color: "var(--text-muted)" }}
        >
          Bilingual (French & English) · CEMAC/LMD Framework · ND · HPD · BTS ·
          CQP · DQP · AQP · HND · Degree · Master
        </motion.p>

        {/* Quick Facts Grid — 3 cols on mobile, 6 on desktop */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 max-w-5xl mx-auto"
        >
          {QUICK_FACTS.map((fact, index) => {
            const c = COLOR_STYLES[fact.color];
            return (
              <motion.div
                key={fact.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.45 + index * 0.07, duration: 0.45 }}
                className="p-4 rounded-xl text-center"
                style={{
                  background: "var(--glass-bg-subtle)",
                  border: "1px solid var(--glass-border)",
                }}
              >
                {/* Icon */}
                <div
                  className="inline-flex items-center justify-center w-10 h-10 rounded-lg mb-3"
                  style={{ background: c.bg, color: c.text }}
                >
                  {fact.icon}
                </div>

                {/* Label */}
                <p
                  className="text-xs uppercase tracking-wider font-semibold mb-1"
                  style={{ color: "var(--text-muted)" }}
                >
                  {fact.label}
                </p>

                {/* Value */}
                <p
                  className="text-base font-bold leading-tight mb-1"
                  style={{
                    color: c.text,
                    fontFamily: "Georgia, 'Times New Roman', serif",
                  }}
                >
                  {fact.value}
                </p>

                {/* Sub */}
                <p
                  className="text-[10px] leading-tight"
                  style={{ color: "var(--text-muted)" }}
                >
                  {fact.sub}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
