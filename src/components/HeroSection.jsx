import React from 'react';
import { Search } from 'lucide-react';

const HeroSection = () => (
  <div className="max-w-7xl mx-auto px-4 py-16 text-center mb-12">
    <div className="mb-8 flex justify-center">
      
    </div>
    <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent">
      LzyCrazy
    </h1>
    <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
      Your Dream. Our Deals. Transform your business with our comprehensive platform for
      <span className="font-semibold text-purple-600"> Business</span>,
      <span className="font-semibold text-blue-600"> Shopping</span>, and
      <span className="font-semibold text-indigo-600"> Entertainment</span>
    </p>
    <div className="max-w-2xl mx-auto mb-12 relative">
      <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
      <input
        type="text"
        placeholder="Search for services, products, or entertainment..."
        className="w-full pl-12 pr-6 py-4 bg-white rounded-2xl shadow-lg border-2 border-transparent focus:border-purple-300 focus:outline-none text-lg"
      />
      <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-2 rounded-xl hover:from-purple-700 hover:to-blue-700 transition-all">
        Search
      </button>
    </div>
  </div>
);

export default HeroSection;
