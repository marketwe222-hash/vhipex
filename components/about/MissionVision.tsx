"use client";

import { motion } from "framer-motion";
import {
  IconTarget,
  IconEye,
  IconHeart,
  IconBriefcase,
  IconUsers,
  IconCertificate,
  IconScale,
  IconBulb,
  IconWorld,
} from "@tabler/icons-react";

// ─── Data ─────────────────────────────────────────────────────────────────────

const CORE_VALUES = [
  {
    icon: <IconBriefcase size={22} stroke={1.8} />,
    title: "Industry Alignment",
    description:
      "Every program is co-designed with real-world job markets and employer needs — so graduates enter the workforce ready from day one.",
    color: "blue",
  },
  {
    icon: <IconUsers size={22} stroke={1.8} />,
    title: "Practical Training",
    description:
      "Hands-on fieldwork, laboratory sessions, internships, and mentorship from enrollment through graduation.",
    color: "warning",
  },
  {
    icon: <IconCertificate size={22} stroke={1.8} />,
    title: "CEMAC / LMD Standards",
    description:
      "Internationally recognized qualifications — ND, BTS, HND, Licence, Master — aligned with the regional LMD education framework.",
    color: "success",
  },
  {
    icon: <IconScale size={22} stroke={1.8} />,
    title: "Integrity & Ethics",
    description:
      "We hold every student, lecturer, and staff member to the highest ethical standards — honesty and accountability are non-negotiable.",
    color: "blue",
  },
  {
    icon: <IconBulb size={22} stroke={1.8} />,
    title: "Innovation",
    description:
      "Continuously updating curricula to reflect emerging technologies, market shifts, and new professional opportunities across Africa.",
    color: "warning",
  },
  {
    icon: <IconWorld size={22} stroke={1.8} />,
    title: "Bilingual Excellence",
    description:
      "Fully bilingual (French & English) instruction — preparing graduates to thrive in Cameroon, CEMAC countries, and international markets.",
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

export default function MissionVision() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Dot pattern background */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)",
          backgroundSize: "44px 44px",
          color: "var(--text-primary)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        {/* ── Section label ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-4"
            style={{
              background: "var(--badge-blue-bg)",
              color: "var(--badge-blue-text)",
              border: "1px solid var(--info-border)",
            }}
          >
            <IconTarget size={13} stroke={2} />
            Purpose & Direction
          </span>
        </motion.div>

        {/* ── Mission & Vision ── */}
        <div className="grid md:grid-cols-2 gap-6 mb-20">
          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="p-8 rounded-2xl relative overflow-hidden"
            style={{
              background: "var(--glass-bg-subtle)",
              border: "1px solid var(--glass-border)",
            }}
          >
            {/* Decorative corner accent */}
            <div
              className="absolute top-0 right-0 w-32 h-32 rounded-full blur-2xl opacity-20 pointer-events-none"
              style={{
                background: "var(--accent-primary)",
                transform: "translate(30%, -30%)",
              }}
            />

            <div className="relative z-10">
              <div
                className="inline-flex items-center justify-center w-14 h-14 rounded-xl mb-5"
                style={{
                  background: "var(--badge-blue-bg)",
                  color: "var(--badge-blue-text)",
                }}
              >
                <IconTarget size={28} stroke={1.8} />
              </div>

              <span
                className="block text-xs font-bold uppercase tracking-widest mb-2"
                style={{ color: "var(--badge-blue-text)" }}
              >
                Our Mission
              </span>

              <h2
                className="text-2xl md:text-3xl font-bold mb-4"
                style={{
                  fontFamily: "Georgia, 'Times New Roman', serif",
                  color: "var(--text-primary)",
                }}
              >
                Reducing Unemployment Through Quality Education
              </h2>

              <p
                className="text-base leading-relaxed"
                style={{ color: "var(--text-secondary)" }}
              >
                To reduce unemployment in Africa by delivering job-ready,
                practical education that links academic excellence with industry
                demands — offering accessible, affordable, and flexible programs
                from National Diplomas to Master's degrees, fully accredited by
                MINEFOP under Arrêté No. 000010.
              </p>

              {/* Key points */}
              <ul className="mt-5 space-y-2">
                {[
                  "Accessible registration from 10,000 FCFA",
                  "Bilingual (FR & EN) instruction",
                  "Evening & weekend flexible scheduling",
                ].map((point) => (
                  <li
                    key={point}
                    className="flex items-start gap-2 text-sm"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    <span
                      className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0"
                      style={{ background: "var(--accent-primary)" }}
                    />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="p-8 rounded-2xl relative overflow-hidden"
            style={{
              background: "var(--glass-bg-subtle)",
              border: "1px solid var(--glass-border)",
            }}
          >
            {/* Decorative corner accent */}
            <div
              className="absolute top-0 right-0 w-32 h-32 rounded-full blur-2xl opacity-20 pointer-events-none"
              style={{
                background: "var(--accent-secondary)",
                transform: "translate(30%, -30%)",
              }}
            />

            <div className="relative z-10">
              <div
                className="inline-flex items-center justify-center w-14 h-14 rounded-xl mb-5"
                style={{
                  background: "var(--badge-red-bg)",
                  color: "var(--badge-red-text)",
                }}
              >
                <IconEye size={28} stroke={1.8} />
              </div>

              <span
                className="block text-xs font-bold uppercase tracking-widest mb-2"
                style={{ color: "var(--badge-red-text)" }}
              >
                Our Vision
              </span>

              <h2
                className="text-2xl md:text-3xl font-bold mb-4"
                style={{
                  fontFamily: "Georgia, 'Times New Roman', serif",
                  color: "var(--text-primary)",
                }}
              >
                Central Africa's Premier Professional Institute
              </h2>

              <p
                className="text-base leading-relaxed"
                style={{ color: "var(--text-secondary)" }}
              >
                To become the leading professional university institute in
                Central Africa — recognized for transforming students into
                competent, ethical, and innovative professionals who drive
                economic growth across the CEMAC zone, Africa, and Europe.
              </p>

              {/* Key points */}
              <ul className="mt-5 space-y-2">
                {[
                  "Campuses in Bafoussam & Yaoundé",
                  "Expanding to Europe & broader Africa",
                  "Partnerships with industry & government",
                ].map((point) => (
                  <li
                    key={point}
                    className="flex items-start gap-2 text-sm"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    <span
                      className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0"
                      style={{ background: "var(--accent-secondary)" }}
                    />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>

        {/* ── Core Values ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <div
            className="inline-flex items-center justify-center w-12 h-12 rounded-xl mb-4"
            style={{
              background: "var(--glass-bg-subtle)",
              border: "1px solid var(--glass-border)",
              color: "var(--text-primary)",
            }}
          >
            <IconHeart size={22} stroke={1.8} />
          </div>
          <h2
            className="text-3xl md:text-4xl font-bold mb-3"
            style={{
              fontFamily: "Georgia, 'Times New Roman', serif",
              color: "var(--text-primary)",
            }}
          >
            Our Core Values
          </h2>
          <p
            className="text-base max-w-2xl mx-auto"
            style={{ color: "var(--text-muted)" }}
          >
            Six principles that guide every decision, program, and interaction
            at VIHIPEX
          </p>
        </motion.div>

        {/* Values grid — 2 cols mobile, 3 cols desktop */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {CORE_VALUES.map((value, index) => {
            const c = COLOR_STYLES[value.color];
            return (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ y: -4 }}
                className="p-6 rounded-xl"
                style={{
                  background: "var(--glass-bg-subtle)",
                  border: "1px solid var(--glass-border)",
                  transition: "box-shadow 0.2s ease",
                }}
              >
                <div
                  className="inline-flex items-center justify-center w-11 h-11 rounded-lg mb-4"
                  style={{ background: c.bg, color: c.text }}
                >
                  {value.icon}
                </div>
                <h3
                  className="text-lg font-bold mb-2"
                  style={{ color: "var(--text-primary)" }}
                >
                  {value.title}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "var(--text-secondary)" }}
                >
                  {value.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
