import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const countries = [
  { code: '+91', flag: '🇮🇳', name: 'India' },
  { code: '+1', flag: '🇺🇸', name: 'USA' },
  { code: '+44', flag: '🇬🇧', name: 'UK' },
  { code: '+86', flag: '🇨🇳', name: 'China' }
];

const CountryDropdown = ({ selectedCountry, setSelectedCountry }) => {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setShowDropdown(!showDropdown)}
        className="flex items-center space-x-2 px-3 py-3 border-2 border-gray-200 rounded-l-xl focus:border-purple-400 focus:outline-none bg-gray-50"
      >
        <span className="text-lg">
          {countries.find(c => c.code === selectedCountry)?.flag || '🌍'}
        </span>
        <span className="text-sm font-medium">{selectedCountry}</span>
        <ChevronDown className="w-4 h-4 text-gray-400" />
      </button>
      {showDropdown && (
        <div className="absolute top-full left-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-10 min-w-full">
          {countries.map((country) => (
            <button
              key={country.code}
              onClick={() => {
                setSelectedCountry(country.code);
                setShowDropdown(false);
              }}
              className="flex items-center space-x-2 w-full px-3 py-2 hover:bg-gray-50 text-left"
            >
              <span>{country.flag}</span>
              <span className="text-sm">{country.code}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default CountryDropdown;
