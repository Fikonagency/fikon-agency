'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

export type GalleryItem = {
  kind: 'video' | 'photo';
  id: string;
  src: string;
  href?: string;
  aspect: 'portrait' | 'landscape' | 'square';
};

const ASPECT_CLASS: Record<GalleryItem['aspect'], string> = {
  portrait: 'aspect-[3/4]',
  landscape: 'aspect-[16/10]',
  square: 'aspect-square'
};

const WIDTH_CLASS: Record<GalleryItem['aspect'], string> = {
  portrait: 'w-[240px] md:w-[320px]',
  landscape: 'w-[380px] md:w-[540px]',
  square: 'w-[280px] md:w-[380px]'
};

export default function FeaturedScroller({ items }: { items: GalleryItem[] }) {
  const ref = useRef<HTMLDivElement>(null);
  const [dir, setDir] = useState<0 | -1 | 1>(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let raf = 0;
    const tick = () => {
      if (dir !== 0) {
        el.scrollLeft += dir * 22;
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [dir]);

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const zone = Math.min(220, rect.width * 0.18);
    if (x < zone) setDir(-1);
    else if (x > rect.width - zone) setDir(1);
    else setDir(0);
  };

  return (
    <div
      className="relative"
      onMouseLeave={() => setDir(0)}
      onMouseMove={onMove}
    >
      <div
        ref={ref}
        className="flex gap-4 md:gap-6 overflow-x-auto scroll-smooth px-6 md:px-10 pb-2 no-scrollbar"
        style={{ scrollbarWidth: 'none' }}
      >
        {items.map((item) => {
          const box = (
            <div
              className={`relative ${WIDTH_CLASS[item.aspect]} shrink-0 overflow-hidden bg-plommon/5 ring-1 ring-plommon/10 ${ASPECT_CLASS[item.aspect]} transition-transform duration-500 hover:-translate-y-1`}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={item.src}
                alt=""
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          );
          if (item.kind === 'video' && item.href) {
            return (
              <Link key={item.id} href={item.href} className="block">
                {box}
              </Link>
            );
          }
          return (
            <div key={item.id} className="block">
              {box}
            </div>
          );
        })}
      </div>

      <div
        aria-hidden
        className="pointer-events-none absolute top-0 bottom-2 left-0 w-24 md:w-40 bg-gradient-to-r from-cream to-transparent"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute top-0 bottom-2 right-0 w-24 md:w-40 bg-gradient-to-l from-cream to-transparent"
      />
      <div
        aria-hidden
        className={`pointer-events-none absolute top-1/2 -translate-y-1/2 left-6 md:left-10 font-display italic text-plommon text-3xl md:text-5xl transition-opacity duration-300 ${
          dir === -1 ? 'opacity-100' : 'opacity-0'
        }`}
      >
        ←
      </div>
      <div
        aria-hidden
        className={`pointer-events-none absolute top-1/2 -translate-y-1/2 right-6 md:right-10 font-display italic text-plommon text-3xl md:text-5xl transition-opacity duration-300 ${
          dir === 1 ? 'opacity-100' : 'opacity-0'
        }`}
      >
        →
      </div>
    </div>
  );
}
