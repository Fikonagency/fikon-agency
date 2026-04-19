import Link from 'next/link';
import Reveal from './Reveal';
import type { Project } from '@/lib/data';
import { projects } from '@/lib/data';

export default function CaseGallery({ project }: { project: Project }) {
  const idx = projects.findIndex((p) => p.id === project.id);
  const next = projects[(idx + 1) % projects.length];
  const gallery = project.gallery ?? [];
  const vimeoSrc = `https://player.vimeo.com/video/${project.vimeoId}?${project.vimeoHash ? `h=${project.vimeoHash}&` : ''}autoplay=1&muted=1&loop=1&title=0&byline=0&portrait=0&dnt=1`;

  return (
    <article className="bg-cream text-plommon animate-flash-in">
      <header className="px-6 md:px-10 pt-32 md:pt-40 pb-12 md:pb-16 mx-auto max-w-[1500px]">
        <p className="text-rose text-xs tracking-[0.3em] uppercase mb-4">
          {project.kind === 'event' ? 'Event' : project.kind === 'social' ? 'Social' : 'Film'}
        </p>
        <h1 className="font-display text-display-lg md:text-display-xl text-balance max-w-4xl">
          {project.title}
        </h1>
        {project.intro && (
          <p className="mt-8 md:mt-10 max-w-2xl text-lg md:text-xl text-plommon/75 leading-relaxed">
            {project.intro}
          </p>
        )}
        {project.meta && project.meta.length > 0 && (
          <dl className="mt-12 md:mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-plommon/15 pt-10">
            {project.meta.map((m) => (
              <div key={m.label}>
                <dt className="text-rose text-[10px] tracking-[0.3em] uppercase">
                  {m.label}
                </dt>
                <dd className="mt-2 font-display text-lg md:text-xl">{m.value}</dd>
              </div>
            ))}
          </dl>
        )}
      </header>

      <section className="px-6 md:px-10 mx-auto max-w-[1500px]">
        <div className="relative aspect-video w-full overflow-hidden bg-plommon ring-1 ring-plommon/10">
          <iframe
            src={vimeoSrc}
            title={project.title}
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 w-full h-full"
          />
        </div>
      </section>

      {project.extraVideos && project.extraVideos.length > 0 && (
        <section className="px-6 md:px-10 mx-auto max-w-[1500px] pt-6 md:pt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {project.extraVideos.map((v, i) => (
              <Reveal key={v.vimeoId} delay={Math.min(i * 0.05, 0.2)}>
                <div className="relative aspect-video w-full overflow-hidden bg-plommon ring-1 ring-plommon/10">
                  <iframe
                    src={`https://player.vimeo.com/video/${v.vimeoId}?${v.vimeoHash ? `h=${v.vimeoHash}&` : ''}title=0&byline=0&portrait=0&dnt=1`}
                    title={v.title ?? `${project.title} — video ${i + 2}`}
                    allow="autoplay; fullscreen; picture-in-picture"
                    allowFullScreen
                    loading="lazy"
                    className="absolute inset-0 w-full h-full"
                  />
                </div>
                {v.title && (
                  <p className="mt-3 text-rose text-[10px] tracking-[0.3em] uppercase">
                    {v.title}
                  </p>
                )}
              </Reveal>
            ))}
          </div>
        </section>
      )}

      {gallery.length > 0 && (
        <section className="px-6 md:px-10 mx-auto max-w-[1500px] py-20 md:py-28">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-5 md:gap-8">
            {gallery.map((name, i) => {
              const span = spanFor(i, gallery.length);
              return (
                <Reveal
                  key={name}
                  delay={Math.min(i * 0.05, 0.3)}
                  className={span.className}
                >
                  <figure
                    className="relative w-full overflow-hidden bg-plommon/5"
                    style={{ aspectRatio: span.ratio }}
                  >
                    <picture>
                      <source
                        type="image/avif"
                        srcSet={`/images/${name}-800.avif 800w, /images/${name}-1600.avif 1600w, /images/${name}-2400.avif 2400w`}
                        sizes="(min-width: 1024px) 80vw, 100vw"
                      />
                      <source
                        type="image/webp"
                        srcSet={`/images/${name}-800.webp 800w, /images/${name}-1600.webp 1600w, /images/${name}-2400.webp 2400w`}
                        sizes="(min-width: 1024px) 80vw, 100vw"
                      />
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={`/images/${name}-1600.webp`}
                        alt={`${project.title} — bild ${i + 1} av ${gallery.length}`}
                        loading="lazy"
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                    </picture>
                  </figure>
                </Reveal>
              );
            })}
          </div>
        </section>
      )}

      <nav className="px-6 md:px-10 mx-auto max-w-[1500px] py-20 md:py-28 border-t border-plommon/15 flex flex-col md:flex-row md:items-end md:justify-between gap-10">
        <Link
          href="/portfolio"
          className="group inline-flex items-center gap-3 text-plommon font-display text-base hover:text-bordeaux transition-colors"
        >
          <span className="transition-transform group-hover:-translate-x-1">←</span>
          <span className="underline underline-offset-8 decoration-plommon/30 group-hover:decoration-bordeaux">
            Hela portfolion
          </span>
        </Link>
        <Link
          href={`/portfolio/${next.id}`}
          className="group inline-flex flex-col md:items-end"
        >
          <span className="text-rose text-[10px] tracking-[0.3em] uppercase mb-2">
            Nästa projekt
          </span>
          <span className="font-display text-2xl md:text-4xl text-plommon group-hover:text-bordeaux transition-colors">
            {next.title} <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
          </span>
        </Link>
      </nav>
    </article>
  );
}

function spanFor(
  i: number,
  total: number
): { className: string; ratio: string } {
  const mod = i % 6;
  if (mod === 0) return { className: 'md:col-span-12', ratio: '16 / 9' };
  if (mod === 1) return { className: 'md:col-span-7', ratio: '4 / 5' };
  if (mod === 2) return { className: 'md:col-span-5', ratio: '4 / 5' };
  if (mod === 3) return { className: 'md:col-span-6', ratio: '4 / 3' };
  if (mod === 4) return { className: 'md:col-span-6', ratio: '4 / 3' };
  return { className: total - 1 === i ? 'md:col-span-12' : 'md:col-span-8', ratio: '16 / 9' };
}
