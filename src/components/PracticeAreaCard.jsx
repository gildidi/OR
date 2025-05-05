import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from "@/utils";
import { ArrowLeft } from 'lucide-react';

export default function PracticeAreaCard({ title, description, icon: Icon, link }) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 transition-all hover:shadow-xl hover:scale-[1.02]">
      <div className="h-16 w-16 bg-navy-100 rounded-md flex items-center justify-center mb-4">
        <Icon className="h-8 w-8 text-gold-500" />
      </div>
      
      <h3 className="text-xl font-bold text-navy-900 mb-3">{title}</h3>
      
      <p className="text-navy-700 mb-5 leading-relaxed">
        {description}
      </p>
      
      <Link
        to={link}
        className="inline-flex items-center text-gold-500 hover:text-gold-600 font-bold"
      >
        <span>קרא עוד</span>
        <ArrowLeft className="h-5 w-5 mr-2 transition-transform group-hover:-translate-x-1" />
      </Link>
    </div>
  );
}