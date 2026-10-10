'use client';

import React from 'react';

export default function MarqueeTicker() {
  const marqueeItems = [
    'CYBERFRAME',
    'HIGH-RETENTION EDITS',
    'MOTION DESIGN',
    'SOUND DESIGN',
    'AFTER EFFECTS',
    '4K RENDERS',
    'COLOR GRADING',
    'KINETIC TYPOGRAPHY'
  ];

  return (
    <div className="relative w-full bg-black/40 backdrop-blur-md border-y border-neutral-800/80 py-6 overflow-hidden select-none">
      <div className="animate-marquee flex items-center whitespace-nowrap">
        {/* Render twice for seamless infinite loop */}
        {[...marqueeItems, ...marqueeItems, ...marqueeItems].map((item, idx) => (
          <div key={idx} className="flex items-center gap-8 mx-4">
            <span className="text-xl md:text-2xl lg:text-3xl font-black uppercase tracking-widest text-white hover:text-outline-hover transition-colors">
              {item}
            </span>
            <span className="text-white text-lg font-bold">✦</span>
          </div>
        ))}
      </div>
    </div>
  );
}
