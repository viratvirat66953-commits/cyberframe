'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Plus, Minus } from 'lucide-react';

const servicesData = [
  {
    id: '01',
    title: 'SHORT-FORM RETENTION',
    subtitle: 'Reels, Shorts, and TikTok pacing engineered for maximum watch time.',
    tags: ['Hooks', 'Micro-Interactions', 'Dynamic Captions', 'Pattern Interrupts'],
    description: 'We edit short-form content with aggressive hook retention, sub-second scene cuts, kinetic text placement, and psychoacoustic audio triggers to hold audience attention past 90%+ completion rate.'
  },
  {
    id: '02',
    title: 'KINETIC MOTION GRAPHICS',
    subtitle: '3D camera tracking, custom HUD UI, and After Effects visual storytelling.',
    tags: ['3D Tracking', 'Custom HUD', 'UI Animations', 'VFX Compositing'],
    description: 'Transforming static concepts into high-octane visual motion. From custom futuristic HUD interfaces and glowing callouts to complex 3D element integration.'
  },
  {
    id: '03',
    title: 'CINEMATIC SOUND DESIGN',
    subtitle: 'Heavy layered SFX, risers, and immersive audio mixing.',
    tags: ['Layered SFX', 'Foley', 'Sub-Bass Risers', 'Master Mixing'],
    description: 'Visuals without heavy sound design fail to capture emotion. We hand-craft immersive soundscapes with multi-layered swooshes, impact hits, vinyl cracks, and custom audio spatialization.'
  },
  {
    id: '04',
    title: 'COLOR & VFX COMPOSITING',
    subtitle: 'Film emulation, clean masking, and visual post-production.',
    tags: ['Film Emulation', 'Green Screen Masking', 'Grain', 'Speed Ramps'],
    description: 'Elevating raw footage into film-grade assets. Detailed color grading, precise rotoscoping, object removal, speed ramps, and analog film texture overlays.'
  }
];

export default function ServicesList() {
  const [activeId, setActiveId] = useState<string | null>('01');

  const toggleAccordion = (id: string) => {
    setActiveId(activeId === id ? null : id);
  };

  return (
    <section id="services" className="py-24 bg-black/60 backdrop-blur-md px-6 md:px-12 border-b border-neutral-800/80">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-neutral-900">
          <div>
            <span className="text-xs font-mono tracking-widest text-neutral-500 uppercase">
              // 02 . CAPABILITIES
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase text-white mt-2">
              SERVICES
            </h2>
          </div>
          <p className="text-neutral-400 text-sm md:text-base max-w-md mt-4 md:mt-0 font-light">
            High-impact video post-production tailored for creators, high-growth startups, and viral brands.
          </p>
        </div>

        {/* Full-width Kinetic List (Marcelo Design X Style) */}
        <div className="divide-y divide-neutral-900 border-t border-b border-neutral-900">
          {servicesData.map((item) => {
            const isOpen = activeId === item.id;

            return (
              <div
                key={item.id}
                className="group cursor-pointer py-8 transition-colors duration-300 hover:bg-neutral-950/60 px-4 md:px-8 rounded-2xl"
                onClick={() => toggleAccordion(item.id)}
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                  
                  {/* Left: Index & Title */}
                  <div className="flex items-baseline gap-6 md:gap-10">
                    <span className="text-xs md:text-sm font-mono text-neutral-500 font-bold">
                      [{item.id}]
                    </span>
                    <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight text-white group-hover:text-outline-hover">
                      {item.title}
                    </h3>
                  </div>

                  {/* Right: Subtitle & Plus Icon */}
                  <div className="flex items-center gap-6 justify-between md:justify-end">
                    <span className="hidden xl:inline-block text-xs uppercase tracking-wider text-neutral-400 max-w-xs text-right font-mono">
                      {item.subtitle}
                    </span>
                    <div className="w-10 h-10 rounded-full border border-neutral-800 flex items-center justify-center text-white group-hover:border-white transition-colors">
                      {isOpen ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                    </div>
                  </div>
                </div>

                {/* Expandable Content Area */}
                {isOpen && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="mt-6 pt-6 border-t border-neutral-900/80 grid grid-cols-1 md:grid-cols-12 gap-6"
                  >
                    <div className="md:col-span-8">
                      <p className="text-neutral-300 text-base md:text-lg leading-relaxed font-normal">
                        {item.description}
                      </p>
                    </div>

                    <div className="md:col-span-4 flex flex-wrap gap-2 items-start justify-start md:justify-end">
                      {item.tags.map((tag, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-neutral-900 border border-neutral-800 text-xs font-mono uppercase text-neutral-300 rounded-full"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
