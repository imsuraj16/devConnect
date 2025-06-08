import React from 'react';
import { Code, Users, Rocket, Star, ArrowRight, Github, Twitter, Linkedin, Zap, Globe, Heart } from 'lucide-react';

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-indigo-400/20 to-cyan-400/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-purple-400/15 to-pink-400/15 rounded-full blur-2xl"></div>
      </div>

      {/* Hero Section */}
      <main className="relative z-10 px-6 pt-32 pb-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-slate-800 via-blue-600 to-purple-600 bg-clip-text text-transparent">
                Connect.
              </span>
              <br />
              <span className="bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-600 bg-clip-text text-transparent">
                Code.
              </span>
              <br />
              <span className="bg-gradient-to-r from-cyan-600 via-blue-600 to-slate-800 bg-clip-text text-transparent">
                Create.
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Join the ultimate developer social hub where innovation meets collaboration. 
              Share your projects, connect with brilliant minds, and build the future together.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl font-semibold hover:from-blue-600 hover:to-purple-700 transition-all transform hover:scale-105 flex items-center justify-center space-x-2 shadow-lg">
                <Rocket className="w-5 h-5" />
                <span>Start Building</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="px-8 py-4 bg-white/80 backdrop-blur-sm border border-slate-200 text-slate-700 rounded-xl font-semibold hover:bg-white/90 hover:shadow-lg transition-all transform hover:scale-105 flex items-center justify-center space-x-2">
                <Globe className="w-5 h-5" />
                <span>Explore Community</span>
              </button>
            </div>

            {/* Quick Actions */}
            <div className="flex flex-wrap justify-center gap-4 mb-16">
              <div className="bg-white/70 backdrop-blur-sm rounded-xl px-6 py-3 border border-white/20 hover:bg-white/80 transition-all cursor-pointer flex items-center space-x-2">
                <Users className="w-4 h-4 text-blue-600" />
                <span className="text-slate-700 font-medium">Browse Developers</span>
              </div>
              <div className="bg-white/70 backdrop-blur-sm rounded-xl px-6 py-3 border border-white/20 hover:bg-white/80 transition-all cursor-pointer flex items-center space-x-2">
                <Code className="w-4 h-4 text-purple-600" />
                <span className="text-slate-700 font-medium">View Projects</span>
              </div>
              <div className="bg-white/70 backdrop-blur-sm rounded-xl px-6 py-3 border border-white/20 hover:bg-white/80 transition-all cursor-pointer flex items-center space-x-2">
                <Star className="w-4 h-4 text-yellow-500" />
                <span className="text-slate-700 font-medium">Top Rated</span>
              </div>
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            <div className="text-center p-8 bg-white/60 backdrop-blur-sm rounded-2xl border border-white/20 hover:bg-white/70 transition-all hover:transform hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-slate-800 mb-2">10K+</div>
              <div className="text-slate-600">Active Developers</div>
            </div>
            
            <div className="text-center p-8 bg-white/60 backdrop-blur-sm rounded-2xl border border-white/20 hover:bg-white/70 transition-all hover:transform hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Code className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-slate-800 mb-2">25K+</div>
              <div className="text-slate-600">Projects Shared</div>
            </div>
            
            <div className="text-center p-8 bg-white/60 backdrop-blur-sm rounded-2xl border border-white/20 hover:bg-white/70 transition-all hover:transform hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-slate-800 mb-2">50K+</div>
              <div className="text-slate-600">Connections Made</div>
            </div>
          </div>

          {/* Live Activity Feed */}
          <div className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-slate-800 to-indigo-600 bg-clip-text text-transparent">
              Live Activity
            </h2>
            <div className="max-w-4xl mx-auto space-y-4">
              <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/80 transition-all">
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-semibold text-sm">AK</span>
                  </div>
                  <div className="flex-1">
                    <p className="text-slate-800"><strong>Amit Kumar</strong> shared a new project: <strong>"React Dashboard"</strong></p>
                    <p className="text-slate-500 text-sm">2 minutes ago</p>
                  </div>
                  <div className="flex items-center space-x-1 text-yellow-500">
                    <Star className="w-4 h-4 fill-current" />
                    <span className="text-sm">47</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/80 transition-all">
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-semibold text-sm">PS</span>
                  </div>
                  <div className="flex-1">
                    <p className="text-slate-800"><strong>Priya Sharma</strong> joined the community and is looking for <strong>React Native</strong> collaborators</p>
                    <p className="text-slate-500 text-sm">5 minutes ago</p>
                  </div>
                  <div className="flex items-center space-x-1 text-green-500">
                    <Users className="w-4 h-4" />
                    <span className="text-sm">New</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/80 transition-all">
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-indigo-500 to-cyan-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-semibold text-sm">RG</span>
                  </div>
                  <div className="flex-1">
                    <p className="text-slate-800"><strong>Rahul Gupta</strong> got 100+ stars on <strong>"Node.js Microservices"</strong></p>
                    <p className="text-slate-500 text-sm">8 minutes ago</p>
                  </div>
                  <div className="flex items-center space-x-1 text-yellow-500">
                    <Star className="w-4 h-4 fill-current" />
                    <span className="text-sm">100+</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Featured Projects */}
          <div className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-slate-800 to-blue-600 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/80 transition-all hover:transform hover:scale-105">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-slate-800">AI Chat Bot</h3>
                  <div className="flex items-center space-x-1 text-yellow-500">
                    <Star className="w-4 h-4 fill-current" />
                    <span className="text-sm text-slate-600">234</span>
                  </div>
                </div>
                <p className="text-slate-600 mb-4">An intelligent chatbot built with modern AI technologies</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">React</span>
                  <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">Node.js</span>
                </div>
              </div>
              
              <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/80 transition-all hover:transform hover:scale-105">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-slate-800">E-commerce API</h3>
                  <div className="flex items-center space-x-1 text-yellow-500">
                    <Star className="w-4 h-4 fill-current" />
                    <span className="text-sm text-slate-600">156</span>
                  </div>
                </div>
                <p className="text-slate-600 mb-4">Scalable REST API for modern e-commerce platforms</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full text-sm">Python</span>
                  <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm">FastAPI</span>
                </div>
              </div>
              
              <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/80 transition-all hover:transform hover:scale-105">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-slate-800">Weather App</h3>
                  <div className="flex items-center space-x-1 text-yellow-500">
                    <Star className="w-4 h-4 fill-current" />
                    <span className="text-sm text-slate-600">89</span>
                  </div>
                </div>
                <p className="text-slate-600 mb-4">Beautiful mobile weather app with real-time updates</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-cyan-100 text-cyan-700 rounded-full text-sm">React Native</span>
                </div>
              </div>
            </div>
          </div>

          {/* Features Section */}
          <div className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-slate-800 to-purple-600 bg-clip-text text-transparent">
              Why Choose DevConnect?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-slate-800 mb-3">Connect with Developers</h3>
                <p className="text-slate-600">Build your network with like-minded developers from around the world</p>
              </div>
              
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Code className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-slate-800 mb-3">Showcase Projects</h3>
                <p className="text-slate-600">Share your work and get feedback from the community</p>
              </div>
              
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-slate-800 mb-3">Fast & Modern</h3>
                <p className="text-slate-600">Built with cutting-edge technology for the best user experience</p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-sm rounded-3xl p-12 border border-white/20">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-slate-800 to-blue-600 bg-clip-text text-transparent">
              Ready to Join the Community?
            </h2>
            <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
              Start your journey today and be part of the most vibrant developer community
            </p>
            <button className="px-10 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl font-semibold hover:from-blue-600 hover:to-purple-700 transition-all transform hover:scale-105 inline-flex items-center space-x-2">
              <span>Join DevConnect</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 bg-slate-800/5 backdrop-blur-sm border-t border-slate-200/20 py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-6 md:mb-0">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Code className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                DevConnect
              </span>
            </div>
            
            <div className="flex items-center space-x-6">
              <a href="#" className="text-slate-600 hover:text-blue-600 transition-colors">
                <Github className="w-6 h-6" />
              </a>
              <a href="#" className="text-slate-600 hover:text-blue-600 transition-colors">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="#" className="text-slate-600 hover:text-blue-600 transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-slate-200/20 text-center text-slate-600">
            <p>&copy; 2024 DevConnect. Made with ❤️ for developers.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;