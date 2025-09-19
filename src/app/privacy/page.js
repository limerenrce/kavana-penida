"use client";

import React, { useEffect, useRef, useState } from "react";
import Navbar from "@/components/navbar";
import Image from "next/image";
import { assets } from "@/assets/assets";
import Feature from "@/components/feature";
import Footer from "@/components/footer";
import Testimoni from "@/components/testimoni";

export default function Privacy() {
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
          <h1 className="text-4xl md:text-6xl font-bold text-white drop-shadow-lg">
            PRIVACY POLICY
          </h1>
        </div>
      </section>

      <section className="py-16 fade-in">
        <div className="max-w-5xl mx-auto px-4">
          <p className="text-muted mb-4">
            Your privacy is important to us. This policy explains what
            information we collect when you visit our website or make a
            reservation, and how we use and protect that information.
          </p>
          <h2 className="text-2xl font-semibold mt-8 mb-2">
            Information We Collect
          </h2>
          <p className="mb-4">
            We collect information you provide directly, such as your name,
            email address and booking details when you fill out our reservation
            form. We also collect anonymous analytics data to understand website
            traffic and improve the user experience.
          </p>
          <h2 className="text-2xl font-semibold mt-8 mb-2">
            How We Use Information
          </h2>
          <p className="mb-4">
            Your contact details are used solely for managing your reservation
            and responding to inquiries. We do not sell or share your personal
            information with third parties except as required by law.
          </p>
          <h2 className="text-2xl font-semibold mt-8 mb-2">Cookies</h2>
          <p className="mb-4">
            Our website may use cookies to remember your preferences and analyze
            site usage. You can adjust your browser settings to refuse cookies.
          </p>
          <h2 className="text-2xl font-semibold mt-8 mb-2">
            Changes to This Policy
          </h2>
          <p className="mb-4">
            We may update this privacy policy from time to time. Any changes
            will be posted on this page with an updated revision date.
          </p>
          <p className="mt-8">
            If you have any questions about our privacy practices, please
            contact us via{" "}
            <a
              href="mailto:hello@kavanapenida.com"
              className="text-primary underline"
            >
              info@kavanapenida.com
            </a>
            .
          </p>
        </div>
      </section>

      <div className="mt-40">
        <Footer />
      </div>
    </div>
  );
}
