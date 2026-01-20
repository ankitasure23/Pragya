import { Zap, Star } from 'lucide-react';
import React from 'react';
import "../App.css";
function Hero() {
    return (
        <>
        <div className="flex gap-5 mb-12">
              <button className="px-8 py-4 bg-linear-to-r from-purple-600 to-blue-600 text-white rounded-xl font-bold hover:shadow-xl transition-all flex items-center gap-2 group">
                Start Your Quest
                <Zap className="w-5 h-5 group-hover:rotate-12 transition-transform" />
              </button>
              <button className="px-8 py-4 bg-white text-gray-700 rounded-xl font-bold hover:shadow-lg transition-shadow border border-gray-200">
                Watch Demo
              </button>
            </div>
        <div className="grid grid-cols-3 gap-1 max-w-96">
              <div>
                <div className="text-3xl font-bold text-gray-900 mb-1">50K+</div>
                <div className="text-gray-600 text-sm">Active Learners</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-gray-900 mb-1">1M+</div>
                <div className="text-gray-600 text-sm">Lessons Completed</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-gray-900 mb-1">4.9</div>
                <div className="text-gray-600 text-sm">User Rating</div>
              </div>
            </div>
        </>
    );
}

export default Hero;