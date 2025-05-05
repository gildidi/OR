import React from 'react';
import { TeamMember } from '@/api/entities';
import TeamMemberCard from './TeamMemberCard';
import SectionTitle from './SectionTitle';
import { Link } from 'react-router-dom';
import { createPageUrl } from "@/utils";
import { ArrowLeft } from 'lucide-react';

export default function TeamSection({ limit = 3, showViewAll = true }) {
  const [teamMembers, setTeamMembers] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  
  React.useEffect(() => {
    async function fetchTeam() {
      try {
        const data = await TeamMember.list();
        setTeamMembers(data.slice(0, limit));
      } catch (error) {
        console.error("Error fetching team members", error);
      } finally {
        setLoading(false);
      }
    }
    
    fetchTeam();
  }, [limit]);
  
  if (loading) {
    return (
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="צוות המשרד" 
            subtitle="צוות עורכי הדין המוביל שלנו" 
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map(i => (
              <div key={i} className="bg-white rounded-lg shadow-lg overflow-hidden animate-pulse">
                <div className="w-full h-64 bg-navy-200"></div>
                <div className="p-6">
                  <div className="h-5 bg-navy-200 rounded w-1/3 mb-2"></div>
                  <div className="h-4 bg-navy-100 rounded w-1/4 mb-4"></div>
                  <div className="space-y-2">
                    <div className="h-4 bg-navy-100 rounded w-full"></div>
                    <div className="h-4 bg-navy-100 rounded w-full"></div>
                    <div className="h-4 bg-navy-100 rounded w-2/3"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  
  // If no team members yet, show a placeholder
  if (teamMembers.length === 0) {
    return null;
  }
  
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="צוות המשרד" 
          subtitle="צוות עורכי הדין המוביל שלנו" 
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <TeamMemberCard 
              key={member.id}
              member={member}
              featured={index === 0}
            />
          ))}
        </div>
        
        {showViewAll && (
          <div className="text-center mt-12">
            <Link 
              to={createPageUrl("Team")}
              className="inline-flex items-center text-navy-700 hover:text-gold-500 font-bold"
            >
              <span>לכל צוות המשרד</span>
              <ArrowLeft className="h-5 w-5 mr-2" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}