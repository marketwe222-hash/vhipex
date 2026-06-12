"use client";

import { motion } from "framer-motion";
import {
  IconSchool,
  IconCertificate,
  IconTrendingUp,
  IconRocket,
  IconBuildingBank,
  IconWorld,
} from "@tabler/icons-react";

// ─── Data ─────────────────────────────────────────────────────────────────────

const MILESTONES = [
  {
    year: "2022",
    period: "Year 1",
    title: "Foundation & First Classes",
    description:
      "VHIPEX University Institute was established in Yaoundé, Cameroon as a bilingual training center. Officially accredited by MINEFOP under Arrêté No. 000010, the institute launched its first programs for Grade One teacher training in both general and technical education.",
    highlights: [
      "MINEFOP accreditation secured",
      "Bilingual (FR & EN) instruction launched",
      "First cohort of teacher trainees enrolled",
    ],
    icon: <IconSchool size={22} stroke={1.8} />,
    color: "blue",
    side: "left" as const,
  },
  {
    year: "2023",
    period: "Year 2",
    title: "Vocational Expansion",
    description:
      "Launched National Diploma (ND) and BTS programs across multiple professional fields under the Ministry of Vocational Training. Introduced CQP, DQP, and AQP short-course certifications to serve working professionals seeking rapid skills acquisition.",
    highlights: [
      "ND & BTS programs launched",
      "CQP / DQP / AQP short courses introduced",
      "Commerce, IT, Agriculture & Health fields added",
    ],
    icon: <IconCertificate size={22} stroke={1.8} />,
    color: "warning",
    side: "right" as const,
  },
  {
    year: "2024",
    period: "Year 3",
    title: "Higher Education & Second Campus",
    description:
      "Introduced Higher National Diploma (HND), Bachelor's (Degree), and Master's degree programs across 8 key professional sectors. Opened the second campus in Bafoussam, extending access to students in the West Region of Cameroon.",
    highlights: [
      "HND, Degree & Master programs launched",
      "Second campus opened in Bafoussam",
      "8 professional sectors — 40+ programs total",
      "500+ students across both campuses",
    ],
    icon: <IconTrendingUp size={22} stroke={1.8} />,
    color: "success",
    side: "left" as const,
  },
  {
    year: "2025",
    period: "Present",
    title: "Consolidation & Growth",
    description:
      "Continuing to strengthen academic quality, expand industry partnerships, and grow student enrollment. Health Sciences programs — including Nursing, Midwifery, Pharmacy, Physiotherapy, Dental Therapy, and Clinical Optometry — are being developed into flagship offerings.",
    highlights: [
      "Health Sciences flagship development",
      "Industry partnership expansion",
      "Curriculum review & LMD alignment",
      "Student support & mentorship programs",
    ],
    icon: <IconBuildingBank size={22} stroke={1.8} />,
    color: "red",
    side: "right" as const,
  },
  {
    year: "Near Future",
    period: "Vision",
    title: "Regional Leadership",
    description:
      "Expanding international recognition, forging partnerships across Africa and Europe, and positioning VHIPEX as the premier professional university institute in Central Africa — a destination institution for students seeking industry-ready qualifications.",
    highlights: [
      "International partnerships (Africa & Europe)",
      "Online & distance learning programs",
      "Research & innovation center",
      "Alumni network & career placement hub",
    ],
    icon: <IconRocket size={22} stroke={1.8} />,
    color: "blue",
    side: "left" as const,
  },
];

const COLOR_STYLES: Record<
  string,
  { bg: string; text: string; border: string; glow: string }
> = {
  blue: {
    bg: "var(--badge-blue-bg)",
    text: "var(--badge-blue-text)",
    border: "var(--info-border)",
    glow: "var(--accent-primary)",
  },
  red: {
    bg: "var(--badge-red-bg)",
    text: "var(--badge-red-text)",
    border: "var(--error-border)",
    glow: "var(--accent-secondary)",
  },
  success: {
    bg: "var(--success-bg)",
    text: "var(--success-text)",
    border: "var(--success-border)",
    glow: "var(--success-text)",
  },
  warning: {
    bg: "var(--warning-bg)",
    text: "var(--warning-text)",
    border: "var(--warning-border)",
    glow: "var(--warning-text)",
  },
};

// ─── Milestone Card ───────────────────────────────────────────────────────────

