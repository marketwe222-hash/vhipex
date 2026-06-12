import { notFound } from "next/navigation";
import Link from "next/link";
import {
  IconArrowLeft,
  IconCalendar,
  IconClock,
  IconUser,
  IconShare,
  IconBookmark,
} from "@tabler/icons-react";
import { MOCK_ARTICLES } from "@/data/articles";

interface NewsDetailPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: NewsDetailPageProps) {
  const { slug } = await params;
  const article = MOCK_ARTICLES.find((a) => a.slug === slug);

  if (!article) {
    return { title: "Article Not Found" };
  }

  return {
    title: `${article.title} | VIHIPEX News`,
    description: article.excerpt,
  };
}

export default async function NewsDetailPage({ params }: NewsDetailPageProps) {
  const { slug } = await params;
  const article = MOCK_ARTICLES.find((a) => a.slug === slug);

  if (!article) {
    notFound();
  }

  const CATEGORY_COLORS: Record<string, string> = {
    events: "#10b981",
    announcements: "var(--blue-light)",
    achievements: "var(--red-light)",
    academic: "#8b5cf6",
  };

  const categoryColor =
    CATEGORY_COLORS[article.category] || "var(--accent-primary)";

  return (
    <main className="min-h-screen pt-24 pb-20">
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-10">
        {/* Back Button */}
        <Link
          href="/news"
          className="inline-flex items-center gap-2 text-sm font-medium mb-8 hover:gap-3 transition-all duration-300"
          style={{ color: "var(--accent-primary)" }}
        >
          <IconArrowLeft size={18} stroke={2} />
          Back to News
        </Link>

        {/* Category Badge */}
        <div className="mb-4">
          <span
            className="inline-block px-4 py-2 rounded-lg text-xs font-semibold uppercase tracking-wider"
            style={{
              background: `${categoryColor}20`,
              color: categoryColor,
              border: `1px solid ${categoryColor}40`,
            }}
          >
            {article.category}
          </span>
        </div>

        {/* Title */}
        <h1
          className="text-[clamp(2rem,5vw,3.5rem)] font-bold leading-tight mb-6"
          style={{
            fontFamily: "Georgia, 'Times New Roman', serif",
            color: "var(--text-primary)",
            letterSpacing: "-0.02em",
          }}
        >
          {article.title}
        </h1>

        {/* Meta Info */}
        <div
          className="flex flex-wrap items-center gap-4 mb-8 pb-8 border-b"
          style={{ borderColor: "var(--divider)" }}
        >
          <div className="flex items-center gap-3">
            <div
              className="w-12 h-12 rounded-full flex items-center justify-center text-sm font-bold"
              style={{
                background: "var(--badge-blue-bg)",
                color: "var(--accent-primary)",
              }}
            >
              {article.author
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </div>
            <div>
              <p
                className="text-sm font-semibold leading-none mb-1"
                style={{ color: "var(--text-primary)" }}
              >
                {article.author}
              </p>
              <p
                className="text-xs leading-none"
                style={{ color: "var(--text-muted)" }}
              >
                {article.authorRole}
              </p>
            </div>
          </div>
          <div className="h-8 w-px" style={{ background: "var(--divider)" }} />
          <div
            className="flex items-center gap-4 text-sm"
            style={{ color: "var(--text-muted)" }}
          >
            <span className="flex items-center gap-1.5">
              <IconCalendar size={16} stroke={2} />
              {new Date(article.publishedDate).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </span>
            <span className="flex items-center gap-1.5">
              <IconClock size={16} stroke={2} />
              {article.readTime}
            </span>
          </div>
        </div>

        {/* Featured Image */}
        {article.image && (
          <div className="glass rounded-2xl overflow-hidden mb-10">
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-auto"
            />
          </div>
        )}

        {/* Content */}
        <div
          className="prose prose-lg max-w-none mb-12"
          style={{
            color: "var(--text-secondary)",
          }}
          dangerouslySetInnerHTML={{ __html: article.content }}
        />

        {/* Tags */}
        {article.tags && article.tags.length > 0 && (
          <div
            className="flex flex-wrap items-center gap-2 mb-10 pb-10 border-b"
            style={{ borderColor: "var(--divider)" }}
          >
            <span
              className="text-sm font-medium"
              style={{ color: "var(--text-muted)" }}
            >
              Tags:
            </span>
            {article.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1.5 rounded-lg text-xs font-medium"
                style={{
                  background: "var(--badge-neutral-bg)",
                  color: "var(--text-secondary)",
                }}
              >
                #{tag}
              </span>
            ))}
          </div>
        )}

        {/* Share Buttons */}
        <div className="glass p-6 rounded-xl">
          <p
            className="text-sm font-semibold mb-4"
            style={{ color: "var(--text-primary)" }}
          >
            Share this article
          </p>
          <div className="flex gap-3">
            <button
              className="glass-sm px-4 py-2 rounded-lg text-sm font-medium hover:scale-105 transition-transform duration-200"
              style={{ color: "var(--text-primary)" }}
            >
              <IconShare size={16} className="inline mr-2" />
              Share
            </button>
            <button
              className="glass-sm px-4 py-2 rounded-lg text-sm font-medium hover:scale-105 transition-transform duration-200"
              style={{ color: "var(--text-primary)" }}
            >
              <IconBookmark size={16} className="inline mr-2" />
              Bookmark
            </button>
          </div>
        </div>
      </article>
    </main>
  );
}
