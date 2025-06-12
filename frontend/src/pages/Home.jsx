import React, { useEffect, useState } from 'react'
import { fetchProjects } from '../store/actions/projectActions'
import { useDispatch, useSelector } from 'react-redux'
import { Folder, Calendar, Users, Sparkles, Grid3X3, List } from 'lucide-react'

const Projects = () => {
  const dispatch = useDispatch()
  const projects = useSelector(state=>state.project.projects)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [hoveredElement, setHoveredElement] = useState(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    dispatch(fetchProjects())
    setIsVisible(true)
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-black relative overflow-hidden">
      {/* Dynamic Background Elements */}
      <div
        className="fixed w-96 h-96 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full blur-3xl pointer-events-none transition-all duration-1000 ease-out"
        style={{
          left: mousePosition.x - 192,
          top: mousePosition.y - 192,
          transform: `scale(${hoveredElement ? 1.5 : 1})`,
        }}
      />
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse" />
      <div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-indigo-500/20 to-cyan-500/20 rounded-full blur-3xl animate-pulse"
        style={{ animationDelay: "2s" }}
      />
      <div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-purple-500/15 to-pink-500/15 rounded-full blur-2xl animate-pulse"
        style={{ animationDelay: "4s" }}
      />

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)`,
            backgroundSize: "20px 20px",
          }}
        />
      </div>

      {/* Floating Elements */}
      <div
        className="absolute top-20 right-20 w-4 h-4 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full animate-bounce opacity-40"
        style={{ animationDelay: "1s" }}
      />
      <div
        className="absolute top-40 left-20 w-3 h-3 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full animate-bounce opacity-40"
        style={{ animationDelay: "2s" }}
      />
      <div
        className="absolute bottom-40 right-40 w-5 h-5 bg-gradient-to-r from-pink-400 to-rose-400 rounded-full animate-bounce opacity-40"
        style={{ animationDelay: "3s" }}
      />

      <div className={`relative z-10 container mx-auto px-4 py-12 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-slate-800/70 backdrop-blur-sm border border-slate-700/50 rounded-full px-6 py-3 mb-6 shadow-lg">
            <Grid3X3 className="w-5 h-5 text-cyan-400" />
            <span className="text-sm font-medium text-slate-200">All Projects</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-4 animate-fade-in-up">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent hover:from-pink-400 hover:via-cyan-400 hover:to-blue-400 transition-all duration-500 cursor-default">
              Projects Gallery
            </span>
          </h1>
          
          <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed hover:text-slate-200 transition-all duration-300 transform hover:scale-105">
            Explore our collection of innovative projects and creative solutions
          </p>
          
          {/* Stats Bar */}
          <div className="flex justify-center items-center gap-8 mt-8">
            <div className="flex items-center gap-2 bg-slate-800/70 backdrop-blur-sm border border-slate-700/50 rounded-full px-4 py-2 shadow-sm">
              <Folder className="w-4 h-4 text-cyan-400" />
              <span className="text-sm font-medium text-slate-200">{projects.length} Projects</span>
            </div>
            <div className="flex items-center gap-2 bg-slate-800/70 backdrop-blur-sm border border-slate-700/50 rounded-full px-4 py-2 shadow-sm">
              <Users className="w-4 h-4 text-purple-400" />
              <span className="text-sm font-medium text-slate-200">Active Team</span>
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        {projects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {projects.map((p, index) => (
              <div
                key={p.id}
                onMouseEnter={() => setHoveredElement(`project-${index}`)}
                onMouseLeave={() => setHoveredElement(null)}
                className="group relative bg-slate-800/70 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 hover:bg-slate-800/80 hover:border-slate-600/50 transform hover:-translate-y-2 hover:scale-105 transition-all duration-500 overflow-hidden cursor-pointer hover:shadow-xl hover:shadow-cyan-500/10"
                style={{
                  animationDelay: `${index * 100}ms`,
                  animation: 'fadeInUp 0.8s ease-out forwards'
                }}
              >
                {/* Card Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Project Icon */}
                <div className="relative z-10 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center shadow-lg shadow-cyan-500/25 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                    <Folder className="w-6 h-6 text-white" />
                  </div>
                </div>

                {/* Project Content */}
                <div className="relative z-10">
                  <h3 className="text-lg font-bold text-slate-100 mb-3 group-hover:text-cyan-400 transition-colors duration-300 line-clamp-2">
                    {p.title}
                  </h3>
                  
                  {/* Project Meta */}
                  <div className="flex items-center gap-2 text-xs text-slate-400 mb-3 group-hover:text-slate-300 transition-colors duration-300">
                    <Calendar className="w-3 h-3" />
                    <span>Updated recently</span>
                  </div>

                  {/* Project Status & Tags */}
                  <div className="flex items-center justify-between">
                    <div className="inline-flex items-center gap-1 bg-gradient-to-r from-green-500/20 to-emerald-500/20 text-green-300 px-2 py-1 rounded-md text-xs font-medium border border-green-500/30">
                      <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></div>
                      Active
                    </div>
                    
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Sparkles className="w-4 h-4 text-purple-400 animate-pulse" />
                    </div>
                  </div>
                </div>

                {/* Hover Effect Lines */}
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-500 to-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                <div className="absolute top-0 bottom-0 left-0 w-0.5 bg-gradient-to-b from-cyan-500 to-blue-500 transform scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-top"></div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <div className="w-32 h-32 bg-gradient-to-br from-slate-700/50 to-slate-800/50 rounded-full flex items-center justify-center mx-auto mb-8 shadow-inner backdrop-blur-sm border border-slate-600/30">
              <List className="w-16 h-16 text-slate-400" />
            </div>
            <h3 className="text-2xl font-bold text-slate-300 mb-4">No Projects Found</h3>
            <p className="text-slate-400 max-w-md mx-auto leading-relaxed">
              It looks like there are no projects to display at the moment. Check back later for updates!
            </p>
          </div>
        )}

        {/* Bottom Floating Action */}
        <div className="fixed bottom-8 right-8 z-20">
          <button 
            onMouseEnter={() => setHoveredElement("fab")}
            onMouseLeave={() => setHoveredElement(null)}
            className="group bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white p-4 rounded-full shadow-xl shadow-cyan-500/25 hover:shadow-2xl hover:shadow-cyan-500/30 transform hover:scale-110 transition-all duration-300"
          >
            <Grid3X3 className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
          </button>
        </div>
      </div>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out forwards;
        }

        .line-clamp-2 {
          overflow: hidden;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 2;
        }
      `}</style>
    </div>
  )
}

export default Projects