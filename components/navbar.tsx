import Link from 'next/link';

export default function Navbar() {
    return (
        <nav className="bg-black text-white w-full">
            <div className="max-w-screen-xl mx-auto px-8 py-5 flex items-center justify-between">
                {/* Logo */}
                <div className="text-4xl font-bold tracking-widest font-orbitron">
                    <Link href="/">HyperFront</Link>
                </div>

                {/* Nav Links */}
                <ul className="flex gap-10 font-orbitron text-lg font-medium">
                    <li><Link href="#work" className="hover:text-gray-400 transition">Work</Link></li>
                    <li><Link href="#whatwedo" className="hover:text-gray-400 transition">What We Do</Link></li>
                    <li><Link href="#us" className="hover:text-gray-400 transition">Us</Link></li>
                    <li><Link href="#contact" className="hover:text-gray-400 transition">Contact</Link></li>
                    <li><Link href="#journal" className="hover:text-gray-400 transition">Journal</Link></li>
                </ul>
            </div>
        </nav>
    );
}
