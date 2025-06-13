import React from "react";
import { useForm } from "react-hook-form";
import { addProject } from "../store/actions/projectActions";
import { useDispatch, useSelector } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { useNavigate } from "react-router-dom";

const Addproject = () => {
  const currentUserId = useSelector((state) => state.user.currentUserId);
  const dispatch = useDispatch();
const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const addProjectHandler = (projectData) => {
    projectData.id = nanoid();
    projectData.ownerId = currentUserId;
    dispatch(addProject(projectData));
    navigate('/projects')
  };

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
};

export default Addproject;