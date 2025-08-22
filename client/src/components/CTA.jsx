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

const CTA = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-green-600 to-emerald-700 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full -translate-x-48 -translate-y-48"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full translate-x-48 translate-y-48"></div>
      </div>

      <div className="relative max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl lg:text-6xl font-black text-white mb-8">
          Ready to Transform
          <span className="block">Your Health?</span>
        </h2>

        <p className="text-xl text-green-100 mb-12 max-w-2xl mx-auto">
          Join thousands of users who have already revolutionized their health
          journey with FitAI
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="px-12 py-4 bg-white text-green-600 rounded-full font-bold text-lg shadow-2xl hover:shadow-white/25 transform hover:scale-105 transition-all duration-300">
            Start Your Free Trial
          </button>

          <div className="flex items-center text-white">
            <Check className="w-5 h-5 mr-2" />
            <span>No credit card required</span>
          </div>
        </div>
      </div>
    </section>
  );
};
export default CTA;
