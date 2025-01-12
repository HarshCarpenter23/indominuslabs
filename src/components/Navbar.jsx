import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <nav className="bg-white shadow-sm p-2">
      <div className="max-w-9xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo and company name */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div className="flex items-center justify-center">
                <div className="w-8 h-8">
                  <img width={"20px"} src="/logo-IL.png" alt="Logo-IL" />
                </div>
                <span className="text-xl font-semibold text-transparent bg-gradient-to-r from-[#9E54FB] to-[#8331E8] bg-clip-text">
                  INDOMINUS LABS
                </span>
              </div>
            </div>
          </div>

          {/* Desktop navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-800 hover:text-gray-600">
              Home
            </a>
            <a href="#" className="text-gray-800 hover:text-gray-600">
              Products
            </a>
            <a href="#" className="text-gray-800 hover:text-gray-600">
              Contact Us
            </a>
            <button className="bg-gradient-to-r from-[#9E54FB] to-[#8331E8] text-white px-6 py-3 font-semibold rounded-full hover:from-[#8331E8] hover:to-[#9E54FB] transition-all shadow">
              Schedule Demo
            </button>
            {/* <a 
      href="#" 
      className="block h-[60px] w-[250px]" // Fixed height and width
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <DotLottieReact
        className="purple-shadow w-full h-full border border-[#7203FE]"
        src="https://lottie.host/f5636b98-116e-4ec5-a048-1de173b62bef/f6pGwbcxtM.lottie"
        autoplay
        loop={!isHovered}
        onHover={!isHovered}
      />
    </a> */}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md text-gray-800 hover:text-gray-600"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a
              href="#"
              className="block px-3 py-2 text-gray-800 hover:text-gray-600"
            >
              Home
            </a>
            <a
              href="#"
              className="block px-3 py-2 text-gray-800 hover:text-gray-600"
            >
              Products
            </a>
            <a
              href="#"
              className="block px-3 py-2 text-gray-800 hover:text-gray-600"
            >
              Contact Us
            </a>
            <button className="w-full mt-2 bg-purple-500 text-white px-6 py-2 rounded-full hover:bg-purple-600 transition-colors">
              Schedule Demo
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
