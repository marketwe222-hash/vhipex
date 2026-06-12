import ProgramCategoryPage from "@/components/academics/ProgramCategoryPage";
import { getCategoryBySlug } from "@/data/programs";

export const metadata = {
  title: "CQP / DQP Short Courses | VIHIPEX University Institute",
  description: "Browse all CQP, DQP, and AQP short courses at VHIPEX.",
};

export default function Page() {
  const category = getCategoryBySlug("cqp");

  if (!category) {
    return (
      <main className="min-h-screen px-6 py-24 text-center">
        <h1 className="text-3xl font-semibold">CQP / DQP Short Courses</h1>
        <p className="mt-4 text-slate-500">Program category not found.</p>
      </main>
    );
  }

  return <ProgramCategoryPage category={category} />;
}
