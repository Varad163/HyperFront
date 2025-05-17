import Image from "next/image";
import Navbar from "@/components/navbar";
import HomeComponent from "@/components/home";
import BackgroundVideo from "@/components/BackgroundVideo";
import HyperFrontHero from "@/components/HyperFrontHero";
import Fontpage from "@/components/font";
import CustomCursor from "@/components/CustomCursor";
import TestimonialsSection from "@/components/TestimonialsSection";
import Caranime from "@/components/caranime";
import Footer from "@/components/footer";
export default function Home() {
  return (
   <div>
    <Navbar />
    <CustomCursor />
      <HomeComponent />
   <BackgroundVideo />
   <HyperFrontHero />
    
    <TestimonialsSection />
    <Fontpage />
    <Caranime />
   
    <Footer />
   </div>
  );
}