function MilestoneCard({
  milestone,
  index,
}: {
  milestone: (typeof MILESTONES)[number];
  index: number;
}) {
  const c = COLOR_STYLES[milestone.color];
  const isLeft = milestone.side === "left";

  return (
    <motion.div
      initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay: index * 0.1 }}
      className={`relative flex items-start gap-6 md:gap-8 ${
        isLeft ? "md:flex-row" : "md:flex-row-reverse"
      } flex-row`}
    >
      {/* ── Card ── */}
      <div className="flex-1">
        <div
          className="p-6 rounded-2xl"
          style={{
            background: "var(--glass-bg-subtle)",
            border: "1px solid var(--glass-border)",
          }}
        >
          {/* Top row: year badge + period */}
          <div className="flex items-center gap-3 mb-4">
            <span
              className="text-sm font-bold px-3 py-1 rounded-full"
              style={{ background: c.bg, color: c.text }}
            >
              {milestone.year}
            </span>
            <span
              className="text-xs font-semibold uppercase tracking-wider"
              style={{ color: "var(--text-muted)" }}
            >
              {milestone.period}
            </span>
          </div>

          {/* Title */}
          <h3
            className="text-xl md:text-2xl font-bold mb-3"
            style={{
              color: "var(--text-primary)",
              fontFamily: "Georgia, 'Times New Roman', serif",
            }}
          >
            {milestone.title}
          </h3>

          {/* Description */}
          <p
            className="text-sm leading-relaxed mb-4"
            style={{ color: "var(--text-secondary)" }}
          >
            {milestone.description}
          </p>

          {/* Highlights */}
          <ul className="space-y-1.5">
            {milestone.highlights.map((h) => (
              <li
                key={h}
                className="flex items-start gap-2 text-sm"
                style={{ color: "var(--text-secondary)" }}
              >
                <span
                  className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0"
                  style={{ background: c.text }}
                />
                {h}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* ── Centre Icon ── */}
      {/* Visible only on md+ for alternating layout; always left on mobile */}
      <div className="flex-shrink-0 flex flex-col items-center">
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 + 0.2, duration: 0.5 }}
          className="w-14 h-14 rounded-full flex items-center justify-center z-10 relative"
          style={{
            background: c.bg,
            border: `3px solid ${c.border}`,
            color: c.text,
            boxShadow: `0 0 20px ${c.glow}30`,
          }}
        >
          {milestone.icon}
        </motion.div>

        {/* Connector line — hidden for last item */}
        {index < MILESTONES.length - 1 && (
          <div
            className="w-0.5 flex-1 mt-2 min-h-[40px]"
            style={{ background: "var(--divider)" }}
          />
        )}
      </div>

      {/* ── Spacer for alternating layout on desktop ── */}
      <div className="flex-1 hidden md:block" />
    </motion.div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────

export default function Timeline() {
  return (
    <section
      className="relative py-24 overflow-hidden"
      style={{ background: "var(--bg-gradient)" }}
    >
      {/* Decorative orbs */}
      <div
        className="absolute top-10 right-10 w-72 h-72 rounded-full blur-3xl opacity-10 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, var(--accent-secondary) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute bottom-10 left-10 w-56 h-56 rounded-full blur-3xl opacity-10 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, var(--accent-primary) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-10">
        {/* ── Section Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-4"
            style={{
              background: "var(--badge-blue-bg)",
              color: "var(--badge-blue-text)",
              border: "1px solid var(--info-border)",
            }}
          >
            <IconWorld size={12} stroke={2} />
            Our Journey
          </span>

          <h2
            className="text-3xl md:text-4xl font-bold mb-4"
            style={{
              fontFamily: "Georgia, 'Times New Roman', serif",
              color: "var(--text-primary)",
            }}
          >
            From Training Center to{" "}
            <span style={{ color: "var(--accent-primary)" }}>
              University Institute
            </span>
          </h2>
          <p
            className="text-base max-w-2xl mx-auto"
            style={{ color: "var(--text-secondary)" }}
          >
            Three years of rapid growth — from a bilingual teacher training
            center in 2022 to a comprehensive professional university institute
            with 40+ programs across 8 fields and 2 campuses
          </p>
        </motion.div>

        {/* ── Milestones ── */}
        <div className="space-y-10">
          {MILESTONES.map((milestone, index) => (
            <MilestoneCard
              key={milestone.year}
              milestone={milestone}
              index={index}
            />
          ))}
        </div>

        {/* ── Bottom CTA ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-center mt-16 p-8 rounded-2xl"
          style={{
            background: "var(--glass-bg-subtle)",
            border: "1px solid var(--glass-border)",
          }}
        >
          <IconRocket
            size={32}
            stroke={1.6}
            className="mx-auto mb-4"
            style={{ color: "var(--accent-primary)" }}
          />
          <h3
            className="text-xl font-bold mb-2"
            style={{
              color: "var(--text-primary)",
              fontFamily: "Georgia, 'Times New Roman', serif",
            }}
          >
            Be Part of the Next Chapter
          </h3>
          <p
            className="text-sm mb-6 max-w-lg mx-auto"
            style={{ color: "var(--text-secondary)" }}
          >
            VHIPEX is growing fast. Join 500+ students already building their
            careers with us across Bafoussam and Yaoundé.
          </p>
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <a
              href="/admissions/apply"
              className="btn-primary inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm"
              style={{ textDecoration: "none" }}
            >
              Apply Now — 10,000 FCFA
            </a>
            <a
              href="/academics"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm"
              style={{
                textDecoration: "none",
                background: "var(--glass-bg)",
                border: "1px solid var(--glass-border)",
                color: "var(--text-secondary)",
              }}
            >
              Explore All Programs
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
