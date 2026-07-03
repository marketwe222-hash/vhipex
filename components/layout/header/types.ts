import type { ReactNode } from "react";

export interface NavLink {
  label: string;
  href: string;
  icon: ReactNode;
  dropdown?: DropdownSection[];
}

export interface DropdownItem {
  label: string;
  href: string;
  icon: ReactNode;
  description: string;
  duration?: string;
  badge?: "popular" | "new" | "demand" | "prestige";
}

export interface DropdownSection {
  heading: string;
  sectionBadge?: string;
  color: "blue" | "red" | "success" | "warning";
  viewAllHref: string;
  viewAllLabel: string;
  items: DropdownItem[];
}
