import React from 'react';
import { Star } from 'lucide-react';

export default function TestimonialCard({ testimonial }) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 transition-transform hover:-translate-y-1 hover:shadow-xl">
      <div className="flex items-center mb-4">
        {testimonial.image_url ? (
          <img 
            src={testimonial.image_url} 
            alt={testimonial.client_name} 
            className="h-14 w-14 rounded-full object-cover border-2 border-gold-500"
          />
        ) : (
          <div className="h-14 w-14 rounded-full bg-navy-100 flex items-center justify-center text-navy-600 text-xl font-bold">
            {testimonial.client_name?.charAt(0) || "A"}
          </div>
        )}
        <div className="mr-4">
          <h4 className="font-bold text-navy-900">{testimonial.client_name}</h4>
          {testimonial.position && (
            <p className="text-sm text-navy-600">{testimonial.position}</p>
          )}
        </div>
      </div>
      
      {testimonial.rating && (
        <div className="flex mb-4">
          {[...Array(5)].map((_, i) => (
            <Star 
              key={i} 
              className={`w-5 h-5 ${i < testimonial.rating ? 'text-gold-500 fill-gold-500' : 'text-gray-300'}`} 
            />
          ))}
        </div>
      )}
      
      <blockquote className="text-navy-800 leading-relaxed">
        "{testimonial.content}"
      </blockquote>
    </div>
  );
}