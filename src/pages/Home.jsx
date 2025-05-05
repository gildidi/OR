import React from 'react';
import { Building2, Calculator, Briefcase, Users, MapPin, Phone, Mail, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { createPageUrl } from "@/utils";

import HeroSection from '../components/HeroSection';
import SectionTitle from '../components/SectionTitle';
import TestimonialsSection from '../components/TestimonialsSection';
import TeamSection from '../components/TeamSection';
import BlogSection from '../components/BlogSection';
import FAQSection from '../components/FAQSection';
import LogosSection from '../components/LogosSection';
import PracticeAreaCard from '../components/PracticeAreaCard';
import ContactForm from '../components/ContactForm';

export default function HomePage() {
  return (
    <div>
      <HeroSection 
        title="ליווי משפטי מקצועי בתחום הנדל״ן ומיסוי מקרקעין"
        subtitle="משרד עורכי דין אור ושות' מתמחה בתחום הנדל״ן ומיסוי מקרקעין, ומלווה עסקאות מורכבות באופן מקיף ומקצועי"
        buttonText="צור קשר עכשיו"
        backgroundImage="https://images.unsplash.com/photo-1575517111478-7f6afd0973db?q=80&w=2070"
      />

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=2070" 
                alt="תמונת משרד" 
                className="rounded-lg shadow-xl w-full h-auto"
              />
            </div>
            <div className="md:w-1/2">
              <SectionTitle 
                title="אודות משרדנו" 
                subtitle="מומחיות וניסיון בתחום הנדל״ן ומיסוי מקרקעין" 
                align="right"
              />
              <p className="text-navy-700 leading-relaxed mb-6">
                משרד עורכי הדין אור ושות' נוסד בשנת 2010 ומתמחה בליווי משפטי בתחום הנדל״ן ומיסוי מקרקעין. 
                המשרד מעניק שירותים משפטיים מקיפים ליזמים, קבלנים, חברות בנייה וללקוחות פרטיים.
              </p>
              <p className="text-navy-700 leading-relaxed mb-6">
                הצוות המקצועי שלנו, בראשות עו"ד אור, מלווה עסקאות נדל"ן מורכבות משלב המשא ומתן ועד להשלמת העסקה, תוך מתן דגש על תכנון מס אופטימלי והתאמת הפתרון המשפטי לצרכי הלקוח.
              </p>
              <div className="flex justify-end">
                <Link 
                  to={createPageUrl("About")} 
                  className="px-6 py-3 bg-navy-900 hover:bg-navy-800 text-white rounded-md transition-colors"
                >
                  קרא עוד אודותינו
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-navy-50">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="תחומי התמחות" 
            subtitle='משרדנו מתמחה במגוון תחומים בנדל"ן ומיסוי מקרקעין'
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <PracticeAreaCard 
              title="נדל״ן"
              description="ליווי עסקאות רכישה ומכירה של נכסים, הסכמי שכירות, פיתוח נדל״ן, התחדשות עירונית, קבוצות רכישה ועוד."
              icon={Building2}
              link={createPageUrl("PracticeAreas") + "?area=real_estate"}
            />
            
            <PracticeAreaCard 
              title="מיסוי מקרקעין"
              description="ייעוץ בתחום מס שבח, מס רכישה, מס הכנסה משכירות, היטל השבחה, תכנון מס וליווי בהליכים מול רשויות המס."
              icon={Calculator}
              link={createPageUrl("PracticeAreas") + "?area=property_tax"}
            />
            
            <PracticeAreaCard 
              title="ליווי משפטי לעסקאות"
              description="ניהול משא ומתן, ניסוח ובדיקת חוזים, בדיקות נאותות, רישום הערות אזהרה והעברת זכויות בטאבו."
              icon={Briefcase}
              link={createPageUrl("PracticeAreas") + "?area=transactions"}
            />
            
            <PracticeAreaCard 
              title="ייצוג מול רשויות"
              description="ייצוג בעניינים משפטיים מול רשויות התכנון, רשויות המס, רשם המקרקעין ורשויות מקומיות."
              icon={Users}
              link={createPageUrl("PracticeAreas") + "?area=authorities"}
            />
          </div>
        </div>
      </section>

      <TestimonialsSection />
      <LogosSection />
      <TeamSection />
      <BlogSection />
      <FAQSection />

      <section className="py-16 bg-navy-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <SectionTitle 
                title="צרו קשר"
                subtitle="נשמח לענות על כל שאלה ולסייע בכל עניין משפטי" 
                align="right"
                light={true}
              />
              
              <div className="text-navy-100 leading-relaxed space-y-4 mb-8">
                <p>
                  משרדנו ממוקם במרכז העיר באר שבע, בקרבת בית המשפט ומשרדי הממשלה. 
                  צוות המשרד זמין לענות על כל שאלה ולהעניק ייעוץ ראשוני בתחומים בהם אנו מתמחים.
                </p>
                <p>
                  מוזמנים לפנות אלינו בטלפון, בדוא"ל או באמצעות טופס יצירת הקשר.
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="h-12 w-12 rounded-full bg-navy-800 flex items-center justify-center ml-4">
                    <MapPin className="h-6 w-6 text-gold-500" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-1">כתובת המשרד</h4>
                    <p className="text-navy-100">רחוב הרצל 100, באר שבע</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="h-12 w-12 rounded-full bg-navy-800 flex items-center justify-center ml-4">
                    <Phone className="h-6 w-6 text-gold-500" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-1">טלפון</h4>
                    <p className="text-navy-100">054-1234567</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="h-12 w-12 rounded-full bg-navy-800 flex items-center justify-center ml-4">
                    <Mail className="h-6 w-6 text-gold-500" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-1">דוא"ל</h4>
                    <p className="text-navy-100">info@or-law.co.il</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="h-12 w-12 rounded-full bg-navy-800 flex items-center justify-center ml-4">
                    <Clock className="h-6 w-6 text-gold-500" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-1">שעות פעילות</h4>
                    <p className="text-navy-100">ימים א'-ה': 9:00-18:00</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}