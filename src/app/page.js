'use client'
import Image from "next/image";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import CoverVideo from "./components/CoverVideo";
import Service from "./components/Service";
import Testimonial from "./components/Testimonial";
import ContactUS from "./components/ContactUS";
import Footer from "./components/Footer";
import Price from "./components/Price";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

export default function Home() {

  useEffect(() => {
    AOS.init({
      duration: 1000, 
    });
  }, []);

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
