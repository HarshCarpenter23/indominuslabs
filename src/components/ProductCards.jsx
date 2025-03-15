import React, { useEffect, useRef } from "react";
import { FadeIn } from "./FadeIn";
import { motion } from "framer-motion";

const Ellipse = () => (
  <div className="absolute w-full h-full z-0 right-4 left-[-400px]">
    <img src="/Path2.png" alt="Wave Pattern" className="object-contain" />
  </div>
);

const ProductCard = ({ title, description, href, delay }) => {
  // Animation variants for hover effect
  const cardVariants = {
    hover: {
      y: -10,
      boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
      transition: { duration: 0.3 },
    },
  };

  return (
    <motion.div
      className="relative bg-white rounded-3xl shadow-xl p-8 h-[320px] w-[320px] overflow-hidden product-shadow"
      whileHover="hover"
      variants={cardVariants}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
    >
      <div className="relative z-10 h-full flex flex-col justify-between">
        <div>
          <h3 className="text-purple-600 text-xl font-bold mb-4">{title}</h3>
          <p className="text-gray-300 text-lg leading-relaxed">{description}</p>
        </div>
        <a
          href={href}
          className="px-8 py-3 rounded-full font-semibold mt-4 text-center text-white bg-[#7203FE] hover:border hover:bg-[#fff] hover:text-[#7203FE] transition-colors duration-300"
          style={{
            display: "inline-flex",
            justifyContent: "center",
            alignItems: "center",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <span style={{ position: "relative", zIndex: 1 }}>Learn More</span>
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              background: `linear-gradient(
                45deg,
                transparent 25%,
                rgba(255,255,255,0.4) 50%,
                transparent 75%,
                transparent 100%
              )`,
              backgroundSize: "200% 100%",
              animation: "shine 3s linear infinite",
            }}
          />
        </a>
      </div>
    </motion.div>
  );
};

const ProductsShowcase = () => {
  const products = [
    {
      title: "Em Auth",
      description:
        "Bringing cinematic magic to your fingertips with our immersive movie streaming platform.",
      href: "/#emauth",
    },
    {
      title: "Behavioural Biometrics",
      description:
        "Building the future with innovative & advanced digital tools for the civil engineering industry.",
      href: "/#behaviour",
    },
    {
      title: "Em metrices",
      description:
        "Building the future with innovative & advanced digital tools for the civil engineering industry.",
      href: "https://m-analytics-rust.vercel.app",
    },
    {
      title: "Flick Analytics",
      description:
        "Transforming education through engaging and interactive e-learning solutions.",
      href: "https://flickanalytics.in",
    },
  ];

  // For intersection observer animation
  const sectionRef = useRef(null);

  return (
    <FadeIn>
      <div
        id="products"
        className="min-h-screen mx-auto product-section-bg py-16"
        ref={sectionRef}
      >
            <div className="stars"></div>
            {/* <div className="shooting-star z-1"></div> */}
            <div className="stars"></div>
            <div className="stars"></div>
            <div className="stars"></div>
            <div className="stars"></div>
            
            {/* <div className="shooting-star z-1"></div> */}
            <div className="stars"></div>
            <div className="stars"></div>
    
        <Ellipse />
        <div className="max-w-7xl mx-auto p-8 relative z-10">
          <motion.div
            className="text-center mb-16 z-10"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl text-gradient-blue uppercase tracking-wider mb-2">
              PRODUCTS
            </h2>
            <h1 className="text-3xl md:text-4xl font-bold">
              Powerful Modules, Powerful Solutions
            </h1>
          </motion.div>
          {/* <div className="shooting-star z-1"></div> */}
          {/* <div className="shooting-star z-1"></div> */}
          {/* <div className="shooting-star z-1"></div> */}

          {/* Responsive card layout with staggered animation */}
          <div className="space-y-16">
            {/* Row 1: Two cards on the left */}
            <div className="z-10 flex flex-wrap justify-center md:justify-start md:translate-x-40 gap-8">
              <ProductCard
                title={products[0].title}
                description={products[0].description}
                href={products[0].href}
                delay={0.2}
              />
              <ProductCard
                title={products[1].title}
                description={products[1].description}
                href={products[1].href}
                delay={0.4}
              />
            </div>

            {/* Row 2: Two cards on the right */}
            <div className="z-10 flex flex-wrap justify-center md:justify-start md:translate-x-80 gap-8">
              <ProductCard
                title={products[2].title}
                description={products[2].description}
                href={products[2].href}
                delay={0.6}
              />
              <ProductCard
                title={products[3].title}
                description={products[3].description}
                href={products[3].href}
                delay={0.8}
              />
            </div>
          </div>
        </div>
      </div>
      <style>
        {`
          @keyframes shine {
            0% {
              background-position: 200% 0;
            }
            100% {
              background-position: -200% 0;
            }
          }
        `}
      </style>
      
    </FadeIn>
  );
};

export default ProductsShowcase;
