// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-gray-800 p-6 fixed w-full top-0 z-10 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-2xl font-bold">
          Auyon Haque
        </div>
        <ul className="flex space-x-8">
          <li><Link className="text-gray-300 hover:text-white" to="/">Home</Link></li>
          <li><Link className="text-gray-300 hover:text-white" to="/experience">Experience</Link></li>
          <li><Link className="text-gray-300 hover:text-white" to="/education-skills">Education & Skills</Link></li>  {/* Updated link */}
          <li><Link className="text-gray-300 hover:text-white" to="/projects">Projects</Link></li>
          <li><Link className="text-gray-300 hover:text-white" to="/contact">Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
