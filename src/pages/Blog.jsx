import React, { useState, useEffect } from 'react';
import { BlogPost } from '@/api/entities';
import HeroSection from '../components/HeroSection';
import SectionTitle from '../components/SectionTitle';
import BlogCard from '../components/BlogCard';
import { Search } from 'lucide-react';

export default function BlogPage() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  const [categories, setCategories] = useState([]);
  
  useEffect(() => {
    async function fetchPosts() {
      try {
        const data = await BlogPost.list('-publish_date');
        setPosts(data);
        
        // Extract unique categories
        const uniqueCategories = [...new Set(data.map(post => post.category).filter(Boolean))];
        setCategories(uniqueCategories);
      } catch (error) {
        console.error("Error fetching blog posts", error);
      } finally {
        setLoading(false);
      }
    }
    
    fetchPosts();
  }, []);
  
  const filteredPosts = posts.filter(post => {
    const matchesSearch = !searchQuery || 
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.content.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCategory = activeCategory === 'all' || post.category === activeCategory;
    
    return matchesSearch && matchesCategory;
  });
  
  return (
    <div>
      <HeroSection 
        title="מאמרים ועדכונים"
        subtitle='תובנות ועדכונים בתחום הנדל"ן ומיסוי מקרקעין'
        buttonText=""
        backgroundImage="https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=2070"
        size="medium"
      />

      <section className="py-16">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="המאמרים שלנו"
            subtitle='תוכן מקצועי ומעשי בתחום הנדל"ן ומיסוי מקרקעין'
          />
          
          <div className="flex flex-col md:flex-row justify-between mb-12 gap-4">
            {/* Search */}
            <div className="relative w-full md:w-auto md:min-w-[300px]">
              <input
                type="text"
                placeholder="חיפוש מאמרים..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full py-2 px-4 pl-10 border border-navy-200 rounded-md focus:outline-none focus:ring-2 focus:ring-navy-600"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-navy-400 h-5 w-5" />
            </div>
            
            {/* Categories */}
            <div className="flex flex-wrap gap-2">
              <button
                className={`px-4 py-2 rounded-md text-sm transition-colors ${
                  activeCategory === 'all' 
                    ? 'bg-navy-900 text-white' 
                    : 'bg-navy-100 text-navy-800 hover:bg-navy-200'
                }`}
                onClick={() => setActiveCategory('all')}
              >
                הכל
              </button>
              
              {categories.map((category) => (
                <button
                  key={category}
                  className={`px-4 py-2 rounded-md text-sm transition-colors ${
                    activeCategory === category 
                      ? 'bg-navy-900 text-white' 
                      : 'bg-navy-100 text-navy-800 hover:bg-navy-200'
                  }`}
                  onClick={() => setActiveCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
          
          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[1, 2, 3, 4, 5, 6].map(i => (
                <div key={i} className="bg-white rounded-lg shadow-lg overflow-hidden animate-pulse">
                  <div className="w-full h-48 bg-navy-200"></div>
                  <div className="p-6">
                    <div className="flex justify-between mb-3">
                      <div className="h-4 bg-navy-100 rounded w-24"></div>
                      <div className="h-4 bg-navy-100 rounded w-20"></div>
                    </div>
                    <div className="h-6 bg-navy-200 rounded w-3/4 mb-3"></div>
                    <div className="space-y-2 mb-4">
                      <div className="h-4 bg-navy-100 rounded w-full"></div>
                      <div className="h-4 bg-navy-100 rounded w-full"></div>
                      <div className="h-4 bg-navy-100 rounded w-2/3"></div>
                    </div>
                    <div className="h-4 bg-navy-100 rounded w-16"></div>
                  </div>
                </div>
              ))}
            </div>
          ) : filteredPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {filteredPosts.map(post => (
                <BlogCard 
                  key={post.id}
                  post={post}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <h3 className="text-xl font-bold text-navy-900 mb-2">לא נמצאו מאמרים</h3>
              <p className="text-navy-700">
                לא נמצאו מאמרים התואמים את החיפוש שלך. נסה לשנות את מונחי החיפוש או לבחור קטגוריה אחרת.
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}