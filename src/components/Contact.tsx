import { ArrowUpRight, Mail, MapPin } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { GithubIcon, LinkedinIcon } from "@/components/icons/BrandIcons";
import { profile } from "@/lib/data";

const channels = [
  {
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
    icon: Mail,
    external: false,
  },
  {
    label: "GitHub",
    value: "github.com/thabiso343",
    href: profile.github,
    icon: GithubIcon,
    external: true,
  },
  {
    label: "LinkedIn",
    value: "in/thabiso-k-6678b3242",
    href: profile.linkedin,
    icon: LinkedinIcon,
    external: true,
  },
];

export function Contact() {
  return (
    <Section id="contact" ariaLabel="Contact" className="border-t border-border">
      <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
        <Reveal>
          <div className="section-index mb-3 flex items-center gap-3">
            <span aria-hidden className="h-px w-8 bg-accent" />
            Contact
          </div>
          <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Let&apos;s build something reliable together.
          </h2>
          <p className="mt-4 max-w-lg text-base leading-relaxed text-foreground-muted">
            I&apos;m currently a graduate software engineer at Adapt IT and
            open to conversations about software engineering, AI-driven
            automation, and cloud-native work. The fastest way to reach me is
            email — I try to reply within a day or two.
          </p>
          <div className="mt-4 flex items-center gap-2 text-sm text-foreground-subtle">
            <MapPin size={15} aria-hidden />
            {profile.location}
          </div>
          <div className="mt-8">
            <Button
              href={`mailto:${profile.email}`}
              icon={<ArrowUpRight size={16} aria-hidden />}
            >
              Say hello
            </Button>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <ul className="space-y-3">
            {channels.map(({ label, value, href, icon: Icon, external }) => (
              <li key={label}>
                <a
                  href={href}
                  target={external ? "_blank" : undefined}
                  rel={external ? "noopener noreferrer" : undefined}
                  className="group flex items-center justify-between gap-4 rounded-lg border border-border bg-surface px-5 py-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-accent hover:bg-surface-hover"
                >
                  <span className="flex items-center gap-3">
                    <span className="grid h-9 w-9 place-items-center rounded-md border border-border-strong text-foreground-muted transition-colors group-hover:border-accent group-hover:text-accent">
                      <Icon size={16} aria-hidden />
                    </span>
                    <span>
                      <span className="block text-xs uppercase tracking-wider text-foreground-subtle">
                        {label}
                      </span>
                      <span className="block text-sm font-medium text-foreground">
                        {value}
                      </span>
                    </span>
                  </span>
                  <ArrowUpRight
                    size={16}
                    aria-hidden
                    className="text-foreground-subtle transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
                  />
                </a>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </Section>
  );
}