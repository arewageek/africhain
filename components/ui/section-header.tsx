import { cn } from "@/lib/utils"

interface SectionHeaderProps {
  title: string
  subtitle?: string
  className?: string
  subtitleClassName?: string
}

export function SectionHeader({ title, subtitle, className, subtitleClassName }: SectionHeaderProps) {
  return (
    <div className={cn("text-center space-y-4", className)}>
      <h2 className="text-3xl lg:text-4xl font-bold">{title}</h2>
      {subtitle && <p className={cn("text-xl max-w-2xl mx-auto", subtitleClassName || "text-gray-600")}>{subtitle}</p>}
    </div>
  )
}
