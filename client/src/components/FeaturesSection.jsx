import React from "react";
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

const FeaturesSection = () => {
  const features = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: "AI-Powered Meal Planning",
      description:
        "Get personalized meal recommendations based on your goals, preferences, and dietary restrictions.",
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Smart Goal Tracking",
      description:
        "Track calories, macros, and progress with intelligent insights and predictive analytics.",
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Progress Analytics",
      description:
        "Visualize your health journey with detailed charts and personalized recommendations.",
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-6xl font-black text-gray-900 mb-6">
            Why Choose
            <span className="block bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
              FitAI?
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Experience the future of health and nutrition with our cutting-edge
            AI technology
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-8 rounded-3xl bg-gradient-to-br from-gray-50 to-white border border-gray-100 hover:shadow-2xl hover:shadow-green-500/10 transform hover:-translate-y-2 transition-all duration-300"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
