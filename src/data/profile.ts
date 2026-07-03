// ─── EDIT THIS FILE to update your portfolio ───────────────────────────────
// All sections of the page are driven from the data below.

export const profile = {
  name: "Puneeth Babu S",           // ← fill in
  title: "Senior Software Engineer",
  tagline: "Building scalable microservices, secure data pipelines, and enterprise-grade applications.",
  location: "Bengaluru, Karnataka",
  email: "puneeth.babus21@gmail.com",     // ← fill in
  github: "https://github.com/yourusername",   // ← fill in
  linkedin: "https://linkedin.com/in/yourprofile", // ← fill in
} as const;

export const summary =
  "Senior Software Engineer with 5+ years of experience in building scalable microservices, secure data pipelines, and enterprise-grade applications. Proven expertise in modernizing legacy systems, leading Agile teams, and delivering high-performance solutions across financial and healthcare domains. Recognized for technical leadership, developer productivity innovations, and cross-functional collaboration.";

export type SkillGroup = { category: string; items: string[] };

export const skills: SkillGroup[] = [
  {
    category: "Languages",
    items: ["Java", "HTML", "CSS"],
  },
  {
    category: "Frameworks & Technologies",
    items: ["Spring Boot", "Spring Security", "Spring Data JPA", "Hibernate", "JUnit", "Mockito"],
  },
  {
    category: "Cloud & DevOps",
    items: ["AWS (EC2, S3)", "Docker", "Kubernetes", "CI/CD Pipelines", "Gradle", "Maven"],
  },
  {
    category: "Messaging & Analytics",
    items: ["Apache Kafka"],
  },
  {
    category: "Databases & Caching",
    items: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "IMS DB", "DB2"],
  },
  {
    category: "Tools",
    items: ["Git", "GitHub", "Postman", "IntelliJ", "VS Code", "Eclipse"],
  },
  {
    category: "Architecture & Concepts",
    items: [
      "Microservices",
      "System Design",
      "REST APIs",
      "OOP",
      "Data Structures & Algorithms",
      "Concurrency & Multi-threading",
      "Test Data Management",
      "Agile / Scrum",
    ],
  },
];

export type Experience = {
  company: string;
  client?: string;
  role: string;
  period: string;
  location: string;
};

export const experience: Experience[] = [
  {
    company: "Wissen Technology",
    client: "Morgan Stanley",
    role: "Senior Software Engineer",
    period: "November 2024 – Present",
    location: "Bengaluru, Karnataka",
  },
  {
    company: "Carelon Global Solutions",
    role: "Software Engineer",
    period: "June 2021 – November 2024",
    location: "Bengaluru, Karnataka",
  },
];

export type Project = {
  name: string;
  tech: string[];
  highlights: string[];
  github?: string;
  demo?: string;
};

export const projects: Project[] = [
  {
    name: "AI-Driven Personal Finance Manager",
    tech: ["Java 17", "Spring Boot", "Gemini API", "Agentic AI", "REST APIs"],
    highlights: [
      "Integrated Gemini API with optimized prompt engineering and structured JSON outputs to categorize unstructured financial transactions into strict database schemas.",
      "Leveraged Agentic AI engines to build a modular, component-based user interface with clean code separation and seamless API integration.",
      "Developed robust Spring Boot REST endpoints handling transactional data validation, error mapping, and secure routing to the AI layer.",
    ],
    // github: "https://github.com/yourusername/finance-manager", // ← uncomment & fill in
  },
  {
    name: "Nekaara — Textile Supply Chain Management",
    tech: ["React", "Vite", "Tailwind CSS", "Electron", "Google Sheets API", "Google Drive API", "OAuth 2.0 / PKCE"],
    highlights: [
      "Built a cross-platform desktop app (Windows .exe via Electron) for end-to-end textile supply chain management covering weavers, looms, warps, raw material stock, saree collections, and financial settlements.",
      "Architected a serverless data layer using Google Sheets REST API as the sole database, with an in-memory promise cache and sheet-level invalidation for performance.",
      "Implemented secure Google OAuth 2.0 with PKCE flow in the Electron main process, with silent token refresh and offline-resilient license validation.",
      "Designed role-based access control for four roles (Admin, Weaver, Warper, Supplier) with automated Google Drive backup/restore and local XLSX export via SheetJS.",
      "Built a license-key activation system bound to per-business Google Sheets, enabling multi-tenant isolation with a developer-controlled license registry.",
    ],
    // github: "https://github.com/yourusername/nekaara", // ← uncomment & fill in
  },
];

export type Education = {
  institution: string;
  degree: string;
  period: string;
};

export const education: Education[] = [
  {
    institution: "GITAM University",
    degree: "Bachelor of Technology in Computer Science (B.Tech)",
    period: "2017 – 2021",
  },
  {
    institution: "Narayana PU College",
    degree: "II PUC",
    period: "2016 – 2017",
  },
  {
    institution: "Sri Devraj Urs International School",
    degree: "10th Standard",
    period: "2014 – 2015",
  },
];
