"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  IconCalendar,
  IconClock,
  IconArrowRight,
  IconUser,
} from "@tabler/icons-react";
import type { NewsArticle } from "@/types/news";

interface NewsCardProps {
  article: NewsArticle;
  index: number;
}

const CATEGORY_COLORS: Record<string, string> = {
  events: "#10b981",
  announcements: "var(--blue-light)",
  achievements: "var(--red-light)",
  academic: "#8b5cf6",
};

export default function NewsCard({ article, index }: NewsCardProps) {
  const categoryColor =
    CATEGORY_COLORS[article.category] || "var(--accent-primary)";

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * 0.08, duration: 0.6 }}
      whileHover={{ y: -6 }}
      className="glass rounded-xl overflow-hidden h-full flex flex-col group transition-all duration-300"
      style={{
        borderTop: article.featured ? `3px solid ${categoryColor}` : "none",
      }}
    >
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <div
          className="w-full h-full transition-transform duration-500 group-hover:scale-110"
          style={{
            background: article.image
              ? `url(${article.image}) center/cover`
              : `linear-gradient(135deg, ${categoryColor}40 0%, ${categoryColor}20 100%)`,
          }}
        >
          {!article.image && (
            <div className="w-full h-full flex items-center justify-center">
              <span
                className="text-6xl font-bold opacity-10"
                style={{
                  fontFamily: "Georgia, 'Times New Roman', serif",
                  color: categoryColor,
                }}
              >
                VIHIPEX
              </span>
            </div>
          )}
        </div>

        {/* Category Badge */}
        <div className="absolute top-3 left-3">
          <span
            className="inline-block px-3 py-1.5 rounded-lg text-xs font-semibold uppercase tracking-wider backdrop-blur-md"
            style={{
              background: `${categoryColor}25`,
              color: categoryColor,
              border: `1px solid ${categoryColor}40`,
            }}
          >
            {article.category}
          </span>
        </div>

        {/* Featured Badge */}
        {article.featured && (
          <div className="absolute top-3 right-3">
            <span
              className="inline-block px-3 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider backdrop-blur-md"
              style={{
                background: "var(--badge-red-bg)",
                color: "var(--red-light)",
                border: "1px solid var(--red-light)40",
              }}
            >
              Featured
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6 flex-1 flex flex-col">
        {/* Meta Info */}
        <div
          className="flex items-center gap-3 mb-3 text-xs"
          style={{ color: "var(--text-muted)" }}
        >
          <span className="flex items-center gap-1.5">
            <IconCalendar size={14} stroke={2} />
            {new Date(article.publishedDate).toLocaleDateString("en-US", {
              month: "short",
              day: "numeric",
              year: "numeric",
            })}
          </span>
          <span>•</span>
          <span className="flex items-center gap-1.5">
            <IconClock size={14} stroke={2} />
            {article.readTime}
          </span>
        </div>

        {/* Title */}
        <h3
          className="text-xl font-bold mb-3 line-clamp-2 leading-snug"
          style={{
            color: "var(--text-primary)",
            fontFamily: "Georgia, 'Times New Roman', serif",
          }}
        >
          {article.title}
        </h3>

        {/* Excerpt */}
        <p
          className="text-sm leading-relaxed mb-4 line-clamp-3 flex-1"
          style={{ color: "var(--text-secondary)" }}
        >
          {article.excerpt}
        </p>

        {/* Author */}
        <div
          className="flex items-center gap-2 mb-4 pb-4 border-b"
          style={{ borderColor: "var(--divider)" }}
        >
          <div
            className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold"
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
              className="text-sm font-semibold leading-none mb-0.5"
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

        {/* Read More Link */}
        <Link
          href={`/news/${article.slug}`}
          className="inline-flex items-center gap-2 text-sm font-semibold group-hover:gap-3 transition-all duration-300"
          style={{ color: categoryColor }}
        >
          Read Full Story
          <IconArrowRight size={16} stroke={2.5} />
        </Link>
      </div>
    </motion.article>
  );
}
