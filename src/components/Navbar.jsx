import React from 'react';
import { Link } from 'react-scroll'; 

function Navbar() {
  return (
    <nav className="bg-black shadow-lg fixed w-full z-10">
      <div className="container mx-auto py-4 flex justify-between items-center">
        
        <div className="flex items-start">
          <img 
            src="logo.png" 
            alt="Logo" 
            className="h-20 w-auto mr-4"
          />
        </div>

        <ul className="flex space-x-8 text-lg items-start">
          <li><Link to="home" smooth={true} duration={500} className="text-purple hover:text-white cursor-pointer">Home</Link></li>
          <li><Link to="about" smooth={true} duration={500} className="text-purple hover:text-white cursor-pointer">About Me</Link></li>
          <li><Link to="projects" smooth={true} duration={500} className="text-purple hover:text-white cursor-pointer">Projects</Link></li>
          <li><Link to="technologies" smooth={true} duration={500} className="text-purple hover:text-white cursor-pointer">Technologies</Link></li>
          <li><Link to="career" smooth={true} duration={500} className="text-purple hover:text-white cursor-pointer">Career</Link></li>
          <li><Link to="contact" smooth={true} duration={500} className="text-purple hover:text-white cursor-pointer">Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;