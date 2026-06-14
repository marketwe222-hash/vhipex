"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  Variants,
} from "framer-motion";
import {
  IconArrowRight,
  IconCertificate,
  IconWorld,
  IconChevronDown,
  IconSchool,
  IconTrendingUp,
} from "@tabler/icons-react";
import { PROGRAM_CATEGORIES } from "@/data/programs";

// ─── Derived from real data ───────────────────────────────────────────────────

const allPrograms = PROGRAM_CATEGORIES.flatMap((c) => c.programs);
const totalPrograms = allPrograms.length;
const uniqueLevels = Array.from(new Set(allPrograms.flatMap((p) => p.levels)));

const TRUST_BADGES = [
  {
    icon: <IconCertificate size={14} stroke={1.8} />,
    text: "MINEFOP Accredited",
  },
  { icon: <IconSchool size={14} stroke={1.8} />, text: "Arrêté 000010" },
  { icon: <IconWorld size={14} stroke={1.8} />, text: "Bilingual Programs" },
];

const PROGRAM_HIGHLIGHTS = uniqueLevels.map((l) => {
  const labels: Record<string, string> = {
    ND: "National Diploma (ND)",
    BTS: "BTS",
    HND: "Higher National Diploma (HND)",
    Licence: "Bachelor Degree",
    Master: "Master's Programs",
    CAPIEMP: "CAPIEMP",
    CAPIET: "CAPIET",
    CQP: "CQP",
    DQP: "DQP",
    AQP: "AQP",
  };
  return labels[l] ?? l;
});

const ROTATING_WORDS = [
  "Future Professionals",
  "Next Innovators",
  "Tomorrow's Leaders",
  "Greatest Thinkers",
  "Change Makers",
];

// ─── Variants ─────────────────────────────────────────────────────────────────

const containerVariants: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.72, ease: [0.22, 1, 0.36, 1] },
  },
};

const fadeIn: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.6 } },
};

// ─── Rotating headline ────────────────────────────────────────────────────────

function RotatingHeadline() {
  const [wordIndex, setWordIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const current = ROTATING_WORDS[wordIndex];
    if (!isDeleting && displayed.length < current.length) {
      timeoutRef.current = setTimeout(
        () => setDisplayed(current.slice(0, displayed.length + 1)),
        55,
      );
    } else if (!isDeleting && displayed.length === current.length) {
      timeoutRef.current = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayed.length > 0) {
      timeoutRef.current = setTimeout(
        () => setDisplayed(current.slice(0, displayed.length - 1)),
        28,
      );
    } else if (isDeleting && displayed.length === 0) {
      setIsDeleting(false);
      setWordIndex((prev) => (prev + 1) % ROTATING_WORDS.length);
    }
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [displayed, isDeleting, wordIndex]);

  return (
    <h1
      className="text-[clamp(1.5rem,3.6vw,2.8rem)] font-bold leading-[1.05] tracking-tight m-0 mb-3 flex items-center gap-2"
      style={{
        fontFamily: "Georgia, 'Times New Roman', serif",
        letterSpacing: "-0.02em",
        color: "var(--accent-primary)",
        minHeight: "1.2em",
        whiteSpace: "nowrap",
      }}
    >
      {displayed}
      <span
        aria-hidden="true"
        style={{
          display: "inline-block",
          width: "3px",
          height: "0.85em",
          background: "var(--accent-primary)",
          borderRadius: "2px",
          marginLeft: "2px",
          verticalAlign: "middle",
          animation: "blink 1s step-end infinite",
        }}
      />
    </h1>
  );
}

// ─── Background ───────────────────────────────────────────────────────────────

