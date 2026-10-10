'use client';

import React, { useState, useEffect } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-black/90 backdrop-blur-lg border-b border-neutral-800/80 py-4'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#"
          className="group flex items-center gap-2 font-black tracking-[0.25em] text-xl md:text-2xl text-white uppercase hover:text-neutral-300 transition-colors"
        >
          <span>CYBERFRAME</span>
          <span className="inline-block w-2 h-2 bg-white rounded-full group-hover:scale-125 transition-transform"></span>
        </a>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-10">
          <button
            onClick={() => scrollToSection('work')}
            className="text-xs font-semibold tracking-widest text-neutral-400 hover:text-white uppercase transition-colors"
          >
            Work
          </button>
          <button
            onClick={() => scrollToSection('services')}
            className="text-xs font-semibold tracking-widest text-neutral-400 hover:text-white uppercase transition-colors"
          >
            Services
          </button>
          <button
            onClick={() => scrollToSection('why-us')}
            className="text-xs font-semibold tracking-widest text-neutral-400 hover:text-white uppercase transition-colors"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection('faq')}
            className="text-xs font-semibold tracking-widest text-neutral-400 hover:text-white uppercase transition-colors"
          >
            FAQ
          </button>
        </div>

        {/* Action Button */}
        <div className="hidden md:flex items-center">
          <a
            href="mailto:contact@cyberframe.online?subject=Project%20Inquiry%20-%20CYBERFRAME"
            className="group relative inline-flex items-center gap-2 px-6 py-2.5 bg-white text-black font-bold text-xs uppercase tracking-wider rounded-full hover:bg-neutral-200 transition-all duration-300 hover:scale-105"
          >
            <span>Let's Talk</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        {/* Mobile Toggle Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-white p-2 hover:text-neutral-300 transition-colors"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-black/95 border-b border-neutral-800 px-6 py-8 flex flex-col gap-6 animate-in slide-in-from-top duration-300">
          <button
            onClick={() => scrollToSection('work')}
            className="text-left text-lg font-bold uppercase tracking-widest text-neutral-300 hover:text-white"
          >
            Work
          </button>
          <button
            onClick={() => scrollToSection('services')}
            className="text-left text-lg font-bold uppercase tracking-widest text-neutral-300 hover:text-white"
          >
            Services
          </button>
          <button
            onClick={() => scrollToSection('why-us')}
            className="text-left text-lg font-bold uppercase tracking-widest text-neutral-300 hover:text-white"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection('faq')}
            className="text-left text-lg font-bold uppercase tracking-widest text-neutral-300 hover:text-white"
          >
            FAQ
          </button>
          <a
            href="mailto:contact@cyberframe.online?subject=Project%20Inquiry%20-%20CYBERFRAME"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-black font-bold text-sm uppercase tracking-wider rounded-full hover:bg-neutral-200 transition-all mt-2"
          >
            <span>Let's Talk</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      )}
    </nav>
  );
}
