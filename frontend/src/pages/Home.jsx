import React, { useState, useEffect } from 'react'
import { Code, Users, Rocket, Star, Github, ArrowRight, Zap, Globe, Heart } from 'lucide-react'
import { Link } from 'react-router-dom'


const Home = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  useEffect(() => {
    setIsVisible(true)
    const interval = setInterval(() => {
      setCurrentTestimonial(prev => (prev + 1) % 3)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  const features = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Showcase Projects",
      description: "Display your best work and let your code speak for itself"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Connect Developers",
      description: "Network with like-minded developers and build meaningful connections"
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "Accelerate Growth",
      description: "Find collaborators, mentors, and opportunities to level up your career"
    }
  ]

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Full Stack Developer",
      content: "DevConnect helped me find amazing collaborators for my open source projects!"
    },
    {
      name: "Miguel Rodriguez",
      role: "Frontend Engineer",
      content: "The perfect platform to showcase my work and connect with other developers."
    },
    {
      name: "Aisha Patel",
      role: "Backend Developer",
      content: "I've discovered so many inspiring projects and talented developers here."
    }
  ]

  const stats = [
    { number: "10K+", label: "Developers" },
    { number: "25K+", label: "Projects" },
    { number: "500+", label: "Connections Daily" }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 relative overflow-hidden">
      {/* Floating Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/3 right-1/4 w-60 h-60 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" style={{animationDelay: '4s'}}></div>
        <div className="absolute bottom-1/4 left-1/3 w-40 h-40 bg-gradient-to-r from-green-400 to-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-25 animate-pulse" style={{animationDelay: '6s'}}></div>
      </div>

      {/* Hero Section */}
      <section className="relative z-10 px-6 py-20">
        <div className="max-w-7xl mx-auto text-center">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 mb-6 shadow-lg border border-white/20">
              <Zap className="w-5 h-5 text-indigo-600" />
              <span className="text-sm font-medium text-gray-700">Welcome to DevConnect</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Connect. Code. Create.
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-600 max-w-3xl mx-auto leading-relaxed">
              The ultimate platform for developers to showcase their projects, connect with peers, and accelerate their coding journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
              <Link to='/add-user' className="group px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 flex items-center">
                <span className="mr-2">Start Your Journey</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </div>
          </div>

          {/* Stats */}
          <div className={`grid grid-cols-1 md:grid-cols-3 gap-8 mb-20 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {stats.map((stat, index) => (
              <div key={index} className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 hover:bg-white transition-all duration-300 transform hover:scale-105 shadow-lg border border-white/20">
                <div className="text-4xl font-bold text-indigo-600 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative z-10 px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 mb-6 shadow-lg border border-white/20">
              <Star className="w-5 h-5 text-indigo-600" />
              <span className="text-sm font-medium text-gray-700">Key Features</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Why Choose DevConnect?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Everything you need to build your developer network and showcase your amazing projects
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className={`group bg-white/80 backdrop-blur-sm rounded-2xl p-8 hover:bg-white transition-all duration-500 transform hover:scale-105 hover:rotate-1 shadow-lg border border-white/20 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="text-indigo-600 mb-4 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-800 group-hover:text-indigo-600 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="relative z-10 px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 mb-6 shadow-lg border border-white/20">
            <Heart className="w-5 h-5 text-indigo-600" />
            <span className="text-sm font-medium text-gray-700">Testimonials</span>
          </div>
          
          <h2 className="text-4xl font-bold mb-16 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            What Developers Say
          </h2>
          
          <div className="relative h-48 overflow-hidden">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-all duration-500 ${
                  index === currentTestimonial ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
              >
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/20">
                  <p className="text-xl text-gray-700 mb-6 italic">"{testimonial.content}"</p>
                  <div className="flex items-center justify-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mr-4">
                      <Heart className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="font-bold text-gray-800">{testimonial.name}</div>
                      <div className="text-gray-600">{testimonial.role}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentTestimonial ? 'bg-indigo-600' : 'bg-gray-300'
                }`}
                onClick={() => setCurrentTestimonial(index)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-indigo-600/20 to-purple-600/20 backdrop-blur-sm rounded-3xl p-12 border border-indigo-200/30 shadow-xl bg-white/50">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full flex items-center justify-center animate-pulse">
                <Zap className="w-8 h-8 text-white" />
              </div>
            </div>
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Ready to Join the Community?
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Start building your developer profile today and connect with thousands of talented developers worldwide.
            </p>
            <Link to='/add-user' className="w-fit group px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 flex items-center mx-auto">
              <Globe className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform duration-300" />
              <span>Create Your Profile</span>
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 px-6 py-12 border-t border-gray-200/50 bg-white/30 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-8 h-8 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg flex items-center justify-center">
              <Code className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              DevConnect
            </span>
          </div>
          <p className="text-gray-600 mb-4">
            Connecting developers, one project at a time.
          </p>
          <div className="flex justify-center space-x-6">
            <a href="#" className="text-gray-500 hover:text-indigo-600 transition-colors duration-300">Privacy</a>
            <a href="#" className="text-gray-500 hover:text-indigo-600 transition-colors duration-300">Terms</a>
            <a href="#" className="text-gray-500 hover:text-indigo-600 transition-colors duration-300">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Home