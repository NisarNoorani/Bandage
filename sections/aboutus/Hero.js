import React from 'react'

const Hero = () => {
    return (
        <section className="bg-gray-50 py-16 px-8">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                {/* Left Content */}
                <div className="text-center lg:text-left">
                    <p className="text-sm text-blue-500 uppercase font-semibold mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
                        Know More About Us
                    </p>
                    <h1 className="text-5xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>
                        ABOUT US
                    </h1>
                    <p className="text-lg text-gray-700 mb-8" style={{ fontFamily: 'Poppins, sans-serif' }}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit facilisis non scelerisque nunc
                        diam volupat. Non scelerisque nunc.
                    </p>
                    <button className="bg-blue-500 text-white py-3 px-8 rounded-lg text-lg font-medium shadow-md hover:bg-blue-600 transition" style={{ fontFamily: 'Poppins, sans-serif' }}>
                        Learn More
                    </button>
                </div>
                {/* Right Image */}
                <div className="flex justify-center lg:justify-end">
                    <img
                        src="https://res.cloudinary.com/dvbc6ctqu/image/upload/v1734854785/technology_1_1_pkswge.png"
                        alt="About Us"
                        className="w-full max-w-md lg:max-w-lg rounded-lg"
                    />
                </div>
            </div>
        </section>
    )
}

export default Hero
