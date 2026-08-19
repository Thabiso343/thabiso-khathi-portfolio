import { Section, SectionHeading } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { skillGroups } from "@/lib/data";
import { skillIcons } from "@/lib/skillIcons";

export function Skills() {
  return (
    <Section id="skills" ariaLabel="Skills and technologies" className="border-t border-border">
      <SectionHeading
        index="Skills"
        title="Tools I reach for"
        description="Grouped by where they show up in the stack — from language of choice through to the platforms that ship the work."
      />

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group, i) => (
          <Reveal key={group.title} delay={(i % 3) * 0.06}>
            <div className="group h-full rounded-lg border border-border bg-surface p-6 transition-colors duration-300 hover:border-border-strong hover:bg-surface-hover">
              <h3 className="text-base font-semibold text-foreground">
                {group.title}
              </h3>
              <p className="mt-1.5 text-sm text-foreground-muted">
                {group.description}
              </p>
              <ul className="mt-5 flex flex-wrap gap-2" aria-label={`${group.title} skills`}>
                {group.skills.map((skill) => {
                  const Icon = skillIcons[skill];
                  return (
                    <li
                      key={skill}
                      className="flex items-center gap-1.5 rounded-md border border-border-strong px-2.5 py-1 font-mono text-xs text-foreground-muted transition-colors duration-300 group-hover:text-foreground"
                    >
                      {Icon ? (
                        <Icon size={13} className="shrink-0 text-accent" />
                      ) : null}
                      {skill}
                    </li>
                  );
                })}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}