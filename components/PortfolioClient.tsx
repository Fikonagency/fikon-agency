'use client';

import { useRef, useState } from 'react';
import Link from 'next/link';
import type { Project } from '@/lib/data';
import Reveal from './Reveal';

export type EnrichedProject = Project & { thumb: string };

export default function PortfolioClient({ projects }: { projects: EnrichedProject[] }) {
  const [hoverId, setHoverId] = useState<string | null>(null);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const hovered = projects.find((p) => p.id === hoverId) ?? null;

  const setHover = (id: string | null) => {
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(() => setHoverId(id), id ? 40 : 120);
  };

  return (
    <section id="portfolio" className="bg-cream text-plommon px-6 pt-40 md:pt-48 pb-32 md:pb-48">
      <div className="mx-auto max-w-[1500px]">
        <Reveal>
          <p className="text-rose text-xs tracking-[0.3em] uppercase mb-4">Portfolio</p>
          <h1 className="font-display text-display-xl mb-16 md:mb-24 text-balance max-w-4xl">
            Ett urval <span className="italic">av det vi gjort.</span>
          </h1>
        </Reveal>

        <div
          className="relative hidden md:block"
          onMouseLeave={() => setHover(null)}
        >
          <ul className="relative z-10">
            {projects.map((p, i) => (
              <li key={p.id}>
                <Reveal delay={Math.min(i * 0.04, 0.3)}>
                  <Link
                    href={`/portfolio/${p.id}`}
                    onMouseEnter={() => setHover(p.id)}
                    onFocus={() => setHover(p.id)}
                    onBlur={() => setHover(null)}
                    className="group flex items-end justify-between gap-8 border-t border-plommon/15 py-6 md:py-8 transition-[padding] duration-300 hover:pl-6"
                  >
                    <div className="flex items-baseline gap-6 md:gap-10 min-w-0">
                      <span className="font-display text-xs text-rose tabular-nums shrink-0">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <span className="font-display text-3xl md:text-5xl lg:text-6xl leading-none truncate group-hover:text-bordeaux transition-colors">
                        {p.title}
                      </span>
                    </div>
                    <div className="hidden md:flex items-baseline gap-8 shrink-0 text-plommon/60 text-xs tracking-[0.2em] uppercase">
                      <span className="truncate max-w-[14rem]">
                        {p.client === 'TBD' ? '—' : p.client}
                      </span>
                      <span className="tabular-nums">{p.year}</span>
                      <span className="w-6 text-right transition-transform group-hover:translate-x-1">
                        →
                      </span>
                    </div>
                  </Link>
                </Reveal>
              </li>
            ))}
            <li className="border-t border-plommon/15" />
          </ul>

          <div
            aria-hidden
            className={`pointer-events-none fixed right-10 top-1/2 -translate-y-1/2 w-[28vw] max-w-[460px] aspect-video z-20 transition-opacity duration-500 ${
              hovered ? 'opacity-100' : 'opacity-0'
            }`}
          >
            {hovered && (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={hovered.thumb}
                alt=""
                className="w-full h-full object-cover ring-1 ring-plommon/15"
              />
            )}
          </div>
        </div>

        <ul className="md:hidden grid grid-cols-1 gap-10">
          {projects.map((p, i) => (
            <li key={p.id}>
              <Reveal delay={Math.min(i * 0.04, 0.24)}>
                <Link href={`/portfolio/${p.id}`} className="block group">
                  <div className="relative aspect-video overflow-hidden bg-plommon/5 ring-1 ring-plommon/10">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={p.thumb}
                      alt=""
                      loading="lazy"
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <h3 className="mt-4 font-display text-2xl group-hover:text-bordeaux transition-colors">
                    {p.title}
                  </h3>
                  <p className="mt-1 text-plommon/50 text-xs tracking-[0.2em] uppercase">
                    {p.client === 'TBD' ? '—' : p.client}
                    <span className="ml-3 text-bordeaux">{p.year}</span>
                  </p>
                </Link>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
