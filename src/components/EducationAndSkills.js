// src/components/EducationAndSkills.js
import React from 'react';

function EducationAndSkills() {
  return (
    <section className="bg-gray-100 text-gray-900 py-20">
      <div className="container mx-auto">
        {/* Education Section */}
        <div className="mb-12">
          <h2 className="text-4xl font-extrabold text-center mb-6">Education</h2>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold">Queens College, New York</h3>
            <p className="text-gray-600"><strong>Bachelor of Arts in Computer Science</strong> (Expected June 2024)</p>
            <p className="text-gray-700 mt-2">
              Relevant Courses: OOP in Java & C++, Data Structures, Algorithms, SQL Programming, Post-Quantum Cryptography
            </p>
          </div>
        </div>

        {/* Skills Section */}
        <div>
          <h2 className="text-4xl font-extrabold text-center mb-6">Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold">Languages</h3>
              <ul className="list-disc ml-6 mt-2 text-gray-700">
                <li>Python</li>
                <li>Java</li>
                <li>SQL</li>
                <li>JavaScript</li>
                <li>C++</li>
                <li>HTML & CSS</li>
                <li>PHP</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold">Tools & Technologies</h3>
              <ul className="list-disc ml-6 mt-2 text-gray-700">
                <li>AWS</li>
                <li>MongoDB</li>
                <li>DynamoDB</li>
                <li>MySQL</li>
                <li>React</li>
                <li>Redux</li>
                <li>Docker</li>
                <li>Azure Data Studios</li>
                <li>Git</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default EducationAndSkills;
