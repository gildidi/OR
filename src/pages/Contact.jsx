import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import HeroSection from '../components/HeroSection';
import SectionTitle from '../components/SectionTitle';
import ContactForm from '../components/ContactForm';

export default function ContactPage() {
  return (
    <div>
      <HeroSection 
        title="צור קשר"
        subtitle="אנחנו כאן לענות על כל שאלה ולסייע בכל עניין משפטי"
        buttonText=""
        backgroundImage="https://images.unsplash.com/photo-1629168055581-2dbc080d319a?q=80&w=2070"
        size="medium"
      />

      <section className="py-16">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="דברו איתנו"
            subtitle="צוות המשרד זמין לענות על כל שאלה" 
          />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 mt-12">
            <div>
              <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
                <h3 className="text-xl font-bold text-navy-900 mb-6">פרטי התקשרות</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="h-10 w-10 rounded-full bg-gold-100 flex items-center justify-center ml-4">
                      <MapPin className="h-5 w-5 text-gold-500" />
                    </div>
                    <div>
                      <h4 className="font-bold text-navy-800 mb-1">כתובת המשרד</h4>
                      <p className="text-navy-600">רחוב הרצל 100, באר שבע</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="h-10 w-10 rounded-full bg-gold-100 flex items-center justify-center ml-4">
                      <Phone className="h-5 w-5 text-gold-500" />
                    </div>
                    <div>
                      <h4 className="font-bold text-navy-800 mb-1">טלפון</h4>
                      <p className="text-navy-600">054-1234567</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="h-10 w-10 rounded-full bg-gold-100 flex items-center justify-center ml-4">
                      <Mail className="h-5 w-5 text-gold-500" />
                    </div>
                    <div>
                      <h4 className="font-bold text-navy-800 mb-1">דוא"ל</h4>
                      <p className="text-navy-600">info@or-law.co.il</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="h-10 w-10 rounded-full bg-gold-100 flex items-center justify-center ml-4">
                      <Clock className="h-5 w-5 text-gold-500" />
                    </div>
                    <div>
                      <h4 className="font-bold text-navy-800 mb-1">שעות פעילות</h4>
                      <p className="text-navy-600">ימים א'-ה': 9:00-18:00</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-navy-900 rounded-lg shadow-lg p-8 text-white">
                <h3 className="text-xl font-bold mb-4">איך להגיע אלינו</h3>
                <p className="text-navy-100 mb-6">
                  משרדנו ממוקם במרכז העסקים של באר שבע, בקרבת בית המשפט ומשרדי הממשלה, מול קריית הממשלה, בבניין המשרדים אטריום.
                </p>
                <ul className="space-y-2 text-navy-100">
                  <li className="flex items-center">
                    <span className="h-2 w-2 bg-gold-500 rounded-full ml-2"></span>
                    <span>חניה: חניון ציבורי בתשלום בקרבת המשרד</span>
                  </li>
                  <li className="flex items-center">
                    <span className="h-2 w-2 bg-gold-500 rounded-full ml-2"></span>
                    <span>תחבורה ציבורית: קווי אוטובוס 1, 2, 7 עוצרים בקרבת מקום</span>
                  </li>
                  <li className="flex items-center">
                    <span className="h-2 w-2 bg-gold-500 rounded-full ml-2"></span>
                    <span>רכבת: תחנת הרכבת באר שבע מרכז במרחק 10 דקות הליכה</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <section className="mb-16">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13744.798281623743!2d34.781483!3d31.24594!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15026407128ce0ad%3A0x1056af8019ff79eb!2z15TXqdeR15wg15HXkNeoINep15HXog!5e0!3m2!1siw!2sil!4v1650000000000!5m2!1siw!2sil" 
              width="100%" 
              height="450" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
}