// src/components/Home.js
import React from 'react';
import profileImage from '../assets/profile.jpg'; // Adjust the path if needed
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'; // For LinkedIn icon
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'; // For Mail icon

function Home() {
  return (
    <section className="bg-gray-900 text-white h-screen flex flex-col justify-center items-center">
      <h1 className="text-5xl font-extrabold">Auyon Haque</h1>
      <p className="mt-4 text-2xl">Software Engineer | Python | Java | React</p>
      <p className="mt-2 text-lg text-gray-400">Building scalable web applications with modern technologies</p>
      
      {/* Image Section */}
      <div className="mt-8">
        <img 
          src={profileImage} 
          alt="Auyon Haque Graduation" 
          className="rounded-full w-64 h-64 object-cover shadow-lg"
        />
      </div>

      {/* Social Icons Section */}
      <div className="mt-6 flex space-x-6">
        {/* LinkedIn Icon */}
        <a 
          href="https://www.linkedin.com/in/auyon-haque-660a07237" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-gray-300 hover:text-white text-3xl"
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        
        {/* Mail Icon */}
        <a 
          href="mailto:haqueauyon@gmail.com" 
          className="text-gray-300 hover:text-white text-3xl"
        >
          <FontAwesomeIcon icon={faEnvelope} />
        </a>
      </div>
    </section>
  );
}

export default Home;
