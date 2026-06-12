"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import { useTheme } from "@/context/ThemeContext";
import { motion, AnimatePresence, Variants } from "framer-motion";
import {
  IconSun,
  IconMoon,
  IconUserCircle,
  IconMenu2,
  IconX,
  IconHome,
  IconInfoCircle,
  IconBook,
  IconClipboardList,
  IconNews,
  IconPhoto,
  IconMail,
  IconChevronDown,
  IconArrowRight,
  IconBolt,
  IconBuildingFactory2,
  IconDeviceDesktop,
  IconBriefcase,
  IconSchool,
  IconAward,
  IconCalculator,
  IconFlame,
  IconStarFilled,
  IconClock,
  IconUsers,
  IconFileDescription,
  IconMapPin,
  IconPhone,
  IconPlus,
  IconChevronUp,
  IconCertificate,
  IconAtom,
  IconLeaf,
  IconHeartbeat,
  IconBuildingSkyscraper,
  IconScissors,
  IconTool,
  IconSpeakerphone,
  IconGavel,
  IconCamera,
  IconSatellite,
  IconLanguage,
} from "@tabler/icons-react";

// ─── Types ────────────────────────────────────────────────────────────────────

interface NavLink {
  label: string;
  href: string;
  icon: React.ReactNode;
  dropdown?: DropdownSection[];
}

interface DropdownItem {
  label: string;
  href: string;
  icon: React.ReactNode;
  description: string;
  duration?: string;
  badge?: "popular" | "new" | "demand" | "prestige";
}

interface DropdownSection {
  heading: string;
  sectionBadge?: string;
  color: "blue" | "red" | "success" | "warning";
  viewAllHref: string;
  viewAllLabel: string;
  items: DropdownItem[];
}

// ─── Color map ────────────────────────────────────────────────────────────────

const COLOR_MAP = {
  blue: {
    badgeBg: "var(--badge-blue-bg)",
    badgeText: "var(--badge-blue-text)",
    infoBg: "var(--info-bg)",
    infoText: "var(--info-text)",
    infoBorder: "var(--info-border)",
  },
  red: {
    badgeBg: "var(--badge-red-bg)",
    badgeText: "var(--badge-red-text)",
    infoBg: "var(--error-bg)",
    infoText: "var(--error-text)",
    infoBorder: "var(--error-border)",
  },
  success: {
    badgeBg: "var(--success-bg)",
    badgeText: "var(--success-text)",
    infoBg: "var(--success-bg)",
    infoText: "var(--success-text)",
    infoBorder: "var(--success-border)",
  },
  warning: {
    badgeBg: "var(--warning-bg)",
    badgeText: "var(--warning-text)",
    infoBg: "var(--warning-bg)",
    infoText: "var(--warning-text)",
    infoBorder: "var(--warning-border)",
  },
} as const;

const ITEM_BADGE_MAP = {
  popular: {
    bg: "var(--badge-red-bg)",
    color: "var(--badge-red-text)",
    label: "Popular",
  },
  new: { bg: "var(--success-bg)", color: "var(--success-text)", label: "New" },
  demand: {
    bg: "var(--warning-bg)",
    color: "var(--warning-text)",
    label: "In Demand",
  },
  prestige: {
    bg: "var(--badge-blue-bg)",
    color: "var(--badge-blue-text)",
    label: "Prestigious",
  },
} as const;

// ─── Languages ────────────────────────────────────────────────────────────────

const LANGUAGES = [
  { code: "en", label: "EN", full: "English" },
  { code: "fr", label: "FR", full: "Français" },
];

// ─── Programs Data ────────────────────────────────────────────────────────────

