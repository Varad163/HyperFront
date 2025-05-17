import React from 'react';
import sky from '../images/sky.jpg';
import green from '../images/green.jpg';
import alpha from '../images/alpha.jpg';
import Image from 'next/image';

function Font() {
    return (
        <div className="flex h-[120vh]"> {/* Increased height */}
            {/* Left side: Single large image */}
            <div className="w-1/2 flex items-center justify-center p-6">
                <Image
                    src={alpha}
                    alt="alpha"
                    width={700}
                    height={700}
                    className="object-contain rounded-xl"
                />
            </div>

            {/* Right side: Two stacked images */}
            <div className="w-1/2 flex flex-col justify-between p-6 space-y-6">
                <div className="h-1/2 flex items-center justify-center">
                    <Image
                        src={sky}
                        alt="sky"
                        width={700}
                        height={400}
                        className="object-cover w-full h-[300px] rounded-xl"
                    />
                </div>
                <div className="h-1/2 flex items-center justify-center">
                    <Image
                        src={green}
                        alt="greenary"
                        width={700}
                        height={400}
                        className="object-cover w-full h-[300px] rounded-xl"
                    />
                </div>
            </div>
        </div>
    );
}

export default Font;
