import React from 'react';
import Arrow from '../components/Arrow/Arrow';

function About() {
  return (
    <div className="p-8  leading-relaxed bg-main">
      {/* Title */}
      <h1 className="text-4xl font-bold mb-8 text-gray-800 text-center">More About Me...</h1>

     
      <div className="flex flex-col md:block">
        {/* Image Section */}
        <div className="w-full md:w-1/2 md:float-left md:mr-8 mb-4 md:mb-0">
          <img
            src="/Ama-2.jpg"
            alt="Ama Williams"
            className="w-full h-auto object-cover rounded-lg shadow-lg"
          />
        </div>

        {/* Text Section */}
        <div className="w-full md:w-auto">
          <p className="text-lg text-gray-700 mb-4 text-justify">
            I'm a <strong>fullstack web developer </strong>based in the Netherlands who loves to create responsive, and visually stunning web experiences.
            
          </p>
          <p className="text-lg text-gray-700 mb-4">
            With a strong foundation in HTML, CSS, JavaScript, Typescript and frameworks like <strong>MERN stack and TailwindCSS</strong>, I specialize in crafting websites and web applications that prioritize a memorable user experience.  I thrive on continuous learning to adapt to the ever-evolving world of web development. 
          </p>
          
          <p className="text-lg text-gray-700 mb-4">
            When I'm not coding, I enjoy <strong>singing🎶🎤, baking👩🏾‍🍳 and spending quality time with family 👨🏾‍👩🏾‍👦🏾‍👦🏾 and friends</strong>, which keeps me creative and inspired. Feel free to explore my projects and get in touch if you'd like to collaborate or learn more about my work!
          </p>
          
        </div>
        <div className="h-[30vh] flex items-center justify-center">
          <Arrow />
        </div>
      </div>

    
    </div>
  );
}

export default About;
