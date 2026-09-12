import React, { useState, useEffect } from 'react';
import { Menu, X, PhoneCall } from 'lucide-react';
import { clinicDetails } from '../config';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Team', href: '#team' },
  { name: 'Gallery', href: '#gallery' },
  { name: 'Reviews', href: '#reviews' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-3' : 'bg-white py-4 md:py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2 z-50 relative">
          <div className="w-10 h-10 bg-teal-600 text-white rounded-full flex items-center justify-center font-bold text-xl shadow-md">
            S
          </div>
          <span className="font-bold text-xl md:text-2xl text-slate-900 tracking-tight">
            {clinicDetails.name}
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-6">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a 
                  href={link.href}
                  className="text-slate-600 hover:text-teal-600 font-medium text-sm transition-colors"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          <a 
            href="#booking"
            className="bg-teal-600 hover:bg-teal-700 text-white px-5 py-2.5 rounded-full font-medium text-sm transition-colors shadow-sm hover:shadow flex items-center gap-2"
          >
            <PhoneCall className="w-4 h-4" />
            Book Appointment
          </a>
        </nav>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-slate-800 z-50 relative p-2 -mr-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        {/* Mobile Menu Overlay */}
        <div 
          className={`fixed inset-0 bg-white z-40 transition-transform duration-300 ease-in-out md:hidden flex flex-col pt-24 px-6 ${
            mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <ul className="flex flex-col gap-6 text-lg font-medium text-slate-800">
            {navLinks.map((link) => (
              <li key={link.name} className="border-b border-slate-100 pb-4">
                <a 
                  href={link.href}
                  className="block w-full"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-8">
             <a 
              href="#booking"
              className="bg-teal-600 text-white px-6 py-4 rounded-xl font-medium flex items-center justify-center gap-2 w-full text-lg shadow-md"
              onClick={() => setMobileMenuOpen(false)}
            >
              Book Appointment
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
