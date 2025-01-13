import React from 'react';

const ShinyButton = () => {
  return (
    <a 
    className='px-8 py-3 rounded-full font-semibold hover:border hover:bg-[#fff] hover:text-[#7203FE]'
      href="/schedule-demo"
      style={{
        display: 'inline-flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
        backgroundColor: '#7203FE',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      <span style={{ position: 'relative', zIndex: 1 }}>
        Schedule Demo
      </span>
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: `linear-gradient(
            45deg,
            transparent 25%,
            rgba(255,255,255,0.4) 50%,
            transparent 75%,
            transparent 100%
          )`,
          backgroundSize: '200% 100%',
          animation: 'shine 3s linear infinite',
        }}
      />
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
    </a>
  );
};

export default ShinyButton;