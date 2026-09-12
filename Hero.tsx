import React from 'react';
import { Star, ShieldCheck, Clock, MapPin, Calendar } from 'lucide-react';
import { clinicDetails } from '../config';

export default function Hero() {
  return (
    <section id="home" className="pt-28 md:pt-36 pb-16 md:pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden relative">
      <div className="grid md:grid-cols-2 gap-12 lg:gap-8 items-center">
        
        {/* Left Content */}
        <div className="flex flex-col items-start z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-teal-50 text-teal-700 font-medium text-sm mb-6 border border-teal-100 shadow-sm">
            <ShieldCheck className="w-4 h-4" />
            <span>Trusted Dental Care in New Delhi</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight mb-6 tracking-tight">
            Your Smile Deserves <span className="text-teal-600 relative inline-block">Expert Care<svg className="absolute w-full h-3 -bottom-1 left-0 text-teal-200/60 -z-10" viewBox="0 0 100 20" preserveAspectRatio="none"><path d="M0,10 Q50,20 100,10 L100,20 L0,20 Z" fill="currentColor"></path></svg></span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-600 mb-8 max-w-lg leading-relaxed">
            Experience painless, modern dentistry in a comfortable environment. We bring healthy, beautiful smiles to Ashok Nagar.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mb-10">
            <a 
              href="#booking"
              className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-4 rounded-xl font-medium transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2"
            >
              <Calendar className="w-5 h-5" />
              Book an Appointment
            </a>
            <a 
              href={`tel:${clinicDetails.phone.replace(/[^0-9+]/g, '')}`}
              className="bg-white hover:bg-slate-50 text-slate-800 border border-slate-200 px-8 py-4 rounded-xl font-medium transition-all flex items-center justify-center gap-2"
            >
              Call Now
            </a>
          </div>

          <div className="flex flex-wrap items-center gap-6 sm:gap-10 text-sm font-medium text-slate-600 pt-4 border-t border-slate-100 w-full">
            <div className="flex items-center gap-2">
              <div className="flex text-amber-400">
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
              </div>
              <span className="text-slate-900 font-bold">{clinicDetails.rating}/5</span> Patient Rating
            </div>
            <div className="flex items-center gap-2">
               <Clock className="w-4 h-4 text-teal-600" />
               Modern Care
            </div>
            <div className="flex items-center gap-2">
               <MapPin className="w-4 h-4 text-teal-600" />
               Ashok Nagar
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative z-10 w-full h-[400px] md:h-[500px] lg:h-[600px]">
          <div className="w-full h-full rounded-3xl overflow-hidden shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=1000" 
              alt="Modern Dental Clinic" 
              className="w-full h-full object-cover object-center"
            />
          </div>
          
          {/* Floating Element */}
          <div className="absolute -bottom-6 -left-6 md:bottom-8 md:-left-12 bg-white p-4 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-4 animate-[bounce_3s_ease-in-out_infinite] hidden sm:flex z-20">
             <div className="w-12 h-12 bg-teal-50 rounded-full flex items-center justify-center text-teal-600">
               <ShieldCheck className="w-6 h-6" />
             </div>
             <div>
               <p className="text-xs text-slate-500 font-medium">Certified</p>
               <p className="text-sm font-bold text-slate-900">Dental Professionals</p>
             </div>
          </div>
        </div>

      </div>
    </section>
  );
}
