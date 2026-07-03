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
      <section>
        <div className="mx-auto max-w-6xl px-6 py-16 mt-16">
          <Link
            href={`/academics/${categorySlug}`}
            className="inline-flex items-center gap-2 text-sm font-semibold transition [color:var(--text-muted)] hover:[color:var(--text-primary)]"
          >
            <IconArrowLeft size={16} />
            Back to {categoryName}
          </Link>

          <div className="mt-8 max-w-3xl">
            <p
              className="text-xs uppercase tracking-[0.3em]"
              style={{ color: "var(--text-muted)" }}
            >
              {categoryName}
            </p>
            <h1
              className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl"
              style={{ color: "var(--text-primary)" }}
            >
              {program.name}
            </h1>
            <p
              className="mt-6 text-lg leading-8"
              style={{ color: "var(--text-secondary)" }}
            >
              {program.longDescription}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <span className="badge badge-neutral inline-flex items-center gap-2 !px-4 !py-2 !text-sm !normal-case tracking-[0.28em] uppercase">
                <IconClock size={16} />
                {program.duration}
              </span>
              <span className="badge badge-neutral inline-flex items-center gap-2 !px-4 !py-2 !text-sm !normal-case tracking-[0.28em] uppercase">
                <IconCertificate size={16} />
                {program.levels.join(" / ")}
              </span>
              {program.badge ? (
                <span className="badge status-warning !px-4 !py-2 !text-sm tracking-[0.28em] uppercase">
                  {program.badge}
                </span>
              ) : null}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-12 grid gap-8 lg:grid-cols-[2fr_1fr]">
        <div className="space-y-8">
          <article className="glass rounded-[32px] p-6">
            <h2
              className="text-2xl font-semibold"
              style={{ color: "var(--text-primary)" }}
            >
              Career Outcomes
            </h2>
            <p
              className="mt-3 text-sm leading-7"
              style={{ color: "var(--text-secondary)" }}
            >
              Graduates from this program are prepared for the following career
              tracks.
            </p>
            <ul className="mt-6 grid gap-3 text-sm sm:grid-cols-2">
              {program.outcomes.map((outcome) => (
                <li
                  key={outcome}
                  className="rounded-3xl p-4"
                  style={{
                    background: "var(--glass-bg-subtle)",
                    color: "var(--text-secondary)",
                  }}
                >
                  {outcome}
                </li>
              ))}
            </ul>
          </article>

          <article className="glass rounded-[32px] p-6">
            <h2
              className="text-2xl font-semibold"
              style={{ color: "var(--text-primary)" }}
            >
              Core Modules
            </h2>
            <p
              className="mt-3 text-sm leading-7"
              style={{ color: "var(--text-secondary)" }}
            >
              This program blends technical coursework with practical skills
              taught in industry-standard labs.
            </p>
            <ul className="mt-6 grid gap-3 text-sm sm:grid-cols-2">
              {program.modules.map((module) => (
                <li
                  key={module}
                  className="rounded-3xl p-4"
                  style={{
                    background: "var(--glass-bg-subtle)",
                    color: "var(--text-secondary)",
                  }}
                >
                  {module}
                </li>
              ))}
            </ul>
          </article>

          <article className="glass rounded-[32px] p-6">
            <div className="flex items-center gap-3">
              <IconList size={20} style={{ color: "var(--text-primary)" }} />
              <h2
                className="text-2xl font-semibold"
                style={{ color: "var(--text-primary)" }}
              >
                Program Media
              </h2>
            </div>
            <p
              className="mt-3 text-sm leading-7"
              style={{ color: "var(--text-secondary)" }}
            >
              View images and supporting video topics that illustrate key
              learning areas.
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {program.images.slice(0, 2).map((image, index) => (
                <div
                  key={`${image.url}-${index}`}
                  className="overflow-hidden rounded-3xl"
                  style={{ background: "var(--glass-bg-subtle)" }}
                >
                  <img
                    src={image.url}
                    alt={image.alt}
                    className="h-52 w-full object-cover"
                  />
                  <div className="p-4 text-sm">
                    <p
                      className="font-semibold"
                      style={{ color: "var(--text-primary)" }}
                    >
                      {image.alt}
                    </p>
                    <p className="mt-1" style={{ color: "var(--text-muted)" }}>
                      {image.caption}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            {program.videos.length > 0 ? (
              <div className="mt-6 space-y-3 text-sm">
                <p
                  className="font-semibold"
                  style={{ color: "var(--text-primary)" }}
                >
                  Video previews
                </p>
                {program.videos.map((video) => (
                  <a
                    key={video.embedUrl}
                    href={video.embedUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="block rounded-3xl px-4 py-3 transition [background:var(--glass-bg-subtle)] [border:1px_solid_var(--glass-border-sub)] [color:var(--text-secondary)] hover:[border-color:var(--divider-strong)]"
                  >
                    <div className="flex items-center justify-between gap-4">
                      <span>{video.title}</span>
                      <span
                        className="text-xs uppercase tracking-[0.24em]"
                        style={{ color: "var(--text-muted)" }}
                      >
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
          <div className="glass rounded-[32px] p-6">
            <h2
              className="text-xl font-semibold"
              style={{ color: "var(--text-primary)" }}
            >
              Program Summary
            </h2>
            <div className="mt-6 space-y-4 text-sm">
              <div>
                <p
                  className="text-xs uppercase tracking-[0.3em]"
                  style={{ color: "var(--text-muted)" }}
                >
                  Category
                </p>
                <p
                  className="mt-2 text-base"
                  style={{ color: "var(--text-primary)" }}
                >
                  {categoryName}
                </p>
              </div>
              <div>
                <p
                  className="text-xs uppercase tracking-[0.3em]"
                  style={{ color: "var(--text-muted)" }}
                >
                  Levels
                </p>
                <div className="mt-2 flex flex-wrap gap-2">
                  {program.levels.map((level) => (
                    <span key={level} className="badge badge-neutral">
                      {level}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <p
                  className="text-xs uppercase tracking-[0.3em]"
                  style={{ color: "var(--text-muted)" }}
                >
                  Duration
                </p>
                <p
                  className="mt-2 text-base"
                  style={{ color: "var(--text-primary)" }}
                >
                  {program.duration}
                </p>
              </div>
              <div>
                <p
                  className="text-xs uppercase tracking-[0.3em]"
                  style={{ color: "var(--text-muted)" }}
                >
                  Badge
                </p>
                <p
                  className="mt-2 text-base"
                  style={{ color: "var(--text-primary)" }}
                >
                  {program.badge ?? "Standard"}
                </p>
              </div>
            </div>
          </div>

          <div className="glass rounded-[32px] p-6">
            <h2
              className="text-xl font-semibold"
              style={{ color: "var(--text-primary)" }}
            >
              Quick Facts
            </h2>
            <dl className="mt-6 grid gap-4 text-sm">
              <div
                className="rounded-3xl p-4"
                style={{ background: "var(--glass-bg-subtle)" }}
              >
                <dt
                  className="text-xs uppercase tracking-[0.3em]"
                  style={{ color: "var(--text-muted)" }}
                >
                  Program slug
                </dt>
                <dd
                  className="mt-2 text-base"
                  style={{ color: "var(--text-primary)" }}
                >
                  {program.slug}
                </dd>
              </div>
              <div
                className="rounded-3xl p-4"
                style={{ background: "var(--glass-bg-subtle)" }}
              >
                <dt
                  className="text-xs uppercase tracking-[0.3em]"
                  style={{ color: "var(--text-muted)" }}
                >
                  Modules
                </dt>
                <dd
                  className="mt-2 text-base"
                  style={{ color: "var(--text-primary)" }}
                >
                  {program.modules.length}
                </dd>
              </div>
              <div
                className="rounded-3xl p-4"
                style={{ background: "var(--glass-bg-subtle)" }}
              >
                <dt
                  className="text-xs uppercase tracking-[0.3em]"
                  style={{ color: "var(--text-muted)" }}
                >
                  Outcomes
                </dt>
                <dd
                  className="mt-2 text-base"
                  style={{ color: "var(--text-primary)" }}
                >
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
