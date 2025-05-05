import React, { useState } from 'react';
import { FAQ } from '@/api/entities';
import SectionTitle from './SectionTitle';
import { ChevronDown, ChevronUp, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { createPageUrl } from "@/utils";

export default function FAQSection({ limit = 4, showViewAll = true, category = null }) {
  const [faqs, setFaqs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeIndex, setActiveIndex] = useState(null);
  
  React.useEffect(() => {
    async function fetchFAQs() {
      try {
        let data;
        if (category) {
          data = await FAQ.filter({ category });
        } else {
          data = await FAQ.list('order');
        }
        setFaqs(data.slice(0, limit));
      } catch (error) {
        console.error("Error fetching FAQs", error);
      } finally {
        setLoading(false);
      }
    }
    
    fetchFAQs();
  }, [limit, category]);
  
  const toggleFAQ = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };
  
  if (loading) {
    return (
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="שאלות נפוצות"
            subtitle='תשובות לשאלות מובילות בתחום הנדל"ן ומיסוי מקרקעין'
          />
          <div className="max-w-3xl mx-auto space-y-4">
            {[1, 2, 3, 4].map(i => (
              <div key={i} className="border border-navy-200 rounded-lg p-5 animate-pulse">
                <div className="flex justify-between items-center">
                  <div className="h-5 bg-navy-200 rounded w-2/3"></div>
                  <div className="w-6 h-6 rounded-full bg-navy-100"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  
  if (faqs.length === 0) {
    return null;
  }
  
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="שאלות נפוצות"
          subtitle='תשובות לשאלות מובילות בתחום הנדל"ן ומיסוי מקרקעין'
        />
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={faq.id} 
              className="border border-navy-200 rounded-lg overflow-hidden transition-all duration-300"
            >
              <button
                className="flex justify-between items-center w-full p-5 text-right bg-white hover:bg-navy-50 transition-colors"
                onClick={() => toggleFAQ(index)}
              >
                <h3 className="text-lg font-medium text-navy-900">
                  {faq.question}
                </h3>
                {activeIndex === index ? (
                  <ChevronUp className="h-5 w-5 text-gold-500" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-navy-500" />
                )}
              </button>
              
              <div 
                className={`px-5 transition-all duration-300 overflow-hidden ${
                  activeIndex === index 
                    ? 'max-h-96 pb-5 opacity-100' 
                    : 'max-h-0 pb-0 opacity-0'
                }`}
              >
                <p className="text-navy-700 leading-relaxed whitespace-pre-line">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        {showViewAll && (
          <div className="text-center mt-12">
            <Link 
              to={createPageUrl("FAQ")}
              className="inline-flex items-center text-navy-700 hover:text-gold-500 font-bold"
            >
              <span>לכל השאלות הנפוצות</span>
              <ArrowLeft className="h-5 w-5 mr-2" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}