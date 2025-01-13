import React, { useState } from 'react';
import { Mail, User, Phone, MessageSquare, Send, ArrowRight } from 'lucide-react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const ScheduleDemo = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-xl flex flex-col md:flex-row max-w-5xl w-full overflow-hidden">
        {/* Left side - Image */}
        <div className="md:w-1/2 relative">
          {/* <div className="absolute inset-0 bg-[#7203FE] mix-blend-multiply"></div> */}
          <DotLottieReact
      src="https://lottie.host/c179fee4-2d9e-4111-800c-288c2ece748e/S04LuqJjLe.lottie"
      loop
      autoplay
    />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#fff]/50 flex flex-col justify-end p-8 text-[#7203FE]">
            <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
            <p className="text-lg mb-6">We'd love to hear from you. Send us a message and we'll respond as soon as possible.</p>
          </div>
        </div>

        {/* Right side - Form */}
        <div className="md:w-1/2 p-8 md:p-12 bg-white">
          <h3 className="text-2xl font-semibold mb-8 text-gray-800">Send us a message</h3>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-4">
              <div className="relative">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#7203FE] focus:border-transparent bg-gray-50"
                  required
                />
              </div>

              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Your email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#7203FE] focus:border-transparent bg-gray-50"
                  required
                />
              </div>

              <div className="relative">
                <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="Your phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#7203FE] focus:border-transparent bg-gray-50"
                  required
                />
              </div>

              <div className="relative">
                <MessageSquare className="absolute left-3 top-4 text-gray-400 h-5 w-5" />
                <textarea
                  id="message"
                  name="message"
                  placeholder="Your message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#7203FE] focus:border-transparent bg-gray-50"
                  required
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-[#7203FE] text-white py-4 px-6 rounded-xl hover:bg-[#7203FE]/90 transition duration-200 flex items-center justify-center space-x-2 group"
            >
              <span>Send Message</span>
              <Send className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ScheduleDemo;