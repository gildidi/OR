import React from 'react';
import { Calendar, Tag, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { createPageUrl } from "@/utils";
import { format } from 'date-fns';
import { he } from 'date-fns/locale';

export default function BlogCard({ post }) {
  return (
    <article className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform hover:-translate-y-1 hover:shadow-xl">
      <Link to={createPageUrl("BlogPost") + `?slug=${post.slug}`}>
        {post.image_url ? (
          <img 
            src={post.image_url} 
            alt={post.title} 
            className="w-full h-48 object-cover object-center"
          />
        ) : (
          <div className="w-full h-48 bg-navy-100 flex items-center justify-center">
            <span className="text-navy-400 font-serif text-xl">מאמר</span>
          </div>
        )}
      </Link>
      
      <div className="p-6">
        <div className="flex flex-wrap justify-between items-center mb-3 text-sm text-navy-600">
          <div className="flex items-center">
            <Calendar className="h-4 w-4 ml-1" />
            <time dateTime={post.publish_date}>
              {format(new Date(post.publish_date), 'd בMMMM, yyyy', { locale: he })}
            </time>
          </div>
          
          {post.category && (
            <div className="flex items-center mt-2 md:mt-0">
              <Tag className="h-4 w-4 ml-1" />
              <span>{post.category}</span>
            </div>
          )}
        </div>
        
        <Link to={createPageUrl("BlogPost") + `?slug=${post.slug}`}>
          <h3 className="text-xl font-bold text-navy-900 mb-3 hover:text-gold-500 transition-colors">{post.title}</h3>
        </Link>
        
        <p className="text-navy-700 mb-4 line-clamp-3">{post.excerpt}</p>
        
        <Link 
          to={createPageUrl("BlogPost") + `?slug=${post.slug}`} 
          className="inline-flex items-center text-gold-500 hover:text-gold-600 font-medium"
        >
          <span>קרא עוד</span>
          <ArrowLeft className="h-4 w-4 mr-1" />
        </Link>
      </div>
    </article>
  );
}