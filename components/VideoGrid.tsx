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

type Kind = 'strategi' | 'brand-identity' | 'film-foto' | 'grafisk-design' | 'digital';

type VideoTile = {
  kind: 'video';
  id: string;
  colClass: string;
  rowClass: string;
  mobileOrder: number;
};

type ServiceTile = {
  kind: 'service';
  id: string;
  colClass: string;
  rowClass: string;
  title: string;
  blurb: string;
  anchor: Kind;
  mobileOrder: number;
};

const MOBILE_ORDER_CLASSES: Record<number, string> = {
  1:  'order-1 md:order-none',
  2:  'order-2 md:order-none',
  3:  'order-3 md:order-none',
  4:  'order-4 md:order-none',
  5:  'order-5 md:order-none',
  6:  'order-6 md:order-none',
  7:  'order-7 md:order-none',
  8:  'order-8 md:order-none',
  9:  'order-9 md:order-none',
  10: 'order-10 md:order-none',
  11: 'order-11 md:order-none',
  12: 'order-12 md:order-none'
};

type Tile = VideoTile | ServiceTile;

/**
 * Layout rhythm — every service tile is surrounded only by videos.
 * No two service tiles share a border (horizontally OR vertically).
 * Alternates side per row so services don't stack in the same column.
 * Ends with Sigma Connectivity (p-1184231741) at full width.
 *
 * 12-col grid, col-6 rows except the hero book-ends:
 *  r1: gardinex (V,12)                        hero
 *  r2: strategi (S,6)        + sigma-event (V,6)
 *  r3: flawlessface (V,6)    + brand-identity (S,6)
 *  r4: film-foto (S,6)       + currylicious (V,6)
 *  r5: s-t-petri (V,6)       + grafisk-design (S,6)
 *  r6: digital (S,6)         + sigma-interview (V,6)
 *  r7: sigma-final (V,12)                     hero end
 */
const LAYOUT: Tile[] = [
  { kind: 'video',   id: 'gardinex',                 colClass: 'col-span-2 md:col-span-12', rowClass: 'md:row-span-3', mobileOrder: 1 },

  { kind: 'service', id: 's-strategi',               colClass: 'col-span-2 md:col-span-6',  rowClass: 'md:row-span-3',
    title: 'Strategi & varumärke',
    blurb:
      'Vi tar reda på var ni står, vart ni vill, och vad som faktiskt skiljer er från konkurrenterna. Sen översätter vi det till en riktning ni kan äga.',
    anchor: 'strategi', mobileOrder: 2 },
  { kind: 'video',   id: 'sigma-connectivity-event', colClass: 'col-span-2 md:col-span-6',  rowClass: 'md:row-span-3', mobileOrder: 3 },

  { kind: 'video',   id: 'flawlessface-clinic',      colClass: 'col-span-2 md:col-span-6',  rowClass: 'md:row-span-3', mobileOrder: 5 },
  { kind: 'service', id: 's-brand-identity',         colClass: 'col-span-2 md:col-span-6',  rowClass: 'md:row-span-3',
    title: 'Brand identity',
    blurb:
      'Logotyp, färg, typografi och bildspråk som känns samlat i varje kanal. Vi bygger ett system som håller, inte bara enskilda ögonblicksverk.',
    anchor: 'brand-identity', mobileOrder: 4 },

  { kind: 'service', id: 's-film-foto',              colClass: 'col-span-2 md:col-span-6',  rowClass: 'md:row-span-3',
    title: 'Film & foto',
    blurb:
      'Reklamfilm, kampanjbilder, produkt och event. Vi producerar själva, från storyboard till färdig leverans. Tempot blir högre och priset lägre.',
    anchor: 'film-foto', mobileOrder: 6 },
  { kind: 'video',   id: 'currylicious',             colClass: 'col-span-2 md:col-span-6',  rowClass: 'md:row-span-3', mobileOrder: 7 },

  { kind: 'video',   id: 'p-1184231462',             colClass: 'col-span-2 md:col-span-6',  rowClass: 'md:row-span-3', mobileOrder: 9 },
  { kind: 'service', id: 's-grafisk',                colClass: 'col-span-2 md:col-span-6',  rowClass: 'md:row-span-3',
    title: 'Grafisk design',
    blurb:
      'Trycksaker, presentationer och sales collateral. De vardagliga delarna av varumärket, designade med samma noggrannhet som kampanjerna.',
    anchor: 'grafisk-design', mobileOrder: 8 },

  { kind: 'service', id: 's-digital',                colClass: 'col-span-2 md:col-span-6',  rowClass: 'md:row-span-3',
    title: 'Digital närvaro',
    blurb:
      'Webb, SEO, paid social och analys. Vi bygger infrastrukturen så att det ni producerar faktiskt når fram, och mäter så ni vet vad som fungerar.',
    anchor: 'digital', mobileOrder: 10 },
  { kind: 'video',   id: 'sigma-connectivity-interview', colClass: 'col-span-2 md:col-span-6',  rowClass: 'md:row-span-3', mobileOrder: 11 },

  { kind: 'video',   id: 'p-1184231741',             colClass: 'col-span-2 md:col-span-12', rowClass: 'md:row-span-3', mobileOrder: 12 }
];

