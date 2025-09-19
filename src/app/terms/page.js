"use client";

import React, { useEffect, useRef, useState } from "react";
import Navbar from "@/components/navbar";
import Image from "next/image";
import { assets } from "@/assets/assets";
import Feature from "@/components/feature";
import Footer from "@/components/footer";
import Testimoni from "@/components/testimoni";

export default function Terms() {
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
          <h1 className="text-4xl md:text-6xl font-bold text-white drop-shadow-lg">
            TERMS &amp; CONDITIONS
          </h1>
        </div>
      </section>

      <section className="py-16 fade-in">
        <div className="max-w-5xl mx-auto px-4">
          <p className="text-muted mb-4">
            These terms and conditions govern your use of our website and
            services. By visiting KAVANA PENIDA, booking a table or browsing our
            site, you agree to abide by these terms.
          </p>
          <h2 className="text-2xl font-semibold mt-8 mb-2">Reservations</h2>
          <p className="mb-4">
            Reservations are recommended to secure your preferred dining time.
            We request that changes or cancellations be made at least 24 hours
            in advance. Parties arriving more than 15 minutes late without
            notice may forfeit their table.
          </p>
          <h2 className="text-2xl font-semibold mt-8 mb-2">No‑Show Policy</h2>
          <p className="mb-4">
            We appreciate being informed if your plans change. Multiple no‑shows
            may result in restricted future booking privileges.
          </p>
          <h2 className="text-2xl font-semibold mt-8 mb-2">Use of Site</h2>
          <p className="mb-4">
            All content on this site is provided for informational purposes. You
            may not reproduce or redistribute any material without permission.
            We are not liable for third‑party websites linked from our pages.
          </p>
          <h2 className="text-2xl font-semibold mt-8 mb-2">Updates</h2>
          <p className="mb-4">
            We may update these terms occasionally. Updated terms will be posted
            here with a revised date. Continuing to use our services after
            changes constitutes acceptance of the new terms.
          </p>
          <p className="mt-8">
            If you have questions about these terms, please contact us at{" "}
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
