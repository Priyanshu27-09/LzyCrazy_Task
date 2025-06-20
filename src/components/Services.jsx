import React from 'react';

const services = [
  { title: 'About Us', icon: '👥', color: 'from-purple-500 to-pink-500', desc: 'Learn our story' },
  { title: 'LzyCrazy Services', icon: '🛠️', color: 'from-blue-500 to-cyan-500', desc: 'Explore our solutions' },
  { title: 'LzyCrazy Marketplace', icon: '🛒', color: 'from-green-500 to-emerald-500', desc: 'Shop with ease' },
  { title: 'We Are Hiring', icon: '💼', color: 'from-orange-500 to-red-500', desc: 'Join our team' },
];

const Services = () => (
  <div className="max-w-7xl mx-auto px-4 pb-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
    {services.map((item, index) => (
      <div key={index} className="group cursor-pointer bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2 border border-gray-100">
        <div className={`w-16 h-16 bg-gradient-to-r ${item.color} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
          <span className="text-2xl">{item.icon}</span>
        </div>
        <h3 className="text-xl font-bold text-gray-800 mb-2">{item.title}</h3>
        <p className="text-gray-600">{item.desc}</p>
      </div>
    ))}
  </div>
);

export default Services;
