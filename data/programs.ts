//./data/programs.ts
export type ProgramLevel =
  | "ND"
  | "BTS"
  | "HND"
  | "Licence"
  | "Master"
  | "CAPIEMP"
  | "CAPIET"
  | "CQP"
  | "DQP"
  | "AQP";

export type ProgramBadge = "popular" | "new" | "demand" | "prestige";

export type CategorySlug =
  | "commerce"
  | "engineering"
  | "health"
  | "agriculture"
  | "education"
  | "hospitality"
  | "other"
  | "cqp";

export interface ProgramImage {
  url: string; // images.unsplash.com URL
  alt: string;
  caption?: string;
}

export interface ProgramVideo {
  embedUrl: string; // YouTube embed URL
  title: string;
  thumbnail: string; // images.unsplash.com thumbnail
  duration?: string; // e.g. "12:45"
}

export interface Program {
  slug: string;
  name: string;
  description: string;
  longDescription: string;
  levels: ProgramLevel[];
  duration: string;
  badge?: ProgramBadge;
  category: CategorySlug;
  outcomes: string[];
  modules: string[];
  images: ProgramImage[];
  videos: ProgramVideo[];
}

export interface ProgramCategory {
  slug: CategorySlug;
  name: string;
  description: string;
  color: "blue" | "red" | "success" | "warning";
  sectionBadge: string;
  coverImage: string; // category hero image
  programs: Program[];
}

// ─── Data ─────────────────────────────────────────────────────────────────────

