import React from 'react';

function Home() {
  return (
    <div className="flex flex-col items-center justify-center bg-black min-h-screen ">
    <div className ="space-y-16">
      <div className="w-full">
        <h2 className="text-[30px] text-left font-bold font-pacifico font-mono tracking-[7px] bg-clip-text text-transparent bg-gradient-to-r from-gray-800 via-white to-gray-800 animate-shine">
          Hi there, I'm ...
        </h2>
      </div>
      
      <div className="text-center">
        <h1 className="text-[50px] font-bold font-pacifico uppercase font-mono tracking-[7px] bg-clip-text text-transparent bg-gradient-to-r from-purple via-white to-gray-800 animate-shine">
          Ama Williams
        </h1>
      </div>
      
      <div className="w-full">
        <h2 className="text-[30px] font-bold font-pacifico font-mono tracking-[7px] bg-clip-text text-transparent bg-gradient-to-r from-gray-800 via-white to-gray-800 animate-shine">
          A Fullstack Developer
        </h2>
      </div>
      </div>
    </div>
  );
}

export default Home;
