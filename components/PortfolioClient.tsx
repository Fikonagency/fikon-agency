'use client';

import { useState } from 'react';
import type { Project } from '@/lib/data';
import Reveal from './Reveal';
import VideoLightbox from './VideoLightbox';

export type EnrichedProject = Project & { thumb: string };

export default function PortfolioClient({ projects }: { projects: EnrichedProject[] }) {
  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);
  const [active, setActive] = useState<string | null>(null);

  return (
    <>
      <section id="arbeten" className="bg-cream text-plommon px-6 py-32 md:py-48">
        <div className="mx-auto max-w-[1400px]">
          <Reveal>
            <p className="text-bordeaux text-xs tracking-[0.3em] uppercase mb-4">Arbeten</p>
            <h2 className="font-display text-display-lg mb-16 md:mb-24 text-balance">
              Ett urval av det vi gjort.
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14">
            {featured.map((p, i) => (
              <Reveal key={p.id} delay={i * 0.08}>
                <Card project={p} onOpen={() => setActive(p.vimeoId)} large />
              </Reveal>
            ))}
          </div>

          {rest.length > 0 && (
            <div className="mt-24 md:mt-32">
              <Reveal>
                <p className="text-plommon/50 text-xs tracking-[0.3em] uppercase mb-10">Mer</p>
              </Reveal>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
                {rest.map((p, i) => (
                  <Reveal key={p.id} delay={Math.min(i * 0.04, 0.24)}>
                    <Card project={p} onOpen={() => setActive(p.vimeoId)} />
                  </Reveal>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {active && <VideoLightbox vimeoId={active} onClose={() => setActive(null)} />}
    </>
  );
}

function Card({
  project,
  onOpen,
  large
}: {
  project: EnrichedProject;
  onOpen: () => void;
  large?: boolean;
}) {
  const [hover, setHover] = useState(false);
  const previewSrc = `https://player.vimeo.com/video/${project.vimeoId}?background=1&autoplay=1&muted=1&loop=1&controls=0&dnt=1`;

  return (
    <button
      type="button"
      onClick={onOpen}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onFocus={() => setHover(true)}
      onBlur={() => setHover(false)}
      className="group block text-left w-full focus:outline-none focus-visible:ring-2 focus-visible:ring-bordeaux"
    >
      <div className="relative aspect-video overflow-hidden bg-plommon ring-1 ring-plommon/10">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={project.thumb}
          alt=""
          className="absolute inset-0 w-full h-full object-cover transition-[opacity,transform] duration-[600ms]"
          style={{ opacity: hover ? 0 : 1, transform: hover ? 'scale(1.03)' : 'scale(1)' }}
        />
        {hover && (
          <iframe
            src={previewSrc}
            title={project.title}
            allow="autoplay; picture-in-picture"
            className="absolute left-1/2 top-1/2 w-[177.77vh] h-[56.25vw] min-w-full min-h-full -translate-x-1/2 -translate-y-1/2"
          />
        )}
      </div>

      <div className="mt-5">
        <h3
          className={`font-display text-plommon group-hover:text-bordeaux transition-colors ${
            large ? 'text-2xl md:text-3xl' : 'text-base md:text-lg'
          }`}
        >
          {project.title}
        </h3>
        <p className="mt-1 text-plommon/50 text-xs tracking-[0.2em] uppercase">
          {project.client === 'TBD' ? '—' : project.client}
          <span className="ml-3 text-caramel">{project.year}</span>
        </p>
      </div>
    </button>
  );
}
