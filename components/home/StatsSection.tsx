"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, Variants } from "framer-motion";
import {
  IconUsers,
  IconBuildingBank,
  IconWorld,
  IconCertificate,
  IconTrophy,
  IconBook,
  IconBriefcase,
  IconHeartHandshake,
} from "@tabler/icons-react";
import { PROGRAM_CATEGORIES } from "@/data/programs";

// ─── Derived real stats ───────────────────────────────────────────────────────

const allPrograms = PROGRAM_CATEGORIES.flatMap((c) => c.programs);
const totalPrograms = allPrograms.length;
const totalFields = PROGRAM_CATEGORIES.length;
const uniqueLevels = new Set(allPrograms.flatMap((p) => p.levels)).size;
const popularCount = allPrograms.filter((p) => p.badge === "popular").length;

const STATS = [
  {
    value: 2500,
    suffix: "+",
    label: "Students Enrolled",
    sub: "Across all programs",
    icon: <IconUsers size={28} stroke={1.5} />,
  },
  {
    value: 15,
    suffix: "+",
    label: "Years of Excellence",
    sub: "Serving Central Africa",
    icon: <IconTrophy size={28} stroke={1.5} />,
  },
  {
    value: totalFields,
    suffix: "",
    label: "Professional Fields",
    sub: `${totalPrograms} programs total`,
    icon: <IconBook size={28} stroke={1.5} />,
  },
  {
    value: 94,
    suffix: "%",
    label: "Graduate Employment",
    sub: "Within 6 months",
    icon: <IconBriefcase size={28} stroke={1.5} />,
  },
  {
    value: uniqueLevels,
    suffix: "",
    label: "Qualification Levels",
    sub: "ND · BTS · HND · Master+",
    icon: <IconCertificate size={28} stroke={1.5} />,
  },
  {
    value: totalPrograms,
    suffix: "+",
    label: "Programs Available",
    sub: `Including ${popularCount} popular picks`,
    icon: <IconWorld size={28} stroke={1.5} />,
  },
  {
    value: 120,
    suffix: "+",
    label: "Industry Partners",
    sub: "For internships & jobs",
    icon: <IconHeartHandshake size={28} stroke={1.5} />,
  },
  {
    value: 100,
    suffix: "%",
    label: "Ministry Accredited",
    sub: "CEMAC/LMD aligned",
    icon: <IconBuildingBank size={28} stroke={1.5} />,
  },
];

// ─── Variants ─────────────────────────────────────────────────────────────────

const containerVariants: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 36 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  },
};

const headingVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

// ─── Animated counter ─────────────────────────────────────────────────────────

function AnimatedNumber({
  value,
  suffix,
  trigger,
}: {
  value: number;
  suffix: string;
  trigger: boolean;
}) {
  const [display, setDisplay] = useState(0);
  const hasRun = useRef(false);

  useEffect(() => {
    if (!trigger || hasRun.current) return;
    hasRun.current = true;
    const duration = 1600;
    const startTime = performance.now();
    const step = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.round(eased * value));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [trigger, value]);

  return (
    <>
      {display}
      {suffix}
    </>
  );
}

// ─── Background ───────────────────────────────────────────────────────────────

function SectionBg() {
  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 overflow-hidden pointer-events-none"
    >
      <div
        className="absolute top-[-10%] left-[-5%] w-[45vw] h-[45vw] max-w-[600px] max-h-[600px] rounded-full opacity-30"
        style={{
          background:
            "radial-gradient(circle, var(--hero-orb-primary) 0%, transparent 65%)",
        }}
      />
      <div
        className="absolute bottom-[-8%] right-[-4%] w-[35vw] h-[35vw] max-w-[480px] max-h-[480px] rounded-full opacity-25"
        style={{
          background:
            "radial-gradient(circle, var(--hero-orb-secondary) 0%, transparent 65%)",
        }}
      />
      <svg
        className="absolute inset-0 w-full h-full opacity-[0.03]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="stats-grid"
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
        <rect width="100%" height="100%" fill="url(#stats-grid)" />
      </svg>
    </div>
  );
}

// ─── Stat card ────────────────────────────────────────────────────────────────

