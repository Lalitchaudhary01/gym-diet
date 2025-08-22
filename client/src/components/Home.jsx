import React from "react";
import Navbar from "./Nabar";
import {
  Menu,
  X,
  Play,
  Star,
  ArrowRight,
  Check,
  Zap,
  Target,
  TrendingUp,
} from "lucide-react";

const Home = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50">
        <div className="absolute top-20 left-10 w-72 h-72 bg-green-200/30 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div
          className="absolute top-40 right-10 w-96 h-96 bg-emerald-200/30 rounded-full mix-blend-multiply filter blur-xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute bottom-20 left-1/3 w-80 h-80 bg-teal-200/30 rounded-full mix-blend-multiply filter blur-xl animate-pulse"
          style={{ animationDelay: "4s" }}
        ></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-100 text-green-800 text-sm font-medium animate-bounce">
              <Zap className="w-4 h-4 mr-2" />
              AI-Powered Nutrition
            </div>

            <h1 className="text-5xl lg:text-7xl font-black text-gray-900 leading-tight">
              Transform Your
              <span className="block bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                Health Journey
              </span>
            </h1>

            <p className="text-xl text-gray-600 max-w-lg leading-relaxed">
              Harness the power of AI to create personalized meal plans, track
              nutrition, and achieve your fitness goals with intelligent
              recommendations.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="group px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-full font-semibold text-lg shadow-2xl hover:shadow-green-500/25 transform hover:scale-105 transition-all duration-300">
                Start Free Trial
                <ArrowRight className="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <button className="group px-8 py-4 bg-white/80 backdrop-blur-sm border-2 border-gray-200 text-gray-700 rounded-full font-semibold text-lg hover:border-green-300 hover:text-green-600 transition-all duration-300">
                <Play className="inline-block mr-2 w-5 h-5" />
                Watch Demo
              </button>
            </div>

            <div className="flex items-center space-x-8 pt-8">
              <div className="flex items-center">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="w-10 h-10 rounded-full bg-gradient-to-br from-green-400 to-emerald-500 border-2 border-white"
                    ></div>
                  ))}
                </div>
                <span className="ml-3 text-gray-600">10k+ happy users</span>
              </div>

              <div className="flex items-center">
                <div className="flex text-yellow-400">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
                <span className="ml-2 text-gray-600">4.9/5 rating</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10 bg-white rounded-3xl shadow-2xl p-8 transform hover:rotate-1 transition-transform duration-500">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold">Today's Goals</h3>
                  <div className="flex items-center text-green-600">
                    <Target className="w-5 h-5 mr-1" />
                    <span className="text-sm">85% Complete</span>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Calories</span>
                    <span className="font-semibold">1,847 / 2,200</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-gradient-to-r from-green-500 to-emerald-500 h-2 rounded-full w-4/5"></div>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Protein</span>
                    <span className="font-semibold">156g / 180g</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-gradient-to-r from-blue-500 to-cyan-500 h-2 rounded-full w-5/6"></div>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Water</span>
                    <span className="font-semibold">6 / 8 glasses</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-gradient-to-r from-cyan-500 to-blue-500 h-2 rounded-full w-3/4"></div>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-green-50 rounded-xl">
                  <div className="flex items-center">
                    <TrendingUp className="w-5 h-5 text-green-600 mr-2" />
                    <span className="text-green-800 font-medium">
                      You're on track! Keep it up!
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl shadow-xl animate-float"></div>
            <div
              className="absolute -bottom-6 -left-6 w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl shadow-xl animate-float"
              style={{ animationDelay: "1s" }}
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Home;
