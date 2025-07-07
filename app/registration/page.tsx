"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, User, Building, Calendar } from "lucide-react"

export default function RegistrationPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    jobTitle: "",
    industry: "",
    eventType: "",
    specificEvent: "",
    interests: [] as string[],
    experience: "",
    dietaryRestrictions: "",
    specialRequests: "",
    marketingConsent: false,
    termsAccepted: false,
  })

  const [isSubmitted, setIsSubmitted] = useState(false)

  const events = [
    { id: "summit-2024", name: "Digital Transformation Summit 2024", date: "March 15, 2024", price: "Free" },
    { id: "pm-masterclass", name: "Project Management Masterclass", date: "March 22, 2024", price: "$149" },
    { id: "innovation-expo", name: "Innovation & Technology Expo", date: "April 5, 2024", price: "$75" },
    { id: "qa-webinar", name: "Quality Assurance Best Practices", date: "April 12, 2024", price: "Free" },
    { id: "leadership-seminar", name: "Leadership in the Digital Age", date: "April 18, 2024", price: "$199" },
    { id: "client-gala", name: "Annual Client Appreciation Gala", date: "May 10, 2024", price: "Invitation Only" },
  ]

  const interests = [
    "Digital Transformation",
    "Project Management",
    "Quality Assurance",
    "Innovation & Technology",
    "Leadership Development",
    "Business Strategy",
    "Process Optimization",
    "Team Management",
  ]

  const handleInterestChange = (interest: string, checked: boolean) => {
    if (checked) {
      setFormData((prev) => ({
        ...prev,
        interests: [...prev.interests, interest],
      }))
    } else {
      setFormData((prev) => ({
        ...prev,
        interests: prev.interests.filter((i) => i !== interest),
      }))
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the data to your backend
    console.log("Form submitted:", formData)
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center py-20">
        <Card className="max-w-md mx-auto text-center border-0 shadow-lg">
          <CardHeader>
            <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="h-8 w-8 text-emerald-600" />
            </div>
            <CardTitle className="text-2xl text-emerald-600">Registration Successful!</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription className="text-slate-600 mb-6">
              Thank you for registering! We've sent a confirmation email with all the details. We look forward to seeing
              you at the event.
            </CardDescription>
            <Button onClick={() => setIsSubmitted(false)} className="bg-emerald-600 hover:bg-emerald-700">
              Register for Another Event
            </Button>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Event Registration
              <span className="text-emerald-400 block">Secure Your Spot Today</span>
            </h1>
            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              Join us for exclusive events and professional development opportunities. Complete the form below to
              register.
            </p>
          </div>
        </div>
      </section>

      {/* Registration Form */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Personal Information */}
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center text-xl">
                    <User className="h-5 w-5 mr-2 text-emerald-600" />
                    Personal Information
                  </CardTitle>
                  <CardDescription>Please provide your basic contact information.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name *</Label>
                      <Input
                        id="firstName"
                        value={formData.firstName}
                        onChange={(e) => setFormData((prev) => ({ ...prev, firstName: e.target.value }))}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name *</Label>
                      <Input
                        id="lastName"
                        value={formData.lastName}
                        onChange={(e) => setFormData((prev) => ({ ...prev, lastName: e.target.value }))}
                        required
                      />
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData((prev) => ({ ...prev, phone: e.target.value }))}
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Professional Information */}
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center text-xl">
                    <Building className="h-5 w-5 mr-2 text-emerald-600" />
                    Professional Information
                  </CardTitle>
                  <CardDescription>Help us understand your professional background.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="company">Company/Organization</Label>
                      <Input
                        id="company"
                        value={formData.company}
                        onChange={(e) => setFormData((prev) => ({ ...prev, company: e.target.value }))}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="jobTitle">Job Title</Label>
                      <Input
                        id="jobTitle"
                        value={formData.jobTitle}
                        onChange={(e) => setFormData((prev) => ({ ...prev, jobTitle: e.target.value }))}
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="industry">Industry</Label>
                    <Select onValueChange={(value) => setFormData((prev) => ({ ...prev, industry: value }))}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select your industry" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="technology">Technology</SelectItem>
                        <SelectItem value="finance">Finance</SelectItem>
                        <SelectItem value="healthcare">Healthcare</SelectItem>
                        <SelectItem value="manufacturing">Manufacturing</SelectItem>
                        <SelectItem value="retail">Retail</SelectItem>
                        <SelectItem value="education">Education</SelectItem>
                        <SelectItem value="consulting">Consulting</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </CardContent>
              </Card>

              {/* Event Selection */}
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center text-xl">
                    <Calendar className="h-5 w-5 mr-2 text-emerald-600" />
                    Event Selection
                  </CardTitle>
                  <CardDescription>Choose the event you'd like to attend.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-2">
                    <Label>Event Type *</Label>
                    <RadioGroup
                      value={formData.eventType}
                      onValueChange={(value) => setFormData((prev) => ({ ...prev, eventType: value }))}
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="single" id="single" />
                        <Label htmlFor="single">Single Event</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="multiple" id="multiple" />
                        <Label htmlFor="multiple">Multiple Events</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="all-access" id="all-access" />
                        <Label htmlFor="all-access">All-Access Pass</Label>
                      </div>
                    </RadioGroup>
                  </div>

                  <div className="space-y-2">
                    <Label>Select Specific Event *</Label>
                    <div className="grid gap-3">
                      {events.map((event) => (
                        <div
                          key={event.id}
                          className="flex items-center space-x-3 p-3 border rounded-lg hover:bg-slate-50"
                        >
                          <Checkbox
                            id={event.id}
                            checked={formData.specificEvent === event.id}
                            onCheckedChange={(checked) => {
                              if (checked) {
                                setFormData((prev) => ({ ...prev, specificEvent: event.id }))
                              }
                            }}
                          />
                          <div className="flex-1">
                            <Label htmlFor={event.id} className="font-medium cursor-pointer">
                              {event.name}
                            </Label>
                            <div className="text-sm text-slate-600">{event.date}</div>
                          </div>
                          <Badge variant="outline" className="text-emerald-600 border-emerald-600">
                            {event.price}
                          </Badge>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Interests & Preferences */}
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl">Interests & Preferences</CardTitle>
                  <CardDescription>Help us personalize your experience.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-2">
                    <Label>Areas of Interest (Select all that apply)</Label>
                    <div className="grid md:grid-cols-2 gap-3">
                      {interests.map((interest) => (
                        <div key={interest} className="flex items-center space-x-2">
                          <Checkbox
                            id={interest}
                            checked={formData.interests.includes(interest)}
                            onCheckedChange={(checked) => handleInterestChange(interest, checked as boolean)}
                          />
                          <Label htmlFor={interest} className="cursor-pointer">
                            {interest}
                          </Label>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="experience">Experience Level</Label>
                    <Select onValueChange={(value) => setFormData((prev) => ({ ...prev, experience: value }))}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select your experience level" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="beginner">Beginner (0-2 years)</SelectItem>
                        <SelectItem value="intermediate">Intermediate (3-5 years)</SelectItem>
                        <SelectItem value="advanced">Advanced (6-10 years)</SelectItem>
                        <SelectItem value="expert">Expert (10+ years)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="dietaryRestrictions">Dietary Restrictions</Label>
                    <Input
                      id="dietaryRestrictions"
                      value={formData.dietaryRestrictions}
                      onChange={(e) => setFormData((prev) => ({ ...prev, dietaryRestrictions: e.target.value }))}
                      placeholder="Please specify any dietary restrictions"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="specialRequests">Special Requests or Accommodations</Label>
                    <Textarea
                      id="specialRequests"
                      value={formData.specialRequests}
                      onChange={(e) => setFormData((prev) => ({ ...prev, specialRequests: e.target.value }))}
                      placeholder="Please describe any special accommodations needed"
                      rows={3}
                    />
                  </div>
                </CardContent>
              </Card>

              {/* Terms and Consent */}
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl">Terms & Consent</CardTitle>
                  <CardDescription>Please review and accept our terms.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start space-x-2">
                    <Checkbox
                      id="marketing"
                      checked={formData.marketingConsent}
                      onCheckedChange={(checked) =>
                        setFormData((prev) => ({ ...prev, marketingConsent: checked as boolean }))
                      }
                    />
                    <Label htmlFor="marketing" className="text-sm leading-relaxed cursor-pointer">
                      I consent to receiving marketing communications about future events, services, and opportunities.
                      You can unsubscribe at any time.
                    </Label>
                  </div>
                  <div className="flex items-start space-x-2">
                    <Checkbox
                      id="terms"
                      checked={formData.termsAccepted}
                      onCheckedChange={(checked) =>
                        setFormData((prev) => ({ ...prev, termsAccepted: checked as boolean }))
                      }
                      required
                    />
                    <Label htmlFor="terms" className="text-sm leading-relaxed cursor-pointer">
                      I accept the{" "}
                      <a href="#" className="text-emerald-600 hover:underline">
                        Terms of Service
                      </a>{" "}
                      and{" "}
                      <a href="#" className="text-emerald-600 hover:underline">
                        Privacy Policy
                      </a>{" "}
                      *
                    </Label>
                  </div>
                </CardContent>
              </Card>

              {/* Submit Button */}
              <div className="text-center">
                <Button
                  type="submit"
                  size="lg"
                  className="bg-emerald-600 hover:bg-emerald-700 text-lg px-12 py-3"
                  disabled={!formData.termsAccepted}
                >
                  Complete Registration
                  <CheckCircle className="ml-2 h-5 w-5" />
                </Button>
                <p className="text-sm text-slate-600 mt-4">
                  * Required fields must be completed to proceed with registration.
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}
