import React from 'react'

const EditorsPick = () => {
    return (
    <section className="py-12 px-6">
        <h2 className="text-3xl font-bold text-center mb-2">Editor's Pick</h2>
        <p className="text-center text-gray-500 mb-8">
            Problems trying to resolve the conflict between
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="relative">
                <img
                    src="https://via.placeholder.com/300x400"
                    alt="Men"
                    className="rounded-md"
                />
                <button className="absolute bottom-4 left-4 bg-white text-black py-2 px-4 rounded shadow">
                    Men
                </button>
            </div>
            <div className="relative">
                <img
                    src="https://via.placeholder.com/300x400"
                    alt="Women"
                    className="rounded-md"
                />
                <button className="absolute bottom-4 left-4 bg-white text-black py-2 px-4 rounded shadow">
                    Women
                </button>
            </div>
            <div className="relative">
                <img
                    src="https://via.placeholder.com/300x400"
                    alt="Accessories"
                    className="rounded-md"
                />
                <button className="absolute bottom-4 left-4 bg-white text-black py-2 px-4 rounded shadow">
                    Accessories
                </button>
            </div>
            <div className="relative">
                <img
                    src="https://via.placeholder.com/300x400"
                    alt="Kids"
                    className="rounded-md"
                />
                <button className="absolute bottom-4 left-4 bg-white text-black py-2 px-4 rounded shadow">
                    Kids
                </button>
            </div>
        </div>
    </section>
    )
}
export default EditorsPick
