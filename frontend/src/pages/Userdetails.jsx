import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { addProject, fetchProjects } from "../store/actions/projectActions";
import { Plus, Folder, Calendar, User, Sparkles } from "lucide-react";
import { useForm } from "react-hook-form";
import { nanoid } from "@reduxjs/toolkit";
import Projectcard from "../components/Projectcard";

const Userdetails = () => {
  const dispatch = useDispatch();
  const project = useSelector((state) => state.project.projects);
  const navigate = useNavigate();

  const { id } = useParams();
  const [addProjects, setAddProject] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const addProjectHandler = (data) => {
    data.ownerId = id;
    data.id = nanoid();
    dispatch(addProject(data));
    navigate('/users')
  };

  const projects = project.filter((p) => String(p.ownerId) === String(id));

  useEffect(() => {
    dispatch(fetchProjects());
  }, [id]);

  if (addProjects) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 p-6 flex items-center justify-center relative overflow-hidden">
      {/* Decorative floating elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-gradient-to-r from-blue-200 to-purple-200 rounded-full opacity-20 animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-16 h-16 bg-gradient-to-r from-purple-200 to-pink-200 rounded-full opacity-20 animate-bounce"></div>
      <div className="absolute top-1/2 left-0 w-12 h-12 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-full opacity-30 animate-ping"></div>
      
      <div className="w-full max-w-2xl relative z-10">
        {/* Header */}
        <div className="text-center mb-8 animate-fade-in">
          <h1 className="text-4xl font-bold text-gray-800 mb-2 transition-all duration-300 hover:text-blue-600">
            Add New Project
          </h1>
          <p className="text-gray-600 transition-all duration-300 hover:text-gray-700">
            Create something amazing and share it with the world
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Form Container */}
        <div className="bg-white rounded-3xl shadow-2xl p-8 backdrop-blur-sm border border-gray-100 transition-all duration-500 hover:shadow-3xl hover:scale-[1.01] transform">
          <div className="space-y-8">
            {/* Title Field */}
            <div className="group">
              <label className="block text-sm font-semibold text-gray-700 mb-3 group-hover:text-blue-600 transition-colors duration-200">
                Project Title
              </label>
              <div className="relative">
                <input
                  type="text"
                  {...register("title", { required: "Project title is required" })}
                  className="w-full px-6 py-4 border-2 border-gray-200 rounded-2xl focus:border-blue-500 focus:ring-4 focus:ring-blue-100 outline-none transition-all duration-300 text-gray-800 placeholder-gray-400 hover:border-gray-300 bg-gray-50 focus:bg-white hover:shadow-md"
                  placeholder="Enter your amazing project title..."
                />
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </div>
              {errors.title && (
                <p className="text-red-500 text-sm mt-2 animate-bounce">
                  {errors.title.message}
                </p>
              )}
            </div>

            {/* Description Field */}
            <div className="group">
              <label className="block text-sm font-semibold text-gray-700 mb-3 group-hover:text-blue-600 transition-colors duration-200">
                Description
              </label>
              <div className="relative">
                <textarea
                  {...register("description", { required: "Description is required" })}
                  rows={5}
                  className="w-full px-6 py-4 border-2 border-gray-200 rounded-2xl focus:border-blue-500 focus:ring-4 focus:ring-blue-100 outline-none transition-all duration-300 text-gray-800 placeholder-gray-400 hover:border-gray-300 bg-gray-50 focus:bg-white hover:shadow-md resize-none"
                  placeholder="Describe your project in detail..."
                />
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </div>
              {errors.description && (
                <p className="text-red-500 text-sm mt-2 animate-bounce">
                  {errors.description.message}
                </p>
              )}
            </div>

            {/* Technologies Field */}
            <div className="group">
              <label className="block text-sm font-semibold text-gray-700 mb-3 group-hover:text-blue-600 transition-colors duration-200">
                Technologies
                <span className="text-gray-500 font-normal ml-2">(comma separated)</span>
              </label>
              <div className="relative">
                <input
                  type="text"
                  {...register("technologies", { required: "Technologies are required" })}
                  className="w-full px-6 py-4 border-2 border-gray-200 rounded-2xl focus:border-blue-500 focus:ring-4 focus:ring-blue-100 outline-none transition-all duration-300 text-gray-800 placeholder-gray-400 hover:border-gray-300 bg-gray-50 focus:bg-white hover:shadow-md"
                  placeholder="React, Node.js, MongoDB, Express..."
                />
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </div>
              {errors.technologies && (
                <p className="text-red-500 text-sm mt-2 animate-bounce">
                  {errors.technologies.message}
                </p>
              )}
            </div>

            {/* Project Links Field */}
            <div className="group">
              <label className="block text-sm font-semibold text-gray-700 mb-3 group-hover:text-blue-600 transition-colors duration-200">
                Project Links
                <span className="text-gray-500 font-normal ml-2">(Live demo or GitHub repository)</span>
              </label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Live Demo URL */}
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <svg className="w-5 h-5 text-gray-400 group-hover:text-blue-500 transition-colors duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </div>
                  <input
                    type="url"
                    {...register("liveUrl", { 
                      pattern: {
                        value: /^https?:\/\/.+/,
                        message: "Please enter a valid URL"
                      }
                    })}
                    className="w-full pl-12 pr-6 py-4 border-2 border-gray-200 rounded-2xl focus:border-blue-500 focus:ring-4 focus:ring-blue-100 outline-none transition-all duration-300 text-gray-800 placeholder-gray-400 hover:border-gray-300 bg-gray-50 focus:bg-white hover:shadow-md"
                    placeholder="https://your-project-demo.com"
                  />
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                </div>

                {/* GitHub Repository URL */}
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <svg className="w-5 h-5 text-gray-400 group-hover:text-blue-500 transition-colors duration-200" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <input
                    type="url"
                    {...register("githubUrl", { 
                      pattern: {
                        value: /^https?:\/\/.+/,
                        message: "Please enter a valid URL"
                      }
                    })}
                    className="w-full pl-12 pr-6 py-4 border-2 border-gray-200 rounded-2xl focus:border-blue-500 focus:ring-4 focus:ring-blue-100 outline-none transition-all duration-300 text-gray-800 placeholder-gray-400 hover:border-gray-300 bg-gray-50 focus:bg-white hover:shadow-md"
                    placeholder="https://github.com/username/repo"
                  />
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                </div>
              </div>
              {(errors.liveUrl || errors.githubUrl) && (
                <p className="text-red-500 text-sm mt-2 animate-bounce">
                  {errors.liveUrl?.message || errors.githubUrl?.message}
                </p>
              )}
            </div>

            {/* Submit Button */}
            <div className="pt-6">
              <button
                type="button"
                onClick={handleSubmit(addProjectHandler)}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 px-8 rounded-2xl font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 hover:from-blue-700 hover:to-purple-700 focus:ring-4 focus:ring-blue-200 outline-none relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-white/5 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                <span className="relative flex items-center justify-center gap-2">
                  <svg className="w-5 h-5 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                  Add Project
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Success indicator */}
        <div className="text-center mt-6 opacity-70">
          <p className="text-sm text-gray-500">
            Ready to showcase your amazing work? ✨
          </p>
        </div>
      </div>
    </div>
  );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 relative overflow-hidden">
      {/* Floating Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-12">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 mb-6 shadow-lg border border-white/20">
            <User className="w-5 h-5 text-indigo-600" />
            <span className="text-sm font-medium text-gray-700">
              User Profile
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-4 animate-fade-in">
            My Projects
          </h1>

          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Discover and manage your creative projects in one beautiful place
          </p>
        </div>

        {/* Add More Projects Button */}
        <div className="flex justify-center mb-12">
          <button
            onClick={() => setAddProject(true)}
            className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-semibold px-8 py-4 rounded-2xl shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            <Plus className="w-5 h-5 relative z-10" />
            <span className="relative z-10">Add More Projects</span>
            <Sparkles className="w-4 h-4 relative z-10 group-hover:rotate-12 transition-transform duration-300" />
          </button>
        </div>

        {/* Projects Grid */}
        {projects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((p) => (
             <Projectcard p = {p} key={p.id} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <div className="w-32 h-32 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full flex items-center justify-center mx-auto mb-8 shadow-inner">
              <Folder className="w-16 h-16 text-gray-400" />
            </div>
            <h3 className="text-2xl font-bold text-gray-600 mb-4">
              No Projects Yet
            </h3>
            <p className="text-gray-500 max-w-md mx-auto leading-relaxed">
              Start your creative journey by adding your first project. Click
              the button above to get started!
            </p>
          </div>
        )}
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
      `}</style>
    </div>
  );
};

export default Userdetails;
