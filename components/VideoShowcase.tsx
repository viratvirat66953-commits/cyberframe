'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface ReelItem {
  id: string;
  title: string;
  views: string;
  src: string;
}

const reels: ReelItem[] = [
  {
    id: 'reel-1',
    title: 'FinTech Kinetic Reel',
    views: '1.4M Views',
    src: '/videos/reel1.mp4',
  },
  {
    id: 'reel-2',
    title: 'Web3 Viral Short',
    views: '890K Views',
    src: '/videos/reel2.mp4',
  },
  {
    id: 'reel-3',
    title: 'Cyberpunk 3D Cut',
    views: '2.1M Views',
    src: '/videos/reel3.mp4',
  },
  {
    id: 'reel-4',
    title: 'High-Retention Motion',
    views: '650K Views',
    src: '/videos/reel4.mp4',
  },
];

export default function VideoShowcase() {
  return (
    <section id="work" className="py-24 bg-black/60 backdrop-blur-md px-6 md:px-12 border-b border-neutral-800/80">
      <div className="max-w-7xl mx-auto">
        {/* Giant Header: LATEST WORK */}
        <div className="mb-14">
          <span className="text-xs font-mono tracking-widest text-neutral-500 uppercase">
            // 01 . SELECTED SHOWCASE
          </span>
          <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase tracking-tight text-white mt-2">
            LATEST <span className="text-outline">WORK</span>
          </h2>
          <p className="text-neutral-400 text-base md:text-lg max-w-xl font-light mt-4">
            High-retention 9:16 vertical reels engineered for viral traction, kinetic pacing, and cinematic soundscapes.
          </p>
        </div>

        {/* Pure 9:16 Vertical 4-Reel Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto px-6">
          {reels.map((reel, index) => (
            <motion.div
              key={reel.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex justify-center"
            >
              <div className="relative flex flex-col w-full rounded-2xl overflow-hidden border border-neutral-800 bg-neutral-950 shadow-2xl group hover:border-neutral-600 transition-colors duration-300">
                {/* Views Badge */}
                <div className="absolute top-3 right-3 z-10 px-2.5 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/10 text-[10px] text-emerald-400 font-mono pointer-events-none">
                  ● {reel.views || '1M+ Views'}
                </div>

                {/* 9:16 Video Player Container */}
                <div className="relative w-full aspect-[9/16] bg-black overflow-hidden">
                  <video
                    src={reel.src}
                    controls
                    playsInline
                    preload="metadata"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Card Info */}
                <div className="p-3 bg-neutral-950 border-t border-neutral-800">
                  <h4 className="text-xs font-bold text-white uppercase tracking-wider">{reel.title}</h4>
                  <p className="text-[10px] text-neutral-400 font-mono mt-0.5">EDITED BY CYBERFRAME STUDIO</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
