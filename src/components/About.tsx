import { Cloud, Code, Sparkles, Users, type LucideIcon } from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { about, education, profile, values, type Value } from "@/lib/data";

const valueIcons: Record<Value["icon"], LucideIcon> = {
  code: Code,
  automation: Sparkles,
  collaboration: Users,
  cloud: Cloud,
};

export function About() {
  return (
    <Section id="about" ariaLabel="About me" className="border-t border-border">
      <SectionHeading index="About" title="Background" />

      <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
        <Reveal>
          <div className="space-y-5 text-lg leading-relaxed text-foreground-muted">
            {about.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <div className="mt-10 rounded-lg border border-border bg-surface p-6">
            <p className="section-index mb-5">Education</p>
            <ul className="space-y-5">
              {education.map((edu) => (
                <li key={edu.qualification}>
                  <p className="text-sm font-medium text-foreground">
                    {edu.qualification}
                  </p>
                  <p className="mt-0.5 text-sm text-foreground-muted">
                    {edu.institution}
                  </p>
                  <p className="mt-0.5 font-mono text-xs text-foreground-subtle">
                    {edu.period}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <div className="grid grid-cols-2 gap-4 self-start">
          {values.map((value, i) => {
            const Icon = valueIcons[value.icon];
            return (
              <Reveal key={value.title} delay={(i % 4) * 0.06}>
                <div className="h-full rounded-lg border border-border bg-surface p-5 transition-colors duration-300 hover:border-border-strong hover:bg-surface-hover">
                  <div className="grid h-11 w-11 place-items-center rounded-md bg-accent-soft text-accent">
                    <Icon size={20} aria-hidden />
                  </div>
                  <h3 className="mt-4 text-sm font-semibold text-foreground">
                    {value.title}
                  </h3>
                  <p className="mt-1.5 text-xs leading-relaxed text-foreground-muted">
                    {value.description}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>

      <p className="sr-only">
        {profile.name} is based in {profile.location}.
      </p>
    </Section>
  );
}