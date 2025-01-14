import React from 'react';
import { FadeIn } from './FadeIn';

const MentorsSection = () => {
  const mentors = [
    {
      name: 'Chester Rebeiro',
      affiliation: 'IITM',
      imageUrl: '/chester-rebeiro.png'
    }
    // More mentors can be added here
  ];

  return (
    <FadeIn>

    <div className="container mx-auto px-4 py-12 bg-[#F9F4FF]">
      <h2 className="text-4xl font-bold text-center mb-12">
        <span className="text-purple-600 border-b-4 border-purple-600 pb-2">
          Mentors
        </span>
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {mentors.map((mentor) => (
            <div 
            key={mentor.name}
            className="flex flex-col items-center"
            >
            <div className="w-64 h-64 mb-4 overflow-hidden rounded-lg shadow-lg">
              <img
                src={mentor.imageUrl}
                alt={`${mentor.name}`}
                className="w-full h-full object-cover"
                />
            </div>
            <h3 className="text-xl font-bold mb-2">{mentor.name}</h3>
            <p className="text-gray-600 font-medium">{mentor.affiliation}</p>
          </div>
        ))}
      </div>
    </div>
    </FadeIn>
  );
};

export default MentorsSection;