const PROGRAMS_DROPDOWN: DropdownSection[] = [
  {
    heading: "Commerce & Finance",
    sectionBadge: "ND / BTS / Degree",
    color: "warning",
    viewAllHref: "/academics/commerce",
    viewAllLabel: "All Commerce Programs",
    items: [
      {
        label: "Accounting & Finance",
        href: "/academics/commerce/accounting",
        icon: <IconCalculator size={14} stroke={1.8} />,
        description: "Financial accounting, bookkeeping & auditing",
        badge: "demand",
      },
      {
        label: "Banking & Finance",
        href: "/academics/commerce/banking",
        icon: <IconBriefcase size={14} stroke={1.8} />,
        description: "Banking operations, credit & financial services",
      },
      {
        label: "Marketing & Sales",
        href: "/academics/commerce/marketing",
        icon: <IconSpeakerphone size={14} stroke={1.8} />,
        description: "Marketing, commerce & sales strategy",
        badge: "popular",
      },
      {
        label: "International Trade",
        href: "/academics/commerce/international",
        icon: <IconBuildingSkyscraper size={14} stroke={1.8} />,
        description: "International commerce & trade operations",
      },
      {
        label: "Project Management",
        href: "/academics/commerce/projects",
        icon: <IconClipboardList size={14} stroke={1.8} />,
        description: "Project planning, logistics & transport management",
      },
      {
        label: "Microfinance",
        href: "/academics/commerce/microfinance",
        icon: <IconCalculator size={14} stroke={1.8} />,
        description: "Microfinance, local taxation & NGO management",
        badge: "new",
      },
    ],
  },
  {
    heading: "Engineering & IT",
    sectionBadge: "ND / BTS / HND / MASTER",
    color: "blue",
    viewAllHref: "/academics/engineering",
    viewAllLabel: "All Engineering Programs",
    items: [
      {
        label: "Software Engineering",
        href: "/academics/engineering/software",
        icon: <IconDeviceDesktop size={14} stroke={1.8} />,
        description: "Software development, systems & applications",
        badge: "popular",
      },
      {
        label: "Computer Hardware",
        href: "/academics/engineering/hardware",
        icon: <IconTool size={14} stroke={1.8} />,
        description: "Hardware engineering & computer maintenance",
      },
      {
        label: "Telecommunications",
        href: "/academics/engineering/telecom",
        icon: <IconBolt size={14} stroke={1.8} />,
        description: "Telecom systems, networks & security",
        badge: "demand",
      },
      {
        label: "Civil & Construction Tech",
        href: "/academics/engineering/civil",
        icon: <IconBuildingFactory2 size={14} stroke={1.8} />,
        description: "Civil engineering, topography & urban planning",
      },
      {
        label: "Electrical Systems",
        href: "/academics/engineering/electrical",
        icon: <IconBolt size={14} stroke={1.8} />,
        description: "Electrical power systems & industrial maintenance",
      },
      {
        label: "Graphics & IT Design",
        href: "/academics/engineering/graphics",
        icon: <IconDeviceDesktop size={14} stroke={1.8} />,
        description: "IT graphics, web design & multimedia",
        badge: "new",
      },
    ],
  },
  {
    heading: "Health Sciences",
    sectionBadge: "ND / BTS / DEGREE",
    color: "red",
    viewAllHref: "/academics/health",
    viewAllLabel: "All Health Programs",
    items: [
      {
        label: "Nursing Sciences",
        href: "/academics/health/nursing",
        icon: <IconHeartbeat size={14} stroke={1.8} />,
        description: "Nursing care, patient management & clinical practice",
        badge: "popular",
      },
      {
        label: "Laboratory Technology",
        href: "/academics/health/laboratory",
        icon: <IconAtom size={14} stroke={1.8} />,
        description: "Medical laboratory techniques & bioanalysis",
      },
      {
        label: "Midwifery",
        href: "/academics/health/midwifery",
        icon: <IconHeartbeat size={14} stroke={1.8} />,
        description: "Maternal care, obstetrics & gynecological nursing",
      },
      {
        label: "Pharmacy Technology",
        href: "/academics/health/pharmacy",
        icon: <IconAtom size={14} stroke={1.8} />,
        description: "Pharmaceutical management & dispensing",
        badge: "demand",
      },
      {
        label: "Physiotherapy",
        href: "/academics/health/physio",
        icon: <IconHeartbeat size={14} stroke={1.8} />,
        description: "Physical rehabilitation & therapeutic care",
      },
      {
        label: "Nutrition & Dietetics",
        href: "/academics/health/nutrition",
        icon: <IconLeaf size={14} stroke={1.8} />,
        description: "Clinical nutrition, dietetics & food science",
        badge: "new",
      },
      {
        label: "Dental Therapy",
        href: "/academics/health/dental",
        icon: <IconHeartbeat size={14} stroke={1.8} />,
        description: "Oral health care & dental technology",
      },
      {
        label: "Clinical Optometry",
        href: "/academics/health/optometry",
        icon: <IconCamera size={14} stroke={1.8} />,
        description: "Eye care, vision science & clinical optometry",
      },
    ],
  },
  {
    heading: "Agriculture & Livestock",
    sectionBadge: "ND / BTS / DEGREE",
    color: "success",
    viewAllHref: "/academics/agriculture",
    viewAllLabel: "All Agriculture Programs",
    items: [
      {
        label: "Food Technology",
        href: "/academics/agriculture/food",
        icon: <IconLeaf size={14} stroke={1.8} />,
        description: "Food processing, preservation & quality control",
        badge: "demand",
      },
      {
        label: "Animal Production",
        href: "/academics/agriculture/animal",
        icon: <IconLeaf size={14} stroke={1.8} />,
        description: "Livestock management & veterinary support",
      },
      {
        label: "Agricultural Engineering",
        href: "/academics/agriculture/engineering",
        icon: <IconBuildingFactory2 size={14} stroke={1.8} />,
        description: "Agro-industrial systems & farm mechanization",
      },
      {
        label: "Agro-Pastoral Entrepreneurship",
        href: "/academics/agriculture/entrepreneurship",
        icon: <IconBriefcase size={14} stroke={1.8} />,
        description: "Agricultural business & rural entrepreneurship",
        badge: "new",
      },
      {
        label: "Plant Production (Agronomy)",
        href: "/academics/agriculture/agronomy",
        icon: <IconLeaf size={14} stroke={1.8} />,
        description: "Crop science, soil management & agronomy",
      },
      {
        label: "Farm Management",
        href: "/academics/agriculture/management",
        icon: <IconClipboardList size={14} stroke={1.8} />,
        description: "Agricultural management techniques & rural planning",
      },
    ],
  },
  {
    heading: "Education",
    sectionBadge: "CAPIEMP / CAPIET / MASTER",
    color: "blue",
    viewAllHref: "/academics/education",
    viewAllLabel: "All Education Programs",
    items: [
      {
        label: "Didactics & Teaching",
        href: "/academics/education/didactics",
        icon: <IconSchool size={14} stroke={1.8} />,
        description: "Teaching methods, curriculum development & pedagogy",
        badge: "popular",
      },
      {
        label: "Career Guidance & Counseling",
        href: "/academics/education/guidance",
        icon: <IconUsers size={14} stroke={1.8} />,
        description: "Orientation, professional studies & student counseling",
      },
      {
        label: "Educational Administration",
        href: "/academics/education/administration",
        icon: <IconClipboardList size={14} stroke={1.8} />,
        description: "School management & educational governance",
        badge: "demand",
      },
      {
        label: "Professional Education Studies",
        href: "/academics/education/professional",
        icon: <IconCertificate size={14} stroke={1.8} />,
        description: "Professional training & workplace education",
      },
      {
        label: "Educational Sciences",
        href: "/academics/education/sciences",
        icon: <IconAtom size={14} stroke={1.8} />,
        description: "Research, educational psychology & learning theory",
        badge: "new",
      },
    ],
  },
  {
    heading: "Tourism & Hospitality",
    sectionBadge: "ND / BTS / DEGREE",
    color: "warning",
    viewAllHref: "/academics/hospitality",
    viewAllLabel: "All Hospitality Programs",
    items: [
      {
        label: "Bakery & Food Production",
        href: "/academics/hospitality/bakery",
        icon: <IconLeaf size={14} stroke={1.8} />,
        description: "Baking, culinary arts & food production management",
        badge: "popular",
      },
      {
        label: "Hotel & Restaurant Management",
        href: "/academics/hospitality/hotel",
        icon: <IconBuildingSkyscraper size={14} stroke={1.8} />,
        description: "Hospitality management & restaurant operations",
        badge: "demand",
      },
      {
        label: "Fashion & Textile",
        href: "/academics/hospitality/fashion",
        icon: <IconScissors size={14} stroke={1.8} />,
        description: "Fashion design, garment making & textile technology",
      },
      {
        label: "Travel & Tourism Agency",
        href: "/academics/hospitality/tourism",
        icon: <IconMapPin size={14} stroke={1.8} />,
        description: "Tourism operations, travel management & guiding",
        badge: "new",
      },
    ],
  },
  {
    heading: "Other Professional",
    sectionBadge: "ND / BTS / DEGREE",
    color: "red",
    viewAllHref: "/academics/other",
    viewAllLabel: "All Other Programs",
    items: [
      {
        label: "Mechanical Engineering",
        href: "/academics/other/mechanical",
        icon: <IconTool size={14} stroke={1.8} />,
        description: "Mechanical systems, maintenance & production",
      },
      {
        label: "Petroleum Engineering",
        href: "/academics/other/petroleum",
        icon: <IconFlame size={14} stroke={1.8} />,
        description: "Petroleum technology & mining engineering",
        badge: "demand",
      },
      {
        label: "Legal Careers",
        href: "/academics/other/legal",
        icon: <IconGavel size={14} stroke={1.8} />,
        description: "Law, legal practice & judicial administration",
        badge: "prestige",
      },
      {
        label: "Communication",
        href: "/academics/other/communication",
        icon: <IconSpeakerphone size={14} stroke={1.8} />,
        description: "Media, communication & public relations",
        badge: "new",
      },
      {
        label: "Electronic Engineering",
        href: "/academics/other/electronics",
        icon: <IconBolt size={14} stroke={1.8} />,
        description: "Electronic systems, circuits & instrumentation",
      },
    ],
  },
  {
    heading: "CQP / DQP Short Courses",
    sectionBadge: "CQP / DQP / AQP",
    color: "success",
    viewAllHref: "/academics/cqp",
    viewAllLabel: "All Short Courses",
    items: [
      {
        label: "Secretarial & Office Work",
        href: "/academics/cqp/secretarial",
        icon: <IconFileDescription size={14} stroke={1.8} />,
        description: "Office management, typing & administrative support",
        badge: "popular",
      },
      {
        label: "Computerized Accounting",
        href: "/academics/cqp/accounting",
        icon: <IconCalculator size={14} stroke={1.8} />,
        description: "Digital bookkeeping & accounting software",
        badge: "demand",
      },
      {
        label: "Graphics & Web Design",
        href: "/academics/cqp/graphics",
        icon: <IconDeviceDesktop size={14} stroke={1.8} />,
        description: "Graphic design, web development & digital media",
      },
      {
        label: "Computer Maintenance",
        href: "/academics/cqp/maintenance",
        icon: <IconTool size={14} stroke={1.8} />,
        description: "PC hardware maintenance & repair techniques",
      },
      {
        label: "CCTV & Surveillance Installation",
        href: "/academics/cqp/cctv",
        icon: <IconCamera size={14} stroke={1.8} />,
        description: "Security camera installation & monitoring systems",
        badge: "new",
      },
      {
        label: "Satellite Dish Installation",
        href: "/academics/cqp/satellite",
        icon: <IconSatellite size={14} stroke={1.8} />,
        description: "Parabolic antenna installation & satellite systems",
      },
      {
        label: "Solar Energy Installation",
        href: "/academics/cqp/solar",
        icon: <IconBolt size={14} stroke={1.8} />,
        description: "Solar panel installation & renewable energy systems",
        badge: "demand",
      },
    ],
  },
];

