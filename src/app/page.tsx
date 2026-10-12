import { AboutCard } from "@/components/about-card";
import { AtAGlance } from "@/components/at-a-glance";
import { ExperienceCard } from "@/components/experience-card";
import { GithubCard } from "@/components/github-card";
import { Hero } from "@/components/hero";
import { ProjectsCard } from "@/components/projects-card";
import { SkillsCard } from "@/components/skills-card";

export default function HomePage() {
  return (
    <div className="space-y-8">
      <Hero />
      <AtAGlance />
      <section aria-labelledby="explore-heading">
        <h2 id="explore-heading" className="sr-only">
          Explore my portfolio
        </h2>
        <div className="grid auto-rows-[minmax(19.5rem,auto)] grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <ProjectsCard className="sm:col-span-2" />
          <AboutCard />
          <SkillsCard />
          <ExperienceCard className="sm:col-span-2 lg:col-span-1" />
          <GithubCard className="sm:col-span-2 lg:col-span-3" />
        </div>
      </section>
    </div>
  );
}
