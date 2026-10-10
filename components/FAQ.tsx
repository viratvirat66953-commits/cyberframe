'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, HelpCircle } from 'lucide-react';

const faqItems = [
  {
    question: 'What is your standard turnaround time?',
    answer: 'Our standard turnaround time is 24 to 48 hours for standard short-form reels and TikTok cuts. Complex motion graphic projects or long-form documentaries are delivered within agreed milestone timelines.'
  },
  {
    question: 'How do revisions work?',
    answer: 'Every project includes 2 rounds of minor revisions per video (adjusting caption styles, music balance, scene trims, or graphic tweaks). Additional major structural revisions can be requested at our standard hourly editing rate.'
  },
  {
    question: 'How do I provide raw footage and assets?',
    answer: 'You can upload your raw video files, audio tracks, brand guidelines, and logos via Google Drive, Dropbox, Frame.io, or WeTransfer. Simply send us the folder link during project kickoff.'
  },
  {
    question: 'What deliverable formats do you provide?',
    answer: 'We deliver master files in uncompressed 4K horizontal (3840x2160) and 1080x1920 60fps vertical MP4 formats, optimized for YouTube, Instagram Reels, TikTok, and X (Twitter).'
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-black/60 backdrop-blur-md px-6 md:px-12 border-b border-neutral-800/80">
      <div className="max-w-4xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-xs font-mono tracking-widest text-neutral-500 uppercase">
            // 04 . FREQUENTLY ASKED QUESTIONS
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black uppercase text-white mt-2">
            GOT <span className="text-outline">QUESTIONS?</span>
          </h2>
          <p className="text-neutral-400 text-sm md:text-base mt-4 font-light">
            Everything you need to know about working with CYBERFRAME studio.
          </p>
        </div>

        {/* Expandable Accordion List */}
        <div className="space-y-4">
          {faqItems.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className={`border rounded-2xl transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? 'bg-neutral-950 border-white'
                    : 'bg-black border-neutral-900 hover:border-neutral-800'
                }`}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="text-lg md:text-xl font-bold uppercase tracking-wide text-white">
                    {item.question}
                  </span>
                  <div className={`p-2 rounded-full border transition-colors ${isOpen ? 'bg-white text-black border-white' : 'bg-neutral-900 text-neutral-400 border-neutral-800'}`}>
                    {isOpen ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="px-6 pb-6 border-t border-neutral-900 pt-4"
                    >
                      <p className="text-neutral-300 text-sm md:text-base leading-relaxed font-light">
                        {item.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
