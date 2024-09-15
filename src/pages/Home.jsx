import React from 'react';

function Home() {
  return (
    <div className="relative flex items-center justify-center min-h-screen bg-black font-saira">
      {/* Background Video */}
      <video 
        autoPlay 
        muted 
        loop 
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source 
          src="https://mdbootstrap.com/img/video/Sail-Away.mp4" 
          type="video/mp4" 
        />
      </video>

      {/* Overlay Text */}
      <h2 className="absolute inset-0 flex items-center justify-center w-full h-full m-0 text-[15vw] font-normal uppercase bg-white mix-blend-screen z-10">
        Ama
      </h2>
    </div>
  );
}

export default Home;
