export default function Home() {
    return (
        <main className="relative w-full h-screen overflow-hidden">
            <video
                className="absolute top-0 left-0 w-full h-full object-cover z-0"
                src="/fullearth.mp4"
                autoPlay
                muted
                loop
                playsInline
            />
            <div className="relative z-10 flex items-center justify-center h-full">
                <h1 className="text-white text-5xl font-bold">Hello World</h1>
            </div>
        </main>
    );
}
  