function GeometricBg() {
  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 overflow-hidden pointer-events-none"
    >
      <div
        className="absolute -top-[10%] -right-[5%] w-[55vw] h-[55vw] max-w-[700px] max-h-[700px] rounded-full opacity-55 blur-sm"
        style={{
          background:
            "radial-gradient(circle, var(--hero-orb-primary) 0%, transparent 65%)",
        }}
      />
      <div
        className="absolute -bottom-[5%] -left-[8%] w-[40vw] h-[40vw] max-w-[520px] max-h-[520px] rounded-full opacity-40"
        style={{
          background:
            "radial-gradient(circle, var(--hero-orb-secondary) 0%, transparent 65%)",
        }}
      />
      <svg
        className="absolute inset-0 w-full h-full opacity-[0.045]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="grid"
            width="72"
            height="72"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 72 0 L 0 0 0 72"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.8"
              style={{ color: "var(--text-primary)" }}
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>
      <motion.div
        animate={{ y: [0, -18, 0], rotate: [0, 8, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[18%] right-[12%] w-16 h-16 rounded-2xl opacity-[0.18]"
        style={{
          border: "1.5px solid var(--accent-primary)",
          transform: "rotate(20deg)",
        }}
      />
      <motion.div
        animate={{ y: [0, 14, 0], rotate: [0, -12, 0] }}
        transition={{
          duration: 11,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
        className="absolute top-[60%] right-[6%] w-8 h-8 rounded-lg opacity-25"
        style={{
          border: "1.5px solid var(--red-light)",
          transform: "rotate(-15deg)",
        }}
      />
    </div>
  );
}

// ─── Video card ───────────────────────────────────────────────────────────────

function HeroVideo() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 48 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.9, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
      className="relative w-full h-full min-h-[420px]"
    >
      <motion.div
        whileHover={{ scale: 1.02, rotate: -0.5 }}
        transition={{ type: "spring", stiffness: 260, damping: 22 }}
        className="absolute top-0 left-[5%] right-0 bottom-[20%] rounded-[20px] overflow-hidden glass"
        style={{ boxShadow: "0 24px 64px rgba(0,0,0,0.14)" }}
      >
        <iframe
          src="https://www.youtube.com/embed/38fE4YI04cQ?autoplay=1&mute=1&loop=1&playlist=38fE4YI04cQ&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1"
          allow="autoplay; encrypted-media"
          allowFullScreen
          title="VIHIPEX University Institute"
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            width: "177.78%",
            height: "177.78%",
            transform: "translate(-50%, -50%)",
            border: "none",
            pointerEvents: "none",
          }}
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(to top, rgba(0,0,0,0.35) 0%, transparent 55%)",
          }}
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 24, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ delay: 0.8, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="absolute bottom-[10%] left-0 glass rounded-2xl p-3.5 min-w-[200px]"
        style={{ boxShadow: "0 12px 40px rgba(0,0,0,0.12)" }}
      >
        <div className="flex items-center gap-2 mb-2">
          <IconTrendingUp
            size={18}
            style={{ color: "var(--accent-primary)" }}
          />
          <span
            className="text-xs font-semibold uppercase tracking-wider"
            style={{ color: "var(--text-muted)" }}
          >
            {totalPrograms} Programs
          </span>
        </div>
        <p
          className="text-xl font-bold m-0 leading-tight"
          style={{
            color: "var(--text-primary)",
            fontFamily: "Georgia, 'Times New Roman', serif",
          }}
        >
          {PROGRAM_CATEGORIES.length} Fields
        </p>
        <p
          className="text-[12px] mt-0.5 leading-snug"
          style={{ color: "var(--text-muted)" }}
        >
          {uniqueLevels.length} qualification levels
        </p>
      </motion.div>
    </motion.div>
  );
}

