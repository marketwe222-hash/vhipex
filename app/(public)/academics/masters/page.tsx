import ProgramCategoryPage from "@/components/academics/ProgramCategoryPage";
import { getProgramsByLevel } from "@/data/programs";

export const metadata = {
  title: "Master's Programs | VIHIPEX University Institute",
  description: "Browse all Master's degree programs offered at VIHIPEX.",
};

const category = {
  slug: "masters",
  name: "Master's Programs",
  description:
    "Explore advanced graduate degree programs built for leadership roles in industry, healthcare, and education.",
  color: "blue" as const,
  sectionBadge: "MASTER'S",
  coverImage:
    "https://source.unsplash.com/1400x600/?masters,graduation,university",
  programs: getProgramsByLevel("Master"),
};

export default function Page() {
  if (!category.programs.length) {
    return (
      <main className="min-h-screen px-6 py-24 text-center">
        <h1 className="text-3xl font-semibold">Master's Programs</h1>
        <p className="mt-4 text-slate-500">
          No Master's programs are available right now.
        </p>
      </main>
    );
  }

  return <ProgramCategoryPage category={category} />;
}
