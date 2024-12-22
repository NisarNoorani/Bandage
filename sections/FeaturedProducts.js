'use client';

import React from 'react';

const FeaturedProducts = () => {
  const products = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1612465289702-7c84b5258fde?q=80&w=1873&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      category: 'Tech Accessories',
      title: 'Wireless Headphones',
      description: 'Experience the best sound quality with noise cancellation.',
      date: '22 Dec 2024',
      comments: 12,
      price: '$59.99',
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1613776822564-8859412fc09b?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D0',
      category: 'Home Decor',
      title: 'Modern Table Lamp',
      description: 'Elevate your space with this minimalistic table lamp.',
      date: '18 Dec 2024',
      comments: 8,
      price: '$45.00',
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1474376962954-d8a681cc53b2?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      category: 'Fashion',
      title: 'Leather Backpack',
      description: 'Stylish and durable backpack for everyday use.',
      date: '15 Dec 2024',
      comments: 15,
      price: '$120.00',
    },
  ];

  return (
    <section className="max-w-screen-xl mx-auto py-12">
      {/* Heading */}
      <h2 className="text-center text-blue-600 text-lg uppercase mb-2">Practice Advice</h2>
      <h2 className="text-center text-gray-800 text-2xl font-bold uppercase mb-2">
        Featured Products
      </h2>
      <p className="text-center text-gray-500 text-base mb-6">
        Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics
      </p>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <div key={product.id} className="bg-white shadow-lg rounded-lg p-4">
            {/* Image Section */}
            <div className="relative">
              <div className="w-full h-64 rounded-md overflow-hidden flex items-center justify-center">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover"
                />
              </div>
              {/* "New" Badge */}
              <span className="absolute top-2 left-2 bg-orange-500 text-white text-xs px-2 py-1 rounded uppercase">
                New
              </span>
            </div>

            {/* Product Details */}
            <div className="mt-4">
              <div className="flex items-center gap-2 mb-2">
                <p className="text-gray-600 text-xs uppercase">{product.category}</p>
              </div>
              <h3 className="text-gray-800 text-lg font-bold mb-2">{product.title}</h3>
              <p className="text-gray-600 text-sm mb-4">{product.description}</p>
              <p className="text-gray-900 text-lg font-bold mb-2">{product.price}</p>
              <div className="flex justify-between items-center text-sm">
                {/* Date */}
                <div className="flex items-center text-gray-500">
                  <svg
                    className="w-4 h-4 mr-1 text-blue-500"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8 7v2m8-2v2m-9 4h10m-2 8H9m13-12V5a2 2 0 00-2-2H4a2 2 0 00-2 2v3m16 0H3m16 0h3m-7 0h-6"
                    />
                  </svg>
                  {product.date}
                </div>
                {/* Comments */}
                <div className="flex items-center text-gray-500">
                  <svg
                    className="w-4 h-4 mr-1 text-blue-500"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 11l7 7 7-7m-7-7v14"
                    />
                  </svg>
                  {product.comments} comments
                </div>
              </div>
              {/* Learn More Button */}
              <div className="mt-4">
                <a
                  href="#"
                  className="text-gray-800 text-sm font-medium flex items-center gap-1"
                >
                  Learn More
                  <svg
                    className="w-4 h-4 text-blue-500"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedProducts;
