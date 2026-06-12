import ProgramDetailPage from "@/components/academics/ProgramDetailPage";
import { getCategoryBySlug, getProgramBySlug } from "@/data/programs";

interface Props {
  params: Promise<{ program: string }>;
}

export default async function ProgramPage({ params }: Props) {
  const { program: programSlug } = await params;
  const categorySlug = "commerce";
  const category = getCategoryBySlug(categorySlug);
  const program = getProgramBySlug(categorySlug, programSlug);

  if (!category || !program) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-slate-950 px-6 py-24 text-center text-white">
        <div className="max-w-xl rounded-3xl border border-slate-700 bg-slate-900/90 p-10 shadow-xl">
          <h1 className="text-3xl font-semibold">Program Not Found</h1>
          <p className="mt-4 text-slate-300">
            No program found for{" "}
            <code className="rounded bg-slate-800 px-2 py-1 text-sm text-emerald-200">
              {programSlug}
            </code>{" "}
            in the{" "}
            <code className="rounded bg-slate-800 px-2 py-1 text-sm text-emerald-200">
              {categorySlug}
            </code>{" "}
            category.
          </p>
        </div>
      </main>
    );
  }

  return (
    <ProgramDetailPage
      categoryName={category.name}
      categorySlug={categorySlug}
      program={program}
    />
  );
}
