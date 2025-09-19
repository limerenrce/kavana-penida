import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";

export default function Experience() {
  return (
    <>
      <section className="mt-12">
        <div className="relative">
          {/* Image */}
          <Image
            width={1100}
            height={100}
            src={"/experience.png"}
            alt="Experiencing best of the best dine near Crystal Bay Beach Nusa penida Bali"
            className="h-auto object-cover"
          />

          {/* Overlay Card */}
          <div className="absolute transform translate-y-8 mr-28 h-[420] sm:translate-x-0 sm:top-10 sm:right-10 bg-gradient-to-bl from-green-900 to-green-800 rounded-lg p-6 z-10 w-[90%] sm:w-[400px] shadow-2xl">
            <h1 className="text-2xl font-bold sm:text-md font-playfair   text-white drop-shadow-lg">
              Only at Kavana Penida
            </h1>
            <p className="mt-4 text-sm font-light sm:text-base text-gray-100">
              At Kavana, we believe great food is more than just a meal — it’s a
              moment. Whether you’re winding down after a day at the beach or
              starting your evening with signature cocktails, our menu is
              thoughtfully crafted to celebrate the richness of Bali’s island
              produce and global inspirations.
            </p>
            <p className="text-gray-100 mt-4">
              Come for the food. Stay for the feeling.
              <br />
              <span className="font-bold">This is Kavana Penida.</span>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <a href="#menu">
                <button className="text-gray-200 hover:text-white transition-all duration-300 w-full sm:w-auto text-sm ">
                  Read more →
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* <section className="mt-16 relative min-h-screen">
        <div className="absolute inset-0">
          <div className="bg-[url('/experience.jpg')] bg-cover bg-center bg-no-repeat w-full h-full"></div> 
        </div>
        <div className="relative z-20 flex flex-col justify-center min-h-screen px-6 md:px-16 lg:px-[137px] text-white">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-6xl font-playfair font-bold drop-shadow-lg mb-6">KAVANA PENIDA</h1>
            <p className="mb-10 text-base md:text-lg text-gray-100 drop-shadow-md">
              10 minutes walk from Crystal Bay. Dine, drink, and unwind with island-fresh plates, signature cocktails, and easy vibes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#menu">
                <button className="bg-[#f9f4ea] text-[#1a5654] font-semibold px-6 py-3 rounded-full hover:bg-[#1a5654] hover:text-[#f9f4ea] transition-all duration-300 w-full sm:w-auto shadow-md">Read more</button>
              </a> 
            </div>
          </div>
        </div>
      </section> */}
    </>
  );
}
