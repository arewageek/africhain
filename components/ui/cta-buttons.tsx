import { Button } from "@/components/ui/button"
import { ArrowRight, Rocket, Users } from "lucide-react"
import { cn } from "@/lib/utils"

interface CTAButton {
  text: string
  icon?: "rocket" | "users" | "arrow-right"
  variant?: "default" | "outline"
}

interface CTAButtonsProps {
  primary: CTAButton
  secondary: CTAButton
  className?: string
}

const iconMap = {
  rocket: Rocket,
  users: Users,
  "arrow-right": ArrowRight,
}

export function CTAButtons({ primary, secondary, className }: CTAButtonsProps) {
  const PrimaryIcon = primary.icon ? iconMap[primary.icon] : null
  const SecondaryIcon = secondary.icon ? iconMap[secondary.icon] : null

  return (
    <div className={cn("flex flex-col sm:flex-row gap-4", className)}>
      <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-white">
        {primary.text}
        {PrimaryIcon && <PrimaryIcon className="ml-2 h-5 w-5" />}
      </Button>
      <Button
        variant={secondary.variant || "outline"}
        size="lg"
        className="border-accent text-accent hover:bg-accent hover:text-primary"
      >
        {secondary.text}
        {SecondaryIcon && <SecondaryIcon className="ml-2 h-5 w-5" />}
      </Button>
    </div>
  )
}
