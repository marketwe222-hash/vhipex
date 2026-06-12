"use client";

import { motion } from "framer-motion";
import {
  IconNews,
  IconCalendar,
  IconTrophy,
  IconSchool,
  IconLayoutGrid,
} from "@tabler/icons-react";
import type { NewsCategory, NewsFilterProps } from "@/types/news";

const CATEGORIES = [
  {
    id: "all" as NewsCategory,
    label: "All News",
    icon: <IconLayoutGrid size={18} stroke={2} />,
  },
  {
    id: "events" as NewsCategory,
    label: "Events",
    icon: <IconCalendar size={18} stroke={2} />,
  },
  {
    id: "announcements" as NewsCategory,
    label: "Announcements",
    icon: <IconNews size={18} stroke={2} />,
  },
  {
    id: "achievements" as NewsCategory,
    label: "Achievements",
    icon: <IconTrophy size={18} stroke={2} />,
  },
  {
    id: "academic" as NewsCategory,
    label: "Academic",
    icon: <IconSchool size={18} stroke={2} />,
  },
];

export default function NewsFilter({
  activeCategory,
  onCategoryChange,
}: NewsFilterProps) {
  return (
    <section
      className="sticky top-20 z-30 py-6"
      style={{ background: "var(--bg-base)" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="glass-nav rounded-2xl p-2"
        >
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((category) => {
              const isActive = activeCategory === category.id;
              return (
                <button
                  key={category.id}
                  onClick={() => onCategoryChange(category.id)}
                  className={`
                    relative px-5 py-2.5 rounded-xl font-semibold text-sm
                    transition-all duration-300 flex items-center gap-2
                    ${isActive ? "glass-strong" : "glass-sm hover:glass"}
                  `}
                  style={{
                    color: isActive
                      ? "var(--accent-primary)"
                      : "var(--text-secondary)",
                    border: `1.5px solid ${
                      isActive ? "var(--accent-primary)" : "transparent"
                    }`,
                  }}
                >
                  {category.icon}
                  <span>{category.label}</span>

                  {/* Active indicator */}
                  {isActive && (
                    <motion.div
                      layoutId="activeCategory"
                      className="absolute inset-0 rounded-xl -z-10"
                      style={{
                        background: "var(--badge-blue-bg)",
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 30,
                      }}
                    />
                  )}
                </button>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
