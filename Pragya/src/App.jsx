import { useState } from 'react'
import './App.css'
import Navigation from "./Pages/Navigation.jsx"
import { Zap, Star, Flame } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-linear-to-br from-purple-50 via-blue-50 to-cyan-50">
      <Navigation />
    </div>
  );
}

export default App

