"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function HyperFrontHero() {
    const textRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const letters = textRef.current?.querySelectorAll(".letter");

        if (letters && letters.length > 0) {
            gsap.set(letters, { y: 0, rotate: 0 });

            gsap.to(letters, {
                y: -15,
                rotate: 10,
                stagger: {
                    each: 0.08,
                    repeat: -1,
                    yoyo: true,
                },
                duration: 0.6,
                ease: "easeInOut",
            });
        }
    }, []);

    const text = "HyperFront";

    return (
        <div className="hero">
            <div className="text-wrapper" ref={textRef}>
                {text.split("").map((char, index) => (
                    <span key={index} className="letter">
                        {char}
                    </span>
                ))}
            </div>
            <p className="tagline">
                You bring the opportunity. <br /> We'll build the brand to take it.
            </p>

            <style jsx>{`
        .hero {
          height: 100vh;
          background-color: red;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          color: white;
          text-align: center;
        }

        .text-wrapper {
          font-size: 6rem;
          font-weight: 800;
          font-family: "Helvetica Neue", sans-serif;
          letter-spacing: 0.05em;
        }

        .letter {
          display: inline-block;
        }

        .tagline {
          margin-top: 2rem;
          font-size: 1.5rem;
          max-width: 600px;
          line-height: 1.4;
          font-family: "Arial", sans-serif;
        }
      `}</style>
        </div>
    );
}