// ─── Nav links ────────────────────────────────────────────────────────────────

const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "/", icon: <IconHome size={15} stroke={1.8} /> },
  {
    label: "About",
    href: "/about",
    icon: <IconInfoCircle size={15} stroke={1.8} />,
  },
  {
    label: "Programs",
    href: "/academics",
    icon: <IconBriefcase size={15} stroke={1.8} />,
    dropdown: PROGRAMS_DROPDOWN,
  },
  {
    label: "Admissions",
    href: "/admissions",
    icon: <IconClipboardList size={15} stroke={1.8} />,
  },
  { label: "News", href: "/news", icon: <IconNews size={15} stroke={1.8} /> },
  {
    label: "Gallery",
    href: "/gallery",
    icon: <IconPhoto size={15} stroke={1.8} />,
  },
  {
    label: "Contact",
    href: "/contact",
    icon: <IconMail size={15} stroke={1.8} />,
  },
];

// ─── Framer variants ──────────────────────────────────────────────────────────

const headerVariants: Variants = {
  top: {
    backgroundColor: "rgba(0,0,0,0)",
    borderBottomColor: "rgba(255,255,255,0)",
  },
  scrolled: {
    backgroundColor: "var(--navbar-bg)",
    borderBottomColor: "var(--navbar-border)",
  },
};

const logoVariants: Variants = {
  hidden: { opacity: 0, x: -16 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

const navItemVariants: Variants = {
  hidden: { opacity: 0, y: -8 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.08 + i * 0.04,
      duration: 0.4,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

const dropdownVariants: Variants = {
  hidden: { opacity: 0, y: -10, scaleY: 0.97 },
  show: {
    opacity: 1,
    y: 0,
    scaleY: 1,
    transition: { duration: 0.24, ease: [0.22, 1, 0.36, 1] },
  },
  exit: {
    opacity: 0,
    y: -8,
    scaleY: 0.97,
    transition: { duration: 0.18, ease: "easeIn" },
  },
};

const drawerVariants: Variants = {
  closed: { height: 0, opacity: 0 },
  open: {
    height: "auto",
    opacity: 1,
    transition: { duration: 0.38, ease: [0.4, 0, 0.2, 1] },
  },
};

const drawerItemVariants: Variants = {
  closed: { opacity: 0, x: -12 },
  open: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { delay: i * 0.04, duration: 0.3, ease: [0.22, 1, 0.36, 1] },
  }),
};

const backdropVariants: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.25 } },
};

// ─── Top Bar ──────────────────────────────────────────────────────────────────

