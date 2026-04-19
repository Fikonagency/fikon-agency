import { contact } from '@/lib/data';
import Reveal from './Reveal';
import ContactForm from './ContactForm';

export default function Contact() {
  return (
    <>
      <section
        id="kontakt"
        className="relative bg-cream text-plommon px-6 md:px-10 pt-40 md:pt-48 pb-16 md:pb-24"
      >
        <div className="mx-auto max-w-[1500px]">
          <Reveal>
            <p className="text-rose text-xs tracking-[0.4em] uppercase mb-5">Kontakt</p>
            <h1 className="font-display text-display-xl text-balance max-w-[14ch]">
              Frågor? <span className="italic text-rose">Slå oss en pling.</span>
            </h1>
          </Reveal>
        </div>
      </section>

      <section className="relative bg-cream text-plommon px-6 md:px-10 py-10 md:py-14">
        <div className="mx-auto max-w-[1500px] grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16">
          <div className="md:col-span-5 space-y-10">
            <Reveal>
              <div>
                <p className="text-rose text-[10px] tracking-[0.3em] uppercase mb-3">
                  Mejla oss
                </p>
                <a
                  href={`mailto:${contact.email}`}
                  className="font-display text-2xl md:text-3xl lg:text-4xl hover:text-bordeaux transition-colors break-all"
                >
                  {contact.email}
                </a>
                <p className="mt-3 text-plommon/70 max-w-sm">
                  Har du inte tid att slå en signal — skriv ett mejl så hör vi av oss.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.05}>
              <div>
                <p className="text-rose text-[10px] tracking-[0.3em] uppercase mb-3">
                  Här finns vi
                </p>
                <p className="font-display text-lg">Fikon Agency</p>
                <p className="text-plommon/70">Malmö · Sverige</p>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div>
                <p className="text-rose text-[10px] tracking-[0.3em] uppercase mb-3">
                  Sociala
                </p>
                <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-plommon/80">
                  <li>
                    <a
                      href={contact.instagram}
                      target="_blank"
                      rel="noreferrer"
                      className="hover:text-bordeaux transition-colors"
                    >
                      Instagram
                    </a>
                  </li>
                  <li aria-hidden className="text-rose">·</li>
                  <li>
                    <a
                      href={contact.linkedin}
                      target="_blank"
                      rel="noreferrer"
                      className="hover:text-bordeaux transition-colors"
                    >
                      LinkedIn
                    </a>
                  </li>
                  <li aria-hidden className="text-rose">·</li>
                  <li>
                    <a
                      href={contact.vimeo}
                      target="_blank"
                      rel="noreferrer"
                      className="hover:text-bordeaux transition-colors"
                    >
                      Vimeo
                    </a>
                  </li>
                </ul>
              </div>
            </Reveal>
          </div>

          <div className="md:col-span-7">
            <Reveal>
              <ContactForm />
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
