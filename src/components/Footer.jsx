import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#151129] py-8 px-4 md:px-8">
      <div className="container mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Logo and Description Section */}
          <div className="md:col-span-1">
            <a href="#">
            <div className="flex items-center gap-3 mb-4">
              <img src="/logo-IL.png" alt="Logo" className="h-12 w-auto" />
              <h3 className="text-xl font-bold">INDOMINUS LABS</h3>
            </div>

            </a>
            

            <p className="text-sm text-gray-300 mb-4">
              Where Innovation Meets Expertise in security and analytics
            </p>
            {/* Social Links */}
            <div className="flex gap-4">
              <a
                href="https://www.linkedin.com/company/indominus-labs/"
                target="__blank"
                className="text-gray-300 hover:text-purple-600"
              >
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
              <a href="https://github.com/indominus-labs/" target="__blank" className="text-gray-300 hover:text-purple-600">
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

          {/* Rest of the footer content remains the same */}
          {/* Products Column */}
          <div className="md:col-span-1">
            <h3 className="font-semibold text-lg mb-4">Products</h3>
            <ul className="space-y-2">
              <li>
                <a href="https://flickanalytics.in/" className="text-gray-300 hover:text-purple-600">
                  FLICK Analytics
                </a>
              </li>
              <li>
                <a href="https://m-analytics-rust.vercel.app/" className="text-gray-300 hover:text-purple-600">
                  Site Analytics
                </a>
              </li>
              <li>
                <a href="/#emauth" className="text-gray-300 hover:text-purple-600">
                  Advanced Authentication System
                </a>
              </li>
              {/* <li>
                <a href="/#behaviour" className="text-gray-300 hover:text-purple-600">
                  Behaviour Biometrics
                </a>
              </li> */}
            </ul>
          </div>

          {/* Solutions Column */}
          <div className="md:col-span-1">
            <h3 className="font-semibold text-lg mb-4">Solutions</h3>
            <ul className="space-y-2">
              <li>
                <a href="/#behaviour" className="text-gray-300 hover:text-purple-600">
                  Behavioural Biometrics
                </a>
              </li>
              <li>
                <a href="/#howitworks" className="text-gray-300 hover:text-purple-600">
                  Face & Eye Tracking
                </a>
              </li>
              {/* <li>
                <a href="#" className="text-gray-300 hover:text-purple-600">
                  Education Analytics
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-purple-600">
                  Doctor Analytics
                </a>
              </li> */}
            </ul>
          </div>

          {/* Company Column */}
          {/* <div className="md:col-span-1">
            <h3 className="font-semibold text-lg mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-300 hover:text-purple-600">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-purple-600">
                  Our Team
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-purple-600">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-purple-600">
                  Our Blog
                </a>
              </li>
            </ul>
          </div> */}

          {/* Contact Column */}
          <div id='contact' className="md:col-span-1">
            <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-gray-300">
                <svg
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                +91 9884442082
              </li>
              <li className="flex items-center gap-2 text-gray-300">
                <svg
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                muthuvenkatesh.murugan@gmail.om
              </li>
              <li className="flex items-center gap-2 text-gray-300">
                <svg
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                Chennai
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="mt-8 pt-8 border-t border-[#5F5D5D]">
          <p className="text-center text-sm text-gray-300">
            copyright indominuslabs@{currentYear} all right reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
