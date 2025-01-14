import React from "react";
import { FadeIn } from "./FadeIn";

const Ellipse = () => (
  <div className="absolute w-full h-full z-0">
    <img
      src="/Ellipse23.png"
      alt="Wave Pattern"
      className="object-contain"
    />
  </div>
);

const ProductCard = ({ title, description }) => (
  <div className="relative bg-white rounded-3xl shadow-xl p-8 h-64 w-full md:w-96 overflow-hidden transform transition-all duration-500 hover:scale-105 product-shadow">
    <div className="relative z-10 h-full flex flex-col justify-between">
      <div>
        <h3 className="text-purple-600 text-xl font-bold mb-4">{title}</h3>
        <p className="text-gray-700 text-base">{description}</p>
      </div>
      <button className="w-32 mx-auto text-purple-600 border border-purple-600 rounded-full py-2 px-4 hover:bg-purple-600 hover:text-white transition-colors duration-300">
        Learn More
      </button>
    </div>
  </div>
);

const ProductsShowcase = () => {
  const products = [
    {
      title: "FLICK Analytics",
      description:
        "Bringing cinematic magic to your fingertips with our immersive movie streaming platform.",
    },
    {
      title: "SITE Analytics",
      description:
        "Building the future with innovative & advanced digital tools for the civil engineering industry.",
    },
    {
      title: "MEDICAL Analytics",
      description:
        "Revolutionizing healthcare with our intuitive doctor-patient interaction platform.",
    },
    {
      title: "EDU Analytics",
      description:
        "Transforming education through engaging and interactive e-learning solutions.",
    },
  ];

  return (
    <FadeIn>
    <div id="products" className="min-h-screen bg-white">
      <Ellipse />
      <div className="max-w-7xl mx-auto p-8 relative z-10">
        <div className="text-center mb-12 z-10">
          <h2 className="text-sm uppercase tracking-wider mb-2">PRODUCTS</h2>
          <h1 className="text-3xl md:text-4xl font-bold">
            Powerful Modules, Powerful Solutions
          </h1>
        </div>

        {/* Flexbox layout for alternating rows */}
        <div className="space-y-12">
          {/* Row 1: Two cards on the left */}
          <div className="flex flex-col md:flex-row md:justify-start gap-8">
            <ProductCard
              title={products[0].title}
              description={products[0].description}
            />
            <ProductCard
              title={products[1].title}
              description={products[1].description}
            />
          </div>

          {/* Row 2: Two cards on the right */}
          <div className="flex flex-col md:flex-row pl-0 md:pl-[250px] gap-8">
            <ProductCard
              title={products[2].title}
              description={products[2].description}
            />
            <ProductCard
              title={products[3].title}
              description={products[3].description}
            />
          </div>
        </div>
      </div>
    </div>
    </FadeIn>
  );
};

export default ProductsShowcase;
