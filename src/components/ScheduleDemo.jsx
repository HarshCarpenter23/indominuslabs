import React, { useState } from "react";
import { Mail, User, Phone, MessageSquare, Send } from "lucide-react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

import emailjs from "@emailjs/browser";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ScheduleDemo = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  // Function to trigger toast
  const notifySuccess = () => {
    toast.success("Email sent successfully!", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "light",
    });
  };

  const notifyError = () => {
    toast.error("Failed to send email. Try again!", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "colored",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .send(
        "service_cl6mmgu", // Replace with your EmailJS service ID
        "template_a9y1sxf", // Replace with your EmailJS template ID
        formData,
        "ICHPH8BHOF4aWo7nM" // Replace with your EmailJS public key
      )
      .then(
        (response) => {
          // console.log("Email sent successfully!", response.status, response.text);
          // alert("Your message has been sent!");
          notifySuccess();
          setFormData({
            name: "",
            email: "",
            phone: "",
            message: "",
          });
        },
        (error) => {
          // console.log("Failed to send email:", error);
          // alert("Failed to send message. Please try again.");
          notifyError();
        }
      );
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <>
      <div className="min-h-screen flex flex-col items-center justify-center p-4 landing-bg">
        <div className=" rounded-2xl landing-bg shadow-xl flex flex-col md:flex-row max-w-5xl w-full overflow-hidden">
          {/* Left side - Animation and Text */}
          <div className="md:w-1/2 relative h-[450px] md:h-auto ">
            {/* Animation Container */}
            <div className="h-full w-full">
              <DotLottieReact
                src="https://lottie.host/c179fee4-2d9e-4111-800c-288c2ece748e/S04LuqJjLe.lottie"
                loop
                autoplay
                className="w-full md:h-full h-[400px] object-cover"
              />
            </div>

            {/* Text Overlay */}
            <div className="absolute inset-0  flex flex-col justify-end p-6 md:p-8 ">
              <h2 className="text-2xl md:text-3xl font-bold mb-2 md:mb-4 ">
                Get in Touch
              </h2>
              <p className="text-base md:text-lg mb-4 md:mb-6  max-w-md">
                We'd love to hear from you. Send us a message and we'll respond
                as soon as possible.
              </p>
            </div>
          </div>

          {/* Right side - Form */}
          <div className="md:w-1/2 p-6 md:p-12 ">
            <h3 className="text-xl md:text-2xl font-semibold mb-6 md:mb-8 ">
              Send us a message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
              <div className="space-y-4">
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-900 h-5 w-5" />
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full pl-12 pr-4 py-3 text-gray-900 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#7203FE] focus:border-transparent bg-gray-50"
                    required
                  />
                </div>

                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-900 h-5 w-5" />
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Your email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full pl-12 pr-4 py-3 text-gray-900 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#7203FE] focus:border-transparent bg-gray-50"
                    required
                  />
                </div>

                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-900 h-5 w-5" />
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="Your phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full pl-12 pr-4 py-3 text-gray-900 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#7203FE] focus:border-transparent bg-gray-50"
                    required
                  />
                </div>

                <div className="relative">
                  <MessageSquare className="absolute left-3 top-4 text-gray-900 h-5 w-5" />
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Your message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full pl-12 pr-4 py-3 text-gray-900 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#7203FE] focus:border-transparent bg-gray-50 resize-none"
                    required
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-[#7203FE] text-white py-3 md:py-4 px-6 rounded-xl hover:bg-[#7203FE]/90 transition duration-200 flex items-center justify-center space-x-2 group"
              >
                <span>Send Message</span>
                <Send className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
              </button>
            </form>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 py-12 px-6  ">
          {/* Office Section */}
          <div className="border-b-2 border-indigo-500 pb-6">
            <h3 className="text-xl font-semibold text-white flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-indigo-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
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
              Our Offices
            </h3>
            <div className="mt-4 space-y-2">
              <p className="font-bold text-white">AIR, VIT - AP</p>
              <p className="text-gray-300">VIT-AP Central Block</p>
              <p className="text-gray-300">Amravathi, Andhra Pradesh 522237</p>
            </div>
          </div>

          {/* Email Section */}
          <div className="border-b-2 border-orange-400 pb-6">
            <h3 className="text-xl font-semibold text-white flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-orange-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              Email Us
            </h3>
            <div className="flex flex-col sm:flex-row justify-between mt-4 gap-6">
              <div className="flex-1">
                <p className="font-bold text-white">Contact</p>
                <a
                  href="mailto:careers@indominuslabs.in"
                  className="text-teal-400 hover:text-teal-300 transition-colors"
                >
                  contact@indominuslabs.in
                </a>
              </div>
              {/* <div className="flex-1">
              <p className="font-bold text-white">Founder</p>
              <a
                href="mailto:sibi@indominuslabs.in"
                className="text-teal-400 hover:text-teal-300 transition-colors"
              >
                sibi@indominuslabs.in
              </a>
            </div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ScheduleDemo;
