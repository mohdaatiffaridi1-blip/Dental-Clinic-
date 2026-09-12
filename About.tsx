import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { clinicDetails } from '../config';

export default function About() {
  const highlights = [
    "Experienced Dental Professionals",
    "Advanced Dental Technology",
    "Strict Hygiene Standards",
    "Patient-Centered Care",
    "Comfortable Clinic Environment",
    "Transparent Treatment Guidance"
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Quick Highlights */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-24">
          <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 text-center">
            <div className="w-12 h-12 bg-teal-100 text-teal-700 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="font-bold text-xl">10+</span>
            </div>
            <h3 className="font-bold text-slate-900 mb-1">Years Experience</h3>
            <p className="text-sm text-slate-500">Trusted expertise</p>
          </div>
          <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 text-center">
            <div className="w-12 h-12 bg-teal-100 text-teal-700 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="font-bold text-xl">5.0</span>
            </div>
            <h3 className="font-bold text-slate-900 mb-1">Google Rating</h3>
            <p className="text-sm text-slate-500">{clinicDetails.reviewsCount} Patient Reviews</p>
          </div>
          <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 text-center">
            <div className="w-12 h-12 bg-teal-100 text-teal-700 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="font-bold text-xl">100%</span>
            </div>
            <h3 className="font-bold text-slate-900 mb-1">Safe & Hygienic</h3>
            <p className="text-sm text-slate-500">Strict protocols</p>
          </div>
          <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 text-center">
            <div className="w-12 h-12 bg-teal-100 text-teal-700 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="font-bold text-xl">A+</span>
            </div>
            <h3 className="font-bold text-slate-900 mb-1">Modern Tech</h3>
            <p className="text-sm text-slate-500">Advanced treatments</p>
          </div>
        </div>

        {/* About Main */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-xl relative z-10">
              <img 
                src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=800" 
                alt="Clinic Interior" 
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative box */}
            <div className="absolute -bottom-8 -right-8 w-2/3 h-2/3 bg-teal-50 rounded-3xl -z-10 hidden md:block"></div>
          </div>
          
          <div>
            <span className="text-teal-600 font-bold tracking-wider text-sm uppercase mb-3 block">About Our Clinic</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6 leading-tight">
              Committed to Your <br/><span className="text-teal-600">Dental Wellness</span>
            </h2>
            <p className="text-slate-600 mb-6 leading-relaxed text-lg">
              At {clinicDetails.name}, we believe that a healthy smile is the foundation of overall well-being. Located in the heart of Ashok Nagar, New Delhi, we provide comprehensive, painless, and modern dental care tailored to your specific needs.
            </p>
            <p className="text-slate-600 mb-10 leading-relaxed">
              Led by Dr. Shivangi, our clinic combines advanced dental technology with a patient-first approach. We ensure every visit is comfortable, transparent, and built on trust, maintaining the highest standards of hygiene and safety.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-4 mb-10">
              {highlights.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-teal-500 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700 font-medium">{item}</span>
                </div>
              ))}
            </div>

            <a 
              href="#team"
              className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white px-6 py-3 rounded-xl font-medium transition-colors"
            >
              Meet Our Doctors
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
