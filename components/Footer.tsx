'use client';

import React, { useState } from 'react';
import { Copy, Check, ArrowUpRight, Send } from 'lucide-react';

export default function Footer() {
  const [copied, setCopied] = useState(false);
  const email = 'hello@cyberframe.studio';

  const copyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <footer className="relative bg-black/75 backdrop-blur-md text-white pt-24 pb-12 px-6 md:px-12 border-t border-neutral-800/80 overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Top Section: CTA & Direct Email Copy */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-20 border-b border-neutral-900 items-start">
          
          <div className="lg:col-span-7">
            <span className="text-xs font-mono tracking-widest text-neutral-500 uppercase">
              // READY TO BUILD VIRAL MOTION?
            </span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black uppercase tracking-tight text-white mt-2">
              LET'S ENGINE YOUR <span className="text-outline">NEXT EDIT.</span>
            </h2>
            <p className="text-neutral-400 text-base md:text-lg mt-4 max-w-lg font-light">
              Send us your raw footage or brief. We respond within 4 hours.
            </p>
          </div>

          <div className="lg:col-span-5 flex flex-col items-start lg:items-end justify-center h-full">
            <div className="w-full bg-neutral-950 p-6 rounded-3xl border border-neutral-800 space-y-4">
              <span className="text-xs font-mono text-neutral-400 uppercase tracking-wider block">
                DIRECT EMAIL CONTACT
              </span>
              
              <div className="flex items-center justify-between gap-3 bg-black p-3.5 rounded-2xl border border-neutral-800">
                <span className="font-mono text-sm md:text-base font-semibold text-white truncate">
                  {email}
                </span>
                <button
                  onClick={copyEmail}
                  className="flex items-center gap-1.5 px-3 py-1.5 bg-white text-black rounded-xl text-xs font-bold uppercase hover:bg-neutral-200 transition-colors shrink-0"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span>Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              <a
                href={`mailto:${email}?subject=New%20Project%20Inquiry%20-%20CYBERFRAME`}
                className="w-full flex items-center justify-center gap-2 py-3.5 bg-white text-black font-extrabold text-xs uppercase tracking-widest rounded-2xl hover:bg-neutral-200 transition-colors"
              >
                <span>Send Direct Email</span>
                <Send className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>

        {/* Middle Navigation & Socials */}
        <div className="py-12 flex flex-col md:flex-row items-center justify-between gap-8 border-b border-neutral-900">
          
          <div className="flex items-center gap-8 text-xs font-mono uppercase tracking-widest text-neutral-400">
            <a href="#work" className="hover:text-white transition-colors">Work</a>
            <a href="#services" className="hover:text-white transition-colors">Services</a>
            <a href="#why-us" className="hover:text-white transition-colors">About</a>
            <a href="#faq" className="hover:text-white transition-colors">FAQ</a>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-6">
            <a
              href="https://x.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-xs font-mono uppercase text-neutral-400 hover:text-white transition-colors"
            >
              <span>X (TWITTER)</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-xs font-mono uppercase text-neutral-400 hover:text-white transition-colors"
            >
              <span>YOUTUBE</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-xs font-mono uppercase text-neutral-400 hover:text-white transition-colors"
            >
              <span>INSTAGRAM</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
            <a
              href="https://discord.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-xs font-mono uppercase text-neutral-400 hover:text-white transition-colors"
            >
              <span>DISCORD</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

        </div>

        {/* Bottom Giant Brand Background Typography */}
        <div className="pt-16 pb-4 text-center overflow-hidden select-none pointer-events-none">
          <h1 className="text-[14vw] font-black uppercase tracking-tighter leading-none text-neutral-900/80 text-outline-thin">
            CYBERFRAME
          </h1>
        </div>

        {/* Copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between text-[11px] font-mono text-neutral-500 pt-6">
          <span>&copy; {new Date().getFullYear()} CYBERFRAME STUDIO. ALL RIGHTS RESERVED.</span>
          <span>HIGH-RETENTION MOTION &amp; CINEMATIC POST-PRODUCTION</span>
        </div>

      </div>
    </footer>
  );
}
