import React from "react";
import { FadeIn } from "./FadeIn";
import FaceInfo2Img from "../assets/about-1.jpg"; // Update with the correct path
import FaceInfoImg from "../assets/about-2.png"; // Update with the correct path

const HowItWorks = () => {
  return (
    <div id="howitworks" className="bg-gradient-to-br from-[#0C101A] to-[#8960B8] py-16">
      <div className="w-full px-6 lg:px-16">
        <FadeIn className="flex flex-col md:flex-row gap-10 items-center justify-between">
          {/* Left Content */}
          <div className="flex-1 text-left">
            <h3 className="text-3xl font-bold mb-4 text-white">How it works?</h3>
            <p className="text-lg text-gray-300 leading-relaxed">
              Facial recognition technology analyzes 80 unique facial features,
              creating a distinct code for each person. By mapping facial curves
              on a micro scale, it matches these facial signatures to identify
              individuals accurately. This advanced technology offers seamless,
              secure identification solutions.
            </p>
          </div>

          {/* Right Image Section */}
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div>
              <img
                src={FaceInfo2Img}
                className="h-[350px] rounded-lg border-2 border-[#8960B8]"
                width={350}
                height={350}
                alt="Facial Recognition Info 2"
              />
            </div>

            <div>
              <img
                src={FaceInfoImg}
                className="h-[350px] rounded-lg border-2 border-[#8960B8] md:mt-[60px]"
                width={400}
                height={400}
                alt="Facial Recognition Info"
              />
            </div>
          </div>
        </FadeIn>
      </div>
    </div>
  );
};

export default HowItWorks;