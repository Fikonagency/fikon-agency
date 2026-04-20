import Reveal from './Reveal';
import { team, contact, btsPhotos } from '@/lib/data';

const BB_MASK: React.CSSProperties = {
  WebkitMaskImage: "url('/brand/bb-03.png')",
  maskImage: "url('/brand/bb-03.png')",
  WebkitMaskSize: 'contain',
  maskSize: 'contain',
  WebkitMaskRepeat: 'no-repeat',
  maskRepeat: 'no-repeat',
  WebkitMaskPosition: 'center',
  maskPosition: 'center'
};

type Scatter = {
  src: string;
  top: string;
  left?: string;
  right?: string;
  width: string;
  rotate: number;
  hidden?: 'md' | 'lg';
};

const SCATTER: Scatter[] = [
  { src: 'bts-01', top: '2%',  left: '0%',   width: '15%', rotate: -4 },
  { src: 'bts-04', top: '0%',  right: '1%',  width: '14%', rotate: 3 },
  { src: 'bts-07', top: '20%', left: '0%',   width: '12%', rotate: 5, hidden: 'md' },
  { src: 'bts-09', top: '16%', right: '0%',  width: '13%', rotate: -6, hidden: 'md' },
  { src: 'bts-11', top: '44%', left: '1%',   width: '14%', rotate: -2 },
  { src: 'bts-13', top: '50%', right: '0%',  width: '15%', rotate: 4 },
  { src: 'bts-14', top: '72%', left: '0%',   width: '13%', rotate: 6, hidden: 'md' },
  { src: 'bts-16', top: '78%', right: '1%',  width: '12%', rotate: -5, hidden: 'md' }
];

export default function TeamCards() {
  return (
    <section className="bg-cream text-plommon px-6 md:px-10 pt-32 md:pt-40 pb-16 md:pb-20 overflow-hidden">
      <div className="mx-auto max-w-[1500px]">
        <Reveal>
          <p className="text-rose text-xs tracking-[0.4em] uppercase mb-5">Teamet</p>
          <h1 className="font-display font-light text-display-lg md:text-display-xl text-balance max-w-[22ch] mb-12 md:mb-16 leading-[1.02]">
            Möt <span className="text-bordeaux font-normal">Fikon Agency.</span>
          </h1>
        </Reveal>

        {/* Desktop: scatter + portraits stage */}
        <div className="relative hidden md:block">
          <div aria-hidden className="absolute inset-0 pointer-events-none">
            {SCATTER.map((s, i) => (
              <div
                key={s.src + i}
                className={`absolute ${s.hidden === 'md' ? 'hidden lg:block' : ''}`}
                style={{
                  top: s.top,
                  left: s.left,
                  right: s.right,
                  width: s.width,
                  transform: `rotate(${s.rotate}deg)`
                }}
              >
                <div className="aspect-[4/3] overflow-hidden ring-1 ring-plommon/15 shadow-[0_10px_40px_-12px_rgba(42,19,24,0.4)]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={`/images/${s.src}-800.webp`}
                    alt=""
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            ))}
          </div>

          <ul className="relative grid grid-cols-2 gap-3 lg:gap-6 py-10 px-[18%] lg:px-[20%]">
            {team.map((m, i) => (
              <li key={m.slug}>
                <Reveal delay={i * 0.1}>
                  <PortraitCard member={m} />
                </Reveal>
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile: team in 2-col row */}
        <div className="md:hidden">
          <ul className="grid grid-cols-2 gap-4">
            {team.map((m, i) => (
              <li key={m.slug}>
                <Reveal delay={i * 0.08}>
                  <PortraitCard member={m} compact />
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function PortraitCard({
  member: m,
  compact = false
}: {
  member: (typeof team)[number];
  compact?: boolean;
}) {
  const tint = m.slug === 'zana' ? 'bg-plommon' : 'bg-bordeaux';
  return (
    <article className="flex flex-col items-center text-center">
      <div
        className={
          compact
            ? 'relative w-full aspect-square max-w-[180px]'
            : 'relative w-[220px] md:w-[260px] lg:w-[300px] aspect-square'
        }
      >
        <span
          aria-hidden
          className={`absolute inset-0 ${tint} opacity-15 blur-2xl`}
          style={BB_MASK}
        />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={`/images/${m.portrait}-1600.webp`}
          alt={m.name}
          className="absolute inset-0 w-full h-full object-cover"
          style={BB_MASK}
        />
      </div>
      <h2
        className={`${compact ? 'mt-4 text-lg' : 'mt-6 text-2xl md:text-3xl lg:text-4xl'} font-display font-medium tracking-tight`}
      >
        {m.name}
      </h2>
      <ul
        className={`${compact ? 'mt-1.5 text-[11px]' : 'mt-3 text-sm md:text-base'} text-rose space-y-0.5`}
      >
        {m.craft.map((c) => (
          <li key={c}>{c}</li>
        ))}
      </ul>
      {!compact && (
        <div className="mt-5 flex flex-wrap justify-center gap-x-5 gap-y-1.5 text-xs text-plommon/70">
          <a
            href={`mailto:${m.email}`}
            className="hover:text-bordeaux transition-colors"
          >
            {m.email}
          </a>
          <span aria-hidden className="text-rose">·</span>
          <a
            href={contact.instagram}
            target="_blank"
            rel="noreferrer"
            className="hover:text-bordeaux transition-colors"
          >
            Instagram
          </a>
          <span aria-hidden className="text-rose">·</span>
          <a
            href={contact.linkedin}
            target="_blank"
            rel="noreferrer"
            className="hover:text-bordeaux transition-colors"
          >
            LinkedIn
          </a>
        </div>
      )}
      {compact && (
        <a
          href={`mailto:${m.email}`}
          className="mt-2 text-[11px] text-plommon/70 hover:text-bordeaux transition-colors break-all"
        >
          {m.email}
        </a>
      )}
    </article>
  );
}