function StatCard({
  stat,
  trigger,
}: {
  stat: (typeof STATS)[0];
  trigger: boolean;
}) {
  return (
    <motion.div
      variants={cardVariants}
      whileHover={{ scale: 1.03, y: -4 }}
      transition={{ type: "spring", stiffness: 280, damping: 22 }}
      className="glass rounded-2xl p-6 flex flex-col gap-4 group cursor-default"
    >
      <div
        className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
        style={{
          background: "var(--badge-blue-bg)",
          color: "var(--accent-primary)",
          border: "1px solid var(--input-border)",
        }}
      >
        {stat.icon}
      </div>
      <div>
        <p
          className="text-[clamp(2rem,3.5vw,2.8rem)] font-bold m-0 leading-none"
          style={{
            fontFamily: "Georgia, 'Times New Roman', serif",
            letterSpacing: "-0.02em",
            color: "var(--text-primary)",
          }}
        >
          <AnimatedNumber
            value={stat.value}
            suffix={stat.suffix}
            trigger={trigger}
          />
        </p>
        <p
          className="text-[15px] font-semibold mt-1.5 m-0"
          style={{ color: "var(--text-primary)" }}
        >
          {stat.label}
        </p>
        <p
          className="text-[12.5px] mt-1 m-0 leading-snug"
          style={{ color: "var(--text-muted)" }}
        >
          {stat.sub}
        </p>
      </div>
      <div
        className="h-[2px] rounded-full mt-auto transition-all duration-500 group-hover:opacity-100 opacity-40"
        style={{
          background:
            "linear-gradient(90deg, var(--accent-primary), var(--red-light))",
        }}
      />
    </motion.div>
  );
}

// ─── Main ─────────────────────────────────────────────────────────────────────

export default function StatsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      ref={sectionRef}
      className="relative py-24 lg:py-32 overflow-hidden"
      style={{ background: "var(--bg-base)" }}
    >
      <SectionBg />
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-10 2xl:px-12">
        <motion.div
          variants={headingVariants}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="text-center mb-16"
        >
          <span
            className="glass-sm inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11.5px] font-semibold tracking-widest uppercase mb-4"
            style={{
              border: "1px solid var(--glass-border)",
              color: "var(--text-secondary)",
            }}
          >
            <IconTrophy size={13} stroke={2} /> By the Numbers
          </span>
          <h2
            className="text-[clamp(1.8rem,4vw,3rem)] font-bold m-0 mb-4 leading-tight"
            style={{
              fontFamily: "Georgia, 'Times New Roman', serif",
              letterSpacing: "-0.02em",
              color: "var(--text-primary)",
            }}
          >
            A Track Record of{" "}
            <span style={{ color: "var(--accent-primary)" }}>Excellence</span>
          </h2>
          <p
            className="text-[clamp(1rem,1.6vw,1.1rem)] max-w-[52ch] mx-auto m-0 leading-relaxed"
            style={{ color: "var(--text-secondary)" }}
          >
            Since our founding, VIHIPEX has shaped thousands of careers across
            Central Africa with accredited, industry-linked education.
          </p>
        </motion.div>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {STATS.map((stat) => (
            <StatCard key={stat.label} stat={stat} trigger={isInView} />
          ))}
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mt-14 glass rounded-2xl px-8 py-7 flex flex-col sm:flex-row items-center justify-between gap-5"
        >
          <div>
            <p
              className="text-[17px] font-semibold m-0"
              style={{
                fontFamily: "Georgia, 'Times New Roman', serif",
                color: "var(--text-primary)",
              }}
            >
              Ready to become part of our story?
            </p>
            <p
              className="text-[13.5px] mt-1 m-0"
              style={{ color: "var(--text-muted)" }}
            >
              Applications are open for the 2025–2026 academic year.
            </p>
          </div>
          <div className="flex gap-3 flex-shrink-0">
            <a
              href="/admissions"
              className="btn-primary inline-flex items-center gap-2 px-6 py-3 text-[13.5px] font-semibold rounded-xl no-underline tracking-tight whitespace-nowrap"
            >
              Apply Now <IconCertificate size={15} stroke={2} />
            </a>
            <a
              href="/academics"
              className="glass-sm inline-flex items-center gap-2 px-6 py-3 text-[13.5px] font-semibold rounded-xl no-underline tracking-tight whitespace-nowrap transition-all duration-200 hover:scale-[1.02]"
              style={{
                border: "1.5px solid var(--glass-border)",
                color: "var(--text-primary)",
              }}
            >
              Our Programs
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
