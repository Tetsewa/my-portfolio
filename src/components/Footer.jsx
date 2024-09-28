import React from 'react';
import { Link } from 'react-scroll'; 

function Footer() {
  return (
    <footer className="bg-black text-white py-6">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center flex-col md:flex-row">
          {/* Footer Links */}
          <ul className="flex space-x-10 mb-4 md:mb-0">
          <li><Link to="home" smooth={true} duration={500} className="text-purple hover:text-white cursor-pointer">Home</Link></li>
          <li><Link to="projects" smooth={true} duration={500} className="text-purple hover:text-white cursor-pointer">Projects</Link></li>
          <li><Link to="technologies" smooth={true} duration={500} className="text-purple hover:text-white cursor-pointer">Technologies</Link></li>
          <li><Link to="contact" smooth={true} duration={500} className="text-purple hover:text-white cursor-pointer">Contact</Link></li>
            
          </ul>

          {/* Made by */}
          <div className="text-sm">
            Made by Ama Williams &copy; 2024
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
