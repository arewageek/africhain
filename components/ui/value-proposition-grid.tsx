interface ValueProp {
  title: string
  description: string
  color: "secondary" | "accent" | "primary"
}

interface ValuePropositionGridProps {
  valueProps: ValueProp[]
}

const colorClasses = {
  secondary: "text-secondary",
  accent: "text-accent",
  primary: "text-primary",
}

export function ValuePropositionGrid({ valueProps }: ValuePropositionGridProps) {
  return (
    <div className="grid md:grid-cols-3 gap-8">
      {valueProps.map((prop, index) => (
        <div key={index} className="space-y-4">
          <div className={`text-2xl font-bold ${colorClasses[prop.color]}`}>{prop.title}</div>
          <p className="text-gray-600">{prop.description}</p>
        </div>
      ))}
    </div>
  )
}
