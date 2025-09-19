'use client';

import React, { useRef, useState, useEffect } from 'react';
import Navbar from '@/components/navbar';

export default function ScrollWrapper({ children }) {
  const ref = useRef(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        setIsScrolled(ref.current.scrollTop > 10);
      }
    };

    const el = ref.current;
    if (el) el.addEventListener('scroll', handleScroll);

    return () => {
      if (el) el.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div ref={ref} className="h-200vh overflow-y-scroll">
      <Navbar isScrolled={isScrolled} isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      {children}
    </div>
  );
}
