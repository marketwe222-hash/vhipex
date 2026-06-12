"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import {
  IconCertificate,
  IconSchool,
  IconBriefcase,
  IconTrophy,
  IconCheck,
} from "@tabler/icons-react";

type ProgramLevel = "nd" | "hnd" | "bachelor" | "master";

const PROGRAMS = [
  {
    id: "nd" as ProgramLevel,
    title: "National Diploma (ND)",
    icon: <IconCertificate size={24} stroke={1.8} />,
    duration: "2 Years",
    color: "var(--blue-light)",
    requirements: [
      "GCE Ordinary Level (5 papers including English)",
      "BEPC or equivalent",
      "Minimum age: 16 years",
      "Two passport photos",
      "Birth certificate (certified copy)",
      "Medical certificate",
    ],
  },
  {
    id: "hnd" as ProgramLevel,
    title: "Higher National Diploma (HND)",
    icon: <IconSchool size={24} stroke={1.8} />,
    duration: "2 Years",
    color: "var(--accent-primary)",
    requirements: [
      "National Diploma (ND) or equivalent",
      "GCE Advanced Level (2 papers)",
      "Baccalauréat or equivalent",
      "Minimum cumulative GPA: 2.5",
      "Two passport photos",
      "Transcript from previous institution",
      "Letter of recommendation (optional)",
    ],
  },
  {
    id: "bachelor" as ProgramLevel,
    title: "Bachelor's Degree",
    icon: <IconBriefcase size={24} stroke={1.8} />,
    duration: "3-4 Years",
    color: "var(--red-light)",
    requirements: [
      "GCE Advanced Level (3 papers)",
      "Baccalauréat or equivalent",
      "HND with minimum GPA: 2.75",
      "Two passport photos",
      "Official transcripts",
      "Statement of purpose (500 words)",
      "Letter of recommendation",
    ],
  },
  {
    id: "master" as ProgramLevel,
    title: "Master's Degree",
    icon: <IconTrophy size={24} stroke={1.8} />,
    duration: "1-2 Years",
    color: "var(--accent-primary)",
    requirements: [
      "Bachelor's degree in related field",
      "Minimum cumulative GPA: 3.0",
      "Professional work experience (preferred)",
      "Research proposal or thesis topic",
      "Two letters of recommendation",
      "Statement of purpose (1000 words)",
      "CV/Resume",
      "Interview (may be required)",
    ],
  },
];

const GENERAL_REQUIREMENTS = [
  "Completed application form",
  "Non-refundable application fee",
  "Valid ID card or passport",
  "Proof of previous academic qualifications",
];

