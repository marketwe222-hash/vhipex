// app/page.tsx
import {
  HeroSection,
  FeaturesSection,
  StatsSection,
  Testimonials,
} from "@/components/home";

export default function Home() {
  return (
    <div
      className="min-h-screen w-full font-sans"
      style={{ background: "var(--bg-gradient)" }}
    >
      <HeroSection />
      <StatsSection />
      <FeaturesSection />
      <Testimonials />
    </div>
  );
}
