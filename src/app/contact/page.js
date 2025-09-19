"use client";

import React, { useEffect, useRef, useState } from "react";
import Navbar from "@/components/navbar";
import Image from "next/image";
import { assets } from "@/assets/assets";
import Feature from "@/components/feature";
import CallToAction from "@/components/call-to-action";
import Footer from "@/components/footer";
import Link from "next/link";

export default function Contact() {
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
      <section className="relative min-h-[400] flex items-center justify-center text-center">
        {/* Background Image */}
        <div className="absolute inset-0">
          <div className="bg-[url('/hero.avif')] bg-cover bg-center bg-no-repeat w-full h-full" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/50" />
        </div>

        {/* Content */}
        <div className="relative z-20 px-4 mt-16">
          <h1 className="text-4xl md:text-6xl font-playfair font-bold text-white drop-shadow-lg">
            GET IN TOUCH
          </h1>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 lg:py-20">
          <div className="max-w-3xl text-center sm:text-center md:mx-auto md:mb-12">
            <p className="mx-auto max-w-3xl text-xl">
              We are always ready to support you.
            </p>
          </div>

          <div className="flex items-stretch justify-center">
            <div className="grid md:grid-cols-2">
              <div className="h-full pr-6">
                <p className="mt-4 text-lg ">
                  You can reach us using the communication channels below.
                </p>
                <ul>
                  <li className="mt-12 flex">
                    <div className="flex h-10 w-10 items-center justify-center rounded bg-green-900 text-gray-50">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-6 w-6"
                      >
                        <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"></path>
                        <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z"></path>
                      </svg>
                    </div>
                    <div className="ml-4 mb-4">
                      <h3 className="text-lg font-medium leading-6 text-gray-900">
                        Our Address
                      </h3>
                      <p>Crystal Bay area, Nusa Penida</p>
                      <p>Bali 80771</p>
                    </div>
                  </li>
                  <li className="mt-2 flex">
                    <div className="flex h-10 w-10 items-center justify-center rounded bg-green-900 text-gray-50">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-6 w-6"
                      >
                        <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2"></path>
                        <path d="M15 7a2 2 0 0 1 2 2"></path>
                        <path d="M15 3a6 6 0 0 1 6 6"></path>
                      </svg>
                    </div>
                    <div className="ml-4 mb-4">
                      <h3 className="text-lg font-medium leading-6 text-gray-900">
                        Contact
                      </h3>
                      <Link href="wa.me/+6281237558789">
                        {" "}
                        <p>WhatsApp: +62 812‑3755‑8789</p>
                      </Link>
                      <Link href="https://www.instagram.com/kavanapenida/">
                        {" "}
                        <p>Instagram: @kavanapenida</p>
                      </Link>
                      <Link href="mailto:info@kavanapenida.com">
                        {" "}
                        <p>Email: info@kavanapenida.com</p>
                      </Link>
                    </div>
                  </li>
                  <li className="mt-2 flex">
                    <div className="flex h-10 w-10 items-center justify-center rounded bg-green-900 text-gray-50">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-6 w-6"
                      >
                        <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"></path>
                        <path d="M12 7v5l3 3"></path>
                      </svg>
                    </div>
                    <div className="ml-4 mb-4">
                      <h3 className="text-lg font-medium leading-6 text-gray-900">
                        Working hours
                      </h3>
                      <p>Daily: 08:00 - 22:00 (WITA/UTC+8)</p>
                    </div>
                  </li>
                </ul>
              </div>
              <div
                className="card h-fit max-w-6xl px-0 md:px-12  md:py-4"
                id="form"
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3943.740234810322!2d115.46281197785515!3d-8.71619906898636!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd26f4206908fcf%3A0x5d16d87993421a1c!2sMahaloka%20Resto!5e0!3m2!1sen!2sid!4v1758246096828!5m2!1sen!2sid"
                  width="600"
                  height="450"
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CallToAction />
      <Footer />
    </div>
  );
}
