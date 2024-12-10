import React from 'react'

const Hero = () => {
    return (
        <section className="bg-blue-500 text-white py-12 px-6 flex items-center">
            <div>
                <p className="text-sm uppercase">Summer 2020</p>
                <h1 className="text-5xl font-bold my-4">New Collection</h1>
                <p>We know how large objects will act, but things on a small scale.</p>
                <button className="mt-6 bg-green-500 text-white py-2 px-6 rounded hover:bg-green-600">
                    Shop Now
                </button>
            </div>
            <div className="ml-12 hidden md:block">
                <img
                    src="https://via.placeholder.com/400x600"
                    alt="Hero Image"
                    className="rounded-lg"
                />
            </div>
        </section>
    )
}
export default Hero
