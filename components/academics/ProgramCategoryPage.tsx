"use client";

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
    <main
      className="min-h-screen"
      style={{ backgroundColor: "var(--bg-base)" }}
    >
      <section
        className="relative overflow-hidden"
        style={{ backgroundColor: "var(--bg-base)" }}
      >
        <div className="absolute inset-0 opacity-70">
          <img
            src={category.coverImage}
            alt={`${category.name} cover`}
            className="w-full h-full object-cover"
          />
          <div
            className="absolute inset-0"
            style={{ backgroundColor: "rgba(6, 12, 24, 0.7)" }}
          />
        </div>

        <div className="relative mx-auto max-w-6xl px-6 py-24">
          <span
            className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs uppercase tracking-[0.28em]"
            style={{
              backgroundColor: "var(--glass-bg-subtle)",
              color: "var(--text-secondary)",
            }}
          >
            <IconCertificate size={14} />
            {category.sectionBadge}
          </span>

          <h1
            className="mt-6 text-4xl font-semibold tracking-tight sm:text-5xl"
            style={{ color: "var(--text-inverse)" }}
          >
            {category.name}
          </h1>

          <p
            className="mt-6 max-w-3xl text-base leading-8 sm:text-lg"
            style={{ color: "var(--text-secondary)" }}
          >
            {category.description}
          </p>

          <div
            className="mt-8 flex flex-wrap gap-4 text-sm"
            style={{ color: "var(--text-muted)" }}
          >
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
              className="rounded-[32px] p-6 transition"
              style={{
                backgroundColor: "var(--glass-bg)",
                border: "1px solid var(--glass-border-sub)",
                boxShadow: "var(--glass-shadow)",
              }}
            >
              <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
                <div className="max-w-2xl">
                  <div className="mb-3 flex flex-wrap gap-2">
                    <span
                      className="rounded-full px-3 py-1 text-xs uppercase tracking-[0.24em]"
                      style={{
                        backgroundColor: "var(--glass-bg-hover)",
                        color: "var(--text-secondary)",
                      }}
                    >
                      {program.duration}
                    </span>
                    {program.badge ? (
                      <span
                        className="rounded-full px-3 py-1 text-xs uppercase tracking-[0.24em]"
                        style={{
                          backgroundColor: "rgba(245, 158, 11, 0.15)",
                          color: "var(--amber-500)",
                        }}
                      >
                        {program.badge}
                      </span>
                    ) : null}
                  </div>

                  <h2
                    className="text-2xl font-semibold"
                    style={{ color: "var(--text-primary)" }}
                  >
                    {program.name}
                  </h2>
                  <p
                    className="mt-3 text-sm leading-7"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    {program.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {program.levels.map((level) => (
                    <span
                      key={level}
                      className="rounded-full px-3 py-1 text-xs uppercase tracking-[0.24em]"
                      style={{
                        backgroundColor: "var(--glass-bg-hover)",
                        color: "var(--text-secondary)",
                      }}
                    >
                      {level}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                <div>
                  <p
                    className="text-xs uppercase tracking-[0.3em]"
                    style={{ color: "var(--text-muted)" }}
                  >
                    Top Outcomes
                  </p>
                  <ul
                    className="mt-3 space-y-2 text-sm"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    {program.outcomes.slice(0, 3).map((outcome) => (
                      <li key={outcome}>• {outcome}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p
                    className="text-xs uppercase tracking-[0.3em]"
                    style={{ color: "var(--text-muted)" }}
                  >
                    Core Modules
                  </p>
                  <ul
                    className="mt-3 space-y-2 text-sm"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    {program.modules.slice(0, 3).map((module) => (
                      <li key={module}>• {module}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p
                    className="text-xs uppercase tracking-[0.3em]"
                    style={{ color: "var(--text-muted)" }}
                  >
                    Media
                  </p>
                  <p
                    className="mt-3 text-sm"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    {program.images.length} images · {program.videos.length}{" "}
                    videos
                  </p>
                </div>
              </div>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <Link
                  href={`/academics/${category.slug}/${program.slug}`}
                  className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition"
                  style={{
                    background: "var(--btn-primary-bg)",
                    color: "var(--btn-primary-text)",
                  }}
                >
                  View Program Details
                  <IconArrowRight size={16} />
                </Link>
                <p
                  className="text-xs uppercase tracking-[0.28em]"
                  style={{ color: "var(--text-muted)" }}
                >
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
