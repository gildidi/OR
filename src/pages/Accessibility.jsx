import React from 'react';
import HeroSection from '../components/HeroSection';
import SectionTitle from '../components/SectionTitle';
import { Link } from 'react-router-dom';
import { createPageUrl } from "@/utils";

export default function AccessibilityPage() {
  return (
    <div>
      <HeroSection 
        title="הצהרת נגישות"
        subtitle="מחויבים לנגישות עבור כל המשתמשים"
        buttonText=""
        backgroundImage="https://images.unsplash.com/photo-1526662092594-e98c1e356d6a?q=80&w=2071"
        size="small"
      />

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <SectionTitle 
              title="הצהרת הנגישות של אתר אור ושות'"
              subtitle="עדכון אחרון: אפריל 2023" 
            />
            
            <div className="prose prose-lg max-w-none text-navy-800 leading-relaxed space-y-8">
              <p>
                משרד עורכי דין אור ושות' מחויב להנגיש את אתר האינטרנט שלו עבור אנשים עם מוגבלויות, בהתאם לתקנות שוויון זכויות לאנשים עם מוגבלות (התאמות נגישות לשירות), תשע"ג-2013, ולתקן הישראלי (ת"י 5568) לנגישות תכנים באינטרנט.
              </p>
              
              <h3 className="text-xl font-bold text-navy-900">מטרת הנגישות</h3>
              <p>
                מטרת הנגישות היא לאפשר לכלל הציבור, לרבות אנשים עם מוגבלות, לגלוש באתר בצורה נוחה ואפקטיבית. אנו פועלים כדי לשפר את נגישות האתר ולהפוך אותו לזמין עבור כל משתמשינו.
              </p>
              
              <h3 className="text-xl font-bold text-navy-900">אמצעי הנגישות באתר</h3>
              <p>
                האתר שלנו כולל את אמצעי הנגישות הבאים:
              </p>
              <ul className="list-disc pr-5 space-y-2">
                <li>תאימות לתוכנות קוראות מסך.</li>
                <li>פונט ברור וקריא.</li>
                <li>ניגודיות צבעים מתאימה.</li>
                <li>מבנה אתר עקבי ואינטואיטיבי.</li>
                <li>טקסט חלופי לתמונות.</li>
                <li>תפריטים נגישים באמצעות מקלדת.</li>
                <li>אפשרות לשינוי גודל הטקסט באמצעות הדפדפן.</li>
              </ul>
              
              <h3 className="text-xl font-bold text-navy-900">דפדפנים מומלצים</h3>
              <p>
                האתר שלנו נבדק ותומך בגרסאות העדכניות של הדפדפנים הנפוצים: Google Chrome, Mozilla Firefox, Microsoft Edge ו-Safari. מומלץ להשתמש בגרסה העדכנית ביותר של הדפדפן לקבלת חוויית גלישה מיטבית.
              </p>
              
              <h3 className="text-xl font-bold text-navy-900">ידע והכשרה בנגישות</h3>
              <p>
                צוות הפיתוח והעיצוב שלנו הוכשר בנושאי נגישות ועובד באופן שוטף על שיפור הנגישות באתר. אנו מאמינים שכל משתמש זכאי לחוויית גלישה טובה ומהנה.
              </p>
              
              <h3 className="text-xl font-bold text-navy-900">מגבלות הנגישות באתר</h3>
              <p>
                למרות מאמצינו להנגיש את כלל הדפים באתר, ייתכן כי חלק מהדפים באתר עדיין אינם נגישים, או שטרם נמצא פתרון טכנולוגי מתאים להנגשתם. אנחנו ממשיכים במאמצים לשפר את נגישות האתר, ככל האפשר.
              </p>
              
              <h3 className="text-xl font-bold text-navy-900">פניות בנושא נגישות</h3>
              <p>
                אם במהלך הגלישה באתר נתקלת בבעיית נגישות או יש לך הצעה לשיפור הנגישות, נשמח אם תדווח לנו על כך ונפעל לתקן את הבעיה בהקדם האפשרי.
              </p>
              <p>
                ניתן ליצור קשר עם רכז הנגישות של האתר באמצעות דוא"ל accessibility@or-law.co.il או בטלפון 054-1234567.
              </p>
              
              <h3 className="text-xl font-bold text-navy-900">הצהרה משפטית</h3>
              <p>
                למרות מאמצינו לספק אתר נגיש, תיתכנה בעיות נגישות בעת הביקור באתר. במקרה כזה, אנא פנו אלינו ונעשה כל מאמץ לפתור את הבעיה בהקדם האפשרי.
              </p>
              
              <p className="mt-12 text-center">
                <Link 
                  to={createPageUrl("Contact")}
                  className="px-8 py-3 bg-gold-500 hover:bg-gold-600 text-navy-900 font-bold rounded-md transition-colors"
                >
                  צור קשר בנושא נגישות
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}