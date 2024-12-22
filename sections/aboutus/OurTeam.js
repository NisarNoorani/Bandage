import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'; // Import icons from react-icons

const OurTeam = () => {
  const teamMembers = [
    {
      name: 'Username',
      profession: 'Profession',
      image: 'https://via.placeholder.com/300', // Replace with actual image URL
      social: {
        facebook: '#',
        instagram: '#',
        twitter: '#',
      },
    },
    {
      name: 'Username',
      profession: 'Profession',
      image: 'https://via.placeholder.com/300', // Replace with actual image URL
      social: {
        facebook: '#',
        instagram: '#',
        twitter: '#',
      },
    },
    {
      name: 'Username',
      profession: 'Profession',
      image: 'https://via.placeholder.com/300', // Replace with actual image URL
      social: {
        facebook: '#',
        instagram: '#',
        twitter: '#',
      },
    },
  ];

  return (
    <section className="py-16 bg-gray-100">
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold text-gray-800">Meet Our Team</h2>
        <p className="text-gray-600 mt-4 max-w-xl mx-auto">
          Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics
          and quantum mechanics.
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-8">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg overflow-hidden w-80 text-center"
          >
            <img
              src={member.image}
              alt={`${member.name}`}
              className="w-full h-64 object-cover" // Fixed height for all images
            />
            <div className="p-4">
              <h3 className="text-lg font-bold text-gray-800">{member.name}</h3>
              <p className="text-gray-600">{member.profession}</p>
              <div className="flex justify-center space-x-4 mt-4">
                {/* Facebook Icon */}
                <a href={member.social.facebook} aria-label="Facebook">
                  <FaFacebook className="w-6 h-6 text-sky-500 hover:text-sky-700" />
                </a>
                {/* Instagram Icon */}
                <a href={member.social.instagram} aria-label="Instagram">
                  <FaInstagram className="w-6 h-6 text-sky-500 hover:text-sky-700" />
                </a>
                {/* Twitter Icon */}
                <a href={member.social.twitter} aria-label="Twitter">
                  <FaTwitter className="w-6 h-6 text-sky-500 hover:text-sky-700" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurTeam;
