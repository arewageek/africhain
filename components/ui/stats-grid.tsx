interface Stat {
  value: string
  label: string
}

interface StatsGridProps {
  stats: Stat[]
  className?: string
}

export function StatsGrid({ stats, className }: StatsGridProps) {
  return (
    <div className={`flex items-center gap-8 pt-8 ${className}`}>
      {stats.map((stat, index) => (
        <div key={index} className="text-center">
          <div className="text-2xl font-bold text-accent">{stat.value}</div>
          <div className="text-sm text-gray-400">{stat.label}</div>
        </div>
      ))}
    </div>
  )
}
