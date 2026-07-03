"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandTwitter,
  IconBrandYoutube,
  IconMail,
  IconPhone,
  IconMapPin,
  IconCertificate,
  IconArrowRight,
  IconSchool,
  IconAward,
  IconFlame,
  IconClipboardList,
  IconBook,
} from "@tabler/icons-react";

// ─── Data ─────────────────────────────────────────────────────────────────────

const LINKS = {
  Programs: [
    { label: "Commerce & Finance", href: "/academics/commerce" },
    { label: "Engineering & IT", href: "/academics/engineering" },
    { label: "Health Sciences", href: "/academics/health" },
    { label: "Agriculture & Livestock", href: "/academics/agriculture" },
    { label: "Education", href: "/academics/education" },
    { label: "Tourism & Hospitality", href: "/academics/hospitality" },
    { label: "CQP / DQP Short Courses", href: "/academics/cqp" },
    { label: "Master's Programs", href: "/academics/masters" },
  ],
  Institution: [
    { label: "About VIHIPEX", href: "/about" },
    { label: "Leadership & Faculty", href: "/about/faculty" },
    { label: "Accreditation", href: "/about/accreditation" },
    { label: "Campus Life", href: "/campus" },
    { label: "Gallery", href: "/gallery" },
  ],
  Admissions: [
    { label: "How to Apply", href: "/admissions" },
    { label: "Entry Requirements", href: "/admissions/requirements" },
    { label: "Fees & Funding", href: "/admissions/fees" },
    { label: "Scholarships", href: "/admissions/scholarships" },
    { label: "International Students", href: "/admissions/international" },
    { label: "Contact Admissions", href: "/admissions/contact" },
  ],
};

const SOCIALS = [
  {
    icon: <IconBrandFacebook size={18} stroke={1.8} />,
    href: "#",
    label: "Facebook",
  },
  {
    icon: <IconBrandInstagram size={18} stroke={1.8} />,
    href: "#",
    label: "Instagram",
  },
  {
    icon: <IconBrandLinkedin size={18} stroke={1.8} />,
    href: "#",
    label: "LinkedIn",
  },
  {
    icon: <IconBrandTwitter size={18} stroke={1.8} />,
    href: "#",
    label: "Twitter / X",
  },
  {
    icon: <IconBrandYoutube size={18} stroke={1.8} />,
    href: "#",
    label: "YouTube",
  },
];

const BADGES = [
  {
    icon: <IconCertificate size={13} stroke={2} />,
    text: "MINEFOP Accredited",
  },
  { icon: <IconSchool size={13} stroke={2} />, text: "Arrêté 000010" },
];

// ─── Background ───────────────────────────────────────────────────────────────

function FooterBg() {
  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 overflow-hidden pointer-events-none"
    >
      <div
        className="absolute -top-[10%] -right-[5%] w-[40vw] h-[40vw] max-w-[500px] max-h-[500px] rounded-full opacity-20"
        style={{
          background:
            "radial-gradient(circle, var(--hero-orb-primary) 0%, transparent 65%)",
        }}
      />
      <div
        className="absolute -bottom-[5%] -left-[5%] w-[30vw] h-[30vw] max-w-[380px] max-h-[380px] rounded-full opacity-15"
        style={{
          background:
            "radial-gradient(circle, var(--hero-orb-secondary) 0%, transparent 65%)",
        }}
      />
      <svg
        className="absolute inset-0 w-full h-full opacity-[0.025]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="footer-grid"
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
        <rect width="100%" height="100%" fill="url(#footer-grid)" />
      </svg>
      <svg
        className="absolute inset-0 w-full h-full opacity-[0.05]"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <line
          x1="70%"
          y1="0"
          x2="100%"
          y2="60%"
          stroke="var(--accent-primary)"
          strokeWidth="1.5"
        />
        <line
          x1="74%"
          y1="0"
          x2="100%"
          y2="55%"
          stroke="var(--accent-primary)"
          strokeWidth="0.5"
        />
      </svg>
    </div>
  );
}

// ─── Newsletter strip ─────────────────────────────────────────────────────────

