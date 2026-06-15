"use client";
import { motion } from "framer-motion";
import { IconMail } from "@tabler/icons-react";
import { ContactForm, ContactInfo, MapEmbed } from "@/components/contact";

export default function ContactPage() {
  return (
    <main style={{ paddingTop: "120px", paddingBottom: "80px" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 24px" }}>
        {/* ── Page Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          style={{ textAlign: "center", marginBottom: "52px" }}
        >
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "6px 16px",
              borderRadius: "99px",
              background: "var(--glass-bg)",
              border: "1px solid var(--glass-border)",
              fontSize: "12px",
              fontWeight: 600,
              color: "var(--accent-primary)",
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              marginBottom: "20px",
            }}
          >
            <IconMail size={14} stroke={2} />
            Get in Touch
          </div>
          <h1
            style={{
              fontSize: "clamp(2rem, 5vw, 3.25rem)",
              fontWeight: 800,
              color: "var(--text-primary)",
              lineHeight: 1.15,
              margin: "0 0 14px",
              letterSpacing: "-0.02em",
            }}
          >
            Contact{" "}
            <span style={{ color: "var(--accent-primary)" }}>VIHIPEX</span>
          </h1>
          <p
            style={{
              fontSize: "16px",
              color: "var(--text-muted)",
              maxWidth: "520px",
              margin: "0 auto",
              lineHeight: 1.65,
            }}
          >
            Have a question about admissions, programs, or fees? Our team is
            here to help — reach out and we'll get back to you quickly.
          </p>
        </motion.div>

        {/* ── Info Cards ── */}
        <section style={{ marginBottom: "40px" }}>
          <ContactInfo />
        </section>

        {/* ── Form + Map ── */}
        <section>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "24px",
              alignItems: "start",
            }}
            className="contact-grid"
          >
            <ContactForm />
            <div
              style={{ display: "flex", flexDirection: "column", gap: "20px" }}
            >
              <MapEmbed />

              {/* Quick links */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.35,
                  duration: 0.45,
                  ease: [0.22, 1, 0.36, 1],
                }}
                style={{
                  background: "var(--glass-bg-subtle)",
                  border: "1px solid var(--glass-border)",
                  borderRadius: "16px",
                  padding: "20px",
                }}
              >
                <h3
                  style={{
                    fontSize: "13px",
                    fontWeight: 700,
                    textTransform: "uppercase",
                    letterSpacing: "0.06em",
                    color: "var(--text-muted)",
                    margin: "0 0 14px",
                  }}
                >
                  Quick Links
                </h3>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "8px",
                  }}
                >
                  {[
                    { label: "How to Apply", href: "/admissions" },
                    { label: "Browse Programs", href: "/academics" },
                    { label: "Registration Fee", href: "/admissions#fees" },
                    { label: "Student Portal", href: "/login" },
                  ].map(({ label, href }) => (
                    <a
                      key={href}
                      href={href}
                      style={{
                        display: "block",
                        padding: "10px 14px",
                        borderRadius: "10px",
                        fontSize: "13px",
                        fontWeight: 500,
                        color: "var(--text-secondary)",
                        textDecoration: "none",
                        background: "var(--glass-bg)",
                        border: "1px solid var(--glass-border)",
                        transition: "color 0.15s, background 0.15s",
                      }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLElement).style.color =
                          "var(--accent-primary)";
                        (e.currentTarget as HTMLElement).style.background =
                          "var(--info-bg)";
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLElement).style.color =
                          "var(--text-secondary)";
                        (e.currentTarget as HTMLElement).style.background =
                          "var(--glass-bg)";
                      }}
                    >
                      {label}
                    </a>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </div>

      {/* Responsive: stack on mobile */}
      <style>{`
        @media (max-width: 768px) {
          .contact-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </main>
  );
}
