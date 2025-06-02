import { HeroSection } from "@/components/sections/hero-section"
import { ProblemSolutionSection } from "@/components/sections/problem-solution-section"
import { EcosystemShowcase } from "@/components/sections/ecosystem-showcase"
import { BuildersSection } from "@/components/sections/builders-section"
import { BackedByFutureSection } from "@/components/sections/backed-by-future-section"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-primary">
      <HeroSection />
      <ProblemSolutionSection />
      <EcosystemShowcase id="ecosystem" />
      <BuildersSection />
      <BackedByFutureSection />
    </div>
  )
}
