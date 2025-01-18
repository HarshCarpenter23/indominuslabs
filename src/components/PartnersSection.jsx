import React from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import ShinyButton from "./ShinyButton";
import { FadeIn } from "./FadeIn";

const PartnersSection = () => {
  return (
    <FadeIn>
      <div className="min-h-screen flex items-center justify-center product-section-bg pb-12 ">
        <div className="container mx-auto overflow-hidden">
          <p className="text-2xl text-gradient-blue font-semibold tracking-wider mx-auto">
            PARTNERS
          </p>
          <img
                src="/Path4.png"
                alt="Background Pattern"
                className="absolute object-contain z-0"
              />
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Left Image Section with Background */}
            
            <div className="w-full max-w-[500px] lg:w-1/2 mx-auto relative">
              {/* Background Image */}
              
              {/* Lottie Animation Container */}
              <div className="aspect-square w-full relative z-10">
                <DotLottieReact
                  src="https://lottie.host/32354ba6-ac08-42a4-ad88-1caee3dbaee8/1k3foodl3t.lottie"
                  loop
                  autoplay
                  className="w-full h-full object-contain scale-105"
                />
              </div>
            </div>

            {/* Right Content Section */}
            <div className="lg:w-1/2 space-y-6 px-4">
              <div className="space-y-2">
                <h2 className="text-3xl md:text-3xl lg:text-4xl font-bold">
                  Hundreds Of Partners,
                  <br />
                  One Shared Goal:
                </h2>
                <h2 className="text-3xl md:text-3xl lg:text-4xl font-bold text-[#7203FE]">
                  A Safer & Advanced Space!
                </h2>
              </div>

              <p className="text-base leading-relaxed">
                From start-ups to conglomerates, organizations around the globe
                rely on Indominus Labs to protect their digital assets. And so,
                the Indominus Labs partner ecosystem comprises of partners who
                share our values, allowing us to offer our customers the most
                advanced and the latest technology, together.
              </p>

              <p className="text-xl font-semibold">
                100+ Diverse Global Partners, Distributors, Value-Added Vendors,
                and System Integrators.
              </p>

              <div className="flex flex-wrap gap-4 pt-4 justify-center">
                <button className="px-8 py-3 border border-[#7203FE] text-[#fff] font-semibold rounded-full transition-colors duration-300 purple-shadow hover:bg-[#7203FE] hover:text-white">
                  View Partners
                </button>
                <ShinyButton />
              </div>
            </div>
          </div>
        </div>
      </div>
    </FadeIn>
  );
};

export default PartnersSection;