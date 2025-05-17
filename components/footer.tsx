import React from 'react'
import word1 from '../images/word1.avif'
import word2 from '../images/word2.avif'
import word3 from '../images/word3.png'
import word4 from '../images/word4.avif'

function Footer() {
    return (
        <div className="bg-black text-white min-h-screen px-4 py-24 text-center flex flex-col justify-center items-center space-y-12">
          
            <div className="flex flex-wrap justify-center items-center gap-6 text-4xl md:text-5xl font-extrabold tracking-wide">
                <span className="transition-transform duration-300 hover:scale-105">Helsinki</span>
                <img src={word1.src} alt="City 1" className="h-16 w-16 rounded-full object-cover shadow-lg hover:scale-110 transition-transform" />
                <span className="transition-transform duration-300 hover:scale-105">Dubai</span>
                <img src={word4.src} alt="City 4" className="h-16 w-16 rounded-full object-cover shadow-lg hover:scale-110 transition-transform" />
            </div>

            <div className="flex flex-wrap justify-center items-center gap-6 text-4xl md:text-5xl font-extrabold tracking-wide">
                <span className="transition-transform duration-300 hover:scale-105">New York</span>
                <img src={word2.src} alt="City 2" className="h-16 w-16 rounded-full object-cover shadow-lg hover:scale-110 transition-transform" />
                <span className="transition-transform duration-300 hover:scale-105">San Francisco</span>
                <img src={word3.src} alt="City 3" className="h-16 w-16 rounded-full object-cover shadow-lg hover:scale-110 transition-transform" />
                <span className="transition-transform duration-300 hover:scale-105">Tallinn</span>
            </div>

            <div className="text-4xl md:text-5xl font-extrabold leading-snug space-y-2 tracking-wide">
                <p className="transition-opacity duration-500 hover:opacity-90">20 Nationalities. 50 People.</p>
                <p className="transition-opacity duration-500 hover:opacity-90">Working as one global team.</p>
            </div>
        </div>
    )
}

export default Footer
