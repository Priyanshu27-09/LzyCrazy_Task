import React from 'react';
import { Globe } from 'lucide-react';

const Footer = () => (
  <footer className="bg-white border-t border-gray-100 py-3">
    <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
      <div className="flex items-center space-x-4 mb-4 md:mb-0">
        <Globe className="w-5 h-5 text-gray-600" />
        <span className="text-gray-600">India | LzyCrazy offered in:</span>
        <div className="flex space-x-4">
          {['हिंदी', 'English', 'বাংলা', 'العربية'].map((lang) => (
            <button key={lang} className="text-blue-600 hover:underline">{lang}</button>
          ))}
        </div>
      </div>
      <div className="flex space-x-6">
        <button className="text-gray-600 hover:text-purple-600">Privacy</button>
        <button className="text-gray-600 hover:text-purple-600">Terms</button>
      </div>
    </div>
  </footer>
);

export default Footer;
