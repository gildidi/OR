import React from 'react';

export default function SectionTitle({ title, subtitle, align = "center", light = false }) {
  const alignClass = {
    'center': 'text-center',
    'right': 'text-right',
    'left': 'text-left'
  }[align];
  
  const colorClass = light ? 'text-white' : 'text-navy-900';
  const subtitleColorClass = light ? 'text-navy-100' : 'text-navy-600';
  
  return (
    <div className={`mb-12 ${alignClass}`}>
      <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${colorClass}`}>{title}</h2>
      {subtitle && (
        <p className={`text-lg ${subtitleColorClass} max-w-3xl mx-auto`}>{subtitle}</p>
      )}
      <div className={`mt-3 h-1 w-16 bg-gold-500 ${align === "center" ? "mx-auto" : align === "left" ? "mr-auto" : "ml-auto"}`}></div>
    </div>
  );
}