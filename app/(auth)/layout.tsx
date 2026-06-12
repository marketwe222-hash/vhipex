export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex">
      {/* ── Left branded panel ── */}
      <div
        className="hidden lg:flex lg:w-[45%] xl:w-[40%] flex-col justify-between p-12 relative overflow-hidden"
        style={{ background: "var(--btn-primary-bg)" }}
      >
        {/* Decorative orbs */}
        <div
          className="absolute top-[-80px] left-[-80px] w-[400px] h-[400px] rounded-full pointer-events-none"
          style={{ background: "rgba(255,255,255,0.06)" }}
        />
        <div
          className="absolute bottom-[-60px] right-[-60px] w-[300px] h-[300px] rounded-full pointer-events-none"
          style={{ background: "rgba(220,20,60,0.18)" }}
        />

        {/* Logo */}
        <div className="flex items-center gap-3 relative z-10"></div>

        {/* Quote / tagline */}
        <div className="relative z-10 space-y-4">
          <blockquote
            className="text-white font-bold leading-tight"
            style={{
              fontFamily: "Georgia, 'Times New Roman', serif",
              fontSize: "clamp(1.6rem, 3vw, 2.4rem)",
            }}
          >
            "Shaping Africa's{" "}
            <span style={{ color: "rgba(255,255,255,0.5)" }}>
              Professional Workforce,
            </span>{" "}
            One Graduate at a Time."
          </blockquote>
          <p
            className="text-sm leading-relaxed"
            style={{ color: "rgba(255,255,255,0.58)" }}
          >
            Join thousands of students across Central Africa building real
            careers through practical, industry-ready education.
          </p>
        </div>

        {/* Footer */}
        <p
          className="text-xs relative z-10"
          style={{ color: "rgba(255,255,255,0.35)" }}
        >
          © {new Date().getFullYear()} VIHIPEX University Institute for
          Professionals
        </p>
      </div>

      {/* ── Right form panel ── */}
      <div
        className="flex-1 flex items-center justify-center p-6 sm:p-12 overflow-y-auto"
        style={{
          background: "var(--bg-base)",
          backgroundImage: "var(--bg-gradient)",
        }}
      >
        <div className="w-full max-w-[420px]">{children}</div>
      </div>
    </div>
  );
}
