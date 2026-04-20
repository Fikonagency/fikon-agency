'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start']
  });

  const progress = useSpring(scrollYProgress, {
    stiffness: 180,
    damping: 26,
    mass: 0.35
  });

  const wordmarkScale = useTransform(progress, [0, 0.45], [1, 0.94]);
  const wordmarkY = useTransform(progress, [0, 0.55], ['0%', '18%']);
  const wordmarkOpacity = useTransform(progress, [0, 0.25, 0.55], [1, 0.85, 0]);

  const imageScale = useTransform(progress, [0, 1], [1, 1.06]);
  const imageY = useTransform(progress, [0, 1], ['0%', '10%']);

  return (
    <section
      ref={ref}
      id="top"
      className="relative h-[100svh] min-h-[640px] w-full overflow-hidden bg-cream"
    >
      <motion.div
        style={{ scale: imageScale, y: imageY }}
        className="absolute inset-0 will-change-transform"
      >
        <picture>
          <source
            type="image/avif"
            srcSet="/images/0Y9A0185-800.avif 800w, /images/0Y9A0185-1600.avif 1600w, /images/0Y9A0185-2400.avif 2400w"
            sizes="120vw"
          />
          <source
            type="image/webp"
            srcSet="/images/0Y9A0185-800.webp 800w, /images/0Y9A0185-1600.webp 1600w, /images/0Y9A0185-2400.webp 2400w"
            sizes="120vw"
          />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/0Y9A0185-2400.webp"
            alt=""
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[115%] h-[115%] max-w-none object-cover"
          />
        </picture>
      </motion.div>

      <div aria-hidden className="absolute inset-0 bg-plommon/35 pointer-events-none" />

      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 h-48 md:h-64 bg-gradient-to-t from-cream/90 via-cream/35 to-transparent pointer-events-none"
      />

      <h1 className="sr-only">Fikon Agency</h1>

      <motion.div
        style={{
          scale: wordmarkScale,
          y: wordmarkY,
          opacity: wordmarkOpacity
        }}
        className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none will-change-transform px-6"
      >
        <span
          aria-hidden
          className="block bg-cream aspect-square w-[min(82vw,680px)]"
          style={{
            WebkitMaskImage: "url('/brand/fikon-wordmark.png')",
            maskImage: "url('/brand/fikon-wordmark.png')",
            WebkitMaskSize: 'contain',
            maskSize: 'contain',
            WebkitMaskRepeat: 'no-repeat',
            maskRepeat: 'no-repeat',
            WebkitMaskPosition: 'center',
            maskPosition: 'center',
            filter: 'drop-shadow(0 10px 44px rgba(42, 19, 24, 0.55))'
          }}
        />
        <p className="mt-2 md:mt-4 text-cream font-display font-light text-xl md:text-3xl text-center text-balance max-w-[20ch] [text-shadow:0_2px_18px_rgba(42,19,24,0.7)]">
          Mjuka berättelser för starka varumärken.
        </p>
      </motion.div>

      <div className="absolute bottom-8 left-4 right-4 md:left-8 md:right-8 flex flex-col items-center gap-3 md:flex-row md:items-end md:justify-between md:gap-6 pointer-events-none">
        <p className="text-cream/85 text-[10px] md:text-xs tracking-[0.4em] uppercase [text-shadow:0_2px_10px_rgba(42,19,24,0.7)]">
          Reklambyrå · Malmö
        </p>
        <Link
          href="/portfolio"
          className="pointer-events-auto inline-flex items-center gap-3 px-5 py-3 md:px-6 md:py-3.5 bg-cream text-plommon font-display font-medium text-sm md:text-base hover:bg-rose transition-colors group shadow-[0_10px_40px_-12px_rgba(42,19,24,0.6)]"
        >
          <span>Se portfolion</span>
          <span className="transition-transform group-hover:translate-x-1">→</span>
        </Link>
      </div>

    </section>
  );
}
