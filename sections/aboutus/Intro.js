import React from 'react'

const Intro = () => {
  return (
    <section className="bg-white py-12">
      <div className="container mx-auto px-6 lg:px-20">
        <h4 className="text-sm text-red-500 font-semibold mb-2">Problems trying</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Left Section */}
          <div>
            <h2 className="text-2xl font-bold text-gray-800 leading-snug mb-4">
              Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
            </h2>
          </div>

          {/* Right Section */}
          <div>
            <p className="text-gray-600 leading-relaxed">
              Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Intro
