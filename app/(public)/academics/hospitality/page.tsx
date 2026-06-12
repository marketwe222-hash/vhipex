import ProgramCategoryPage from "@/components/academics/ProgramCategoryPage";
import { getCategoryBySlug } from "@/data/programs";

export const metadata = {
  title: "Hospitality Programs | VIHIPEX University Institute",
  description: "Browse all Hospitality programs at VHIPEX.",
};

export default function Page() {
  const category = getCategoryBySlug("hospitality");

  if (!category) {
    return (
      <main className="min-h-screen px-6 py-24 text-center">
        <h1 className="text-3xl font-semibold">Hospitality Programs</h1>
        <p className="mt-4 text-slate-500">Program category not found.</p>
      </main>
    );
  }

  return <ProgramCategoryPage category={category} />;
}