function TopBar({ scrolled }: { scrolled: boolean }) {
  const [activeLang, setActiveLang] = useState("en");

  return (
    <div
      className="hidden lg:block"
      style={{
        borderBottom: "1px solid var(--navbar-border)",
        background: scrolled ? "var(--navbar-bg)" : "transparent",
        backdropFilter: scrolled ? "var(--navbar-blur)" : "none",
        WebkitBackdropFilter: scrolled ? "var(--navbar-blur)" : "none",
        transition: "background 0.4s ease",
      }}
    >
      <div
        className="mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 2xl:px-10"
        style={{ height: "34px", maxWidth: "1280px" }}
      >
        {/* Contact — left */}
        <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
          <a
            href="tel:+237677000000"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "5px",
              fontSize: "11.5px",
              color: "var(--text-muted)",
              textDecoration: "none",
              transition: "color 0.15s",
            }}
            onMouseEnter={(e) =>
              ((e.currentTarget as HTMLElement).style.color =
                "var(--text-primary)")
            }
            onMouseLeave={(e) =>
              ((e.currentTarget as HTMLElement).style.color =
                "var(--text-muted)")
            }
          >
            <IconPhone size={12} stroke={1.8} />
            +237 677 000 000
          </a>
          <a
            href="mailto:info@vhipex.edu"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "5px",
              fontSize: "11.5px",
              color: "var(--text-muted)",
              textDecoration: "none",
              transition: "color 0.15s",
            }}
            onMouseEnter={(e) =>
              ((e.currentTarget as HTMLElement).style.color =
                "var(--text-primary)")
            }
            onMouseLeave={(e) =>
              ((e.currentTarget as HTMLElement).style.color =
                "var(--text-muted)")
            }
          >
            <IconMail size={12} stroke={1.8} />
            info@vhipex.edu
          </a>
          <Link
            href="/contact"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "5px",
              fontSize: "11.5px",
              color: "var(--text-muted)",
              textDecoration: "none",
              transition: "color 0.15s",
            }}
            onMouseEnter={(e) =>
              ((e.currentTarget as HTMLElement).style.color =
                "var(--text-primary)")
            }
            onMouseLeave={(e) =>
              ((e.currentTarget as HTMLElement).style.color =
                "var(--text-muted)")
            }
          >
            <IconMapPin size={12} stroke={1.8} />
            Bafoussam · Yaoundé
          </Link>
        </div>

        {/* Language switcher — right */}
        <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
          <IconLanguage
            size={13}
            stroke={1.8}
            style={{ color: "var(--text-muted)" }}
          />
          {LANGUAGES.map((lang) => (
            <button
              key={lang.code}
              onClick={() => setActiveLang(lang.code)}
              aria-label={`Switch to ${lang.full}`}
              style={{
                padding: "2px 8px",
                borderRadius: "5px",
                fontSize: "11px",
                fontWeight: activeLang === lang.code ? 700 : 500,
                cursor: "pointer",
                border:
                  activeLang === lang.code
                    ? "1px solid var(--glass-border)"
                    : "1px solid transparent",
                background:
                  activeLang === lang.code
                    ? "var(--glass-bg-subtle)"
                    : "transparent",
                color:
                  activeLang === lang.code
                    ? "var(--text-primary)"
                    : "var(--text-muted)",
                transition: "all 0.15s",
                letterSpacing: "0.04em",
              }}
            >
              {lang.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── Item Badge ───────────────────────────────────────────────────────────────

function ItemBadge({ type }: { type: keyof typeof ITEM_BADGE_MAP }) {
  const s = ITEM_BADGE_MAP[type];
  return (
    <span
      style={{
        fontSize: "8px",
        fontWeight: 700,
        letterSpacing: "0.04em",
        padding: "1px 5px",
        borderRadius: "99px",
        background: s.bg,
        color: s.color,
        whiteSpace: "nowrap",
        flexShrink: 0,
        border: `1px solid ${s.color}30`,
      }}
    >
      {s.label}
    </span>
  );
}

// ─── Program Row ──────────────────────────────────────────────────────────────

function ProgramRow({
  item,
  onClose,
}: {
  item: DropdownItem;
  onClose: () => void;
}) {
  return (
    <Link
      href={item.href}
      onClick={onClose}
      style={{
        display: "flex",
        alignItems: "flex-start",
        gap: "8px",
        padding: "6px 8px",
        borderRadius: "8px",
        textDecoration: "none",
        transition: "background 0.15s",
        cursor: "pointer",
        border: "1px solid transparent",
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.background = "var(--glass-bg)";
        el.style.borderColor = "var(--glass-border)";
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.background = "transparent";
        el.style.borderColor = "transparent";
      }}
    >
      <span
        style={{
          marginTop: "2px",
          flexShrink: 0,
          color: "var(--accent-primary)",
        }}
      >
        {item.icon}
      </span>
      <div style={{ flex: 1, minWidth: 0 }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "5px",
            flexWrap: "wrap",
          }}
        >
          <span
            style={{
              fontSize: "12px",
              fontWeight: 500,
              color: "var(--text-primary)",
              lineHeight: 1.2,
            }}
          >
            {item.label}
          </span>
          {item.badge && <ItemBadge type={item.badge} />}
        </div>
        <span
          style={{
            fontSize: "10.5px",
            color: "var(--text-muted)",
            lineHeight: 1.3,
          }}
        >
          {item.description}
        </span>
      </div>
      <IconArrowRight
        size={11}
        stroke={2}
        style={{
          color: "var(--text-muted)",
          flexShrink: 0,
          marginTop: "3px",
          opacity: 0.4,
        }}
      />
    </Link>
  );
}

// ─── Section Card ─────────────────────────────────────────────────────────────

const PREVIEW_COUNT = 4;

function SectionCard({
  section,
  onClose,
}: {
  section: DropdownSection;
  onClose: () => void;
}) {
  const [expanded, setExpanded] = useState(false);
  const c = COLOR_MAP[section.color];
  const hasMore = section.items.length > PREVIEW_COUNT;
  const hiddenCount = section.items.length - PREVIEW_COUNT;
  const visibleItems = expanded
    ? section.items
    : section.items.slice(0, PREVIEW_COUNT);

  return (
    <div
      style={{
        background: "var(--glass-bg-subtle)",
        border: "1px solid var(--glass-border)",
        borderRadius: "14px",
        padding: "12px",
        display: "flex",
        flexDirection: "column",
        gap: "3px",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: "8px",
          paddingBottom: "8px",
          borderBottom: "1px solid var(--divider)",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
          <span
            style={{
              fontSize: "11px",
              fontWeight: 700,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color: "var(--text-primary)",
            }}
          >
            {section.heading}
          </span>
          {section.sectionBadge && (
            <span
              style={{
                fontSize: "8.5px",
                fontWeight: 700,
                letterSpacing: "0.05em",
                padding: "2px 5px",
                borderRadius: "99px",
                background: c.badgeBg,
                color: c.badgeText,
                whiteSpace: "nowrap",
                border: `1px solid ${c.badgeText}25`,
              }}
            >
              {section.sectionBadge}
            </span>
          )}
        </div>
        <Link
          href={section.viewAllHref}
          onClick={onClose}
          style={{
            fontSize: "10px",
            fontWeight: 600,
            color: c.badgeText,
            textDecoration: "none",
            display: "flex",
            alignItems: "center",
            gap: "3px",
            whiteSpace: "nowrap",
            padding: "3px 7px",
            borderRadius: "6px",
            background: c.badgeBg,
            border: `1px solid ${c.badgeText}25`,
            transition: "opacity 0.15s",
          }}
          onMouseEnter={(e) =>
            ((e.currentTarget as HTMLElement).style.opacity = "0.7")
          }
          onMouseLeave={(e) =>
            ((e.currentTarget as HTMLElement).style.opacity = "1")
          }
        >
          View all <IconArrowRight size={9} stroke={2.5} />
        </Link>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "1px" }}>
        {visibleItems.map((item) => (
          <ProgramRow key={item.href} item={item} onClose={onClose} />
        ))}
      </div>
      {hasMore && (
        <button
          onClick={() => setExpanded((v) => !v)}
          style={{
            marginTop: "6px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "5px",
            padding: "6px 10px",
            borderRadius: "8px",
            fontSize: "10.5px",
            fontWeight: 600,
            cursor: "pointer",
            border: `1px dashed ${c.badgeText}50`,
            background: "transparent",
            color: c.badgeText,
            transition: "background 0.15s",
            width: "100%",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLElement).style.background = c.badgeBg;
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLElement).style.background = "transparent";
          }}
        >
          {expanded ? (
            <>
              <IconChevronUp size={11} stroke={2.5} /> Show less
            </>
          ) : (
            <>
              <IconPlus size={11} stroke={2.5} /> {hiddenCount} more program
              {hiddenCount > 1 ? "s" : ""}
            </>
          )}
        </button>
      )}
      <Link
        href={section.viewAllHref}
        onClick={onClose}
        style={{
          marginTop: "4px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "5px",
          padding: "7px 10px",
          borderRadius: "8px",
          fontSize: "11px",
          fontWeight: 600,
          textDecoration: "none",
          background: c.infoBg,
          color: c.infoText,
          border: `1px solid ${c.infoBorder}`,
          transition: "opacity 0.15s",
        }}
        onMouseEnter={(e) =>
          ((e.currentTarget as HTMLElement).style.opacity = "0.75")
        }
        onMouseLeave={(e) =>
          ((e.currentTarget as HTMLElement).style.opacity = "1")
        }
      >
        <IconFileDescription size={11} stroke={2} />
        {section.viewAllLabel}
        <IconArrowRight size={10} stroke={2.5} />
      </Link>
    </div>
  );
}

// ─── Programs Dropdown ────────────────────────────────────────────────────────

function ProgramsDropdown({
  sections,
  onClose,
  topOffset,
}: {
  sections: DropdownSection[];
  onClose: () => void;
  topOffset: number;
}) {
  const totalPrograms = sections.reduce((acc, s) => acc + s.items.length, 0);

  return (
    <motion.div
      variants={dropdownVariants}
      initial="hidden"
      animate="show"
      exit="exit"
      style={{
        position: "fixed",
        top: `${topOffset}px`,
        left: 0,
        right: 0,
        width: "100%",
        background: "var(--navbar-bg)",
        backdropFilter: "var(--navbar-blur)",
        WebkitBackdropFilter: "var(--navbar-blur)",
        borderBottom: "1px solid var(--navbar-border)",
        borderTop: "1px solid var(--navbar-border)",
        zIndex: 49,
        boxShadow: "var(--glass-shadow-lg)",
        transformOrigin: "top center",
        maxHeight: `calc(100vh - ${topOffset + 12}px)`,
        overflowY: "auto",
      }}
    >
      <div
        style={{ maxWidth: "1400px", margin: "0 auto", padding: "18px 28px" }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: "14px",
            paddingBottom: "12px",
            borderBottom: "1px solid var(--divider)",
          }}
        >
          <div>
            <h3
              style={{
                fontSize: "14px",
                fontWeight: 700,
                color: "var(--text-primary)",
                margin: 0,
                letterSpacing: "0.01em",
              }}
            >
              VHIPEX Academic Programs
            </h3>
            <p
              style={{
                fontSize: "11px",
                color: "var(--text-muted)",
                margin: "2px 0 0",
              }}
            >
              {totalPrograms} programs across {sections.length} fields — CAPIEMP
              · CAPIET · ND · HPD · CQP · AQP · DQP · BTS · DEGREE · Master
            </p>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <Link
              href="/admissions"
              onClick={onClose}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "5px",
                padding: "6px 12px",
                borderRadius: "8px",
                fontSize: "11.5px",
                fontWeight: 600,
                textDecoration: "none",
                color: "var(--text-secondary)",
                border: "1px solid var(--glass-border)",
                background: "var(--glass-bg-subtle)",
                backdropFilter: "var(--glass-blur-sm)",
              }}
            >
              <IconClipboardList size={12} stroke={2} />
              How to Apply
            </Link>
            <Link
              href="/admissions/apply"
              onClick={onClose}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "5px",
                padding: "6px 12px",
                borderRadius: "8px",
                fontSize: "11.5px",
                fontWeight: 600,
                textDecoration: "none",
                color: "var(--badge-red-text)",
                border: "1px solid var(--error-border)",
                background: "var(--error-bg)",
              }}
            >
              <IconFlame size={12} stroke={2} />
              Apply Now
            </Link>
            <Link
              href="/academics"
              onClick={onClose}
              className="btn-primary"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "5px",
                padding: "6px 14px",
                borderRadius: "8px",
                fontSize: "11.5px",
                fontWeight: 600,
                textDecoration: "none",
              }}
            >
              <IconBook size={12} stroke={2} />
              Full Catalog
              <IconArrowRight size={11} stroke={2.5} />
            </Link>
          </div>
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "10px",
          }}
        >
          {sections.map((section) => (
            <SectionCard
              key={section.heading}
              section={section}
              onClose={onClose}
            />
          ))}
        </div>
        <div
          style={{
            marginTop: "14px",
            paddingTop: "12px",
            borderTop: "1px solid var(--divider)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "8px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "16px",
              flexWrap: "wrap",
            }}
          >
            {[
              {
                icon: <IconUsers size={11} stroke={2} />,
                label: "500+ Students Enrolled",
              },
              {
                icon: <IconClock size={11} stroke={2} />,
                label: "1–3 Year Programs",
              },
              {
                icon: <IconMapPin size={11} stroke={2} />,
                label: "Bafoussam & Yaoundé, Cameroon",
              },
              {
                icon: <IconPhone size={11} stroke={2} />,
                label: "10,000 frs Registration",
              },
              {
                icon: <IconStarFilled size={10} stroke={2} />,
                label: "MINEFOP Accredited — Arrêté 000010",
              },
            ].map(({ icon, label }) => (
              <div
                key={label}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "5px",
                  color: "var(--text-muted)",
                  fontSize: "11px",
                  whiteSpace: "nowrap",
                }}
              >
                <span style={{ color: "var(--accent-primary)" }}>{icon}</span>
                {label}
              </div>
            ))}
          </div>
          <div style={{ display: "flex", gap: "6px" }}>
            <Link
              href="/academics/cqp"
              onClick={onClose}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "4px",
                padding: "5px 10px",
                borderRadius: "7px",
                fontSize: "11px",
                fontWeight: 600,
                textDecoration: "none",
                color: "var(--success-text)",
                border: "1px solid var(--success-border)",
                background: "var(--success-bg)",
              }}
            >
              <IconCertificate size={12} stroke={2} />
              CQP / DQP Short Courses
            </Link>
            <Link
              href="/academics/masters"
              onClick={onClose}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "4px",
                padding: "5px 10px",
                borderRadius: "7px",
                fontSize: "11px",
                fontWeight: 600,
                textDecoration: "none",
                color: "var(--badge-blue-text)",
                border: "1px solid var(--info-border)",
                background: "var(--info-bg)",
              }}
            >
              <IconAward size={12} stroke={2} />
              Master's Programs
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// ─── Logo ─────────────────────────────────────────────────────────────────────

