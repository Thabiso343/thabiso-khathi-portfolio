import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type SectionProps = {
  id?: string;
  children: ReactNode;
  className?: string;
  /** Label shown as an "aria-label" and used for the numbered index. */
  ariaLabel?: string;
};

export function Section({ id, children, className, ariaLabel }: SectionProps) {
  return (
    <section
      id={id}
      aria-label={ariaLabel}
      className={cn("scroll-mt-24 py-24 sm:py-28 lg:py-32", className)}
    >
      <div className="mx-auto w-full max-w-6xl px-6 sm:px-8 lg:px-12">
        {children}
      </div>
    </section>
  );
}

type SectionHeadingProps = {
  index: string;
  title: string;
  description?: string;
};

export function SectionHeading({ index, title, description }: SectionHeadingProps) {
  return (
    <div className="mb-14 max-w-2xl">
      <div className="section-index mb-3 flex items-center gap-3">
        <span aria-hidden className="h-px w-8 bg-accent" />
        {index}
      </div>
      <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base leading-relaxed text-foreground-muted">
          {description}
        </p>
      ) : null}
    </div>
  );
}
