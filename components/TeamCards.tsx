import Reveal from './Reveal';
import { team, contact } from '@/lib/data';

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

export default function TeamCards() {
  return (
    <section className="relative text-plommon px-6 md:px-10 pt-32 md:pt-40 pb-10 md:pb-16">
      <div className="relative mx-auto max-w-4xl text-center">
        <Reveal>
          <p className="text-rose text-xs tracking-[0.4em] uppercase mb-5">Teamet</p>
          <h1 className="font-display font-light text-display-lg md:text-display-xl text-balance mb-14 md:mb-20 leading-[1.02] mx-auto">
            Möt <span className="text-bordeaux font-normal">Fikon Agency.</span>
          </h1>
        </Reveal>

        {/* Desktop + tablet: side by side, larger portraits */}
        <ul className="hidden md:grid grid-cols-2 gap-6 lg:gap-10 max-w-3xl mx-auto">
          {team.map((m, i) => (
            <li key={m.slug}>
              <Reveal delay={i * 0.1}>
                <PortraitCard member={m} />
              </Reveal>
            </li>
          ))}
        </ul>

        {/* Mobile: 2-col row */}
        <ul className="md:hidden grid grid-cols-2 gap-4">
          {team.map((m, i) => (
            <li key={m.slug}>
              <Reveal delay={i * 0.08}>
                <PortraitCard member={m} compact />
              </Reveal>
            </li>
          ))}
        </ul>
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
  const imgStyle: React.CSSProperties =
    m.slug === 'zana'
      ? { objectPosition: 'center 0%', transform: 'scale(0.60) translate(-5%, -15%)' }
      : { objectPosition: 'center 30%', transform: 'scale(0.78) translate(-8%, 10%)' };
  return (
    <article className="flex flex-col items-center text-center">
      <div
        className={
          compact
            ? 'relative w-full aspect-square max-w-[200px] mx-auto'
            : 'relative w-full aspect-square max-w-[340px] lg:max-w-[420px] mx-auto'
        }
      >
        {/* soft tinted halo behind */}
        <span
          aria-hidden
          className={`absolute inset-0 ${tint} opacity-12 blur-2xl`}
          style={BB_MASK}
        />
        {/* masked portrait — plommon fill inside mask, image sits inside with scale/offset */}
        <div
          aria-hidden
          className="absolute inset-0 bg-plommon/90"
          style={BB_MASK}
        />
        <div className="absolute inset-0" style={BB_MASK}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={`/images/${m.portrait}-1600.webp`}
            alt={m.name}
            className="w-full h-full object-cover"
            style={imgStyle}
          />
        </div>
      </div>
      <h2
        className={`${compact ? 'mt-4 text-lg' : 'mt-7 text-3xl md:text-4xl lg:text-5xl'} font-display font-medium tracking-tight`}
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