export default async function VideoGrid() {
  const tiles = await Promise.all(
    LAYOUT.map(async (t) => {
      if (t.kind === 'service') return t;
      const project = projects.find((p) => p.id === t.id);
      if (!project) return null;
      const poster = await getPoster(project.vimeoId, project.vimeoHash);
      return { ...t, project, poster };
    })
  );
  const visible = tiles.filter(Boolean) as Array<
    | (VideoTile & { project: (typeof projects)[number]; poster?: string })
    | ServiceTile
  >;

  return (
    <section className="relative bg-cream text-plommon px-6 md:px-10 py-12 md:py-16 border-t border-plommon/10">
      <div className="mx-auto max-w-[1500px]">
        <Reveal>
          <div className="flex items-end justify-between gap-8 mb-6 md:mb-8">
            <div>
              <p className="text-rose text-xs tracking-[0.3em] uppercase mb-3">
                Kameran rullar
              </p>
              <h2 className="font-display font-light text-display-md md:text-display-lg text-balance max-w-[20ch]">
                Filmer, foto och tjänster <span className="text-bordeaux font-normal">vi bygger.</span>
              </h2>
            </div>
            <Link
              href="/tjanster"
              className="hidden md:inline-flex items-center gap-2 text-plommon font-display font-medium text-sm hover:text-bordeaux transition-colors group shrink-0"
            >
              <span className="underline underline-offset-8 decoration-plommon/30 group-hover:decoration-rose">
                Alla tjänster
              </span>
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </Link>
          </div>
        </Reveal>

        <div className="grid grid-cols-2 md:grid-cols-12 gap-3 md:gap-4 md:[grid-auto-rows:minmax(140px,auto)]">
          {visible.map((t, i) => {
            const isHero = t.colClass.includes('md:col-span-12');
            const orderClass = MOBILE_ORDER_CLASSES[t.mobileOrder] || '';
            const baseClasses = `${t.colClass} ${t.rowClass} ${orderClass} ${t.kind === 'video' ? 'aspect-video md:aspect-auto' : 'aspect-auto min-h-[320px]'} ${isHero ? 'md:min-h-[504px]' : 'md:min-h-[340px]'}`;

            if (t.kind === 'service') {
              return (
                <Reveal key={t.id} delay={Math.min(i * 0.03, 0.2)} className={baseClasses}>
                  <Link
                    href={`/tjanster#${t.anchor}`}
                    className="group relative block w-full h-full overflow-hidden"
                  >
                    <div className="relative h-full w-full px-5 pb-6 pt-16 md:px-10 md:pb-10 md:pt-28 flex flex-col text-plommon">
                      <h3 className="font-display font-light text-2xl md:text-3xl lg:text-[2.5rem] text-balance leading-[1.05] max-w-[16ch] group-hover:text-bordeaux transition-colors">
                        {t.title}
                      </h3>
                      <p className="mt-5 md:mt-6 text-plommon/70 text-sm md:text-base leading-relaxed max-w-xl">
                        {t.blurb}
                      </p>
                      <span className="mt-auto pt-10 inline-flex items-center gap-2 text-rose text-xs tracking-[0.25em] uppercase">
                        Läs mer
                        <span className="transition-transform group-hover:translate-x-1">→</span>
                      </span>
                    </div>
                  </Link>
                </Reveal>
              );
            }

            return (
              <Reveal key={t.id} delay={Math.min(i * 0.03, 0.2)} className={baseClasses}>
                <Link
                  href={`/portfolio/${t.project.id}`}
                  className="group relative block w-full h-full overflow-hidden bg-plommon ring-1 ring-plommon/10"
                  aria-label={`${t.project.title}${t.project.client !== 'TBD' ? ` · ${t.project.client}` : ''}`}
                >
                  <LazyVimeo
                    vimeoId={t.project.vimeoId}
                    vimeoHash={t.project.vimeoHash}
                    title={t.project.title}
                    poster={t.poster}
                  />
                  <div className="absolute inset-0 bg-plommon/0 group-hover:bg-plommon/20 transition-colors duration-300 pointer-events-none" />
                  <span className="absolute right-3 bottom-3 md:right-4 md:bottom-4 pointer-events-none overflow-hidden">
                    <span className="block font-display font-medium text-rose text-xs md:text-sm tracking-wide translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-400 ease-out drop-shadow-[0_2px_10px_rgba(42,19,24,0.75)]">
                      {t.project.client === 'TBD' ? t.project.title : t.project.client}
                    </span>
                  </span>
                </Link>
              </Reveal>
            );
          })}
        </div>

        <div className="mt-10 md:hidden text-center">
          <Link
            href="/tjanster"
            className="inline-flex items-center gap-3 text-plommon font-display font-medium text-base hover:text-bordeaux transition-colors group"
          >
            <span className="underline underline-offset-8 decoration-plommon/30">
              Alla tjänster
            </span>
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
