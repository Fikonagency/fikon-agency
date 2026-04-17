import { contact } from '@/lib/data';
import Reveal from './Reveal';
import FigDecor from './FigDecor';

export default function Contact() {
  return (
    <section
      id="kontakt"
      className="relative bg-cream text-plommon px-6 pt-40 md:pt-48 pb-32 md:pb-48 overflow-hidden"
    >
      <FigDecor variant="plommon" count={3} />
      <div className="relative mx-auto max-w-4xl text-center">
        <Reveal>
          <p className="text-bordeaux text-xs tracking-[0.3em] uppercase mb-4">Kontakt</p>
          <h1 className="font-display text-display-xl mb-8">Säg hej.</h1>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="text-lg md:text-xl text-plommon/75 max-w-2xl mx-auto leading-relaxed">
            Har du ett projekt eller en idé? Skriv till oss — vi svarar inom dagen.
          </p>
        </Reveal>

        <Reveal delay={0.2}>
          <a
            href={`mailto:${contact.email}`}
            className="mt-14 md:mt-20 inline-block font-display text-3xl md:text-5xl hover:text-bordeaux transition-colors underline underline-offset-[12px] decoration-bordeaux/40 hover:decoration-bordeaux"
          >
            {contact.email}
          </a>
        </Reveal>

        <Reveal delay={0.3}>
          <ul className="mt-16 md:mt-24 flex items-center justify-center gap-8 md:gap-14 text-xs tracking-[0.3em] uppercase">
            <li>
              <a
                href={contact.instagram}
                target="_blank"
                rel="noreferrer"
                className="text-plommon/60 hover:text-plommon transition-colors"
              >
                Instagram
              </a>
            </li>
            <li>
              <a
                href={contact.linkedin}
                target="_blank"
                rel="noreferrer"
                className="text-plommon/60 hover:text-plommon transition-colors"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href={contact.vimeo}
                target="_blank"
                rel="noreferrer"
                className="text-plommon/60 hover:text-plommon transition-colors"
              >
                Vimeo
              </a>
            </li>
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
