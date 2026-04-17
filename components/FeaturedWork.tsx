import Link from 'next/link';
import Reveal from './Reveal';
import { projects } from '@/lib/data';

async function getThumb(vimeoId: string): Promise<string> {
  try {
    const res = await fetch(
      `https://vimeo.com/api/oembed.json?url=https://vimeo.com/${vimeoId}&width=1280`,
      { next: { revalidate: 86400 } }
    );
    if (res.ok) {
      const data = await res.json();
      if (data.thumbnail_url) return data.thumbnail_url as string;
    }
  } catch {}
  return `https://vumbnail.com/${vimeoId}.jpg`;
}

export default async function FeaturedWork() {
  const featured = projects.filter((p) => p.featured).slice(0, 3);
  const withThumbs = await Promise.all(
    featured.map(async (p) => ({ ...p, thumb: await getThumb(p.vimeoId) }))
  );

  return (
    <section className="bg-cream text-plommon px-6 py-32 md:py-48 border-t border-plommon/10">
      <div className="mx-auto max-w-[1400px]">
        <Reveal>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16 md:mb-20">
            <div>
              <p className="text-bordeaux text-xs tracking-[0.3em] uppercase mb-4">Utvalt</p>
              <h2 className="font-display text-display-lg text-balance max-w-2xl">
                Det senaste från studion.
              </h2>
            </div>
            <Link
              href="/arbeten"
              className="hidden md:inline-flex items-center gap-3 text-plommon font-display text-base hover:text-bordeaux transition-colors group shrink-0"
            >
              <span className="underline underline-offset-8 decoration-plommon/30 group-hover:decoration-bordeaux">
                Se alla arbeten
              </span>
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </Link>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {withThumbs.map((p, i) => (
            <Reveal key={p.id} delay={i * 0.08}>
              <Link href="/arbeten" className="group block">
                <div className="relative aspect-[4/5] md:aspect-[3/4] overflow-hidden bg-plommon">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={p.thumb}
                    alt=""
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-105"
                  />
                </div>
                <div className="mt-5">
                  <h3 className="font-display text-xl md:text-2xl group-hover:text-bordeaux transition-colors">
                    {p.title}
                  </h3>
                  <p className="mt-1 text-plommon/50 text-xs tracking-[0.2em] uppercase">
                    {p.client}
                    <span className="ml-2 text-caramel">{p.year}</span>
                  </p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>

        <div className="mt-12 md:hidden text-center">
          <Link
            href="/arbeten"
            className="inline-flex items-center gap-3 text-plommon font-display text-base hover:text-bordeaux transition-colors group"
          >
            <span className="underline underline-offset-8 decoration-plommon/30">
              Se alla arbeten
            </span>
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
