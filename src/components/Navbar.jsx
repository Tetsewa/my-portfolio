import React from 'react';

function Navbar() {
  return (
    <nav className="bg-neutral text-white shadow-lg">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        
        <div className="flex items-start">
          <img 
            src="logo.png" 
            alt="Logo" 
            className="h-16 w-auto mr-4 "
          />
          {/* <span className="text-2xl font-bold">Ama Williams</span> */}
        </div>

      
        <ul className="flex space-x-8 text-lg items-start">
          <li><a href="#aboutme" className="hover:text-white">About Me</a></li>
          <li><a href="#projects" className="hover:text-white">Projects</a></li>
          <li><a href="#technologies" className="hover:text-white">Technologies</a></li>
          <li><a href="#contact" className="hover:text-white">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
