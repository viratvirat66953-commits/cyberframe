'use client';

import React, { useEffect, useRef, useState } from 'react';

const TOTAL_FRAMES = 192;

export default function GlobalBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const imagesRef = useRef<(HTMLImageElement | null)[]>(new Array(TOTAL_FRAMES).fill(null));
  const currentFrameRef = useRef<number>(0);
  const targetFrameRef = useRef<number>(0);
  const [hasScrolled, setHasScrolled] = useState<boolean>(false);

  // Format frame URL: /frames/frame_0001.jpg
  const getFrameUrl = (index: number) => {
    const frameNum = String(index).padStart(4, '0');
    return `/frames/frame_${frameNum}.jpg`;
  };

  useEffect(() => {
    // 1. Autoplay video background immediately
    if (videoRef.current) {
      videoRef.current.defaultMuted = true;
      videoRef.current.muted = true;
      videoRef.current.play().catch(() => {});
    }

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: false });
    if (!ctx) return;

    // Render frame to canvas with aspect cover math
    const renderFrame = (frameIndex: number) => {
      const clampedIndex = Math.max(0, Math.min(TOTAL_FRAMES - 1, Math.round(frameIndex)));
      let img = imagesRef.current[clampedIndex];

      // Fallback to nearest loaded image if target frame is downloading
      if (!img || !img.complete) {
        for (let offset = 1; offset < TOTAL_FRAMES; offset++) {
          if (clampedIndex - offset >= 0 && imagesRef.current[clampedIndex - offset]?.complete) {
            img = imagesRef.current[clampedIndex - offset];
            break;
          }
          if (clampedIndex + offset < TOTAL_FRAMES && imagesRef.current[clampedIndex + offset]?.complete) {
            img = imagesRef.current[clampedIndex + offset];
            break;
          }
        }
      }

      if (!img || !img.complete) return;

      const cw = canvas.width;
      const ch = canvas.height;
      const iw = img.naturalWidth || img.width;
      const ih = img.naturalHeight || img.height;

      if (cw === 0 || ch === 0 || iw === 0 || ih === 0) return;

      const canvasRatio = cw / ch;
      const imgRatio = iw / ih;

      let dw: number, dh: number;
      if (canvasRatio > imgRatio) {
        dw = cw;
        dh = cw / imgRatio;
      } else {
        dh = ch;
        dw = ch * imgRatio;
      }

      const ox = (cw - dw) / 2;
      const oy = (ch - dh) / 2;

      ctx.fillStyle = '#000000';
      ctx.fillRect(0, 0, cw, ch);
      ctx.drawImage(img, ox, oy, dw, dh);
    };

    const resizeCanvas = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);

      if (rect.width > 0 && rect.height > 0) {
        canvas.width = rect.width * dpr;
        canvas.height = rect.height * dpr;
        renderFrame(currentFrameRef.current);
      }
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas, { passive: true });

    // Preload Frame 1 immediately
    const firstImg = new Image();
    firstImg.src = getFrameUrl(1);
    firstImg.onload = () => {
      imagesRef.current[0] = firstImg;
      resizeCanvas();
      renderFrame(0);
    };

    // Preload remaining frames across the page
    const preloadFrames = async () => {
      for (let i = 2; i <= TOTAL_FRAMES; i++) {
        const img = new Image();
        img.src = getFrameUrl(i);
        img.onload = () => {
          imagesRef.current[i - 1] = img;
        };
        if (i % 8 === 0) {
          await new Promise((r) => setTimeout(r, 20));
        }
      }
    };
    preloadFrames();

    // Track scroll across the ENTIRE document height (from top to bottom of website)
    const onScroll = () => {
      const scrollY = window.scrollY;
      const maxScroll = Math.max(
        document.documentElement.scrollHeight - window.innerHeight,
        1
      );
      const progress = Math.max(0, Math.min(1, scrollY / maxScroll));
      targetFrameRef.current = progress * (TOTAL_FRAMES - 1);

      if (!hasScrolled && scrollY > 5) {
        setHasScrolled(true);
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });

    // Smooth 60FPS Lerp loop
    let animId: number;
    let isRunning = true;

    const animLoop = () => {
      if (!isRunning) return;

      const diff = targetFrameRef.current - currentFrameRef.current;
      if (Math.abs(diff) > 0.01) {
        currentFrameRef.current += diff * 0.12;
        renderFrame(currentFrameRef.current);
      }

      animId = requestAnimationFrame(animLoop);
    };

    animId = requestAnimationFrame(animLoop);

    return () => {
      isRunning = false;
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('scroll', onScroll);
    };
  }, [hasScrolled]);

  return (
    <div className="fixed inset-0 w-screen h-screen z-0 pointer-events-none overflow-hidden select-none">
      {/* 1. Base Fullscreen Video (Autoplays continuously as ambient background) */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        poster="/hero.jpg"
        className="absolute inset-0 w-full h-full object-cover object-center"
        src="/hero.mp4"
      />

      {/* 2. Scroll-Driven 192-Frame Canvas (Smoothly interpolates with total page scroll) */}
      <canvas
        ref={canvasRef}
        className={`absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-300 ${
          hasScrolled ? 'opacity-100' : 'opacity-0'
        }`}
      />

      {/* 3. Global Ambient Cinematic Dark Vignette & Mesh (Enhances readability across all sections) */}
      <div className="absolute inset-0 bg-black/45 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/80 pointer-events-none" />
    </div>
  );
}
