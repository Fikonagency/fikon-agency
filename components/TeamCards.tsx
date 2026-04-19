import Reveal from './Reveal';
import { team, contact, btsPhotos } from '@/lib/data';

const FIG_MASK: React.CSSProperties = {
  WebkitMaskImage: "url('/brand/fikon-fig.png')",
  maskImage: "url('/brand/fikon-fig.png')",
  WebkitMaskSize: 'contain',
  maskSize: 'contain',
  WebkitMaskRepeat: 'no-repeat',
  maskRepeat: 'no-repeat',
  WebkitMaskPosition: 'center',
  maskPosition: 'center'
};

/** Scatter positions for BTS images around the central portraits (desktop only). */
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
  { src: 'bts-01', top: '2%',  left: '1%',   width: '17%', rotate: -4 },
  { src: 'bts-04', top: '0%',  right: '2%',  width: '15%', rotate: 3 },
  { src: 'bts-07', top: '22%', left: '0%',   width: '13%', rotate: 5, hidden: 'md' },
  { src: 'bts-09', top: '18%', right: '0%',  width: '14%', rotate: -6, hidden: 'md' },
  { src: 'bts-11', top: '44%', left: '2%',   width: '16%', rotate: -2 },
  { src: 'bts-13', top: '50%', right: '1%',  width: '17%', rotate: 4 },
  { src: 'bts-14', top: '72%', left: '0%',   width: '15%', rotate: 6, hidden: 'md' },
  { src: 'bts-16', top: '78%', right: '1%',  width: '14%', rotate: -5, hidden: 'md' },
  { src: 'bts-17', top: '90%', left: '14%',  width: '12%', rotate: 3 },
  { src: 'bts-02', top: '88%', right: '16%', width: '13%', rotate: -4 }
];

export default function TeamCards() {
  return (
    <section className="bg-cream text-plommon px-6 md:px-10 pt-32 md:pt-40 pb-16 md:pb-20 overflow-hidden">
      <div className="mx-auto max-w-[1500px]">
        <Reveal>
          <p className="text-rose text-xs tracking-[0.4em] uppercase mb-5">Teamet</p>
          <h1 className="font-display text-display-lg md:text-display-xl text-balance max-w-[22ch] mb-12 md:mb-20">
            Möt <span className="italic text-bordeaux">Fikon Agency.</span>
          </h1>
        </Reveal>

        {/* Scatter + portraits stage (desktop) */}
        <div className="relative hidden md:block">
          {/* scatter BTS layer */}
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

          {/* portraits */}
          <ul className="relative grid grid-cols-2 gap-8 lg:gap-16 py-12 px-[12%]">
            {team.map((m, i) => (
              <li key={m.slug}>
                <Reveal delay={i * 0.1}>
                  <PortraitCard member={m} />
                </Reveal>
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile: simple stacked portraits, BTS grid below */}
        <div className="md:hidden">
          <ul className="grid grid-cols-1 gap-14">
            {team.map((m, i) => (
              <li key={m.slug}>
                <Reveal delay={i * 0.08}>
                  <PortraitCard member={m} />
                </Reveal>
              </li>
            ))}
          </ul>
          <div className="mt-16">
            <p className="text-rose text-[10px] tracking-[0.3em] uppercase mb-4">Bakom kulisserna</p>
            <div className="grid grid-cols-2 gap-2">
              {btsPhotos.slice(0, 8).map((b) => (
                <div key={b} className="aspect-[4/3] overflow-hidden ring-1 ring-plommon/10">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={`/images/${b}-800.webp`} alt="" loading="lazy" className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function PortraitCard({ member: m }: { member: (typeof team)[number] }) {
  const tint = m.slug === 'zana' ? 'bg-plommon' : 'bg-bordeaux';
  return (
    <article className="flex flex-col items-center text-center">
      <div className="relative w-[240px] md:w-[280px] lg:w-[320px] aspect-square">
        {/* soft halo behind the fig-masked portrait */}
        <span
          aria-hidden
          className={`absolute inset-0 ${tint} opacity-15 blur-2xl`}
          style={FIG_MASK}
        />
        {/* fig-masked photo */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={`/images/${m.portrait}-1600.webp`}
          alt={m.name}
          className="absolute inset-0 w-full h-full object-cover"
          style={FIG_MASK}
        />
      </div>
      <h2 className="mt-7 font-display text-3xl md:text-4xl">{m.name}</h2>
      <ul className="mt-3 text-rose text-sm md:text-base space-y-0.5">
        {m.craft.map((c) => (
          <li key={c}>{c}</li>
        ))}
      </ul>
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
    </article>
  );
}
