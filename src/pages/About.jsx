import React from 'react';
import HeroSection from '../components/HeroSection';
import SectionTitle from '../components/SectionTitle';
import { Award, ThumbsUp, Clock, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';
import { createPageUrl } from "@/utils";

export default function AboutPage() {
  const values = [
    {
      title: "מקצועיות",
      description: 'הצוות המשפטי שלנו מביא ידע וניסיון משמעותי בתחום הנדל"ן ומיסוי מקרקעין, עם התמחות ספציפית במורכבויות של שוק הנדל"ן הישראלי.',
      icon: BookOpen
    },
    {
      title: "זמינות",
      description: 'אנחנו מבינים שעסקאות נדל"ן לעתים דורשות תגובה מהירה. צוות המשרד מחויב לזמינות גבוהה ומענה מהיר לצרכי הלקוחות.',
      icon: Clock
    },
    {
      title: "אמינות",
      description: 'אנו מאמינים בקשר כן ואמין עם לקוחותינו, כולל שקיפות מלאה בכל הנוגע להליכים משפטיים, עלויות ותוצאות צפויות.',
      icon: ThumbsUp
    },
    {
      title: "מצוינות",
      description: 'המשרד חותר למצוינות בכל תיק ועסקה, תוך הקפדה על סטנדרטים גבוהים והשאיפה להשיג את התוצאות הטובות ביותר עבור לקוחותינו.',
      icon: Award
    }
  ];

  return (
    <div>
      <HeroSection 
        title="אודות המשרד"
        subtitle="משרד עורכי דין המתמחה בתחום הנדל״ן ומיסוי מקרקעין"
        buttonText=""
        backgroundImage="https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=2069"
        size="medium"
      />

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-start gap-12">
            <div className="md:w-1/2">
              <SectionTitle 
                title="הסיפור שלנו" 
                align="right"
              />
              <div className="space-y-4 text-navy-700 leading-relaxed">
                <p>
                  משרד עורכי דין אור ושות' נוסד בשנת 2010 על ידי עו"ד אור, לאחר שצבר ניסיון עשיר בתחום הנדל"ן ומיסוי מקרקעין במשרדים מובילים בתחום.
                </p>
                <p>
                  מאז הקמתו, המשרד התמקד במתן פתרונות משפטיים יצירתיים וחדשניים בתחום הנדל"ן, תוך שימת דגש על התאמת הייעוץ המשפטי לצרכים הספציפיים של כל לקוח ולקוח.
                </p>
                <p>
                  עם השנים, המשרד התרחב וכיום מונה צוות של עורכי דין מובילים בתחומם, המתמחים בהיבטים השונים של דיני מקרקעין ומיסוי. המומחיות המשולבת של צוות המשרד מאפשרת מתן מענה כולל לכל סוגיה משפטית בתחום הנדל"ן.
                </p>
                <p>
                  משרדנו מעניק שירותים ליזמים, קבלנים, חברות נדל"ן, קבוצות רכישה ולקוחות פרטיים, ומלווה את לקוחותיו בכל שלבי העסקה - החל משלב הבדיקות המקדימות, דרך ניהול המשא ומתן וניסוח ההסכמים, וכלה בהשלמת העסקה ורישום הזכויות.
                </p>
              </div>
            </div>
            
            <div className="md:w-1/2">
              <div className="aspect-square md:aspect-[4/5] relative rounded-lg overflow-hidden shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1487611459768-bd414656ea10?q=80&w=2070" 
                  alt="משרד עורכי דין" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900/60 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">אור ושות' - עורכי דין</h3>
                  <p className="text-navy-100">
                    משרד עורכי דין המתמחה בתחום הנדל״ן ומיסוי מקרקעין
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-navy-50">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="הערכים שלנו"
            subtitle="העקרונות המנחים את העבודה המשפטית שלנו" 
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 transition-transform hover:-translate-y-1 hover:shadow-xl">
                <div className="h-16 w-16 bg-gold-100 rounded-full flex items-center justify-center mb-4">
                  <value.icon className="h-8 w-8 text-gold-500" />
                </div>
                <h3 className="text-xl font-bold text-navy-900 mb-3">{value.title}</h3>
                <p className="text-navy-700 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-navy-900">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=2149"
                alt="עורך דין" 
                className="rounded-lg shadow-xl w-full h-auto"
              />
            </div>
            
            <div className="md:w-1/2">
              <SectionTitle 
                title='המייסד - עו"ד אור'
                align="right"
                light={true}
              />
              
              <div className="space-y-4 text-navy-100 leading-relaxed">
                <p>
                  עו"ד אור, מייסד ושותף מנהל במשרד, הוא בעל ניסיון של למעלה מ-15 שנים בתחום הנדל"ן ומיסוי מקרקעין.
                </p>
                <p>
                  כבוגר הפקולטה למשפטים באוניברסיטת תל אביב ובעל תואר שני במנהל עסקים, עו"ד אור משלב ידע משפטי מעמיק עם הבנה עסקית רחבה, המאפשרת לו להציע ללקוחותיו פתרונות המשלבים ראייה משפטית וכלכלית כאחד.
                </p>
                <p>
                  במהלך השנים ליווה עו"ד אור עשרות עסקאות נדל"ן מורכבות, כולל פרויקטים של התחדשות עירונית, עסקאות קומבינציה, ייצוג יזמים בפרויקטים מסחריים וליווי קבוצות רכישה.
                </p>
                <p>
                  עו"ד אור הוא מרצה מבוקש בתחום הנדל"ן ומיסוי מקרקעין, ומפרסם מאמרים מקצועיים בכתבי עת ובאתרים מובילים בתחום.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <SectionTitle 
            title="חזון המשרד"
            subtitle="המטרות והשאיפות שמנחות אותנו" 
          />
          
          <div className="max-w-3xl mx-auto">
            <p className="text-navy-700 leading-relaxed mb-8">
              חזון משרד עורכי דין אור ושות' הוא להיות משרד מוביל בתחום הנדל"ן ומיסוי מקרקעין בדרום הארץ, המספק ללקוחותיו ייעוץ משפטי ברמה הגבוהה ביותר, תוך שמירה על ערכי המקצועיות, השירותיות והיושרה.
            </p>
            
            <p className="text-navy-700 leading-relaxed mb-8">
              אנו שואפים להמשיך ולהרחיב את מעגל הלקוחות ואת תחומי העיסוק של המשרד, תוך התעדכנות מתמדת בחידושים בחקיקה, בפסיקה ובפרקטיקה בתחום הנדל"ן ומיסוי מקרקעין.
            </p>
            
            <div className="flex justify-center">
              <Link 
                to={createPageUrl("Contact")} 
                className="px-8 py-3 bg-gold-500 hover:bg-gold-600 text-navy-900 font-bold rounded-md transition-colors"
              >
                דברו איתנו
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}