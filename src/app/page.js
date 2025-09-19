"use client";

import React, { useEffect, useRef, useState } from "react";
import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import Features from "@/components/feature"; 
import Experience from "@/components/experience";
import Selection from "@/components/selection";
import CallToAction from "@/components/call-to-action";
import Footer from "@/components/footer";
import Testimoni from "@/components/testimoni";
import Peak from "@/components/peak-gallery";
import BentoBox from "@/components/bento-box";

export default function Home() {
  const scrollRef = useRef(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (scrollRef.current) {
        setIsScrolled(scrollRef.current.scrollTop > 0);
      }
    };

    const el = scrollRef.current;
    if (el) {
      el.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (el) {
        el.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  return (
    <>
    <div ref={scrollRef} className="min-h-screen h-88 md:h-64 overflow-y-auto">
      <Navbar
        isScrolled={isScrolled}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
      />
      <Hero />
      <Features />
      <Experience />
      <Selection /> 
      <Testimoni/>
      <Peak/>
      <div   className="mt-32"></div>
      <CallToAction/>
      <Footer/>
    </div>
    </>
  );
}
