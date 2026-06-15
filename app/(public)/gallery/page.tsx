"use client";
import { useState, useMemo } from "react";
import { GalleryHero, GalleryGrid } from "@/components/gallery";
import { GALLERY_ITEMS } from "@/data/Gallerydata";
import type { GalleryCategory } from "@/components/gallery";

export default function GalleryPage() {
  const [category, setCategory] = useState<GalleryCategory>("all");
  const [search, setSearch] = useState("");

  // All filtering lives here — GalleryGrid just renders what it receives
  const filtered = useMemo(
    () =>
      GALLERY_ITEMS.filter((item) => {
        const matchesCat = category === "all" || item.category === category;
        const matchesSearch =
          !search ||
          item.title.toLowerCase().includes(search.toLowerCase()) ||
          item.description.toLowerCase().includes(search.toLowerCase());
        return matchesCat && matchesSearch;
      }),
    [category, search],
  );

  return (
    <main>
      <GalleryHero
        active={category}
        onCategoryChange={setCategory}
        search={search}
        onSearchChange={setSearch}
        totalVisible={filtered.length}
      />
      <GalleryGrid items={filtered} />
    </main>
  );
}
