import { team } from '@/lib/data';
import Reveal from './Reveal';

export default function About() {
  return (
    <section
      id="team"
      className="bg-cream text-plommon px-6 py-24 md:py-32 border-t border-plommon/10"
    >
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <p className="text-bordeaux text-xs tracking-[0.3em] uppercase mb-4">Teamet</p>
          <h2 className="font-display text-display-lg mb-16 md:mb-24 text-balance max-w-2xl">
            Kreation, teknik, strategi{' '}
            <span className="italic">och sälj.</span>
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
          {team.map((m, i) => (
            <Reveal key={m.name} delay={i * 0.08}>
              <div className="border-t border-plommon/15 pt-8">
                <h3 className="font-display text-3xl md:text-4xl">{m.name}</h3>
                <p className="mt-2 text-bordeaux text-xs tracking-[0.2em] uppercase">
                  {m.role}
                </p>
                <p className="mt-6 text-plommon/80 leading-relaxed max-w-sm">
                  {m.bio}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
