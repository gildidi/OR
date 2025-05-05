import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { createPageUrl } from "@/utils";

export default function HeroSection({ 
  title, 
  subtitle, 
  buttonText = "צור קשר", 
  buttonLink = "/Contact", 
  backgroundImage = "https://images.unsplash.com/photo-1575517111478-7f6afd0973db?q=80&w=2070",
  overlay = true,
  size = "large" // large, medium, small
}) {
  const heightClass = {
    'large': 'min-h-[80vh]',
    'medium': 'min-h-[50vh]',
    'small': 'min-h-[30vh]'
  }[size];

  return (
    <div 
      className={`relative ${heightClass} flex items-center justify-center`}
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      {overlay && (
        <div className="absolute inset-0 bg-navy-900 opacity-70"></div>
      )}
      <div className="container mx-auto px-6 relative z-10 text-center">
        <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">{title}</h1>
        <p className="text-xl md:text-2xl text-navy-100 mb-8 max-w-3xl mx-auto">{subtitle}</p>
        {buttonText && (
          <Link 
            to={createPageUrl(buttonLink)} 
            className="inline-flex items-center bg-gold-500 hover:bg-gold-600 text-navy-900 font-bold py-3 px-6 rounded-md transition-colors group"
          >
            <span>{buttonText}</span>
            <ArrowLeft className="h-5 w-5 mr-2 transition-transform group-hover:-translate-x-1" />
          </Link>
        )}
      </div>
    </div>
  );
}