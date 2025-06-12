import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { addProject, fetchProjects } from "../store/actions/projectActions";
import { Plus, Folder, Calendar, User, Sparkles } from "lucide-react";
import { useForm } from "react-hook-form";
import { nanoid } from "@reduxjs/toolkit";

const Userdetails = () => {
  const dispatch = useDispatch();
  const project = useSelector((state) => state.project.projects);
  const navigate = useNavigate();

  const { id } = useParams();
  const [addProjects, setAddProject] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const addProjectHandler = (data) => {
    data.ownerId = id;
    data.id = nanoid();
    dispatch(addProject(data));
  };

  const projects = project.filter((p) => String(p.ownerId) === String(id));

  useEffect(() => {
    dispatch(fetchProjects());
  }, [id]);

  if (addProjects) {
    return (
      <div className="max-w-xl mx-auto mt-10 p-6 bg-white rounded-2xl shadow-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Add Project</h2>
        <form onSubmit={handleSubmit(addProjectHandler)} className="space-y-4">
          {/* Title */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Project Title
            </label>
            <input
              type="text"
              placeholder="DevConnect Website"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              {...register("title")}
            />
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Description
            </label>
            <textarea
              rows="3"
              placeholder="A social platform for developers to connect and share projects."
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              {...register("description")}
            ></textarea>
          </div>

          {/* Technologies */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Technologies (comma separated)
            </label>
            <input
              type="text"
              placeholder="React, Redux, Axios"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              {...register("technologies")}
            />
          </div>

          {/* Submit Button (non-functional) */}
          <button
            onClick={() => navigate(-1)}
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition"
          >
            Add Project
          </button>
          <button
            type="button"
            onClick={() => setAddProject(false)}
            className="text-center w-full bg-red-400 rounded-md py-2"
          >
            cancel
          </button>
        </form>
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
            {projects.map((p, index) => (
              <div
                key={p.id || index}
                className="group relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg hover:shadow-2xl border border-white/20 hover:border-indigo-200 transform hover:-translate-y-2 transition-all duration-500 overflow-hidden"
                style={{
                  animationDelay: `${index * 150}ms`,
                  animation: "fadeInUp 0.8s ease-out forwards",
                }}
              >
                {/* Card Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/50 to-purple-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Project Icon */}
                <div className="relative z-10 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <Folder className="w-8 h-8 text-white" />
                  </div>
                </div>

                {/* Project Title */}
                <div className="relative z-10">
                  <h2 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-indigo-700 transition-colors duration-300">
                    {p.title}
                  </h2>

                  {/* Project Meta */}
                  <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
                    <Calendar className="w-4 h-4" />
                    <span>Created recently</span>
                  </div>

                  {/* Project Status */}
                  <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    Active
                  </div>
                </div>

                {/* Hover Effect Gradient */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 to-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              </div>
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
