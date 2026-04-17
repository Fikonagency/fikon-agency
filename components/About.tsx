import { team } from '@/lib/data';
import Reveal from './Reveal';

export default function About() {
  return (
    <section id="team" className="bg-cream text-plommon px-6 py-24 md:py-32 border-t border-plommon/10">
      <div className="mx-auto max-w-4xl">
        <Reveal>
          <p className="text-bordeaux text-xs tracking-[0.3em] uppercase mb-10">Teamet</p>
        </Reveal>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
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
