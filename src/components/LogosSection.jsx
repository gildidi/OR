import React from 'react';

// Example company logos - would be replaced with actual client/partner logos
const logos = [
  {
    name: "קבוצת אשטרום",
    url: "https://via.placeholder.com/200x80?text=Logo+1"
  },
  {
    name: "שיכון ובינוי",
    url: "https://via.placeholder.com/200x80?text=Logo+2"
  },
  {
    name: "אפריקה ישראל",
    url: "https://via.placeholder.com/200x80?text=Logo+3"
  },
  {
    name: "קבוצת אלמוגים",
    url: "https://via.placeholder.com/200x80?text=Logo+4"
  },
  {
    name: "י.ח. דמרי",
    url: "https://via.placeholder.com/200x80?text=Logo+5"
  },
  {
    name: "חברה נוספת",
    url: "https://via.placeholder.com/200x80?text=Logo+6"
  }
];

export default function LogosSection() {
  return (
    <section className="py-16 bg-navy-900">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-xl md:text-2xl font-medium text-white mb-12">אנו עובדים עם החברות והגופים המובילים בענף</h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center">
          {logos.map((logo, index) => (
            <div key={index} className="flex items-center justify-center">
              <img 
                src={logo.url} 
                alt={logo.name}
                className="max-h-12 opacity-70 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}