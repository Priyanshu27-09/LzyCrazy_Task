import React from 'react';
import logo from '../assets/logo.png'; // adjust the path if needed

const Header = ({ currentPage, setCurrentPage }) => {
  return (
    <header className="py-4 px-6 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <img src={logo} alt="LzyCrazy Logo" className="h-20 w-20 object-contain" />
        <span className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">
          LzyCrazy
        </span>
      </div>

      {/* Navigation */}
      <nav className="flex gap-6">
        {['home', 'signup', 'login'].map((page) => (
          <button
            key={page}
            onClick={() => setCurrentPage(page)}
            className={`px-4 py-1.5 rounded-full font-medium transition-all duration-200 ${
              currentPage === page
                ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white'
                : 'text-gray-700 hover:text-purple-600'
            }`}
          >
            {page.charAt(0).toUpperCase() + page.slice(1)}
          </button>
        ))}
      </nav>
    </header>
  );
};

export default Header;