function Logo() {
  return (
    <motion.div variants={logoVariants} initial="hidden" animate="show">
      <Link
        href="/"
        style={{
          display: "flex",
          alignItems: "center",
          gap: "12px",
          textDecoration: "none",
        }}
      >
        <motion.div
          whileHover={{ scale: 1.06, rotate: -2 }}
          whileTap={{ scale: 0.96 }}
          transition={{ type: "spring", stiffness: 400, damping: 18 }}
          style={{
            width: 42,
            height: 42,
            borderRadius: "11px",
            background: "var(--btn-primary-bg)",
            boxShadow: "var(--btn-primary-shadow)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
            position: "relative",
          }}
        >
          <span
            style={{
              fontFamily: "Georgia, 'Times New Roman', serif",
              fontWeight: 700,
              fontSize: "19px",
              color: "var(--btn-primary-text)",
              letterSpacing: "-0.5px",
              lineHeight: 1,
            }}
          >
            V
          </span>
          <span
            style={{
              position: "absolute",
              bottom: 6,
              right: 6,
              width: 6,
              height: 6,
              borderRadius: "50%",
              background: "var(--accent-secondary)",
            }}
          />
        </motion.div>
        <div
          style={{ display: "flex", flexDirection: "column", lineHeight: 1.1 }}
        >
          <span
            style={{
              fontFamily: "Georgia, 'Times New Roman', serif",
              fontWeight: 700,
              fontSize: "17px",
              color: "var(--text-primary)",
              letterSpacing: "0.02em",
            }}
          >
            VHIPEX
          </span>
          <span
            style={{
              fontSize: "9px",
              fontWeight: 600,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "var(--text-muted)",
            }}
          >
            University Institute
          </span>
        </div>
      </Link>
    </motion.div>
  );
}

