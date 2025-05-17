import React from 'react';
import gun from '../videos/gun.gif';
import bottle from '../videos/bottle.gif';
import tree from '../videos/tree.gif';
import fire from '../videos/fire.gif';
import Image from 'next/image';

const items = [
    {
        gif: gun,
        alt: 'Gun Animation',
        text: [
            <>
                This is a <span className="text-red-500">powerful</span> weapon.
            </>,
            <>
                Designed for <span className="text-red-500">precision</span> and speed.
            </>,
            <>
                Used in <span className="text-red-500">futuristic</span> battlefields.
            </>
        ]
    },
    {
        gif: bottle,
        alt: 'Bottle Animation',
        text: [
            <>
                A <span className="text-red-500">bottle</span> of innovation.
            </>,
            <>
                Crafted for <span className="text-red-500">sustainability</span>.
            </>,
            <>
                Every drop tells a <span className="text-red-500">story</span>.
            </>
        ]
    },
    {
        gif: tree,
        alt: 'Tree Animation',
        text: [
            <>
                <span className="text-red-500">Nature</span> at its best.
            </>,
            <>
                Strong <span className="text-red-500">roots</span>, green leaves.
            </>,
            <>
                Our planet’s true <span className="text-red-500">lungs</span>.
            </>
        ]
    },
    {
        gif: fire,
        alt: 'Fire Animation',
        text: [
            <>
                <span className="text-red-500">Ignite</span> your imagination.
            </>,
            <>
                Fire that fuels <span className="text-red-500">creativity</span>.
            </>,
            <>
                Burning bright with <span className="text-red-500">passion</span>.
            </>
        ]
    }
];

export default function Caranime() {
    return (
        <section className="bg-white py-20 px-4">
            <div className="max-w-6xl mx-auto flex flex-col gap-24">
                {items.map((item, index) => (
                    <div
                        key={index}
                        className={`flex flex-col md:flex-row items-center justify-between gap-10 ${index % 2 === 1 ? 'md:flex-row-reverse' : ''
                            }`}
                    >
                        <div className="w-full md:w-1/2">
                            <Image
                                src={item.gif}
                                alt={item.alt}
                                className="w-full h-auto"
                            />
                        </div>
                        <div className="w-full md:w-1/2 text-black text-3xl md:text-5xl font-extrabold space-y-6 leading-tight">
                            {item.text.map((line, i) => (
                                <p key={i}>{line}</p>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
