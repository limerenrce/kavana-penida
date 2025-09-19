"use client";

import React, { useEffect, useRef, useState } from "react";
import Navbar from "@/components/navbar";
import Image from "next/image";
import { topPicks } from "@/assets/assets"; 
import Footer from "@/components/footer";

export default function Menu() {
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

  const menuItems = Object.values(topPicks);

  return (
    <div ref={scrollRef} className="min-h-screen h-88 md:h-64 overflow-y-auto">
      <Navbar
        isScrolled={isScrolled}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
      />
      <section className="relative min-h-100 flex items-center justify-center text-center">
        {/* Background Image */}
        <div className="absolute inset-0">
          <div className="bg-[url('/hero.avif')] bg-cover bg-center bg-no-repeat w-full h-full" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/50" />
        </div>

        {/* Content */}
        <div className="relative z-20 px-4 mt-16">
          <h1 className="text-4xl md:text-6xl font-playfair font-bold text-white drop-shadow-lg">
            MENU
          </h1>
        </div>
      </section>

      <main className="px-4 md:px-20 max-w-screen-2xl mx-auto">
        {/* Top Picks Flip Cards */}
        <section>
          <h1 className="mt-16 text-4xl text-center font-bold text-green-900 mb-8">
            Top Picks
          </h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 justify-items-center">
            {menuItems.map((item, idx) => (
              <div
                key={idx}
                className="group w-80 h-64 [perspective:1000px] cursor-pointer"
              >
                <div className="relative w-full h-full transition-transform duration-800 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                  {/* Front Side */}
                  <div className="absolute w-full h-full [backface-visibility:hidden] rounded-md overflow-hidden border border-gray-200 shadow-md">
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={300}
                      height={300}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Back Side */}
                  <div className="absolute w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)] rounded-md bg-gradient-to-bl from-green-900 to-green-800  text-white p-4 flex flex-col justify-center items-center text-center shadow-md">
                    <h3 className="text-lg font-semibold mb-2">{item.name}</h3>
                    <p className="text-sm mb-4">{item.description}</p>
                    <span className="font-bold">{item.price}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Intro */}
        <section className="text-center mt-16 mb-12">
          <p className="text-slate-600 max-w-2xl mx-auto text-sm">
            To keep things simple, we provide a single PDF with all of our
            breakfast, lunch, dinner, and drink offerings. You can view it right
            here or download it to peruse offline.
          </p>
        </section>

        {/* PDF Embed */}
        <section className="flex flex-col items-center justify-center mb-20">
          <div className="w-full h-[700px] border-2 border-gray-300 shadow-lg rounded-lg overflow-hidden">
            <iframe
              src="/menu.pdf"
              className="w-full h-full"
              title="Kavana Penida Menu PDF"
            ></iframe>
          </div>
          <a
            href="/menu.pdf"
            download
            className="mt-4 inline-block bg-green-900 text-white px-6 py-2 rounded-full text-sm hover:bg-green-800 transition-all"
          >
            Download PDF
          </a>
        </section>
      </main>

       <div className="mt-40">
              <Footer />
            </div>
    </div>
  );
}
