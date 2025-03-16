import React, { useState, useEffect } from 'react';
import fidoTalk from "../assets/fidotalk.png";
import rbiTalk from "../assets/rbitalk.png";
import gbsTalk from "../assets/gbstalk.png";
// import { motion } from 'framer-motion';

const TalksAndAwardsPage = () => {
  const [selectedTab, setSelectedTab] = useState('talks');
  const [activeIndex, setActiveIndex] = useState(0);

  // Sample talks data
  const talks = [
    {
      id: 1,
      title: "Digital Payments Security",
      speaker: "Dr. Sibi Chakkaravarthy Sethuraman",
      role: "Co-Founder",
      venue: "Reserve Bank of India",
      date: "March 10, 2025",
      description: "Technical session on advanced digital payment security frameworks and emerging threats in the financial sector.",
      image: rbiTalk // Placeholder for your actual image
    },
    {
      id: 2,
      title: "Privacy Enhanced Technologies(PET)",
      speaker: "Dr. Sibi Chakkaravarthy Sethuraman",
      role: "Co-Founder",
      venue: "Standard Chartered GBS India",
      date: "June 2023",
      description: "In-depth technical session exploring privacy-preserving computation methods and their applications in finance.",
      image: gbsTalk // Placeholder for your actual image
    },
    {
      id: 3,
      title: "FIDO Developer Challenge",
      speaker: "Dr. Sibi Chakkaravarthy Sethuraman & Aditya Mitra",
      role: "Co-Founder & CTO",
      venue: "Samsung R&D, New Delhi",
      date: "January 2023",
      description: "Presentation on passwordless authentication protocols and secure identity verification systems.",
      image: fidoTalk // Placeholder for your actual image
    }
  ];

  // Sample awards data - you can add your actual awards here
  const awards = [
    {
      id: 1,
      title: "Innovation Award",
      organization: "Fintech Innovation Summit",
      date: "2024",
      description: "Recognized for breakthrough contributions in secure payment systems.",
      image: "/api/placeholder/600/400" // Placeholder for your actual image
    }
  ];

  // Auto-rotate through talks
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => 
        prevIndex === (selectedTab === 'talks' ? talks.length - 1 : awards.length - 1) ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [selectedTab, talks.length, awards.length]);

  // Display the active items based on selected tab
  const activeItems = selectedTab === 'talks' ? talks : awards;
  const activeItem = activeItems[activeIndex];

  return (
    <div className="bg-gradient-to-br landing-bg min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-[#dcbd00] sm:text-5xl sm:tracking-tight lg:text-6xl">
            <span className="text-white">Talks</span> & <span className="text-white">Awards</span>
          </h1>
          <p className="max-w-xl mt-5 mx-auto text-xl text-gray-300">
            Showcasing our experts' knowledge contributions and industry recognition.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex rounded-md shadow">
            <button
              onClick={() => { setSelectedTab('talks'); setActiveIndex(0); }}
              className={`${
                selectedTab === 'talks'
                  ? 'bg-[#dcbd00] text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              } px-6 py-3 rounded-l-md font-medium text-lg transition duration-150 ease-in-out`}
            >
              Expert Talks
            </button>
            <button
              onClick={() => { setSelectedTab('awards'); setActiveIndex(0); }}
              className={`${
                selectedTab === 'awards'
                  ? 'bg-[#dcbd00] text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              } px-6 py-3 rounded-r-md font-medium text-lg transition duration-150 ease-in-out`}
            >
              Awards
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="relative">
          <div className="overflow-hidden rounded-xl shadow-xl bg-[#211546]">
            <div className="md:flex">
              {/* Image */}
              <div className="md:w-1/2 relative overflow-hidden">
                <div className="h-64 md:h-full w-full relative">
                  <img
                    src={activeItem.image}
                    alt={activeItem.title}
                    className="absolute inset-0 h-full w-full object-cover transform hover:scale-105 transition duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-4 md:p-6">
                    <p className="text-white text-xs md:text-sm font-medium">
                      {activeItem.date}
                    </p>
                    <p className="text-white text-sm md:text-base font-bold">
                      {activeItem.venue}
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Content */}
              <div className="md:w-1/2 p-6 md:p-10">
                <div className="mb-4">
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                    {activeItem.title}
                  </h2>
                  {selectedTab === 'talks' && (
                    <p className="text-lg font-medium text-indigo-600">
                      {activeItem.speaker} <span className="text-gray-300">• {activeItem.role}</span>
                    </p>
                  )}
                  {selectedTab === 'awards' && (
                    <p className="text-lg font-medium text-purple-600">
                      {activeItem.organization}
                    </p>
                  )}
                </div>
                
                <p className="text-gray-300 mb-8">
                  {activeItem.description}
                </p>
                
                <div className="flex space-x-2">
                  {activeItems.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveIndex(index)}
                      className={`h-2 w-2 rounded-full ${
                        index === activeIndex ? 
                          (selectedTab === 'talks' ? 'bg-indigo-600' : 'bg-purple-600') : 
                          'bg-gray-300'
                      }`}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <div className="absolute top-1/2 transform -translate-y-1/2 flex justify-between w-full px-4">
            <button
              onClick={() => setActiveIndex(activeIndex === 0 ? activeItems.length - 1 : activeIndex - 1)}
              className="bg-white/80 backdrop-blur-sm rounded-full p-2 shadow-lg hover:bg-white transition"
              aria-label="Previous"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={() => setActiveIndex(activeIndex === activeItems.length - 1 ? 0 : activeIndex + 1)}
              className="bg-white/80 backdrop-blur-sm rounded-full p-2 shadow-lg hover:bg-white transition"
              aria-label="Next"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
        
        {/* Bottom Navigation */}
        <div className="mt-16 flex flex-wrap justify-center gap-4">
          {activeItems.map((item, index) => (
            <button
              key={item.id}
              onClick={() => setActiveIndex(index)}
              className={`px-4 py-2 rounded-lg ${
                index === activeIndex
                  ? selectedTab === 'talks'
                    ? 'bg-indigo-600 text-white'
                    : 'bg-purple-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              } shadow-md transition-all duration-300`}
            >
              {item.title}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TalksAndAwardsPage;