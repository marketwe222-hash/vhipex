"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  IconCalendar,
  IconFileText,
  IconCurrencyDollar,
  IconClock,
  IconArrowRight,
  IconChecklist,
} from "@tabler/icons-react";

const ADMISSION_HIGHLIGHTS = [
  {
    icon: <IconCalendar size={20} stroke={1.8} />,
    label: "Rolling Admissions",
    value: "Apply Anytime",
  },
  {
    icon: <IconClock size={20} stroke={1.8} />,
    label: "Processing Time",
    value: "5-7 Days",
  },
  {
    icon: <IconCurrencyDollar size={20} stroke={1.8} />,
    label: "Flexible Fees",
    value: "Payment Plans",
  },
  {
    icon: <IconFileText size={20} stroke={1.8} />,
    label: "Programs",
    value: "ND to Master",
  },
];

export default function AdmissionsHero() {
  return (
    <section
      className="relative min-h-[80vh] flex items-center justify-center overflow-hidden pt-24 pb-16"
      style={{ background: "var(--bg-base)" }}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.025]">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="admissions-grid"
              width="64"
              height="64"
              patternUnits="userSpaceOnUse"
            >
              <circle cx="32" cy="32" r="1" fill="currentColor" />
            </pattern>
          </defs>
          <rect
            width="100%"
            height="100%"
            fill="url(#admissions-grid)"
            style={{ color: "var(--text-primary)" }}
          />
        </svg>
      </div>

      {/* Accent Orbs */}
      <div
        className="absolute -top-20 -right-20 w-[600px] h-[600px] rounded-full blur-3xl opacity-15"
        style={{
          background:
            "radial-gradient(circle, var(--accent-primary) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute -bottom-20 -left-20 w-[500px] h-[500px] rounded-full blur-3xl opacity-10"
        style={{
          background:
            "radial-gradient(circle, var(--accent-secondary) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center gap-2 glass-sm px-4 py-2 rounded-full mb-6"
              style={{ border: "1px solid var(--glass-border)" }}
            >
              <IconChecklist size={16} stroke={1.8} />
              <span
                className="text-sm font-medium"
                style={{ color: "var(--text-secondary)" }}
              >
                2024/2025 Admissions Open
              </span>
            </motion.div>

            {/* Headline */}
            <h1
              className="text-[clamp(2.5rem,5.5vw,4rem)] font-bold leading-[1.08] tracking-tight mb-5"
              style={{
                fontFamily: "Georgia, 'Times New Roman', serif",
                letterSpacing: "-0.02em",
                color: "var(--text-primary)",
              }}
            >
              Start Your{" "}
              <span style={{ color: "var(--accent-primary)" }}>
                Professional Journey
              </span>
            </h1>

            {/* Description */}
            <p
              className="text-[clamp(1.05rem,1.7vw,1.2rem)] leading-relaxed mb-8"
              style={{ color: "var(--text-secondary)" }}
            >
              Join VIHIPEX University Institute and gain industry-ready skills
              in Agriculture, IT, Engineering, Health, Business, and more.
              Choose from National Diploma to Master's programs with flexible
              payment options.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 mb-10">
              <a
                href="#application-form"
                className="btn-primary inline-flex items-center gap-2 px-7 py-3.5 text-[15px] font-semibold rounded-xl no-underline"
              >
                Apply Now
                <IconArrowRight size={18} stroke={2.2} />
              </a>
              <a
                href="#requirements"
                className="glass-sm inline-flex items-center gap-2 px-7 py-3.5 text-[15px] font-semibold rounded-xl no-underline hover:scale-[1.02] transition-transform duration-200"
                style={{
                  border: "1.5px solid var(--glass-border)",
                  color: "var(--text-primary)",
                }}
              >
                View Requirements
              </a>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-3">
              {ADMISSION_HIGHLIGHTS.slice(0, 2).map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
                  className="glass-sm p-4 rounded-lg"
                >
                  <div
                    className="flex items-center gap-2 mb-1"
                    style={{ color: "var(--accent-primary)" }}
                  >
                    {item.icon}
                    <span
                      className="text-xs font-medium uppercase tracking-wide"
                      style={{ color: "var(--text-muted)" }}
                    >
                      {item.label}
                    </span>
                  </div>
                  <p
                    className="text-lg font-bold"
                    style={{ color: "var(--text-primary)" }}
                  >
                    {item.value}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Feature Cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="hidden lg:block"
          >
            <div className="grid grid-cols-2 gap-4">
              {ADMISSION_HIGHLIGHTS.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
                  whileHover={{ scale: 1.05, rotate: 1 }}
                  className="glass p-6 rounded-xl text-center"
                  style={{
                    boxShadow: "0 8px 32px rgba(0,0,0,0.08)",
                  }}
                >
                  <div
                    className="inline-flex items-center justify-center w-12 h-12 rounded-lg mb-3"
                    style={{
                      background: "var(--badge-blue-bg)",
                      color: "var(--accent-primary)",
                    }}
                  >
                    {item.icon}
                  </div>
                  <p
                    className="text-xs uppercase tracking-wider font-medium mb-2"
                    style={{ color: "var(--text-muted)" }}
                  >
                    {item.label}
                  </p>
                  <p
                    className="text-lg font-bold"
                    style={{
                      color: "var(--text-primary)",
                      fontFamily: "Georgia, 'Times New Roman', serif",
                    }}
                  >
                    {item.value}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Additional Info Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.6 }}
              className="glass mt-4 p-5 rounded-xl"
              style={{
                borderLeft: "4px solid var(--accent-primary)",
              }}
            >
              <p
                className="text-sm font-medium mb-2"
                style={{ color: "var(--text-primary)" }}
              >
                📞 Need Help?
              </p>
              <p
                className="text-sm leading-relaxed"
                style={{ color: "var(--text-secondary)" }}
              >
                Contact our admissions team at{" "}
                <a
                  href="tel:+237652761202"
                  className="font-semibold hover:underline"
                  style={{ color: "var(--accent-primary)" }}
                >
                  +237 652 761 202
                </a>
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
