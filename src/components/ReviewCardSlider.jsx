import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const ReviewCardSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const reviews = [
    {
      name: "Mohit Kumar",
      title: "Lead designer",
      rating: 5,
      content: "Love your health app, it keeps me on track with my meds and health tips. So, handy."
    },
    {
      name: "Rakshit Sharma",
      title: "Lead designer",
      rating: 5,
      content: "Your doctor web app rocks! it helps me manage appointments and patient info hassle-free."
    },
    {
      name: "Radhika Singh",
      title: "Lead designer",
      rating: 5,
      content: "Teaching made easy, your education app engages students and simplifies my job."
    },
    {
      name: "Alex Kumar",
      title: "Tech Lead",
      rating: 5,
      content: "Impressed by the seamless integration and powerful features."
    },
    {
      name: "Sarah Miller",
      title: "Product Manager",
      rating: 5,
      content: "The platform has transformed how we handle project management."
    },
    {
      name: "David Chen",
      title: "Senior Developer",
      rating: 5,
      content: "Outstanding development tools that streamlined our workflow."
    }
  ];

  const maxSlides = reviews.length - 2;

  const nextSlide = () => {
    setCurrentSlide((prev) => Math.min(prev + 1, maxSlides - 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => Math.max(prev - 1, 0));
  };

  return (
    <section className="w-full bg-white pt-8 pb-20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header Section */}
        <div className="mb-16 text-left">
          <h4 className="text-base font-medium text-gray-600 mb-2">Reviews</h4>
          <h2 className="text-4xl font-bold text-gray-900">Our Customers' Reviews</h2>
          <p className="text-lg text-gray-600 mt-3">
            Our customers speaking about the value they uncovered with Indominus Labs.
          </p>
        </div>

        {/* Secondary Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-8">What Our Clients Say About Us</h2>
          <div className="flex justify-center space-x-2">
            {[...Array(5)].map((_, index) => (
              <div
                key={index}
                className={`h-2 w-2 rounded-full ${index === currentSlide ? 'bg-purple-600' : 'bg-gray-300'}`}
              />
            ))}
          </div>
        </div>

        {/* Reviews Slider */}
        <div className="relative mx-auto">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentSlide * 33.333}%)` }}
            >
              {reviews.map((review, index) => (
                <div key={index} className="w-1/3 flex-shrink-0 px-6">
                  <div className="relative">
                    {/* Purple Background */}
                    <div className="absolute inset-0 bg-purple-600 rounded-3xl transform -rotate-6" />
                    
                    {/* Card Content */}
                    <div className="relative bg-white rounded-3xl p-8 shadow-lg">
                      <div className="text-center">
                        <h3 className="font-semibold text-xl mb-2">{review.name}</h3>
                        <p className="text-gray-600 mb-4">{review.title}</p>
                        <div className="flex justify-center mb-6">
                          {[...Array(review.rating)].map((_, i) => (
                            <span key={i} className="text-yellow-400 text-xl">★</span>
                          ))}
                        </div>
                        <p className="text-lg italic">"{review.content}"</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button 
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 p-3 rounded-full bg-white shadow-lg hover:bg-gray-50 transition-colors disabled:opacity-50"
            aria-label="Previous slide"
            disabled={currentSlide === 0}
          >
            <ChevronLeft className="w-6 h-6 text-gray-800" />
          </button>
          
          <button 
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 p-3 rounded-full bg-white shadow-lg hover:bg-gray-50 transition-colors disabled:opacity-50"
            aria-label="Next slide"
            disabled={currentSlide === maxSlides - 1}
          >
            <ChevronRight className="w-6 h-6 text-gray-800" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ReviewCardSlider;