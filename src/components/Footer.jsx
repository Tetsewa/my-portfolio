import React from 'react';

function Footer() {
  return (
    <footer className="bg-purple-700 text-white py-6">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center flex-col md:flex-row">
          {/* Footer Links */}
          <div className="flex space-x-10 mb-4 md:mb-0">
            <a href="/about" className="hover:underline">
              About
            </a>
            <a href="/projects" className="hover:underline">
              Projects
            </a>
            <a href="/contact" className="hover:underline">
              Contact
            </a>
            
          </div>

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
