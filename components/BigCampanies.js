import React from 'react';
import { FaAmazon, FaStripe, FaReddit, FaLyft, FaBuilding } from 'react-icons/fa';

const BigCompanies = () => {
  const companies = [
    { name: 'Hooli', icon: <FaBuilding className="w-20 h-20 text-gray-600" /> }, // Increased icon size
    { name: 'Lyft', icon: <FaLyft className="w-20 h-20 text-gray-600" /> },
    { name: 'Stripe', icon: <FaStripe className="w-20 h-20 text-gray-600" /> },
    { name: 'Amazon AWS', icon: <FaAmazon className="w-20 h-20 text-gray-600" /> },
    { name: 'Reddit', icon: <FaReddit className="w-20 h-20 text-gray-600" /> },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold text-gray-800">Big Companies Are Here</h2>
        <p className="text-gray-600 mt-4 max-w-xl mx-auto">
          Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics
          and quantum mechanics.
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-8 mt-8"> {/* Adjusted gap for better spacing */}
        {companies.map((company, index) => (
          <div key={index} className="text-center">
            {company.icon}
            <p className="mt-4 text-gray-600 font-medium">{company.name}</p> {/* Increased margin below icons */}
          </div>
        ))}
      </div>
    </section>
  );
};

export default BigCompanies;
