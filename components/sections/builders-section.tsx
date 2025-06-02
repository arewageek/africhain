import { SectionHeader } from "@/components/ui/section-header"
import { FeatureGrid } from "@/components/ui/feature-grid"
import { CTAButtons } from "@/components/ui/cta-buttons"

export function BuildersSection() {
  const features = [
    {
      icon: "users",
      title: "Community-First",
      description: "Built by African builders who understand the challenges",
      color: "accent",
    },
    {
      icon: "rocket",
      title: "Launch-Ready",
      description: "From MVP to mainnet with proven frameworks",
      color: "secondary",
    },
    {
      icon: "globe",
      title: "Global Scale",
      description: "African-rooted, globally competitive protocols",
      color: "accent",
    },
  ]

  return (
    <section className="py-20 bg-primary">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          <SectionHeader
            title="🧱 For Builders, By Builders"
            subtitle="You've got the vision. We've got the infrastructure, the network, and the belief. Apply to our first cohort — and launch with real support behind you."
            className="text-white"
            subtitleClassName="text-gray-300"
          />

          <FeatureGrid features={features} className="mt-12" />

          <CTAButtons
            primary={{ text: "Apply Now", icon: "arrow-right" }}
            secondary={{ text: "View Whitepaper", variant: "outline" }}
            className="pt-8"
          />
        </div>
      </div>
    </section>
  )
}
