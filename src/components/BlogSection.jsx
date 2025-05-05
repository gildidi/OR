import React from 'react';
import { BlogPost } from '@/api/entities';
import BlogCard from './BlogCard';
import SectionTitle from './SectionTitle';
import { Link } from 'react-router-dom';
import { createPageUrl } from "@/utils";
import { ArrowLeft } from 'lucide-react';

export default function BlogSection({ limit = 3, showViewAll = true }) {
  const [posts, setPosts] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  
  React.useEffect(() => {
    async function fetchPosts() {
      try {
        const data = await BlogPost.list('-publish_date');
        setPosts(data.slice(0, limit));
      } catch (error) {
        console.error("Error fetching blog posts", error);
      } finally {
        setLoading(false);
      }
    }
    
    fetchPosts();
  }, [limit]);
  
  if (loading) {
    return (
      <section className="py-16 bg-navy-50">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="מאמרים ועדכונים"
            subtitle='מתעדכנים בחדשות והתפתחויות בתחום הנדל"ן והמיסוי'
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map(i => (
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
        </div>
      </section>
    );
  }
  
  // If no posts yet, show a placeholder
  if (posts.length === 0) {
    return null;
  }
  
  return (
    <section className="py-16 bg-navy-50">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="מאמרים ועדכונים"
          subtitle='מתעדכנים בחדשות והתפתחויות בתחום הנדל"ן והמיסוי'
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map(post => (
            <BlogCard 
              key={post.id}
              post={post}
            />
          ))}
        </div>
        
        {showViewAll && (
          <div className="text-center mt-12">
            <Link 
              to={createPageUrl("Blog")}
              className="inline-flex items-center text-navy-700 hover:text-gold-500 font-bold"
            >
              <span>לכל המאמרים</span>
              <ArrowLeft className="h-5 w-5 mr-2" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}