import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import Services from '../components/Services';
import Footer from '../components/Footer';

const HomePage = ({ setCurrentPage }) => (
  <>
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100">
      <HeroSection />
      <Services />
    </div>
    <Footer />
  </>
);

export default HomePage;
