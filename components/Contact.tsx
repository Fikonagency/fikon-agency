import { contact } from '@/lib/data';
import Reveal from './Reveal';

export default function Contact() {
  return (
    <section id="kontakt" className="bg-plommon text-cream px-6 py-32 md:py-48">
      <div className="mx-auto max-w-4xl text-center">
        <Reveal>
          <h2 className="font-display text-display-xl">Säg hej.</h2>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="mt-8 text-cream/70 max-w-xl mx-auto leading-relaxed">
            Har du ett projekt eller en idé? Skriv till oss — vi svarar inom dagen.
          </p>
        </Reveal>

        <Reveal delay={0.2}>
          <a
            href={`mailto:${contact.email}`}
            className="mt-12 md:mt-14 inline-block font-display text-2xl md:text-4xl text-cream hover:text-rose transition-colors underline underline-offset-[10px] decoration-rose/40 hover:decoration-rose"
          >
            {contact.email}
          </a>
        </Reveal>

        <Reveal delay={0.3}>
          <ul className="mt-14 md:mt-20 flex items-center justify-center gap-8 md:gap-12 text-xs tracking-[0.3em] uppercase">
            <li>
              <a
                href={contact.instagram}
                target="_blank"
                rel="noreferrer"
                className="text-cream/60 hover:text-cream transition-colors"
              >
                Instagram
              </a>
            </li>
            <li>
              <a
                href={contact.linkedin}
                target="_blank"
                rel="noreferrer"
                className="text-cream/60 hover:text-cream transition-colors"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href={contact.vimeo}
                target="_blank"
                rel="noreferrer"
                className="text-cream/60 hover:text-cream transition-colors"
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
