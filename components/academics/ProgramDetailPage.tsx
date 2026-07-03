"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import {
  IconArrowLeft,
  IconArrowRight,
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
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = program.images;
  const hasMultipleImages = images.length > 1;

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  // Auto-scroll carousel every 5 seconds
  useEffect(() => {
    if (!hasMultipleImages) return;

    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length, hasMultipleImages]);

  return (
    <main className="min-h-screen">
      <section
        className="relative h-[70vh] flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `url(${images[currentImageIndex]?.url || ""})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Dark overlay for text readability */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.5) 100%)",
          }}
        />

        {/* Navigation Arrows */}
        {hasMultipleImages && (
          <>
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full p-3 transition z-10 [background:rgba(255,255,255,0.2)] hover:[background:rgba(255,255,255,0.4)]"
              aria-label="Previous image"
            >
              <IconArrowLeft size={24} style={{ color: "white" }} />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full p-3 transition z-10 [background:rgba(255,255,255,0.2)] hover:[background:rgba(255,255,255,0.4)]"
              aria-label="Next image"
            >
              <IconArrowRight size={24} style={{ color: "white" }} />
            </button>
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className="h-2 rounded-full transition"
                  style={{
                    width: currentImageIndex === index ? "24px" : "8px",
                    background:
                      currentImageIndex === index
                        ? "rgba(255,255,255,0.9)"
                        : "rgba(255,255,255,0.4)",
                  }}
                  aria-label={`Go to image ${index + 1}`}
                />
              ))}
            </div>
          </>
        )}

        {/* Content */}
        <div className="relative z-5 mx-auto max-w-4xl px-6 py-20 text-center">
          <Link
            href={`/academics/${categorySlug}`}
            className="inline-flex items-center gap-2 text-sm font-semibold transition mb-3  [color:rgba(255,255,255,0.8)] hover:[color:white]"
          >
            <IconArrowLeft size={16} />
            Back to {categoryName}
          </Link>

          <p
            className="text-sm uppercase tracking-[0.3em]"
            style={{ color: "rgba(255,255,255,0.7)" }}
          >
            {categoryName}
          </p>
          <h1
            className="mt-6 text-5xl sm:text-6xl font-bold tracking-tight"
            style={{ color: "white" }}
          >
            {program.name}
          </h1>
          <p
            className="mt-6 text-lg sm:text-xl leading-relaxed"
            style={{ color: "rgba(255,255,255,0.9)" }}
          >
            {program.longDescription}
          </p>

          <div className="mt-8 flex flex-wrap gap-3 justify-center">
            <span className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold rounded-lg [background:rgba(255,255,255,0.15)] [color:white]">
              <IconClock size={16} />
              {program.duration}
            </span>
            <span className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold rounded-lg [background:rgba(255,255,255,0.15)] [color:white]">
              <IconCertificate size={16} />
              {program.levels.join(" / ")}
            </span>
            {program.badge ? (
              <span className="inline-flex items-center px-4 py-2 text-sm font-semibold rounded-lg [background:rgba(220,20,60,0.8)] [color:white] uppercase tracking-widest">
                {program.badge}
              </span>
            ) : null}
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
              View supporting video topics that illustrate key learning areas.
            </p>
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
