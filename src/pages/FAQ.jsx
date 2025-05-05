import React, { useState, useEffect } from 'react';
import { FAQ } from '@/api/entities';
import HeroSection from '../components/HeroSection';
import SectionTitle from '../components/SectionTitle';
import { Search, ChevronDown, ChevronUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import { createPageUrl } from "@/utils";

export default function FAQPage() {
  const [faqs, setFaqs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  const [activeIndex, setActiveIndex] = useState(null);
  
  useEffect(() => {
    async function fetchFAQs() {
      try {
        const data = await FAQ.list('order');
        setFaqs(data);
      } catch (error) {
        console.error("Error fetching FAQs", error);
      } finally {
        setLoading(false);
      }
    }
    
    fetchFAQs();
  }, []);
  
  const toggleFAQ = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };
  
  const filteredFAQs = faqs.filter(faq => {
    const matchesSearch = !searchQuery || 
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCategory = activeCategory === 'all' || faq.category === activeCategory;
    
    return matchesSearch && matchesCategory;
  });
  
  // Group FAQs by category for showing count
  const categoryCount = faqs.reduce((acc, faq) => {
    if (faq.category) {
      acc[faq.category] = (acc[faq.category] || 0) + 1;
    }
    return acc;
  }, {});
  
  const categories = [
    { id: 'all', title: 'כל השאלות' },
    { id: 'real_estate', title: 'נדל"ן' },
    { id: 'property_tax', title: 'מיסוי מקרקעין' },
    { id: 'legal_process', title: 'הליך משפטי' },
    { id: 'general', title: 'כללי' }
  ];
  
  return (
    <div>
      <HeroSection 
        title="שאלות נפוצות"
        subtitle='תשובות לשאלות נפוצות בתחום הנדל"ן ומיסוי מקרקעין'
        buttonText=""
        backgroundImage="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070"
        size="medium"
      />

      <section className="py-16">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="מענה לשאלות נפוצות"
            subtitle='התשובות לשאלות הנפוצות בתחומי הנדל"ן ומיסוי מקרקעין'
          />
          
          <div className="max-w-4xl mx-auto">
            {/* Search and Filter */}
            <div className="mb-12 space-y-6">
              <div className="relative">
                <input
                  type="text"
                  placeholder="חיפוש שאלות ותשובות..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full py-3 px-4 pl-12 border border-navy-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-navy-600 text-lg"
                />
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-navy-400 h-5 w-5" />
              </div>
              
              <div className="flex flex-wrap gap-2">
                {categories.map(category => (
                  <button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={`px-4 py-2 rounded-md text-sm transition-colors ${
                      activeCategory === category.id 
                        ? 'bg-navy-900 text-white' 
                        : 'bg-navy-100 text-navy-800 hover:bg-navy-200'
                    }`}
                  >
                    {category.title}
                    {category.id !== 'all' && categoryCount[category.id] && (
                      <span className="mr-2 bg-white text-navy-800 px-2 py-0.5 rounded-full text-xs">
                        {categoryCount[category.id]}
                      </span>
                    )}
                  </button>
                ))}
              </div>
            </div>
            
            {/* FAQs */}
            {loading ? (
              <div className="space-y-4">
                {[1, 2, 3, 4, 5].map(i => (
                  <div key={i} className="border border-navy-200 rounded-lg p-5 animate-pulse">
                    <div className="flex justify-between items-center">
                      <div className="h-5 bg-navy-200 rounded w-2/3"></div>
                      <div className="w-6 h-6 rounded-full bg-navy-100"></div>
                    </div>
                  </div>
                ))}
              </div>
            ) : filteredFAQs.length > 0 ? (
              <div className="space-y-4">
                {filteredFAQs.map((faq, index) => (
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
                      className={`transition-all duration-300 overflow-hidden ${
                        activeIndex === index 
                          ? 'max-h-96 opacity-100' 
                          : 'max-h-0 opacity-0'
                      }`}
                    >
                      <div className="px-5 pb-5">
                        <p className="text-navy-700 leading-relaxed whitespace-pre-line">
                          {faq.answer}
                        </p>
                        
                        {faq.category && (
                          <div className="mt-4 inline-block px-3 py-1 bg-navy-100 text-navy-800 rounded-full text-xs">
                            {categories.find(c => c.id === faq.category)?.title || faq.category}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <h3 className="text-xl font-bold text-navy-900 mb-2">לא נמצאו שאלות</h3>
                <p className="text-navy-700">
                  לא נמצאו שאלות התואמות את החיפוש שלך. נסה לשנות את מונחי החיפוש או לבחור קטגוריה אחרת.
                </p>
              </div>
            )}
            
            <div className="mt-16 text-center">
              <h3 className="text-xl font-bold text-navy-900 mb-4">לא מצאת תשובה לשאלה שלך?</h3>
              <p className="text-navy-700 mb-6">
                אנחנו כאן כדי לעזור. צור איתנו קשר ואחד מעורכי הדין שלנו יחזור אליך בהקדם.
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