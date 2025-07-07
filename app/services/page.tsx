import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, ArrowRight, Zap, Shield, Target, Lightbulb, Cog, Users } from "lucide-react"
import Link from "next/link"

export default function ServicesPage() {
  const services = [
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Strategic Consulting",
      description:
        "Expert guidance to optimize your business strategy and accelerate growth through data-driven insights.",
      features: ["Market Analysis", "Growth Strategy", "Risk Assessment", "Performance Optimization"],
      price: "Starting at $2,500",
      popular: false,
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: "Project Management",
      description: "End-to-end project delivery with proven methodologies ensuring on-time, on-budget completion.",
      features: ["Agile Methodology", "Resource Planning", "Quality Assurance", "Stakeholder Management"],
      price: "Starting at $1,800",
      popular: true,
    },
    {
      icon: <Lightbulb className="h-8 w-8" />,
      title: "Innovation Solutions",
      description: "Cutting-edge solutions that leverage the latest technologies to solve complex business challenges.",
      features: ["Technology Integration", "Process Automation", "Digital Transformation", "Custom Development"],
      price: "Starting at $3,200",
      popular: false,
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Quality Assurance",
      description: "Comprehensive testing and validation services to ensure your products meet the highest standards.",
      features: ["Automated Testing", "Performance Testing", "Security Audits", "Compliance Verification"],
      price: "Starting at $1,500",
      popular: false,
    },
    {
      icon: <Cog className="h-8 w-8" />,
      title: "System Integration",
      description: "Seamless integration of disparate systems to create unified, efficient operational workflows.",
      features: ["API Development", "Data Migration", "System Architecture", "Legacy Modernization"],
      price: "Starting at $2,800",
      popular: false,
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Team Augmentation",
      description: "Skilled professionals to extend your team capabilities and accelerate project delivery.",
      features: ["Skilled Professionals", "Flexible Engagement", "Knowledge Transfer", "Ongoing Support"],
      price: "Starting at $120/hour",
      popular: false,
    },
  ]

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Professional Services
              <span className="text-emerald-400 block">Tailored to Your Needs</span>
            </h1>
            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              Comprehensive solutions designed to drive your business forward with expertise, innovation, and measurable
              results.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Our Service Offerings</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Choose from our comprehensive range of professional services, each designed to deliver exceptional value
              and results.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className={`relative border-0 shadow-lg hover:shadow-xl transition-all duration-300 ${service.popular ? "ring-2 ring-emerald-500" : ""}`}
              >
                {service.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-emerald-600 hover:bg-emerald-700">
                    Most Popular
                  </Badge>
                )}
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4 text-emerald-600">
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                  <div className="text-2xl font-bold text-emerald-600">{service.price}</div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <CardDescription className="text-slate-600 leading-relaxed">{service.description}</CardDescription>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-slate-600">
                        <CheckCircle className="h-4 w-4 text-emerald-600 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full bg-emerald-600 hover:bg-emerald-700 mt-6">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Our Proven Process</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              A systematic approach that ensures consistent, high-quality results for every project.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Discovery",
                description: "Understanding your needs, goals, and challenges through comprehensive analysis.",
              },
              {
                step: "02",
                title: "Strategy",
                description: "Developing a tailored approach with clear milestones and deliverables.",
              },
              {
                step: "03",
                title: "Execution",
                description: "Implementing solutions with regular updates and quality checkpoints.",
              },
              {
                step: "04",
                title: "Delivery",
                description: "Final delivery with ongoing support and performance monitoring.",
              },
            ].map((phase, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-emerald-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  {phase.step}
                </div>
                <h3 className="text-xl font-semibold mb-2">{phase.title}</h3>
                <p className="text-slate-600">{phase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-emerald-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8 text-emerald-100 max-w-2xl mx-auto">
            Let's discuss how our services can help you achieve your goals and drive your business forward.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/registration">
              <Button size="lg" className="bg-white text-emerald-600 hover:bg-slate-100 text-lg px-8 py-3">
                Start Your Project
              </Button>
            </Link>
            <Link href="/events">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-emerald-600 text-lg px-8 py-3 bg-transparent"
              >
                Attend Our Events
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
