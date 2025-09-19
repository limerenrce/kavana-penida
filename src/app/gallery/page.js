"use client";

import React, { useEffect, useRef, useState } from "react";
import Navbar from "@/components/navbar";
import Image from "next/image";
import { assets } from "@/assets/assets"; 
import Footer from "@/components/footer";

export default function Gallery() {
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

  const assetImages = Object.values(assets);

  return (
    <div ref={scrollRef} className="min-h-screen h-88 md:h-64 overflow-y-auto">
      <Navbar
        isScrolled={isScrolled}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
      />
      <section className="relative min-h-[400] flex items-center justify-center text-center">
        {/* Background Image */}
        <div className="absolute inset-0">
          <div className="bg-[url('/hero.avif')] bg-cover bg-center bg-no-repeat w-full h-full" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/50" />
        </div>

        {/* Content */}
        <div className="relative z-20 px-4 mt-16">
          <h1 className="text-4xl md:text-6xl font-playfair font-bold text-white drop-shadow-lg">
            GALLERY
          </h1>
        </div>
      </section> 
      <p className="text-sm mt-16 text-slate-500 text-center max-w-lg mx-auto">
        A visual collection of our most recent works - each piece crafted with
        intention, emotion, and style.
      </p>

      <div className="flex flex-wrap items-center justify-center mt-16 mx-auto gap-4">
        {assetImages.map((img, index) => (
          <Image
            width={380}
            height={100}
            key={index}
            src={img}
            alt={`gallery-image-${index}`}
            className="h-80 object-cover rounded-lg hover:-translate-y-1 transition-all duration-300"
          />
        ))}
      </div>

       <div className="mt-40">
              <Footer />
            </div>
    </div>
  );
}