function NewsletterStrip() {
  return (
    <div className="glass rounded-2xl px-8 py-7 flex flex-col sm:flex-row items-center justify-between gap-6 mb-16">
      <div className="text-center sm:text-left">
        <p
          className="text-[17px] font-bold m-0 mb-1"
          style={{
            fontFamily: "Georgia, 'Times New Roman', serif",
            color: "var(--text-primary)",
          }}
        >
          Stay in the loop
        </p>
        <p className="text-[13px] m-0" style={{ color: "var(--text-muted)" }}>
          Admissions news, events, and academic updates — straight to your
          inbox.
        </p>
      </div>
      <div className="flex gap-2 w-full sm:w-auto flex-shrink-0">
        <input
          type="email"
          placeholder="your@email.com"
          className="glass-input px-4 py-2.5 text-[13.5px] rounded-xl flex-1 sm:w-[220px] outline-none"
          style={{ minWidth: 0 }}
        />
        <button
          type="button"
          className="btn-primary inline-flex items-center gap-1.5 px-5 py-2.5 text-[13px] font-semibold rounded-xl whitespace-nowrap border-none cursor-pointer"
        >
          Subscribe
          <IconArrowRight size={14} stroke={2.2} />
        </button>
      </div>
    </div>
  );
}

// ─── Quick Actions strip ──────────────────────────────────────────────────────

function QuickActions() {
  return (
    <div
      className="flex flex-wrap gap-2 mb-14"
      style={{
        paddingBottom: "14px",
        borderBottom: "1px solid var(--divider)",
      }}
    >
      {[
        {
          href: "/academics",
          icon: <IconBook size={12} stroke={2} />,
          label: "Full Program Catalog",
          color: "var(--accent-primary)",
          bg: "var(--glass-bg-subtle)",
          border: "var(--glass-border)",
        },
        {
          href: "/admissions/apply",
          icon: <IconFlame size={12} stroke={2} />,
          label: "Apply Now",
          color: "var(--badge-red-text)",
          bg: "var(--error-bg)",
          border: "var(--error-border)",
        },
        {
          href: "/admissions",
          icon: <IconClipboardList size={12} stroke={2} />,
          label: "How to Apply",
          color: "var(--text-secondary)",
          bg: "var(--glass-bg-subtle)",
          border: "var(--glass-border)",
        },
        {
          href: "/academics/cqp",
          icon: <IconCertificate size={12} stroke={2} />,
          label: "CQP / DQP Short Courses",
          color: "var(--success-text)",
          bg: "var(--success-bg)",
          border: "var(--success-border)",
        },
        {
          href: "/academics/masters",
          icon: <IconAward size={12} stroke={2} />,
          label: "Master's Programs",
          color: "var(--badge-blue-text)",
          bg: "var(--info-bg)",
          border: "var(--info-border)",
        },
      ].map(({ href, icon, label, color, bg, border }) => (
        <Link
          key={href}
          href={href}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "5px",
            padding: "6px 12px",
            borderRadius: "8px",
            fontSize: "12px",
            fontWeight: 600,
            textDecoration: "none",
            border: `1px solid ${border}`,
            color,
            background: bg,
            transition: "opacity 0.15s",
          }}
          onMouseEnter={(e) =>
            ((e.currentTarget as HTMLElement).style.opacity = "0.75")
          }
          onMouseLeave={(e) =>
            ((e.currentTarget as HTMLElement).style.opacity = "1")
          }
        >
          {icon}
          {label}
        </Link>
      ))}
    </div>
  );
}

// ─── Main ─────────────────────────────────────────────────────────────────────

