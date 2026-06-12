export type NewsCategory =
  | "all"
  | "events"
  | "announcements"
  | "achievements"
  | "academic";

export interface NewsArticle {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: Exclude<NewsCategory, "all">;
  author: string;
  authorRole: string;
  publishedDate: string;
  readTime: string;
  image?: string;
  featured?: boolean;
  tags?: string[];
}

export interface NewsFilterProps {
  activeCategory: NewsCategory;
  onCategoryChange: (category: NewsCategory) => void;
}
