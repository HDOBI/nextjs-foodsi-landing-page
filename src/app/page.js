import Image from "next/image";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import CoverVideo from "./components/CoverVideo";
import Service from "./components/Service";
import Testimonial from "./components/Testimonial";
import ContactUS from "./components/ContactUS";
import Footer from "./components/Footer";
import Price from "./components/Price";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <CoverVideo />
      <Service />
      <Testimonial />
      <Price />
      <ContactUS />
      <Footer />
    </div>
  );
}
