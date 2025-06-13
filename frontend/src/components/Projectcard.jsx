import React from 'react'
import { Folder, Calendar, Users, Sparkles, Grid3X3, List, ExternalLink, Github } from 'lucide-react'

const Projectcard = ({p, index}) => {
  const handleLinkClick = (url, e) => {
    e.stopPropagation();
    if (url) {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div
      key={p.id}
      className="group relative bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-2xl border border-white/20 hover:border-indigo-200 transform hover:-translate-y-2 hover:scale-105 transition-all duration-500 overflow-hidden cursor-pointer"
      style={{
        animationDelay: `${index * 100}ms`,
        animation: 'fadeInUp 0.8s ease-out forwards'
      }}
    >
      {/* Card Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/50 to-purple-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      {/* Project Icon */}
      <div className="relative z-10 mb-4">
        <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
          <Folder className="w-6 h-6 text-white" />
        </div>
      </div>
      
      {/* Project Content */}
      <div className="relative z-10">
        <h3 className="text-lg font-bold text-gray-800 mb-3 group-hover:text-indigo-700 transition-colors duration-300 line-clamp-2">
          {p.title}
        </h3>
        
        {/* Project Description */}
        {p.description && (
          <p className="text-sm text-gray-600 mb-3 line-clamp-2 group-hover:text-gray-700 transition-colors duration-300">
            {p.description}
          </p>
        )}
        
        {/* Technologies */}
        {p.technologies && (
          <div className="mb-3">
            <div className="flex flex-wrap gap-1">
              {p.technologies.split(',').slice(0, 3).map((tech, i) => (
                <span key={i} className="inline-block bg-gray-100 text-gray-600 px-2 py-1 rounded-md text-xs font-medium">
                  {tech.trim()}
                </span>
              ))}
              {p.technologies.split(',').length > 3 && (
                <span className="inline-block bg-gray-100 text-gray-600 px-2 py-1 rounded-md text-xs font-medium">
                  +{p.technologies.split(',').length - 3} more
                </span>
              )}
            </div>
          </div>
        )}
        
        {/* Project Meta */}
        <div className="flex items-center gap-2 text-xs text-gray-500 mb-4">
          <Calendar className="w-3 h-3" />
          <span>Updated recently</span>
        </div>
        
        {/* Project Links and Status */}
        <div className="flex items-center justify-between">
          <div className="inline-flex items-center gap-1 bg-green-100 text-green-700 px-2 py-1 rounded-md text-xs font-medium">
            <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
            Active
          </div>
          
          {/* Project Links */}
          <div className="flex items-center gap-2">
            {/* Live Demo Link */}
            {p.liveUrl && (
              <button
                onClick={(e) => handleLinkClick(p.liveUrl, e)}
                className="group/link p-2 bg-blue-100 hover:bg-blue-200 rounded-lg transition-all duration-200 hover:scale-110"
                title="View Live Demo"
              >
                <ExternalLink className="w-4 h-4 text-blue-600 group-hover/link:text-blue-700" />
              </button>
            )}
            
            {/* GitHub Repository Link */}
            {p.githubUrl && (
              <button
                onClick={(e) => handleLinkClick(p.githubUrl, e)}
                className="group/link p-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-all duration-200 hover:scale-110"
                title="View on GitHub"
              >
                <Github className="w-4 h-4 text-gray-700 group-hover/link:text-gray-800" />
              </button>
            )}
            
            {/* Sparkles icon (existing) */}
            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <Sparkles className="w-4 h-4 text-purple-500 animate-pulse" />
            </div>
          </div>
        </div>
      </div>
      
      {/* Hover Effect Lines */}
      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-indigo-500 to-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
      <div className="absolute top-0 bottom-0 left-0 w-0.5 bg-gradient-to-b from-indigo-500 to-purple-600 transform scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-top"></div>
    </div>
  )
}

export default Projectcard