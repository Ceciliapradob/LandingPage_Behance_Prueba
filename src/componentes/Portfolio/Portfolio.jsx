import React from 'react';
import Portfolio1 from '../../assets/portfolio1.jpg';
import Portfolio2 from '../../assets/portfolio2.jpg';
import Portfolio3 from '../../assets/portfolio3.jpg';
import Portfolio4 from '../../assets/portfolio4.jpg';
import Portfolio5 from '../../assets/portfolio5.jpg';
import Portfolio6 from '../../assets/portfolio6.jpg';

const portfolioItems = [
  {
    image: Portfolio1,
    category: 'DEVELOPMENT',
    likes: 600,
    title: 'The services provide for design',
  },
  {
    image: Portfolio2,
    category: 'APPLICATION',
    likes: 750,
    title: 'Mobile app landing design & app maintain',
  },
  {
    image: Portfolio3,
    category: 'PHOTOSHOP',
    likes: 630,
    title: 'Logo design creativity & Application',
  },
  {
    image: Portfolio4,
    category: 'FIGMA',
    likes: 360,
    title: 'Mobile app landing design & Services',
  },
  {
    image: Portfolio5,
    category: 'WEB DESIGN',
    likes: 280,
    title: 'Design for tecnology & services',
  },
  {
    image: Portfolio6,
    category: 'WEB DESIGN',
    likes: 690,
    title: 'App for tecnology & services',
  },
];

const PortfolioSection = () => {
  return (
    <section className="py-16 px-4 text-center">
      <p className="text-pink-500 uppercase text-sm tracking-widest font-semibold mb-2">
        Visit my portfolio and keep your feedback
      </p>
      <h2 className="text-4xl font-bold text-gray-800 mb-12">My Portfolio</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {portfolioItems.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow px-6 pt-4 pb-7"
          >
            <div className="overflow-hidden rounded-xl h-56 mb-4 p-2">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-48 object-cover rounded-xl"
              />
            </div>
            <div className="text-left">
              <div className="flex justify-between text-sm text-gray-500 mb-2">
                <span className="text-pink-600 font-semibold uppercase">{item.category}</span>
                <span>{item.likes}</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PortfolioSection;
