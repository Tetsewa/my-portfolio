import React from 'react';

function About() {
  return (
    <div className="p-8 font-sans leading-relaxed bg-gray-50">
      {/* Title */}
      <h1 className="text-4xl font-bold mb-8 text-gray-800 text-center">About Me</h1>

      {/* Flex Container for Image and Text */}
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
          <p className="text-lg text-gray-700 mb-4">
            I'm a <strong>fullstack web developer </strong>based in the Netherlands who loves to create responsive, and visually stunning web experiences.
            
          </p>
          <p className="text-lg text-gray-700 mb-4">
            With a strong foundation in HTML, CSS, JavaScript, Typescript and frameworks like <strong>MERN stack and TailwindCSS</strong>, I specialize in crafting websites and web applications that prioritize a memorable user experience.  I thrive on continuous learning to adapt to the ever-evolving world of web development. 
          </p>
          
          <p className="text-lg text-gray-700 mb-4">
            When I'm not coding, I enjoy <strong>singing🎶🎤, baking👩🏾‍🍳 and spending quality time with family 👨🏾‍👩🏾‍👦🏾‍👦🏾 and friends</strong>, which keeps me creative and inspired.
          </p>
          <p className="text-lg text-gray-700">
            Feel free to explore my projects and get in touch if you'd like to collaborate or learn more about my work!
          </p>
        </div>
      </div>

      
      {/* <div className="mt-8">
        <h1 className="text-4xl font-bold mb-4 text-gray-800 text-center">My Professional Journey</h1>
        <p className="text-lg text-gray-700 text-center">In addition to being a developer, I work as a client services manager.</p>
      </div> */}
    </div>
  );
}

export default About;
