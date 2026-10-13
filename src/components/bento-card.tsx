import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { LucideIcon } from "lucide-react";

type BentoCardProps = {
  href: string;
  title: string;
  description: string;
  icon: LucideIcon;
  layout?: "stacked" | "split";
  className?: string;
  children?: React.ReactNode;
};

export function BentoCard({
  href,
  title,
  description,
  icon: Icon,
  layout = "stacked",
  className = "",
  children,
}: BentoCardProps) {
  const isSplit = layout === "split";

  const base =
    "group relative flex h-full overflow-hidden rounded-2xl border border-border bg-card p-5 transition-colors hover:border-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent";
  const direction = isSplit
    ? "flex-col gap-5 md:flex-row md:gap-4"
    : "flex-col items-center gap-4 text-center";

  return (
    <Link href={href} className={`${base} ${direction} ${className}`}>
      <ArrowUpRight
        className="absolute right-4 top-4 size-4 text-muted opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100"
        aria-hidden="true"
      />
      <div
        className={
          isSplit
            ? "flex flex-col gap-3 md:w-[34%] md:shrink-0"
            : "flex flex-col items-center gap-3"
        }
      >
        <span className="flex size-12 items-center justify-center rounded-xl border border-border bg-background">
          <Icon className="size-5 text-accent" aria-hidden="true" />
        </span>
        <div className="space-y-1">
          <h3 className="font-semibold text-foreground">{title}</h3>
          <p className="break-words text-sm text-muted">{description}</p>
        </div>
      </div>
      {children ? (
        <div className={isSplit ? "min-w-0 flex-1" : "mt-auto w-full"}>
          {children}
        </div>
      ) : null}
    </Link>
  );
}