export default function Footer() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <footer
      ref={ref}
      className="relative pt-20 pb-8 overflow-hidden"
      style={{ background: "var(--bg-base)" }}
    >
      {/* Top border accent */}
      <div
        className="absolute top-0 left-0 right-0 h-[1px]"
        style={{
          background:
            "linear-gradient(90deg, transparent, var(--accent-primary), var(--red-light), transparent)",
        }}
      />

      <FooterBg />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-10 2xl:px-12">
        {/* Newsletter */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        >
          <NewsletterStrip />
        </motion.div>

        {/* Quick actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
          <QuickActions />
        </motion.div>

        {/* Main grid */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.18, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 pb-14"
          style={{ borderBottom: "1px solid var(--divider)" }}
        >
          {/* Brand column */}
          <div className="flex flex-col gap-5">
            {/* Logo wordmark — mirrors header Logo component */}
            <Link
              href="/"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                textDecoration: "none",
              }}
            >
              <div
                style={{
                  width: 42,
                  height: 42,
                  borderRadius: "11px",
                  background: "var(--btn-primary-bg)",
                  boxShadow: "var(--btn-primary-shadow)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <Image
                  src="/icons/logo.png"
                  alt="VIHIPEX Logo"
                  width={26}
                  height={26}
                  style={{ objectFit: "contain" }}
                />
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  lineHeight: 1.1,
                }}
              >
                <span
                  style={{
                    fontFamily: "Georgia, 'Times New Roman', serif",
                    fontWeight: 700,
                    fontSize: "17px",
                    color: "var(--text-primary)",
                    letterSpacing: "0.02em",
                  }}
                >
                  VIHIPEX
                </span>
                <span
                  style={{
                    fontSize: "9px",
                    fontWeight: 600,
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    color: "var(--text-muted)",
                  }}
                >
                  University Institute
                </span>
              </div>
            </Link>

            <p
              className="text-[13px] leading-relaxed m-0"
              style={{ color: "var(--text-muted)" }}
            >
              Empowering Africa's future professionals through accredited,
              bilingual, industry-linked education in Yaoundé & Bafoussam,
              Cameroon.
            </p>

            {/* Accreditation badges */}
            <div className="flex flex-wrap gap-2">
              {BADGES.map(({ icon, text }) => (
                <span
                  key={text}
                  className="glass-sm inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10.5px] font-medium"
                  style={{
                    border: "1px solid var(--glass-border)",
                    color: "var(--text-secondary)",
                  }}
                >
                  {icon}
                  {text}
                </span>
              ))}
            </div>

            {/* Contact info */}
            <div className="flex flex-col gap-2.5 mt-1">
              {[
                {
                  icon: <IconMapPin size={14} stroke={1.8} />,
                  text: "Bafoussam & Yaoundé, Cameroon",
                },
                {
                  icon: <IconPhone size={14} stroke={1.8} />,
                  text: "+237 652 761 202",
                },
                {
                  icon: <IconMail size={14} stroke={1.8} />,
                  text: "info@VIHIPEX.cm",
                },
              ].map(({ icon, text }) => (
                <div key={text} className="flex items-center gap-2">
                  <span
                    style={{ color: "var(--accent-primary)", flexShrink: 0 }}
                  >
                    {icon}
                  </span>
                  <span
                    className="text-[12.5px]"
                    style={{ color: "var(--text-muted)" }}
                  >
                    {text}
                  </span>
                </div>
              ))}
            </div>

            {/* Socials */}
            <div className="flex gap-2 mt-1">
              {SOCIALS.map(({ icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="glass-sm w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-200 hover:scale-110 no-underline"
                  style={{
                    border: "1px solid var(--glass-border)",
                    color: "var(--text-secondary)",
                  }}
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(LINKS).map(([heading, links], colIdx) => (
            <motion.div
              key={heading}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                delay: 0.2 + colIdx * 0.1,
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="flex flex-col gap-4"
            >
              <p
                className="text-[11px] font-bold tracking-widest uppercase m-0"
                style={{ color: "var(--text-primary)" }}
              >
                {heading}
              </p>
              <ul className="list-none m-0 p-0 flex flex-col gap-2.5">
                {links.map(({ label, href }) => (
                  <li key={label}>
                    <Link
                      href={href}
                      className="text-[13px] no-underline transition-colors duration-200 hover:text-[var(--accent-primary)] flex items-center gap-1 group"
                      style={{ color: "var(--text-muted)" }}
                    >
                      <span
                        className="opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                        style={{ color: "var(--accent-primary)" }}
                      >
                        <IconArrowRight size={11} stroke={2.5} />
                      </span>
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.55, duration: 0.6 }}
          className="pt-7 flex flex-col sm:flex-row items-center justify-between gap-3"
        >
          <p className="text-[12px] m-0" style={{ color: "var(--text-muted)" }}>
            © {new Date().getFullYear()} VIHIPEX University Institute. All
            rights reserved.
          </p>
          <div className="flex gap-5">
            {["Privacy Policy", "Terms of Use", "Cookie Policy"].map((item) => (
              <Link
                key={item}
                href="#"
                className="text-[12px] no-underline transition-colors duration-200"
                style={{ color: "var(--text-muted)" }}
              >
                {item}
              </Link>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
