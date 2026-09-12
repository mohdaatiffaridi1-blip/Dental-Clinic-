import React, { useState } from 'react';
import { X } from 'lucide-react';
import { clinicDetails } from '../config';

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section id="gallery" className="py-24 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-teal-400 font-bold tracking-wider text-sm uppercase mb-3 block">Inside Our Clinic</span>
          <h2 className="text-3xl md:text-4xl font-extrabold mb-6">
            Modern & Comfortable Environment
          </h2>
          <p className="text-lg text-slate-400">
            Take a look at our state-of-the-art facilities designed for your comfort and safety.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {clinicDetails.gallery.map((imgUrl, index) => (
            <div 
              key={index}
              className={`relative overflow-hidden rounded-2xl cursor-pointer group ${
                index === 0 ? 'md:col-span-2 md:row-span-2' : ''
              }`}
              onClick={() => setSelectedImage(imgUrl)}
            >
              <div className={`aspect-square ${index === 0 ? 'md:aspect-auto md:h-full' : ''}`}>
                <img 
                  src={imgUrl} 
                  alt={`Clinic view ${index + 1}`} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="absolute inset-0 bg-teal-900/0 group-hover:bg-teal-900/30 transition-colors duration-300 flex items-center justify-center">
                 <span className="opacity-0 group-hover:opacity-100 text-white bg-teal-600/90 px-4 py-2 rounded-full text-sm font-medium transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">
                   View Image
                 </span>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/90 backdrop-blur-sm p-4" onClick={() => setSelectedImage(null)}>
          <button 
            className="absolute top-6 right-6 text-white bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors"
            onClick={(e) => { e.stopPropagation(); setSelectedImage(null); }}
          >
            <X className="w-8 h-8" />
          </button>
          <img 
            src={selectedImage} 
            alt="Enlarged view" 
            className="max-w-full max-h-[90vh] rounded-lg shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
}
