'use client';

import Link from 'next/link';
import type { Project } from '@/lib/data';
import Reveal from './Reveal';

export type EnrichedProject = Project & { thumb: string };

export default function PortfolioClient({ projects }: { projects: EnrichedProject[] }) {
  return (
    <section id="portfolio" className="bg-cream text-plommon px-6 pt-40 md:pt-48 pb-32 md:pb-48">
      <div className="mx-auto max-w-[1500px]">
        <Reveal>
          <p className="text-rose text-xs tracking-[0.3em] uppercase mb-4">Portfolio</p>
          <h1 className="font-display font-light text-display-xl mb-16 md:mb-24 text-balance max-w-4xl leading-[1.02]">
            Ett urval <span className="text-bordeaux font-normal">av det vi gjort.</span>
          </h1>
        </Reveal>

        <ul className="relative hidden md:block">
          {projects.map((p, i) => (
            <li key={p.id}>
              <Reveal delay={Math.min(i * 0.04, 0.3)}>
                <Link
                  href={`/portfolio/${p.id}`}
                  className="group relative flex items-end justify-between gap-8 border-t border-plommon/15 py-6 md:py-8 overflow-hidden transition-[padding] duration-300 hover:pl-6"
                >
                  {/* hover image: slides in from right, fades out toward left so text stays legible */}
                  <div
                    aria-hidden
                    className="pointer-events-none absolute inset-y-0 right-0 w-full opacity-0 translate-x-12 transition-[opacity,transform] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:opacity-100 group-hover:translate-x-0"
                    style={{
                      backgroundImage: `url(${p.thumb})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      WebkitMaskImage:
                        'linear-gradient(to left, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 35%, rgba(0,0,0,0) 70%)',
                      maskImage:
                        'linear-gradient(to left, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 35%, rgba(0,0,0,0) 70%)'
                    }}
                  />

                  <div className="relative flex items-baseline gap-6 md:gap-10 min-w-0 z-10">
                    <span className="font-display text-xs text-rose tabular-nums shrink-0">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span className="font-display font-light text-3xl md:text-5xl lg:text-6xl leading-none truncate group-hover:text-bordeaux transition-colors tracking-tight">
                      {p.title}
                    </span>
                  </div>
                  <div className="relative hidden md:flex items-baseline gap-8 shrink-0 text-plommon/60 text-xs tracking-[0.2em] uppercase z-10">
                    <span className="truncate max-w-[14rem]">
                      {p.client === 'TBD' ? '·' : p.client}
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
                  <h3 className="mt-4 font-display font-medium text-2xl group-hover:text-bordeaux transition-colors">
                    {p.title}
                  </h3>
                  <p className="mt-1 text-plommon/50 text-xs tracking-[0.2em] uppercase">
                    {p.client === 'TBD' ? '·' : p.client}
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
