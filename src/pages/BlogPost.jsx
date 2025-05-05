import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { createPageUrl } from "@/utils";
import { BlogPost } from '@/api/entities';
import { Calendar, Tag, ArrowLeft, ChevronRight, ChevronLeft } from 'lucide-react';
import { format } from 'date-fns';
import { he } from 'date-fns/locale';
import { Link } from 'react-router-dom';

export default function BlogPostPage() {
  const navigate = useNavigate();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [relatedPosts, setRelatedPosts] = useState([]);
  
  useEffect(() => {
    async function fetchPost() {
      try {
        const urlParams = new URLSearchParams(window.location.search);
        const slug = urlParams.get('slug');
        
        if (!slug) {
          navigate(createPageUrl("Blog"));
          return;
        }
        
        const posts = await BlogPost.list();
        const foundPost = posts.find(p => p.slug === slug);
        
        if (!foundPost) {
          navigate(createPageUrl("Blog"));
          return;
        }
        
        setPost(foundPost);
        
        // Find related posts with the same category
        if (foundPost.category) {
          const related = posts
            .filter(p => p.id !== foundPost.id && p.category === foundPost.category)
            .slice(0, 3);
          setRelatedPosts(related);
        }
      } catch (error) {
        console.error("Error fetching blog post", error);
        navigate(createPageUrl("Blog"));
      } finally {
        setLoading(false);
      }
    }
    
    fetchPost();
  }, [navigate]);
  
  if (loading) {
    return (
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="animate-pulse">
              <div className="h-8 bg-navy-200 rounded w-3/4 mb-4"></div>
              <div className="flex space-x-4 space-x-reverse mb-8">
                <div className="h-4 bg-navy-100 rounded w-24"></div>
                <div className="h-4 bg-navy-100 rounded w-20"></div>
              </div>
              <div className="w-full h-64 bg-navy-200 rounded-lg mb-8"></div>
              <div className="space-y-3 mb-8">
                <div className="h-4 bg-navy-100 rounded w-full"></div>
                <div className="h-4 bg-navy-100 rounded w-full"></div>
                <div className="h-4 bg-navy-100 rounded w-full"></div>
                <div className="h-4 bg-navy-100 rounded w-2/3"></div>
              </div>
              <div className="space-y-3">
                <div className="h-4 bg-navy-100 rounded w-full"></div>
                <div className="h-4 bg-navy-100 rounded w-full"></div>
                <div className="h-4 bg-navy-100 rounded w-3/4"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  if (!post) return null;
  
  return (
    <div>
      <article className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="mb-8">
              <Link 
                to={createPageUrl("Blog")} 
                className="inline-flex items-center text-navy-700 hover:text-gold-500 mb-4"
              >
                <ChevronRight className="h-4 w-4 ml-1" />
                <span>חזרה למאמרים</span>
              </Link>
              
              <h1 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">{post.title}</h1>
              
              <div className="flex flex-wrap items-center text-navy-600 text-sm mb-6 gap-4">
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 ml-1" />
                  <time dateTime={post.publish_date}>
                    {format(new Date(post.publish_date), 'd בMMMM, yyyy', { locale: he })}
                  </time>
                </div>
                
                {post.category && (
                  <div className="flex items-center">
                    <Tag className="h-4 w-4 ml-1" />
                    <span>{post.category}</span>
                  </div>
                )}
              </div>
            </div>
            
            {post.image_url && (
              <div className="mb-8">
                <img 
                  src={post.image_url} 
                  alt={post.title} 
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>
            )}
            
            <div className="prose prose-lg max-w-none text-navy-800 leading-relaxed">
              {post.content.split('\n').map((paragraph, index) => (
                <p key={index} className="mb-4">{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </article>
      
      {relatedPosts.length > 0 && (
        <section className="py-16 bg-navy-50">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold text-navy-900 mb-8 text-center">
              מאמרים נוספים שעשויים לעניין אותך
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {relatedPosts.map(related => (
                <div key={related.id} className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform hover:-translate-y-1 hover:shadow-xl">
                  <Link to={createPageUrl("BlogPost") + `?slug=${related.slug}`}>
                    {related.image_url ? (
                      <img 
                        src={related.image_url} 
                        alt={related.title} 
                        className="w-full h-40 object-cover object-center"
                      />
                    ) : (
                      <div className="w-full h-40 bg-navy-100 flex items-center justify-center">
                        <span className="text-navy-400 font-serif text-xl">מאמר</span>
                      </div>
                    )}
                  </Link>
                  
                  <div className="p-6">
                    <Link to={createPageUrl("BlogPost") + `?slug=${related.slug}`}>
                      <h3 className="text-lg font-bold text-navy-900 mb-3 hover:text-gold-500 transition-colors line-clamp-2">{related.title}</h3>
                    </Link>
                    
                    <p className="text-navy-700 mb-4 line-clamp-2">{related.excerpt}</p>
                    
                    <Link 
                      to={createPageUrl("BlogPost") + `?slug=${related.slug}`} 
                      className="inline-flex items-center text-gold-500 hover:text-gold-600 font-medium"
                    >
                      <span>קרא עוד</span>
                      <ArrowLeft className="h-4 w-4 mr-1" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}