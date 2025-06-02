import { Button } from "@/components/ui/button"

export function WaitlistCTA() {
  return (
    <div className="bg-gray-50 rounded-2xl p-8 space-y-6">
      <h3 className="text-2xl font-bold text-primary">Ready to Build the Future?</h3>
      <p className="text-gray-600">Join our waitlist to be notified when applications open for Cohort 1</p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button size="lg" className="bg-primary hover:bg-primary/90 text-white">
          Join the Waitlist
        </Button>
        <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-white">
          Follow Us
        </Button>
      </div>
    </div>
  )
}
