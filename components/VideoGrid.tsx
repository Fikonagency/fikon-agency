import Link from 'next/link';
import Reveal from './Reveal';
import LazyVimeo from './LazyVimeo';
import ServiceSymbol from './ServiceSymbol';
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
};

type ServiceTile = {
  kind: 'service';
  id: string;
  colClass: string;
  rowClass: string;
  number: string;
  title: string;
  blurb: string;
  anchor: Kind;
  tone: 'cream' | 'plommon';
};

type Tile = VideoTile | ServiceTile;

const LAYOUT: Tile[] = [
  { kind: 'video',   id: 'gardinex',                     colClass: 'col-span-2 md:col-span-12', rowClass: 'md:row-span-3' },
  { kind: 'service', id: 's-strategi',                   colClass: 'col-span-2 md:col-span-4',  rowClass: 'md:row-span-3',
    number: '01', title: 'Strategi & varumärke',
    blurb: 'Positionering, story och tonalitet som håller över tid.',
    anchor: 'strategi', tone: 'cream' },
  { kind: 'video',   id: 'sigma-connectivity-event',     colClass: 'col-span-2 md:col-span-8',  rowClass: 'md:row-span-3' },
  { kind: 'service', id: 's-film-foto',                  colClass: 'col-span-2 md:col-span-8',  rowClass: 'md:row-span-3',
    number: '02', title: 'Film & foto',
    blurb: 'Reklamfilm, kampanjbilder och social-first content. Från koncept till leverans.',
    anchor: 'film-foto', tone: 'plommon' },
  { kind: 'video',   id: 'flawlessface-clinic',          colClass: 'col-span-2 md:col-span-4',  rowClass: 'md:row-span-3' },
  { kind: 'video',   id: 'currylicious',                 colClass: 'col-span-2 md:col-span-12', rowClass: 'md:row-span-3' },
  { kind: 'service', id: 's-grafisk',                    colClass: 'col-span-1 md:col-span-6',  rowClass: 'md:row-span-3',
    number: '03', title: 'Grafisk design',
    blurb: 'Logotyp, identitet och designsystem som lever i alla kanaler.',
    anchor: 'grafisk-design', tone: 'cream' },
  { kind: 'service', id: 's-digital',                    colClass: 'col-span-1 md:col-span-6',  rowClass: 'md:row-span-3',
    number: '04', title: 'Digital närvaro',
    blurb: 'Annonsering, social media, SEO och webb. Vi mäter och optimerar.',
    anchor: 'digital', tone: 'plommon' },
  { kind: 'video',   id: 'p-1184231741',                 colClass: 'col-span-2 md:col-span-12', rowClass: 'md:row-span-3' }
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

        <div className="grid grid-cols-2 md:grid-cols-12 gap-3 md:gap-4 md:[grid-auto-rows:minmax(140px,auto)] [grid-auto-flow:dense]">
          {visible.map((t, i) => {
            const isHero = t.colClass.includes('md:col-span-12');
            const isHalfMobile = t.colClass.includes('col-span-1 ');
            const mobileAspect = isHalfMobile ? 'aspect-[3/4]' : 'aspect-video';
            const baseClasses = `${t.colClass} ${t.rowClass} ${mobileAspect} md:aspect-auto ${isHero ? 'md:min-h-[504px]' : 'md:min-h-[300px]'}`;

            if (t.kind === 'service') {
              const isCream = t.tone === 'cream';
              const bg = isCream ? 'bg-cream ring-plommon/15' : 'bg-plommon ring-plommon';
              const txt = isCream ? 'text-plommon' : 'text-cream';
              const sub = isCream ? 'text-plommon/60' : 'text-cream/70';
              const symbolTone = isCream ? 'text-bordeaux/30' : 'text-rose/25';
              return (
                <Reveal key={t.id} delay={Math.min(i * 0.03, 0.2)} className={baseClasses}>
                  <Link
                    href={`/tjanster#${t.anchor}`}
                    className={`group relative block w-full h-full overflow-hidden ring-1 ${bg} ${txt}`}
                  >
                    <ServiceSymbol
                      kind={t.anchor}
                      className={`absolute -right-6 -bottom-6 md:-right-10 md:-bottom-10 w-32 h-32 md:w-56 md:h-56 ${symbolTone} transition-transform duration-700 ease-out group-hover:rotate-6`}
                    />
                    <div className="relative h-full w-full p-6 md:p-8 flex flex-col justify-between">
                      <div className="flex items-center justify-between">
                        <span className="font-display font-medium text-xs tracking-[0.3em] uppercase text-rose">
                          Tjänst {t.number}
                        </span>
                        <span className={`font-display font-light text-[10px] tracking-[0.25em] uppercase ${sub}`}>
                          Fikon
                        </span>
                      </div>
                      <div>
                        <h3 className="font-display font-light text-2xl md:text-3xl lg:text-4xl text-balance leading-tight max-w-[14ch]">
                          {t.title}
                        </h3>
                        <p className={`mt-4 text-sm md:text-base max-w-md leading-snug ${sub}`}>
                          {t.blurb}
                        </p>
                        <span className="mt-5 inline-flex items-center gap-2 text-rose text-xs tracking-[0.25em] uppercase opacity-90 group-hover:opacity-100">
                          Läs mer
                          <span className="transition-transform group-hover:translate-x-1">→</span>
                        </span>
                      </div>
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
