import React from 'react';
import { clinicDetails } from '../config';

// Custom SVG WhatsApp icon to avoid extra icon library dependencies for a specific brand logo
const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" width="32" height="32" fill="white">
    <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564c.173.087.289.129.332.202.043.073.043.423-.101.827z"/>
    <path d="M12.031 2C6.495 2 2 6.494 2 12.032c0 1.767.462 3.491 1.34 5L2 22l5.127-1.343a9.98 9.98 0 004.904 1.275h.002c5.535 0 10.035-4.496 10.035-10.034C22.068 6.494 17.567 2 12.031 2zM12.03 19.967h-.001c-1.498 0-2.966-.402-4.25-1.164l-.305-.181-3.158.828.844-3.079-.198-.316a7.994 7.994 0 01-1.224-4.269c0-4.43 3.604-8.034 8.036-8.034 4.433 0 8.038 3.605 8.038 8.035-.001 4.43-3.605 8.033-8.038 8.033z"/>
  </svg>
);

export default function FloatingWhatsApp() {
  const message = encodeURIComponent("Hello, I would like to book a dental appointment.");
  // Make sure to clean the number for the wa.me link
  const cleanNumber = clinicDetails.whatsapp.replace(/[^0-9]/g, '');

  return (
    <a 
      href={`https://wa.me/${cleanNumber}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-[90] bg-[#25D366] hover:bg-[#128C7E] text-white p-3.5 rounded-full shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex items-center justify-center group"
      aria-label="Contact us on WhatsApp"
    >
      <WhatsAppIcon />
      <span className="absolute right-full mr-4 bg-white text-slate-800 text-sm font-bold py-2 px-4 rounded-xl shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap hidden sm:block">
        Chat with us
      </span>
    </a>
  );
}
