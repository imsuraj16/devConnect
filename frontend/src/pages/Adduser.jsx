import { useState, useEffect } from "react"
import { nanoid } from "@reduxjs/toolkit"
import { useForm } from "react-hook-form"
import { addUser } from "../store/actions/userActions"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import {
  User,
  Sparkles,
  ArrowLeft,
  Check,
  AlertCircle,
  Zap,
  Mail,
  FileText,
  Award,
  MapPin,
  Briefcase,
  Phone,
  Globe,
} from "lucide-react"

const AddUser = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [hoveredElement, setHoveredElement] = useState(null)
  const [clickRipples, setClickRipples] = useState([])
  const [isVisible, setIsVisible] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm()

  useEffect(() => {
    setIsVisible(true)
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  const createRipple = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const ripple = { x, y, id: Date.now() }
    setClickRipples((prev) => [...prev, ripple])
    setTimeout(() => {
      setClickRipples((prev) => prev.filter((r) => r.id !== ripple.id))
    }, 600)
  }

  const addUserHandler = async (userdata) => {
    setIsSubmitting(true)

    // Simulate API call delay
    await new Promise((resolve) => setTimeout(resolve, 1500))

    const userId = nanoid()
    userdata.id = userId
    userdata.joinDate = new Date().getFullYear().toString()
    userdata.rating = 4.5 + Math.random() * 0.5 // Random rating between 4.5-5.0
    userdata.location = userdata.location || "Remote"

    // Convert skills string to array if provided
    if (userdata.skills) {
      userdata.skills = userdata.skills
        .split(",")
        .map((skill) => skill.trim())
        .filter((skill) => skill.length > 0)
        .join(", ")
    }

    dispatch(addUser(userdata))
    setSubmitSuccess(true)

    setTimeout(() => {
      navigate("/users")
    }, 2000)
  }

  const watchedValues = watch()

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-black relative overflow-hidden">
      {/* Dynamic Background Elements */}
      <div
        className="fixed w-96 h-96 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-full blur-3xl pointer-events-none transition-all duration-1000 ease-out"
        style={{
          left: mousePosition.x - 192,
          top: mousePosition.y - 192,
          transform: `scale(${hoveredElement ? 1.5 : 1})`,
        }}
      />
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-blue-500/30 to-indigo-500/30 rounded-full animate-pulse pointer-events-none" />
      <div
        className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-r from-violet-500/30 to-purple-500/30 rounded-full animate-pulse pointer-events-none"
        style={{ animationDelay: "2s" }}
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
        className={`relative z-10 py-12 px-4 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-3 mb-6 group">
              <div className="relative">
                <User className="w-10 h-10 text-cyan-400 animate-pulse group-hover:animate-spin transition-all duration-300" />
                <div className="absolute inset-0 bg-cyan-400/20 rounded-full animate-ping" />
              </div>
              <h1 className="text-4xl md:text-6xl font-black bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent hover:from-pink-400 hover:via-cyan-400 hover:to-blue-400 transition-all duration-500 cursor-default">
                Add Team Member
              </h1>
              <div className="relative">
                <Sparkles
                  className="w-10 h-10 text-purple-400 animate-pulse group-hover:animate-spin transition-all duration-300"
                  style={{ animationDelay: "0.5s" }}
                />
                <div
                  className="absolute inset-0 bg-purple-400/20 rounded-full animate-ping"
                  style={{ animationDelay: "0.5s" }}
                />
              </div>
            </div>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed mb-8 hover:text-slate-200 transition-all duration-300">
              Welcome a new developer to our amazing community
            </p>

            {/* Back Button */}
            <button
              onClick={(e) => {
                createRipple(e)
                navigate("/users")
              }}
              onMouseEnter={() => setHoveredElement("back-btn")}
              onMouseLeave={() => setHoveredElement(null)}
              className="relative overflow-hidden inline-flex items-center gap-2 px-6 py-3 bg-slate-800/80 backdrop-blur-sm border border-slate-700 text-slate-200 rounded-xl font-semibold hover:bg-slate-700/80 hover:border-slate-600 transition-all transform hover:scale-105 active:scale-95"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Team</span>
              {clickRipples.map((ripple) => (
                <div
                  key={ripple.id}
                  className="absolute bg-cyan-400/30 rounded-full animate-ping"
                  style={{
                    left: ripple.x - 10,
                    top: ripple.y - 10,
                    width: 20,
                    height: 20,
                  }}
                />
              ))}
            </button>
          </div>

          {/* Form Container */}
          <div className="max-w-2xl mx-auto">
            <div
              className="bg-slate-800/80 backdrop-blur-xl rounded-3xl shadow-2xl p-8 border border-slate-700/50 hover:shadow-3xl hover:border-slate-600/50 transition-all duration-500 relative overflow-hidden"
              onMouseEnter={() => setHoveredElement("form")}
              onMouseLeave={() => setHoveredElement(null)}
            >
              {/* Gradient Border Animation */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 opacity-0 hover:opacity-100 transition-opacity duration-500 rounded-3xl" />
              <div className="absolute inset-0.5 bg-slate-800 rounded-3xl" />

              {/* Form Content */}
              <div className="relative z-10">
                {submitSuccess ? (
                  // Success State
                  <div className="text-center py-12">
                    <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6 animate-bounce">
                      <Check className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-100 mb-4">Team Member Added Successfully!</h3>
                    <p className="text-slate-300 mb-6">Redirecting you to the team page...</p>
                    <div className="w-32 h-1.5 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full mx-auto relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse" />
                    </div>
                  </div>
                ) : (
                  // Form
                  <form onSubmit={handleSubmit(addUserHandler)} className="space-y-8">
                    {/* Full Name */}
                    <div className="group">
                      <label className="flex items-center gap-2 text-sm font-semibold text-slate-200 mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                        <User className="w-4 h-4" />
                        Full Name
                      </label>
                      <div className="relative">
                        <input
                          type="text"
                          placeholder="Suraj Kumar"
                          className={`w-full px-4 py-4 bg-slate-700/50 backdrop-blur-sm border rounded-xl text-slate-200 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50 transition-all duration-300 ${
                            errors.fullName ? "border-red-500/50 focus:ring-red-500/50" : "border-slate-600/50"
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
                          <div className="flex items-center gap-2 mt-2 text-red-400 text-sm">
                            <AlertCircle className="w-4 h-4" />
                            {errors.fullName.message}
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Email */}
                    <div className="group">
                      <label className="flex items-center gap-2 text-sm font-semibold text-slate-200 mb-3 group-hover:text-blue-400 transition-colors duration-300">
                        <Mail className="w-4 h-4" />
                        Email Address
                      </label>
                      <div className="relative">
                        <input
                          type="email"
                          placeholder="suraj@example.com"
                          className={`w-full px-4 py-4 bg-slate-700/50 backdrop-blur-sm border rounded-xl text-slate-200 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all duration-300 ${
                            errors.email ? "border-red-500/50 focus:ring-red-500/50" : "border-slate-600/50"
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
                          <div className="flex items-center gap-2 mt-2 text-red-400 text-sm">
                            <AlertCircle className="w-4 h-4" />
                            {errors.email.message}
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Role */}
                    <div className="group">
                      <label className="flex items-center gap-2 text-sm font-semibold text-slate-200 mb-3 group-hover:text-purple-400 transition-colors duration-300">
                        <Briefcase className="w-4 h-4" />
                        Role
                      </label>
                      <div className="relative">
                        <select
                          className={`w-full px-4 py-4 bg-slate-700/50 backdrop-blur-sm border rounded-xl text-slate-200 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 transition-all duration-300 ${
                            errors.role ? "border-red-500/50 focus:ring-red-500/50" : "border-slate-600/50"
                          }`}
                          {...register("role", {
                            required: "Role is required",
                          })}
                        >
                          <option value="">Select a role</option>
                          <option value="Frontend Developer">Frontend Developer</option>
                          <option value="Backend Developer">Backend Developer</option>
                          <option value="Full Stack Developer">Full Stack Developer</option>
                          <option value="UI/UX Designer">UI/UX Designer</option>
                          <option value="Product Manager">Product Manager</option>
                          <option value="DevOps Engineer">DevOps Engineer</option>
                          <option value="Data Scientist">Data Scientist</option>
                          <option value="Mobile Developer">Mobile Developer</option>
                        </select>
                        {errors.role && (
                          <div className="flex items-center gap-2 mt-2 text-red-400 text-sm">
                            <AlertCircle className="w-4 h-4" />
                            {errors.role.message}
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Skills */}
                    <div className="group">
                      <label className="flex items-center gap-2 text-sm font-semibold text-slate-200 mb-3 group-hover:text-green-400 transition-colors duration-300">
                        <Award className="w-4 h-4" />
                        Skills
                        <span className="text-xs text-slate-400">(comma separated)</span>
                      </label>
                      <div className="relative">
                        <input
                          type="text"
                          placeholder="React, JavaScript, CSS, Node.js, TypeScript"
                          className={`w-full px-4 py-4 bg-slate-700/50 backdrop-blur-sm border rounded-xl text-slate-200 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-green-500/50 focus:border-green-500/50 transition-all duration-300 ${
                            errors.skills ? "border-red-500/50 focus:ring-red-500/50" : "border-slate-600/50"
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
                                  className="px-3 py-1 bg-gradient-to-r from-green-500/20 to-emerald-500/20 text-green-300 text-xs font-bold rounded-full border border-green-500/30 animate-fade-in"
                                >
                                  {skill}
                                </span>
                              ))}
                          </div>
                        )}
                        {errors.skills && (
                          <div className="flex items-center gap-2 mt-2 text-red-400 text-sm">
                            <AlertCircle className="w-4 h-4" />
                            {errors.skills.message}
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Location */}
                    <div className="group">
                      <label className="flex items-center gap-2 text-sm font-semibold text-slate-200 mb-3 group-hover:text-orange-400 transition-colors duration-300">
                        <MapPin className="w-4 h-4" />
                        Location
                        <span className="text-xs text-slate-400">(optional)</span>
                      </label>
                      <input
                        type="text"
                        placeholder="San Francisco, CA"
                        className="w-full px-4 py-4 bg-slate-700/50 backdrop-blur-sm border border-slate-600/50 rounded-xl text-slate-200 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-orange-500/50 focus:border-orange-500/50 transition-all duration-300"
                        {...register("location")}
                      />
                    </div>

                    {/* Bio */}
                    <div className="group">
                      <label className="flex items-center gap-2 text-sm font-semibold text-slate-200 mb-3 group-hover:text-indigo-400 transition-colors duration-300">
                        <FileText className="w-4 h-4" />
                        Bio
                      </label>
                      <div className="relative">
                        <textarea
                          rows="4"
                          placeholder="Frontend developer passionate about building cool apps and creating amazing user experiences..."
                          className={`w-full px-4 py-4 bg-slate-700/50 backdrop-blur-sm border rounded-xl text-slate-200 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500/50 transition-all duration-300 resize-none ${
                            errors.bio ? "border-red-500/50 focus:ring-red-500/50" : "border-slate-600/50"
                          }`}
                          {...register("bio", {
                            required: "Bio is required",
                            minLength: {
                              value: 20,
                              message: "Bio must be at least 20 characters",
                            },
                          })}
                        />
                        <div className="absolute bottom-3 right-3 text-xs text-slate-500">
                          {watchedValues.bio?.length || 0} characters
                        </div>
                        {errors.bio && (
                          <div className="flex items-center gap-2 mt-2 text-red-400 text-sm">
                            <AlertCircle className="w-4 h-4" />
                            {errors.bio.message}
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Phone (Optional) */}
                    <div className="group">
                      <label className="flex items-center gap-2 text-sm font-semibold text-slate-200 mb-3 group-hover:text-pink-400 transition-colors duration-300">
                        <Phone className="w-4 h-4" />
                        Phone Number
                        <span className="text-xs text-slate-400">(optional)</span>
                      </label>
                      <input
                        type="tel"
                        placeholder="+1 (555) 123-4567"
                        className="w-full px-4 py-4 bg-slate-700/50 backdrop-blur-sm border border-slate-600/50 rounded-xl text-slate-200 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-pink-500/50 focus:border-pink-500/50 transition-all duration-300"
                        {...register("phone")}
                      />
                    </div>

                    {/* Website (Optional) */}
                    <div className="group">
                      <label className="flex items-center gap-2 text-sm font-semibold text-slate-200 mb-3 group-hover:text-teal-400 transition-colors duration-300">
                        <Globe className="w-4 h-4" />
                        Website/Portfolio
                        <span className="text-xs text-slate-400">(optional)</span>
                      </label>
                      <input
                        type="url"
                        placeholder="https://yourportfolio.com"
                        className="w-full px-4 py-4 bg-slate-700/50 backdrop-blur-sm border border-slate-600/50 rounded-xl text-slate-200 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500/50 focus:border-teal-500/50 transition-all duration-300"
                        {...register("website")}
                      />
                    </div>

                    {/* Submit Button */}
                    <div className="pt-6">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        onClick={createRipple}
                        onMouseEnter={() => setHoveredElement("submit-btn")}
                        onMouseLeave={() => setHoveredElement(null)}
                        className="relative overflow-hidden w-full py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-xl font-bold hover:from-cyan-600 hover:to-blue-600 transition-all transform hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none shadow-lg shadow-cyan-500/25 flex items-center justify-center gap-3"
                      >
                        {isSubmitting ? (
                          <>
                            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                            <span>Adding Team Member...</span>
                          </>
                        ) : (
                          <>
                            <Zap className="w-5 h-5" />
                            <span>Add Team Member</span>
                          </>
                        )}
                        {clickRipples.map((ripple) => (
                          <div
                            key={ripple.id}
                            className="absolute bg-white/30 rounded-full animate-ping"
                            style={{
                              left: ripple.x - 15,
                              top: ripple.y - 15,
                              width: 30,
                              height: 30,
                            }}
                          />
                        ))}
                      </button>
                    </div>
                  </form>
                )}
              </div>

              {/* Floating Elements */}
              <div className="absolute top-6 right-6 w-4 h-4 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full opacity-0 hover:opacity-60 transition-all duration-300 animate-bounce" />
              <div className="absolute bottom-6 left-6 w-3 h-3 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full opacity-0 hover:opacity-60 transition-all duration-300 animate-pulse" />
            </div>
          </div>

          {/* Tips Section */}
          <div className="max-w-2xl mx-auto mt-12">
            <div className="bg-slate-800/60 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50">
              <h3 className="flex items-center gap-2 text-lg font-semibold text-slate-200 mb-4">
                <Sparkles className="w-5 h-5 text-cyan-400" />
                Team Member Guidelines
              </h3>
              <ul className="space-y-3 text-slate-300 text-sm">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0" />
                  <span>Use the person's full professional name as they prefer to be addressed</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0" />
                  <span>Select the role that best matches their primary responsibilities</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0" />
                  <span>List their key technical skills and areas of expertise</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0" />
                  <span>Write a compelling bio that highlights their passion and achievements</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        .animate-fade-in {
          animation: fade-in 0.3s ease-out forwards;
        }
      `}</style>
    </div>
  )
}

export default AddUser