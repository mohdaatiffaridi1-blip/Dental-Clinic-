import React from 'react';
import { clinicDetails } from '../config';

export default function Team() {
  return (
    <section id="team" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-teal-600 font-bold tracking-wider text-sm uppercase mb-3 block">Meet Our Team</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6">
            Expert Dental Professionals
          </h2>
          <p className="text-lg text-slate-600">
            Our experienced and friendly team is dedicated to providing you with the highest quality dental care.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {clinicDetails.doctors.map((doctor, index) => (
            <div key={index} className="bg-slate-50 rounded-3xl overflow-hidden border border-slate-100 group max-w-sm mx-auto w-full">
              <div className="aspect-[4/5] overflow-hidden relative">
                <img 
                  src={doctor.photoUrl} 
                  alt={doctor.name} 
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-8 text-center relative bg-white m-2 rounded-2xl -mt-12 shadow-sm border border-slate-50 z-10">
                <h3 className="text-xl font-bold text-slate-900 mb-1">{doctor.name}</h3>
                <div className="text-teal-600 font-semibold text-sm mb-1">{doctor.specialization}</div>
                <div className="text-slate-500 text-sm mb-4">{doctor.qualification}</div>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {doctor.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
