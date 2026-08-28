// Central content source for the site. Edit this file to update copy,
// links, skills, experience, education, and projects.

export const profile = {
  name: "Thabiso Khathi",
  firstName: "Thabiso",
  title: "Software Engineer",
  subtitle: "Artificial Intelligence Enthusiast",
  tagline:
    "I build systems that catch problems before they become crises — and I'm going cloud-native next.",
  location: "Johannesburg, South Africa",
  email: "Khathithabiso24@gmail.com",
  github: "https://github.com/thabiso343",
  linkedin: "https://linkedin.com/in/thabiso-k-6678b3242",
  resumeNote:
    "Open to graduate & junior software engineering opportunities.",
};

export const about = {
  paragraphs: [
    "I'm a Software Development Engineer with enterprise software development experience and hands-on expertise in AI-powered automation, Large Language Models (LLMs), chatbot development, REST APIs, and prompt engineering.",
    "Day to day, I work across Python, Java, and C# to build intelligent business solutions that improve operational efficiency and customer experience — from modernizing legacy PL/SQL services to prototyping LLM-powered agents.",
    "I'm especially interested in software engineering, cloud technologies, AI, and enterprise application development, and I'm currently deepening my cloud-native skill set.",
  ],
  highlights: [
    { label: "Focus", value: "AI-powered automation & enterprise systems" },
    { label: "Currently", value: "Graduate Software Engineer at Adapt IT" },
    { label: "Next", value: "Going cloud-native" },
  ],
};

export type Value = {
  title: string;
  description: string;
  icon: "code" | "automation" | "collaboration" | "cloud";
};

// The four-card "how I work" grid shown on the About section.
export const values: Value[] = [
  {
    title: "Clean Code",
    description:
      "Writing maintainable, well-tested code across Python, Java, and C#.",
    icon: "code",
  },
  {
    title: "AI-Driven Automation",
    description:
      "Building LLM-powered agents and automation that solve real business problems.",
    icon: "automation",
  },
  {
    title: "Collaboration",
    description:
      "Working closely with business analysts and developers in Agile Scrum teams.",
    icon: "collaboration",
  },
  {
    title: "Cloud-Native Mindset",
    description:
      "Deepening my cloud skills to build resilient, scalable systems.",
    icon: "cloud",
  },
];

export type SkillGroup = {
  title: string;
  description: string;
  skills: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Languages",
    description: "Core languages I write and reason in daily.",
    skills: ["Python", "Java", "C#", "JavaScript", "TypeScript", "SQL"],
  },
  {
    title: "Frontend",
    description: "Building interfaces that feel considered.",
    skills: ["React.js", "Angular", "HTML & CSS"],
  },
  {
    title: "Backend",
    description: "Services, APIs, and application platforms.",
    skills: ["Node.js", ".NET Core", "Spring Boot"],
  },
  {
    title: "Databases",
    description: "Where the data actually lives.",
    skills: ["SQL Server", "Oracle SQL/PL-SQL", "PostgreSQL", "MySQL"],
  },
  {
    title: "AI & Automation",
    description: "LLMs, agents, and prompt-driven systems.",
    skills: [
      "AI Engineering (Claude, Ollama & others)",
      "Prompt Engineering",
      "OpenAI",
    ],
  },
  {
    title: "DevOps & Tooling",
    description: "Keeping delivery fast, tested, and traceable.",
    skills: [
      "Docker",
      "Azure DevOps",
      "Git/GitHub",
      "Linux/Unix",
      "Postman",
      "MobaXterm",
    ],
  },
  {
    title: "Reporting & Analytics",
    description: "Turning data into decisions.",
    skills: ["Power BI", "Jasper Reports"],
  },
];

export type ExperienceEntry = {
  period: string;
  role: string;
  org: string;
  points: string[];
};

