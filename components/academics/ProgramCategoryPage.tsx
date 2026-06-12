import Link from "next/link";
import { IconArrowRight, IconCertificate } from "@tabler/icons-react";
import type { ProgramCategory } from "@/data/programs";

interface ProgramCategoryPageProps {
  category: Omit<ProgramCategory, "slug"> & {
    slug: string;
  };
}

export default function ProgramCategoryPage({
  category,
}: ProgramCategoryPageProps) {
  return (
    <main className="min-h-screen">
      <section className="relative overflow-hidden bg-slate-950 text-white">
        <div className="absolute inset-0 opacity-70">
          <img
            src={category.coverImage}
            alt={`${category.name} cover`}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-slate-950/70" />
        </div>

        <div className="relative mx-auto max-w-6xl px-6 py-24">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs uppercase tracking-[0.28em] text-slate-200">
            <IconCertificate size={14} />
            {category.sectionBadge}
          </span>

          <h1 className="mt-6 text-4xl font-semibold tracking-tight sm:text-5xl">
            {category.name}
          </h1>

          <p className="mt-6 max-w-3xl text-base leading-8 text-slate-200 sm:text-lg">
            {category.description}
          </p>

          <div className="mt-8 flex flex-wrap gap-4 text-sm text-slate-300">
            <span>{category.programs.length} programs available</span>
            <span>
              Levels:{" "}
              {Array.from(
                new Set(category.programs.flatMap((program) => program.levels)),
              ).join(", ")}
            </span>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-6">
          {category.programs.map((program) => (
            <article
              key={program.slug}
              className="glass rounded-[32px] border border-white/10 bg-white/5 p-6 shadow-xl"
            >
              <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
                <div className="max-w-2xl">
                  <div className="mb-3 flex flex-wrap gap-2">
                    <span className="rounded-full bg-slate-800/70 px-3 py-1 text-xs uppercase tracking-[0.24em] text-slate-200">
                      {program.duration}
                    </span>
                    {program.badge ? (
                      <span className="rounded-full bg-amber-500/10 px-3 py-1 text-xs uppercase tracking-[0.24em] text-amber-200">
                        {program.badge}
                      </span>
                    ) : null}
                  </div>

                  <h2 className="text-2xl font-semibold text-slate-100">
                    {program.name}
                  </h2>
                  <p className="mt-3 text-sm leading-7 text-slate-300">
                    {program.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {program.levels.map((level) => (
                    <span
                      key={level}
                      className="rounded-full bg-slate-900/70 px-3 py-1 text-xs uppercase tracking-[0.24em] text-slate-200"
                    >
                      {level}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
                    Top Outcomes
                  </p>
                  <ul className="mt-3 space-y-2 text-sm text-slate-300">
                    {program.outcomes.slice(0, 3).map((outcome) => (
                      <li key={outcome}>• {outcome}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
                    Core Modules
                  </p>
                  <ul className="mt-3 space-y-2 text-sm text-slate-300">
                    {program.modules.slice(0, 3).map((module) => (
                      <li key={module}>• {module}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
                    Media
                  </p>
                  <p className="mt-3 text-sm text-slate-300">
                    {program.images.length} images · {program.videos.length}{" "}
                    videos
                  </p>
                </div>
              </div>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <Link
                  href={`/academics/${category.slug}/${program.slug}`}
                  className="inline-flex items-center gap-2 rounded-full bg-slate-950 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-800"
                >
                  View Program Details
                  <IconArrowRight size={16} />
                </Link>
                <p className="text-xs uppercase tracking-[0.28em] text-slate-500">
                  {program.category.toUpperCase()}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
