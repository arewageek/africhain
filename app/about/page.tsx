import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, Target, Award, Globe } from "lucide-react"

export default function AboutPage() {
  const team = [
    {
      name: "Kwame Asante",
      role: "CEO & Founder",
      bio: "Blockchain pioneer with 10+ years in fintech across Africa.",
    },
    {
      name: "Amara Okafor",
      role: "CTO",
      bio: "Former Google engineer specializing in distributed systems.",
    },
    {
      name: "Fatima Al-Rashid",
      role: "Head of Operations",
      bio: "Expert in African financial markets and regulatory compliance.",
    },
    {
      name: "Tendai Mukamuri",
      role: "Lead Developer",
      bio: "Full-stack developer passionate about blockchain innovation.",
    },
  ]

  const values = [
    {
      icon: Users,
      title: "Community First",
      description: "We believe in building technology that serves African communities and empowers local economies.",
    },
    {
      icon: Target,
      title: "Innovation",
      description: "Constantly pushing the boundaries of what's possible with blockchain technology.",
    },
    {
      icon: Award,
      title: "Excellence",
      description: "Committed to delivering world-class solutions with the highest standards of quality.",
    },
    {
      icon: Globe,
      title: "Global Impact",
      description: "Creating solutions that connect Africa to the global digital economy.",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-primary py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">About Africhain</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We're on a mission to democratize blockchain technology across Africa, building the infrastructure for the
            next generation of financial innovation.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-primary mb-6">Our Mission</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Africhain was founded with the vision of making blockchain technology accessible, affordable, and
                relevant to African businesses and individuals. We believe that Africa has the potential to lead the
                global blockchain revolution.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                Our platform provides the tools, infrastructure, and support needed to build, deploy, and scale
                blockchain applications that solve real African problems.
              </p>
            </div>
            <div className="bg-gradient-to-br from-secondary/10 to-accent/10 rounded-2xl p-8">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-secondary">2020</div>
                  <div className="text-sm text-gray-600">Founded</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-secondary">50+</div>
                  <div className="text-sm text-gray-600">Countries</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-secondary">10K+</div>
                  <div className="text-sm text-gray-600">Users</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-secondary">$2M+</div>
                  <div className="text-sm text-gray-600">Processed</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-primary mb-4">Our Values</h2>
            <p className="text-xl text-gray-600">The principles that guide everything we do</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center border-0 shadow-lg">
                <CardHeader>
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-8 h-8 text-accent" />
                  </div>
                  <CardTitle className="text-primary">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{value.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-primary mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-600">The passionate people behind Africhain</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="text-center border-0 shadow-lg">
                <CardHeader>
                  <div className="w-24 h-24 bg-gradient-to-br from-secondary/20 to-accent/20 rounded-full mx-auto mb-4"></div>
                  <CardTitle className="text-primary">{member.name}</CardTitle>
                  <CardDescription className="text-secondary font-medium">{member.role}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Join Our Mission?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Whether you're a developer, business owner, or blockchain enthusiast, there's a place for you in the
            Africhain community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-white">
              Get Started Today
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-accent text-accent hover:bg-accent hover:text-primary"
            >
              Join Our Community
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
