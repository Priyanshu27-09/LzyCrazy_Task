import React from 'react';
import Login from '../components/Login';
import Footer from '../components/Footer';

const LoginPage = ({ setCurrentPage }) => (
  <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100 flex items-center justify-center p-4">
    <Login setCurrentPage={setCurrentPage} />
    <div className="fixed bottom-0 left-0 right-0">
      <Footer />
    </div>
  </div>
);

export default LoginPage;