// ─── Desktop Nav Link ─────────────────────────────────────────────────────────

function DesktopNavLink({
  link,
  index,
  isActive,
  dropdownTopOffset,
}: {
  link: NavLink;
  index: number;
  isActive: boolean;
  dropdownTopOffset: number;
}) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const hasDropdown = !!link.dropdown;

  useEffect(() => {
    if (!dropdownOpen) return;
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node))
        setDropdownOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [dropdownOpen]);

  return (
    <motion.div
      ref={ref}
      custom={index}
      variants={navItemVariants}
      initial="hidden"
      animate="show"
      style={{ position: "relative" }}
      onMouseEnter={() => hasDropdown && setDropdownOpen(true)}
      onMouseLeave={() => hasDropdown && setDropdownOpen(false)}
    >
      <Link
        href={link.href}
        style={{
          padding: "6px 13px",
          borderRadius: "8px",
          fontSize: "13.5px",
          fontWeight: 500,
          letterSpacing: "0.01em",
          textDecoration: "none",
          display: "flex",
          alignItems: "center",
          gap: "6px",
          position: "relative",
          color: isActive ? "var(--accent-primary)" : "var(--text-secondary)",
          background: isActive ? "var(--glass-bg-subtle)" : "transparent",
          transition: "background 0.18s ease, color 0.18s ease",
        }}
        onMouseEnter={(e) => {
          if (!isActive) {
            (e.currentTarget as HTMLElement).style.background =
              "var(--btn-ghost-bg-hover)";
            (e.currentTarget as HTMLElement).style.color =
              "var(--text-primary)";
          }
        }}
        onMouseLeave={(e) => {
          if (!isActive) {
            (e.currentTarget as HTMLElement).style.background = "transparent";
            (e.currentTarget as HTMLElement).style.color =
              "var(--text-secondary)";
          }
        }}
      >
        <span
          style={{ display: "none" }}
          className="hidden xl:block"
          aria-hidden="true"
        >
          {link.icon}
        </span>
        {link.label}
        {hasDropdown && (
          <motion.span
            animate={{ rotate: dropdownOpen ? 180 : 0 }}
            transition={{ duration: 0.2 }}
            style={{ display: "flex", color: "var(--text-muted)" }}
          >
            <IconChevronDown size={13} stroke={2} />
          </motion.span>
        )}
        {isActive && (
          <motion.span
            layoutId="nav-active-pill"
            style={{
              position: "absolute",
              bottom: 2,
              left: "50%",
              x: "-50%",
              width: "16px",
              height: "2px",
              borderRadius: "99px",
              background: "var(--accent-primary)",
            }}
            transition={{ type: "spring", stiffness: 380, damping: 30 }}
          />
        )}
      </Link>
      <AnimatePresence>
        {hasDropdown && dropdownOpen && (
          <ProgramsDropdown
            sections={link.dropdown!}
            onClose={() => setDropdownOpen(false)}
            topOffset={dropdownTopOffset}
          />
        )}
      </AnimatePresence>
    </motion.div>
  );
}

// ─── Theme Toggle ─────────────────────────────────────────────────────────────

function ThemeToggle({
  theme,
  toggleTheme,
}: {
  theme: string;
  toggleTheme: () => void;
}) {
  return (
    <motion.button
      onClick={toggleTheme}
      aria-label="Toggle theme"
      whileHover={{ scale: 1.07 }}
      whileTap={{ scale: 0.93 }}
      style={{
        width: 38,
        height: 38,
        borderRadius: "10px",
        border: "1px solid var(--glass-border)",
        background: "var(--glass-bg-subtle)",
        backdropFilter: "var(--glass-blur-sm)",
        WebkitBackdropFilter: "var(--glass-blur-sm)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
        color: "var(--text-secondary)",
        flexShrink: 0,
      }}
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={theme}
          initial={{ opacity: 0, rotate: -30, scale: 0.7 }}
          animate={{ opacity: 1, rotate: 0, scale: 1 }}
          exit={{ opacity: 0, rotate: 30, scale: 0.7 }}
          transition={{ duration: 0.22, ease: "easeOut" }}
          style={{ display: "flex" }}
        >
          {theme === "light" ? (
            <IconMoon size={17} stroke={1.8} />
          ) : (
            <IconSun size={17} stroke={1.8} />
          )}
        </motion.span>
      </AnimatePresence>
    </motion.button>
  );
}

// ─── Portal Icon ──────────────────────────────────────────────────────────────

function PortalIcon() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.35, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
    >
      <Link
        href="/login"
        aria-label="Student portal"
        style={{
          width: 38,
          height: 38,
          borderRadius: "10px",
          border: "1px solid var(--glass-border)",
          background: "var(--glass-bg-subtle)",
          backdropFilter: "var(--glass-blur-sm)",
          WebkitBackdropFilter: "var(--glass-blur-sm)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "var(--text-secondary)",
          textDecoration: "none",
          flexShrink: 0,
          transition: "color 0.18s, background 0.18s",
        }}
        onMouseEnter={(e) => {
          const el = e.currentTarget as HTMLElement;
          el.style.color = "var(--accent-primary)";
          el.style.background = "var(--glass-bg)";
        }}
        onMouseLeave={(e) => {
          const el = e.currentTarget as HTMLElement;
          el.style.color = "var(--text-secondary)";
          el.style.background = "var(--glass-bg-subtle)";
        }}
      >
        <IconUserCircle size={20} stroke={1.6} />
      </Link>
    </motion.div>
  );
}

