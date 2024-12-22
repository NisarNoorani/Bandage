"use client";

import React, { useState } from "react";

const Video = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => setIsPlaying(true);
  const handleStop = () => setIsPlaying(false);

  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-6 lg:px-20 text-center">
        <div
          className="relative w-full max-w-4xl mx-auto overflow-hidden rounded-lg shadow-lg"
          style={{ aspectRatio: "16 / 9" }}
        >
          {/* Thumbnail or Play Button */}
          {!isPlaying && (
            <div
              className="absolute inset-0 z-10 flex items-center justify-center bg-black bg-opacity-50 cursor-pointer"
              onClick={handlePlay}
            >
              {/* Custom thumbnail */}
              <img
                src="https://images.unsplash.com/photo-1535553786276-ba3c1681ad75?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Fashion Thumbnail"
                className="absolute inset-0 w-full h-full object-cover rounded-lg"
              />
              <div className="absolute z-20 w-20 h-20 bg-blue-500 rounded-full flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-10 h-10 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14.752 11.168l-5.197-3.013A1 1 0 008 9.017v5.966a1 1 0 001.555.832l5.197-3.013a1 1 0 000-1.664z"
                  />
                </svg>
              </div>
            </div>
          )}

          {/* Video */}
          {isPlaying && (
            <video
              className="absolute inset-0 w-full h-full rounded-lg"
              autoPlay
              loop
              muted
              onClick={handleStop}
            >
              <source
                src="https://res.cloudinary.com/dvbc6ctqu/video/upload/v1734871188/22931965_pehviz.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          )}
        </div>
      </div>
    </section>
  );
};

export default Video;
