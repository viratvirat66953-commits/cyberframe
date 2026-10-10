'use client';

import React from 'react';

export default function Hero() {
  const scrollToWork = () => {
    const el = document.getElementById('work');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative w-full min-h-screen flex items-center justify-start overflow-hidden pt-20">
      
      {/* Subtle Horizontal Gradient on left for punchy headline contrast */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/30 to-transparent pointer-events-none" />

      {/* Floating Hero Content */}
      <div className="relative z-10 max-w-4xl px-6 md:px-16 py-24">
        {/* Status Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-xs text-neutral-200 mb-6 shadow-xl">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="tracking-wider uppercase font-medium">Available for new projects</span>
        </div>

        {/* Editorial Heading */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.08] text-white uppercase mb-8 drop-shadow-[0_4px_24px_rgba(0,0,0,0.9)]">
          CYBERFRAME IS A HIGH-RETENTION VIDEO STUDIO ENGINEERING{' '}
          <span className="text-transparent" style={{ WebkitTextStroke: '1.5px #ffffff' }}>
            VIRAL
          </span>{' '}
          MOTION, KINETIC TYPOGRAPHY, &amp; CINEMATIC SOUNDSCAPES.
        </h1>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-4">
          <button
            onClick={scrollToWork}
            className="px-7 py-3.5 rounded-full bg-white text-black font-bold text-sm hover:bg-neutral-200 transition-all shadow-2xl flex items-center gap-2 cursor-pointer hover:scale-105"
          >
            <span>▶</span> VIEW REEL
          </button>
          <a
            href="mailto:hello@cyberframe.studio?subject=Studio%20Booking%20-%20CYBERFRAME"
            className="px-7 py-3.5 rounded-full bg-black/60 backdrop-blur-md border border-white/25 text-white font-medium text-sm hover:bg-white/20 transition-all flex items-center gap-2 cursor-pointer hover:scale-105 shadow-xl"
          >
            <span>✦</span> CONTACT STUDIO
          </a>
        </div>
      </div>
    </section>
  );
}