export default function RequirementsList() {
  const [selectedProgram, setSelectedProgram] = useState<ProgramLevel>("nd");

  const activeProgram = PROGRAMS.find((p) => p.id === selectedProgram)!;

  return (
    <section id="requirements" className="relative py-20 overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)",
          backgroundSize: "48px 48px",
          color: "var(--text-primary)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <h2
            className="text-3xl md:text-4xl font-bold mb-4"
            style={{
              fontFamily: "Georgia, 'Times New Roman', serif",
              color: "var(--text-primary)",
            }}
          >
            Admission Requirements
          </h2>
          <p
            className="text-lg max-w-2xl mx-auto"
            style={{ color: "var(--text-secondary)" }}
          >
            Select your program level to view specific entry requirements
          </p>
        </motion.div>

        {/* Program Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {PROGRAMS.map((program) => (
            <button
              key={program.id}
              onClick={() => setSelectedProgram(program.id)}
              className={`glass-sm px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-300 ${
                selectedProgram === program.id ? "glass-strong" : ""
              }`}
              style={{
                border: `2px solid ${
                  selectedProgram === program.id
                    ? program.color
                    : "var(--glass-border)"
                }`,
                color:
                  selectedProgram === program.id
                    ? program.color
                    : "var(--text-secondary)",
              }}
            >
              <span className="inline-flex items-center gap-2">
                {program.icon}
                {program.title}
              </span>
            </button>
          ))}
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Program Info */}
          <motion.div
            key={activeProgram.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-1"
          >
            <div className="glass p-6 rounded-xl sticky top-24">
              <div
                className="inline-flex items-center justify-center w-16 h-16 rounded-xl mb-4"
                style={{
                  background: "var(--badge-blue-bg)",
                  color: activeProgram.color,
                }}
              >
                {activeProgram.icon}
              </div>
              <h3
                className="text-2xl font-bold mb-2"
                style={{
                  color: "var(--text-primary)",
                  fontFamily: "Georgia, 'Times New Roman', serif",
                }}
              >
                {activeProgram.title}
              </h3>
              <div className="flex items-center gap-2 mb-6">
                <span
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium"
                  style={{
                    background: "var(--badge-blue-bg)",
                    color: activeProgram.color,
                  }}
                >
                  Duration: {activeProgram.duration}
                </span>
              </div>
              <p
                className="text-sm leading-relaxed"
                style={{ color: "var(--text-secondary)" }}
              >
                Available in: Agriculture, IT, Engineering, Health, Business,
                Management, Education, and Banking.
              </p>
            </div>
          </motion.div>

          {/* Right Column - Requirements */}
          <div className="lg:col-span-2 space-y-6">
            {/* Specific Requirements */}
            <motion.div
              key={`${activeProgram.id}-specific`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="glass p-6 rounded-xl"
            >
              <h4
                className="text-xl font-bold mb-4 flex items-center gap-2"
                style={{ color: "var(--text-primary)" }}
              >
                <IconCheck size={20} style={{ color: activeProgram.color }} />
                Program-Specific Requirements
              </h4>
              <ul className="space-y-3">
                {activeProgram.requirements.map((req, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 + index * 0.05, duration: 0.4 }}
                    className="flex items-start gap-3"
                  >
                    <span
                      className="inline-flex items-center justify-center w-6 h-6 rounded-full flex-shrink-0 mt-0.5"
                      style={{
                        background: "var(--badge-blue-bg)",
                        color: activeProgram.color,
                      }}
                    >
                      <IconCheck size={14} stroke={2.5} />
                    </span>
                    <span
                      className="text-sm leading-relaxed"
                      style={{ color: "var(--text-secondary)" }}
                    >
                      {req}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* General Requirements */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="glass p-6 rounded-xl"
            >
              <h4
                className="text-xl font-bold mb-4 flex items-center gap-2"
                style={{ color: "var(--text-primary)" }}
              >
                <IconCheck
                  size={20}
                  style={{ color: "var(--accent-primary)" }}
                />
                General Requirements (All Programs)
              </h4>
              <ul className="space-y-3">
                {GENERAL_REQUIREMENTS.map((req, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span
                      className="inline-flex items-center justify-center w-6 h-6 rounded-full flex-shrink-0 mt-0.5"
                      style={{
                        background: "var(--badge-blue-bg)",
                        color: "var(--accent-primary)",
                      }}
                    >
                      <IconCheck size={14} stroke={2.5} />
                    </span>
                    <span
                      className="text-sm leading-relaxed"
                      style={{ color: "var(--text-secondary)" }}
                    >
                      {req}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Important Note */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="glass p-5 rounded-xl"
              style={{
                borderLeft: "4px solid var(--accent-secondary)",
              }}
            >
              <p
                className="text-sm font-semibold mb-2"
                style={{ color: "var(--text-primary)" }}
              >
                📌 Important Note
              </p>
              <p
                className="text-sm leading-relaxed"
                style={{ color: "var(--text-secondary)" }}
              >
                All documents must be submitted in English or French. Foreign
                qualifications require equivalence certification from the
                Ministry of Higher Education. Contact our admissions office for
                guidance on document preparation.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
