import React from 'react';
import { FaInstagram, FaFacebook, FaYoutube, FaTwitter } from "react-icons/fa";


const TopBanner = () => {
    return (
        <div className="bg-gray-900 text-white py-2 flex justify-between items-center px-4 text-sm hidden md:flex">
            {/* Left Section: Contact Info */}
            <div className="flex items-center gap-4">
                {/* Phone Icon with Number */}
                <div className="flex items-center gap-2">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-4 h-4 "
                    >
                        <path d="M3.654 3.663a3.75 3.75 0 015.328 0l1.094 1.094a3.75 3.75 0 010 5.327l-.825.825a14.238 14.238 0 005.377 5.377l.825-.825a3.75 3.75 0 015.327 0l1.094 1.094a3.75 3.75 0 010 5.328l-.964.963c-.944.944-2.281 1.384-3.62 1.218-4.637-.566-8.881-3.163-12.006-6.288C2.28 12.9-.318 8.655.247 4.018c.166-1.34.674-2.676 1.619-3.62l.963-.964zm1.414 1.414l-.964.963c-.617.617-.965 1.482-1.079 2.324-.464 3.745 1.753 7.493 5.538 11.277 3.785 3.785 7.533 6.002 11.277 5.538.843-.113 1.708-.462 2.325-1.079l.963-.964a2.25 2.25 0 000-3.192l-1.094-1.094a2.25 2.25 0 00-3.192 0l-1.036 1.036a1.5 1.5 0 01-1.754.275 15.72 15.72 0 01-6.455-6.455 1.5 1.5 0 01.275-1.754l1.036-1.036a2.25 2.25 0 000-3.192L8.395 3.113a2.25 2.25 0 00-3.192 0z" />
                    </svg>
                    <span>(225) 555-0118</span>
                </div>

                {/* Email Icon with Address */}
                <div className="flex items-center gap-2">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-4 h-4 "
                    >
                        <path d="M1.5 6.75A3.75 3.75 0 015.25 3h13.5A3.75 3.75 0 0122.5 6.75v10.5a3.75 3.75 0 01-3.75 3.75H5.25A3.75 3.75 0 011.5 17.25V6.75zM3.186 6.61a.25.25 0 00-.186.24v10.5c0 .69.56 1.25 1.25 1.25h13.5c.69 0 1.25-.56 1.25-1.25V6.85a.25.25 0 00-.186-.24L12 11.383 3.186 6.61zM3.5 5.655V6.2L12 10.992l8.5-4.793v-.545a2.25 2.25 0 00-2.25-2.25H5.75a2.25 2.25 0 00-2.25 2.25z" />
                    </svg>
                    <span>michelle.rivera@example.com</span>
                </div>
            </div>

            {/* Right Section: Promotional Text */}
            <div>
                Follow Us & get a chance to win <span className="font-bold">80% off</span>
            </div>
            <div className="flex items-center">
          <p className="text-sm  mr-4">Follow Us:</p>

          {/* Social Media Icons */}
          <div className="flex space-x-4 text-xl">
            <a href="#" className="text-white hover:text-blue-500">
              <FaFacebook />
            </a>
            <a href="#" className="text-white hover:text-pink-500">
              <FaInstagram />
            </a>
            <a href="#" className="text-white hover:text-red-600">
              <FaYoutube />
            </a>
            <a href="#" className="text-white hover:text-blue-400">
              <FaTwitter />
            </a>
          </div>
        </div>
        </div>
    );
};

export default TopBanner;
