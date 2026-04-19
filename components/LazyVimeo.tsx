'use client';

import { useEffect, useRef, useState } from 'react';
import { useReducedMotion } from 'framer-motion';

type Props = {
  vimeoId: string;
  vimeoHash?: string;
  title: string;
  /** Pre-fetched poster (Vimeo CDN). Falls back to vumbnail if undefined. */
  poster?: string;
};

export default function LazyVimeo({ vimeoId, vimeoHash, title, poster }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [load, setLoad] = useState(false);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (reduce) return; // Honour reduced-motion: never autoload background videos
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setLoad(true);
          io.disconnect();
        }
      },
      { rootMargin: '300px' }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [reduce]);

  const posterSrc = poster ?? `https://vumbnail.com/${vimeoId}.jpg`;

  return (
    <div ref={ref} className="absolute inset-0">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={posterSrc}
        alt=""
        loading="lazy"
        className="absolute inset-0 w-full h-full object-cover"
      />
      {load && (
        <iframe
          src={`https://player.vimeo.com/video/${vimeoId}?${vimeoHash ? `h=${vimeoHash}&` : ''}background=1&autoplay=1&muted=1&loop=1&controls=0&dnt=1`}
          title={title}
          allow="autoplay; picture-in-picture"
          loading="lazy"
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none w-[177.77vh] h-[56.25vw] min-w-full min-h-full"
        />
      )}
    </div>
  );
}
