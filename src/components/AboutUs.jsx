import React from "react";
import FaceInfo2Img from "../assets/about-1.jpg";
import FaceInfoImg from "../assets/about-2.png";

function About() {
  return (
    <div className="min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-6">
        {/* Header Section */}
        <h2 className="text-[#F97316] font-medium text-lg mb-1">About Us</h2>
        <p className="text-gray-300 text-sm mb-10 sm:mb-20">
          An art of facial recognition
        </p>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-center gap-8 md:gap-20 mb-10 md:mb-16">
          {/* Left Column - Phone Mockups */}
          <div className="flex gap-6 justify-center md:justify-start">
            <img
              src={FaceInfoImg}
              className="h-[350px] rounded-lg "
              width={350}
              height={350}
              alt="Facial Recognition Info 2"
            />
          </div>

          {/* Right Column - Text Content */}
          <div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
              Experience the Power of <br />
              <span className="text-[#F97316]">Passwordless</span>
              <br />
              <span className="text-[#F97316]">Authentication</span>
            </h1>
            <p className="text-gray-200 mb-8 md:mb-12 leading-relaxed">
              Say goodbye to passwords and protect your digital identity with
              our cutting-edge Passwordless Authentication solution. With our
              innovative technology, you can enjoy a secure and hassle-free
              login experience.
            </p>
          </div>
        </div>

        {/* Description Section */}
        <div className="flex flex-col md:flex-row gap-8 mb-12">
          {/* Left Section - Text Content */}
          <div className="flex flex-col md:w-1/2">
            <p className="text-gray-300 text-md leading-relaxed mb-6">
              Indominus Labs Private Limited is a pioneer in delivering
              innovative solutions across cybersecurity, analytics, and AI. Our
              flagship product, <strong>Em Auth</strong>, is the first complete
              passwordless identity provider, offering multi-factor
              authentication to redefine digital security. In the analytics
              domain, <strong>Em Metrics</strong> enables complete civil site
              automation, streamlining operations with AI-driven insights.
              Additionally, <strong>Flick Analytics</strong> revolutionizes
              movie production by automating processes and minimizing overhead
              costs, ensuring efficiency and frugality.
            </p>
            <p className="text-gray-300 text-md leading-relaxed mb-6">
              Our solutions are designed to address real-world challenges,
              combining cutting-edge technology with practical applications.
              From secure authentication to advanced analytics and AI-driven
              automation, we empower businesses across industries to achieve
              operational excellence and stay ahead in the digital era.
            </p>
            <p className="text-gray-300 text-md leading-relaxed">
              At Indominus Labs, we are powered by an exceptional team of
              professionals with over 16+ years of industry experience,
              alongside a dynamic group of tech enthusiasts. Together, we bring
              unparalleled expertise and innovation to every solution we create.
            </p>
          </div>

          {/* Right Section - Image and Title */}
          <div className="flex flex-col items-center md:w-1/2 p-3 rounded-xl text-center text-white">
            <img
              src={FaceInfo2Img}
              className="h-[350px] rounded-lg border-2 border-[#8960B8]"
              width={400}
              height={400}
              alt="Facial Recognition Info 2"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
