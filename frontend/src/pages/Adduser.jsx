import { useState } from "react"
import { useForm } from "react-hook-form"
import { User, Mail, Award, FileText, Check, AlertCircle, Send, Sparkles, UserPlus } from "lucide-react"
import { addUsers } from "../store/actions/userActions"
import {useDispatch} from "react-redux"
import { useNavigate } from "react-router-dom"
import { nanoid } from "@reduxjs/toolkit"

const Adduser = () => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm()

  const addUserHandler = async (userdata) => {
    setIsSubmitting(true)
    userdata.id = nanoid()
    dispatch(addUsers(userdata))

    // Simulate API call delay
    await new Promise((resolve) => setTimeout(resolve, 1500))

    // Process skills string to array format
    if (userdata.skills) {
      userdata.skills = userdata.skills
        .split(",")
        .map((skill) => skill.trim())
        .filter((skill) => skill.length > 0)
        .join(", ")
    }
    setSubmitSuccess(true)

    setTimeout(() => {
      setSubmitSuccess(false)
      reset()
      setIsSubmitting(false)
    }, 3000)

    navigate('/users')
  }

  const watchedValues = watch()

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 relative overflow-hidden">
      {/* Floating Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse animation-delay-2000"></div>
        <div className="absolute top-1/3 right-1/4 w-60 h-60 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-40 h-40 bg-gradient-to-r from-green-400 to-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-25 animate-pulse animation-delay-6000"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-12">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 mb-6 shadow-lg border border-white/20">
            <UserPlus className="w-5 h-5 text-indigo-600" />
            <span className="text-sm font-medium text-gray-700">New User</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-4 animate-fade-in">
            Add User
          </h1>
          
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Welcome a new developer to our amazing community
          </p>
        </div>

        {/* Form Container */}
        <div className="max-w-2xl mx-auto">
          <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 p-8 hover:shadow-3xl transition-all duration-500 relative overflow-hidden">
            {/* Gradient Border Animation */}
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 opacity-0 hover:opacity-100 transition-opacity duration-500 rounded-3xl pointer-events-none" />
            
            {/* Form Content */}
            <div className="relative z-10">
              {submitSuccess ? (
                // Success State
                <div className="text-center py-12">
                  <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6 animate-bounce shadow-lg">
                    <Check className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">Team Member Added Successfully!</h3>
                  <p className="text-gray-600 mb-6">The new team member has been added to the system.</p>
                  <div className="w-32 h-1.5 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full mx-auto relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse" />
                  </div>
                </div>
              ) : (
                // Form
                <form className="space-y-8">
                  {/* Full Name */}
                  <div className="group">
                    <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-3 group-hover:text-indigo-600 transition-colors duration-300">
                      <User className="w-4 h-4" />
                      Full Name
                    </label>
                    <input
                      type="text"
                      placeholder="Suraj verma"
                      className={`w-full px-4 py-4 bg-white/60 backdrop-blur-sm border rounded-xl text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500/50 transition-all duration-300 shadow-sm hover:shadow-md ${
                        errors.fullName ? "border-red-300 focus:ring-red-500/50" : "border-gray-200"
                      }`}
                      {...register("fullName", {
                        required: "Full name is required",
                        minLength: {
                          value: 2,
                          message: "Name must be at least 2 characters",
                        },
                      })}
                    />
                    {errors.fullName && (
                      <div className="flex items-center gap-2 mt-2 text-red-500 text-sm">
                        <AlertCircle className="w-4 h-4" />
                        {errors.fullName.message}
                      </div>
                    )}
                  </div>

                  {/* Email */}
                  <div className="group">
                    <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-3 group-hover:text-purple-600 transition-colors duration-300">
                      <Mail className="w-4 h-4" />
                      Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="sv6971525@gmail.com"
                      className={`w-full px-4 py-4 bg-white/60 backdrop-blur-sm border rounded-xl text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 transition-all duration-300 shadow-sm hover:shadow-md ${
                        errors.email ? "border-red-300 focus:ring-red-500/50" : "border-gray-200"
                      }`}
                      {...register("email", {
                        required: "Email is required",
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: "Invalid email address",
                        },
                      })}
                    />
                    {errors.email && (
                      <div className="flex items-center gap-2 mt-2 text-red-500 text-sm">
                        <AlertCircle className="w-4 h-4" />
                        {errors.email.message}
                      </div>
                    )}
                  </div>

                  {/* Skills */}
                  <div className="group">
                    <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-3 group-hover:text-pink-600 transition-colors duration-300">
                      <Award className="w-4 h-4" />
                      Skills
                      <span className="text-xs text-gray-500">(comma separated)</span>
                    </label>
                    <input
                      type="text"
                      placeholder="react,javascript,tailwind"
                      className={`w-full px-4 py-4 bg-white/60 backdrop-blur-sm border rounded-xl text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500/50 focus:border-pink-500/50 transition-all duration-300 shadow-sm hover:shadow-md ${
                        errors.skills ? "border-red-300 focus:ring-red-500/50" : "border-gray-200"
                      }`}
                      {...register("skills", {
                        required: "At least one skill is required",
                      })}
                    />
                    {watchedValues.skills && (
                      <div className="mt-3 flex flex-wrap gap-2">
                        {watchedValues.skills
                          .split(",")
                          .map((skill) => skill.trim())
                          .filter((skill) => skill.length > 0)
                          .map((skill, index) => (
                            <span
                              key={index}
                              className="px-3 py-1 bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-700 text-sm font-medium rounded-full border border-indigo-200 animate-fade-in"
                            >
                              {skill}
                            </span>
                          ))}
                      </div>
                    )}
                    {errors.skills && (
                      <div className="flex items-center gap-2 mt-2 text-red-500 text-sm">
                        <AlertCircle className="w-4 h-4" />
                        {errors.skills.message}
                      </div>
                    )}
                  </div>

                  {/* Bio */}
                  <div className="group">
                    <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                      <FileText className="w-4 h-4" />
                      Bio
                    </label>
                    <div className="relative">
                      <textarea
                        rows="4"
                        placeholder="frontend developer"
                        className={`w-full px-4 py-4 bg-white/60 backdrop-blur-sm border rounded-xl text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all duration-300 resize-none shadow-sm hover:shadow-md ${
                          errors.bio ? "border-red-300 focus:ring-red-500/50" : "border-gray-200"
                        }`}
                        {...register("bio", {
                          required: "Bio is required",
                          minLength: {
                            value: 10,
                            message: "Bio must be at least 10 characters",
                          },
                        })}
                      />
                      <div className="absolute bottom-3 right-3 text-xs text-gray-500 bg-white/80 px-2 py-1 rounded-full">
                        {watchedValues.bio?.length || 0} characters
                      </div>
                    </div>
                    {errors.bio && (
                      <div className="flex items-center gap-2 mt-2 text-red-500 text-sm">
                        <AlertCircle className="w-4 h-4" />
                        {errors.bio.message}
                      </div>
                    )}
                  </div>

                  {/* Submit Button */}
                  <div className="pt-6">
                    <button
                      type="button"
                      onClick={handleSubmit(addUserHandler)}
                      disabled={isSubmitting}
                      className="w-full py-4 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white rounded-xl font-semibold transition-all transform hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none shadow-lg shadow-indigo-500/25 flex items-center justify-center gap-3"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          <span>Adding User...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5" />
                          <span>Add User</span>
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>

            {/* Floating Elements */}
            <div className="absolute top-6 right-6 w-4 h-4 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full opacity-30 animate-bounce pointer-events-none" />
            <div className="absolute bottom-6 left-6 w-3 h-3 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full opacity-30 animate-pulse pointer-events-none" />
          </div>

          {/* Tips Section */}
          <div className="mt-12 bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-lg">
            <h3 className="flex items-center gap-2 text-lg font-semibold text-gray-700 mb-4">
              <Sparkles className="w-5 h-5 text-indigo-600" />
              Team Member Guidelines
            </h3>
            <ul className="space-y-3 text-gray-600 text-sm">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2 flex-shrink-0" />
                <span>Use the person's full professional name as they prefer to be addressed</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0" />
                <span>Separate multiple skills with commas for better organization</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-pink-500 rounded-full mt-2 flex-shrink-0" />
                <span>Write a compelling bio that highlights their passion and achievements</span>
              </li>
            </ul>
          </div>
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
      `}</style>
    </div>
  )
}

export default Adduser