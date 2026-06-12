"use client";

import { motion } from "framer-motion";
import { IconNews, IconCalendar, IconTrendingUp } from "@tabler/icons-react";

export default function NewsHero() {
  return (
    <section
      className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-24 pb-16"
      style={{ background: "var(--bg-base)" }}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="news-grid"
              width="60"
              height="60"
              patternUnits="userSpaceOnUse"
            >
              <circle cx="30" cy="30" r="1.5" fill="currentColor" />
            </pattern>
          </defs>
          <rect
            width="100%"
            height="100%"
            fill="url(#news-grid)"
            style={{ color: "var(--text-primary)" }}
          />
        </svg>
      </div>

      {/* Accent Orb */}
      <div
        className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full blur-3xl opacity-15"
        style={{
          background:
            "radial-gradient(circle, var(--accent-primary) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-10 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 glass-sm px-4 py-2 rounded-full mb-6"
          style={{ border: "1px solid var(--glass-border)" }}
        >
          <span
            className="w-2 h-2 rounded-full animate-pulse"
            style={{ background: "var(--accent-primary)" }}
          />
          <span
            className="text-sm font-medium"
            style={{ color: "var(--text-secondary)" }}
          >
            Latest Updates from VIHIPEX
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-[clamp(2.5rem,6vw,4.5rem)] font-bold leading-[1.08] tracking-tight mb-6"
          style={{
            fontFamily: "Georgia, 'Times New Roman', serif",
            letterSpacing: "-0.02em",
            color: "var(--text-primary)",
          }}
        >
          News &{" "}
          <span style={{ color: "var(--accent-primary)" }}>Announcements</span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-[clamp(1.05rem,1.8vw,1.2rem)] leading-relaxed max-w-3xl mx-auto mb-10"
          style={{ color: "var(--text-secondary)" }}
        >
          Stay informed about the latest events, achievements, academic updates,
          and important announcements from VIHIPEX University Institute.
        </motion.p>

        {/* Quick Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-6"
        >
          {[
            {
              icon: <IconNews size={18} />,
              label: "Stories Published",
              value: "50+",
            },
            {
              icon: <IconCalendar size={18} />,
              label: "Upcoming Events",
              value: "8",
            },
            {
              icon: <IconTrendingUp size={18} />,
              label: "Student Achievements",
              value: "25+",
            },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
              className="glass-sm px-5 py-3 rounded-xl flex items-center gap-3"
            >
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center"
                style={{
                  background: "var(--badge-blue-bg)",
                  color: "var(--accent-primary)",
                }}
              >
                {stat.icon}
              </div>
              <div className="text-left">
                <p
                  className="text-lg font-bold leading-none mb-1"
                  style={{
                    color: "var(--text-primary)",
                    fontFamily: "Georgia, 'Times New Roman', serif",
                  }}
                >
                  {stat.value}
                </p>
                <p
                  className="text-xs font-medium"
                  style={{ color: "var(--text-muted)" }}
                >
                  {stat.label}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
