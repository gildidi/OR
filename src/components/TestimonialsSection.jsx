import React from 'react';
import { Testimonial } from '@/api/entities';
import TestimonialCard from './TestimonialCard';
import SectionTitle from './SectionTitle';

export default function TestimonialsSection() {
  const [testimonials, setTestimonials] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  
  React.useEffect(() => {
    async function fetchTestimonials() {
      try {
        const data = await Testimonial.list();
        setTestimonials(data);
      } catch (error) {
        console.error("Error fetching testimonials", error);
      } finally {
        setLoading(false);
      }
    }
    
    fetchTestimonials();
  }, []);
  
  if (loading) {
    return (
      <section className="py-16 bg-navy-50">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="לקוחות ממליצים" 
            subtitle="מה אומרים עלינו לקוחות המשרד" 
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map(i => (
              <div key={i} className="bg-white rounded-lg shadow-lg p-6 md:p-8 animate-pulse">
                <div className="flex items-center mb-4">
                  <div className="h-14 w-14 rounded-full bg-navy-200"></div>
                  <div className="mr-4 flex-1">
                    <div className="h-5 bg-navy-200 rounded w-24 mb-2"></div>
                    <div className="h-4 bg-navy-100 rounded w-32"></div>
                  </div>
                </div>
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="w-5 h-5 mr-1 bg-navy-100 rounded-full"></div>
                  ))}
                </div>
                <div className="space-y-2">
                  <div className="h-4 bg-navy-100 rounded w-full"></div>
                  <div className="h-4 bg-navy-100 rounded w-full"></div>
                  <div className="h-4 bg-navy-100 rounded w-5/6"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  
  // If no testimonials yet, show a placeholder
  if (testimonials.length === 0) {
    return null;
  }
  
  return (
    <section className="py-16 bg-navy-50">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="לקוחות ממליצים" 
          subtitle="מה אומרים עלינו לקוחות המשרד" 
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map(testimonial => (
            <TestimonialCard 
              key={testimonial.id}
              testimonial={testimonial}
            />
          ))}
        </div>
      </div>
    </section>
  );
}