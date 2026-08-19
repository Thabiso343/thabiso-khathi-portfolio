import type { ComponentType } from "react";
import {
  Bot,
  Brain,
  ChartBar,
  Cloud,
  Database,
  FileChartColumn,
  Hash,
  Server,
  Terminal,
  WandSparkles,
} from "lucide-react";
import {
  SiAngular,
  SiDocker,
  SiDotnet,
  SiHtml5,
  SiJavascript,
  SiLinux,
  SiMysql,
  SiNodedotjs,
  SiPostgresql,
  SiPostman,
  SiPython,
  SiReact,
  SiSpringboot,
  SiTypescript,
} from "react-icons/si";
import { FaJava } from "react-icons/fa6";
import { DiMsqlServer } from "react-icons/di";
import { GithubIcon } from "@/components/icons/BrandIcons";

type IconProps = { size?: number; className?: string };

/**
 * Maps each skill label (as it appears in `skillGroups` in data.ts) to an
 * icon component. Real brand marks are used where a maintained icon exists
 * (Simple Icons / Devicons / Font Awesome / our hand-drawn GitHub mark);
 * everything else — languages or tools without a distributable logo, or
 * multi-brand entries like "AI Engineering" — falls back to a themed
 * Lucide icon rather than an invented or inaccurate logo.
 */
export const skillIcons: Record<string, ComponentType<IconProps>> = {
  // Languages
  Python: SiPython,
  Java: FaJava,
  "C#": Hash,
  JavaScript: SiJavascript,
  TypeScript: SiTypescript,
  SQL: Database,

  // Frontend
  "React.js": SiReact,
  Angular: SiAngular,
  "HTML & CSS": SiHtml5,

  // Backend
  "Node.js": SiNodedotjs,
  ".NET Core": SiDotnet,
  "Spring Boot": SiSpringboot,

  // Databases
  "SQL Server": DiMsqlServer,
  "Oracle SQL/PL-SQL": Server,
  PostgreSQL: SiPostgresql,
  MySQL: SiMysql,

  // AI & Automation
  "AI Engineering (Claude, Ollama & others)": Brain,
  "Prompt Engineering": WandSparkles,
  OpenAI: Bot,

  // DevOps & Tooling
  Docker: SiDocker,
  "Azure DevOps": Cloud,
  "Git/GitHub": GithubIcon,
  "Linux/Unix": SiLinux,
  Postman: SiPostman,
  MobaXterm: Terminal,

  // Reporting & Analytics
  "Power BI": ChartBar,
  "Jasper Reports": FileChartColumn,
};