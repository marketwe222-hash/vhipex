"use client";

import { motion } from "framer-motion";
import { IconMail, IconPhone, IconMapPin } from "@tabler/icons-react";

// ─── Data ─────────────────────────────────────────────────────────────────────

const TEAM_MEMBERS = [
  {
    name: "Mr. Leong Victor",
    role: "Founder & Promoter",
    department: "Executive Leadership",
    bio: "Visionary leader and founder of VHIPEX University Institute. Committed to transforming vocational and professional education across Central Africa by bridging the gap between academia and the job market.",
    email: "victoryinstitute68@gmail.com",
    phone: "+237 652 761 202",
    location: "Yaoundé & Bafoussam, Cameroon",
    color: "blue",
    initials: "LV",
  },
  // ─── Add more staff as data becomes available ───────────────────────────────
  // {
  //   name: "Dr. Jane Doe",
  //   role: "Academic Director",
  //   department: "Academics",
  //   bio: "...",
  //   email: "...",
  //   phone: "...",
  //   location: "Yaoundé, Cameroon",
  //   color: "success",
  //   initials: "JD",
  // },
];

const LEADERSHIP_STATS = [
  {
    value: "8",
    label: "Professional Fields",
    sub: "Commerce, Engineering, Health & more",
    color: "blue",
  },
  {
    value: "40+",
    label: "Degree Programs",
    sub: "ND · BTS · HND · Degree · Master",
    color: "warning",
  },
  {
    value: "500+",
    label: "Students Enrolled",
    sub: "Across both campuses",
    color: "success",
  },
  {
    value: "95%",
    label: "Student Success Rate",
    sub: "Graduation & employment",
    color: "blue",
  },
];

