import { AtAGlance } from "@/components/at-a-glance";
import { Hero } from "@/components/hero";

export default function HomePage() {
  return (
    <div className="space-y-10">
      <Hero />
      <AtAGlance />
    </div>
  );
}
