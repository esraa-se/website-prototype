import Link from "next/link"
import { Zap, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-emerald-600 rounded-lg flex items-center justify-center">
                <Zap className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold">ProServices</span>
            </Link>
            <p className="text-slate-400 leading-relaxed">
              Professional services that transform your vision into reality with precision, innovation, and unmatched
              quality.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-slate-400 hover:text-emerald-400 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-emerald-400 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-emerald-400 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-emerald-400 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-slate-400 hover:text-emerald-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-slate-400 hover:text-emerald-400 transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/events" className="text-slate-400 hover:text-emerald-400 transition-colors">
                  Events
                </Link>
              </li>
              <li>
                <Link href="/registration" className="text-slate-400 hover:text-emerald-400 transition-colors">
                  Registration
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-slate-400 hover:text-emerald-400 transition-colors">
                  Strategic Consulting
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-400 hover:text-emerald-400 transition-colors">
                  Project Management
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-400 hover:text-emerald-400 transition-colors">
                  Innovation Solutions
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-400 hover:text-emerald-400 transition-colors">
                  Quality Assurance
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-emerald-400" />
                <span className="text-slate-400">info@proservices.com</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-emerald-400" />
                <span className="text-slate-400">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 text-emerald-400 mt-1" />
                <span className="text-slate-400">
                  123 Business Ave
                  <br />
                  Suite 100
                  <br />
                  City, State 12345
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-400 text-sm">© 2024 ProServices. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-slate-400 hover:text-emerald-400 text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-slate-400 hover:text-emerald-400 text-sm transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-slate-400 hover:text-emerald-400 text-sm transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
