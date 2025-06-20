import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Tailwind styles
import LzyCrazyApp from './App'; // Adjust path if needed

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <LzyCrazyApp />
  </React.StrictMode>
);
