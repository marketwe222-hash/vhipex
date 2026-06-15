"use client";
import { motion } from "framer-motion";
import {
  IconPhone,
  IconMail,
  IconMapPin,
  IconClock,
  IconBrandWhatsapp,
} from "@tabler/icons-react";

const CARDS = [
  {
    icon: <IconPhone size={20} stroke={1.8} />,
    title: "Phone",
    lines: ["+237 652 761 202", "+237 677 000 000"],
    extra: (
      <a
        href="https://wa.me/237652761202"
        target="_blank"
        rel="noreferrer"
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "5px",
          marginTop: "8px",
          fontSize: "12px",
          fontWeight: 600,
          color: "var(--success-text)",
          textDecoration: "none",
          padding: "5px 10px",
          borderRadius: "8px",
          background: "var(--success-bg)",
          border: "1px solid var(--success-border)",
        }}
      >
        <IconBrandWhatsapp size={13} stroke={2} />
        WhatsApp Us
      </a>
    ),
    color: "blue" as const,
  },
  {
    icon: <IconMail size={20} stroke={1.8} />,
    title: "Email",
    lines: ["info@vihipex.com", "admissions@vihipex.com"],
    extra: null,
    color: "red" as const,
  },
  {
    icon: <IconMapPin size={20} stroke={1.8} />,
    title: "Locations",
    lines: ["Bafoussam, West Region", "Yaoundé, Centre Region"],
    extra: null,
    color: "success" as const,
  },
  {
    icon: <IconClock size={20} stroke={1.8} />,
    title: "Office Hours",
    lines: ["Mon – Fri: 7:30 AM – 5:00 PM", "Sat: 8:00 AM – 1:00 PM"],
    extra: (
      <p
        style={{
          margin: "8px 0 0",
          fontSize: "11.5px",
          color: "var(--text-muted)",
          fontStyle: "italic",
        }}
      >
        Closed on Sundays & public holidays
      </p>
    ),
    color: "warning" as const,
  },
];

const COLOR = {
  blue: {
    icon: "var(--accent-primary)",
    bg: "var(--info-bg)",
    border: "var(--info-border)",
  },
  red: {
    icon: "var(--accent-secondary)",
    bg: "var(--error-bg)",
    border: "var(--error-border)",
  },
  success: {
    icon: "var(--success-text)",
    bg: "var(--success-bg)",
    border: "var(--success-border)",
  },
  warning: {
    icon: "var(--warning-text)",
    bg: "var(--warning-bg)",
    border: "var(--warning-border)",
  },
};

export default function ContactInfo() {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
        gap: "14px",
      }}
    >
      {CARDS.map((card, i) => {
        const c = COLOR[card.color];
        return (
          <motion.div
            key={card.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.1 + i * 0.08,
              duration: 0.45,
              ease: [0.22, 1, 0.36, 1],
            }}
            style={{
              background: "var(--glass-bg-subtle)",
              border: "1px solid var(--glass-border)",
              borderRadius: "16px",
              padding: "20px",
              backdropFilter: "var(--glass-blur-sm)",
            }}
          >
            {/* Icon */}
            <div
              style={{
                width: "42px",
                height: "42px",
                borderRadius: "12px",
                background: c.bg,
                border: `1px solid ${c.border}`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: c.icon,
                marginBottom: "14px",
              }}
            >
              {card.icon}
            </div>
            <h3
              style={{
                fontSize: "13px",
                fontWeight: 700,
                letterSpacing: "0.05em",
                textTransform: "uppercase",
                color: "var(--text-muted)",
                margin: "0 0 8px",
              }}
            >
              {card.title}
            </h3>
            {card.lines.map((line) => (
              <p
                key={line}
                style={{
                  fontSize: "14px",
                  fontWeight: 500,
                  color: "var(--text-primary)",
                  margin: "0 0 2px",
                  lineHeight: 1.5,
                }}
              >
                {line}
              </p>
            ))}
            {card.extra}
          </motion.div>
        );
      })}
    </div>
  );
}
