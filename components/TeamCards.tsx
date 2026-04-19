import Reveal from './Reveal';
import { team, contact } from '@/lib/data';

export default function TeamCards() {
  return (
    <section className="bg-cream text-plommon px-6 md:px-10 pt-40 md:pt-48 pb-20 md:pb-24">
      <div className="mx-auto max-w-[1500px]">
        <Reveal>
          <p className="text-rose text-xs tracking-[0.4em] uppercase mb-5">Teamet</p>
          <h1 className="font-display text-display-lg text-balance max-w-[18ch] mb-16 md:mb-24">
            Det är vi som <span className="italic text-bordeaux">får det att hända.</span>
          </h1>
        </Reveal>

        <ul className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
          {team.map((m, i) => (
            <li key={m.slug}>
              <Reveal delay={i * 0.08}>
                <article className="flex flex-col items-center text-center">
                  <FigMark tint={i === 0 ? 'plommon' : 'bordeaux'} />
                  <h2 className="mt-7 font-display text-2xl md:text-3xl">
                    {m.name}
                  </h2>
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

function FigMark({ tint }: { tint: 'plommon' | 'bordeaux' }) {
  const tintClass = tint === 'plommon' ? 'bg-plommon' : 'bg-bordeaux';
  return (
    <div className="relative w-[200px] md:w-[260px] aspect-square">
      <span
        aria-hidden
        className={`absolute inset-0 ${tintClass}`}
        style={{
          WebkitMaskImage: "url('/brand/fikon-fig.png')",
          maskImage: "url('/brand/fikon-fig.png')",
          WebkitMaskSize: 'contain',
          maskSize: 'contain',
          WebkitMaskRepeat: 'no-repeat',
          maskRepeat: 'no-repeat',
          WebkitMaskPosition: 'center',
          maskPosition: 'center'
        }}
      />
    </div>
  );
}
