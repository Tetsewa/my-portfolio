import React from 'react';

function About() {
  return (
    <div className="p-8 font-sans leading-relaxed bg-gray-50">
      {/* Title */}
      <h1 className="text-4xl font-bold mb-4 text-gray-800 text-center">About Me</h1>

      {/* Full-width Image */}
      <div className="w-full mb-8">
        <img 
          src="/Ama-2.jpg" 
          alt="Ama Williams" 
          className="w-full h-100 object-cover rounded-lg shadow-lg"
        />
      </div>

      {/* Text Section */}
      <div>
        <p className="text-lg text-gray-700 mb-4">
          Hi! I'm <strong>Ama Williams</strong>, a passionate web developer dedicated to creating seamless, responsive, and visually stunning web experiences. 
          With a strong foundation in HTML, CSS, JavaScript, and frameworks like <strong>[MERN stack and JavaScript]</strong>, I specialize in crafting websites and web applications 
          that prioritize both functionality and user experience.
        </p>
        <p className="text-lg text-gray-700 mb-4">
          I thrive on solving problems through code and am constantly learning and adapting to the ever-evolving web development landscape. 
          My portfolio reflects my journey in building projects that range from games and management applications to dynamic web applications and e-commerce platforms.
        </p>
        <p className="text-lg text-gray-700 mb-4">
          When I'm not coding, I enjoy <strong>[listening to music, singing, and baking]</strong>, which keeps me creative and inspired.
        </p>
        <p className="text-lg text-gray-700">
          Feel free to explore my projects and get in touch if you'd like to collaborate or learn more about my work!
        </p>
      </div>
    </div>
  );
}

export default About;
