import { SectionHeader } from "@/components/ui/section-header"
import { ValuePropositionGrid } from "@/components/ui/value-proposition-grid"
import { WaitlistCTA } from "@/components/ui/waitlist-cta"

export function BackedByFutureSection() {
  const valueProps = [
    {
      title: "Powered by TAC",
      description: "EVM-compatible, TON-connected infrastructure",
      color: "secondary",
    },
    {
      title: "Rooted in Africa",
      description: "Built for African founders, by African builders",
      color: "accent",
    },
    {
      title: "Real-World Protocols",
      description: "Solving actual problems with sustainable solutions",
      color: "primary",
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-3xl mx-auto space-y-8">
          <SectionHeader title="🌍 Backed by the Future" />

          <ValuePropositionGrid valueProps={valueProps} />

          <WaitlistCTA />
        </div>
      </div>
    </section>
  )
}
