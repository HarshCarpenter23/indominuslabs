import React, { useState, useEffect } from "react";
import {
  Menu,
  X,
  ChevronDown,
  Tag,
  FileDown,
  MonitorSmartphone,
  Lightbulb,
  BrainCircuit,
} from "lucide-react";
// import { Link } from 'react-router-dom';

import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { useNavigate, useLocation, Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Handle scroll to products section after navigation
  useEffect(() => {
    if (location.hash === "#products") {
      setTimeout(() => {
        document
          .getElementById("products")
          ?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  }, [location]);

  const handleProductsClick = (e) => {
    e.preventDefault();
    if (location.pathname !== "/") {
      // First navigate to home, the useEffect will handle the scroll
      navigate("/#products");
    } else {
      document
        .getElementById("products")
        ?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleHomeClick = (e) => {
    e.preventDefault();
    navigate("/");
  };

  const [activeDropdown, setActiveDropdown] = useState(null);

  const handleMouseEnter = (dropdown) => {
    setActiveDropdown(dropdown);
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  // Add this state to track which mobile dropdowns are open
  const [mobileDropdowns, setMobileDropdowns] = useState({
    products: false,
    solutions: false,
    company: false,
  });

  // Add a function to toggle mobile dropdowns
  const toggleMobileDropdown = (dropdown) => {
    setMobileDropdowns({
      ...mobileDropdowns,
      [dropdown]: !mobileDropdowns[dropdown],
    });
  };

  const dropdownContent = {
    products: (
      <div className="flex absolute left-0 top-full w-[1000px] shadow-lg rounded-b-md">
        <div className="bg-gradient-to-br from-[#101321] to-[#2b2e66] w-[300px] z-50 ">
          <div className="p-6 max-w-md ">
            {/* Icon */}
            <div className="mb-4">
              <div className="inline-flex border border-gray-200 rounded p-1">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="2"
                    y="4"
                    width="20"
                    height="14"
                    rx="2"
                    stroke="white"
                    strokeWidth="1.5"
                    fill="none"
                  />
                  <line
                    x1="2"
                    y1="8"
                    x2="22"
                    y2="8"
                    stroke="white"
                    strokeWidth="1.5"
                  />
                  <circle cx="18" cy="12" r="2" fill="#d32f2f" />
                </svg>
              </div>
            </div>

            {/* Heading */}
            <h2 className="text-xl font-bold text-gray-300 mb-3">
              Products Overview
            </h2>

            {/* Description Text */}
            <p className="text-gray-300 mb-12">
              Advanced products designed for security, AI, and analytics—driving
              smarter actions to enhance protection, insights, reliability, and
              innovation.
            </p>

            {/* Links */}
            <div className="space-y-6 ">
              {/* <a
                href="#pricing"
                className="flex items-center text-gray-300 hover:text-purple-700 font-medium"
              >
                <Tag className="mr-3 h-5 w-5 text-gray-300" />
                <span>Pricing</span>
              </a> */}

              <a
                href="#free-trials"
                className="flex items-center text-gray-300 hover:text-purple-700 font-medium"
              >
                <FileDown className="mr-3 h-5 w-5 text-gray-300" />
                <span>Free Trials & Downloads</span>
              </a>

              <a
                href="#product-tours"
                className="flex items-center text-gray-300 hover:text-purple-700 font-medium"
              >
                <MonitorSmartphone className="mr-3 h-5 w-5 text-gray-300" />
                <span>Product Tours</span>
              </a>
            </div>
          </div>
        </div>
        <div
          className=" bg-gradient-to-br from-[#322152] to-[#5e3b87] p-6 w-[700px] z-50"
          style={{ borderTop: "1px solid #2d3748" }}
        >
          <div className="grid grid-cols-3 gap-6 w-full">
            <div className="col-span-1">
              <h3 className="text-md font-semibold mb-4 text-white">
                SECURITY
              </h3>
              <ul className="space-y-4">
                <li>
                  <a
                    href="/#emauth"
                    className="text-gray-300 hover:text-white hover-underline text-md font-medium"
                  >
                    Em Auth
                  </a>
                </li>
                {/* <li>
                  <a href="#" className="text-gray-300 hover:text-white">
                    Artificial Intelligence
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white">
                    Automation & Orchestration
                  </a>
                </li> */}
              </ul>
            </div>
            <div className="col-span-1">
              <h3 className="text-md font-semibold mb-4 text-white">
                ANALYTICS
              </h3>
              <ul className="space-y-4">
                <li>
                  <a
                    href="https://m-analytics-rust.vercel.app"
                    className="text-gray-300 hover:text-white hover-underline text-md font-medium"
                  >
                    Em metrices
                  </a>
                </li>
                <li>
                  <a
                    href="https://flickanalytics.in"
                    className="text-gray-300 hover:text-white hover-underline text-md font-medium"
                  >
                    Flick Analytics
                  </a>
                </li>
                {/* <li>
                  <a href="#" className="text-gray-300 hover:text-white">
                    GCP
                  </a>
                </li> */}
              </ul>
            </div>
            <div className="col-span-1">
              <h3 className="text-md font-semibold mb-4 text-white">
                DOMAINS
              </h3>
              <ul className="space-y-4">
                <li>
                  <a
                    href="/#emauth"
                    className="hover-underline text-gray-300 hover:text-white text-md font-medium"
                  >
                    Security
                  </a>
                </li>
                <li>
                  <a
                    href="https://flickanalytics.in/"
                    className="hover-underline text-gray-300 hover:text-white text-md font-medium"
                  >
                    Movie
                  </a>
                </li>
                <li>
                  <a
                    href="https://m-analytics-rust.vercel.app/"
                    className="hover-underline text-gray-300 hover:text-white text-md font-medium"
                  >
                    Civil
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-gray-400 absolute bottom-5 w-[645px]">
            <a
              href="/#products"
              className="text-purple-400 hover:text-purple-300 font-medium flex items-center"
            >
              Explore Products
            </a>
          </div>
        </div>
      </div>
    ),
    solutions: (
      <div className="flex absolute left-0 top-full w-[1100px]">
        <div className="bg-gradient-to-br from-[#101321] to-[#2b2e66] w-[300px] z-50">
          <div className="p-6 max-w-md">
            {/* Icon */}
            <div className="mb-4 mx-auto">
              <BrainCircuit color="#ffd900" className="mx-auto" />
            </div>

            {/* Heading */}
            <h2 className="text-xl font-bold text-gray-300 mb-3">
              Solutions Overview
            </h2>

            {/* Description Text */}
            <p className="text-gray-300 mb-8">
              Harness the power of AI and enhance your security measures with
              our cutting-edge solutions.
            </p>

            <p className="text-gray-300 mb-8">
              Tailored secured analytical solutions.
            </p>

            {/* Divider Text */}
            {/* <p className="text-sm text-gray-400 font-medium mb-4">
              MORE FROM SPLUNK
            </p> */}

            {/* Links */}
            {/* <div className="space-y-4">
              <a
                href="#pricing"
                className="flex items-center text-gray-300 hover:text-purple-700 font-medium"
              >
                <Tag className="mr-3 h-5 w-5 text-gray-300" />
                <span>Pricing</span>
              </a>

              <a
                href="#free-trials"
                className="flex items-center text-gray-300 hover:text-purple-700 font-medium"
              >
                <FileDown className="mr-3 h-5 w-5 text-gray-300" />
                <span>Free Trials & Downloads</span>
              </a>

              <a
                href="#product-tours"
                className="flex items-center text-gray-300 hover:text-purple-700 font-medium"
              >
                <MonitorSmartphone className="mr-3 h-5 w-5 text-gray-300" />
                <span>Product Tours</span>
              </a>
            </div> */}
          </div>
        </div>
        <div
          className=" bg-gradient-to-br from-[#322152] to-[#8058ad] shadow-lg rounded-b-md p-6 w-[800px] z-50"
          style={{ borderTop: "1px solid #2d3748" }}
        >
          <div className="grid grid-cols-6 gap-6 w-full">
            <div className="col-span-2">
              <h3 className="text-md font-semibold mb-4 text-white">
                ARTIFICIAL INTELLIGENCE
              </h3>
              <ul className="space-y-4">
                <li>
                  <a
                    href="/#behaviour"
                    className="text-gray-300 hover:text-white text-md font-medium hover-underline"
                  >
                    Behavioural Biometrics
                  </a>
                </li>
                <li>
                  <a
                    href="https://facetracker.indominuslabs.in/"
                    className="text-gray-300 hover:text-white text-md font-medium hover-underline"
                  >
                    Face & Eye Tracking
                  </a>
                </li>
                {/* <li>
                  <a href="#" className="text-gray-300 hover:text-white text-md font-medium">
                    Automation & Orchestration
                  </a>
                </li> */}
              </ul>
            </div>
            <div className="col-span-2">
              <h3 className="text-md font-semibold mb-4 text-white text-md">
                SECURITY
              </h3>
              <ul className="space-y-4">
                <li>
                  <a
                    href="/#emauth"
                    className="text-gray-300 hover:text-white text-md font-medium hover-underline"
                  >
                    Password-less Authentication
                  </a>
                </li>
                <li>
                  <a
                    href="/#emauth"
                    className="text-gray-300 hover:text-white text-md font-medium hover-underline"
                  >
                    Multifactor Authentication
                  </a>
                </li>
                {/* <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white text-md"
                  >
                    GCP
                  </a>
                </li> */}
              </ul>
            </div>
            <div className="col-span-2">
              <h3 className="text-md font-semibold mb-4 text-white">
                ANALYTICAL
              </h3>
              <ul className="space-y-4">
                <li>
                  <a
                    href="https://flickanalytics.in/"
                    className="text-gray-300 hover:text-white text-md hover-underline font-medium"
                  >
                    Film Production Automation
                  </a>
                </li>
                <li>
                  <a
                    href="https://m-analytics-rust.vercel.app/"
                    className="text-gray-300 hover:text-white text-md hover-underline font-medium"
                  >
                    Civil Site Automation
                  </a>
                </li>
                {/* <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white text-md"
                  >
                    Retail
                  </a>
                </li> */}
              </ul>
            </div>
          </div>
        </div>
      </div>
    ),
    company: (
      <div className="flex absolute left-0 top-full w-[1000px] ">
        <div className="bg-gradient-to-br from-[#101321] to-[#2b2e66] w-[300px] z-50">
          <div className="p-6 max-w-md">
            {/* Icon */}
            <div className="mb-4 w-4 mx-auto">
              <img src="/logo-IL.png" alt="Logo" />
            </div>

            {/* Heading */}
            <h2 className="text-xl font-bold text-gray-300 mb-3">
              Company Overview
            </h2>

            {/* Description Text */}
            <p className="text-gray-300 mb-8">
              Where Innovation Meets Expertise in security and analytics.
            </p>

            <div className="flex gap-4 absolute bottom-5">
              <a
                href="https://www.linkedin.com/company/indominus-labs/"
                target="__blank"
                className="text-gray-300 hover:text-purple-600 "
              >
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
              <a
                href="https://github.com/indominus-labs/"
                target="__blank"
                className="text-gray-300 hover:text-purple-600"
              >
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0C5.372 0 0 5.372 0 12c0 5.303 3.438 9.801 8.205 11.401.6.111.82-.26.82-.577v-2.019c-3.338.727-4.034-1.607-4.034-1.607-.55-1.4-1.344-1.774-1.344-1.774-1.098-.752.083-.737.083-.737 1.213.085 1.853 1.246 1.853 1.246 1.077 1.844 2.822 1.31 3.51.999.109-.783.42-1.31.765-1.61-2.665-.3-5.467-1.332-5.467-5.934 0-1.31.47-2.38 1.247-3.22-.125-.303-.543-.855.127-1.769 0 0 1.022-.333 3.345 1.264.974-.271 2.016-.405 3.042-.409 1.027.004 2.069.138 3.042.409 2.322-1.596 3.345-1.264 3.345-1.264.67.914.252 1.466.127 1.769.777.84 1.247 1.91 1.247 3.22 0 4.607-2.807 5.63-5.481 5.927.431.368.816 1.095.816 2.21v3.278c0 .317.219.689.826.576C20.562 21.8 24 17.303 24 12c0-6.628-5.372-12-12-12z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div
          className=" bg-gradient-to-br from-[#322152] to-[#8058ad] shadow-lg rounded-b-md p-6 w-[700px] z-50"
          style={{ borderTop: "1px solid #2d3748" }}
        >
          <div className="grid grid-cols-4 gap-6 w-full">
            <div className="col-span-2">
              <h3 className="text-md font-semibold mb-4 text-white">
                OVERVIEW
              </h3>
              <ul className="space-y-4">
                <li>
                  <a
                    href="/about"
                    className="text-gray-300 hover:text-white text-md font-medium hover-underline"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white text-md font-medium hover-underline"
                  >
                    Carrers
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-span-2">
              <h3 className="text-md font-semibold mb-4 text-white">PRESS</h3>
              <ul className="space-y-4">
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white text-md font-medium hover-underline"
                  >
                    Talks Delivered
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white text-md font-medium hover-underline"
                  >
                    Awards & Recognitions
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-gray-400 absolute bottom-5 w-[645px]">
            <Link
              to="/scheduledemo"
              className="text-purple-400 hover:text-purple-300 font-medium flex items-center"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    ),
  };

  return (
    <nav className=" p-2">
      <div className="max-w-9xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo and company name */}
          <div className="flex items-center">
            <div className="flex-shrink-0 md:mr-6">
              <div
                className="flex items-center justify-center cursor-pointer"
                onClick={() => navigate("/")}
              >
                <div className="w-18 h-8">
                  <img width={"25px"} src="/logo-IL.png" alt="Logo-IL" />
                </div>
                <span className="text-xl font-semibold mx-auto">
                  INDOMINUS LABS
                </span>
              </div>
            </div>
            <div
              className="relative hidden lg:block"
              onMouseEnter={() => handleMouseEnter("products")}
              onMouseLeave={handleMouseLeave}
            >
              <a
                href="#"
                className="px-3 py-5 font-medium hover:text-purple-600 flex items-center font-semibold text-lg "
              >
                Products <ChevronDown className="ml-1 h-4 w-4" />
              </a>
              {activeDropdown === "products" && dropdownContent.products}
            </div>
            <div
              className="relative hidden lg:block"
              onMouseEnter={() => handleMouseEnter("solutions")}
              onMouseLeave={handleMouseLeave}
            >
              <a
                href="#"
                className="px-3 py-5 font-medium hover:text-purple-600 flex items-center font-semibold text-lg"
              >
                Solutions <ChevronDown className="ml-1 h-4 w-4" />
              </a>
              {activeDropdown === "solutions" && dropdownContent.solutions}
            </div>
            <div
              className="relative hidden lg:block"
              onMouseEnter={() => handleMouseEnter("company")}
              onMouseLeave={handleMouseLeave}
            >
              <a
                href="#"
                className="px-3 py-5 font-medium hover:text-purple-600 flex items-center font-semibold text-lg"
              >
                Company <ChevronDown className="ml-1 h-4 w-4" />
              </a>
              {activeDropdown === "company" && dropdownContent.company}
            </div>
          </div>

          {/* Desktop navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {/* <a href="/#contact" className="font-semibold text-lg">
              Contact Us
            </a> */}

            {/* Your demo button */}
            <div className="wrapper">
              <a className="cta" href="/scheduledemo">
                <span className="cta-text font-semibold">CONTACT US</span>
                <span className="cta-arrow">
                  <svg
                    width="26px"
                    height="23px"
                    viewBox="0 0 66 43"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g
                      id="arrow"
                      stroke="none"
                      strokeWidth="1"
                      fill="none"
                      fillRule="evenodd"
                    >
                      <path
                        className="one"
                        d="M40.1543933,3.89485454 L43.9763149,0.139296592 C44.1708311,-0.0518420739 44.4826329,-0.0518571125 44.6771675,0.139262789 L65.6916134,20.7848311 C66.0855801,21.1718824 66.0911863,21.8050225 65.704135,22.1989893 C65.7000188,22.2031791 65.6958657,22.2073326 65.6916762,22.2114492 L44.677098,42.8607841 C44.4825957,43.0519059 44.1708242,43.0519358 43.9762853,42.8608513 L40.1545186,39.1069479 C39.9575152,38.9134427 39.9546793,38.5968729 40.1481845,38.3998695 C40.1502893,38.3977268 40.1524132,38.395603 40.1545562,38.3934985 L56.9937789,21.8567812 C57.1908028,21.6632968 57.193672,21.3467273 57.0001876,21.1497035 C56.9980647,21.1475418 56.9959223,21.1453995 56.9937605,21.1432767 L40.1545208,4.60825197 C39.9574869,4.41477773 39.9546013,4.09820839 40.1480756,3.90117456 C40.1501626,3.89904911 40.1522686,3.89694235 40.1543933,3.89485454 Z"
                        fill="#FFFFFF"
                      ></path>
                      <path
                        className="two"
                        d="M20.1543933,3.89485454 L23.9763149,0.139296592 C24.1708311,-0.0518420739 24.4826329,-0.0518571125 24.6771675,0.139262789 L45.6916134,20.7848311 C46.0855801,21.1718824 46.0911863,21.8050225 45.704135,22.1989893 C45.7000188,22.2031791 45.6958657,22.2073326 45.6916762,22.2114492 L24.677098,42.8607841 C24.4825957,43.0519059 24.1708242,43.0519358 23.9762853,42.8608513 L20.1545186,39.1069479 C19.9575152,38.9134427 19.9546793,38.5968729 20.1481845,38.3998695 C20.1502893,38.3977268 20.1524132,38.395603 20.1545562,38.3934985 L36.9937789,21.8567812 C37.1908028,21.6632968 37.193672,21.3467273 37.0001876,21.1497035 C36.9980647,21.1475418 36.9959223,21.1453995 36.9937605,21.1432767 L20.1545208,4.60825197 C19.9574869,4.41477773 19.9546013,4.09820839 20.1480756,3.90117456 C20.1501626,3.89904911 20.1522686,3.89694235 20.1543933,3.89485454 Z"
                        fill="#FFFFFF"
                      ></path>
                      <path
                        className="three"
                        d="M0.154393339,3.89485454 L3.97631488,0.139296592 C4.17083111,-0.0518420739 4.48263286,-0.0518571125 4.67716753,0.139262789 L25.6916134,20.7848311 C26.0855801,21.1718824 26.0911863,21.8050225 25.704135,22.1989893 C25.7000188,22.2031791 25.6958657,22.2073326 25.6916762,22.2114492 L4.67709797,42.8607841 C4.48259567,43.0519059 4.17082418,43.0519358 3.97628526,42.8608513 L0.154518591,39.1069479 C-0.0424848215,38.9134427 -0.0453206733,38.5968729 0.148184538,38.3998695 C0.150289256,38.3977268 0.152413239,38.395603 0.154556228,38.3934985 L16.9937789,21.8567812 C17.1908028,21.6632968 17.193672,21.3467273 17.0001876,21.1497035 C16.9980647,21.1475418 16.9959223,21.1453995 16.9937605,21.1432767 L0.15452076,4.60825197 C-0.0425130651,4.41477773 -0.0453986756,4.09820839 0.148075568,3.90117456 C0.150162624,3.89904911 0.152268631,3.89694235 0.154393339,3.89485454 Z"
                        fill="#FFFFFF"
                      ></path>
                    </g>
                  </svg>
                </span>
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 "
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu HAAALLLOOOOOOOOO */}
      {/* Mobile menu - Enhanced UI */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-gray-900 bg-opacity-90 z-50 overflow-y-auto h-full">
          <div className="flex justify-end p-4">
            <button
              onClick={() => setIsMenuOpen(false)}
              className="p-2 rounded-full bg-gray-800 hover:bg-gray-700"
            >
              <X size={24} />
            </button>
          </div>

          <div className="px-4 py-2 space-y-4">
            {/* Logo and company name centered on mobile */}
            <div className="flex items-center justify-center pb-6 border-b border-gray-700">
              <div
                onClick={() => navigate("/")}
                className="flex items-center cursor-pointer"
              >
                <img
                  width={"25px"}
                  src="/logo-IL.png"
                  alt="Logo-IL"
                  className="mr-2"
                />
                <span className="text-xl font-semibold">INDOMINUS LABS</span>
              </div>
            </div>

            {/* Products dropdown for mobile */}
            <div className="rounded-lg overflow-hidden">
              <button
                onClick={() => toggleMobileDropdown("products")}
                className="flex w-full justify-between items-center p-4 bg-gray-800 bg-opacity-60 rounded-t-lg"
              >
                <div className="flex items-center">
                  <Tag className="mr-3 h-5 w-5 text-purple-400" />
                  <span className="text-lg font-semibold">Products</span>
                </div>
                <ChevronDown
                  className={`h-5 w-5 text-purple-400 transform transition-transform duration-300 ${
                    mobileDropdowns.products ? "rotate-180" : ""
                  }`}
                />
              </button>

              {mobileDropdowns.products && (
                <div className="bg-gray-800 bg-opacity-40 p-4 rounded-b-lg space-y-4">
                  <div>
                    <h3 className="text-purple-400 font-semibold mb-2 text-sm tracking-wider">
                      SECURITY
                    </h3>
                    <a
                      href="/#emauth"
                      className="block py-2 px-3 hover:bg-gray-700 rounded-md"
                    >
                      Em Auth
                    </a>
                  </div>

                  <div>
                    <h3 className="text-purple-400 font-semibold mb-2 text-sm tracking-wider">
                      ANALYTICS
                    </h3>
                    <a
                      href="https://m-analytics-rust.vercel.app"
                      className="block py-2 px-3 hover:bg-gray-700 rounded-md"
                    >
                      Em metrices
                    </a>
                    <a
                      href="https://flickanalytics.in"
                      className="block py-2 px-3 hover:bg-gray-700 rounded-md"
                    >
                      Flick Analytics
                    </a>
                  </div>

                  <div>
                    <h3 className="text-purple-400 font-semibold mb-2 text-sm tracking-wider">
                      DOMAINS
                    </h3>
                    <a
                      href="/#emauth"
                      className="block py-2 px-3 hover:bg-gray-700 rounded-md"
                    >
                      Security
                    </a>
                    <a
                      href="https://flickanalytics.in/"
                      className="block py-2 px-3 hover:bg-gray-700 rounded-md"
                    >
                      Movie
                    </a>
                    <a
                      href="https://m-analytics-rust.vercel.app/"
                      className="block py-2 px-3 hover:bg-gray-700 rounded-md"
                    >
                      Civil
                    </a>
                  </div>
                </div>
              )}
            </div>

            {/* Solutions dropdown for mobile */}
            <div className="rounded-lg overflow-hidden">
              <button
                onClick={() => toggleMobileDropdown("solutions")}
                className="flex w-full justify-between items-center p-4 bg-gray-800 bg-opacity-60 rounded-t-lg"
              >
                <div className="flex items-center">
                  <BrainCircuit className="mr-3 h-5 w-5 text-purple-400" />
                  <span className="text-lg font-semibold">Solutions</span>
                </div>
                <ChevronDown
                  className={`h-5 w-5 text-purple-400 transform transition-transform duration-300 ${
                    mobileDropdowns.solutions ? "rotate-180" : ""
                  }`}
                />
              </button>

              {mobileDropdowns.solutions && (
                <div className="bg-gray-800 bg-opacity-40 p-4 rounded-b-lg space-y-4">
                  <div>
                    <h3 className="text-purple-400 font-semibold mb-2 text-sm tracking-wider">
                      ARTIFICIAL INTELLIGENCE
                    </h3>
                    <a
                      href="/#behaviour"
                      className="block py-2 px-3 hover:bg-gray-700 rounded-md"
                    >
                      Behavioural Biometrics
                    </a>
                    <a
                      href="https://facetracker.indominuslabs.in/"
                      className="block py-2 px-3 hover:bg-gray-700 rounded-md"
                    >
                      Face & Eye Tracking
                    </a>
                  </div>

                  <div>
                    <h3 className="text-purple-400 font-semibold mb-2 text-sm tracking-wider">
                      SECURITY
                    </h3>
                    <a
                      href="/#emauth"
                      className="block py-2 px-3 hover:bg-gray-700 rounded-md"
                    >
                      Password-less Authentication
                    </a>
                    <a
                      href="/#emauth"
                      className="block py-2 px-3 hover:bg-gray-700 rounded-md"
                    >
                      Multifactor Authentication
                    </a>
                  </div>

                  <div>
                    <h3 className="text-purple-400 font-semibold mb-2 text-sm tracking-wider">
                      ANALYTICAL
                    </h3>
                    <a
                      href="https://flickanalytics.in/"
                      className="block py-2 px-3 hover:bg-gray-700 rounded-md"
                    >
                      Film Production Automation
                    </a>
                    <a
                      href="https://m-analytics-rust.vercel.app/"
                      className="block py-2 px-3 hover:bg-gray-700 rounded-md"
                    >
                      Civil Site Automation
                    </a>
                  </div>
                </div>
              )}
            </div>

            {/* Company dropdown for mobile */}
            <div className="rounded-lg overflow-hidden">
              <button
                onClick={() => toggleMobileDropdown("company")}
                className="flex w-full justify-between items-center p-4 bg-gray-800 bg-opacity-60 rounded-t-lg"
              >
                <div className="flex items-center">
                  <Lightbulb className="mr-3 h-5 w-5 text-purple-400" />
                  <span className="text-lg font-semibold">Company</span>
                </div>
                <ChevronDown
                  className={`h-5 w-5 text-purple-400 transform transition-transform duration-300 ${
                    mobileDropdowns.company ? "rotate-180" : ""
                  }`}
                />
              </button>

              {mobileDropdowns.company && (
                <div className="bg-gray-800 bg-opacity-40 p-4 rounded-b-lg space-y-4">
                  <div>
                    <h3 className="text-purple-400 font-semibold mb-2 text-sm tracking-wider">
                      OVERVIEW
                    </h3>
                    <a
                      href="/about"
                      className="block py-2 px-3 hover:bg-gray-700 rounded-md"
                    >
                      About Us
                    </a>
                    <a
                      href="#"
                      className="block py-2 px-3 hover:bg-gray-700 rounded-md"
                    >
                      Carrers
                    </a>
                  </div>

                  <div>
                    <h3 className="text-purple-400 font-semibold mb-2 text-sm tracking-wider">
                      PRESS
                    </h3>
                    <a
                      href="#"
                      className="block py-2 px-3 hover:bg-gray-700 rounded-md"
                    >
                      Talks Delivered
                    </a>
                    <a
                      href="#"
                      className="block py-2 px-3 hover:bg-gray-700 rounded-md"
                    >
                      Awards & Recognitions
                    </a>
                  </div>

                  <div className="pt-4 flex space-x-4">
                    <a
                      href="https://www.linkedin.com/company/indominus-labs/"
                      target="__blank"
                      className="p-2 bg-gray-700 rounded-full hover:bg-purple-600"
                    >
                      <svg
                        className="h-5 w-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                      </svg>
                    </a>
                    <a
                      href="https://github.com/indominus-labs/"
                      target="__blank"
                      className="p-2 bg-gray-700 rounded-full hover:bg-purple-600"
                    >
                      <svg
                        className="h-5 w-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 0C5.372 0 0 5.372 0 12c0 5.303 3.438 9.801 8.205 11.401.6.111.82-.26.82-.577v-2.019c-3.338.727-4.034-1.607-4.034-1.607-.55-1.4-1.344-1.774-1.344-1.774-1.098-.752.083-.737.083-.737 1.213.085 1.853 1.246 1.853 1.246 1.077 1.844 2.822 1.31 3.51.999.109-.783.42-1.31.765-1.61-2.665-.3-5.467-1.332-5.467-5.934 0-1.31.47-2.38 1.247-3.22-.125-.303-.543-.855.127-1.769 0 0 1.022-.333 3.345 1.264.974-.271 2.016-.405 3.042-.409 1.027.004 2.069.138 3.042.409 2.322-1.596 3.345-1.264 3.345-1.264.67.914.252 1.466.127 1.769.777.84 1.247 1.91 1.247 3.22 0 4.607-2.807 5.63-5.481 5.927.431.368.816 1.095.816 2.21v3.278c0 .317.219.689.826.576C20.562 21.8 24 17.303 24 12c0-6.628-5.372-12-12-12z" />
                      </svg>
                    </a>
                  </div>
                </div>
              )}
            </div>

            {/* Contact Us button */}
            <div className="wrapper">
              <Link className="cta" to="/scheduledemo">
                <span className="cta-text">CONTACT US</span>
                <span className="cta-arrow">
                  <svg
                    width="26px"
                    height="23px"
                    viewBox="0 0 66 43"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g
                      id="arrow"
                      stroke="none"
                      strokeWidth="1"
                      fill="none"
                      fillRule="evenodd"
                    >
                      <path
                        className="one"
                        d="M40.1543933,3.89485454 L43.9763149,0.139296592 C44.1708311,-0.0518420739 44.4826329,-0.0518571125 44.6771675,0.139262789 L65.6916134,20.7848311 C66.0855801,21.1718824 66.0911863,21.8050225 65.704135,22.1989893 C65.7000188,22.2031791 65.6958657,22.2073326 65.6916762,22.2114492 L44.677098,42.8607841 C44.4825957,43.0519059 44.1708242,43.0519358 43.9762853,42.8608513 L40.1545186,39.1069479 C39.9575152,38.9134427 39.9546793,38.5968729 40.1481845,38.3998695 C40.1502893,38.3977268 40.1524132,38.395603 40.1545562,38.3934985 L56.9937789,21.8567812 C57.1908028,21.6632968 57.193672,21.3467273 57.0001876,21.1497035 C56.9980647,21.1475418 56.9959223,21.1453995 56.9937605,21.1432767 L40.1545208,4.60825197 C39.9574869,4.41477773 39.9546013,4.09820839 40.1480756,3.90117456 C40.1501626,3.89904911 40.1522686,3.89694235 40.1543933,3.89485454 Z"
                        fill="#FFFFFF"
                      ></path>
                      <path
                        className="two"
                        d="M20.1543933,3.89485454 L23.9763149,0.139296592 C24.1708311,-0.0518420739 24.4826329,-0.0518571125 24.6771675,0.139262789 L45.6916134,20.7848311 C46.0855801,21.1718824 46.0911863,21.8050225 45.704135,22.1989893 C45.7000188,22.2031791 45.6958657,22.2073326 45.6916762,22.2114492 L24.677098,42.8607841 C24.4825957,43.0519059 24.1708242,43.0519358 23.9762853,42.8608513 L20.1545186,39.1069479 C19.9575152,38.9134427 19.9546793,38.5968729 20.1481845,38.3998695 C20.1502893,38.3977268 20.1524132,38.395603 20.1545562,38.3934985 L36.9937789,21.8567812 C37.1908028,21.6632968 37.193672,21.3467273 37.0001876,21.1497035 C36.9980647,21.1475418 36.9959223,21.1453995 36.9937605,21.1432767 L20.1545208,4.60825197 C19.9574869,4.41477773 19.9546013,4.09820839 20.1480756,3.90117456 C20.1501626,3.89904911 20.1522686,3.89694235 20.1543933,3.89485454 Z"
                        fill="#FFFFFF"
                      ></path>
                      <path
                        className="three"
                        d="M0.154393339,3.89485454 L3.97631488,0.139296592 C4.17083111,-0.0518420739 4.48263286,-0.0518571125 4.67716753,0.139262789 L25.6916134,20.7848311 C26.0855801,21.1718824 26.0911863,21.8050225 25.704135,22.1989893 C25.7000188,22.2031791 25.6958657,22.2073326 25.6916762,22.2114492 L4.67709797,42.8607841 C4.48259567,43.0519059 4.17082418,43.0519358 3.97628526,42.8608513 L0.154518591,39.1069479 C-0.0424848215,38.9134427 -0.0453206733,38.5968729 0.148184538,38.3998695 C0.150289256,38.3977268 0.152413239,38.395603 0.154556228,38.3934985 L16.9937789,21.8567812 C17.1908028,21.6632968 17.193672,21.3467273 17.0001876,21.1497035 C16.9980647,21.1475418 16.9959223,21.1453995 16.9937605,21.1432767 L0.15452076,4.60825197 C-0.0425130651,4.41477773 -0.0453986756,4.09820839 0.148075568,3.90117456 C0.150162624,3.89904911 0.152268631,3.89694235 0.154393339,3.89485454 Z"
                        fill="#FFFFFF"
                      ></path>
                    </g>
                  </svg>
                </span>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
