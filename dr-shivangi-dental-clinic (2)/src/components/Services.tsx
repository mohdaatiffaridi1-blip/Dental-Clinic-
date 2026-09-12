import React from 'react';
import { Stethoscope, Activity, Smile, Sparkles, Shield, CheckCircle, ArrowRight } from 'lucide-react';
import { clinicDetails } from '../config';

// Map string icon names to Lucide components
const iconMap: Record<string, React.ReactNode> = {
  Stethoscope: <Stethoscope className="w-8 h-8" />,
  Activity: <Activity className="w-8 h-8" />,
  Smile: <Smile className="w-8 h-8" />,
  Sparkles: <Sparkles className="w-8 h-8" />,
  Shield: <Shield className="w-8 h-8" />,
  CheckCircle: <CheckCircle className="w-8 h-8" />
};

export default function Services() {
  return (
    <section id="services" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-teal-600 font-bold tracking-wider text-sm uppercase mb-3 block">Our Services</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6">
            Comprehensive Dental Care
          </h2>
          <p className="text-lg text-slate-600">
            We offer a wide range of modern dental treatments to keep your smile healthy and beautiful.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {clinicDetails.services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 group flex flex-col h-full"
            >
              <div className="w-16 h-16 bg-teal-50 text-teal-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-teal-600 group-hover:text-white transition-colors duration-300">
                {iconMap[service.iconName] || <Stethoscope className="w-8 h-8" />}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-teal-600 transition-colors">
                {service.title}
              </h3>
              <p className="text-slate-600 mb-6 flex-grow leading-relaxed">
                {service.description}
              </p>
              <a 
                href="#booking" 
                className="inline-flex items-center gap-2 text-teal-600 font-medium group/link"
              >
                Book Now 
                <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
              </a>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
