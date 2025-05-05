import React from 'react';
import { Phone, Mail } from 'lucide-react';

export default function TeamMemberCard({ member, featured = false }) {
  return (
    <div className={`${featured ? 'md:col-span-2' : ''} bg-white rounded-lg shadow-lg overflow-hidden transition-transform hover:-translate-y-1 hover:shadow-xl`}>
      <div className={`flex flex-col ${featured ?'md:flex-row' : ''}`}>
        <div className={`${featured ? 'md:w-1/3' : 'w-full'}`}>
          {member.image_url ? (
            <img 
              src={member.image_url} 
              alt={member.name} 
              className="w-full h-64 object-cover object-center"
            />
          ) : (
            <div className="w-full h-64 bg-navy-100 flex items-center justify-center">
              <span className="text-5xl font-bold text-navy-300">{member.name?.charAt(0) || "A"}</span>
            </div>
          )}
        </div>
        
        <div className={`${featured ? 'md:w-2/3' : 'w-full'} p-6`}>
          <h3 className="text-xl font-bold text-navy-900 mb-1">{member.name}</h3>
          <p className="text-gold-600 mb-4">{member.position}</p>
          
          {member.bio && (
            <p className="text-navy-700 mb-5">{member.bio}</p>
          )}
          
          <div className="flex flex-col space-y-2">
            {member.email && (
              <a 
                href={`mailto:${member.email}`} 
                className="flex items-center text-navy-600 hover:text-gold-500 transition-colors"
              >
                <Mail className="h-4 w-4 ml-2" />
                {member.email}
              </a>
            )}
            {member.phone && (
              <a 
                href={`tel:${member.phone}`} 
                className="flex items-center text-navy-600 hover:text-gold-500 transition-colors"
              >
                <Phone className="h-4 w-4 ml-2" />
                {member.phone}
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}