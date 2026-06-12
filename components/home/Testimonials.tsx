"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import {
  IconStarFilled,
  IconQuote,
  IconChevronLeft,
  IconChevronRight,
  IconUsers,
} from "@tabler/icons-react";

// ─── Data ─────────────────────────────────────────────────────────────────────

const TESTIMONIALS = [
  {
    name: "Amara Nkeng",
    role: "HND Software Engineering, 2022",
    company: "Now at MTN Cameroon",
    rating: 5,
    text: "VIHIPEX gave me the practical foundation I needed. Within three months of graduating I was hired as a junior developer. The bilingual training was a huge advantage — I work with both French and English-speaking teams every day.",
    initials: "AN",
  },
  {
    name: "Brigitte Fouda",
    role: "Bachelor in Agronomy, 2021",
    company: "Now at SODECOTON",
    rating: 5,
    text: "The field exposure during my studies was unlike anything I expected from a university. We spent real time on farms and in labs, not just classrooms. My employer told me I was the most prepared graduate they had interviewed that year.",
    initials: "BF",
  },
  {
    name: "Lionel Tchamba",
    role: "ND Accounting, 2023",
    company: "Now at Afriland First Bank",
    rating: 5,
    text: "I chose VIHIPEX because of the CEMAC accreditation. That credential opened doors I didn't expect — including an offer from one of Cameroon's top banks before I even finished my final exams.",
    initials: "LT",
  },
  {
    name: "Sandrine Mballa",
    role: "Master in Public Health, 2022",
    company: "Now at Ministry of Health",
    rating: 5,
    text: "The lecturers are working professionals, not just academics. They brought real cases from Cameroonian hospitals into every session. That perspective shaped how I approach my work at the Ministry today.",
    initials: "SM",
  },
  {
    name: "Kevin Etame",
    role: "HND Civil Engineering, 2020",
    company: "Now at Razel-BEC",
    rating: 5,
    text: "Three years after graduating I am managing a road construction crew of 40 people. VIHIPEX's workshop training and the internship they arranged for me were the turning points. I would not be where I am without them.",
    initials: "KE",
  },
  {
    name: "Carine Nguefack",
    role: "Bachelor in Marketing, 2023",
    company: "Now at Orange Cameroun",
    rating: 5,
    text: "What sets VIHIPEX apart is how they connect you to industry. I had three internship opportunities before I graduated. By the time I finished, I already had a job offer waiting. The network they build for you is invaluable.",
    initials: "CN",
  },
];

// ─── Helpers ──────────────────────────────────────────────────────────────────

const TOTAL = TESTIMONIALS.length;

// For each position relative to active (0 = front, ±1 = sides, ±2 = back)
function getPosition(index: number, active: number) {
  let rel = index - active;
  // Wrap around
  if (rel > TOTAL / 2) rel -= TOTAL;
  if (rel < -TOTAL / 2) rel += TOTAL;
  return rel;
}

function positionStyles(rel: number): React.CSSProperties {
  // 3D circular arc: cards fan out behind the active one
  const absRel = Math.abs(rel);

  if (absRel > 2) {
    return { opacity: 0, pointerEvents: "none", zIndex: 0 };
  }

  // Arc parameters
  const zMap: Record<number, number> = { 0: 0, 1: -160, 2: -280 };
  const xMap: Record<number, number> = { 0: 0, 1: 260, 2: 200 };
  const yMap: Record<number, number> = { 0: 0, 1: 40, 2: 100 };
  const rotYMap: Record<number, number> = { 0: 0, 1: 38, 2: 55 };
  const scaleMap: Record<number, number> = { 0: 1, 1: 0.78, 2: 0.58 };
  const opacMap: Record<number, number> = { 0: 1, 1: 0.55, 2: 0.28 };
  const zIdxMap: Record<number, number> = { 0: 10, 1: 6, 2: 3 };

  const sign = rel >= 0 ? 1 : -1;

  return {
    transform: `
      translateX(${sign * xMap[absRel]}px)
      translateY(${yMap[absRel]}px)
      translateZ(${zMap[absRel]}px)
      rotateY(${sign * rotYMap[absRel]}deg)
      scale(${scaleMap[absRel]})
    `,
    opacity: opacMap[absRel],
    zIndex: zIdxMap[absRel],
    pointerEvents: absRel === 0 ? "auto" : "none",
  };
}

