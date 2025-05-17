
import BackgroundVideo from "./BackgroundVideo";

export default function HomeComponent() {
    return (
        <main className="relative min-h-screen flex flex-col items-center justify-center text-white z-10">
            <BackgroundVideo />
            <div className="z-10 text-center">
                <h1 className="text-4xl font-bold drop-shadow-xl">
                    Welcome to Pokémon World
                </h1>
            </div>
        </main>
    );
}
