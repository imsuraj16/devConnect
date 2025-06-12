import React, { useEffect } from 'react'
import { fetchProjects } from '../store/actions/projectActions'
import { useDispatch, useSelector } from 'react-redux'
import { Folder, Calendar, Users, Sparkles, Grid3X3, List } from 'lucide-react'
import Projectcard from '../components/Projectcard'

const Projects = () => {
  const dispatch = useDispatch()
  const projects = useSelector(state=>state.project.projects)
  
   
  useEffect(()=>{
    dispatch(fetchProjects())
  },[])

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 relative overflow-hidden">
      {/* Floating Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse animation-delay-2000"></div>
        <div className="absolute top-1/3 right-1/4 w-60 h-60 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-40 h-40 bg-gradient-to-r from-green-400 to-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-25 animate-pulse animation-delay-6000"></div>
      </div>

      <div className="relative z-10 container mx-auto px-[4rem] py-12">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 mb-6 shadow-lg border border-white/20">
            <Grid3X3 className="w-5 h-5 text-indigo-600" />
            <span className="text-sm font-medium text-gray-700">All Projects</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-4 animate-fade-in">
            Projects Gallery
          </h1>
          
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Explore our collection of innovative projects and creative solutions
          </p>
          
          {/* Stats Bar */}
          <div className="flex justify-center items-center gap-8 mt-8">
            <div className="flex items-center gap-2 bg-white/60 backdrop-blur-sm rounded-full px-4 py-2 shadow-sm">
              <Folder className="w-4 h-4 text-indigo-600" />
              <span className="text-sm font-medium text-gray-700">{projects.length} Projects</span>
            </div>
            <div className="flex items-center gap-2 bg-white/60 backdrop-blur-sm rounded-full px-4 py-2 shadow-sm">
              <Users className="w-4 h-4 text-purple-600" />
              <span className="text-sm font-medium text-gray-700">Active Team</span>
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        {projects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {projects.map((p, index) => (
            <Projectcard p = {p} index = {index} key = {p.id}/>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <div className="w-32 h-32 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full flex items-center justify-center mx-auto mb-8 shadow-inner">
              <List className="w-16 h-16 text-gray-400" />
            </div>
            <h3 className="text-2xl font-bold text-gray-600 mb-4">No Projects Found</h3>
            <p className="text-gray-500 max-w-md mx-auto leading-relaxed">
              It looks like there are no projects to display at the moment. Check back later for updates!
            </p>
          </div>
        )}

        {/* Bottom Floating Action */}
        <div className="fixed bottom-8 right-8 z-20">
          <button className="group bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white p-4 rounded-full shadow-xl hover:shadow-2xl transform hover:scale-110 transition-all duration-300">
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

        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        .animation-delay-4000 {
          animation-delay: 4s;
        }

        .animation-delay-6000 {
          animation-delay: 6s;
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