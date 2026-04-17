import { team } from '@/lib/data';
import Reveal from './Reveal';

export default function About() {
  return (
    <section id="om" className="bg-cream text-plommon px-6 py-32 md:py-48">
      <div className="mx-auto max-w-4xl">
        <Reveal>
          <p className="text-bordeaux text-xs tracking-[0.3em] uppercase mb-6">Om</p>
          <h2 className="font-display text-display-lg mb-16 md:mb-24 text-balance">
            Fikon är <span className="italic">Zana och Mirna</span>. Vi jobbar med
            varumärken som vill synas utan att skrika.
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 max-w-3xl">
          {team.map((m, i) => (
            <Reveal key={m.name} delay={i * 0.08}>
              <div>
                <h3 className="font-display text-2xl md:text-3xl">{m.name}</h3>
                <p className="mt-1 text-bordeaux text-xs tracking-[0.2em] uppercase">
                  {m.role}
                </p>
                <p className="mt-5 text-plommon/80 leading-relaxed">{m.bio}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
