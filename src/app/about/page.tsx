import type { Metadata } from "next";
import { Code } from "lucide-react";
import { SkillsSection } from "@/components/skills-section";

export const metadata: Metadata = {
  title: "About",
  description: "About Marvs Marfil: AI workflow automation with n8n, APIs with Python and FastAPI, and full-stack development.",
};

export default function AboutPage() {
  return (
    <>
      <section aria-labelledby="about-heading">
        <div className="border-b border-dashed border-border pb-6">
          <h1 id="about-heading" className="text-3xl font-semibold">
            About Me
          </h1>
          <p className="mt-2 text-base text-muted">
            Learn more about my background, skills, and experience.
          </p>
        </div>
        <p className="mt-6 text-xl font-semibold leading-snug text-foreground lg:text-2xl">
          AI Workflow Automation, APIs &amp; Full-Stack | n8n, Python, FastAPI &amp; Next.js | Open to Remote Entry-Level Roles
        </p>
        <div className="mt-3 space-y-3 text-[17px] leading-8 text-foreground/90">
          <p>
            I build AI-assisted workflows in n8n, APIs with Python, FastAPI, and
            PostgreSQL, and full-stack applications with React and Next.js. I focus
            on clean, readable code and on tools that are easy to use and easy to
            maintain.
          </p>
          <p>
            I work across Python and JavaScript and the modern web stack, with a
            foundation in Java, C, and C++, so I can pick up a new tool or framework
            when a task needs it. I automate repetitive processes with n8n, connecting
            services and AI into workflows that run reliably.
          </p>
          <p>
            I am driven by building dependable tools where usability and solid
            behavior go hand in hand. I am adaptable and resourceful, and I learn
            whatever a task requires.
          </p>
        </div>
      </section>

      <section id="skills" className="mt-10 scroll-mt-6 border-t border-border pt-10">
        <h2 className="flex items-center gap-2 text-lg font-semibold text-foreground">
          <Code className="size-5 text-accent" aria-hidden="true" />
          Skills &amp; Tools
        </h2>
        <p className="mt-2 text-sm text-muted">
          Tools I have used in my projects. Select a skill to see the projects.
        </p>
        <SkillsSection />
      </section>

      <section id="github" className="mt-10 scroll-mt-6 border-t border-border pt-10">
        <h2 className="text-lg font-semibold text-foreground">GitHub</h2>
        <p className="mt-2 text-sm text-muted">Coming soon.</p>
      </section>
    </>
  );
}
