"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function HyperFrontHero() {
    const wordRef = useRef<HTMLDivElement>(null);
    const taglineRef = useRef<HTMLParagraphElement>(null);
    const paragraphRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Animate word
        if (wordRef.current) {
            gsap.fromTo(
                wordRef.current,
                {
                    rotateX: 90,
                    opacity: 0,
                    transformOrigin: "top center",
                },
                {
                    rotateX: 0,
                    opacity: 1,
                    duration: 1.5,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: wordRef.current,
                        start: "top 80%",
                    },
                }
            );
        }

        // Animate tagline
        if (taglineRef.current) {
            gsap.fromTo(
                taglineRef.current,
                { opacity: 0, y: 40 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: taglineRef.current,
                        start: "bottom 80%",
                    },
                }
            );
        }

        // Animate paragraph section
        if (paragraphRef.current) {
            gsap.fromTo(
                paragraphRef.current,
                { opacity: 0, x: 50 },
                {
                    opacity: 1,
                    x: 0,
                    duration: 1.2,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: paragraphRef.current,
                        start: "bottom 80%",
                    },
                }
            );
        }
    }, []);

    return (
        <section className="hero">
            <div className="left">
                <div className="word" ref={wordRef}>
                    HyperFront
                </div>
                <p className="tagline" ref={taglineRef}>
                    You bring the opportunity. <br /> We'll build the brand to take it.
                </p>
            </div>

            <div className="right" ref={paragraphRef}>
                <p>
                    You’re shaking things up or inventing something new. You’re excited by
                    the possibilities ahead.
                </p>
                <p>
                    <strong>BOND</strong> is the global brand consultancy for you.
                </p>
                <p>
                    We use strategy, story and design to capture the full value of your
                    business opportunity, now and long into your future.
                </p>
            </div>

            <link
                href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap"
                rel="stylesheet"
            />

            <style jsx>{`
        .hero {
          min-height: 100vh;
          background: linear-gradient(135deg, #1e1e2f, #2c2c44);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 6rem 4rem;
          color: white;
          gap: 4rem;
          flex-wrap: wrap;
          perspective: 1000px;
        }

        .left,
        .right {
          flex: 1;
          min-width: 320px;
        }

        .left {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: flex-start;
        }

        .word {
          font-size: 10rem;
          font-weight: 900;
          font-family: "Bebas Neue", sans-serif;
          letter-spacing: 0.05em;
          background: linear-gradient(to right, #ffffff, #ff5ca1);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          text-shadow: 2px 2px 10px rgba(0, 0, 0, 0.3);
          margin-bottom: 2rem;
          opacity: 0;
        }

        .tagline {
          font-size: 2.2rem;
          font-weight: 400;
          line-height: 1.6;
          color: #f0f0f0;
          font-family: "Arial", sans-serif;
          opacity: 0;
        }

        .right {
          opacity: 0;
        }

        .right p {
          font-size: 1.5rem;
          line-height: 1.8;
          margin-bottom: 1.8rem;
          font-family: "Arial", sans-serif;
          color: #e0e0e0;
        }

        .right p strong {
          color: #ff5ca1;
        }

        @media (max-width: 768px) {
          .hero {
            flex-direction: column;
            padding: 4rem 2rem;
            text-align: center;
          }

          .word {
            font-size: 6rem;
            text-align: center;
          }

          .left {
            align-items: center;
          }

          .tagline {
            font-size: 1.6rem;
            margin-top: 1rem;
          }

          .right {
            margin-top: 3rem;
          }

          .right p {
            font-size: 1.3rem;
          }
        }
      `}</style>
        </section>
    );
}
