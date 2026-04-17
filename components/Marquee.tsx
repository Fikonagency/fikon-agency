'use client';

import { motion } from 'framer-motion';

const TEXT = 'Reklambyrå · Malmö · Film · Foto · Identitet · Sedan 2026 · ';

export default function Marquee() {
  return (
    <div className="relative bg-plommon text-cream overflow-hidden py-6 md:py-8">
      <motion.div
        className="flex whitespace-nowrap will-change-transform"
        animate={{ x: ['0%', '-50%'] }}
        transition={{ duration: 42, repeat: Infinity, ease: 'linear' }}
      >
        {Array.from({ length: 8 }).map((_, i) => (
          <span
            key={i}
            className="font-display text-3xl md:text-5xl italic px-6 md:px-10"
          >
            {TEXT}
          </span>
        ))}
      </motion.div>
    </div>
  );
}
