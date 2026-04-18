'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { photos as ALL_PHOTOS } from '@/lib/data';

export default function CaseFlash({
  title,
  images
}: {
  title: string;
  images: string[];
}) {
  const [frame, setFrame] = useState(0);
  const [done, setDone] = useState(false);

  // Start with project gallery images, then pad with the wider photo pool
  // (minus duplicates) so the flash feels longer and more varied.
  const extras = ALL_PHOTOS.filter((p) => !images.includes(p));
  const frames =
    images.length > 0 ? [...images, ...images, ...extras].slice(0, 14) : extras.slice(0, 10);

  const flashDuration = 130;
  const lastFrameHold = 1000;

  useEffect(() => {
    if (frames.length === 0) {
      const t = setTimeout(() => setDone(true), 900);
      return () => clearTimeout(t);
    }
    // Hold the very last frame for a beat, then trigger exit.
    if (frame === frames.length - 1) {
      const t = setTimeout(() => setDone(true), lastFrameHold);
      return () => clearTimeout(t);
    }
    const t = setTimeout(() => setFrame((f) => f + 1), flashDuration);
    return () => clearTimeout(t);
  }, [frame, frames.length]);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="fixed inset-0 z-[90] bg-plommon overflow-hidden"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          {frames.map((name, i) => (
            <div
              key={name + i}
              className="absolute inset-0 transition-opacity duration-[500ms]"
              style={{ opacity: i === frame ? 1 : 0 }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`/images/${name}-1600.webp`}
                alt=""
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-plommon/35" />
            </div>
          ))}
          <div className="relative z-10 h-full w-full flex items-center justify-center px-6">
            <div className="text-center">
              <p className="text-cream/85 text-[10px] md:text-xs tracking-[0.5em] uppercase mb-6">
                Fikon Agency
              </p>
              <h1 className="font-display italic text-cream text-5xl md:text-8xl lg:text-[9rem] leading-[0.95] text-balance drop-shadow-[0_4px_40px_rgba(42,19,24,0.7)]">
                {title}
              </h1>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
