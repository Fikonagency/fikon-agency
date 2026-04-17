import { services } from '@/lib/data';
import Reveal from './Reveal';
import FigDecor from './FigDecor';

export default function Services() {
  return (
    <section
      id="services"
      className="relative bg-cream text-plommon px-6 py-32 md:py-48 border-t border-plommon/10 overflow-hidden"
    >
      <FigDecor variant="plommon" count={3} />
      <div className="relative mx-auto max-w-[1400px]">
        <Reveal>
          <p className="text-bordeaux text-xs tracking-[0.3em] uppercase mb-4">Vad vi gör</p>
          <h2 className="font-display text-display-lg mb-20 md:mb-28 text-balance max-w-3xl">
            En reklambyrå.{' '}
            <span className="italic">Från idé till färdig film.</span>
          </h2>
        </Reveal>

        <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-12 md:gap-x-20">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.05}>
              <li className="border-t border-plommon/10 py-10 md:py-14 flex items-start gap-6">
                <span className="font-display text-sm text-caramel mt-2 tabular-nums">
                  0{i + 1}
                </span>
                <div className="flex-1">
                  <h3 className="font-display text-2xl md:text-3xl">{s.title}</h3>
                  <p className="mt-3 text-plommon/70 text-sm md:text-base leading-relaxed max-w-md">
                    {s.description}
                  </p>
                </div>
              </li>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
