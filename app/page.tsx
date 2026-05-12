import { ThemeToggle } from "@/components/shared/ThemeToggle";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div
      className="min-h-screen w-full font-sans"
      style={{ background: "var(--bg-gradient)" }}
    >
      {/* ── Navbar ─────────────────────────────────────────────────────── */}
      <nav className="fixed top-0 inset-x-0 z-50 flex items-center justify-between px-6 py-4 glass-nav">
        <div className="flex items-center gap-3">
          <div
            className="w-9 h-9 rounded-full flex items-center justify-center text-white font-bold text-sm"
            style={{ background: "var(--btn-primary-bg)" }}
          >
            V
          </div>
          <span
            className="font-semibold text-base tracking-tight"
            style={{ color: "var(--text-primary)" }}
          >
            Vhipex Academy
          </span>
        </div>

        <div className="hidden md:flex items-center gap-6 text-sm font-medium">
          {["About", "Academics", "Admissions", "News", "Contact"].map(
            (item) => (
              <Link
                key={item}
                href={`/${item.toLowerCase()}`}
                style={{ color: "var(--text-secondary)" }}
                className="hover:opacity-80 transition-opacity"
              >
                {item}
              </Link>
            ),
          )}
        </div>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <Link
            href="/login"
            className="btn-primary px-4 py-2 text-sm font-medium"
          >
            Student Portal
          </Link>
        </div>
      </nav>

      {/* ── Hero ───────────────────────────────────────────────────────── */}
      <main className="flex flex-col items-center justify-center min-h-screen px-6 pt-24 pb-16 text-center">
        {/* Badge */}
        <div
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-medium mb-6 glass-sm"
          style={{ color: "var(--text-secondary)" }}
        >
          <span
            className="w-1.5 h-1.5 rounded-full"
            style={{ background: "var(--accent-primary)" }}
          />
          Admissions open for 2025/2026
        </div>

        {/* Heading */}
        <h1
          className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight tracking-tight max-w-3xl mb-6"
          style={{ color: "var(--text-primary)" }}
        >
          Shaping <span style={{ color: "var(--blue)" }}>Tomorrow's</span>{" "}
          Leaders Today
        </h1>

        <p
          className="text-lg max-w-xl leading-relaxed mb-10"
          style={{ color: "var(--text-muted)" }}
        >
          Vhipex Academy provides world-class education in a nurturing
          environment, empowering students to reach their full potential
          academically, socially, and creatively.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 mb-16">
          <Link
            href="/admissions"
            className="btn-primary px-8 py-3 text-sm font-semibold"
          >
            Apply Now
          </Link>
          <Link
            href="/about"
            className="btn-secondary px-8 py-3 text-sm font-semibold"
          >
            Learn More
          </Link>
        </div>

        {/* ── Stats ──────────────────────────────────────────────────────── */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-3xl mb-16">
          {[
            { value: "2,400+", label: "Students Enrolled" },
            { value: "98%", label: "Pass Rate" },
            { value: "120+", label: "Qualified Staff" },
            { value: "25+", label: "Years of Excellence" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="glass rounded-2xl px-4 py-5 flex flex-col items-center gap-1"
            >
              <span
                className="text-2xl font-bold"
                style={{ color: "var(--blue)" }}
              >
                {stat.value}
              </span>
              <span
                className="text-xs text-center"
                style={{ color: "var(--text-muted)" }}
              >
                {stat.label}
              </span>
            </div>
          ))}
        </div>

        {/* ── Feature Cards ──────────────────────────────────────────────── */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full max-w-3xl">
          {[
            {
              icon: "🎓",
              title: "Academic Excellence",
              desc: "Rigorous curriculum designed to challenge and inspire every student.",
            },
            {
              icon: "⚽",
              title: "Sports & Culture",
              desc: "A vibrant school life with sports, arts, and extracurricular programs.",
            },
            {
              icon: "💻",
              title: "Digital Learning",
              desc: "Modern computer labs and e-learning tools for the 21st century.",
            },
          ].map((card) => (
            <div
              key={card.title}
              className="glass rounded-2xl p-6 flex flex-col items-start gap-3 text-left"
            >
              <span className="text-2xl">{card.icon}</span>
              <h3
                className="text-sm font-semibold"
                style={{ color: "var(--text-primary)" }}
              >
                {card.title}
              </h3>
              <p
                className="text-xs leading-relaxed"
                style={{ color: "var(--text-muted)" }}
              >
                {card.desc}
              </p>
            </div>
          ))}
        </div>
      </main>

      {/* ── Footer strip ───────────────────────────────────────────────── */}
      <footer
        className="text-center py-6 text-xs"
        style={{ color: "var(--text-disabled)" }}
      >
        © {new Date().getFullYear()} Vhipex Academy. All rights reserved.
      </footer>
    </div>
  );
}