// ─── Mobile Programs Accordion ────────────────────────────────────────────────

function MobileProgramsAccordion({
  sections,
  itemIndex,
}: {
  sections: DropdownSection[];
  itemIndex: number;
}) {
  const [open, setOpen] = useState(false);
  const [openSection, setOpenSection] = useState<string | null>(null);
  const toggleSection = (heading: string) =>
    setOpenSection((prev) => (prev === heading ? null : heading));

  return (
    <motion.div
      custom={itemIndex}
      variants={drawerItemVariants}
      initial="closed"
      animate="open"
      exit="closed"
    >
      <button
        onClick={() => setOpen((v) => !v)}
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "10px 13px",
          borderRadius: "10px",
          fontSize: "15px",
          fontWeight: 500,
          textAlign: "left",
          background: "transparent",
          border: "none",
          cursor: "pointer",
          color: "var(--text-primary)",
          borderLeft: "3px solid transparent",
          marginBottom: "2px",
        }}
      >
        <span style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <IconBriefcase size={15} stroke={1.8} />
          Programs
        </span>
        <motion.span
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          style={{ color: "var(--text-muted)", display: "flex" }}
        >
          <IconChevronDown size={15} stroke={2} />
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: [0.4, 0, 0.2, 1] }}
            style={{ overflow: "hidden" }}
          >
            <div style={{ paddingLeft: "8px", paddingBottom: "8px" }}>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "6px",
                  marginBottom: "10px",
                  padding: "0 4px",
                }}
              >
                {[
                  {
                    href: "/academics",
                    icon: <IconBook size={12} stroke={2} />,
                    label: "All Programs",
                    color: "var(--accent-primary)",
                    bg: "var(--glass-bg-subtle)",
                    border: "var(--glass-border)",
                  },
                  {
                    href: "/admissions/apply",
                    icon: <IconFlame size={12} stroke={2} />,
                    label: "Apply Now",
                    color: "var(--badge-red-text)",
                    bg: "var(--error-bg)",
                    border: "var(--error-border)",
                  },
                  {
                    href: "/academics/cqp",
                    icon: <IconCertificate size={12} stroke={2} />,
                    label: "CQP/DQP",
                    color: "var(--success-text)",
                    bg: "var(--success-bg)",
                    border: "var(--success-border)",
                  },
                  {
                    href: "/academics/masters",
                    icon: <IconAward size={12} stroke={2} />,
                    label: "Masters",
                    color: "var(--badge-blue-text)",
                    bg: "var(--info-bg)",
                    border: "var(--info-border)",
                  },
                ].map(({ href, icon, label, color, bg, border }) => (
                  <Link
                    key={href}
                    href={href}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "5px",
                      padding: "8px 10px",
                      borderRadius: "8px",
                      fontSize: "12px",
                      fontWeight: 600,
                      textDecoration: "none",
                      border: `1px solid ${border}`,
                      color,
                      background: bg,
                    }}
                  >
                    {icon}
                    {label}
                  </Link>
                ))}
              </div>
              {sections.map((section) => {
                const c = COLOR_MAP[section.color];
                const isOpen = openSection === section.heading;
                return (
                  <div
                    key={section.heading}
                    style={{
                      marginBottom: "4px",
                      borderRadius: "10px",
                      border: "1px solid var(--divider)",
                      overflow: "hidden",
                    }}
                  >
                    <button
                      onClick={() => toggleSection(section.heading)}
                      style={{
                        width: "100%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        padding: "9px 12px",
                        background: isOpen
                          ? "var(--glass-bg-subtle)"
                          : "transparent",
                        border: "none",
                        cursor: "pointer",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "6px",
                        }}
                      >
                        <span
                          style={{
                            fontSize: "11px",
                            fontWeight: 700,
                            letterSpacing: "0.08em",
                            textTransform: "uppercase",
                            color: "var(--text-muted)",
                          }}
                        >
                          {section.heading}
                        </span>
                        {section.sectionBadge && (
                          <span
                            style={{
                              fontSize: "8.5px",
                              fontWeight: 600,
                              padding: "1px 5px",
                              borderRadius: "99px",
                              background: c.badgeBg,
                              color: c.badgeText,
                              whiteSpace: "nowrap",
                            }}
                          >
                            {section.sectionBadge}
                          </span>
                        )}
                      </div>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "6px",
                        }}
                      >
                        <span
                          style={{
                            fontSize: "10px",
                            color: c.badgeText,
                            fontWeight: 600,
                          }}
                        >
                          {section.items.length} programs
                        </span>
                        <motion.span
                          animate={{ rotate: isOpen ? 180 : 0 }}
                          transition={{ duration: 0.18 }}
                          style={{
                            color: "var(--text-muted)",
                            display: "flex",
                            flexShrink: 0,
                          }}
                        >
                          <IconChevronDown size={13} stroke={2} />
                        </motion.span>
                      </div>
                    </button>
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{
                            duration: 0.22,
                            ease: [0.4, 0, 0.2, 1],
                          }}
                          style={{ overflow: "hidden" }}
                        >
                          <div style={{ padding: "4px 8px 8px" }}>
                            {section.items.map((item) => (
                              <Link
                                key={item.href}
                                href={item.href}
                                style={{
                                  display: "flex",
                                  alignItems: "flex-start",
                                  gap: "8px",
                                  padding: "7px 8px",
                                  borderRadius: "8px",
                                  textDecoration: "none",
                                  marginBottom: "1px",
                                }}
                              >
                                <span
                                  style={{
                                    color: "var(--accent-primary)",
                                    marginTop: "1px",
                                    flexShrink: 0,
                                  }}
                                >
                                  {item.icon}
                                </span>
                                <div>
                                  <div
                                    style={{
                                      display: "flex",
                                      alignItems: "center",
                                      gap: "5px",
                                      flexWrap: "wrap",
                                    }}
                                  >
                                    <span
                                      style={{
                                        fontSize: "13px",
                                        fontWeight: 500,
                                        color: "var(--text-primary)",
                                      }}
                                    >
                                      {item.label}
                                    </span>
                                    {item.badge && (
                                      <ItemBadge type={item.badge} />
                                    )}
                                  </div>
                                  <div
                                    style={{
                                      fontSize: "11px",
                                      color: "var(--text-muted)",
                                      marginTop: "1px",
                                    }}
                                  >
                                    {item.description}
                                  </div>
                                </div>
                              </Link>
                            ))}
                            <Link
                              href={section.viewAllHref}
                              style={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                gap: "5px",
                                marginTop: "6px",
                                padding: "7px 12px",
                                borderRadius: "7px",
                                fontSize: "11.5px",
                                fontWeight: 600,
                                textDecoration: "none",
                                border: `1px solid ${c.infoBorder}`,
                                color: c.infoText,
                                background: c.infoBg,
                              }}
                            >
                              <IconFileDescription size={11} stroke={2} />
                              {section.viewAllLabel}
                              <IconArrowRight size={10} stroke={2.5} />
                            </Link>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────

