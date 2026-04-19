import Link from 'next/link';
import Reveal from './Reveal';
import LazyVimeo from './LazyVimeo';
import { projects } from '@/lib/data';

async function getPoster(vimeoId: string, vimeoHash?: string): Promise<string | undefined> {
  const url = vimeoHash ? `https://vimeo.com/${vimeoId}/${vimeoHash}` : `https://vimeo.com/${vimeoId}`;
  try {
    const res = await fetch(
      `https://vimeo.com/api/oembed.json?url=${encodeURIComponent(url)}&width=1280`,
      { next: { revalidate: 86400 } }
    );
    if (res.ok) {
      const data = await res.json();
      if (data.thumbnail_url) return data.thumbnail_url as string;
    }
  } catch {}
  return undefined;
}

type Tile = {
  id: string;
  colClass: string;
  rowClass: string;
};

/**
 * Layout rhythm: big full-width video at top, row of smaller tiles,
 * big full-width in the middle (a "pause"), another row of smaller tiles,
 * big full-width at the bottom.
 */
const LAYOUT: Tile[] = [
  { id: 'gardinex',                     colClass: 'md:col-span-12', rowClass: 'md:row-span-3' },
  { id: 'currylicious-tiktok',          colClass: 'md:col-span-4',  rowClass: 'md:row-span-4' },
  { id: 'sigma-connectivity-event',     colClass: 'md:col-span-8',  rowClass: 'md:row-span-2' },
  { id: 'sigma-connectivity-interview', colClass: 'md:col-span-8',  rowClass: 'md:row-span-2' },
  { id: 'currylicious',                 colClass: 'md:col-span-12', rowClass: 'md:row-span-3' },
  { id: 'flawlessface-clinic',          colClass: 'md:col-span-6',  rowClass: 'md:row-span-3' },
  { id: 'vertikal-30s',                 colClass: 'md:col-span-3',  rowClass: 'md:row-span-3' },
  { id: 'p-1184232574',                 colClass: 'md:col-span-3',  rowClass: 'md:row-span-3' },
  { id: 'p-1184231741',                 colClass: 'md:col-span-12', rowClass: 'md:row-span-3' }
];

export default async function VideoGrid() {
  const tilesRaw = LAYOUT.map((l) => {
    const p = projects.find((pr) => pr.id === l.id);
    return p ? { ...l, project: p } : null;
  }).filter(Boolean) as Array<Tile & { project: (typeof projects)[number] }>;

  const tiles = await Promise.all(
    tilesRaw.map(async (t) => ({ ...t, poster: await getPoster(t.project.vimeoId, t.project.vimeoHash) }))
  );

  return (
    <section className="relative bg-cream text-plommon px-6 md:px-10 py-12 md:py-16 border-t border-plommon/10">
      <div className="mx-auto max-w-[1500px]">
        <Reveal>
          <div className="flex items-end justify-between gap-8 mb-6 md:mb-8">
            <div>
              <p className="text-rose text-xs tracking-[0.3em] uppercase mb-3">
                Kameran rullar
              </p>
              <h2 className="font-display text-display-md md:text-display-lg text-balance max-w-[18ch]">
                Filmer med <span className="italic text-bordeaux">smak.</span>
              </h2>
            </div>
          </div>
        </Reveal>

        <div className="grid grid-cols-2 md:grid-cols-12 gap-3 md:gap-4 md:[grid-auto-rows:minmax(140px,auto)] [grid-auto-flow:dense]">
          {tiles.map((t, i) => {
            const isHero = t.colClass.includes('col-span-12');
            return (
            <Reveal
              key={t.id}
              delay={Math.min(i * 0.03, 0.2)}
              className={`${t.colClass} ${t.rowClass} aspect-video md:aspect-auto ${isHero ? 'md:min-h-[504px]' : ''}`}
            >
              <Link
                href={`/portfolio/${t.project.id}`}
                className="group relative block w-full h-full overflow-hidden bg-plommon ring-1 ring-plommon/10"
                aria-label={`${t.project.title}${t.project.client !== 'TBD' ? ` — ${t.project.client}` : ''}`}
              >
                <LazyVimeo
                  vimeoId={t.project.vimeoId}
                  vimeoHash={t.project.vimeoHash}
                  title={t.project.title}
                  poster={t.poster}
                />
                <div className="absolute inset-0 bg-plommon/0 group-hover:bg-plommon/20 transition-colors duration-300 pointer-events-none" />
                <span className="absolute right-3 bottom-3 md:right-4 md:bottom-4 pointer-events-none overflow-hidden">
                  <span className="block font-display italic text-rose text-xs md:text-sm tracking-wide translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-400 ease-out drop-shadow-[0_2px_10px_rgba(42,19,24,0.75)]">
                    {t.project.client === 'TBD' ? t.project.title : t.project.client}
                  </span>
                </span>
              </Link>
            </Reveal>
          );
          })}
        </div>
      </div>
    </section>
  );
}
