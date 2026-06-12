"use client";

import { useState, useMemo } from "react";
import { NewsHero, NewsFilter, NewsGrid } from "@/components/news";
import type { NewsCategory, NewsArticle } from "@/types/news";
import { MOCK_ARTICLES } from "@/data/articles";

export default function NewsPage() {
  const [activeCategory, setActiveCategory] = useState<NewsCategory>("all");

  const filteredArticles = useMemo(() => {
    if (activeCategory === "all") {
      return MOCK_ARTICLES;
    }
    return MOCK_ARTICLES.filter(
      (article) => article.category === activeCategory,
    );
  }, [activeCategory]);

  return (
    <main className="min-h-screen">
      <NewsHero />
      <NewsFilter
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
      />
      <NewsGrid articles={filteredArticles} />
    </main>
  );
}
