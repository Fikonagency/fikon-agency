import Link from 'next/link';
import Image from 'next/image';
import { HERO_VIMEO_ID } from '@/lib/data';

export default function Hero() {
  const src = `https://player.vimeo.com/video/${HERO_VIMEO_ID}?background=1&autoplay=1&muted=1&loop=1&controls=0&dnt=1`;

  return (
    <section
      id="top"
      className="relative h-[100svh] min-h-[640px] w-full overflow-hidden bg-plommon"
    >
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
        <p className="text-cream/70 text-[10px] md:text-xs tracking-[0.4em] uppercase mb-8 md:mb-10">
          Reklambyrå · Malmö
        </p>
        <h1 className="sr-only">Fikon Agency</h1>
        <Image
          src="/brand/fikon-wordmark.png"
          alt="Fikon Agency"
          width={2250}
          height={2250}
          priority
          sizes="(min-width: 1024px) 720px, (min-width: 768px) 560px, 320px"
          className="w-[320px] md:w-[560px] lg:w-[720px] h-auto drop-shadow-[0_8px_32px_rgba(0,0,0,0.5)]"
        />
        <p className="mt-8 md:mt-10 max-w-lg mx-auto text-cream font-display text-xl md:text-2xl leading-snug text-balance">
          Vi bygger varumärken som känns.
        </p>
        <Link
          href="/arbeten"
          className="mt-10 md:mt-12 inline-flex items-center gap-3 text-cream font-display text-base md:text-lg hover:text-rose transition-colors group"
        >
          <span className="underline underline-offset-8 decoration-cream/30 group-hover:decoration-rose">
            Se våra arbeten
          </span>
          <span className="transition-transform group-hover:translate-x-1">→</span>
        </Link>
      </div>

      <div
        aria-hidden
        className="absolute bottom-10 md:bottom-12 left-1/2 -translate-x-1/2 h-10 w-px bg-gradient-to-b from-cream/0 via-cream/60 to-cream/0 animate-scroll-hint"
      />
    </section>
  );
}
