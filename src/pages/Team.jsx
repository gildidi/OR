import React, { useState, useEffect } from 'react';
import { TeamMember } from '@/api/entities';
import HeroSection from '../components/HeroSection';
import SectionTitle from '../components/SectionTitle';
import TeamMemberCard from '../components/TeamMemberCard';
import { Link } from 'react-router-dom';
import { createPageUrl } from "@/utils";

export default function TeamPage() {
  const [teamMembers, setTeamMembers] = useState([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    async function fetchTeam() {
      try {
        const data = await TeamMember.list();
        setTeamMembers(data);
      } catch (error) {
        console.error("Error fetching team members", error);
      } finally {
        setLoading(false);
      }
    }
    
    fetchTeam();
  }, []);
  
  return (
    <div>
      <HeroSection 
        title="צוות המשרד"
        subtitle="הכירו את הצוות המקצועי המוביל את משרדנו"
        buttonText=""
        backgroundImage="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070"
        size="medium"
      />

      <section className="py-16">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="צוות מקצועי ומנוסה"
            subtitle='צוות עורכי הדין במשרדנו מביא ניסיון עשיר וידע מעמיק בתחום הנדל"ן ומיסוי מקרקעין'
          />
          
          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
              {[1, 2, 3, 4].map(i => (
                <div key={i} className="bg-white rounded-lg shadow-lg overflow-hidden animate-pulse">
                  <div className="flex flex-col md:flex-row">
                    <div className="md:w-1/3">
                      <div className="w-full h-64 bg-navy-200"></div>
                    </div>
                    <div className="md:w-2/3 p-6">
                      <div className="h-6 bg-navy-200 rounded w-1/3 mb-2"></div>
                      <div className="h-4 bg-navy-100 rounded w-1/4 mb-4"></div>
                      <div className="space-y-2 mb-5">
                        <div className="h-4 bg-navy-100 rounded w-full"></div>
                        <div className="h-4 bg-navy-100 rounded w-full"></div>
                        <div className="h-4 bg-navy-100 rounded w-2/3"></div>
                      </div>
                      <div className="space-y-2">
                        <div className="h-4 bg-navy-100 rounded w-1/2"></div>
                        <div className="h-4 bg-navy-100 rounded w-1/3"></div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
              {teamMembers.map((member) => (
                <TeamMemberCard 
                  key={member.id}
                  member={member}
                  featured={false}
                />
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="py-16 bg-navy-50">
        <div className="container mx-auto px-4 text-center">
          <SectionTitle 
            title="עבודת צוות"
            subtitle="אנו מאמינים בכוחה של עבודת צוות איכותית" 
          />
          
          <div className="max-w-3xl mx-auto">
            <p className="text-navy-700 leading-relaxed mb-8">
              המשרד שלנו בנוי על שיתוף פעולה ועבודת צוות, המאפשרים לנו להעניק ללקוחותינו את המענה המקצועי והמקיף ביותר. 
              אנו מאמינים ששילוב המומחיות והניסיון של כל אחד מחברי הצוות מאפשר לנו להציע פתרונות יצירתיים וחדשניים לאתגרים המשפטיים המורכבים בתחום הנדל"ן.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
                <div className="text-3xl font-bold text-gold-500 mb-3">15+</div>
                <p className="text-navy-800">שנות ניסיון מצטברות בתחום</p>
              </div>
              
              <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
                <div className="text-3xl font-bold text-gold-500 mb-3">500+</div>
                <p className="text-navy-800">עסקאות נדל"ן שהושלמו בהצלחה</p>
              </div>
              
              <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
                <div className="text-3xl font-bold text-gold-500 mb-3">100%</div>
                <p className="text-navy-800">מסירות ומחויבות לכל לקוח</p>
              </div>
            </div>
            
            <div className="flex justify-center">
              <Link 
                to={createPageUrl("Contact")} 
                className="px-8 py-3 bg-gold-500 hover:bg-gold-600 text-navy-900 font-bold rounded-md transition-colors"
              >
                יצירת קשר עם המשרד
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}