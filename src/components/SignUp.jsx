import React, { useState } from 'react';
import { User, Mail, Lock, Eye, EyeOff } from 'lucide-react';
import Country from './Country.jsx';

const SignupForm = ({ setCurrentPage }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState('+91');

  return (
    <div className="bg-white rounded-3xl shadow-2xl p-8 w-full max-w-md border border-gray-100">
      <div className="text-center mb-8">
        <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
          <User className="w-8 h-8 text-white" />
        </div>
        <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
          Create Account
        </h2>
        <p className="text-gray-600 mt-2">Join the LzyCrazy community today</p>
      </div>

      <div className="space-y-6">
        <div className="relative">
          <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Full Name"
            className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-400 focus:outline-none transition-colors"
          />
        </div>

        <div className="flex">
          <Country selectedCountry={selectedCountry} setSelectedCountry={setSelectedCountry} />
          <input
            type="tel"
            placeholder="Phone Number"
            className="flex-1 px-4 py-3 border-2 border-l-0 border-gray-200 rounded-r-xl focus:border-purple-400 focus:outline-none transition-colors"
          />
        </div>

        <div className="relative">
          <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="email"
            placeholder="Email Address"
            className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-400 focus:outline-none transition-colors"
          />
        </div>

        <div className="relative">
          <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type={showPassword ? 'text' : 'password'}
            placeholder="Password"
            className="w-full pl-10 pr-12 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-400 focus:outline-none transition-colors"
          />
          <button
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
          >
            {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
          </button>
        </div>

        <p className="text-sm text-gray-600">
          By clicking Sign Up, you agree to our{' '}
          <button className="text-purple-600 hover:underline">Terms</button>,{' '}
          <button className="text-purple-600 hover:underline">Privacy</button>, and{' '}
          <button className="text-purple-600 hover:underline">Cookies Policy</button>.
        </p>

        <button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 rounded-xl font-semibold hover:from-purple-700 hover:to-blue-700 transition-all transform hover:scale-105 shadow-lg">
          Sign Up
        </button>

        <div className="text-center">
          <button onClick={() => setCurrentPage('login')} className="text-purple-600 hover:underline">
            Already have an account?
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignupForm;