// ─── Main ─────────────────────────────────────────────────────────────────────

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });
  const yContent = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const opacityBg = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const yContentSpring = useSpring(yContent, { stiffness: 80, damping: 20 });
  const yBgSpring = useSpring(yBg, { stiffness: 60, damping: 20 });

  return (
    <section
      ref={containerRef}
      className="relative min-h-[100svh] flex flex-col justify-center overflow-hidden pt-[72px]"
      style={{ background: "var(--bg-base)" }}
    >
      <style>{`@keyframes blink { 0%, 100% { opacity: 1; } 50% { opacity: 0; } }`}</style>
      <motion.div
        style={{ y: yBgSpring, opacity: opacityBg }}
        className="absolute inset-0"
      >
        <GeometricBg />
      </motion.div>
      <motion.div
        style={{ y: yContentSpring }}
        className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-10 2xl:px-12"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center pt-16 pb-20 lg:pt-20 lg:pb-24">
          {/* Left */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="show"
          >
            <motion.div variants={fadeIn} className="flex flex-wrap gap-2 mb-7">
              {TRUST_BADGES.map(({ icon, text }) => (
                <span
                  key={text}
                  className="glass-sm inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11.5px] font-medium tracking-wide"
                  style={{
                    border: "1px solid var(--glass-border)",
                    color: "var(--text-secondary)",
                  }}
                >
                  {icon}
                  {text}
                </span>
              ))}
            </motion.div>
            <motion.div variants={fadeUp}>
              <h1
                className="text-[clamp(1.6rem,5.5vw,4.2rem)] font-bold leading-[1.05] tracking-tight m-0 mb-2"
                style={{
                  fontFamily: "Georgia, 'Times New Roman', serif",
                  letterSpacing: "-0.02em",
                  color: "var(--text-primary)",
                }}
              >
                Empowering Africa&apos;s
              </h1>
              <RotatingHeadline />
              <p
                className="text-[clamp(0.9rem,1.5vw,1.05rem)] leading-relaxed m-0 mb-1 font-medium"
                style={{ color: "var(--text-muted)", letterSpacing: "0.01em" }}
              >
                VIHIPEX University Institute • Bafoussam & Yaoundé, Cameroon
              </p>
            </motion.div>
            <motion.p
              variants={fadeUp}
              className="text-[clamp(1rem,1.7vw,1.12rem)] leading-relaxed max-w-[52ch] m-0 mb-6"
              style={{ color: "var(--text-secondary)" }}
            >
              {totalPrograms} accredited programs across{" "}
              {PROGRAM_CATEGORIES.length} professional fields — built for real
              industry needs across Central Africa and beyond.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-wrap gap-2 mb-8">
              {PROGRAM_HIGHLIGHTS.map((program) => (
                <span
                  key={program}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[12px] font-medium"
                  style={{
                    background: "var(--badge-blue-bg)",
                    color: "var(--badge-blue-text)",
                    border: "1px solid var(--input-border)",
                  }}
                >
                  <IconCertificate size={12} stroke={2} />
                  {program}
                </span>
              ))}
            </motion.div>
            <motion.div
              variants={fadeUp}
              className="flex flex-wrap gap-3 mb-12"
            >
              <Link
                href="/admissions"
                className="btn-primary inline-flex items-center gap-2 px-7 py-3.5 text-[14.5px] font-semibold rounded-xl no-underline tracking-tight whitespace-nowrap"
              >
                Apply Now
                <motion.span
                  animate={{ x: [0, 4, 0] }}
                  transition={{
                    duration: 1.6,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <IconArrowRight size={16} stroke={2.2} />
                </motion.span>
              </Link>
              <Link
                href="/academics"
                className="glass-sm inline-flex items-center gap-2 px-7 py-3.5 text-[14.5px] font-semibold rounded-xl no-underline tracking-tight whitespace-nowrap transition-all duration-200 hover:scale-[1.02]"
                style={{
                  border: "1.5px solid var(--glass-border)",
                  color: "var(--text-primary)",
                }}
              >
                Explore Programs
              </Link>
            </motion.div>
          </motion.div>
          {/* Right */}
          <div className="hidden lg:block relative h-[520px]">
            <HeroVideo />
          </div>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 z-20"
        style={{ color: "var(--text-muted)" }}
      >
        <span className="text-[10px] tracking-[0.15em] uppercase font-medium">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
        >
          <IconChevronDown size={18} stroke={1.8} />
        </motion.div>
      </motion.div>
    </section>
  );
}
