'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Clock, RefreshCw, Film, ShieldCheck, CheckCircle2 } from 'lucide-react';

const reasons = [
  {
    id: 'speed',
    icon: Clock,
    title: '24-48H EXPRESS DELIVERY',
    headline: 'Lightning-Fast Turnaround',
    description: 'We edit with dedicated render pipelines and optimized project templates. Standard video edits are turned around within 24 to 48 hours without compromising quality.',
    metric: '48h Max',
    previewText: 'PROJECT DELIVERY TIMELINE: 24 - 48 HOURS'
  },
  {
    id: 'revisions',
    icon: RefreshCw,
    title: '2 REVISION ROUNDS INCLUDED',
    headline: 'Guaranteed Polish & Precision',
    description: 'Every edit includes 2 rounds of minor feedback revisions to fine-tune pacing, subtitle colors, music mix levels, and motion graphic tweaks.',
    metric: '2 Rounds',
    previewText: 'REVISION WORKFLOW: 2 ROUNDS INCLUDED PER VIDEO'
  },
  {
    id: 'quality',
    icon: Film,
    title: 'WATERMARK-FREE 4K DELIVERY',
    headline: 'Uncompressed Master Files',
    description: 'Delivered in full 4K UHD or 1080x1920 60fps ProRes / H.264 master MP4 files, color-corrected, audio-mastered, and ready for immediate multi-platform publishing.',
    metric: '4K 60FPS',
    previewText: 'OUTPUT MASTER: 4K 60FPS UNCOMPRESSED MP4'
  }
];

export default function WhyChooseUs() {
  const [activeReason, setActiveReason] = useState(reasons[0]);

  return (
    <section id="why-us" className="py-24 bg-black/60 backdrop-blur-md px-6 md:px-12 border-b border-neutral-800/80">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="mb-16">
          <span className="text-xs font-mono tracking-widest text-neutral-500 uppercase">
            // 03 . STUDIO WORKFLOW &amp; ADVANTAGES
          </span>
          <h2 className="text-4xl md:text-6xl font-black uppercase text-white mt-2">
            WHY <span className="text-outline">CYBERFRAME</span>
          </h2>
        </div>

        {/* Split View Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Side Accordion List */}
          <div className="lg:col-span-6 flex flex-col gap-4">
            {reasons.map((item) => {
              const Icon = item.icon;
              const isActive = activeReason.id === item.id;

              return (
                <div
                  key={item.id}
                  onClick={() => setActiveReason(item)}
                  className={`p-6 rounded-2xl border cursor-pointer transition-all duration-300 ${
                    isActive
                      ? 'bg-neutral-950 border-white shadow-2xl'
                      : 'bg-black border-neutral-900 hover:border-neutral-700'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className={`p-3 rounded-xl border ${isActive ? 'bg-white text-black border-white' : 'bg-neutral-900 text-neutral-400 border-neutral-800'}`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <h3 className="text-xl md:text-2xl font-black uppercase text-white tracking-wide">
                        {item.title}
                      </h3>
                    </div>
                    <span className="font-mono text-xs font-bold text-neutral-400 px-3 py-1 bg-neutral-900 rounded-full border border-neutral-800">
                      {item.metric}
                    </span>
                  </div>

                  {isActive && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      transition={{ duration: 0.3 }}
                      className="mt-4 pt-4 border-t border-neutral-900"
                    >
                      <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-2">
                        {item.headline}
                      </h4>
                      <p className="text-sm text-neutral-400 leading-relaxed font-light">
                        {item.description}
                      </p>
                    </motion.div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Right Side Dynamic Preview Frame */}
          <div className="lg:col-span-6">
            <div className="relative aspect-square md:aspect-[4/3] rounded-3xl bg-neutral-950 border border-neutral-800 p-8 flex flex-col justify-between overflow-hidden shadow-2xl">
              
              {/* Dynamic Grid Background Pattern */}
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#171717_1px,transparent_1px),linear-gradient(to_bottom,#171717_1px,transparent_1px)] bg-[size:2rem_2rem] opacity-30" />
              
              {/* Top Header info */}
              <div className="relative z-10 flex items-center justify-between border-b border-neutral-800 pb-4">
                <span className="text-xs font-mono text-emerald-400 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  STUDIO ENGINE VERIFIED
                </span>
                <span className="text-xs font-mono text-neutral-500 uppercase">
                  CYBERFRAME OS // v2.6
                </span>
              </div>

              {/* Dynamic Center Stage Content */}
              <div className="relative z-10 my-auto text-center py-8">
                <motion.div
                  key={activeReason.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4 }}
                  className="space-y-4"
                >
                  <div className="inline-flex p-4 bg-white text-black rounded-2xl mb-2">
                    {React.createElement(activeReason.icon, { className: 'w-8 h-8' })}
                  </div>
                  <h4 className="text-3xl md:text-4xl font-black uppercase text-white tracking-tight">
                    {activeReason.headline}
                  </h4>
                  <p className="text-sm font-mono text-neutral-400 max-w-md mx-auto uppercase">
                    {activeReason.previewText}
                  </p>
                </motion.div>
              </div>

              {/* Bottom Feature Badges */}
              <div className="relative z-10 pt-4 border-t border-neutral-800 flex items-center justify-between text-xs font-mono text-neutral-400">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" /> 100% Guaranteed
                </span>
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" /> NDA Protected
                </span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
