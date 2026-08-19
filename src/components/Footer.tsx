import Link from "next/link";
import { ArrowUp, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons/BrandIcons";
import { profile } from "@/lib/data";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-6 py-10 sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-12">
        <div>
          <p className="font-mono text-sm text-foreground">{profile.name}</p>
          <p className="mt-1 text-xs text-foreground-subtle">
            © {year}. Designed &amp; built from scratch.
          </p>
        </div>

        <div className="flex items-center gap-5">
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-foreground-muted transition-colors hover:text-accent"
          >
            <GithubIcon size={17} aria-hidden />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-foreground-muted transition-colors hover:text-accent"
          >
            <LinkedinIcon size={17} aria-hidden />
          </a>
          <a
            href={`mailto:${profile.email}`}
            aria-label="Email"
            className="text-foreground-muted transition-colors hover:text-accent"
          >
            <Mail size={17} aria-hidden />
          </a>

          <Link
            href="#top"
            aria-label="Back to top"
            className="ml-2 grid h-9 w-9 place-items-center rounded-md border border-border text-foreground-muted transition-all duration-300 hover:-translate-y-0.5 hover:border-accent hover:text-accent"
          >
            <ArrowUp size={16} aria-hidden />
          </Link>
        </div>
      </div>
    </footer>
  );
}
