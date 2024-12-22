"use client";
import React, { useState } from "react";
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";

const Contact = () => {
  const [selected, setSelected] = useState("location"); // Initially select the middle chart

  return (
    <div className="bg-white py-20 px-8">
      {/* Header Section */}
      <h2 className="text-center text-gray-700 font-semibold mb-2 tracking-wide">
        VISIT OUR OFFICE
      </h2>
      <h1 className="text-center text-3xl font-bold text-gray-900 mb-12">
        We help small businesses
        <br />
        with big ideas
      </h1>

      {/* Contact Options */}
      <div className="flex flex-col md:flex-row justify-center gap-10 relative">
        {/* Phone Section */}
        <div
          onClick={() => setSelected("phone")}
          className={`relative text-center flex flex-col items-center justify-center border p-8 cursor-pointer shadow-2xl transition-all transform ${
            selected === "phone" ? "bg-gray-800 text-white scale-105" : "bg-white text-gray-900 hover:scale-105 hover:shadow-xl"
          }`}
          style={{ height: "400px" }}
        >
          <div className="flex flex-col items-center -mt-6">
            <FiPhone className="text-sky-500 text-5xl mb-4" />
            <p className="text-sm">georgia.young@example.com</p>
            <p className="text-sm mb-6">georgia.young@ple.com</p>
            <p className="font-medium mb-4">Get Support</p>
            <button className="border border-sky-500 text-sky-500 py-3 px-8 text-sm rounded bg-transparent hover:bg-sky-500 hover:text-white transition">
              Submit Request
            </button>
          </div>
        </div>

        {/* Location Section (Middle Chart) */}
        
        <div
          onClick={() => setSelected("location")}
          className={`relative text-center flex flex-col items-center justify-center border p-8 cursor-pointer shadow-2xl transition-all transform ${
            selected === "location" ? "bg-gray-800 text-white scale-105" : "bg-white text-gray-900 hover:scale-105 hover:shadow-xl"
          }`}
          style={{ height: "400px", marginTop: "40px" }} // Entire chart is lowered
        >
          <div className="flex flex-col items-center -mt-6">
            <FiMapPin className="text-sky-500 text-6xl mb-4" />
            <p className="text-sm">georgia.young@example.com</p>
            <p className="text-sm mb-6">georgia.young@ple.com</p>
            <p className="font-medium mb-4">Get Support</p>
            <button className="border border-sky-500 text-sky-500 py-3 px-8 text-sm rounded bg-transparent hover:bg-sky-500 hover:text-white transition">
              Submit Request
            </button>
          </div>
        </div>

        {/* Email Section */}
        <div
          onClick={() => setSelected("email")}
          className={`relative text-center flex flex-col items-center justify-center border p-8 cursor-pointer shadow-2xl transition-all transform ${
            selected === "email" ? "bg-gray-800 text-white scale-105" : "bg-white text-gray-900 hover:scale-105 hover:shadow-xl"
          }`}
          style={{ height: "400px" }}
        >
          <div className="flex flex-col items-center -mt-6">
            <FiMail className="text-sky-500 text-5xl mb-4" />
            <p className="text-sm">georgia.young@example.com</p>
            <p className="text-sm mb-6">georgia.young@ple.com</p>
            <p className="font-medium mb-4">Get Support</p>
            <button className="border border-sky-500 text-sky-500 py-3 px-8 text-sm rounded bg-transparent hover:bg-sky-500 hover:text-white transition">
              Submit Request
            </button>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <div className="flex justify-center items-center">
      <svg
        fill="currentColor"
        height="150px"
        width="80px"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="-30.28 -30.28 363.38 363.38"
        style={{ transform: 'rotate(180deg)' }} // Directly apply the rotation here
        className="text-sky-500"
      >
        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
        <g
          id="SVGRepo_tracerCarrier"
          strokeLinecap="round"
          strokeLinejoin="round"
          stroke="#CCCCCC"
          strokeWidth="2.422536"
        ></g>
        <g id="SVGRepo_iconCarrier">
          <path
            id="XMLID_5_"
            d="M298.423,128.606L235.94,66.124c-0.004-0.003-0.007-0.006-0.011-0.009c-0.355-0.354-0.725-0.689-1.111-1.005 c-0.214-0.175-0.439-0.327-0.66-0.488c-0.169-0.123-0.332-0.256-0.507-0.372c-0.29-0.194-0.591-0.365-0.891-0.536 c-0.12-0.068-0.235-0.146-0.356-0.21c-0.286-0.153-0.58-0.284-0.874-0.418c-0.151-0.069-0.298-0.146-0.452-0.21 c-0.253-0.105-0.513-0.19-0.77-0.281c-0.207-0.073-0.41-0.153-0.621-0.217c-0.206-0.063-0.416-0.108-0.625-0.161 c-0.268-0.069-0.534-0.143-0.807-0.197c-0.16-0.032-0.321-0.049-0.481-0.075c-0.322-0.053-0.644-0.108-0.971-0.14 c-0.13-0.013-0.261-0.012-0.391-0.022c-0.352-0.025-0.704-0.051-1.061-0.051c-0.193,0-0.386,0.019-0.579,0.026 c-0.29,0.011-0.577,0.013-0.869,0.042c-0.495,0.047-0.989,0.121-1.479,0.217c-0.005,0.001-0.01,0.001-0.016,0.002 c-0.067,0.014-0.131,0.036-0.199,0.05c-0.415,0.088-0.828,0.188-1.236,0.312c-0.158,0.048-0.31,0.11-0.466,0.163 c-0.308,0.105-0.616,0.208-0.919,0.333c-0.208,0.086-0.405,0.188-0.607,0.282c-0.239,0.112-0.48,0.218-0.714,0.343 c-0.243,0.129-0.474,0.276-0.708,0.418c-0.183,0.111-0.368,0.214-0.547,0.333c-0.281,0.188-0.548,0.393-0.814,0.599 c-0.122,0.094-0.248,0.179-0.368,0.277c-0.341,0.28-0.665,0.577-0.977,0.884c-0.04,0.039-0.084,0.071-0.123,0.111l-0.02,0.02 c-0.016,0.015-0.03,0.03-0.045,0.045l-62.421,62.42c-5.858,5.857-5.858,15.355,0,21.213c2.929,2.929,6.768,4.394,10.606,4.393 c3.838-0.001,7.678-1.465,10.606-4.393l38.836-38.835c-4.299,47.301-39.205,88.259-88.071,97.979 c-6.707,1.334-13.454,2.03-20.161,2.11c-14.532,0.174-28.878-2.539-42.235-7.898c-1.028-0.412-2.049-0.84-3.064-1.284 c-12.185-5.322-23.474-12.883-33.235-22.493c-5.903-5.814-15.401-5.738-21.212,0.165c-5.813,5.903-5.739,15.4,0.165,21.212 c8.282,8.154,17.427,15.148,27.2,20.912c21.5,12.678,46.03,19.397,71.056,19.396c0,0,0,0,0,0h0.001 c9.087-0.001,18.245-0.887,27.34-2.696c61.89-12.311,106.147-63.914,112.006-123.7l35.131,35.13c5.857,5.858,15.355,5.858,21.213,0 C304.281,143.962,304.281,134.464,298.423,128.606z"
          ></path>
        </g>
      </svg>
    </div>

      <div className="text-center mt-8">
        <p className="text-gray-500 text-sm mb-4 tracking-wide">WE CAN'T WAIT TO MEET YOU</p>
        <h2 className="text-4xl font-bold text-gray-900 mb-6">Let's Talk</h2>
        <button className="border border-sky-500 text-sky-500 py-3 px-10 text-lg  bg-transparent hover:bg-sky-500 hover:text-white transition">
          Try it free now
        </button>
      </div>
    </div>
  );
};

export default Contact;
