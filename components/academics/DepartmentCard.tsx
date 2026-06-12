"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import { IconArrowRight, IconCertificate } from "@tabler/icons-react";

interface DepartmentCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  color: string;
  programs: string[];
  careers: string[];
  index: number;
}

export default function DepartmentCard({
  title,
  description,
  icon,
  color,
  programs,
  careers,
  index,
}: DepartmentCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * 0.08, duration: 0.6 }}
      whileHover={{ y: -4 }}
      className="glass p-6 rounded-xl h-full flex flex-col group transition-all duration-300"
      style={{
        borderTop: `3px solid ${color}`,
      }}
    >
      {/* Icon */}
      <div
        className="inline-flex items-center justify-center w-14 h-14 rounded-xl mb-4"
        style={{
          background: `${color}15`,
          color: color,
        }}
      >
        {icon}
      </div>

      {/* Title */}
      <h3
        className="text-2xl font-bold mb-3"
        style={{
          color: "var(--text-primary)",
          fontFamily: "Georgia, 'Times New Roman', serif",
        }}
      >
        {title}
      </h3>

      {/* Description */}
      <p
        className="text-sm leading-relaxed mb-4"
        style={{ color: "var(--text-secondary)" }}
      >
        {description}
      </p>

      {/* Programs */}
      <div className="mb-4">
        <p
          className="text-xs uppercase tracking-wider font-semibold mb-2 flex items-center gap-1.5"
          style={{ color: "var(--text-muted)" }}
        >
          <IconCertificate size={14} stroke={2} />
          Available Programs
        </p>
        <div className="flex flex-wrap gap-1.5">
          {programs.map((program) => (
            <span
              key={program}
              className="px-2.5 py-1 rounded-md text-xs font-medium"
              style={{
                background: `${color}12`,
                color: color,
              }}
            >
              {program}
            </span>
          ))}
        </div>
      </div>

      {/* Career Paths */}
      <div
        className="mt-auto pt-4 border-t"
        style={{ borderColor: "var(--divider)" }}
      >
        <p
          className="text-xs uppercase tracking-wider font-semibold mb-2"
          style={{ color: "var(--text-muted)" }}
        >
          Career Paths
        </p>
        <ul className="space-y-1.5">
          {careers.slice(0, 3).map((career) => (
            <li
              key={career}
              className="text-xs flex items-start gap-2"
              style={{ color: "var(--text-secondary)" }}
            >
              <span
                className="inline-block w-1 h-1 rounded-full mt-1.5 flex-shrink-0"
                style={{ background: color }}
              />
              {career}
            </li>
          ))}
        </ul>
      </div>

      {/* Hover Action */}
      <div
        className="mt-4 pt-4 border-t"
        style={{ borderColor: "var(--divider)" }}
      >
        <button
          className="text-sm font-semibold flex items-center gap-1.5 group-hover:gap-2.5 transition-all duration-300"
          style={{ color: color }}
        >
          Learn More
          <IconArrowRight size={16} stroke={2.5} />
        </button>
      </div>
    </motion.div>
  );
}
