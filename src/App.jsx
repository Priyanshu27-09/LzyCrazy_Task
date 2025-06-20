// App.jsx
import React, { useState } from 'react';
import HomePage from './pages/HomePage';
import SignupPage from './pages/SignupPage';
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
      {currentPage === 'signup' && <SignupPage setCurrentPage={setCurrentPage} />}
      {currentPage === 'login' && <LoginPage setCurrentPage={setCurrentPage} />}
    </div>
  );
};

export default LzyCrazyApp;
