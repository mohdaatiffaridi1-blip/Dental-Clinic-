import React from 'react';
import { Star, Quote } from 'lucide-react';
import { clinicDetails } from '../config';

export default function Reviews() {
  return (
    <section id="reviews" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row gap-12 items-center mb-16">
          <div className="flex-1 text-center md:text-left">
            <span className="text-teal-600 font-bold tracking-wider text-sm uppercase mb-3 block">Patient Stories</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
              What Our Patients Say
            </h2>
            <p className="text-lg text-slate-600">
              Read real experiences from our valued patients.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex items-center gap-6">
            <div className="text-center">
              <div className="text-4xl font-extrabold text-slate-900">{clinicDetails.rating}</div>
              <div className="flex text-amber-400 my-1 justify-center">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
            </div>
            <div className="w-px h-12 bg-slate-200"></div>
            <div>
              <p className="text-slate-900 font-bold text-lg">Based on Google</p>
              <p className="text-slate-500 text-sm">{clinicDetails.reviewsCount} Patient Reviews</p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {clinicDetails.reviews.map((review, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 relative">
              <Quote className="absolute top-6 right-6 w-8 h-8 text-teal-100" />
              <div className="flex text-amber-400 mb-6">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>
              <p className="text-slate-700 leading-relaxed mb-8 relative z-10 italic">
                "{review.review}"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-teal-50 rounded-full flex items-center justify-center text-teal-700 font-bold text-lg">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">{review.name}</h4>
                  <span className="text-sm text-slate-500">Verified Patient</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
