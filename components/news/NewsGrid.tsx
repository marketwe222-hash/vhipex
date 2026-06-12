"use client";

import { useState } from "react";
import NewsCard from "./NewsCard";
import type { NewsArticle } from "@/types/news";
import { motion } from "framer-motion";

interface NewsGridProps {
  articles: NewsArticle[];
}

export default function NewsGrid({ articles }: NewsGridProps) {
  const [displayCount, setDisplayCount] = useState(9);

  const visibleArticles = articles.slice(0, displayCount);
  const hasMore = displayCount < articles.length;

  return (
    <section className="relative py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        {/* Results count */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-sm font-medium mb-6"
          style={{ color: "var(--text-muted)" }}
        >
          Showing {visibleArticles.length} of {articles.length} articles
        </motion.p>

        {/* Grid */}
        {visibleArticles.length > 0 ? (
          <>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {visibleArticles.map((article, index) => (
                <NewsCard key={article.id} article={article} index={index} />
              ))}
            </div>

            {/* Load More Button */}
            {hasMore && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-center"
              >
                <button
                  onClick={() => setDisplayCount((prev) => prev + 9)}
                  className="btn-secondary px-8 py-3 text-sm font-semibold rounded-xl inline-flex items-center gap-2 hover:scale-105 transition-transform duration-200"
                >
                  Load More Articles
                  <span
                    className="inline-block px-2 py-0.5 rounded-md text-xs font-bold"
                    style={{
                      background: "var(--badge-blue-bg)",
                      color: "var(--accent-primary)",
                    }}
                  >
                    +{Math.min(9, articles.length - displayCount)}
                  </span>
                </button>
              </motion.div>
            )}
          </>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass p-12 rounded-2xl text-center"
          >
            <p
              className="text-lg font-medium"
              style={{ color: "var(--text-muted)" }}
            >
              No articles found in this category.
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
}
