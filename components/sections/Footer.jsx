import { Mail, MapPin, Phone } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
       <footer className="bg-slate-950/80 backdrop-blur-sm py-16 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="col-span-2">
              <h3 className="text-2xl font-bold  mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">MediCare+</h3>
              <p className="text-slate-400 mb-6 leading-relaxed max-w-md">
                Revolutionizing healthcare accessibility with cutting-edge technology 
                and compassionate care. Your health, our commitment.
              </p>
              <div className="flex flex-col space-y-3">
                <div className="flex items-center space-x-3 text-slate-400 hover:text-white transition-colors">
                  <Phone className="w-4 h-4" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-3 text-slate-400 hover:text-white transition-colors">
                  <Mail className="w-4 h-4" />
                  <span>hello@medicare.com</span>
                </div>
                <div className="flex items-center space-x-3 text-slate-400 hover:text-white transition-colors">
                  <MapPin className="w-4 h-4" />
                  <span>Healthcare District, Medical City</span>
                </div>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Quick Access</h4>
              <ul className="space-y-3">
                <li><Link href="/doctors" className="text-slate-400 hover:text-blue-400 transition-colors">Find Doctors</Link></li>
                <li><Link href="/specialties" className="text-slate-400 hover:text-blue-400 transition-colors">Specialties</Link></li>
                <li><Link href="/emergency" className="text-slate-400 hover:text-blue-400 transition-colors">Emergency Care</Link></li>
                <li><Link href="/telemedicine" className="text-slate-400 hover:text-blue-400 transition-colors">Telemedicine</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Support</h4>
              <ul className="space-y-3">
                <li><Link href="/help" className="text-slate-400 hover:text-blue-400 transition-colors">Help Center</Link></li>
                <li><Link href="/contact" className="text-slate-400 hover:text-blue-400 transition-colors">Contact Us</Link></li>
                <li><Link href="/privacy" className="text-slate-400 hover:text-blue-400 transition-colors">Privacy Policy</Link></li>
                <li><Link href="/terms" className="text-slate-400 hover:text-blue-400 transition-colors">Terms of Service</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 mt-12 pt-8 text-center">
            <p className="text-slate-400">
              © 2024 MediCare+. All rights reserved. Transforming healthcare, one patient at a time.
            </p>
          </div>
        </div>
      </footer>
  )
}

export default Footer