// ─── Background ───────────────────────────────────────────────────────────────

function SectionBg() {
  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 overflow-hidden pointer-events-none"
    >
      <div
        className="absolute top-[-5%] left-[10%] w-[50vw] h-[50vw] max-w-[640px] max-h-[640px] rounded-full opacity-20"
        style={{
          background:
            "radial-gradient(circle, var(--hero-orb-primary) 0%, transparent 65%)",
        }}
      />
      <div
        className="absolute bottom-[-8%] right-[-4%] w-[36vw] h-[36vw] max-w-[460px] max-h-[460px] rounded-full opacity-18"
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
            id="test-grid"
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
        <rect width="100%" height="100%" fill="url(#test-grid)" />
      </svg>
      <motion.div
        animate={{ y: [0, -14, 0], rotate: [0, 6, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[15%] right-[7%] w-10 h-10 rounded-xl opacity-[0.12]"
        style={{
          border: "1.5px solid var(--accent-primary)",
          transform: "rotate(20deg)",
        }}
      />
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
        className="absolute bottom-[20%] left-[5%] w-5 h-5 rounded-full opacity-15"
        style={{ background: "var(--red-light)" }}
      />
    </div>
  );
}

// ─── Single card ──────────────────────────────────────────────────────────────

function TestimonialCard({
  testimonial,
  rel,
  onClick,
}: {
  testimonial: (typeof TESTIMONIALS)[0];
  rel: number;
  onClick: () => void;
}) {
  const styles = positionStyles(rel);
  const isActive = rel === 0;

  return (
    <div
      onClick={onClick}
      style={{
        position: "absolute",
        width: "min(500px, 88vw)",
        left: "50%",
        top: "50%",
        marginLeft: "min(-250px, -44vw)",
        marginTop: "-200px",
        transition:
          "transform 0.65s cubic-bezier(0.22,1,0.36,1), opacity 0.65s ease",
        cursor: isActive ? "default" : "pointer",
        ...styles,
      }}
    >
      <div
        className="glass rounded-3xl p-8 flex flex-col gap-5 items-center text-center"
        style={{
          boxShadow: isActive ? "0 32px 80px rgba(0,0,0,0.18)" : "none",
          border: isActive
            ? "1px solid var(--glass-border)"
            : "1px solid var(--glass-border-subtle)",
        }}
      >
        {/* Quote icon */}
        <div
          className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
          style={{
            background: "var(--badge-blue-bg)",
            color: "var(--accent-primary)",
            border: "1px solid var(--input-border)",
          }}
        >
          <IconQuote size={18} stroke={2} />
        </div>

        {/* Stars */}
        <div className="flex gap-1">
          {Array.from({ length: testimonial.rating }).map((_, i) => (
            <IconStarFilled
              key={i}
              size={14}
              style={{ color: "var(--accent-primary)" }}
            />
          ))}
        </div>

        {/* Text */}
        <p
          className="text-[15px] leading-[1.75] m-0 flex-1 font-medium"
          style={{ color: "var(--text-secondary)" }}
        >
          &ldquo;{testimonial.text}&rdquo;
        </p>

        {/* Divider */}
        <div className="h-px w-full" style={{ background: "var(--divider)" }} />

        {/* Author */}
        <div className="flex items-center gap-3 justify-center">
          <div
            className="w-11 h-11 rounded-full flex items-center justify-center font-bold text-[13px] flex-shrink-0"
            style={{
              background: "var(--badge-blue-bg)",
              color: "var(--accent-primary)",
              border: "1.5px solid var(--input-border)",
              fontFamily: "Georgia, 'Times New Roman', serif",
            }}
          >
            {testimonial.initials}
          </div>
          <div className="text-left">
            <p
              className="text-[14px] font-semibold m-0"
              style={{
                color: "var(--text-primary)",
                fontFamily: "Georgia, 'Times New Roman', serif",
              }}
            >
              {testimonial.name}
            </p>
            <p
              className="text-[12px] m-0"
              style={{ color: "var(--text-muted)" }}
            >
              {testimonial.role}
            </p>
            <p
              className="text-[11.5px] font-medium m-0 mt-0.5"
              style={{ color: "var(--accent-primary)" }}
            >
              {testimonial.company}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Main ─────────────────────────────────────────────────────────────────────

export default function Testimonials() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });
  const [active, setActive] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  const next = useCallback(() => setActive((p) => (p + 1) % TOTAL), []);
  const prev = useCallback(() => setActive((p) => (p - 1 + TOTAL) % TOTAL), []);

  // Autoplay
  useEffect(() => {
    if (!autoplay || !isInView) return;
    const id = setInterval(next, 4000);
    return () => clearInterval(id);
  }, [autoplay, isInView, next]);

  return (
    <section
      ref={sectionRef}
      className="relative py-24 lg:py-32 overflow-hidden"
      style={{ background: "var(--bg-base)" }}
    >
      <SectionBg />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-10 2xl:px-12">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-6"
        >
          <span
            className="glass-sm inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11.5px] font-semibold tracking-widest uppercase mb-4"
            style={{
              border: "1px solid var(--glass-border)",
              color: "var(--text-secondary)",
            }}
          >
            <IconUsers size={13} stroke={2} />
            Student Stories
          </span>

          <h2
            className="text-[clamp(1.8rem,4vw,3rem)] font-bold m-0 mb-4 leading-tight"
            style={{
              fontFamily: "Georgia, 'Times New Roman', serif",
              letterSpacing: "-0.02em",
              color: "var(--text-primary)",
            }}
          >
            Voices of Our{" "}
            <span style={{ color: "var(--accent-primary)" }}>Graduates</span>
          </h2>

          <p
            className="text-[clamp(1rem,1.6vw,1.1rem)] max-w-[50ch] mx-auto m-0 leading-relaxed"
            style={{ color: "var(--text-secondary)" }}
          >
            Thousands of VIHIPEX graduates are building careers across Cameroon
            and beyond. Here is what some of them have to say.
          </p>
        </motion.div>

        {/* ── 3D Carousel ── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="relative"
          style={{
            height: "480px",
            perspective: "1200px",
            perspectiveOrigin: "50% 40%",
          }}
          onMouseEnter={() => setAutoplay(false)}
          onMouseLeave={() => setAutoplay(true)}
        >
          {/* Cards rendered in a 3D space */}
          <div
            style={{
              position: "relative",
              width: "100%",
              height: "100%",
              transformStyle: "preserve-3d",
            }}
          >
            {TESTIMONIALS.map((t, i) => {
              const rel = getPosition(i, active);
              return (
                <TestimonialCard
                  key={t.name}
                  testimonial={t}
                  rel={rel}
                  onClick={() => {
                    if (rel !== 0) setActive(i);
                  }}
                />
              );
            })}
          </div>
        </motion.div>

        {/* Controls */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="flex items-center justify-center gap-6 mt-4"
        >
          {/* Prev */}
          <button
            onClick={prev}
            aria-label="Previous testimonial"
            className="glass-sm w-11 h-11 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-105 border-none cursor-pointer"
            style={{
              border: "1px solid var(--glass-border)",
              color: "var(--text-primary)",
              background: "var(--glass-bg)",
            }}
          >
            <IconChevronLeft size={18} stroke={2} />
          </button>

          {/* Dots */}
          <div className="flex gap-2 items-center">
            {TESTIMONIALS.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                aria-label={`Go to testimonial ${i + 1}`}
                className="rounded-full border-none cursor-pointer transition-all duration-300"
                style={{
                  width: i === active ? "24px" : "8px",
                  height: "8px",
                  background:
                    i === active
                      ? "var(--accent-primary)"
                      : "var(--text-disabled)",
                  padding: 0,
                }}
              />
            ))}
          </div>

          {/* Next */}
          <button
            onClick={next}
            aria-label="Next testimonial"
            className="glass-sm w-11 h-11 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-105 border-none cursor-pointer"
            style={{
              border: "1px solid var(--glass-border)",
              color: "var(--text-primary)",
              background: "var(--glass-bg)",
            }}
          >
            <IconChevronRight size={18} stroke={2} />
          </button>
        </motion.div>

        {/* Counter */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.7 }}
          className="text-center text-[11.5px] font-medium tracking-widest uppercase mt-4"
          style={{ color: "var(--text-muted)" }}
        >
          {active + 1} / {TOTAL}
        </motion.p>
      </div>
    </section>
  );
}
