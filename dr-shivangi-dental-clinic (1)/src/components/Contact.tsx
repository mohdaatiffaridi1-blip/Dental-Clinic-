import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, Calendar } from 'lucide-react';
import { clinicDetails } from '../config';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: '',
    service: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({ name: '', phone: '', date: '', service: '', message: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => setIsSuccess(false), 5000);
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid lg:grid-cols-2 gap-16">
          
          {/* Booking Form */}
          <div id="booking" className="bg-slate-50 p-8 md:p-10 rounded-3xl border border-slate-100 shadow-sm relative overflow-hidden">
            {/* Decorative blob */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-teal-100/50 rounded-full blur-3xl -z-10 translate-x-1/2 -translate-y-1/2"></div>
            
            <div className="mb-8">
              <span className="text-teal-600 font-bold tracking-wider text-sm uppercase mb-2 block">Online Booking</span>
              <h2 className="text-3xl font-extrabold text-slate-900 mb-2">Book Your Appointment</h2>
              <p className="text-slate-600">Request a convenient time for your visit.</p>
            </div>

            {isSuccess ? (
              <div className="bg-teal-50 border border-teal-200 text-teal-800 p-6 rounded-2xl flex flex-col items-center justify-center text-center py-12">
                 <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mb-4 text-teal-600">
                   <CheckCircle2 className="w-8 h-8" />
                 </div>
                 <h3 className="text-xl font-bold mb-2">Request Sent Successfully!</h3>
                 <p>Our team will contact you shortly to confirm your appointment time.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid md:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label htmlFor="name" className="text-sm font-medium text-slate-700">Full Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name" 
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all bg-white"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label htmlFor="phone" className="text-sm font-medium text-slate-700">Phone Number</label>
                    <input 
                      type="tel" 
                      id="phone" 
                      name="phone" 
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all bg-white"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label htmlFor="date" className="text-sm font-medium text-slate-700">Preferred Date</label>
                    <input 
                      type="date" 
                      id="date" 
                      name="date" 
                      required
                      value={formData.date}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all bg-white"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label htmlFor="service" className="text-sm font-medium text-slate-700">Service</label>
                    <select 
                      id="service" 
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all bg-white"
                    >
                      <option value="">General Checkup</option>
                      {clinicDetails.services.map((s, i) => (
                        <option key={i} value={s.title}>{s.title}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="message" className="text-sm font-medium text-slate-700">Message (Optional)</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all bg-white resize-none"
                    placeholder="Briefly describe your dental issue..."
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-teal-600 hover:bg-teal-700 text-white font-bold py-4 rounded-xl transition-colors flex items-center justify-center gap-2 disabled:opacity-70"
                >
                  {isSubmitting ? (
                    <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  ) : (
                    <>
                      <Calendar className="w-5 h-5" />
                      Request Appointment
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Contact Info & Map */}
          <div className="flex flex-col">
            <div className="mb-10">
              <span className="text-teal-600 font-bold tracking-wider text-sm uppercase mb-2 block">Contact Information</span>
              <h2 className="text-3xl font-extrabold text-slate-900 mb-8">Get In Touch</h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-teal-50 text-teal-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">Clinic Address</h4>
                    <p className="text-slate-600">{clinicDetails.address}</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-teal-50 text-teal-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">Opening Hours</h4>
                    <p className="text-slate-600 whitespace-pre-line">{clinicDetails.timings.replace(', ', '\n')}</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-teal-50 text-teal-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">Call Us</h4>
                    <a href={`tel:${clinicDetails.phone.replace(/[^0-9+]/g, '')}`} className="text-slate-600 hover:text-teal-600 transition-colors">
                      {clinicDetails.phone}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Container */}
            <div className="flex-grow w-full h-[300px] min-h-[300px] rounded-3xl overflow-hidden border border-slate-200 relative group">
              <iframe 
                src={clinicDetails.mapEmbedUrl} 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 z-0 grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
              ></iframe>
              <div className="absolute inset-0 pointer-events-none border border-slate-200 rounded-3xl z-10"></div>
            </div>
            <div className="mt-4">
               <a 
                 href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(clinicDetails.name + " " + clinicDetails.address)}`}
                 target="_blank"
                 rel="noopener noreferrer"
                 className="inline-flex items-center gap-2 text-teal-600 font-bold hover:text-teal-700 transition-colors"
               >
                 <MapPin className="w-5 h-5" />
                 Get Directions to Clinic
               </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
