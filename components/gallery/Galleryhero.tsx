"use client";
import { motion } from "framer-motion";
import { IconPhoto, IconSearch, IconX } from "@tabler/icons-react";

export type GalleryCategory =
  | "all"
  | "campus"
  | "events"
  | "graduation"
  | "labs";

const CATEGORIES: { value: GalleryCategory; label: string }[] = [
  { value: "all", label: "All Photos" },
  { value: "campus", label: "Campus" },
  { value: "events", label: "Student Events" },
  { value: "graduation", label: "Graduation" },
  { value: "labs", label: "Labs & Classrooms" },
];

interface Props {
  active: GalleryCategory;
  onCategoryChange: (c: GalleryCategory) => void;
  search: string;
  onSearchChange: (v: string) => void;
  totalVisible: number;
}

export default function GalleryHero({
  active,
  onCategoryChange,
  search,
  onSearchChange,
  totalVisible,
}: Props) {
  return (
    <section style={{ paddingTop: "120px", paddingBottom: "48px" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 24px" }}>
        {/* ── Heading ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          style={{ textAlign: "center", marginBottom: "40px" }}
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
            <IconPhoto size={14} stroke={2} />
            Photo Gallery
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
            Life at{" "}
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
            Explore our campus, classrooms, student events, and graduation
            ceremonies through the lens of our community.
          </p>
        </motion.div>

        {/* ── Search + Filter Bar ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "16px",
          }}
        >
          {/* Search */}
          <div
            style={{
              position: "relative",
              width: "100%",
              maxWidth: "420px",
            }}
          >
            <IconSearch
              size={15}
              stroke={1.8}
              style={{
                position: "absolute",
                left: "14px",
                top: "50%",
                transform: "translateY(-50%)",
                color: "var(--text-muted)",
                pointerEvents: "none",
              }}
            />
            <input
              value={search}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder="Search photos…"
              className="glass-input"
              style={{
                width: "100%",
                padding: "10px 14px 10px 38px",
                fontSize: "13.5px",
                boxSizing: "border-box",
              }}
            />
            {search && (
              <button
                onClick={() => onSearchChange("")}
                style={{
                  position: "absolute",
                  right: "10px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  color: "var(--text-muted)",
                  display: "flex",
                }}
              >
                <IconX size={14} stroke={2} />
              </button>
            )}
          </div>

          {/* Category pills */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "8px",
              justifyContent: "center",
            }}
          >
            {CATEGORIES.map((cat) => {
              const isActive = active === cat.value;
              return (
                <button
                  key={cat.value}
                  onClick={() => onCategoryChange(cat.value)}
                  style={{
                    padding: "7px 18px",
                    borderRadius: "99px",
                    fontSize: "13px",
                    fontWeight: isActive ? 700 : 500,
                    cursor: "pointer",
                    border: isActive
                      ? "1px solid var(--accent-primary)"
                      : "1px solid var(--glass-border)",
                    background: isActive
                      ? "var(--accent-primary)"
                      : "var(--glass-bg-subtle)",
                    color: isActive ? "#fff" : "var(--text-secondary)",
                    transition: "all 0.18s ease",
                    backdropFilter: "var(--glass-blur-sm)",
                  }}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>

          {/* Result count */}
          <p
            style={{
              fontSize: "12px",
              color: "var(--text-muted)",
              margin: 0,
            }}
          >
            Showing{" "}
            <strong style={{ color: "var(--text-primary)" }}>
              {totalVisible}
            </strong>{" "}
            photo{totalVisible !== 1 ? "s" : ""}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
