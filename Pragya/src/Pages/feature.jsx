import { useState } from 'react'

import { Zap, Flame, Trophy, Users, Target, Medal } from 'lucide-react';
import './App.css'

function App() {
  const features = [
    {
      icon: <Zap className="w-8 h-8" />,
      iconBg: 'bg-amber-500',
      title: 'Earn XP & Level Up',
      description: 'Complete lessons, solve problems, and watch your XP grow. Each level unlocks new challenges and rewards.'
    },
    {
      icon: <Flame className="w-8 h-8" />,
      iconBg: 'bg-red-500',
      title: 'Daily Streaks',
      description: 'Build momentum with daily practice. Keep your streak alive and earn bonus rewards for consistency.'
    },
    {
      icon: <Trophy className="w-8 h-8" />,
      iconBg: 'bg-purple-500',
      title: 'Achievements & Badges',
      description: 'Unlock special badges for mastering topics, completing challenges, and hitting milestones.'
    },
    {
      icon: <Users className="w-8 h-8" />,
      iconBg: 'bg-blue-500',
      title: 'Leaderboards',
      description: 'Compete with peers and track your progress on global and class leaderboards.'
    },
    {
      icon: <Target className="w-8 h-8" />,
      iconBg: 'bg-teal-500',
      title: 'Adaptive Learning',
      description: 'Personalized content that adjusts to your skill level and learning pace for optimal growth.'
    },
    {
      icon: <Medal className="w-8 h-8" />,
      iconBg: 'bg-orange-500',
      title: 'Weekly Challenges',
      description: 'Take on special weekly challenges to test your skills and earn exclusive rewards.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-20">
          {/* Gamification Tag */}
          <div className="inline-block mb-8">
            <span className="px-6 py-2 bg-gradient-to-r from-orange-100 to-orange-200 text-orange-700 rounded-full text-sm font-semibold tracking-wide">
              Gamification
            </span>
          </div>
          
          {/* Main Headline */}
          <h1 className="text-6xl font-bold mb-6 leading-tight">
            Learning That{' '}
            <span className="bg-gradient-to-r from-purple-600 via-blue-500 to-cyan-500 bg-clip-text text-transparent">
              Feels Like Play
            </span>
          </h1>
          
          {/* Subheadline */}
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Every lesson is a quest. Every problem solved is progress. Stay motivated with
            rewards that make learning addictive.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-gray-200 hover:-translate-y-1"
            >
              {/* Icon */}
              <div className={`${feature.iconBg} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform duration-300`}>
                {feature.icon}
              </div>
              
              {/* Title */}
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {feature.title}
              </h3>
              
              {/* Description */}
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800&display=swap');
        
        * {
          font-family: 'Inter', sans-serif;
        }
      `}</style>
    </div>
  );
}

export default App
