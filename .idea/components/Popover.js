import React, { useEffect } from 'react';
import { FaTimes } from 'react-icons/fa';

const Popover = ({ isOpen, onClose, children }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'; // Disable scrolling when popover is open
    } else {
      document.body.style.overflow = 'auto'; // Enable scrolling when popover is closed
    }
    return () => {
      document.body.style.overflow = 'auto'; // Ensure scrolling is enabled on cleanup
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
      onClick={onClose}
    >
      <div
        className="relative w-full h-auto mx-4 flex justify-center items-center"
        onClick={(e) => e.stopPropagation()}
      >
        <div
          className="w-full h-full rounded-lg p-6 overflow-auto"
          style={{
            margin: '10px',
            maxHeight: '92vh',
            scrollbarWidth: 'none',
          }}
        >
          {/* Hide scrollbar in Webkit-based browsers */}
          <style jsx>{`
            ::-webkit-scrollbar {
              display: none;
            }
          `}</style>

          {/* Close Button */}
          <button
            className="absolute top-4 right-4 p-2 rounded-full transition-colors duration-300 hover:bg-opacity-80"
            style={{
              zIndex: '100',
              backgroundImage: 'linear-gradient(to right, #0ea5e9, #38bdf8)',
              color: 'white',
            }}
            onClick={onClose}
          >
            <FaTimes size={24} />
          </button>

          {/* Content */}
          <div className="max-w-full mx-auto">{children}</div>

          {/* Return to Home Button */}
          <div className="absolute bottom-4 left-4 z-10">
            <button
              className="bg-blue-500 text-white text-xl py-2 px-6 rounded-lg hover:bg-blue-600 transition"
              onClick={() => window.location.href = '/'} // Redirect to home page
            >
              Return to Home
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popover;
