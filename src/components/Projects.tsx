import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { ProjectCover } from "@/components/ProjectCover";
import { GithubIcon } from "@/components/icons/BrandIcons";
import { projects } from "@/lib/data";

export function Projects() {
  return (
    <Section id="projects" ariaLabel="Projects">
      <SectionHeading
        index="Projects"
        title="Selected work"
        description="This section is being populated with real, shipped work — each card below will link out to a live demo, source, and a short write-up of the problem it solves."
      />

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, i) => (
          <Reveal key={project.id} delay={(i % 3) * 0.08} className="h-full">
            <article
              className={`flex h-full flex-col overflow-hidden rounded-lg border bg-surface transition-colors duration-300 ${
                project.image
                  ? "border-border-strong hover:border-accent/60"
                  : "border-dashed border-border-strong hover:border-accent/60"
              }`}
            >
              {project.image ? (
                <div className="relative aspect-[16/10] w-full overflow-hidden border-b border-border bg-background-soft">
                  <Image
                    src={project.image}
                    alt={`${project.name ?? "Project"} screenshot`}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                    className="object-cover object-top"
                  />
                </div>
              ) : (
                <ProjectCover index={i} />
              )}
              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-lg font-semibold text-foreground">
                  {project.name ?? `Project ${i + 1}`}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-foreground-muted">
                  {project.description ??
                    "Add a short description here: what the project does, the problem it solves, and what you personally built."}
                </p>

                {project.technologies.length > 0 ? (
                  <ul className="mt-4 flex flex-wrap gap-2" aria-label="Technologies used">
                    {project.technologies.map((tech) => (
                      <li
                        key={tech}
                        className="rounded-md border border-border-strong px-2 py-1 font-mono text-xs text-foreground-muted"
                      >
                        {tech}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="mt-4 font-mono text-xs text-foreground-subtle">
                    tech stack — to be added
                  </p>
                )}

                <div className="mt-6 flex items-center gap-4 border-t border-border pt-4 text-sm">
                  {project.github ? (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-foreground-muted transition-colors hover:text-accent"
                    >
                      <GithubIcon size={15} aria-hidden />
                      Source
                    </a>
                  ) : (
                    <span className="inline-flex cursor-not-allowed items-center gap-1.5 text-foreground-subtle">
                      <GithubIcon size={15} aria-hidden />
                      Source soon
                    </span>
                  )}
                  {project.demo ? (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-foreground-muted transition-colors hover:text-accent"
                    >
                      <ExternalLink size={15} aria-hidden />
                      Live demo
                    </a>
                  ) : (
                    <span className="inline-flex cursor-not-allowed items-center gap-1.5 text-foreground-subtle">
                      <ExternalLink size={15} aria-hidden />
                      Demo soon
                    </span>
                  )}
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}