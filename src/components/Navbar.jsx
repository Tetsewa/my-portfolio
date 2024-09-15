import React from 'react';

function Navbar() {
  return (
    <nav className="bg-gray-800 text-white shadow-lg">
      <div className="container mx-auto px-4 py-4 flex justify-between items-start">
        {/* Logo Section - Top Left */}
        <div className="flex items-start">
          {/* <img 
            src="/logo.jpg" 
            alt="Logo" 
            className="h-12 w-12 mr-4 rounded-full"
          /> */}
          <span className="text-2xl font-bold">Ama Williams</span>
        </div>

        {/* Navigation Links - Top Right */}
        <ul className="flex space-x-8 text-lg items-start">
          <li><a href="#home" className="hover:text-blue-400">Home</a></li>
          <li><a href="#aboutme" className="hover:text-blue-400">About Me</a></li>
          <li><a href="#projects" className="hover:text-blue-400">Projects</a></li>
          <li><a href="#technologies" className="hover:text-blue-400">Technologies</a></li>
          <li><a href="#contact" className="hover:text-blue-400">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
