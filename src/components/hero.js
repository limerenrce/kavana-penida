import Link from "next/link";
import React from "react";

export default function Hero() {
  return (
    <>
      <section className="relative min-h-screen">
        <div className="absolute inset-0">
          <div className="bg-[url('/hero.avif')] bg-cover bg-center bg-no-repeat w-full h-full"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/50"></div>
        </div>
        <div className="relative z-20 flex flex-col justify-center min-h-screen px-6 md:px-16 lg:px-[137px] text-white">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-6xl font-bold drop-shadow-lg mb-6">KAVANA PENIDA</h1>
            <p className="mb-10 max-w-xl text-base md:text-lg text-gray-100 drop-shadow-md">
              10 minutes walk from Crystal Bay. Dine, drink, and unwind with island-fresh plates, signature cocktails, and easy vibes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="#menu">
                <button className=" cursor-pointer bg-[#f9f4ea] text-[#1a5654] font-semibold px-6 py-3 rounded-full hover:bg-green-900 hover:text-[#f9f4ea] transition-all duration-300 w-full sm:w-auto shadow-md">View Menu</button>
              </Link>
              <Link href="#booking">
                <button className="cursor-pointer border border-gray-300 text-gray-200 hover:border-white hover:text-white px-6 py-3 rounded-full transition-all duration-300 w-full sm:w-auto shadow-md backdrop-blur-xs">Book a Table</button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
