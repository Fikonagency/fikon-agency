'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function PhotoStrip({ photos }: { photos: string[] }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start']
  });
  const x = useTransform(scrollYProgress, [0, 1], ['5%', '-35%']);

  return (
    <section
      ref={ref}
      className="relative bg-cream border-t border-plommon/10 py-20 md:py-28 overflow-hidden"
    >
      <motion.div
        style={{ x }}
        className="flex gap-5 md:gap-7 will-change-transform"
      >
        {photos.concat(photos).map((p, i) => (
          <div
            key={i}
            className="relative w-[260px] md:w-[420px] aspect-[4/5] flex-shrink-0 overflow-hidden bg-plommon/5"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`/images/${p}-1600.webp`}
              alt=""
              className="absolute inset-0 w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        ))}
      </motion.div>
    </section>
  );
}
