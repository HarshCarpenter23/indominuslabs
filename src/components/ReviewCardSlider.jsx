import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { FadeIn } from './FadeIn';

const ReviewCardSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slidesPerView, setSlidesPerView] = useState(3);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  // Update slides per view based on screen size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setSlidesPerView(1);
      } else if (window.innerWidth < 1024) {
        setSlidesPerView(2);
      } else {
        setSlidesPerView(3);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const reviews = [
    {
      name: "Yuvaraj",
      title: "Owner - Velvizhi Construction",
      rating: 5,
      content: "Love the em metrices, it keeps me on track with my civil sites progress. So handy."
    },
    {
      name: "Mohit Bhatia",
      title: "Program Manager - Uber",
      rating: 5,
      content: "Impressed by the seamless integration and powerful authentication features. 100% password less."
    },
    {
      name: "SKMC",
      title: "Audit, Advisory & Outsourcing Company",
      rating: 5,
      content: "Film Budegeting made easy, your app simplifies my job."
    },
  ];

  const maxSlides = reviews.length - slidesPerView;

  const nextSlide = () => {
    setCurrentSlide((prev) => Math.min(prev + 1, maxSlides));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => Math.max(prev - 1, 0));
  };

  // Handle touch events for mobile swipe
  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe && currentSlide < maxSlides) {
      nextSlide();
    }
    if (isRightSwipe && currentSlide > 0) {
      prevSlide();
    }
  };

  return (
    <FadeIn>

    <section className="w-full product-section-bg  py-6 md:py-12 px-4 md:px-8 mb-6">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="mb-6 md:mb-12 text-left">
        <h4 className="text-xl md:text-base font-semibold text-gradient-blue mb-2 tracking-[0.25em]">
  REVIEWS
</h4>

          <h2 className="text-2xl md:text-4xl font-bold mb-3">Our Customers' Reviews</h2>
          <p className="text-sm md:text-base ">
            Our customers speaking about the value they uncovered with Indominus Labs...
          </p>
        </div>

        {/* Secondary Header */}
        <div className="text-center mb-8 md:mb-12">
          <img 
            src="/Ellipse-Review.png" 
            alt='Ellipse' 
            className='mx-auto w-[100px] md:w-[150px]' 
          />
          <h2 className="text-xl md:text-3xl font-bold mb-4 md:mb-6">
            What Our Clients Say About Us
          </h2>
          <div className="flex justify-center gap-1.5 md:gap-2">
            {[...Array(reviews.length - slidesPerView + 1)].map((_, index) => (
              <div
              key={index}
              className={`h-1.5 w-1.5 md:h-2 md:w-2 rounded-full transition-colors duration-300 ${
                  index === currentSlide ? 'bg-purple-600' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Reviews Slider */}
        <div className="relative mx-auto">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentSlide * (100 / slidesPerView)}%)` }}
              onTouchStart={onTouchStart}
              onTouchMove={onTouchMove}
              onTouchEnd={onTouchEnd}
              >
              {reviews.map((review, index) => (
                  <div 
                  key={index} 
                  className={`${
                    slidesPerView === 1 ? 'w-full' : 
                    slidesPerView === 2 ? 'w-1/2' : 
                    'w-1/3'
                  } flex-shrink-0 px-2 md:px-4`}
                  >
                  <div className="relative h-full">
                    {/* Purple Background */}
                    {/* <div className="absolute inset-0 bg-purple-600 rounded-xl md:rounded-3xl transform -rotate-6" /> */}
                    
                    {/* Card Content */}
                    <div className="relative product-shadow rounded-xl md:rounded-3xl p-4 md:p-6 lg:p-8 shadow-lg h-full">
                      <div className="text-center">
                        <h3 className="font-semibold text-base md:text-xl mb-1">{review.name}</h3>
                        <p className="text-gray-400 text-xs md:text-base mb-2">{review.title}</p>
                        <div className="flex justify-center mb-3 md:mb-4">
                          {[...Array(review.rating)].map((_, i) => (
                              <span key={i} className="text-yellow-400 text-sm md:text-lg">★</span>
                            ))}
                        </div>
                        <p className="text-xs md:text-base italic leading-relaxed">"{review.content}"</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons - Hidden on mobile */}
          <button 
            onClick={prevSlide}
            className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 p-2 rounded-full bg-white shadow-lg hover:bg-gray-50 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            aria-label="Previous slide"
            disabled={currentSlide === 0}
            >
            <ChevronLeft className="w-5 h-5 text-gray-800" />
          </button>
          
          <button 
            onClick={nextSlide}
            className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 p-2 rounded-full bg-white shadow-lg hover:bg-gray-50 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            aria-label="Next slide"
            disabled={currentSlide === maxSlides}
            >
            <ChevronRight className="w-5 h-5 text-gray-800" />
          </button>
        </div>
      </div>
    </section>
    </FadeIn>
  );
};

export default ReviewCardSlider;