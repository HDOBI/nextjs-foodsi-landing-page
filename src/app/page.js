import Image from "next/image";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import CoverVideo from "./components/CoverVideo";
import Service from "./components/Service";

export default function Home() {
  return (
    <div>
      <Hero />
      <CoverVideo/>
      <Service/>
    </div>
  );
}
