import { Hero } from "@/components/sections/hero"
import { FeaturedProjects } from "@/components/sections/featured-projects"
import { ResearchHighlight } from "@/components/sections/research-highlight"
import { SkillsOverview } from "@/components/sections/skills-overview"

export default function HomePage() {
  return (
    <div className="space-y-0">
      <Hero />
      <ResearchHighlight />
      <FeaturedProjects />
      <SkillsOverview />
    </div>
  )
}
