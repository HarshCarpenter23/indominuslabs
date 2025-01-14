import React from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { useNavigate } from "react-router-dom";
import { FadeIn } from "./FadeIn";

const WebSolutionsSection = () => {
  const navigate = useNavigate();

  return (
    <FadeIn>
      <div className="min-h-screen flex items-center justify-center bg-white mt-2 pt-4">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 ">
          <div className="flex flex-col-reverse lg:flex-row justify-center gap-8 lg:gap-20">
            {/* Left Content */}
            <div className="lg:w-1/2 space-y-6 max-w-xl pt-4 mx-auto">
              <div className="space-y-2">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900">
                  How Do We Provide
                </h2>
                <h2 className="text-3xl md:text-3xl lg:text-4xl font-bold text-[#7203FE]">
                  Web-Based Solutions?
                </h2>
              </div>

              <p className="text-gray-700 leading-relaxed lg:text-base text-sm">
                At our company, we provide web-based solutions tailored
                specifically to the needs of doctors, educators, and health
                professionals. With a keen understanding of the complexities
                within these industries, we leverage our expertise to develop
                intuitive and user-centric products. Our solutions are designed
                to seamlessly integrate with existing systems, ensuring a smooth
                transition and maximizing efficiency. We prioritize scalability
                and flexibility, allowing our products to adapt to the evolving
                needs of our customers
              </p>

              <p className="text-gray-700 leading-relaxed lg:text-base text-sm">
                Ultimately, our goal is to deliver tailored web-based solutions
                that to achieve objectives in the healthcare, education, and
                health sectors.
              </p>

              {/* <button className="bg-white text-[#7203FE] px-8 py-3 rounded-full border-2 border-[#7203FE] hover:bg-[#7203FE] hover:text-white transition-colors duration-300 text-lg font-semibold">
              Get Started
              </button> */}
              <div class="buttons">
                <button
                  class="blob-btn"
                  onClick={() => {
                    navigate("/schedule-demo");
                  }}
                >
                  Get Started
                  <span class="blob-btn__inner">
                    <span class="blob-btn__blobs">
                      <span class="blob-btn__blob"></span>
                      <span class="blob-btn__blob"></span>
                      <span class="blob-btn__blob"></span>
                      <span class="blob-btn__blob"></span>
                    </span>
                  </span>
                </button>
                <br />

                <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
                  <defs>
                    <filter id="goo">
                      <feGaussianBlur
                        in="SourceGraphic"
                        result="blur"
                        stdDeviation="10"
                      ></feGaussianBlur>
                      <feColorMatrix
                        in="blur"
                        mode="matrix"
                        values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 21 -7"
                        result="goo"
                      ></feColorMatrix>
                      <feBlend
                        in2="goo"
                        in="SourceGraphic"
                        result="mix"
                      ></feBlend>
                    </filter>
                  </defs>
                </svg>
              </div>
            </div>

            {/* Right Image */}
            <div className="w-full max-w-[400px] lg:w-1/2 mx-auto relative">
              <div className="aspect-square w-full mx-auto flex justify-center items-center">
                <DotLottieReact
                  src="https://lottie.host/0d60fcb2-2f00-4152-8cee-0108bdd35b4c/FSjisjZr7m.lottie"
                  loop
                  autoplay
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </FadeIn>
  );
};

export default WebSolutionsSection;
