import React from 'react';

function Home2() {
  return (
    <div className="flex flex-col items-center justify-center bg-black">
      <div className="w-full">
        {/* Subheading 1: Left-aligned */}
        <h2 className="text-[30px] font-bold font-mono tracking-[7px] bg-clip-text text-transparent bg-gradient-to-r from-gray-800 via-white to-gray-800 mt-4 text-left">
          Hi there, I'm ...
        </h2>
      </div>
      
      {/* Main heading: Center-aligned */}
      <div className="text-center">
        <h1 className="text-[50px] font-bold font-pacifico uppercase font-mono tracking-[7px] bg-clip-text text-transparent bg-gradient-to-r from-gray-800 via-white to-gray-800 animate-shine">
          Ama Williams
        </h1>
      </div>
      
      <div className="w-full">
        {/* Subheading 2: Right-aligned */}
        <h2 className="text-[30px] font-bold font-mono tracking-[7px] bg-clip-text text-transparent bg-gradient-to-r from-gray-800 via-white to-gray-800 mt-4 text-right">
          A Fullstack Developer
        </h2>
      </div>
    </div>
  );
}

export default Home2;
