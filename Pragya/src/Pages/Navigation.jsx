import { Zap, Star, Flame } from 'lucide-react';

function Navigation() {
    return (
    <>
      <div className="min-h-screen bg-linear-to-br from-purple-50 via-blue-50 to-cyan-50">
      {/* Navigation */}
      <nav className="flex items-center justify-between px-8 py-4 bg-transparent/80 backdrop-blur-sm">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-linear-to-br from-purple-600 to-blue-600 rounded-xl flex items-center justify-center">
            <Zap className="w-6 h-6 text-white" fill="white" />
          </div>
          <span className="text-xl font-bold">
            STEM<span className="text-blue-600">Quest</span>
          </span>
        </div>
        
        <div className="flex items-center gap-8">
          <a href="#features" className="text-gray-600 hover:text-gray-900">Features</a>
          <a href="#subjects" className="text-gray-600 hover:text-gray-900">Subjects</a>
          <a href="#how-it-works" className="text-gray-600 hover:text-gray-900">How It Works</a>
        </div>
        
        <div className="flex items-center gap-4">
          <button className="text-gray-700 hover:text-gray-900 font-medium">Log In</button>
          <button className="px-6 py-2 bg-linear-to-r from-purple-600 to-blue-600 text-white rounded-lg font-medium hover:shadow-lg transition-shadow">
            Start Learning
          </button>
        </div>
      </nav>

      
    </div>
    </>
  );
}

export default Navigation;