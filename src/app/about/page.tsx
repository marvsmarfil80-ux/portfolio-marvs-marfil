import type { Metadata } from "next";
import Link from "next/link";
import { SkillsSection } from "@/components/skills-section";

export const metadata: Metadata = { title: "About | Marvs Marfil" };

export default function AboutPage() {
  return (
    <>
      <section aria-labelledby="about-heading">
        <h1 id="about-heading" className="text-3xl font-semibold">
          About Me
        </h1>
        <p className="mt-2 text-muted">
          Learn more about my background, skills, and experience.
        </p>
        <p className="mt-6 font-medium text-accent">
          BSIT Student | Python, FastAPI &amp; n8n | Open to Remote Entry-Level Roles
        </p>
        <div className="mt-4 max-w-2xl space-y-4 leading-relaxed text-foreground">
          <p>
            I&apos;m Marvs Marfil, a second-year BSIT student at the Polytechnic
            University of the Philippines. I&apos;m looking for entry-level remote
            roles in IT assistance, non-voice support, workflow and AI automation,
            and junior software development.
          </p>
          <p>
            I build projects with Python, FastAPI, PostgreSQL, React, and Next.js,
            and automate workflows with n8n using JavaScript. In school, I have also
            done coursework in Java, C, and C++. My long-term direction is backend
            and full-stack development with AI automation.
          </p>
          <p>
            I also have data encoding experience through SPES, a Philippine
            government student employment program (DOLE), and a work immersion at the
            Department of Education (DepEd). See the{" "}
            <Link
              href="/experience"
              className="text-accent underline underline-offset-4 hover:no-underline"
            >
              Experience page
            </Link>
            .
          </p>
          <p>
            Best regards,
            <br />
            <span className="font-semibold">Marvs Marfil</span>
          </p>
        </div>
      </section>

      <section id="skills" className="mt-12 scroll-mt-6">
        <h2 className="text-lg font-semibold text-foreground">Skills &amp; Tools</h2>
        <p className="mt-2 text-sm text-muted">
          Tools I have used in my projects. Select a skill to see the projects.
        </p>
        <SkillsSection />
      </section>

      <section id="github" className="mt-12 scroll-mt-6">
        <h2 className="text-lg font-semibold text-foreground">GitHub</h2>
        <p className="mt-2 text-sm text-muted">Coming soon.</p>
      </section>
    </>
  );
}
