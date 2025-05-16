import Navbar from "@/components/navbar";


    export default function Home() {
        return (
            <main className="flex min-h-screen flex-col items-center justify-center p-4">
                <h1 className="text-3xl font-bold mb-4">Welcome to Pokémon World</h1>
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full max-w-2xl rounded shadow-lg"
                >
                    <source src="/videos/pokemon-intro.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </main>
        );
    }
  
    