const DEPARTMENTS = [
  { name: "Commerce & Finance", programs: 6, color: "warning" },
  { name: "Engineering & IT", programs: 6, color: "blue" },
  { name: "Health Sciences", programs: 8, color: "red" },
  { name: "Agriculture & Livestock", programs: 6, color: "success" },
  { name: "Education", programs: 5, color: "blue" },
  { name: "Tourism & Hospitality", programs: 4, color: "warning" },
  { name: "Other Professional", programs: 5, color: "red" },
  { name: "CQP / DQP Short Courses", programs: 7, color: "success" },
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

export default function TeamSection() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Subtle background */}
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
            Leadership Team
          </span>
          <h2
            className="text-3xl md:text-4xl font-bold mb-4"
            style={{
              fontFamily: "Georgia, 'Times New Roman', serif",
              color: "var(--text-primary)",
            }}
          >
            The People Behind VHIPEX
          </h2>
          <p
            className="text-base max-w-2xl mx-auto"
            style={{ color: "var(--text-secondary)" }}
          >
            Dedicated professionals driving excellence in vocational and
            professional education across Cameroon and Central Africa
          </p>
        </motion.div>

        {/* ── Team Cards ── */}
        <div
          className={`grid gap-8 mb-16 ${
            TEAM_MEMBERS.length === 1
              ? "max-w-md mx-auto"
              : "md:grid-cols-2 lg:grid-cols-3"
          }`}
        >
          {TEAM_MEMBERS.map((member, index) => {
            const c = COLOR_STYLES[member.color];
            return (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                whileHover={{ y: -4 }}
                className="p-7 rounded-2xl text-center"
                style={{
                  background: "var(--glass-bg-subtle)",
                  border: "1px solid var(--glass-border)",
                }}
              >
                {/* Avatar */}
                <div
                  className="w-28 h-28 mx-auto mb-5 rounded-full flex items-center justify-center text-3xl font-bold"
                  style={{
                    background: c.bg,
                    color: c.text,
                    border: `3px solid ${c.border}`,
                    fontFamily: "Georgia, 'Times New Roman', serif",
                  }}
                >
                  {member.initials}
                </div>

                {/* Department badge */}
                <span
                  className="inline-block text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-3"
                  style={{ background: c.bg, color: c.text }}
                >
                  {member.department}
                </span>

                {/* Name & Role */}
                <h3
                  className="text-xl font-bold mb-1"
                  style={{
                    color: "var(--text-primary)",
                    fontFamily: "Georgia, 'Times New Roman', serif",
                  }}
                >
                  {member.name}
                </h3>
                <p
                  className="text-sm font-semibold mb-4"
                  style={{ color: c.text }}
                >
                  {member.role}
                </p>

                {/* Bio */}
                <p
                  className="text-sm leading-relaxed mb-5"
                  style={{ color: "var(--text-secondary)" }}
                >
                  {member.bio}
                </p>

                {/* Divider */}
                <div
                  className="w-full h-px mb-5"
                  style={{ background: "var(--divider)" }}
                />

                {/* Contact info */}
                <div className="space-y-2 text-left">
                  <a
                    href={`mailto:${member.email}`}
                    className="flex items-center gap-3 text-sm rounded-lg px-3 py-2 transition-colors duration-150"
                    style={{
                      color: "var(--text-secondary)",
                      background: "var(--glass-bg)",
                    }}
                  >
                    <IconMail
                      size={15}
                      stroke={1.8}
                      style={{ color: c.text, flexShrink: 0 }}
                    />
                    <span className="truncate">{member.email}</span>
                  </a>
                  <a
                    href={`tel:${member.phone.replace(/\s/g, "")}`}
                    className="flex items-center gap-3 text-sm rounded-lg px-3 py-2 transition-colors duration-150"
                    style={{
                      color: "var(--text-secondary)",
                      background: "var(--glass-bg)",
                    }}
                  >
                    <IconPhone
                      size={15}
                      stroke={1.8}
                      style={{ color: c.text, flexShrink: 0 }}
                    />
                    {member.phone}
                  </a>
                  <div
                    className="flex items-center gap-3 text-sm rounded-lg px-3 py-2"
                    style={{
                      color: "var(--text-secondary)",
                      background: "var(--glass-bg)",
                    }}
                  >
                    <IconMapPin
                      size={15}
                      stroke={1.8}
                      style={{ color: c.text, flexShrink: 0 }}
                    />
                    {member.location}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* ── Key Stats ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="p-8 rounded-2xl mb-12"
          style={{
            background: "var(--glass-bg-subtle)",
            border: "1px solid var(--glass-border)",
          }}
        >
          <h3
            className="text-center text-lg font-bold mb-8"
            style={{
              color: "var(--text-primary)",
              fontFamily: "Georgia, 'Times New Roman', serif",
            }}
          >
            Institute at a Glance
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {LEADERSHIP_STATS.map((stat, index) => {
              const c = COLOR_STYLES[stat.color];
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="text-center"
                >
                  <p
                    className="text-3xl md:text-4xl font-bold mb-1"
                    style={{
                      color: c.text,
                      fontFamily: "Georgia, 'Times New Roman', serif",
                    }}
                  >
                    {stat.value}
                  </p>
                  <p
                    className="text-sm font-semibold uppercase tracking-wider mb-1"
                    style={{ color: "var(--text-primary)" }}
                  >
                    {stat.label}
                  </p>
                  <p className="text-xs" style={{ color: "var(--text-muted)" }}>
                    {stat.sub}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* ── Departments Grid ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h3
            className="text-center text-lg font-bold mb-6"
            style={{
              color: "var(--text-primary)",
              fontFamily: "Georgia, 'Times New Roman', serif",
            }}
          >
            Academic Departments
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {DEPARTMENTS.map((dept, index) => {
              const c = COLOR_STYLES[dept.color];
              return (
                <motion.div
                  key={dept.name}
                  initial={{ opacity: 0, scale: 0.92 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.06, duration: 0.4 }}
                  className="p-3 rounded-xl text-center"
                  style={{
                    background: c.bg,
                    border: `1px solid ${c.border}`,
                  }}
                >
                  <p
                    className="text-xs font-bold mb-1"
                    style={{ color: c.text }}
                  >
                    {dept.name}
                  </p>
                  <p
                    className="text-[10px]"
                    style={{ color: c.text, opacity: 0.75 }}
                  >
                    {dept.programs} programs
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
