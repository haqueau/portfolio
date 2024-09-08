import React from 'react';

function Projects() {
  return (
    <section className="bg-gray-200 text-gray-900 py-20">
      <div className="container mx-auto">
        <h2 className="text-4xl font-extrabold text-center mb-12">Projects</h2>
        <div className="space-y-10">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold">Discord Shoe Tracker Bot</h3>
            <p className="text-gray-700">Python, Nike API, REST</p>
            <ul className="list-disc ml-6 mt-2 text-gray-700">
              <li>Engineered a bot to send alerts for new shoe releases.</li>
              <li>Implemented countdown timers for availability tracking.</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold">Floor Manager</h3>
            <p className="text-gray-700">Java, MongoDB</p>
            <ul className="list-disc ml-6 mt-2 text-gray-700">
              <li>Developed an e-commerce store displaying tile products with various configurations.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
