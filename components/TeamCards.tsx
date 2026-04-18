import Reveal from './Reveal';
import FigClip from './FigClip';
import { team, contact } from '@/lib/data';

export default function TeamCards() {
  return (
    <section className="bg-cream text-plommon px-6 md:px-10 py-20 md:py-24 border-t border-plommon/15">
      <FigClip />
      <div className="mx-auto max-w-[1500px]">
        <Reveal>
          <p className="text-rose text-xs tracking-[0.4em] uppercase mb-4">Teamet</p>
          <h2 className="font-display text-display-md md:text-display-lg text-balance mb-12 md:mb-16 max-w-3xl">
            Det är vi som <span className="italic text-bordeaux">får det att hända.</span>
          </h2>
        </Reveal>

        <ul className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
          {team.map((m, i) => (
            <li key={m.slug}>
              <Reveal delay={i * 0.08}>
                <article className="flex flex-col items-center text-center">
                  <FigPortrait slug={m.slug} tint={i === 0 ? 'rose' : 'plommon'} />
                  <h3 className="mt-7 font-display text-2xl md:text-3xl">
                    {m.name}
                  </h3>
                  <p className="mt-2 text-rose text-[10px] md:text-xs tracking-[0.3em] uppercase">
                    {m.role}
                  </p>
                  <div className="mt-4 flex flex-wrap justify-center gap-x-5 gap-y-1.5 text-xs text-plommon/70">
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
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function FigPortrait({
  slug,
  tint
}: {
  slug: 'zana' | 'mirna';
  tint: 'rose' | 'plommon';
}) {
  const tintHex = tint === 'rose' ? '#C3808D' : '#2A1318';
  return (
    <div className="relative w-[220px] md:w-[280px]">
      <div className="relative w-full" style={{ aspectRatio: '1 / 1.2' }}>
        {/* Soft tint backdrop — same fig silhouette, slight offset to read as "stamped" */}
        <span
          aria-hidden
          className="absolute inset-0 translate-x-3 translate-y-3 md:translate-x-4 md:translate-y-4"
          style={{
            backgroundColor: tintHex,
            clipPath: 'url(#fig-clip)',
            WebkitClipPath: 'url(#fig-clip)',
            opacity: 0.9
          }}
        />
        {/* Photo masked to the fig silhouette */}
        <div
          className="absolute inset-0"
          style={{
            clipPath: 'url(#fig-clip)',
            WebkitClipPath: 'url(#fig-clip)'
          }}
        >
          <picture>
            <source
              type="image/avif"
              srcSet={`/team/${slug}-600.avif 600w, /team/${slug}-1200.avif 1200w`}
              sizes="(min-width: 768px) 280px, 220px"
            />
            <source
              type="image/webp"
              srcSet={`/team/${slug}-600.webp 600w, /team/${slug}-1200.webp 1200w`}
              sizes="(min-width: 768px) 280px, 220px"
            />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`/team/${slug}-1200.webp`}
              alt=""
              className="w-full h-full object-cover"
            />
          </picture>
        </div>
        {/* Fikon illustration on top — outline + seeds, blended to feel part of the portrait */}
        <span
          aria-hidden
          className="absolute inset-0 pointer-events-none mix-blend-multiply"
          style={{
            backgroundImage: "url('/brand/fikon-fig-plommon.png')",
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundSize: 'contain',
            opacity: 0.55
          }}
        />
      </div>
    </div>
  );
}
