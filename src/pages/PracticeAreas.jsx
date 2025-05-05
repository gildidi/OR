import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createPageUrl } from "@/utils";
import { Building2, Calculator, Briefcase, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import HeroSection from '../components/HeroSection';
import SectionTitle from '../components/SectionTitle';

export default function PracticeAreasPage() {
  const navigate = useNavigate();
  const [activeArea, setActiveArea] = useState('real_estate');
  
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const area = urlParams.get('area');
    if (area && ['real_estate', 'property_tax', 'transactions', 'authorities'].includes(area)) {
      setActiveArea(area);
    }
  }, []);
  
  const handleTabChange = (area) => {
    setActiveArea(area);
    navigate(createPageUrl("PracticeAreas") + `?area=${area}`, { replace: true });
  };
  
  const areas = {
    real_estate: {
      title: "נדל\"ן",
      icon: Building2,
      heroImage: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=2073",
      content: [
        {
          title: "עסקאות נדל\"ן",
          description: "ליווי משפטי מקיף בעסקאות רכישה ומכירה של דירות, בתים, נכסים מסחריים וקרקעות. אנו מטפלים בכל ההיבטים המשפטיים של העסקה, החל מניסוח ובדיקת הסכמים, דרך ביצוע בדיקות נאותות, וכלה בהשלמת העסקה ורישום הזכויות."
        },
        {
          title: "התחדשות עירונית",
          description: "ליווי פרויקטים של פינוי-בינוי ותמ\"א 38 על כל סוגיה, כולל ייצוג יזמים וקבלנים בהתקשרויות עם בעלי דירות, טיפול בהיבטי המיסוי, הכנת מסמכי ההתקשרות וליווי הפרויקט עד להשלמתו."
        },
        {
          title: "קבוצות רכישה",
          description: "ארגון וליווי קבוצות רכישה, כולל הכנת מסמכי ההתקשרות בין חברי הקבוצה, ייצוג מול בעלי הקרקע, ליווי הפרויקט וטיפול בהיבטי המיסוי הייחודיים לעסקאות מסוג זה."
        },
        {
          title: "נדל\"ן מסחרי",
          description: "ייעוץ משפטי ליזמים ומשקיעים בפרויקטים של נדל\"ן מסחרי, כולל הקמת מרכזים מסחריים, מבני משרדים ונכסים מניבים. הטיפול כולל את כל שלבי הפרויקט, מרכישת הקרקע, דרך ההתקשרויות עם קבלנים ושוכרים, ועד ניהול הנכס לאחר השלמתו."
        },
        {
          title: "הסכמי שכירות",
          description: "ניסוח, בדיקה וייעוץ בקשר להסכמי שכירות למגורים ולמסחר, הסכמי שכירות מוגנת, הסכמי ניהול ותחזוקה, וכל סוגי ההסכמים הנלווים לשכירות נכסים."
        }
      ]
    },
    property_tax: {
      title: "מיסוי מקרקעין",
      icon: Calculator,
      heroImage: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?q=80&w=2070",
      content: [
        {
          title: "תכנון מס",
          description: "ייעוץ בתכנון מס אופטימלי בעסקאות נדל\"ן, כולל ניצול פטורים והקלות מס, תכנון מבנה העסקה באופן שימזער את חבות המס, ובחינת אפשרויות שונות לביצוע העסקה."
        },
        {
          title: "מס שבח ומס רכישה",
          description: "ייעוץ וטיפול בכל הקשור למס שבח ומס רכישה, כולל הכנת שומות עצמיות, הגשת בקשות לפטורים והקלות, והשגות על שומות שהוצאו על ידי רשויות המס."
        },
        {
          title: "מס הכנסה מנדל\"ן",
          description: "ייעוץ בנושא מיסוי הכנסות משכירות, מכירת נכסים שנחשבים כמלאי עסקי, והשלכות המס של פעילות עסקית בתחום הנדל\"ן."
        },
        {
          title: "היטל השבחה",
          description: "ייעוץ בנושא היטלי השבחה, כולל בחינת החבות בהיטל, אפשרויות לפטור או דחיית תשלום, והגשת השגות וערעורים על שומות היטל ההשבחה."
        },
        {
          title: "ייצוג מול רשויות המס",
          description: "ייצוג לקוחות בהליכים מול רשויות המס, כולל בהליכי השגה, ערר וערעור על החלטות מיסוי, וליווי בביקורות ובדיקות של רשויות המס."
        }
      ]
    },
    transactions: {
      title: "ליווי משפטי לעסקאות",
      icon: Briefcase,
      heroImage: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=2070",
      content: [
        {
          title: "ניהול משא ומתן",
          description: "ליווי וייצוג במשא ומתן לקראת עסקאות נדל\"ן, תוך הבנת הצרכים והאינטרסים של הלקוח והשגת התנאים הטובים ביותר עבורו."
        },
        {
          title: "ניסוח חוזים",
          description: "ניסוח מדויק ומקצועי של כל סוגי החוזים בתחום הנדל\"ן, כולל הסכמי מכר, שכירות, שיתוף, קומבינציה, פינוי-בינוי, ועוד, תוך הקפדה על הגנה מירבית על האינטרסים של הלקוח."
        },
        {
          title: "בדיקות נאותות",
          description: "ביצוע בדיקות מקיפות של הנכס ושל הזכויות בו, לרבות בדיקות בטאבו, ברשות מקרקעי ישראל, במנהל התכנון, ברשויות המקומיות ובכל גוף רלוונטי אחר, לגילוי מגבלות, שעבודים וסיכונים אפשריים."
        },
        {
          title: "רישום והעברת זכויות",
          description: "טיפול בכל הליכי רישום והעברת הזכויות בנכס, כולל רישום הערות אזהרה, העברת זכויות בטאבו, רישום משכנתאות, רישום בתים משותפים ותקנונים מיוחדים."
        },
        {
          title: "ליווי פיננסי",
          description: "ליווי בהליכי קבלת מימון לעסקאות נדל\"ן, כולל ייעוץ בקשר להסכמי הלוואה ומשכנתא, הסכמי ליווי בנקאי לפרויקטים, והסדרת הבטוחות הנדרשות."
        }
      ]
    },
    authorities: {
      title: "ייצוג מול רשויות",
      icon: Users,
      heroImage: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070",
      content: [
        {
          title: "רשויות התכנון",
          description: "ייצוג לקוחות בהליכים מול ועדות התכנון המקומיות והמחוזיות, כולל הליכי תכנון ובנייה, הגשת התנגדויות לתוכניות, הגשת בקשות להיתרי בנייה ולשימושים חורגים, וטיפול בהליכי אכיפה בתחום התכנון והבנייה."
        },
        {
          title: "רשויות המס",
          description: "ייצוג לקוחות מול רשויות המס השונות, כולל מיסוי מקרקעין, מס הכנסה, מע\"מ ורשויות מקומיות, בהליכי שומה, השגה, ערר וערעור, וכן בהליכי גבייה והסדרי חוב."
        },
        {
          title: "רשם המקרקעין",
          description: "טיפול בכל ההליכים ברשם המקרקעין (טאבו), כולל רישום הערות אזהרה, רישום משכנתאות, רישום בתים משותפים, רישום תקנונים מיוחדים, ורישום זיקות הנאה."
        },
        {
          title: "רשות מקרקעי ישראל",
          description: "ייצוג לקוחות בהליכים מול רשות מקרקעי ישראל, כולל הליכי הקצאת קרקע, היוון, ניהול מכרזים, שינוי ייעוד, והעברת זכויות."
        },
        {
          title: "רשויות מקומיות",
          description: "ייצוג לקוחות מול רשויות מקומיות בנושאים הקשורים לנכסי מקרקעין, כולל טיפול בהיטלי פיתוח, היטלי השבחה, ארנונה, ואגרות שונות, וכן בהליכי התנגדות, השגה וערר על חיובים אלה."
        }
      ]
    }
  };

  return (
    <div>
      <HeroSection 
        title={`תחום התמחות: ${areas[activeArea].title}`}
        subtitle="ליווי מקצועי בכל ההיבטים המשפטיים של התחום"
        buttonText=""
        backgroundImage={areas[activeArea].heroImage}
        size="medium"
      />

      <section className="py-16">
        <div className="container mx-auto px-4">
          {/* Tabs */}
          <div className="flex flex-wrap justify-center mb-12 gap-2 md:gap-4">
            {Object.entries(areas).map(([key, area]) => (
              <button
                key={key}
                onClick={() => handleTabChange(key)}
                className={`flex items-center px-4 py-3 rounded-md transition-colors ${
                  activeArea === key 
                    ? 'bg-navy-900 text-white' 
                    : 'bg-navy-100 text-navy-800 hover:bg-navy-200'
                }`}
              >
                <area.icon className="h-5 w-5 ml-2" />
                <span>{area.title}</span>
              </button>
            ))}
          </div>

          {/* Content */}
          <div>
            <SectionTitle 
              title={areas[activeArea].title}
              subtitle="תחום התמחות מרכזי במשרדנו" 
              align="right"
            />
            
            <div className="space-y-10 mt-12">
              {areas[activeArea].content.map((item, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg p-6 md:p-8">
                  <h3 className="text-xl md:text-2xl font-bold text-navy-900 mb-4">{item.title}</h3>
                  <p className="text-navy-700 leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
            
            <div className="mt-16 text-center">
              <p className="text-lg text-navy-700 mb-6">
                לייעוץ ראשוני או לתיאום פגישה בנושא {areas[activeArea].title}, אנא צרו עמנו קשר.
              </p>
              <Link 
                to={createPageUrl("Contact")}
                className="inline-block px-8 py-3 bg-gold-500 hover:bg-gold-600 text-navy-900 font-bold rounded-md transition-colors"
              >
                צור קשר
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}