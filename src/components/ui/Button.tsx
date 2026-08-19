import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
  icon?: ReactNode;
  className?: string;
  external?: boolean;
  "aria-label"?: string;
};

export function Button({
  href,
  children,
  variant = "primary",
  icon,
  className,
  external,
  ...rest
}: ButtonProps) {
  const base =
    "group inline-flex items-center gap-2 rounded-md px-5 py-3 text-sm font-medium transition-all duration-300 ease-out focus-visible:outline-2 focus-visible:outline-accent";

  const styles =
    variant === "primary"
      ? "bg-accent text-background hover:bg-accent-strong hover:-translate-y-0.5 hover:shadow-[0_8px_30px_-8px_var(--color-accent-soft)]"
      : "border border-border-strong text-foreground hover:border-accent hover:text-accent hover:-translate-y-0.5";

  const linkProps = external
    ? { target: "_blank", rel: "noopener noreferrer" }
    : {};

  return (
    <Link
      href={href}
      className={cn(base, styles, className)}
      {...linkProps}
      {...rest}
    >
      {children}
      {icon ? (
        <span className="transition-transform duration-300 ease-out group-hover:translate-x-0.5">
          {icon}
        </span>
      ) : null}
    </Link>
  );
}
