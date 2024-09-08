import React from 'react';

function Contact() {
  return (
    <section className="bg-gray-100 text-gray-900 py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-extrabold mb-12">Contact</h2>
        <p className="text-gray-700 text-xl">Feel free to reach out to me for any opportunities or collaboration.</p>
        <p className="mt-6 text-gray-800">
          Email: <a href="mailto:haqueauyon@gmail.com" className="text-blue-500 hover:underline">haqueauyon@gmail.com</a>
        </p>
      
        <p className="mt-2 text-gray-800">
          LinkedIn: <a href="https://www.linkedin.com/in/auyon-haque-660a07237" className="text-blue-500 hover:underline">Auyon Haque</a>
        </p>
      </div>
    </section>
  );
}

export default Contact;
