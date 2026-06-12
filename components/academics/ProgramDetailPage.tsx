import Link from "next/link";
import {
  IconArrowLeft,
  IconCertificate,
  IconClock,
  IconList,
} from "@tabler/icons-react";
import type { Program } from "@/data/programs";

interface ProgramDetailPageProps {
  categoryName: string;
  categorySlug: string;
  program: Program;
}

export default function ProgramDetailPage({
  categoryName,
  categorySlug,
  program,
}: ProgramDetailPageProps) {
  return (
    <main className="min-h-screen">
      <section className=" text-white">
        <div className="mx-auto max-w-6xl px-6 py-16 mt-16">
          <Link
            href={`/academics/${categorySlug}`}
            className="inline-flex items-center gap-2 text-sm font-semibold text-slate-300 transition hover:text-white"
          >
            <IconArrowLeft size={16} />
            Back to {categoryName}
          </Link>

          <div className="mt-8 max-w-3xl">
            <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
              {categoryName}
            </p>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
              {program.name}
            </h1>
            <p className="mt-6 text-lg leading-8 text-slate-300">
              {program.longDescription}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <span className="inline-flex items-center gap-2 rounded-full bg-slate-900/90 px-4 py-2 text-sm uppercase tracking-[0.28em] text-slate-200">
                <IconClock size={16} />
                {program.duration}
              </span>
              <span className="inline-flex items-center gap-2 rounded-full bg-slate-900/90 px-4 py-2 text-sm uppercase tracking-[0.28em] text-slate-200">
                <IconCertificate size={16} />
                {program.levels.join(" / ")}
              </span>
              {program.badge ? (
                <span className="rounded-full bg-amber-500/10 px-4 py-2 text-sm uppercase tracking-[0.28em] text-amber-200">
                  {program.badge}
                </span>
              ) : null}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-12 grid gap-8 lg:grid-cols-[2fr_1fr]">
        <div className="space-y-8">
          <article className="glass rounded-[32px] border border-white/10 bg-white/5 p-6 shadow-xl">
            <h2 className="text-2xl font-semibold text-slate-100">
              Career Outcomes
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-300">
              Graduates from this program are prepared for the following career
              tracks.
            </p>
            <ul className="mt-6 grid gap-3 text-sm text-slate-300 sm:grid-cols-2">
              {program.outcomes.map((outcome) => (
                <li key={outcome} className="rounded-3xl bg-slate-950/70 p-4">
                  {outcome}
                </li>
              ))}
            </ul>
          </article>

          <article className="glass rounded-[32px] border border-white/10 bg-white/5 p-6 shadow-xl">
            <h2 className="text-2xl font-semibold text-slate-100">
              Core Modules
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-300">
              This program blends technical coursework with practical skills
              taught in industry-standard labs.
            </p>
            <ul className="mt-6 grid gap-3 text-sm text-slate-300 sm:grid-cols-2">
              {program.modules.map((module) => (
                <li key={module} className="rounded-3xl bg-slate-950/70 p-4">
                  {module}
                </li>
              ))}
            </ul>
          </article>

          <article className="glass rounded-[32px] border border-white/10 bg-white/5 p-6 shadow-xl">
            <div className="flex items-center gap-3">
              <IconList size={20} className="text-slate-200" />
              <h2 className="text-2xl font-semibold text-slate-100">
                Program Media
              </h2>
            </div>
            <p className="mt-3 text-sm leading-7 text-slate-300">
              View images and supporting video topics that illustrate key
              learning areas.
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {program.images.slice(0, 2).map((image, index) => (
                <div
                  key={`${image.url}-${index}`}
                  className="overflow-hidden rounded-3xl bg-slate-950/70"
                >
                  <img
                    src={image.url}
                    alt={image.alt}
                    className="h-52 w-full object-cover"
                  />
                  <div className="p-4 text-sm text-slate-300">
                    <p className="font-semibold text-slate-100">{image.alt}</p>
                    <p className="mt-1 text-slate-400">{image.caption}</p>
                  </div>
                </div>
              ))}
            </div>
            {program.videos.length > 0 ? (
              <div className="mt-6 space-y-3 text-sm text-slate-300">
                <p className="font-semibold text-slate-100">Video previews</p>
                {program.videos.map((video) => (
                  <a
                    key={video.embedUrl}
                    href={video.embedUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="block rounded-3xl border border-white/10 bg-slate-950/80 px-4 py-3 transition hover:border-slate-400"
                  >
                    <div className="flex items-center justify-between gap-4">
                      <span>{video.title}</span>
                      <span className="text-xs uppercase tracking-[0.24em] text-slate-400">
                        {video.duration}
                      </span>
                    </div>
                  </a>
                ))}
              </div>
            ) : null}
          </article>
        </div>

        <aside className="space-y-6">
          <div className="glass rounded-[32px] border border-white/10 bg-white/5 p-6 shadow-xl">
            <h2 className="text-xl font-semibold text-slate-100">
              Program Summary
            </h2>
            <div className="mt-6 space-y-4 text-sm text-slate-300">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
                  Category
                </p>
                <p className="mt-2 text-base text-slate-100">{categoryName}</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
                  Levels
                </p>
                <div className="mt-2 flex flex-wrap gap-2">
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
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
                  Duration
                </p>
                <p className="mt-2 text-base text-slate-100">
                  {program.duration}
                </p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
                  Badge
                </p>
                <p className="mt-2 text-base text-slate-100">
                  {program.badge ?? "Standard"}
                </p>
              </div>
            </div>
          </div>

          <div className="glass rounded-[32px] border border-white/10 bg-white/5 p-6 shadow-xl">
            <h2 className="text-xl font-semibold text-slate-100">
              Quick Facts
            </h2>
            <dl className="mt-6 grid gap-4 text-sm text-slate-300">
              <div className="rounded-3xl bg-slate-950/70 p-4">
                <dt className="text-xs uppercase tracking-[0.3em] text-slate-400">
                  Program slug
                </dt>
                <dd className="mt-2 text-base text-slate-100">
                  {program.slug}
                </dd>
              </div>
              <div className="rounded-3xl bg-slate-950/70 p-4">
                <dt className="text-xs uppercase tracking-[0.3em] text-slate-400">
                  Modules
                </dt>
                <dd className="mt-2 text-base text-slate-100">
                  {program.modules.length}
                </dd>
              </div>
              <div className="rounded-3xl bg-slate-950/70 p-4">
                <dt className="text-xs uppercase tracking-[0.3em] text-slate-400">
                  Outcomes
                </dt>
                <dd className="mt-2 text-base text-slate-100">
                  {program.outcomes.length}
                </dd>
              </div>
            </dl>
          </div>
        </aside>
      </section>
    </main>
  );
}
