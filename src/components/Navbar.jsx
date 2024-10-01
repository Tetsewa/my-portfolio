import React, { useState } from 'react';
import { Link } from 'react-scroll'; 

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-black shadow-lg fixed w-full z-10">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <img 
            src="logo.png" 
            alt="Logo" 
            className="h-12 w-auto mr-4"
          />
        </div>

        {/* Hamburger menu button */}
        <button 
          className="md:hidden text-white hover:text-purple focus:outline-none"
          onClick={toggleMenu}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        {/* Desktop menu */}
        <ul className="hidden md:flex space-x-8 text-lg items-center">
          <li><Link to="home" smooth={true} duration={500} className="text-purple hover:text-white cursor-pointer">Home</Link></li>
          <li><Link to="about" smooth={true} duration={500} className="text-purple hover:text-white cursor-pointer">About Me</Link></li>
          <li><Link to="projects" smooth={true} duration={500} className="text-purple hover:text-white cursor-pointer">Projects</Link></li>
          <li><Link to="technologies" smooth={true} duration={500} className="text-purple hover:text-white cursor-pointer">Technologies</Link></li>
          <li><Link to="career" smooth={true} duration={500} className="text-purple hover:text-white cursor-pointer">Career</Link></li>
          <li><Link to="contact" smooth={true} duration={500} className="text-purple hover:text-white cursor-pointer">Contact</Link></li>
        </ul>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-black">
          <ul className="px-4 py-2 space-y-2">
            <li><Link to="home" smooth={true} duration={500} className="block text-purple hover:text-white cursor-pointer" onClick={toggleMenu}>Home</Link></li>
            <li><Link to="about" smooth={true} duration={500} className="block text-purple hover:text-white cursor-pointer" onClick={toggleMenu}>About Me</Link></li>
            <li><Link to="projects" smooth={true} duration={500} className="block text-purple hover:text-white cursor-pointer" onClick={toggleMenu}>Projects</Link></li>
            <li><Link to="technologies" smooth={true} duration={500} className="block text-purple hover:text-white cursor-pointer" onClick={toggleMenu}>Technologies</Link></li>
            <li><Link to="career" smooth={true} duration={500} className="block text-purple hover:text-white cursor-pointer" onClick={toggleMenu}>Career</Link></li>
            <li><Link to="contact" smooth={true} duration={500} className="block text-purple hover:text-white cursor-pointer" onClick={toggleMenu}>Contact</Link></li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;