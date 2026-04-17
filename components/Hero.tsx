import Image from 'next/image';
import { HERO_VIMEO_ID } from '@/lib/data';

export default function Hero() {
  const src = `https://player.vimeo.com/video/${HERO_VIMEO_ID}?background=1&autoplay=1&muted=1&loop=1&controls=0&dnt=1`;

  return (
    <section id="top" className="relative h-[100svh] w-full overflow-hidden bg-plommon">
      <div className="absolute inset-0 pointer-events-none">
        <iframe
          src={src}
          title="Fikon Agency showreel"
          allow="autoplay; fullscreen; picture-in-picture"
          className="absolute left-1/2 top-1/2 w-[177.77vh] h-[56.25vw] min-w-full min-h-full -translate-x-1/2 -translate-y-1/2"
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-plommon/70 via-plommon/30 to-plommon pointer-events-none" />

      <div className="relative h-full flex flex-col items-center justify-center text-center px-6">
        <Image
          src="/brand/fikon-wordmark.png"
          alt="Fikon Agency"
          width={900}
          height={260}
          priority
          className="w-[280px] md:w-[460px] lg:w-[560px] h-auto drop-shadow-[0_6px_28px_rgba(0,0,0,0.55)]"
        />
        <p className="mt-8 text-cream/80 text-sm md:text-base tracking-[0.2em] uppercase">
          Film · Foto · Identitet
        </p>
      </div>

      <a
        href="#manifest"
        aria-label="Scrolla"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-cream/50 text-[10px] tracking-[0.4em] uppercase hover:text-cream transition-colors"
      >
        Scrolla
      </a>
    </section>
  );
}
