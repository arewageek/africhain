import { Rocket, Code, Coins } from "lucide-react"

export function HeroVisual() {
  return (
    <div className="relative">
      <div className="w-full h-96 bg-gradient-to-br from-secondary/20 to-accent/20 rounded-2xl flex items-center justify-center relative overflow-hidden">
        <div className="text-center space-y-4 z-10">
          <div className="w-24 h-24 bg-accent rounded-full flex items-center justify-center mx-auto">
            <Rocket className="w-12 h-12 text-primary" />
          </div>
          <p className="text-white font-medium">Build • Fund • Launch</p>
        </div>

        {/* Floating elements */}
        <div className="absolute top-4 right-4 w-12 h-12 bg-secondary/30 rounded-lg flex items-center justify-center">
          <Code className="w-6 h-6 text-white" />
        </div>
        <div className="absolute bottom-4 left-4 w-12 h-12 bg-accent/30 rounded-lg flex items-center justify-center">
          <Coins className="w-6 h-6 text-white" />
        </div>
      </div>
    </div>
  )
}
