"use client";

import React, { useEffect, useRef, useState } from "react";
import Navbar from "@/components/navbar";
import Image from "next/image";
import { assets } from "@/assets/assets";
import Feature from "@/components/feature";
import Footer from "@/components/footer";
import Testimoni from "@/components/testimoni";

export default function About() {
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
            ABOUT US
          </h1>
        </div>
      </section>

      <Feature />

      <section className="flex flex-col md:flex-row items-center justify-center gap-10 max-md:px-4 mt-20">
        {/* Image Section */}
        <div className="relative shadow-2xl shadow-green-800/30 rounded-2xl overflow-hidden shrink-0">
          <Image
            width={600}
            height={100}
            className="w-full object-cover rounded-2xl"
            src={assets.restaurant_2}
            alt="Dining space at KAVANA"
          />
          {/* <div className="gap-1 max-w-72 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white size-16 flex items-center justify-center aspect-square backdrop-blur rounded-full">
            <svg
              width="15"
              height="18"
              viewBox="0 0 15 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.027 3.371c0-1.374 1.512-2.213 2.678-1.484l9.11 5.693a1.75 1.75 0 0 1 0 2.969l-9.11 5.693c-1.166.729-2.678-.11-2.678-1.484z"
                fill="#fff"
                stroke="#fff"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div> */}
        </div>

        {/* Text Section */}
        <div className="text-sm text-slate-600 max-w-lg">
          <h1 className="text-xl uppercase font-semibold text-slate-700">
            About Us
          </h1>
          <div className="w-24 h-[3px] rounded-full bg-gradient-to-r from-green-900 to-[#DDD9FF]"></div>

          <p className="mt-4">
            <strong>KAVANA PENIDA</strong> is a serene restaurant and bar
            nestled just a ten‑minute stroll from Crystal Bay Beach. Hidden
            amongst lush palms and bamboo pavilions, we invite you to linger
            over island‑fresh plates, Balinese classics, and signature cocktails
            from breakfast through dinner.
          </p>

          <p className="mt-4">
            Our concept marries open‑air dining with touches of elegance.
            Thatched roofs and airy pavilions frame views of the jungle, while
            our kitchen focuses on fresh seafood, locally grown produce and
            timeless recipes reimagined. Wander in from Crystal Bay with sandy
            toes and stay for handcrafted cocktails at sunset.
          </p>

          <p className="mt-4">
            Located in the Crystal Bay area of Nusa Penida, we are open daily.
            <span className="font-semibold">Breakfast is served from 7:30 am – 10:30 am (WITA/UTC+8), lunch is available all
            day, and dinner is served until 9:00 pm.</span> A ten‑minute walk from
            the beach brings you straight to our palm‑shaded entrance.
          </p>

          <p className="mt-4  font-semibold text-slate-700">
            <a
              href="/contact#booking"
              className="text-green-900 hover:underline"
            >
              Book now →
            </a>
          </p>
        </div>
      </section> 
      <div className="mt-40">
        <Footer />
      </div>
    </div>
  );
}
