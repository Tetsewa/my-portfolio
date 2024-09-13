import React from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaNodeJs, FaReact, FaGit, FaFigma, FaDatabase, FaPhp } from 'react-icons/fa';
import { SiTypescript, SiTailwindcss, SiExpress, SiMongodb, SiMysql } from 'react-icons/si';

function Technologies() {
  return (
    <div className="py-12 bg-gray-100">
      <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">Technologies</h2>
      
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

        {/* Programming Languages */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-semibold mb-4">Programming Languages</h3>
          <div className="flex items-center space-x-4">
            <FaJs className="text-yellow-500" size={40} title="JavaScript" />
            <FaHtml5 className="text-orange-600" size={40} title="HTML5" />
            <FaCss3Alt className="text-blue-500" size={40} title="CSS3" />
            <FaPhp className="text-indigo-600" size={40} title="PHP (In Progress)" />
            <SiTypescript className="text-blue-600" size={40} title="TypeScript (In Progress)" />
          </div>
        </div>

        {/* Frameworks & Libraries */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-semibold mb-4">Frameworks & Libraries</h3>
          <div className="flex items-center space-x-4">
            <FaNodeJs className="text-green-600" size={40} title="NodeJS" />
            <SiExpress className="text-black" size={40} title="ExpressJS" />
            <FaReact className="text-blue-400" size={40} title="ReactJS" />
            <SiTailwindcss className="text-teal-500" size={40} title="Tailwind CSS" />
          </div>
        </div>

        {/* Tools */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-semibold mb-4">Tools</h3>
          <div className="flex items-center space-x-4">
            <FaGit className="text-orange-500" size={40} title="Git" />
            <FaFigma className="text-pink-500" size={40} title="Figma" />
          </div>
        </div>

        {/* Databases */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-semibold mb-4">Databases</h3>
          <div className="flex items-center space-x-4">
            <SiMongodb className="text-green-500" size={40} title="MongoDB" />
            <SiMysql className="text-blue-500" size={40} title="MySQL" />
          </div>
        </div>

      </div>
    </div>
  );
}

export default Technologies;
