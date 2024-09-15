import React from 'react';

function About() {
  return (
    <div className="p-8 font-sans leading-relaxed bg-gray-50">
      {/* Title */}
      <h1 className="text-4xl font-bold mb-8 text-gray-800 text-center">About Me</h1>

      {/* Flex Container for Image and Text */}
      <div className="flex flex-col md:flex-row">
        {/* Image Section */}
        <div className="w-full md:w-1/2 mb-4 md:mb-0">
          <img 
            src="/Ama-2.jpg" 
            alt="Ama Williams" 
            className="w-full h-auto object-cover rounded-lg shadow-lg"
          />
        </div>

        {/* Text Section */}
        <div className="w-full md:w-1/2 flex flex-col justify-center">
          <p className="text-lg text-gray-700 mb-4">
           I'm  a web developer who loves to create responsive, and visually stunning web experiences. 
            With a strong foundation in HTML, CSS, JavaScript, and frameworks like <strong>MERN stack and TailwindCSS</strong>, I specialize in crafting websites and web applications that prioritize a memorable user experience.
          </p>
          <p className="text-lg text-gray-700 mb-4">
            I thrive on continuous learning to adapt to the ever-evolving web development landscape. 
            My portfolio reflects my journey in building projects that range from games and management applications to dynamic web applications and e-commerce platforms.
          </p>
          <p className="text-lg text-gray-700 mb-4">
            When I'm not coding, I enjoy <strong>listening to music, singing, and baking</strong>, which keeps me creative and inspired.
          </p>
          <p className="text-lg text-gray-700">
            Feel free to explore my projects and get in touch if you'd like to collaborate or learn more about my work!
          </p>
        </div>
      </div>

      {/* Additional Section */}
      <div className="mt-8">
        <h1 className="text-4xl font-bold mb-4 text-gray-800 text-center">My Professional Journey</h1>
        <p className="text-lg text-gray-700 text-center">In addition to being a developer, I work as a client services manager.</p>
      </div>
    </div>
  );
}

export default About;
