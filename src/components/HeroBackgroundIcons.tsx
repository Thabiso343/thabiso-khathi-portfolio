"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Bot, Database, Hash, WandSparkles, type LucideIcon } from "lucide-react";
import {
  SiClaude,
  SiJavascript,
  SiOllama,
  SiPython,
  SiTypescript,
} from "react-icons/si";
import { FaJava } from "react-icons/fa6";
import type { ComponentType } from "react";

type FloatIcon = {
  Icon: LucideIcon | ComponentType<{ size?: number; className?: string }>;
  label: string;
  // Position as a percentage of the hero canvas, kept fixed (not random) so
  // server and client render identically and there's no hydration mismatch.
  top: string;
  left: string;
  size: number;
  duration: number;
  delay: number;
  drift: number;
};

// A mix of the languages and AI/agentic tools from the Skills section,
// used purely as slow-drifting background texture behind the hero copy.
const icons: FloatIcon[] = [
  { Icon: SiPython, label: "Python", top: "14%", left: "62%", size: 30, duration: 9, delay: 0, drift: 14 },
  { Icon: FaJava, label: "Java", top: "68%", left: "70%", size: 26, duration: 11, delay: 0.6, drift: 12 },
  { Icon: Hash, label: "C#", top: "40%", left: "88%", size: 28, duration: 8, delay: 1.1, drift: 16 },
  { Icon: SiJavascript, label: "JavaScript", top: "80%", left: "58%", size: 24, duration: 10, delay: 0.3, drift: 10 },
  { Icon: SiTypescript, label: "TypeScript", top: "8%", left: "82%", size: 26, duration: 12, delay: 1.4, drift: 12 },
  { Icon: Database, label: "SQL", top: "55%", left: "94%", size: 24, duration: 9.5, delay: 0.9, drift: 14 },
  { Icon: SiClaude, label: "Claude", top: "26%", left: "74%", size: 30, duration: 10.5, delay: 0.2, drift: 16 },
  { Icon: SiOllama, label: "Ollama", top: "90%", left: "80%", size: 24, duration: 8.5, delay: 1.6, drift: 10 },
  { Icon: Bot, label: "OpenAI", top: "48%", left: "66%", size: 26, duration: 11.5, delay: 0.5, drift: 12 },
  { Icon: WandSparkles, label: "Prompt Engineering", top: "6%", left: "68%", size: 22, duration: 9, delay: 1.9, drift: 10 },
];

/**
 * Slow-drifting language/AI-tool icons behind the hero copy. Deliberately
 * low-contrast — texture, not content — and fully disabled under
 * prefers-reduced-motion (icons still render, just static).
 */
export function HeroBackgroundIcons() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 hidden overflow-hidden sm:block"
    >
      {icons.map(({ Icon, label, top, left, size, duration, delay, drift }) => (
        <motion.div
          key={label}
          className="absolute text-foreground-subtle/25"
          style={{ top, left }}
          animate={
            shouldReduceMotion
              ? undefined
              : {
                  y: [0, -drift, 0, drift * 0.6, 0],
                  x: [0, drift * 0.5, 0, -drift * 0.5, 0],
                  rotate: [0, 4, 0, -4, 0],
                }
          }
          transition={{
            duration,
            delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Icon size={size} />
        </motion.div>
      ))}
    </div>
  );
}