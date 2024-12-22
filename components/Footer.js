import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white text-gray-700 py-8">
      {/* Bandage Section */}
      <div className="flex justify-between items-center max-w-7xl mx-auto px-4 border-b pb-6">
        {/* Bandage Heading */}
        <h2 className="text-2xl font-bold">Bandage</h2> {/* Increased size */}
        
        {/* Social Media Icons */}
        <div className="flex space-x-6 text-blue-500 text-lg"> {/* Increased icon size */}
          <a href="#" aria-label="Facebook" className="hover:text-blue-600">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#" aria-label="Instagram" className="hover:text-blue-600">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="#" aria-label="Twitter" className="hover:text-blue-600">
            <i className="fab fa-twitter"></i>
          </a>
        </div>
      </div>

      {/* Footer Links */}
      <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 px-4 py-8">
        <div>
          <h3 className="font-semibold mb-3">Company Info</h3>
          <ul className="space-y-2 text-sm">
            <li>About Us</li>
            <li>Carrier</li>
            <li>We are hiring</li>
            <li>Blog</li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-3">Legal</h3>
          <ul className="space-y-2 text-sm">
            <li>About Us</li>
            <li>Carrier</li>
            <li>We are hiring</li>
            <li>Blog</li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-3">Features</h3>
          <ul className="space-y-2 text-sm">
            <li>Business Marketing</li>
            <li>User Analytic</li>
            <li>Live Chat</li>
            <li>Unlimited Support</li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-3">Resources</h3>
          <ul className="space-y-2 text-sm">
            <li>iOS & Android</li>
            <li>Watch a Demo</li>
            <li>Customers</li>
            <li>API</li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-3">Get In Touch</h3>
          <form className="space-y-3">
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-2 border border-gray-300 rounded-md"
            />
            <button className="w-full p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Text */}
      <div className="text-center text-sm text-gray-500 mt-6">
        Made With Love By Finland All Right Reserved
      </div>
    </footer>
  );
};

export default Footer;