export const experience: ExperienceEntry[] = [
  {
    period: "March 2026 – Present",
    role: "Graduate Software Engineer",
    org: "Adapt IT — Student Finance Division",
    points: [
      "Made enhancements and changes to existing PL/SQL packages, conducted developer testing, and assisted deployment to production.",
      "Modernized legacy PL/SQL packages to JSON CLOB responses for an Angular frontend, leveraging AI-assisted refactoring.",
      "Developed test cases to validate functionality for senior developer review, ensuring every program was thoroughly tested before deployment to the client environment.",
      "Internal AI Hackathon (team of 8): built LLM-powered agents using Ollama and backend APIs — one clustering similar client product suggestions, another using OCR to process uploaded client documents.",
      "Applied software engineering best practices including Git/Azure Repos version control, peer code reviews, and testing and deployment support.",
      "Designed, developed, and enhanced RESTful APIs using Java Spring Boot and .NET Core, validating endpoints with Postman.",
      "Collaborated with business analysts and developers in Agile Scrum environments.",
      "Developed reporting and data visualisation solutions using tools such as Jasper Reports and SQL-based reporting services to support business decision-making.",
    ],
  },
  {
    period: "August 2025 – February 2026",
    role: "Zendesk Automation & AI Implementation Specialist",
    org: "CX Experts",
    points: [
      "Configured and optimized Zendesk AI capabilities including AI Agents, bots, triggers, automations, macros, and workflow rules.",
      "Designed intelligent ticket routing and automated customer support workflows using rule-based and AI-driven logic.",
      "Integrated APIs, webhooks, and customized platform configurations to extend Zendesk functionality and improve operational efficiency.",
      "Analysed customer interaction data and automation performance.",
      "Investigated and resolved automation failures, workflow issues, and platform configuration defects.",
      "Collaborated with customer success teams to deliver scalable AI-powered customer support solutions for enterprise clients.",
      "Implemented workflow improvements that reduced manual ticket handling and increased support team productivity.",
      "Assisted in deploying and configuring enterprise Zendesk environments aligned with client business requirements.",
    ],
  },
];

export type EducationEntry = {
  period: string;
  qualification: string;
  institution: string;
};

export const education: EducationEntry[] = [
  {
    period: "2021 – 2025",
    qualification: "Bachelor of Commerce (Information Systems and Technology)",
    institution: "University of KwaZulu-Natal",
  },
  {
    period: "January 2016 – December 2020",
    qualification: "National Senior Certificate",
    institution: "Menzi High School",
  },
];

export type Project = {
  id: string;
  name: string | null;
  description: string | null;
  technologies: string[];
  github: string | null;
  demo: string | null;
  image: string | null;
};

// Projects are intentionally left as placeholders — fill these in as you
// ship real work. Set `name`/`description`/`github`/`demo`/`image` to real
// values and add technologies to replace each card's "coming soon" state.
export const projects: Project[] = [
  {
    id: "spendwise-ai",
    name: "SpendWise AI",
    description:
      "An AI-assisted personal expense tracker. Log expenses and income by chatting with an assistant that auto-fills merchants, creates budgets from plain-language requests, and refreshes spending insights automatically — plus a full dashboard with category breakdowns, trends, and anomaly detection.",
    technologies: [
      "React",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "FastAPI",
      "PostgreSQL",
      "SQLAlchemy",
    ],
    github: "https://github.com/Thabiso343/SpendWise-AI",
    demo: "https://spend-wise-ai-qno1.vercel.app/",
    image: "/projects/spendwise-ai.png",
  },
    {
    id: "recruitiq",
    name: "RecruitIQ",
    description:
      "An explainable AI-powered resume screening and candidate ranking system for recruiters. Upload a job description and a batch of resumes (PDF, DOCX, or TXT) and it extracts skills, computes TF-IDF/cosine similarity against the role, and produces a transparent, weighted match score per candidate — plus a full recruiter dashboard with ranking tables, skill-gap analysis, and an in-app assistant that can run the screening and answer questions about the results.",
    technologies: ["Python", "Streamlit", "scikit-learn", "Pandas", "Plotly", "pypdf"],
    github: "https://github.com/Thabiso343/ATS-resume-screening-system",
    demo: "https://ats-resume-screening-system-be4dxbhsayedrzsv6iurfz.streamlit.app/",
    image: "/projects/recruitiq.png",
  },
  {
    id: "movie-database",
    name: "Movie Database",
    description:
      "A full-stack movie discovery app powered by the TMDB API. Browse popular, top-rated, and upcoming movies, search in real time, and sign in with GitHub to build a personal watchlist, rate movies, and leave reviews — all backed by a PostgreSQL database with row-level authorization on every write.",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "PostgreSQL",
      "Prisma",
      "Auth.js",
      "TMDB API",
    ],
    github: "https://github.com/Thabiso343/movie-database",
    demo: "https://movie-database-delta-pearl.vercel.app/",
    image: null,
  },
];

export const nav = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];