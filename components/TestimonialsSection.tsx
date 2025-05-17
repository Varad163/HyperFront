// components/TestimonialsSection.tsx
import Image from "next/image";

export default function TestimonialsSection() {
    return (
        <section className="bg-[#f14c4c] text-black py-24 px-8 font-sans">
            <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-16">
                {/* Testimonial 1 */}
                <div className="flex flex-col justify-between h-full">
                    <div>
                        <div className="text-8xl font-extrabold leading-none mb-6 text-black">“</div>
                        <p className="text-xl leading-relaxed mb-8 font-semibold">
                            Collaborating with the BOND team has been transformative. Their unique ability to
                            merge strategy and creativity with bold design will shape the future of our destination.
                        </p>
                        <div className="text-lg font-bold">Kristiina Kukkohovi</div>
                        <div className="text-base text-black/80">CEO, Visit Turku Archipelago</div>
                    </div>
                    <img src="/logos/saaristo.png" alt="Saaristo Logo" className="h-12 mt-8" />
                </div>

                {/* Testimonial 2 */}
                <div className="flex flex-col justify-between h-full">
                    <div>
                        <div className="text-8xl font-extrabold leading-none mb-6 text-black">“</div>
                        <p className="text-xl leading-relaxed mb-8 font-semibold">
                            BOND understood our business and industry, and the importance of breaking conventions.
                            Beautiful work that helps get us where we want to go and beyond.
                        </p>
                        <div className="text-lg font-bold">Elina Niemistö</div>
                        <div className="text-base text-black/80">VP Marketing, Vincit</div>
                    </div>
                    <img src="../images/garden.jpg" alt="Vincit Logo" className="h-12 mt-8" />
                </div>

                {/* Testimonial 3 */}
                <div className="flex flex-col justify-between h-full">
                    <div>
                        <div className="text-8xl font-extrabold leading-none mb-6 text-black">“</div>
                        <p className="text-xl leading-relaxed mb-8 font-semibold">
                            The most fruitful collaboration I’ve been a part of in my whole career.
                        </p>
                        <div className="text-lg font-bold">Tatu Laine</div>
                        <div className="text-base text-black/80">Design, Futureplay</div>
                    </div>
                    <img src="/logos/garden.png" alt="Merge Gardens Logo" className="h-12 mt-8" />
                </div>
            </div>
        </section>
    );
}
