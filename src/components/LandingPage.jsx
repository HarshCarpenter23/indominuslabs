import React from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const WavePattern = () => (
  <div className="absolute inset-0 w-full h-full z-0">
    <img
      src="/home-wave.png"
      alt="Wave Pattern"
      className="w-full h-full object-cover"
    />
  </div>
);

const Ellipse = () => (
  <div className="absolute bottom-0 right-0 w-full h-full z-0">
    <img
      src="/Ellipse5.png"
      alt="Wave Pattern"
      className="object-contain bottom-0 right-0"
    />
  </div>
);

const Landing = () => {
  return (
    <div className="relative min-h-screen bg-white overflow-hidden">
      {/* Background Vector Pattern */}
      <WavePattern />
      <Ellipse />

      {/* Content Container */}
      <div className="relative z-10 mx-2 px-4 sm:px-6 lg:px-8 pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 justify-between w-full">
          {/* Left Column - Text Content */}
          <div className="space-y-8 pt-16 pl-8">
            <h1 className="text-xl md:text-2xl font-bold leading-tight text-gray-900 text-left">
              Empowering the Future of Digital Security with <br /> Innovative,
              Compliant, and Seamless Solutions for a Connected World.
            </h1>
            <div className="flex justify-start">
              <button className="inline-flex px-9 py-3 border font-bold rounded-full text-[#7203FE] border-[#7203FE] hover:bg-[#7203FE] hover:text-white transition-colors purple-shadow duration-300">
                Learn More
              </button>
            </div>
          </div>

          {/* Right Column - Lottie Animation */}
          <div className="relative w-full h-full">
            <div className="w-full h-full">
              <DotLottieReact
                src="https://lottie.host/6932b164-3d7b-43b1-8122-f459ffef6698/a7uLHCXwru.lottie"
                loop
                autoplay
                className="w-full h-full"
              />
            </div>
            {/* Decorative Stars */}
            {/* <div className="absolute top-0 right-0 transform -translate-y-8 translate-x-4">
              <svg className="w-8 h-8 text-yellow-400" viewBox="0 0 24 24">
                <path fill="currentColor" d="M12 2L14 8H20L15 12L17 18L12 14L7 18L9 12L4 8H10L12 2Z" />
              </svg>
            </div>
            <div className="absolute top-4 right-12">
              <svg className="w-6 h-6 text-yellow-400" viewBox="0 0 24 24">
                <path fill="currentColor" d="M12 2L14 8H20L15 12L17 18L12 14L7 18L9 12L4 8H10L12 2Z" />
              </svg>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
