import Link from 'next/link';
import Reveal from './Reveal';
import { projects, photos } from '@/lib/data';
import FeaturedScroller, { type GalleryItem } from './FeaturedScroller';

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

const ASPECT_POOL: GalleryItem['aspect'][] = [
  'portrait',
  'landscape',
  'square',
  'portrait',
  'landscape',
  'portrait'
];

export default async function FeaturedWork() {
  const featured = projects.filter((p) => p.featured);
  const withThumbs = await Promise.all(
    featured.map(async (p) => ({
      ...p,
      thumb: await getThumb(p.vimeoId)
    }))
  );

  // Build ribbon: all photos + thumbnails interleaved, plus photos again so the loop feels deep.
  const items: GalleryItem[] = [];
  let ap = 0;
  const nextAspect = (): GalleryItem['aspect'] => ASPECT_POOL[ap++ % ASPECT_POOL.length];

  withThumbs.forEach((p, i) => {
    items.push({
      kind: 'video',
      id: `v-${p.id}`,
      href: `/portfolio/${p.id}`,
      src: p.thumb,
      aspect: p.kind === 'social' ? 'portrait' : 'landscape'
    });
    const a = photos[i % photos.length];
    items.push({ kind: 'photo', id: `ph-${i}-a-${a}`, src: `/images/${a}-1600.webp`, aspect: nextAspect() });
    const b = photos[(i + 3) % photos.length];
    items.push({ kind: 'photo', id: `ph-${i}-b-${b}`, src: `/images/${b}-1600.webp`, aspect: nextAspect() });
  });
  // Tail: full shuffle of all photos so the ribbon has plenty to scan.
  photos.forEach((p, i) => {
    items.push({ kind: 'photo', id: `ph-tail-${i}-${p}`, src: `/images/${p}-1600.webp`, aspect: nextAspect() });
  });
  photos.forEach((p, i) => {
    items.push({ kind: 'photo', id: `ph-tail2-${i}-${p}`, src: `/images/${p}-2400.webp`, aspect: nextAspect() });
  });

  return (
    <section className="bg-cream text-plommon py-28 md:py-36 border-t border-plommon/10">
      <div className="mx-auto max-w-[1500px] px-6 md:px-10">
        <Reveal>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-10 md:mb-14">
            <div>
              <p className="text-rose text-xs tracking-[0.3em] uppercase mb-4">
                Ögonblick
              </p>
              <h2 className="font-display text-display-lg text-balance max-w-2xl">
                Stillbilder <span className="italic">från jobbet.</span>
              </h2>
            </div>
            <Link
              href="/portfolio"
              className="hidden md:inline-flex items-center gap-3 text-plommon font-display text-base hover:text-bordeaux transition-colors group shrink-0"
            >
              <span className="underline underline-offset-8 decoration-plommon/30 group-hover:decoration-rose">
                Hela portfolion
              </span>
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </Link>
          </div>
        </Reveal>
      </div>

      <FeaturedScroller items={items} />

      <div className="mt-10 md:hidden text-center">
        <Link
          href="/portfolio"
          className="inline-flex items-center gap-3 text-plommon font-display text-base hover:text-bordeaux transition-colors group"
        >
          <span className="underline underline-offset-8 decoration-plommon/30">
            Hela portfolion
          </span>
          <span className="transition-transform group-hover:translate-x-1">→</span>
        </Link>
      </div>
    </section>
  );
}
