import { Section, SectionHeading } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { experience } from "@/lib/data";

export function Experience() {
  return (
    <Section id="experience" ariaLabel="Work experience" className="border-t border-border">
      <SectionHeading
        index="Experience"
        title="Where I've worked"
        description="Enterprise delivery and AI-driven automation, from PL/SQL modernization to LLM-powered agents."
      />

      <ol className="relative space-y-10 border-l border-border pl-8 sm:pl-10">
        {experience.map((role, i) => (
          <Reveal key={role.org} as="li" delay={i * 0.08} className="relative">
            <span
              aria-hidden
              className="absolute -left-[calc(2rem+4.5px)] top-1.5 h-2.5 w-2.5 rounded-full bg-accent ring-4 ring-background sm:-left-[calc(2.5rem+4.5px)]"
            />
            <p className="section-index">{role.period}</p>
            <h3 className="mt-2 text-xl font-semibold text-foreground">
              {role.role}
            </h3>
            <p className="mt-1 text-sm font-medium text-accent">{role.org}</p>
            <ul className="mt-4 space-y-2.5">
              {role.points.map((point) => (
                <li
                  key={point}
                  className="flex gap-3 text-sm leading-relaxed text-foreground-muted"
                >
                  <span aria-hidden className="mt-2 h-1 w-1 shrink-0 rounded-full bg-foreground-subtle" />
                  {point}
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}