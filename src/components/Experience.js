import React from 'react';

function Experience() {
  return (
    <section className="bg-gray-100 text-gray-900 py-20">
      <div className="container mx-auto">
        <h2 className="text-4xl font-extrabold text-center mb-12">Experience</h2>
        <div className="space-y-10">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold">Maven Youth - Software Engineer Intern</h3>
            <p className="text-gray-600"><strong>August 2023</strong></p>
            <ul className="list-disc ml-6 mt-2 text-gray-700">
              <li>Designed and implemented a Visual Novel game using Ren’Py.</li>
              <li>Increased user engagement by 25% with an interactive dialogue system.</li>
              <li>Collaborated with cross-functional teams to integrate narrative and visual elements.</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold">Runwei - Software Developer Intern</h3>
            <p className="text-gray-600"><strong>January 2023</strong></p>
            <ul className="list-disc ml-6 mt-2 text-gray-700">
              <li>Developed a grant matching web app using React, TypeScript, and Tailwind.</li>
              <li>Worked with Redux for state management and AWS Amplify for deployment.</li>
              <li>Created key features like grant filters and deadline tracking.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
