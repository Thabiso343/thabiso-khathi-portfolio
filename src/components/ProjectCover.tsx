/**
 * Attractive, code-generated placeholder cover for a project card —
 * deliberately abstract (no stock photography) so it reads as "coming soon"
 * rather than a broken image. Each index gets a distinct pattern.
 */
export function ProjectCover({ index }: { index: number }) {
  const seed = index % 3;

  return (
    <div className="relative aspect-[16/10] w-full overflow-hidden rounded-t-lg border-b border-border bg-background-soft">
      <div className="absolute inset-0 bg-grid opacity-40" />
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 400 250"
        fill="none"
        aria-hidden
      >
        {seed === 0 && (
          <g stroke="var(--color-accent)" strokeOpacity="0.35" strokeWidth="1.2">
            {Array.from({ length: 7 }).map((_, i) => (
              <circle key={i} cx="200" cy="125" r={20 + i * 22} />
            ))}
          </g>
        )}
        {seed === 1 && (
          <g stroke="var(--color-accent)" strokeOpacity="0.35" strokeWidth="1.2">
            {Array.from({ length: 9 }).map((_, i) => (
              <line key={i} x1={i * 50} y1="0" x2={i * 50 - 120} y2="250" />
            ))}
          </g>
        )}
        {seed === 2 && (
          <g stroke="var(--color-accent)" strokeOpacity="0.35" strokeWidth="1.2">
            {Array.from({ length: 5 }).map((_, i) => (
              <rect
                key={i}
                x={200 - (i + 1) * 30}
                y={125 - (i + 1) * 20}
                width={(i + 1) * 60}
                height={(i + 1) * 40}
                rx="8"
              />
            ))}
          </g>
        )}
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="rounded-full border border-dashed border-border-strong bg-background/70 px-3 py-1 font-mono text-[11px] tracking-wide text-foreground-subtle backdrop-blur-sm">
          Case study in progress
        </span>
      </div>
    </div>
  );
}
