import React from "react";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import ShinyButton from "./ShinyButton";

const PartnersSection = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4 pb-12">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left Image Section */}
          <div className="w-full max-w-[500px] lg:w-1/2 mx-auto relative">
            <div className="aspect-square w-full">
                <DotLottieReact
                src="https://lottie.host/87ba02eb-9a54-435b-9e48-6fe34dacfa9e/gO40BqcPun.lottie"
                loop
                autoplay
                className="w-full h-full object-contain scale-105"
                />
            </div>
            </div>

          {/* Right Content Section */}
          <div className="lg:w-1/2 space-y-6">
            {/* Section Label */}
            <p className="text-lg font-semibold tracking-wider text-gray-900">
              PARTNERS
            </p>

            {/* Main Heading */}
            <div className="space-y-2">
              <h2 className="text-3xl md:text-3xl lg:text-4xl font-bold text-gray-900">
                Hundreds Of Partners,
                <br />
                One Shared Goal:
              </h2>
              <h2 className="text-3xl md:text-3xl lg:text-4xl font-bold text-[#7203FE]">
                A Safer & Advanced Space!
              </h2>
            </div>

            {/* Description */}
            <p className="text-gray-700 text-base leading-relaxed">
              From start-ups to conglomerates, organizations around the globe
              rely on Indominus Labs to protect their digital assets. And so,
              the Indominus Labs partner ecosystem comprises of partners who
              share our values, allowing us to offer our customers the most
              advanced and the latest technology, together.
            </p>

            {/* Partners Count */}
            <p className="text-xl font-semibold text-gray-900">
              100+ Diverse Global Partners, Distributors, Value-Added Vendors,
              and System Integrators.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 pt-4 justify-center">
              <button className="px-8 py-3 border border-[#7203FE] text-[#7203FE] font-semibold rounded-full transition-colors duration-300 purple-shadow hover:bg-[#7203FE] hover:text-white">
                View Partners
              </button>
              {/* <button className="px-8 py-3 bg-purple-600 text-white font-semibold rounded-full hover:bg-purple-700 transition-colors duration-300 shadow-xl hover:bg-white hover:text-[#7203FE] hover:border hover:border-[#7203FE]">
                Schedule Demo
              </button> */}
              <ShinyButton/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartnersSection;
