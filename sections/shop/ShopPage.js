'use client';

import React, { useEffect, useState } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import { products } from '@/constants/Constants'; // Import your products data
import Popover from '@/components/Popover';
import ShowProducts from '@/sections/shop/ShowProduct';

const categories = ['All', 'Men', 'Women', 'Kids', 'Accessories'];

const ShopPage = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const productsPerPage = 12;

  useEffect(() => {
    // Determine category from pathname
    const path = pathname.split('/').pop();
    const initialCategory = categories.find((cat) => cat.toLowerCase() === path.toLowerCase());
    if (initialCategory) {
      setSelectedCategory(initialCategory);
    }

    // Check for `id` in search params to open popover
    const productId = searchParams.get('id');
    if (productId) {
      const product = products.find((prod) => prod.id === parseInt(productId));
      if (product) {
        setSelectedProduct(product);
        setIsPopoverOpen(true);
      }
    }
  }, [pathname, searchParams]);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setCurrentPage(1);

    const newUrl = `/products/${category.toLowerCase()}`;
    window.history.pushState(null, '', newUrl);

    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleProductClick = (productId, productCategory) => {
    const newUrl = `/products/${productCategory.toLowerCase()}?id=${productId}`;
    window.history.pushState(null, '', newUrl);

    const product = products.find((prod) => prod.id === productId && prod.category === productCategory);
    if (product) {
      setSelectedProduct(product);
      setIsPopoverOpen(true);
    }
  };

  const closePopover = () => {
    setIsPopoverOpen(false);
    setSelectedProduct(null);

    const newUrl = `/products/${selectedCategory.toLowerCase()}`;
    window.history.pushState(null, '', newUrl);
  };

  const filteredProducts =
    selectedCategory === 'All'
      ? products
      : products.filter(
          (product) => product.category.toLowerCase() === selectedCategory.toLowerCase()
        );

  const paginatedProducts = filteredProducts.slice(
    (currentPage - 1) * productsPerPage,
    currentPage * productsPerPage
  );

  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  return (
    <section className="max-w-screen-xl mx-auto py-8">
      <h2 className="text-center tracking-wide text-gray-500 text-4xl font-bold my-1 mt-10">
        {selectedCategory === 'All' ? 'All Categories' : selectedCategory}
      </h2>

      {/* Filter Buttons */}
      <div className="flex justify-center space-x-4 my-6">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`px-4 py-2 rounded-md text-sm font-medium transition ${
              selectedCategory === cat
                ? 'bg-sky-500 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
            onClick={() => handleCategoryChange(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {paginatedProducts.map((product) => (
          <div
            key={product.id}
            className="bg-white shadow-lg rounded border border-gray-300 p-4 transform transition-transform duration-300 hover:scale-105 hover:shadow-xl"
            onClick={() => handleProductClick(product.id, product.category)} // Pass ID and category
          >
            <div className="w-full h-96 rounded-md overflow-hidden flex items-center justify-center">
              <img
                src={product.images[0]} // Show only the first image
                alt={product.title}
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-sm font-bold mt-4">{product.title}</h3>
            <p className="text-xs text-gray-500">{product.description}</p>
            <p className="text-sm font-bold mt-2">
              <span className="line-through text-gray-400">
                {product.discount ? product.price : null}
              </span>{' '}
              <span className="text-green-500">{product.discount || product.price}</span>
            </p>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center items-center space-x-4 mt-8">
        <button
          className={`px-4 py-2 rounded-md text-sm font-medium transition ${
            currentPage > 1
              ? 'bg-sky-500 text-white hover:bg-sky-400'
              : 'bg-gray-300 text-gray-500 cursor-not-allowed'
          }`}
          onClick={() => currentPage > 1 && setCurrentPage(currentPage - 1)}
          disabled={currentPage <= 1}
        >
          Previous
        </button>
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            className={`px-4 py-2 rounded-md text-sm font-medium transition ${
              currentPage === index + 1
                ? 'bg-sky-500 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
            onClick={() => setCurrentPage(index + 1)}
          >
            {index + 1}
          </button>
        ))}
        <button
          className={`px-4 py-2 rounded-md text-sm font-medium transition ${
            currentPage < totalPages
              ? 'bg-sky-500 text-white hover:bg-sky-400'
              : 'bg-gray-300 text-gray-500 cursor-not-allowed'
          }`}
          onClick={() => currentPage < totalPages && setCurrentPage(currentPage + 1)}
          disabled={currentPage >= totalPages}
        >
          Next
        </button>
      </div>

      {/* Popover */}
      {isPopoverOpen && selectedProduct && (
        <Popover isOpen={isPopoverOpen} onClose={closePopover}>
          <ShowProducts product={selectedProduct} />
        </Popover>
      )}
    </section>
  );
};

export default ShopPage;