export const PROGRAM_CATEGORIES: ProgramCategory[] = [
  // ── Commerce & Finance ──────────────────────────────────────────────────────
  {
    slug: "commerce",
    name: "Commerce & Finance",
    description:
      "Business, finance, and management programs for the modern economy.",
    color: "warning",
    sectionBadge: "ND / BTS / LICENCE",
    coverImage:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=500&fit=crop",
    programs: [
      {
        slug: "accounting",
        name: "Accounting & Finance",
        description: "Financial accounting, bookkeeping & auditing",
        longDescription:
          "Develop expertise in financial reporting, cost accounting, tax compliance, and auditing practices aligned with OHADA standards used across Central Africa.",
        levels: ["ND", "BTS", "Licence"],
        duration: "1–3 years",
        badge: "demand",
        category: "commerce",
        outcomes: [
          "Financial Accountant",
          "Tax Consultant",
          "Auditor",
          "Budget Analyst",
          "Finance Manager",
        ],
        modules: [
          "Financial Accounting",
          "Cost Accounting",
          "Taxation",
          "Auditing",
          "Business Law",
          "Computerized Accounting",
        ],
        images: [
          {
            url: "https://images.unsplash.com/photo-1554224154-26032ffc0d07?w=800&h=500&fit=crop",
            alt: "Accounting students in class",
            caption: "Students learning financial accounting principles",
          },
          {
            url: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop",
            alt: "Spreadsheet and financial analysis",
            caption: "Hands-on training with accounting software",
          },
          {
            url: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&h=500&fit=crop",
            alt: "Auditing documents",
            caption: "Practical auditing lab sessions",
          },
          {
            url: "https://images.unsplash.com/photo-1554224311-beee2c446136?w=800&h=500&fit=crop",
            alt: "Tax and ledger work",
            caption: "Tax filing and ledger management",
          },
        ],
        videos: [
          {
            embedUrl: "https://www.youtube.com/embed/qjnq3MJMwnI",
            title: "Introduction to Financial Accounting",
            thumbnail:
              "https://images.unsplash.com/photo-1554224154-26032ffc0d07?w=800&h=500&fit=crop",
            duration: "8:24",
          },
          {
            embedUrl: "https://www.youtube.com/embed/V9OYcMYbGRg",
            title: "OHADA Standards Explained",
            thumbnail:
              "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop",
            duration: "11:05",
          },
        ],
      },
      {
        slug: "banking",
        name: "Banking & Finance",
        description: "Banking operations, credit & financial services",
        longDescription:
          "Gain practical knowledge of banking operations, credit analysis, lending products, and financial services management in both commercial and microfinance settings.",
        levels: ["ND", "BTS", "Licence"],
        duration: "1–3 years",
        category: "commerce",
        outcomes: [
          "Bank Officer",
          "Credit Analyst",
          "Loan Officer",
          "Branch Manager",
          "Financial Advisor",
        ],
        modules: [
          "Banking Operations",
          "Credit Management",
          "Financial Markets",
          "Risk Management",
          "Banking Regulations",
          "Customer Relations",
        ],
        images: [
          {
            url: "https://images.unsplash.com/photo-1541354329998-f4d9a9f9297f?w=800&h=500&fit=crop",
            alt: "Banking operations",
            caption: "Modern banking operations training",
          },
          {
            url: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&h=500&fit=crop",
            alt: "Credit and loan management",
            caption: "Credit analysis and lending procedures",
          },
          {
            url: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=500&fit=crop",
            alt: "Customer service in banking",
            caption: "Customer relations in financial services",
          },
        ],
        videos: [
          {
            embedUrl: "https://www.youtube.com/embed/4LNmBPfCDqk",
            title: "Banking Operations Overview",
            thumbnail:
              "https://images.unsplash.com/photo-1541354329998-f4d9a9f9297f?w=800&h=500&fit=crop",
            duration: "9:30",
          },
          {
            embedUrl: "https://www.youtube.com/embed/kgO1p2SfGEs",
            title: "Credit Analysis Techniques",
            thumbnail:
              "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&h=500&fit=crop",
            duration: "14:12",
          },
        ],
      },
      {
        slug: "marketing",
        name: "Marketing & Sales",
        description: "Marketing, commerce & sales strategy",
        longDescription:
          "Master the principles of marketing strategy, consumer behavior, digital marketing, and sales management to drive business growth in competitive markets.",
        levels: ["ND", "BTS", "Licence"],
        duration: "1–3 years",
        badge: "popular",
        category: "commerce",
        outcomes: [
          "Marketing Manager",
          "Sales Representative",
          "Brand Manager",
          "Digital Marketer",
          "Market Analyst",
        ],
        modules: [
          "Marketing Principles",
          "Consumer Behaviour",
          "Digital Marketing",
          "Sales Management",
          "Market Research",
          "Advertising & PR",
        ],
        images: [
          {
            url: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=500&fit=crop",
            alt: "Marketing team collaboration",
            caption: "Marketing strategy workshops",
          },
          {
            url: "https://images.unsplash.com/photo-1432888622747-4eb9a8f2c293?w=800&h=500&fit=crop",
            alt: "Digital marketing",
            caption: "Digital marketing and social media campaigns",
          },
          {
            url: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&h=500&fit=crop",
            alt: "Sales presentation",
            caption: "Sales pitch and presentation training",
          },
          {
            url: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=800&h=500&fit=crop",
            alt: "Market research",
            caption: "Consumer research and market analysis",
          },
        ],
        videos: [
          {
            embedUrl: "https://www.youtube.com/embed/nfqNGVGJMp4",
            title: "Marketing Strategy Fundamentals",
            thumbnail:
              "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=500&fit=crop",
            duration: "10:18",
          },
          {
            embedUrl: "https://www.youtube.com/embed/6sRQpfQkGkc",
            title: "Digital Marketing for Business",
            thumbnail:
              "https://images.unsplash.com/photo-1432888622747-4eb9a8f2c293?w=800&h=500&fit=crop",
            duration: "16:44",
          },
        ],
      },
      {
        slug: "international",
        name: "International Trade",
        description: "International commerce & trade operations",
        longDescription:
          "Learn the mechanics of global trade including import/export procedures, international contracts, customs regulations, and cross-border logistics.",
        levels: ["ND", "BTS", "Licence"],
        duration: "1–3 years",
        category: "commerce",
        outcomes: [
          "Trade Officer",
          "Customs Broker",
          "Export Manager",
          "Logistics Coordinator",
          "Trade Compliance Analyst",
        ],
        modules: [
          "International Trade Law",
          "Customs & Duties",
          "Import/Export Procedures",
          "Trade Finance",
          "Supply Chain Management",
          "Foreign Exchange",
        ],
        images: [
          {
            url: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=800&h=500&fit=crop",
            alt: "International shipping port",
            caption: "Understanding global trade and logistics",
          },
          {
            url: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=500&fit=crop",
            alt: "Customs documentation",
            caption: "Import/export documentation procedures",
          },
          {
            url: "https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?w=800&h=500&fit=crop",
            alt: "Container logistics",
            caption: "Supply chain and freight management",
          },
        ],
        videos: [
          {
            embedUrl: "https://www.youtube.com/embed/XsAoCFSd9vg",
            title: "Introduction to International Trade",
            thumbnail:
              "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=800&h=500&fit=crop",
            duration: "12:05",
          },
        ],
      },
      {
        slug: "projects",
        name: "Project Management",
        description: "Project planning, logistics & transport management",
        longDescription:
          "Develop skills in planning, executing, and closing projects using modern methodologies. Covers logistics, supply chains, and transport operations.",
        levels: ["ND", "BTS", "Licence"],
        duration: "1–3 years",
        category: "commerce",
        outcomes: [
          "Project Manager",
          "Logistics Manager",
          "Transport Officer",
          "Operations Coordinator",
          "Supply Chain Analyst",
        ],
        modules: [
          "Project Planning",
          "Risk Management",
          "Procurement",
          "Logistics & Transport",
          "Operations Management",
          "Project Software Tools",
        ],
        images: [
          {
            url: "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?w=800&h=500&fit=crop",
            alt: "Project management team",
            caption: "Project planning and team coordination",
          },
          {
            url: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=500&fit=crop",
            alt: "Project scheduling",
            caption: "Gantt charts and project timelines",
          },
          {
            url: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=500&fit=crop",
            alt: "Logistics and transport",
            caption: "Logistics and supply chain operations",
          },
        ],
        videos: [
          {
            embedUrl: "https://www.youtube.com/embed/g3nMYAFJDHQ",
            title: "Project Management Essentials",
            thumbnail:
              "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?w=800&h=500&fit=crop",
            duration: "13:22",
          },
        ],
      },
      {
        slug: "microfinance",
        name: "Microfinance",
        description: "Microfinance, local taxation & NGO management",
        longDescription:
          "Specialize in microfinance institution management, rural credit, local tax systems, and the governance of NGOs and civil society organizations.",
        levels: ["ND", "BTS", "Licence"],
        duration: "1–3 years",
        badge: "new",
        category: "commerce",
        outcomes: [
          "Microfinance Officer",
          "NGO Manager",
          "Credit Advisor",
          "Community Finance Specialist",
          "Tax Officer",
        ],
        modules: [
          "Microfinance Principles",
          "Rural Credit",
          "NGO Management",
          "Local Taxation",
          "Social Entrepreneurship",
          "Financial Inclusion",
        ],
        images: [
          {
            url: "https://images.unsplash.com/photo-1559526324-593bc073d938?w=800&h=500&fit=crop",
            alt: "Community finance meeting",
            caption: "Microfinance and community lending programs",
          },
          {
            url: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800&h=500&fit=crop",
            alt: "NGO community work",
            caption: "NGO management and community development",
          },
          {
            url: "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=800&h=500&fit=crop",
            alt: "Rural finance",
            caption: "Rural credit and savings group management",
          },
        ],
        videos: [
          {
            embedUrl: "https://www.youtube.com/embed/UGkXi5uh_B4",
            title: "Microfinance in Africa",
            thumbnail:
              "https://images.unsplash.com/photo-1559526324-593bc073d938?w=800&h=500&fit=crop",
            duration: "7:50",
          },
        ],
      },
    ],
  },

  // ── Engineering & IT ────────────────────────────────────────────────────────
  {
    slug: "engineering",
    name: "Engineering & IT",
    description:
      "Technology, computing, and engineering programs for the digital age.",
    color: "blue",
    sectionBadge: "ND / BTS / HND / MASTER",
    coverImage:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=500&fit=crop",
    programs: [
      {
        slug: "software",
        name: "Software Engineering",
        description: "Software development, systems & applications",
        longDescription:
          "Build modern software applications using industry-standard languages and frameworks. Covers the full development lifecycle from requirements analysis to deployment.",
        levels: ["ND", "BTS", "HND", "Master"],
        duration: "1–4 years",
        badge: "popular",
        category: "engineering",
        outcomes: [
          "Software Developer",
          "Web Developer",
          "Systems Analyst",
          "Mobile App Developer",
          "DevOps Engineer",
        ],
        modules: [
          "Programming Fundamentals",
          "Web Development",
          "Database Management",
          "Software Architecture",
          "Mobile Development",
          "DevOps & Cloud",
        ],
        images: [
          {
            url: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=500&fit=crop",
            alt: "Students coding",
            caption: "Hands-on software development labs",
          },
          {
            url: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=500&fit=crop",
            alt: "Web development",
            caption: "Full-stack web development training",
          },
          {
            url: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=500&fit=crop",
            alt: "Mobile app development",
            caption: "iOS and Android app development",
          },
          {
            url: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=500&fit=crop",
            alt: "Cloud infrastructure",
            caption: "Cloud and DevOps engineering",
          },
        ],
        videos: [
          {
            embedUrl: "https://www.youtube.com/embed/zOjov-2OZ0E",
            title: "Software Engineering Fundamentals",
            thumbnail:
              "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=500&fit=crop",
            duration: "15:30",
          },
          {
            embedUrl: "https://www.youtube.com/embed/ysEN5RaKOlA",
            title: "Web Development with Modern Frameworks",
            thumbnail:
              "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=500&fit=crop",
            duration: "18:45",
          },
        ],
      },
      {
        slug: "hardware",
        name: "Computer Hardware",
        description: "Hardware engineering & computer maintenance",
        longDescription:
          "Learn to assemble, configure, troubleshoot, and maintain computer hardware systems, networks, and peripherals for enterprise and consumer environments.",
        levels: ["ND", "BTS"],
        duration: "1–2 years",
        category: "engineering",
        outcomes: [
          "IT Technician",
          "Hardware Engineer",
          "Network Technician",
          "Systems Administrator",
          "Field Service Engineer",
        ],
        modules: [
          "Computer Architecture",
          "Hardware Assembly",
          "Operating Systems",
          "Network Fundamentals",
          "Troubleshooting",
          "Preventive Maintenance",
        ],
        images: [
          {
            url: "https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?w=800&h=500&fit=crop",
            alt: "Hardware repair lab",
            caption: "Computer hardware assembly and repair",
          },
          {
            url: "https://images.unsplash.com/photo-1593640408182-31c70c8268f5?w=800&h=500&fit=crop",
            alt: "Motherboard components",
            caption: "Component-level hardware diagnostics",
          },
          {
            url: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=500&fit=crop",
            alt: "Network rack",
            caption: "Network infrastructure installation",
          },
        ],
        videos: [
          {
            embedUrl: "https://www.youtube.com/embed/6qn7Z2-4e6I",
            title: "PC Assembly from Scratch",
            thumbnail:
              "https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?w=800&h=500&fit=crop",
            duration: "22:15",
          },
        ],
      },
      {
        slug: "telecom",
        name: "Telecommunications",
        description: "Telecom systems, networks & security",
        longDescription:
          "Specialize in telecommunications infrastructure including mobile networks, fiber optics, network security, and VoIP systems.",
        levels: ["ND", "BTS", "HND"],
        duration: "1–3 years",
        badge: "demand",
        category: "engineering",
        outcomes: [
          "Network Engineer",
          "Telecom Technician",
          "Security Analyst",
          "VoIP Specialist",
          "RF Engineer",
        ],
        modules: [
          "Network Protocols",
          "Mobile Networks (GSM/LTE)",
          "Fiber Optics",
          "Cybersecurity",
          "VoIP Systems",
          "Network Administration",
        ],
        images: [
          {
            url: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=500&fit=crop",
            alt: "Telecom tower",
            caption: "Mobile network infrastructure and installation",
          },
          {
            url: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&h=500&fit=crop",
            alt: "Fiber optic cables",
            caption: "Fiber optic installation and testing",
          },
          {
            url: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&h=500&fit=crop",
            alt: "Cybersecurity",
            caption: "Network security and penetration testing",
          },
          {
            url: "https://images.unsplash.com/photo-1484807352052-23338990c6c6?w=800&h=500&fit=crop",
            alt: "VoIP systems",
            caption: "VoIP and unified communications setup",
          },
        ],
        videos: [
          {
            embedUrl: "https://www.youtube.com/embed/3eHyps6K0WU",
            title: "Introduction to Telecommunications",
            thumbnail:
              "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=500&fit=crop",
            duration: "11:40",
          },
          {
            embedUrl: "https://www.youtube.com/embed/YUFbQyQ5Fkc",
            title: "Network Security Fundamentals",
            thumbnail:
              "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&h=500&fit=crop",
            duration: "19:20",
          },
        ],
      },
      {
        slug: "civil",
        name: "Civil & Construction Technology",
        description: "Civil engineering, topography & urban planning",
        longDescription:
          "Master civil engineering fundamentals including structural analysis, surveying, topography, construction project management, and urban planning principles.",
        levels: ["ND", "BTS", "HND"],
        duration: "1–3 years",
        category: "engineering",
        outcomes: [
          "Civil Technician",
          "Site Engineer",
          "Surveyor",
          "Urban Planner",
          "Construction Manager",
        ],
        modules: [
          "Structural Analysis",
          "Topography & Surveying",
          "Construction Materials",
          "Urban Planning",
          "AutoCAD",
          "Project Management",
        ],
        images: [
          {
            url: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&h=500&fit=crop",
            alt: "Construction site",
            caption: "On-site civil engineering training",
          },
          {
            url: "https://images.unsplash.com/photo-1581094271901-8022df4466f9?w=800&h=500&fit=crop",
            alt: "Surveying equipment",
            caption: "Topographic surveying with total stations",
          },
          {
            url: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&h=500&fit=crop",
            alt: "AutoCAD design",
            caption: "CAD drafting and structural design",
          },
          {
            url: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=500&fit=crop",
            alt: "Urban planning",
            caption: "Urban development and planning concepts",
          },
        ],
        videos: [
          {
            embedUrl: "https://www.youtube.com/embed/SZvTtCFMqHY",
            title: "Civil Engineering Basics",
            thumbnail:
              "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&h=500&fit=crop",
            duration: "14:08",
          },
        ],
      },
      {
        slug: "electrical",
        name: "Electrical Systems",
        description: "Electrical power systems & industrial maintenance",
        longDescription:
          "Train in the design, installation, and maintenance of electrical systems for residential, commercial, and industrial applications.",
        levels: ["ND", "BTS", "HND"],
        duration: "1–3 years",
        category: "engineering",
        outcomes: [
          "Electrician",
          "Electrical Engineer",
          "Industrial Maintenance Tech",
          "Power Systems Technician",
          "Energy Auditor",
        ],
        modules: [
          "Electrical Circuits",
          "Power Systems",
          "Industrial Automation",
          "Electrical Installation",
          "PLC Programming",
          "Energy Management",
        ],
        images: [
          {
            url: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&h=500&fit=crop",
            alt: "Electrical panel work",
            caption: "Electrical installation and panel wiring",
          },
          {
            url: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&h=500&fit=crop",
            alt: "PLC automation",
            caption: "PLC programming and industrial automation",
          },
          {
            url: "https://images.unsplash.com/photo-1509390144164-5c94a894d49e?w=800&h=500&fit=crop",
            alt: "Power grid",
            caption: "Power systems and energy distribution",
          },
        ],
        videos: [
          {
            embedUrl: "https://www.youtube.com/embed/mc979OhitAg",
            title: "Electrical Systems Fundamentals",
            thumbnail:
              "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&h=500&fit=crop",
            duration: "16:55",
          },
        ],
      },
      {
        slug: "graphics",
        name: "Graphics & IT Design",
        description: "IT graphics, web design & multimedia",
        longDescription:
          "Combine creative design with technical IT skills. Covers graphic design, UI/UX, web design, video production, and digital media creation.",
        levels: ["ND", "BTS"],
        duration: "1–2 years",
        badge: "new",
        category: "engineering",
        outcomes: [
          "Graphic Designer",
          "UI/UX Designer",
          "Web Designer",
          "Multimedia Producer",
          "Digital Content Creator",
        ],
        modules: [
          "Graphic Design Principles",
          "Adobe Creative Suite",
          "UI/UX Design",
          "Web Design",
          "Video Editing",
          "Digital Media",
        ],
        images: [
          {
            url: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=500&fit=crop",
            alt: "Graphic design studio",
            caption: "Creative design studio environment",
          },
          {
            url: "https://images.unsplash.com/photo-1559028012-481c04fa702d?w=800&h=500&fit=crop",
            alt: "UI/UX design",
            caption: "UI/UX wireframing and prototyping",
          },
          {
            url: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=800&h=500&fit=crop",
            alt: "Video editing",
            caption: "Video production and post-processing",
          },
          {
            url: "https://images.unsplash.com/photo-1626785774625-ddcddc3445e9?w=800&h=500&fit=crop",
            alt: "Adobe tools",
            caption: "Adobe Creative Suite training",
          },
        ],
        videos: [
          {
            embedUrl: "https://www.youtube.com/embed/WONZVnlam6U",
            title: "Introduction to Graphic Design",
            thumbnail:
              "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=500&fit=crop",
            duration: "13:10",
          },
          {
            embedUrl: "https://www.youtube.com/embed/c9Wg6Cb_YlU",
            title: "UI/UX Design Principles",
            thumbnail:
              "https://images.unsplash.com/photo-1559028012-481c04fa702d?w=800&h=500&fit=crop",
            duration: "20:33",
          },
        ],
      },
    ],
  },

  // ── Health Sciences ─────────────────────────────────────────────────────────
  {
    slug: "health",
    name: "Health Sciences",
    description:
      "Clinical and paramedical programs for healthcare professionals.",
    color: "red",
    sectionBadge: "ND / BTS / LICENCE",
    coverImage:
      "https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=800&h=500&fit=crop",
    programs: [
      {
        slug: "nursing",
        name: "Nursing Sciences",
        description: "Nursing care, patient management & clinical practice",
        longDescription:
          "Comprehensive nursing education covering patient assessment, care planning, medication administration, and clinical practice in hospital and community settings.",
        levels: ["ND", "BTS", "Licence"],
        duration: "1–3 years",
        badge: "popular",
        category: "health",
        outcomes: [
          "Registered Nurse",
          "Community Health Nurse",
          "Ward Nurse",
          "Clinical Nurse Specialist",
          "Nursing Supervisor",
        ],
        modules: [
          "Anatomy & Physiology",
          "Pharmacology",
          "Patient Care",
          "Clinical Nursing",
          "Medical-Surgical Nursing",
          "Community Health",
        ],
        images: [
          {
            url: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=500&fit=crop",
            alt: "Nursing care",
            caption: "Clinical nursing practice in hospital wards",
          },
          {
            url: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=500&fit=crop",
            alt: "Nursing students",
            caption: "Nursing students in clinical training",
          },
          {
            url: "https://images.unsplash.com/photo-1583324113626-70df0f4deaab?w=800&h=500&fit=crop",
            alt: "Medical equipment",
            caption: "Working with medical equipment and instruments",
          },
          {
            url: "https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?w=800&h=500&fit=crop",
            alt: "Community health",
            caption: "Community health outreach programs",
          },
        ],
        videos: [
          {
            embedUrl: "https://www.youtube.com/embed/1oVt6SxWPAI",
            title: "Nursing Fundamentals",
            thumbnail:
              "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=500&fit=crop",
            duration: "17:22",
          },
          {
            embedUrl: "https://www.youtube.com/embed/c7FEGSjrsW4",
            title: "Patient Care and Assessment",
            thumbnail:
              "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=500&fit=crop",
            duration: "14:08",
          },
        ],
      },
      {
        slug: "laboratory",
        name: "Laboratory Technology",
        description: "Medical laboratory techniques & bioanalysis",
        longDescription:
          "Train in biomedical laboratory analysis including hematology, microbiology, biochemistry, and histopathology for clinical diagnosis support.",
        levels: ["ND", "BTS"],
        duration: "1–2 years",
        category: "health",
        outcomes: [
          "Lab Technician",
          "Biomedical Analyst",
          "Hematology Technician",
          "Microbiologist",
          "Lab Supervisor",
        ],
        modules: [
          "Hematology",
          "Microbiology",
          "Clinical Biochemistry",
          "Histopathology",
          "Lab Safety",
          "Quality Control",
        ],
        images: [
          {
            url: "https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=800&h=500&fit=crop",
            alt: "Medical laboratory",
            caption: "State-of-the-art medical laboratory facilities",
          },
          {
            url: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=800&h=500&fit=crop",
            alt: "Microscope work",
            caption: "Microscopy and cell analysis techniques",
          },
          {
            url: "https://images.unsplash.com/photo-1579154204601-01588f351e67?w=800&h=500&fit=crop",
            alt: "Blood analysis",
            caption: "Hematology and blood sample analysis",
          },
          {
            url: "https://images.unsplash.com/photo-1628595351029-c2bf17511435?w=800&h=500&fit=crop",
            alt: "Microbiology cultures",
            caption: "Microbiology culture and identification",
          },
        ],
        videos: [
          {
            embedUrl: "https://www.youtube.com/embed/MvFn_LMOmfI",
            title: "Medical Laboratory Techniques",
            thumbnail:
              "https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=800&h=500&fit=crop",
            duration: "12:44",
          },
        ],
      },
      {
        slug: "midwifery",
        name: "Midwifery",
        description: "Maternal care, obstetrics & gynecological nursing",
        longDescription:
          "Specialize in antenatal, intrapartum, and postnatal care, including obstetric emergencies and reproductive health counseling.",
        levels: ["ND", "BTS", "Licence"],
        duration: "1–3 years",
        category: "health",
        outcomes: [
          "Midwife",
          "Obstetrics Nurse",
          "Reproductive Health Specialist",
          "Antenatal Counselor",
          "Maternal Health Officer",
        ],
        modules: [
          "Obstetrics",
          "Antenatal Care",
          "Labour & Delivery",
          "Postnatal Care",
          "Neonatology",
          "Reproductive Health",
        ],
        images: [
          {
            url: "https://images.unsplash.com/photo-1555252333-9f8e92e65df9?w=800&h=500&fit=crop",
            alt: "Midwifery care",
            caption: "Maternity and antenatal care training",
          },
          {
            url: "https://images.unsplash.com/photo-1631815589968-fdb09a223b1e?w=800&h=500&fit=crop",
            alt: "Neonatal care",
            caption: "Neonatal and postnatal care skills",
          },
          {
            url: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=800&h=500&fit=crop",
            alt: "Prenatal healthcare",
            caption: "Antenatal consultations and monitoring",
          },
        ],
        videos: [
          {
            embedUrl: "https://www.youtube.com/embed/0LD7JZZjWoU",
            title: "Introduction to Midwifery Practice",
            thumbnail:
              "https://images.unsplash.com/photo-1555252333-9f8e92e65df9?w=800&h=500&fit=crop",
            duration: "10:15",
          },
        ],
      },
      {
        slug: "pharmacy",
        name: "Pharmacy Technology",
        description: "Pharmaceutical management & dispensing",
        longDescription:
          "Learn pharmaceutical sciences, drug dispensing, inventory management, and patient counseling in hospital and community pharmacy settings.",
        levels: ["ND", "BTS"],
        duration: "1–2 years",
        badge: "demand",
        category: "health",
        outcomes: [
          "Pharmacy Technician",
          "Pharmaceutical Sales Rep",
          "Drug Store Manager",
          "Hospital Pharmacist Assistant",
          "Regulatory Affairs Officer",
        ],
        modules: [
          "Pharmacology",
          "Drug Dispensing",
          "Pharmaceutical Chemistry",
          "Pharmacy Management",
          "Drug Legislation",
          "Patient Counseling",
        ],
        images: [
          {
            url: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=800&h=500&fit=crop",
            alt: "Pharmacy dispensing",
            caption: "Drug dispensing and pharmacy management",
          },
          {
            url: "https://images.unsplash.com/photo-1471864190281-a93a3070b6de?w=800&h=500&fit=crop",
            alt: "Pharmaceutical products",
            caption: "Pharmaceutical inventory and storage management",
          },
          {
            url: "https://images.unsplash.com/photo-1576602976047-174e57a47881?w=800&h=500&fit=crop",
            alt: "Patient counseling",
            caption: "Patient medication counseling skills",
          },
        ],
        videos: [
          {
            embedUrl: "https://www.youtube.com/embed/7vHqPRCFhpI",
            title: "Pharmacy Technology Overview",
            thumbnail:
              "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=800&h=500&fit=crop",
            duration: "9:58",
          },
        ],
      },
      {
        slug: "physio",
        name: "Physiotherapy",
        description: "Physical rehabilitation & therapeutic care",
        longDescription:
          "Develop skills in physical assessment, therapeutic exercises, electrotherapy, and rehabilitation for patients recovering from injury, surgery, or chronic conditions.",
        levels: ["ND", "BTS", "Licence"],
        duration: "1–3 years",
        category: "health",
        outcomes: [
          "Physiotherapist",
          "Rehabilitation Specialist",
          "Sports Therapist",
          "Occupational Therapist",
          "Physical Medicine Technician",
        ],
        modules: [
          "Musculoskeletal Therapy",
          "Neurological Rehabilitation",
          "Electrotherapy",
          "Exercise Therapy",
          "Sports Physiotherapy",
          "Pediatric Physiotherapy",
        ],
        images: [
          {
            url: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&h=500&fit=crop",
            alt: "Physiotherapy session",
            caption: "Rehabilitation and physiotherapy exercises",
          },
          {
            url: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=500&fit=crop",
            alt: "Sports therapy",
            caption: "Sports physiotherapy and injury recovery",
          },
          {
            url: "https://images.unsplash.com/photo-1544046345-346bc36d82b7?w=800&h=500&fit=crop",
            alt: "Electrotherapy",
            caption: "Electrotherapy and physical medicine equipment",
          },
        ],
        videos: [
          {
            embedUrl: "https://www.youtube.com/embed/0lNbBfSBSCc",
            title: "Physiotherapy Techniques",
            thumbnail:
              "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&h=500&fit=crop",
            duration: "11:30",
          },
        ],
      },
      {
        slug: "nutrition",
        name: "Nutrition & Dietetics",
        description: "Clinical nutrition, dietetics & food science",
        longDescription:
          "Study the science of human nutrition, therapeutic diets, food safety, and dietetic counseling for hospitals, public health, and food industry roles.",
        levels: ["ND", "BTS", "Licence"],
        duration: "1–3 years",
        badge: "new",
        category: "health",
        outcomes: [
          "Dietitian",
          "Nutritionist",
          "Food Safety Officer",
          "Public Health Nutritionist",
          "Clinical Nutrition Specialist",
        ],
        modules: [
          "Human Nutrition",
          "Clinical Dietetics",
          "Food Science",
          "Public Health Nutrition",
          "Food Safety & Hygiene",
          "Nutrition Counseling",
        ],
        images: [
          {
            url: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&h=500&fit=crop",
            alt: "Nutrition science",
            caption: "Clinical nutrition and dietetics study",
          },
          {
            url: "https://images.unsplash.com/photo-1532634922-8fe0b757fb13?w=800&h=500&fit=crop",
            alt: "Food science lab",
            caption: "Food science and nutritional analysis",
          },
          {
            url: "https://images.unsplash.com/photo-1505576399279-565b52d4ac71?w=800&h=500&fit=crop",
            alt: "Dietitian counseling",
            caption: "Nutritional counseling and diet planning",
          },
        ],
        videos: [
          {
            embedUrl: "https://www.youtube.com/embed/6oZjJVMxsMU",
            title: "Nutrition and Dietetics Fundamentals",
            thumbnail:
              "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&h=500&fit=crop",
            duration: "15:00",
          },
        ],
      },
      {
        slug: "dental",
        name: "Dental Therapy",
        description: "Oral health care & dental technology",
        longDescription:
          "Train in preventive dental care, oral health education, dental prosthetics, and clinical dental therapy procedures.",
        levels: ["ND", "BTS"],
        duration: "1–2 years",
        category: "health",
        outcomes: [
          "Dental Therapist",
          "Dental Technician",
          "Oral Health Educator",
          "Dental Nurse",
          "Prosthetist",
        ],
        modules: [
          "Oral Anatomy",
          "Preventive Dentistry",
          "Dental Materials",
          "Oral Pathology",
          "Dental Prosthetics",
          "Clinical Practice",
        ],
        images: [
          {
            url: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=800&h=500&fit=crop",
            alt: "Dental clinic",
            caption: "Dental therapy clinical training",
          },
          {
            url: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=800&h=500&fit=crop",
            alt: "Dental instruments",
            caption: "Clinical dental instruments and procedures",
          },
          {
            url: "https://images.unsplash.com/photo-1609864257613-bd6e7d6f2b10?w=800&h=500&fit=crop",
            alt: "Dental prosthetics",
            caption: "Dental prosthetics and restoration techniques",
          },
        ],
        videos: [
          {
            embedUrl: "https://www.youtube.com/embed/Y_LVlRSWkik",
            title: "Introduction to Dental Therapy",
            thumbnail:
              "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=800&h=500&fit=crop",
            duration: "8:40",
          },
        ],
      },
      {
        slug: "optometry",
        name: "Clinical Optometry",
        description: "Eye care, vision science & clinical optometry",
        longDescription:
          "Specialize in visual assessment, contact lens fitting, optical dispensing, and the management of common ocular conditions.",
        levels: ["ND", "BTS", "Licence"],
        duration: "1–3 years",
        category: "health",
        outcomes: [
          "Optometrist",
          "Optical Dispenser",
          "Vision Therapist",
          "Contact Lens Specialist",
          "Ophthalmic Technician",
        ],
        modules: [
          "Visual Science",
          "Refraction",
          "Contact Lens Practice",
          "Ocular Disease",
          "Optical Dispensing",
          "Low Vision Rehabilitation",
        ],
        images: [
          {
            url: "https://images.unsplash.com/photo-1574258495973-f010dfbb5371?w=800&h=500&fit=crop",
            alt: "Eye examination",
            caption: "Clinical optometry and vision testing",
          },
          {
            url: "https://images.unsplash.com/photo-1626447851957-d7fa96af4133?w=800&h=500&fit=crop",
            alt: "Contact lens fitting",
            caption: "Contact lens fitting and dispensing",
          },
          {
            url: "https://images.unsplash.com/photo-1583127370093-268e6e6fb81c?w=800&h=500&fit=crop",
            alt: "Optical dispensing",
            caption: "Optical dispensing and frame selection",
          },
        ],
        videos: [
          {
            embedUrl: "https://www.youtube.com/embed/jB5xMDqHuXY",
            title: "Optometry and Vision Care",
            thumbnail:
              "https://images.unsplash.com/photo-1574258495973-f010dfbb5371?w=800&h=500&fit=crop",
            duration: "10:22",
          },
        ],
      },
    ],
  },

  // ── Agriculture & Livestock ─────────────────────────────────────────────────
  {
    slug: "agriculture",
    name: "Agriculture & Livestock",
    description: "Agronomy, animal science, and agribusiness programs.",
    color: "success",
    sectionBadge: "ND / BTS / LICENCE",
    coverImage:
      "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&h=500&fit=crop",
    programs: [
      {
        slug: "food",
        name: "Food Technology",
        description: "Food processing, preservation & quality control",
        longDescription:
          "Learn industrial food processing, packaging, quality assurance, and food safety management for agro-industrial and consumer food sectors.",
        levels: ["ND", "BTS", "Licence"],
        duration: "1–3 years",
        badge: "demand",
        category: "agriculture",
        outcomes: [
          "Food Technologist",
          "Quality Control Officer",
          "Food Safety Inspector",
          "Processing Plant Manager",
          "Product Development Specialist",
        ],
        modules: [
          "Food Chemistry",
          "Food Processing",
          "Quality Assurance",
          "Food Safety & HACCP",
          "Packaging Technology",
          "Sensory Analysis",
        ],
        images: [
          {
            url: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=800&h=500&fit=crop",
            alt: "Food processing",
            caption: "Industrial food processing and production",
          },
          {
            url: "https://images.unsplash.com/photo-1532634922-8fe0b757fb13?w=800&h=500&fit=crop",
            alt: "Quality control",
            caption: "Food quality control and safety testing",
          },
          {
            url: "https://images.unsplash.com/photo-1603899965944-6de5ab397758?w=800&h=500&fit=crop",
            alt: "Food packaging",
            caption: "Food packaging and preservation techniques",
          },
        ],
        videos: [
          {
            embedUrl: "https://www.youtube.com/embed/PBhwFLQW-pU",
            title: "Food Technology and Processing",
            thumbnail:
              "https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=800&h=500&fit=crop",
            duration: "13:55",
          },
        ],
      },
      {
        slug: "animal",
        name: "Animal Production",
        description: "Livestock management & veterinary support",
        longDescription:
          "Study livestock breeding, feeding management, animal health, and veterinary support for poultry, cattle, pigs, and small ruminants.",
        levels: ["ND", "BTS"],
        duration: "1–2 years",
        category: "agriculture",
        outcomes: [
          "Livestock Farmer",
          "Animal Health Technician",
          "Veterinary Assistant",
          "Poultry Manager",
          "Zootechnician",
        ],
        modules: [
          "Animal Nutrition",
          "Livestock Breeding",
          "Animal Health & Disease",
          "Poultry Production",
          "Farm Management",
          "Veterinary Pharmacology",
        ],
        images: [
          {
            url: "https://images.unsplash.com/photo-1516467508483-a7212febe31a?w=800&h=500&fit=crop",
            alt: "Livestock farming",
            caption: "Livestock management and animal husbandry",
          },
          {
            url: "https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?w=800&h=500&fit=crop",
            alt: "Poultry farming",
            caption: "Poultry production and farm management",
          },
          {
            url: "https://images.unsplash.com/photo-1560493676-04071c5f467b?w=800&h=500&fit=crop",
            alt: "Veterinary care",
            caption: "Animal health monitoring and veterinary support",
          },
        ],
        videos: [
          {
            embedUrl: "https://www.youtube.com/embed/XHydcxVJfgM",
            title: "Livestock Production Essentials",
            thumbnail:
              "https://images.unsplash.com/photo-1516467508483-a7212febe31a?w=800&h=500&fit=crop",
            duration: "11:18",
          },
        ],
      },
      {
        slug: "agri-engineering",
        name: "Agricultural Engineering",
        description: "Agro-industrial systems & farm mechanization",
        longDescription:
          "Combine engineering principles with agricultural science to design and maintain farm machinery, irrigation systems, and agro-industrial equipment.",
        levels: ["ND", "BTS", "HND"],
        duration: "1–3 years",
        category: "agriculture",
        outcomes: [
          "Agricultural Engineer",
          "Farm Machinery Technician",
          "Irrigation Specialist",
          "Agro-Industrial Technician",
          "Rural Infrastructure Officer",
        ],
        modules: [
          "Farm Mechanization",
          "Irrigation & Drainage",
          "Agro-Industrial Equipment",
          "Soil Science",
          "Agricultural Structures",
          "Renewable Energy for Agriculture",
        ],
        images: [
          {
            url: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&h=500&fit=crop",
            alt: "Farm machinery",
            caption: "Farm mechanization and tractor operations",
          },
          {
            url: "https://images.unsplash.com/photo-1592982537447-7440770cbfc9?w=800&h=500&fit=crop",
            alt: "Irrigation systems",
            caption: "Irrigation system design and installation",
          },
          {
            url: "https://images.unsplash.com/photo-1560493676-04071c5f467b?w=800&h=500&fit=crop",
            alt: "Soil science",
            caption: "Soil science and land management",
          },
        ],
        videos: [
          {
            embedUrl: "https://www.youtube.com/embed/OOvIQcHGRoY",
            title: "Agricultural Engineering Overview",
            thumbnail:
              "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&h=500&fit=crop",
            duration: "14:30",
          },
        ],
      },
      {
        slug: "entrepreneurship",
        name: "Agro-Pastoral Entrepreneurship",
        description: "Agricultural business & rural entrepreneurship",
        longDescription:
          "Develop business skills tailored for agro-pastoral ventures, covering farm business planning, rural financing, cooperative management, and value chain development.",
        levels: ["ND", "BTS", "Licence"],
        duration: "1–3 years",
        badge: "new",
        category: "agriculture",
        outcomes: [
          "Farm Business Owner",
          "Agribusiness Manager",
          "Rural Development Officer",
          "Cooperative Manager",
          "Value Chain Analyst",
        ],
        modules: [
          "Agribusiness Management",
          "Rural Finance",
          "Cooperative Management",
          "Value Chain Development",
          "Business Planning",
          "Agricultural Marketing",
        ],
        images: [
          {
            url: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=800&h=500&fit=crop",
            alt: "Agribusiness",
            caption: "Agribusiness and rural entrepreneurship",
          },
          {
            url: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800&h=500&fit=crop",
            alt: "Farming cooperative",
            caption: "Cooperative farming and group management",
          },
          {
            url: "https://images.unsplash.com/photo-1488459716781-31db52582fe9?w=800&h=500&fit=crop",
            alt: "Agricultural market",
            caption: "Agricultural value chains and markets",
          },
        ],
        videos: [
          {
            embedUrl: "https://www.youtube.com/embed/XRVBKn5l3cU",
            title: "Agribusiness in Africa",
            thumbnail:
              "https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=800&h=500&fit=crop",
            duration: "16:20",
          },
        ],
      },
      {
        slug: "agronomy",
        name: "Plant Production (Agronomy)",
        description: "Crop science, soil management & agronomy",
        longDescription:
          "Master crop production techniques, soil fertility management, pest and disease control, and sustainable farming practices for tropical climates.",
        levels: ["ND", "BTS", "Licence"],
        duration: "1–3 years",
        category: "agriculture",
        outcomes: [
          "Agronomist",
          "Crop Production Officer",
          "Soil Scientist",
          "Extension Officer",
          "Plantation Manager",
        ],
        modules: [
          "Crop Science",
          "Soil Science & Fertility",
          "Plant Pathology",
          "Pest Management",
          "Irrigation Agronomy",
          "Sustainable Agriculture",
        ],
        images: [
          {
            url: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=800&h=500&fit=crop",
            alt: "Crop field",
            caption: "Tropical crop production and agronomy",
          },
          {
            url: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=800&h=500&fit=crop",
            alt: "Soil and seeds",
            caption: "Soil fertility management and seed planting",
          },
          {
            url: "https://images.unsplash.com/photo-1595273670150-bd0c3c392e46?w=800&h=500&fit=crop",
            alt: "Crop protection",
            caption: "Integrated pest and disease management",
          },
        ],
        videos: [
          {
            embedUrl: "https://www.youtube.com/embed/IgGAtRWOMuc",
            title: "Tropical Agronomy Fundamentals",
            thumbnail:
              "https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=800&h=500&fit=crop",
            duration: "12:00",
          },
        ],
      },
      {
        slug: "management",
        name: "Farm Management",
        description: "Agricultural management techniques & rural planning",
        longDescription:
          "Learn to plan, organize, and manage agricultural operations efficiently, covering budgeting, record keeping, land use planning, and rural development.",
        levels: ["ND", "BTS"],
        duration: "1–2 years",
        category: "agriculture",
        outcomes: [
          "Farm Manager",
          "Agricultural Extension Officer",
          "Rural Planner",
          "Agro-Advisory Officer",
          "Land Use Planner",
        ],
        modules: [
          "Farm Planning",
          "Agricultural Economics",
          "Record Keeping",
          "Land Use Management",
          "Rural Development",
          "Agricultural Policy",
        ],
        images: [
          {
            url: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&h=500&fit=crop",
            alt: "Farm aerial view",
            caption: "Farm planning and land management",
          },
          {
            url: "https://images.unsplash.com/photo-1560493676-04071c5f467b?w=800&h=500&fit=crop",
            alt: "Rural development",
            caption: "Rural development and extension services",
          },
        ],
        videos: [
          {
            embedUrl: "https://www.youtube.com/embed/1mS_yPnroCs",
            title: "Farm Business Management",
            thumbnail:
              "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&h=500&fit=crop",
            duration: "10:45",
          },
        ],
      },
    ],
  },

  // ── Education ───────────────────────────────────────────────────────────────
  {
    slug: "education",
    name: "Education",
    description: "Teacher training and educational administration programs.",
    color: "blue",
    sectionBadge: "CAPIEMP / CAPIET / MASTER",
    coverImage:
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&h=500&fit=crop",
    programs: [
      {
        slug: "didactics",
        name: "Didactics & Teaching",
        description: "Teaching methods, curriculum development & pedagogy",
        longDescription:
          "Train to become a skilled educator with expertise in lesson planning, curriculum design, classroom management, and pedagogical approaches for primary and secondary levels.",
        levels: ["CAPIEMP", "CAPIET", "Master"],
        duration: "1–3 years",
        badge: "popular",
        category: "education",
        outcomes: [
          "Primary School Teacher",
          "Secondary School Teacher",
          "Curriculum Developer",
          "Instructional Designer",
          "Education Trainer",
        ],
        modules: [
          "Pedagogy",
          "Curriculum Design",
          "Lesson Planning",
          "Classroom Management",
          "Educational Psychology",
          "Assessment & Evaluation",
        ],
        images: [
          {
            url: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=800&h=500&fit=crop",
            alt: "Teacher in classroom",
            caption: "Classroom teaching and pedagogy training",
          },
          {
            url: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&h=500&fit=crop",
            alt: "Curriculum planning",
            caption: "Curriculum design and lesson planning",
          },
          {
            url: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&h=500&fit=crop",
            alt: "Students learning",
            caption: "Interactive classroom teaching methods",
          },
          {
            url: "https://images.unsplash.com/photo-1588072432836-e10032774350?w=800&h=500&fit=crop",
            alt: "Assessment",
            caption: "Student assessment and evaluation techniques",
          },
        ],
        videos: [
          {
            embedUrl: "https://www.youtube.com/embed/qTMNf3yzGOE",
            title: "Modern Teaching Methods",
            thumbnail:
              "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=800&h=500&fit=crop",
            duration: "14:50",
          },
          {
            embedUrl: "https://www.youtube.com/embed/sCVD-IbAFsI",
            title: "Curriculum Design Essentials",
            thumbnail:
              "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&h=500&fit=crop",
            duration: "11:25",
          },
        ],
      },
      {
        slug: "guidance",
        name: "Career Guidance & Counseling",
        description: "Orientation, professional studies & student counseling",
        longDescription:
          "Specialize in student orientation, career counseling, psycho-social support, and vocational guidance for educational institutions.",
        levels: ["CAPIEMP", "Master"],
        duration: "1–3 years",
        category: "education",
        outcomes: [
          "School Counselor",
          "Career Advisor",
          "Student Welfare Officer",
          "Vocational Guidance Specialist",
          "Youth Development Officer",
        ],
        modules: [
          "Counseling Theory",
          "Career Development",
          "Psycho-Social Support",
          "Vocational Guidance",
          "Communication Skills",
          "Case Management",
        ],
        images: [
          {
            url: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&h=500&fit=crop",
            alt: "Counseling session",
            caption: "Career guidance and student counseling",
          },
          {
            url: "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=800&h=500&fit=crop",
            alt: "Career advice",
            caption: "Career orientation and job placement support",
          },
          {
            url: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&h=500&fit=crop",
            alt: "Youth mentoring",
            caption: "Youth development and psycho-social support",
          },
        ],
        videos: [
          {
            embedUrl: "https://www.youtube.com/embed/FQiMd_YmXIQ",
            title: "Career Guidance Techniques",
            thumbnail:
              "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&h=500&fit=crop",
            duration: "9:30",
          },
        ],
      },
      {
        slug: "administration",
        name: "Educational Administration",
        description: "School management & educational governance",
        longDescription:
          "Develop leadership and management competencies for running educational institutions, covering governance, HR management, finance, and policy implementation.",
        levels: ["CAPIEMP", "Master"],
        duration: "1–3 years",
        badge: "demand",
        category: "education",
        outcomes: [
          "School Principal",
          "Education Administrator",
          "Academic Registrar",
          "Education Policy Officer",
          "District Education Officer",
        ],
        modules: [
          "School Administration",
          "Educational Leadership",
          "HR in Education",
          "School Finance",
          "Education Law & Policy",
          "Quality Assurance",
        ],
        images: [
          {
            url: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=500&fit=crop",
            alt: "School administration",
            caption: "Educational leadership and school management",
          },
          {
            url: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=500&fit=crop",
            alt: "Leadership meeting",
            caption: "Educational governance and institutional management",
          },
        ],
        videos: [
          {
            embedUrl: "https://www.youtube.com/embed/lmyZMtPVodo",
            title: "Educational Leadership and Administration",
            thumbnail:
              "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=500&fit=crop",
            duration: "13:15",
          },
        ],
      },
      {
        slug: "professional",
        name: "Professional Education Studies",
        description: "Professional training & workplace education",
        longDescription:
          "Focus on adult learning, workplace training, vocational education, and professional development program design and delivery.",
        levels: ["CAPIET", "Master"],
        duration: "1–3 years",
        category: "education",
        outcomes: [
          "Corporate Trainer",
          "Vocational Instructor",
          "Training Coordinator",
          "L&D Specialist",
          "TVET Educator",
        ],
        modules: [
          "Adult Learning Theory",
          "Training Design",
          "Vocational Education",
          "E-Learning Development",
          "Performance Management",
          "Training Evaluation",
        ],
        images: [
          {
            url: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=500&fit=crop",
            alt: "Professional training",
            caption: "Workplace training and professional development",
          },
          {
            url: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=500&fit=crop",
            alt: "E-learning",
            caption: "E-learning and digital training delivery",
          },
          {
            url: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=800&h=500&fit=crop",
            alt: "Vocational training",
            caption: "Vocational and technical skills training",
          },
        ],
        videos: [
          {
            embedUrl: "https://www.youtube.com/embed/RHxJCFbWCuY",
            title: "Professional Education Design",
            thumbnail:
              "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=500&fit=crop",
            duration: "12:40",
          },
        ],
      },
      {
        slug: "sciences",
        name: "Educational Sciences",
        description: "Research, educational psychology & learning theory",
        longDescription:
          "Explore the scientific foundations of education through research methodology, educational psychology, cognitive development, and learning theory.",
        levels: ["Master"],
        duration: "2 years",
        badge: "new",
        category: "education",
        outcomes: [
          "Education Researcher",
          "Academic",
          "Policy Analyst",
          "Educational Psychologist",
          "Curriculum Specialist",
        ],
        modules: [
          "Research Methods",
          "Educational Psychology",
          "Cognitive Development",
          "Learning Theory",
          "Statistics in Education",
          "Thesis Research",
        ],
        images: [
          {
            url: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=800&h=500&fit=crop",
            alt: "Educational research",
            caption: "Educational research and academic study",
          },
          {
            url: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&h=500&fit=crop",
            alt: "Educational psychology",
            caption: "Educational psychology and cognitive development",
          },
        ],
        videos: [
          {
            embedUrl: "https://www.youtube.com/embed/pbFVKS6P3KM",
            title: "Educational Research Methods",
            thumbnail:
              "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=800&h=500&fit=crop",
            duration: "18:00",
          },
        ],
      },
    ],
  },

  // ── Tourism & Hospitality ───────────────────────────────────────────────────
  {
    slug: "hospitality",
    name: "Tourism & Hospitality",
    description: "Hotel management, culinary arts, and tourism programs.",
    color: "warning",
    sectionBadge: "ND / BTS / LICENCE",
    coverImage:
      "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800&h=500&fit=crop",
    programs: [
      {
        slug: "bakery",
        name: "Bakery & Food Production",
        description: "Baking, culinary arts & food production management",
        longDescription:
          "Train in artisan baking, pastry arts, food production management, and culinary techniques for restaurants, hotels, and food production companies.",
        levels: ["ND", "BTS"],
        duration: "1–2 years",
        badge: "popular",
        category: "hospitality",
        outcomes: [
          "Baker",
          "Pastry Chef",
          "Food Production Supervisor",
          "Culinary Instructor",
          "Catering Manager",
        ],
        modules: [
          "Baking Fundamentals",
          "Pastry & Confectionery",
          "Food Production",
          "Kitchen Management",
          "Food Safety",
          "Menu Planning",
        ],
        images: [
          {
            url: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800&h=500&fit=crop",
            alt: "Bakery and pastry",
            caption: "Artisan bread and pastry production",
          },
          {
            url: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=800&h=500&fit=crop",
            alt: "Professional kitchen",
            caption: "Professional kitchen management and operations",
          },
          {
            url: "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=800&h=500&fit=crop",
            alt: "Cake decoration",
            caption: "Confectionery arts and cake decoration",
          },
          {
            url: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=800&h=500&fit=crop",
            alt: "Food plating",
            caption: "Food presentation and plating techniques",
          },
        ],
        videos: [
          {
            embedUrl: "https://www.youtube.com/embed/RiNAFf2fAXk",
            title: "Artisan Baking Fundamentals",
            thumbnail:
              "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800&h=500&fit=crop",
            duration: "16:10",
          },
          {
            embedUrl: "https://www.youtube.com/embed/9zJTZIHFhNQ",
            title: "Pastry Arts and Confectionery",
            thumbnail:
              "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=800&h=500&fit=crop",
            duration: "12:30",
          },
        ],
      },
      {
        slug: "hotel",
        name: "Hotel & Restaurant Management",
        description: "Hospitality management & restaurant operations",
        longDescription:
          "Master the operations of hotels and restaurants including front office management, food & beverage service, revenue management, and guest experience.",
        levels: ["ND", "BTS", "Licence"],
        duration: "1–3 years",
        badge: "demand",
        category: "hospitality",
        outcomes: [
          "Hotel Manager",
          "Restaurant Manager",
          "Front Office Manager",
          "Food & Beverage Manager",
          "Events Coordinator",
        ],
        modules: [
          "Front Office Operations",
          "Food & Beverage Service",
          "Housekeeping Management",
          "Revenue Management",
          "Guest Relations",
          "Events Management",
        ],
        images: [
          {
            url: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800&h=500&fit=crop",
            alt: "Hotel lobby",
            caption: "Hotel front office and guest services",
          },
          {
            url: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&h=500&fit=crop",
            alt: "Restaurant service",
            caption: "Restaurant and food & beverage management",
          },
          {
            url: "https://images.unsplash.com/photo-1505236858219-8359eb29e329?w=800&h=500&fit=crop",
            alt: "Event management",
            caption: "Events and conference management",
          },
          {
            url: "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=800&h=500&fit=crop",
            alt: "Housekeeping",
            caption: "Housekeeping operations and standards",
          },
        ],
        videos: [
          {
            embedUrl: "https://www.youtube.com/embed/Q2_YYFVWv8Y",
            title: "Hotel Management Operations",
            thumbnail:
              "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800&h=500&fit=crop",
            duration: "17:45",
          },
        ],
      },
      {
        slug: "fashion",
        name: "Fashion & Textile",
        description: "Fashion design, garment making & textile technology",
        longDescription:
          "Develop skills in fashion design, pattern making, garment construction, textile selection, and fashion business management.",
        levels: ["ND", "BTS"],
        duration: "1–2 years",
        category: "hospitality",
        outcomes: [
          "Fashion Designer",
          "Garment Maker",
          "Textile Technician",
          "Costume Designer",
          "Fashion Entrepreneur",
        ],
        modules: [
          "Fashion Design",
          "Pattern Making",
          "Garment Construction",
          "Textile Science",
          "Fashion Illustration",
          "Fashion Business",
        ],
        images: [
          {
            url: "https://images.unsplash.com/photo-1558769132-cb1aea1f1d42?w=800&h=500&fit=crop",
            alt: "Fashion design studio",
            caption: "Fashion design and pattern making studio",
          },
          {
            url: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=800&h=500&fit=crop",
            alt: "Garment construction",
            caption: "Garment construction and sewing techniques",
          },
          {
            url: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&h=500&fit=crop",
            alt: "Fashion illustration",
            caption: "Fashion illustration and design sketching",
          },
          {
            url: "https://images.unsplash.com/photo-1591370874773-6702e8f12fd8?w=800&h=500&fit=crop",
            alt: "Textiles",
            caption: "Textile science and material selection",
          },
        ],
        videos: [
          {
            embedUrl: "https://www.youtube.com/embed/XvHrHHM3CYQ",
            title: "Fashion Design Fundamentals",
            thumbnail:
              "https://images.unsplash.com/photo-1558769132-cb1aea1f1d42?w=800&h=500&fit=crop",
            duration: "14:22",
          },
        ],
      },
      {
        slug: "tourism",
        name: "Travel & Tourism Agency",
        description: "Tourism operations, travel management & guiding",
        longDescription:
          "Learn travel agency operations, tour guiding, destination management, and tourism marketing to work in Cameroon's growing tourism sector.",
        levels: ["ND", "BTS", "Licence"],
        duration: "1–3 years",
        badge: "new",
        category: "hospitality",
        outcomes: [
          "Travel Agent",
          "Tour Guide",
          "Tourism Officer",
          "Destination Manager",
          "Event Planner",
        ],
        modules: [
          "Tourism Principles",
          "Travel Agency Operations",
          "Tour Guiding",
          "Destination Management",
          "Tourism Marketing",
          "Eco-Tourism",
        ],
        images: [
          {
            url: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&h=500&fit=crop",
            alt: "Tourism in Cameroon",
            caption: "Cameroon's rich tourism landscape",
          },
          {
            url: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&h=500&fit=crop",
            alt: "Travel agency",
            caption: "Travel agency operations and booking systems",
          },
          {
            url: "https://images.unsplash.com/photo-1528543606781-2f6e6857f318?w=800&h=500&fit=crop",
            alt: "Tour guiding",
            caption: "Professional tour guiding and destination management",
          },
          {
            url: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=800&h=500&fit=crop",
            alt: "Eco-tourism",
            caption: "Eco-tourism and wildlife tourism management",
          },
        ],
        videos: [
          {
            embedUrl: "https://www.youtube.com/embed/pVTmAaFVVEM",
            title: "Tourism and Travel Management",
            thumbnail:
              "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&h=500&fit=crop",
            duration: "10:55",
          },
        ],
      },
    ],
  },

  // ── Other Professional ──────────────────────────────────────────────────────
  {
    slug: "other",
    name: "Other Professional",
    description: "Specialized technical and professional programs.",
    color: "red",
    sectionBadge: "ND / BTS / LICENCE",
    coverImage:
      "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&h=500&fit=crop",
    programs: [
      {
        slug: "mechanical",
        name: "Mechanical Engineering",
        description: "Mechanical systems, maintenance & production",
        longDescription:
          "Study mechanical engineering principles including thermodynamics, machine design, manufacturing processes, and industrial maintenance.",
        levels: ["ND", "BTS", "HND"],
        duration: "1–3 years",
        category: "other",
        outcomes: [
          "Mechanical Technician",
          "Maintenance Engineer",
          "Production Supervisor",
          "Quality Control Inspector",
          "Industrial Technician",
        ],
        modules: [
          "Engineering Mechanics",
          "Thermodynamics",
          "Machine Design",
          "Manufacturing Processes",
          "Industrial Maintenance",
          "CAD/CAM",
        ],
        images: [
          {
            url: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&h=500&fit=crop",
            alt: "Mechanical workshop",
            caption: "Mechanical engineering workshop training",
          },
          {
            url: "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=800&h=500&fit=crop",
            alt: "Manufacturing",
            caption: "Machine operation and manufacturing processes",
          },
          {
            url: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=800&h=500&fit=crop",
            alt: "CAD design",
            caption: "CAD/CAM design and engineering drawing",
          },
        ],
        videos: [
          {
            embedUrl: "https://www.youtube.com/embed/oNq7KVtXaFI",
            title: "Mechanical Engineering Fundamentals",
            thumbnail:
              "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&h=500&fit=crop",
            duration: "15:20",
          },
        ],
      },
      {
        slug: "petroleum",
        name: "Petroleum Engineering",
        description: "Petroleum technology & mining engineering",
        longDescription:
          "Gain technical knowledge of petroleum exploration, drilling operations, production engineering, and mining technology relevant to Cameroon's energy sector.",
        levels: ["ND", "BTS", "HND"],
        duration: "1–3 years",
        badge: "demand",
        category: "other",
        outcomes: [
          "Petroleum Technician",
          "Drilling Engineer",
          "Reservoir Analyst",
          "HSE Officer",
          "Mining Technician",
        ],
        modules: [
          "Petroleum Geology",
          "Drilling Technology",
          "Production Engineering",
          "Reservoir Engineering",
          "HSE Management",
          "Petroleum Economics",
        ],
        images: [
          {
            url: "https://images.unsplash.com/photo-1541844053589-346841d0b34c?w=800&h=500&fit=crop",
            alt: "Oil rig",
            caption: "Petroleum drilling and extraction operations",
          },
          {
            url: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=800&h=500&fit=crop",
            alt: "Oil refinery",
            caption: "Petroleum refinery and processing plant",
          },
          {
            url: "https://images.unsplash.com/photo-1515162816999-a0c47dc192f7?w=800&h=500&fit=crop",
            alt: "Mining safety",
            caption: "HSE management in petroleum and mining",
          },
        ],
        videos: [
          {
            embedUrl: "https://www.youtube.com/embed/UzCQDEAJzuE",
            title: "Introduction to Petroleum Engineering",
            thumbnail:
              "https://images.unsplash.com/photo-1541844053589-346841d0b34c?w=800&h=500&fit=crop",
            duration: "13:40",
          },
        ],
      },
      {
        slug: "legal",
        name: "Legal Careers",
        description: "Law, legal practice & judicial administration",
        longDescription:
          "Study Cameroonian and OHADA law, legal drafting, judicial procedures, and professional ethics for careers in law firms, courts, and corporate legal departments.",
        levels: ["ND", "BTS", "Licence"],
        duration: "1–3 years",
        badge: "prestige",
        category: "other",
        outcomes: [
          "Legal Assistant",
          "Paralegal",
          "Court Clerk",
          "Legal Officer",
          "Compliance Officer",
        ],
        modules: [
          "Constitutional Law",
          "OHADA Business Law",
          "Civil Procedure",
          "Criminal Law",
          "Legal Drafting",
          "Professional Ethics",
        ],
        images: [
          {
            url: "https://images.unsplash.com/photo-1505664194779-8beaceb93744?w=800&h=500&fit=crop",
            alt: "Law library",
            caption: "Legal studies and jurisprudence",
          },
          {
            url: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&h=500&fit=crop",
            alt: "Courthouse",
            caption: "Judicial procedures and court practice",
          },
          {
            url: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&h=500&fit=crop",
            alt: "Legal documents",
            caption: "Legal drafting and contract management",
          },
          {
            url: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&h=500&fit=crop",
            alt: "Compliance",
            caption: "Corporate law and compliance practice",
          },
        ],
        videos: [
          {
            embedUrl: "https://www.youtube.com/embed/MYnFbGpF3tY",
            title: "Introduction to OHADA Business Law",
            thumbnail:
              "https://images.unsplash.com/photo-1505664194779-8beaceb93744?w=800&h=500&fit=crop",
            duration: "11:55",
          },
          {
            embedUrl: "https://www.youtube.com/embed/9A6QHAGoNqA",
            title: "Legal Drafting and Documentation",
            thumbnail:
              "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&h=500&fit=crop",
            duration: "9:20",
          },
        ],
      },
      {
        slug: "communication",
        name: "Communication",
        description: "Media, communication & public relations",
        longDescription:
          "Build expertise in journalism, public relations, corporate communication, social media management, and media production.",
        levels: ["ND", "BTS", "Licence"],
        duration: "1–3 years",
        badge: "new",
        category: "other",
        outcomes: [
          "Journalist",
          "PR Officer",
          "Communication Manager",
          "Social Media Specialist",
          "Media Producer",
        ],
        modules: [
          "Media Writing",
          "Public Relations",
          "Corporate Communication",
          "Social Media Management",
          "Broadcast Journalism",
          "Crisis Communication",
        ],
        images: [
          {
            url: "https://images.unsplash.com/photo-1495020689067-958852a7765e?w=800&h=500&fit=crop",
            alt: "Journalism",
            caption: "Broadcast journalism and media production",
          },
          {
            url: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&h=500&fit=crop",
            alt: "Public relations",
            caption: "Public relations and corporate communication",
          },
          {
            url: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=500&fit=crop",
            alt: "Social media",
            caption: "Social media management and content creation",
          },
          {
            url: "https://images.unsplash.com/photo-1598550476439-6847785fcea6?w=800&h=500&fit=crop",
            alt: "Broadcast studio",
            caption: "Radio and podcast production studio",
          },
        ],
        videos: [
          {
            embedUrl: "https://www.youtube.com/embed/bxpDKZ3K4Hw",
            title: "Media and Communication Fundamentals",
            thumbnail:
              "https://images.unsplash.com/photo-1495020689067-958852a7765e?w=800&h=500&fit=crop",
            duration: "10:08",
          },
        ],
      },
      {
        slug: "electronics",
        name: "Electronic Engineering",
        description: "Electronic systems, circuits & instrumentation",
        longDescription:
          "Study electronic circuit design, embedded systems, instrumentation, and industrial electronics for manufacturing and telecommunications industries.",
        levels: ["ND", "BTS", "HND"],
        duration: "1–3 years",
        category: "other",
        outcomes: [
          "Electronics Technician",
          "Embedded Systems Engineer",
          "Instrumentation Technician",
          "Automation Engineer",
          "R&D Technician",
        ],
        modules: [
          "Electronic Circuits",
          "Digital Electronics",
          "Embedded Systems",
          "Instrumentation",
          "PCB Design",
          "Industrial Electronics",
        ],
        images: [
          {
            url: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=500&fit=crop",
            alt: "Electronics lab",
            caption: "Electronic circuit design and testing lab",
          },
          {
            url: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&h=500&fit=crop",
            alt: "Embedded systems",
            caption: "Embedded systems and microcontroller programming",
          },
          {
            url: "https://images.unsplash.com/photo-1581093450021-4a7360e9a6b5?w=800&h=500&fit=crop",
            alt: "PCB design",
            caption: "PCB design and soldering techniques",
          },
        ],
        videos: [
          {
            embedUrl: "https://www.youtube.com/embed/nb_CPQdN71w",
            title: "Electronic Engineering Basics",
            thumbnail:
              "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=500&fit=crop",
            duration: "14:35",
          },
        ],
      },
    ],
  },

  // ── CQP / DQP Short Courses ─────────────────────────────────────────────────
  {
    slug: "cqp",
    name: "CQP / DQP Short Courses",
    description:
      "Short professional qualification courses for fast-tracked employment.",
    color: "success",
    sectionBadge: "CQP / DQP / AQP",
    coverImage:
      "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&h=500&fit=crop",
    programs: [
      {
        slug: "secretarial",
        name: "Secretarial & Office Work",
        description: "Office management, typing & administrative support",
        longDescription:
          "Fast-track training in office administration, professional typing, document management, and executive assistance skills.",
        levels: ["CQP", "DQP"],
        duration: "3–6 months",
        badge: "popular",
        category: "cqp",
        outcomes: [
          "Office Administrator",
          "Executive Secretary",
          "Receptionist",
          "Data Entry Clerk",
          "Administrative Assistant",
        ],
        modules: [
          "Typing & Word Processing",
          "Office Management",
          "Business Correspondence",
          "Filing Systems",
          "Computer Basics",
          "Professional Communication",
        ],
        images: [
          {
            url: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=500&fit=crop",
            alt: "Office administration",
            caption: "Professional office administration training",
          },
          {
            url: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=800&h=500&fit=crop",
            alt: "Typing skills",
            caption: "Typing speed and word processing skills",
          },
          {
            url: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=800&h=500&fit=crop",
            alt: "Document management",
            caption: "Document filing and office organization",
          },
        ],
        videos: [
          {
            embedUrl: "https://www.youtube.com/embed/q0M-f4G8bLI",
            title: "Office Administration Skills",
            thumbnail:
              "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=500&fit=crop",
            duration: "8:15",
          },
        ],
      },
      {
        slug: "accounting",
        name: "Computerized Accounting",
        description: "Digital bookkeeping & accounting software",
        longDescription:
          "Learn digital bookkeeping using accounting software packages widely used in Cameroonian businesses, including payroll and tax filing.",
        levels: ["CQP", "DQP"],
        duration: "3–6 months",
        badge: "demand",
        category: "cqp",
        outcomes: [
          "Bookkeeper",
          "Accounting Clerk",
          "Payroll Officer",
          "Accounts Assistant",
          "Tax Preparer",
        ],
        modules: [
          "Accounting Software (Sage, QuickBooks)",
          "Bookkeeping",
          "Payroll Processing",
          "Tax Filing",
          "Financial Reporting",
          "Excel for Accounting",
        ],
        images: [
          {
            url: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop",
            alt: "Computerized accounting",
            caption: "Digital bookkeeping and accounting software",
          },
          {
            url: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop",
            alt: "Excel for accounting",
            caption: "Excel and spreadsheet-based financial reporting",
          },
          {
            url: "https://images.unsplash.com/photo-1554224311-beee2c446136?w=800&h=500&fit=crop",
            alt: "Payroll processing",
            caption: "Payroll processing and employee records",
          },
        ],
        videos: [
          {
            embedUrl: "https://www.youtube.com/embed/K_pu1rNnmIE",
            title: "Computerized Accounting with Sage",
            thumbnail:
              "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop",
            duration: "11:00",
          },
        ],
      },
      {
        slug: "graphics",
        name: "Graphics & Web Design",
        description: "Graphic design, web development & digital media",
        longDescription:
          "Practical short course in graphic design tools, web development basics, social media content creation, and digital marketing materials.",
        levels: ["CQP", "DQP"],
        duration: "3–6 months",
        category: "cqp",
        outcomes: [
          "Graphic Designer",
          "Web Designer",
          "Social Media Designer",
          "Print Designer",
          "Freelance Creative",
        ],
        modules: [
          "Adobe Photoshop",
          "Adobe Illustrator",
          "Web Design Basics",
          "Social Media Graphics",
          "Print Design",
          "Portfolio Development",
        ],
        images: [
          {
            url: "https://images.unsplash.com/photo-1626785774625-ddcddc3445e9?w=800&h=500&fit=crop",
            alt: "Graphic design",
            caption: "Graphic design and digital creative tools",
          },
          {
            url: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=500&fit=crop",
            alt: "Web design",
            caption: "Web design and UI mockup creation",
          },
          {
            url: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=500&fit=crop",
            alt: "Print design",
            caption: "Print design and brand identity creation",
          },
        ],
        videos: [
          {
            embedUrl: "https://www.youtube.com/embed/D1dGRDCU4HA",
            title: "Graphic Design with Adobe Tools",
            thumbnail:
              "https://images.unsplash.com/photo-1626785774625-ddcddc3445e9?w=800&h=500&fit=crop",
            duration: "9:45",
          },
        ],
      },
      {
        slug: "maintenance",
        name: "Computer Maintenance",
        description: "PC hardware maintenance & repair techniques",
        longDescription:
          "Hands-on training in PC assembly, hardware diagnostics, OS installation, virus removal, and preventive maintenance.",
        levels: ["CQP", "DQP"],
        duration: "3–6 months",
        category: "cqp",
        outcomes: [
          "PC Technician",
          "IT Support Specialist",
          "Hardware Repair Technician",
          "Computer Sales Advisor",
          "IT Freelancer",
        ],
        modules: [
          "PC Assembly",
          "Hardware Diagnostics",
          "OS Installation",
          "Virus & Malware Removal",
          "Networking Basics",
          "Preventive Maintenance",
        ],
        images: [
          {
            url: "https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?w=800&h=500&fit=crop",
            alt: "Computer repair",
            caption: "PC hardware repair and maintenance training",
          },
          {
            url: "https://images.unsplash.com/photo-1593640408182-31c70c8268f5?w=800&h=500&fit=crop",
            alt: "Laptop repair",
            caption: "Laptop disassembly and component replacement",
          },
          {
            url: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=800&h=500&fit=crop",
            alt: "OS installation",
            caption: "Operating system installation and configuration",
          },
        ],
        videos: [
          {
            embedUrl: "https://www.youtube.com/embed/S1PzMDRXVgI",
            title: "PC Maintenance and Repair Guide",
            thumbnail:
              "https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?w=800&h=500&fit=crop",
            duration: "20:10",
          },
        ],
      },
      {
        slug: "cctv",
        name: "CCTV & Surveillance Installation",
        description: "Security camera installation & monitoring systems",
        longDescription:
          "Learn to install, configure, and maintain CCTV surveillance systems, access control, and security monitoring for residential and commercial premises.",
        levels: ["CQP", "AQP"],
        duration: "3–6 months",
        badge: "new",
        category: "cqp",
        outcomes: [
          "CCTV Installer",
          "Security Systems Technician",
          "Surveillance Operator",
          "Access Control Installer",
          "Security Consultant",
        ],
        modules: [
          "CCTV Systems Overview",
          "Camera Installation",
          "DVR/NVR Configuration",
          "Access Control Systems",
          "Network Video Systems",
          "Security Monitoring",
        ],
        images: [
          {
            url: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=800&h=500&fit=crop",
            alt: "CCTV installation",
            caption: "Security camera installation and setup",
          },
          {
            url: "https://images.unsplash.com/photo-1558002038-1055907df827?w=800&h=500&fit=crop",
            alt: "Security monitoring",
            caption: "CCTV monitoring room and DVR configuration",
          },
          {
            url: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=800&h=500&fit=crop",
            alt: "Access control",
            caption: "Access control system installation",
          },
        ],
        videos: [
          {
            embedUrl: "https://www.youtube.com/embed/0bnFhFRTQAY",
            title: "CCTV Installation Guide",
            thumbnail:
              "https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=800&h=500&fit=crop",
            duration: "18:25",
          },
        ],
      },
      {
        slug: "satellite",
        name: "Satellite Dish Installation",
        description: "Parabolic antenna installation & satellite systems",
        longDescription:
          "Technical training in satellite dish alignment, receiver configuration, signal measurement, and maintenance of satellite TV and internet systems.",
        levels: ["CQP", "AQP"],
        duration: "2–4 months",
        category: "cqp",
        outcomes: [
          "Satellite Installer",
          "Antenna Technician",
          "Satellite Systems Technician",
          "VSAT Installer",
          "Broadcast Technician",
        ],
        modules: [
          "Satellite Fundamentals",
          "Dish Alignment",
          "Receiver Configuration",
          "Signal Measurement",
          "VSAT Systems",
          "Fault Finding & Repair",
        ],
        images: [
          {
            url: "https://images.unsplash.com/photo-1533159124895-90536ce6de40?w=800&h=500&fit=crop",
            alt: "Satellite dish",
            caption: "Satellite dish installation and alignment",
          },
          {
            url: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=500&fit=crop",
            alt: "Signal measurement",
            caption: "Signal strength measurement and optimization",
          },
          {
            url: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&h=500&fit=crop",
            alt: "VSAT internet",
            caption: "VSAT satellite internet systems",
          },
        ],
        videos: [
          {
            embedUrl: "https://www.youtube.com/embed/mj7APiAlQWg",
            title: "Satellite Dish Installation Tutorial",
            thumbnail:
              "https://images.unsplash.com/photo-1533159124895-90536ce6de40?w=800&h=500&fit=crop",
            duration: "15:55",
          },
        ],
      },
      {
        slug: "solar",
        name: "Solar Energy Installation",
        description: "Solar panel installation & renewable energy systems",
        longDescription:
          "Hands-on training in solar panel installation, battery systems, inverters, and off-grid/hybrid energy solutions for homes and businesses.",
        levels: ["CQP", "AQP"],
        duration: "3–6 months",
        badge: "demand",
        category: "cqp",
        outcomes: [
          "Solar Installer",
          "Renewable Energy Technician",
          "Solar System Designer",
          "Energy Auditor",
          "Green Energy Entrepreneur",
        ],
        modules: [
          "Solar Energy Fundamentals",
          "Panel Installation",
          "Battery & Inverter Systems",
          "Off-Grid Design",
          "Grid-Tie Systems",
          "System Maintenance",
        ],
        images: [
          {
            url: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&h=500&fit=crop",
            alt: "Solar panel installation",
            caption: "Solar panel installation and commissioning",
          },
          {
            url: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=800&h=500&fit=crop",
            alt: "Battery storage",
            caption: "Battery and inverter system setup",
          },
          {
            url: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&h=500&fit=crop",
            alt: "Off-grid solar",
            caption: "Off-grid solar energy for rural communities",
          },
          {
            url: "https://images.unsplash.com/photo-1497440001374-f26997328c1b?w=800&h=500&fit=crop",
            alt: "Solar technician",
            caption: "Rooftop solar installation techniques",
          },
        ],
        videos: [
          {
            embedUrl: "https://www.youtube.com/embed/vOFPoqp2q9I",
            title: "Solar Panel Installation Guide",
            thumbnail:
              "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&h=500&fit=crop",
            duration: "21:15",
          },
          {
            embedUrl: "https://www.youtube.com/embed/iamJJSMiCVc",
            title: "Off-Grid Solar Systems Explained",
            thumbnail:
              "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=800&h=500&fit=crop",
            duration: "14:40",
          },
        ],
      },
    ],
  },
];

// ─── Helpers ──────────────────────────────────────────────────────────────────

export function getCategoryBySlug(slug: string): ProgramCategory | undefined {
  return PROGRAM_CATEGORIES.find((c) => c.slug === slug);
}

export function getProgramBySlug(
  categorySlug: string,
  programSlug: string,
): Program | undefined {
  return getCategoryBySlug(categorySlug)?.programs.find(
    (p) => p.slug === programSlug,
  );
}

export function getAllPrograms(): Program[] {
  return PROGRAM_CATEGORIES.flatMap((c) => c.programs);
}

export function getProgramsByBadge(badge: ProgramBadge): Program[] {
  return getAllPrograms().filter((p) => p.badge === badge);
}

export function getProgramsByLevel(level: ProgramLevel): Program[] {
  return getAllPrograms().filter((p) => p.levels.includes(level));
}
