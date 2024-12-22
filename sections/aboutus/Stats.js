import React from 'react'

const Stats = () => {
  return (
    <section className="bg-white py-12">
    <div className="container mx-auto px-6 lg:px-20 text-center">
      <div className="grid grid-cols-4 gap-8">
        <div>
          <h2 className="md:text-6xl text-5xl font-extrabold text-gray-900">15K</h2>
          <p className="text-gray-500 md:text-sm text-xs font-semibold">Happy Customers</p>
        </div>
        <div>
          <h2 className="md:text-6xl text-5xl font-extrabold text-gray-900">99K</h2>
          <p className="text-gray-500 md:text-sm text-xs font-semibold">Monthly Visitors</p>
        </div>
        <div>
          <h2 className="md:text-6xl text-5xl font-extrabold text-gray-900">15</h2>
          <p className="text-gray-500 md:text-sm text-xs font-semibold">Countries Worldwide</p>
        </div>
        <div>
          <h2 className="md:text-6xl text-5xl font-extrabold text-gray-900">100+</h2>
          <p className="text-gray-500 md:text-sm text-xs font-semibold">Top Partners</p>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Stats