export default function Header() {
  const pathname = usePathname();
  const { theme, toggleTheme } = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Top bar is 34px (desktop only). Main nav is 68px.
  // Dropdown must appear below both = 34 + 68 = 102px from top.
  const TOP_BAR_HEIGHT = 34;
  const NAV_BAR_HEIGHT = 68;
  const dropdownTopOffset = TOP_BAR_HEIGHT + NAV_BAR_HEIGHT;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setMobileOpen(false), [pathname]);

  return (
    <>
      <div className="fixed top-0 inset-x-0 z-50">
        {/* ── Top bar: contact left, language right (desktop only) ── */}
        <TopBar scrolled={scrolled} />

        {/* ── Main navigation bar ── */}
        <motion.header
          variants={headerVariants}
          animate={scrolled ? "scrolled" : "top"}
          transition={{ duration: 0.4, ease: "easeOut" }}
          style={{
            borderBottom: "1px solid transparent",
            backdropFilter: scrolled ? "var(--navbar-blur)" : "none",
            WebkitBackdropFilter: scrolled ? "var(--navbar-blur)" : "none",
          }}
        >
          <div
            className="mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 2xl:px-10"
            style={{ height: `${NAV_BAR_HEIGHT}px`, maxWidth: "1280px" }}
          >
            <Logo />

            {/* Desktop nav — hidden below lg */}
            <nav className="hidden lg:flex items-center" style={{ gap: "2px" }}>
              {NAV_LINKS.map((link, i) => {
                const isActive =
                  link.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(link.href);
                return (
                  <DesktopNavLink
                    key={link.href}
                    link={link}
                    index={i}
                    isActive={isActive}
                    dropdownTopOffset={dropdownTopOffset}
                  />
                );
              })}
            </nav>

            {/* Right actions */}
            <div className="flex items-center" style={{ gap: "8px" }}>
              <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
              <PortalIcon />

              {/* Hamburger — only on mobile/tablet (hidden on lg+) */}
              <motion.button
                className="lg:hidden"
                onClick={() => setMobileOpen((v) => !v)}
                aria-label={mobileOpen ? "Close menu" : "Open menu"}
                aria-expanded={mobileOpen}
                whileHover={{ scale: 1.07 }}
                whileTap={{ scale: 0.93 }}
                style={{
                  width: 38,
                  height: 38,
                  borderRadius: "10px",
                  border: "1px solid var(--glass-border)",
                  background: "var(--glass-bg-subtle)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                  color: "var(--text-primary)",
                  flexShrink: 0,
                }}
              >
                <AnimatePresence mode="wait" initial={false}>
                  <motion.span
                    key={mobileOpen ? "close" : "open"}
                    initial={{ opacity: 0, rotate: -45 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: 45 }}
                    transition={{ duration: 0.2 }}
                    style={{ display: "flex" }}
                  >
                    {mobileOpen ? (
                      <IconX size={18} stroke={2} />
                    ) : (
                      <IconMenu2 size={18} stroke={2} />
                    )}
                  </motion.span>
                </AnimatePresence>
              </motion.button>
            </div>
          </div>

          {/* ── Mobile Drawer ── */}
          <AnimatePresence initial={false}>
            {mobileOpen && (
              <motion.div
                variants={drawerVariants}
                initial="closed"
                animate="open"
                exit="closed"
                style={{
                  overflow: "hidden",
                  background: "var(--navbar-bg)",
                  backdropFilter: "var(--navbar-blur)",
                  WebkitBackdropFilter: "var(--navbar-blur)",
                  borderTop: "1px solid var(--navbar-border)",
                }}
              >
                <div style={{ padding: "10px 16px 18px" }}>
                  {NAV_LINKS.map((link, i) => {
                    if (link.dropdown) {
                      return (
                        <MobileProgramsAccordion
                          key={link.href}
                          sections={link.dropdown}
                          itemIndex={i}
                        />
                      );
                    }
                    const isActive =
                      link.href === "/"
                        ? pathname === "/"
                        : pathname.startsWith(link.href);
                    return (
                      <motion.div
                        key={link.href}
                        custom={i}
                        variants={drawerItemVariants}
                        initial="closed"
                        animate="open"
                        exit="closed"
                      >
                        <Link
                          href={link.href}
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "10px",
                            padding: "10px 13px",
                            borderRadius: "10px",
                            fontSize: "15px",
                            fontWeight: isActive ? 600 : 500,
                            textDecoration: "none",
                            color: isActive
                              ? "var(--accent-primary)"
                              : "var(--text-primary)",
                            background: isActive
                              ? "var(--glass-bg)"
                              : "transparent",
                            borderLeft: isActive
                              ? "3px solid var(--accent-primary)"
                              : "3px solid transparent",
                            transition: "background 0.15s, color 0.15s",
                            marginBottom: "2px",
                          }}
                        >
                          <span aria-hidden="true">{link.icon}</span>
                          {link.label}
                        </Link>
                      </motion.div>
                    );
                  })}

                  {/* Language row in mobile drawer */}
                  <motion.div
                    custom={NAV_LINKS.length}
                    variants={drawerItemVariants}
                    initial="closed"
                    animate="open"
                    exit="closed"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                      marginTop: "10px",
                      padding: "10px 13px",
                      borderRadius: "10px",
                      background: "var(--glass-bg-subtle)",
                      border: "1px solid var(--glass-border)",
                    }}
                  >
                    <IconLanguage
                      size={15}
                      stroke={1.8}
                      style={{ color: "var(--text-muted)" }}
                    />
                    <span
                      style={{
                        fontSize: "13px",
                        color: "var(--text-muted)",
                        flex: 1,
                      }}
                    >
                      Language
                    </span>
                    {LANGUAGES.map((lang) => (
                      <button
                        key={lang.code}
                        style={{
                          padding: "4px 14px",
                          borderRadius: "7px",
                          fontSize: "12px",
                          fontWeight: 600,
                          cursor: "pointer",
                          border: "1px solid var(--glass-border)",
                          background: "var(--glass-bg)",
                          color: "var(--text-primary)",
                        }}
                      >
                        {lang.label}
                      </button>
                    ))}
                  </motion.div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.header>
      </div>

      {/* Backdrop */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            variants={backdropVariants}
            initial="hidden"
            animate="show"
            exit="hidden"
            onClick={() => setMobileOpen(false)}
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 40,
              background: "var(--modal-backdrop)",
              backdropFilter: "blur(2px)",
              WebkitBackdropFilter: "blur(2px)",
            }}
          />
        )}
      </AnimatePresence>
    </>
  );
}
