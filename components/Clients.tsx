import { clients } from '@/lib/data';
import Reveal from './Reveal';

export default function Clients() {
  return (
    <section className="bg-cream text-plommon border-t border-plommon/10 px-6 py-20 md:py-28">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <p className="text-plommon/50 text-xs tracking-[0.3em] uppercase mb-10 text-center">
            Arbetat med
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <ul className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6 md:gap-x-16">
            {clients.map((c) => (
              <li key={c} className="font-display text-lg md:text-xl text-plommon/75">
                {c}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
