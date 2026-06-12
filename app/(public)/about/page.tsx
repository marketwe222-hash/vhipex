import {
  AboutHero,
  MissionVision,
  Timeline,
  TeamSection,
} from "@/components/about";

export const metadata = {
  title: "About Us | VIHIPEX University Institute",
  description:
    "Learn about VIHIPEX University Institute for Professionals - transforming education into employment across Africa since 2022.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <AboutHero />
      <MissionVision />
      <Timeline />
      <TeamSection />
    </main>
  );
}
