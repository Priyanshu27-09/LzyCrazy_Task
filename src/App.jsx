// App.jsx
import React, { useState } from 'react';
import HomePage from './pages/HomePage';
import SignUpPage from './pages/SignUpPage';
import LoginPage from './pages/LoginPage';
import Header from './components/Header';

const LzyCrazyApp = () => {
  const [currentPage, setCurrentPage] = useState('home');

  return (
    <div className="min-h-screen">
      {/* Navigation Bar */}
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />

      {/* Pages */}
      {currentPage === 'home' && <HomePage setCurrentPage={setCurrentPage} />}
      {currentPage === 'signup' && <SignUpPage setCurrentPage={setCurrentPage} />}
      {currentPage === 'login' && <LoginPage setCurrentPage={setCurrentPage} />}
    </div>
  );
};

export default LzyCrazyApp;
