import Image from "next/image";
import Navbar from "@/components/navbar";
import HomeComponent from "@/components/home";
import BackgroundVideo from "@/components/BackgroundVideo";
import HyperFrontHero from "@/components/HyperFrontHero";
import Fontpage from "@/components/font";
import CustomCursor from "@/components/CustomCursor";
export default function Home() {
  return (
   <div>
    <Navbar />
    <CustomCursor />
      <HomeComponent />
   <BackgroundVideo />
   <HyperFrontHero />
    
    <Fontpage />
   </div>
  );
}
