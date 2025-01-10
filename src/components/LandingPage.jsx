import React from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const WavePattern = () => (
  <div className="absolute inset-0 w-full h-full z-0">
    <img 
      src="/home-wave.png" 
      alt="Wave Pattern" 
      className="w-full h-full object-cover" 
    />
  </div>
);

const Landing = () => {
  return (
    <div className="relative min-h-screen bg-white overflow-hidden">
      {/* Background Vector Pattern */}
      <WavePattern />

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-8">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight text-gray-900">
              Empowering the Future of Digital Security with Innovative, Compliant, and Seamless Solutions for a Connected World.
            </h1>
            <button className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 transition-colors">
              Learn More
            </button>
          </div>

          {/* Right Column - Lottie Animation */}
          <div className="relative w-full h-96">
            <div className="w-full h-full">
              <DotLottieReact
                src="https://lottie.host/6932b164-3d7b-43b1-8122-f459ffef6698/a7uLHCXwru.lottie"
                loop
                autoplay
                className="w-full h-full"
              />
            </div>
            {/* Decorative Stars */}
            <div className="absolute top-0 right-0 transform -translate-y-8 translate-x-4">
              <svg className="w-8 h-8 text-yellow-400" viewBox="0 0 24 24">
                <path fill="currentColor" d="M12 2L14 8H20L15 12L17 18L12 14L7 18L9 12L4 8H10L12 2Z" />
              </svg>
            </div>
            <div className="absolute top-4 right-12">
              <svg className="w-6 h-6 text-yellow-400" viewBox="0 0 24 24">
                <path fill="currentColor" d="M12 2L14 8H20L15 12L17 18L12 14L7 18L9 12L4 8H10L12 2Z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
