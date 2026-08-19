"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown, ArrowRight, Mail, MapPin } from "lucide-react";
import { profile } from "@/lib/data";
import { Button } from "@/components/ui/Button";
import { GithubIcon, LinkedinIcon } from "@/components/icons/BrandIcons";
import { HeroBackgroundIcons } from "@/components/HeroBackgroundIcons";

const socials = [
  { label: "GitHub", href: profile.github, icon: GithubIcon },
  { label: "LinkedIn", href: profile.linkedin, icon: LinkedinIcon },
  { label: "Email", href: `mailto:${profile.email}`, icon: Mail },
];

export function Hero() {
  const shouldReduceMotion = useReducedMotion();

  const container = {
    hidden: {},
    visible: {
      transition: { staggerChildren: shouldReduceMotion ? 0 : 0.09 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center overflow-hidden pt-16"
    >
      {/* Background treatment: faint grid + a single restrained glow, no noise */}
      <div className="pointer-events-none absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,black,transparent)]" />
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-[-10%] h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-accent-soft blur-[120px]"
      />
      <HeroBackgroundIcons />

      <div className="relative mx-auto w-full max-w-6xl px-6 sm:px-8 lg:px-12">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={container}
          className="max-w-3xl"
        >
          <motion.p
            variants={item}
            className="section-index mb-6 flex items-center gap-3"
          >
            <span aria-hidden className="h-px w-8 bg-accent" />
            Hi, I&apos;m {profile.firstName} — welcome to my portfolio
          </motion.p>

          <motion.h1
            variants={item}
            className="text-balance text-5xl font-semibold tracking-tight text-foreground sm:text-6xl lg:text-7xl"
          >
            {profile.name}
          </motion.h1>

          <motion.p
            variants={item}
            className="text-balance mt-4 text-xl font-medium text-foreground-muted sm:text-2xl"
          >
            {profile.title}{" "}
            <span aria-hidden className="text-foreground-subtle">
              /
            </span>{" "}
            <span className="text-accent">{profile.subtitle}</span>
          </motion.p>

          <motion.p
            variants={item}
            className="mt-6 max-w-xl text-balance text-lg leading-relaxed text-foreground-muted"
          >
            {profile.tagline}
          </motion.p>

          <motion.div
            variants={item}
            className="mt-4 flex items-center gap-2 text-sm text-foreground-subtle"
          >
            <MapPin size={15} aria-hidden />
            {profile.location}
          </motion.div>

          <motion.div variants={item} className="mt-10 flex flex-wrap gap-4">
            <Button href="#projects" icon={<ArrowRight size={16} aria-hidden />}>
              View My Work
            </Button>
            <Button href="#contact" variant="secondary">
              Let&apos;s Connect
            </Button>
          </motion.div>

          <motion.div
            variants={item}
            className="mt-12 flex items-center gap-5"
            aria-label="Social links"
          >
            {socials.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target={label === "Email" ? undefined : "_blank"}
                rel={label === "Email" ? undefined : "noopener noreferrer"}
                aria-label={label}
                className="grid h-10 w-10 place-items-center rounded-md border border-border text-foreground-muted transition-all duration-300 hover:-translate-y-0.5 hover:border-accent hover:text-accent"
              >
                <Icon size={17} aria-hidden />
              </a>
            ))}
          </motion.div>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        aria-label="Scroll to About section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="absolute bottom-10 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-foreground-subtle transition-colors hover:text-accent sm:flex"
      >
        <span className="section-index text-foreground-subtle">Scroll</span>
        <motion.span
          animate={shouldReduceMotion ? {} : { y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown size={16} aria-hidden />
        </motion.span>
      </motion.a>
    </section>
  );
}