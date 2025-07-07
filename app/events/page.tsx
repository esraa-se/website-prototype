import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, MapPin, Users, ArrowRight, Star } from "lucide-react"
import Link from "next/link"

export default function EventsPage() {
  const upcomingEvents = [
    {
      id: 1,
      title: "Digital Transformation Summit 2024",
      date: "March 15, 2024",
      time: "9:00 AM - 5:00 PM",
      location: "Convention Center, Downtown",
      type: "Conference",
      attendees: 250,
      price: "Free",
      featured: true,
      description:
        "Join industry leaders as we explore the latest trends in digital transformation and how they're reshaping business landscapes.",
      highlights: ["Keynote Speakers", "Networking Sessions", "Interactive Workshops", "Industry Insights"],
    },
    {
      id: 2,
      title: "Project Management Masterclass",
      date: "March 22, 2024",
      time: "2:00 PM - 6:00 PM",
      location: "Business Hub, Suite 300",
      type: "Workshop",
      attendees: 50,
      price: "$149",
      featured: false,
      description:
        "Intensive hands-on workshop covering advanced project management techniques and best practices for successful delivery.",
      highlights: ["Hands-on Training", "Certification", "Expert Instructors", "Real-world Cases"],
    },
    {
      id: 3,
      title: "Innovation & Technology Expo",
      date: "April 5, 2024",
      time: "10:00 AM - 8:00 PM",
      location: "Tech Park Exhibition Hall",
      type: "Expo",
      attendees: 500,
      price: "$75",
      featured: true,
      description:
        "Discover cutting-edge technologies and innovative solutions that are driving the future of business and industry.",
      highlights: ["Product Demos", "Tech Talks", "Startup Showcase", "Investor Meetings"],
    },
    {
      id: 4,
      title: "Quality Assurance Best Practices",
      date: "April 12, 2024",
      time: "1:00 PM - 4:00 PM",
      location: "Online Webinar",
      type: "Webinar",
      attendees: 200,
      price: "Free",
      featured: false,
      description: "Learn the latest QA methodologies and tools that ensure product quality and customer satisfaction.",
      highlights: ["Live Demos", "Q&A Session", "Resource Downloads", "Expert Panel"],
    },
    {
      id: 5,
      title: "Leadership in the Digital Age",
      date: "April 18, 2024",
      time: "6:00 PM - 9:00 PM",
      location: "Grand Hotel Ballroom",
      type: "Seminar",
      attendees: 150,
      price: "$199",
      featured: false,
      description:
        "Executive seminar focusing on leadership strategies for navigating digital transformation and change management.",
      highlights: ["Executive Panel", "Case Studies", "Networking Dinner", "Leadership Tools"],
    },
    {
      id: 6,
      title: "Annual Client Appreciation Gala",
      date: "May 10, 2024",
      time: "7:00 PM - 11:00 PM",
      location: "Riverside Convention Center",
      type: "Gala",
      attendees: 300,
      price: "Invitation Only",
      featured: true,
      description:
        "Exclusive evening celebrating our valued clients and partners with awards, entertainment, and networking.",
      highlights: ["Awards Ceremony", "Live Entertainment", "Gourmet Dinner", "VIP Networking"],
    },
  ]

  const pastEvents = [
    {
      title: "AI & Machine Learning Conference 2023",
      date: "December 8, 2023",
      attendees: 400,
      rating: 4.8,
    },
    {
      title: "Cybersecurity Workshop Series",
      date: "November 15, 2023",
      attendees: 120,
      rating: 4.9,
    },
    {
      title: "Business Process Optimization Summit",
      date: "October 20, 2023",
      attendees: 280,
      rating: 4.7,
    },
  ]

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Industry Events &<span className="text-emerald-400 block">Learning Opportunities</span>
            </h1>
            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              Join us for exclusive events, workshops, and conferences designed to advance your knowledge and expand
              your professional network.
            </p>
            <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-lg px-8 py-3">
              View All Events
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Upcoming Events</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Don't miss these exciting opportunities to learn, network, and grow your professional expertise.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {upcomingEvents.map((event) => (
              <Card
                key={event.id}
                className={`border-0 shadow-lg hover:shadow-xl transition-all duration-300 ${event.featured ? "ring-2 ring-emerald-500" : ""}`}
              >
                {event.featured && (
                  <Badge className="absolute -top-3 left-6 bg-emerald-600 hover:bg-emerald-700">Featured Event</Badge>
                )}
                <CardHeader className="pb-4">
                  <div className="flex justify-between items-start mb-2">
                    <Badge variant="outline" className="text-emerald-600 border-emerald-600">
                      {event.type}
                    </Badge>
                    <div className="text-right">
                      <div className="text-lg font-bold text-emerald-600">{event.price}</div>
                    </div>
                  </div>
                  <CardTitle className="text-xl mb-2">{event.title}</CardTitle>
                  <div className="space-y-2 text-sm text-slate-600">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-2 text-emerald-600" />
                      {event.date}
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-2 text-emerald-600" />
                      {event.time}
                    </div>
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-2 text-emerald-600" />
                      {event.location}
                    </div>
                    <div className="flex items-center">
                      <Users className="h-4 w-4 mr-2 text-emerald-600" />
                      {event.attendees} Expected Attendees
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <CardDescription className="text-slate-600 leading-relaxed">{event.description}</CardDescription>
                  <div>
                    <h4 className="font-semibold mb-2 text-slate-900">Event Highlights:</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {event.highlights.map((highlight, index) => (
                        <div key={index} className="flex items-center text-sm text-slate-600">
                          <Star className="h-3 w-3 text-emerald-600 mr-2 flex-shrink-0" />
                          {highlight}
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="flex gap-3 pt-4">
                    <Link href="/registration" className="flex-1">
                      <Button className="w-full bg-emerald-600 hover:bg-emerald-700">Register Now</Button>
                    </Link>
                    <Button variant="outline" className="flex-1 bg-transparent">
                      Learn More
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Past Events */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Past Events</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              See what our previous attendees experienced and the value they gained from our events.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {pastEvents.map((event, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardHeader className="text-center">
                  <CardTitle className="text-lg mb-2">{event.title}</CardTitle>
                  <div className="text-slate-600 mb-2">{event.date}</div>
                  <div className="flex items-center justify-center space-x-4 text-sm">
                    <div className="flex items-center">
                      <Users className="h-4 w-4 mr-1 text-emerald-600" />
                      {event.attendees} Attendees
                    </div>
                    <div className="flex items-center">
                      <Star className="h-4 w-4 mr-1 text-yellow-500" />
                      {event.rating} Rating
                    </div>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-emerald-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Don't Miss Out on Future Events</h2>
          <p className="text-xl mb-8 text-emerald-100 max-w-2xl mx-auto">
            Stay informed about upcoming events, workshops, and exclusive opportunities to advance your career.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/registration">
              <Button size="lg" className="bg-white text-emerald-600 hover:bg-slate-100 text-lg px-8 py-3">
                Register for Events
              </Button>
            </Link>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-emerald-600 text-lg px-8 py-3 bg-transparent"
            >
              Subscribe to Updates
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
