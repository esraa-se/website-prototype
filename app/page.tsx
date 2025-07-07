import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Star, Users, Award } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Excellence in Every
              <span className="text-emerald-400 block">Project We Deliver</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-8 leading-relaxed">
              Professional services that transform your vision into reality with precision, innovation, and unmatched
              quality.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-lg px-8 py-3">
                Get Started Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-slate-900 text-lg px-8 py-3 bg-transparent"
              >
                View Our Work
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-emerald-600 mb-2">500+</div>
              <div className="text-slate-600">Projects Completed</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-emerald-600 mb-2">98%</div>
              <div className="text-slate-600">Client Satisfaction</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-emerald-600 mb-2">15+</div>
              <div className="text-slate-600">Years Experience</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-emerald-600 mb-2">50+</div>
              <div className="text-slate-600">Team Members</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Why Choose Our Services</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              We combine expertise, innovation, and dedication to deliver exceptional results that exceed expectations.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="h-8 w-8 text-emerald-600" />
                </div>
                <CardTitle className="text-xl">Premium Quality</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-slate-600 leading-relaxed">
                  Every project is executed with meticulous attention to detail and the highest standards of quality
                  assurance.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-emerald-600" />
                </div>
                <CardTitle className="text-xl">Expert Team</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-slate-600 leading-relaxed">
                  Our experienced professionals bring years of expertise and innovative solutions to every challenge.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-emerald-600" />
                </div>
                <CardTitle className="text-xl">Proven Results</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-slate-600 leading-relaxed">
                  Track record of successful projects and satisfied clients across diverse industries and requirements.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-emerald-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Next Project?</h2>
          <p className="text-xl mb-8 text-emerald-100 max-w-2xl mx-auto">
            Join hundreds of satisfied clients who have transformed their vision into reality with our expert services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/services">
              <Button size="lg" className="bg-white text-emerald-600 hover:bg-slate-100 text-lg px-8 py-3">
                Explore Services
              </Button>
            </Link>
            <Link href="/registration">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-emerald-600 text-lg px-8 py-3 bg-transparent"
              >
                Get Started Now
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
