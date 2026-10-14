import type { ReactNode } from "react";

export function ProjectSection({
  id,
  title,
  empty = "Details coming soon.",
  children,
}: {
  id: string;
  title: string;
  empty?: string;
  children?: ReactNode;
}) {
  return (
    <section id={id} aria-labelledby={`${id}-heading`} className="mt-10 scroll-mt-6 border-t border-border pt-10">
      <h2 id={`${id}-heading`} className="text-lg font-semibold text-foreground">{title}</h2>
      <div className="mt-3">
        {children ? children : <p className="text-sm text-muted">{empty}</p>}
      </div>
    </section>
  );
}
