import React from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { useNavigate } from "react-router-dom";
import { TypeAnimation } from 'react-type-animation';

const WavePattern = () => (
    <div className="absolute inset-0 w-[800px] lg:w-full lg:h-full z-0 flex lg:block justify-end">
      <img
        src="/home-wave.png"
        alt="Wave Pattern"
        className="lg:w-full w-[800px] lg:h-full object-contain lg:object-cover"
      />
    </div>
  );
  

const Ellipse = () => (
    <div className="absolute hidden lg:block bottom-0 right-0 w-full h-full z-0">
      <img
        src="/Ellipse5.png"
        alt="Wave Pattern"
        className="object-contain bottom-0 right-0"
      />
    </div>
  );
  

const Landing = () => {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen landing-bg overflow-hidden">
      {/* <WavePattern /> */}
      <Ellipse/>

      <div className="relative z-10 mx-2 px-4 sm:px-6 lg:px-8 pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 justify-between w-full">
          <div className="space-y-8 md:pt-16 md:pl-8">
            <div className="text-2xl md:text-4xl leading-tight text-left">
              <TypeAnimation
                sequence={[
                  'Empowering the Future of Digital Security with Innovative, Compliant, and Seamless Solutions for a Connected World.',
                  1000,
                ]}
                wrapper="span"
                speed={50}
                repeat={0}
                cursor={true}
              />
            </div>
            <div className="buttons flex justify-center md:justify-start h-[60px]">
              <button 
                className="blob-btn purple-shadow h-full" 
                onClick={() => navigate('/schedule-demo')}
              >
                Learn More
                <span className="blob-btn__inner">
                  <span className="blob-btn__blobs">
                    <span className="blob-btn__blob"></span>
                    <span className="blob-btn__blob"></span>
                    <span className="blob-btn__blob"></span>
                    <span className="blob-btn__blob"></span>
                  </span>
                </span>
              </button>
            </div>
          </div>

          <div className="relative w-full h-[300px] md:h-[400px] lg:h-[450px] mt-8 lg:mt-0 background-image-checked">
            <DotLottieReact
              src="https://lottie.host/6932b164-3d7b-43b1-8122-f459ffef6698/a7uLHCXwru.lottie"
              loop
              autoplay
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;