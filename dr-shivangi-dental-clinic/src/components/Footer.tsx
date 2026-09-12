import React from 'react';
import { clinicDetails } from '../config';
import { Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-slate-950 text-slate-300 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          
          {/* Brand */}
          <div className="lg:col-span-1">
            <a href="#home" className="flex items-center gap-2 mb-6 inline-flex">
              <div className="w-10 h-10 bg-teal-500 text-white rounded-full flex items-center justify-center font-bold text-xl">
                S
              </div>
              <span className="font-bold text-xl text-white tracking-tight">
                {clinicDetails.name}
              </span>
            </a>
            <p className="text-slate-400 mb-6 leading-relaxed">
              Premium dental care focused on your comfort and long-term oral health. State-of-the-art facility in Ashok Nagar.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-6 tracking-wide">Quick Links</h4>
            <ul className="space-y-4">
              <li><a href="#home" className="hover:text-teal-400 transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-teal-400 transition-colors">About Us</a></li>
              <li><a href="#services" className="hover:text-teal-400 transition-colors">Our Services</a></li>
              <li><a href="#team" className="hover:text-teal-400 transition-colors">Meet The Team</a></li>
              <li><a href="#gallery" className="hover:text-teal-400 transition-colors">Clinic Gallery</a></li>
              <li><a href="#reviews" className="hover:text-teal-400 transition-colors">Patient Reviews</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-bold mb-6 tracking-wide">Our Services</h4>
            <ul className="space-y-4">
              {clinicDetails.services.slice(0, 6).map((service, i) => (
                <li key={i}><a href="#services" className="hover:text-teal-400 transition-colors">{service.title}</a></li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold mb-6 tracking-wide">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-teal-500 flex-shrink-0 mt-1" />
                <span>{clinicDetails.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-teal-500 flex-shrink-0" />
                <a href={`tel:${clinicDetails.phone.replace(/[^0-9+]/g, '')}`} className="hover:text-teal-400 transition-colors">{clinicDetails.phone}</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-teal-500 flex-shrink-0" />
                <a href={`mailto:${clinicDetails.email}`} className="hover:text-teal-400 transition-colors">{clinicDetails.email}</a>
              </li>
            </ul>
          </div>
          
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm text-center md:text-left">
            &copy; {currentYear} {clinicDetails.name}. All Rights Reserved.
          </p>
          <div className="text-slate-500 text-sm">
            Designed for Excellence
          </div>
        </div>

      </div>
    </footer>
  );
}
