'use client';

import React, { useEffect } from 'react';
import Lenis from 'lenis';
import GlobalBackground from '../components/GlobalBackground';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import MarqueeTicker from '../components/MarqueeTicker';
import VideoShowcase from '../components/VideoShowcase';
import ServicesList from '../components/ServicesList';
import WhyChooseUs from '../components/WhyChooseUs';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      touchMultiplier: 2,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <main className="relative min-h-screen text-white overflow-x-hidden selection:bg-white selection:text-black">
      {/* 0. FULL WEBSITE GLOBAL SCROLL ANIMATION BACKGROUND (Top to Bottom) */}
      <GlobalBackground />

      {/* 1. Navbar */}
      <Navbar />

      {/* 2. Hero Section */}
      <Hero />

      {/* 3. Marquee Ticker Banner */}
      <MarqueeTicker />

      {/* 4. Core Portfolio Video Showcase */}
      <VideoShowcase />

      {/* 5. Services List (Marcelo Design X Kinetic Style) */}
      <ServicesList />

      {/* 6. Why Choose Us (Accordion + Dynamic Preview) */}
      <WhyChooseUs />

      {/* 7. FAQ Section */}
      <FAQ />

      {/* 8. Footer */}
      <Footer />
    </main>
  );
}
