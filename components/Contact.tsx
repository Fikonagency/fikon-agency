import { contact } from '@/lib/data';
import Reveal from './Reveal';

const SERVICE_OPTIONS = [
  'Film & reklamfilm',
  'Foto & kampanjbilder',
  'Branding & identitet',
  'Social media / Paid',
  'SEO & webb',
  'Strategi / rådgivning',
  'Annat'
];

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
              <form
                action={`mailto:${contact.email}`}
                method="post"
                encType="text/plain"
                className="bg-cream ring-1 ring-plommon/15 p-6 md:p-10 space-y-6"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Field name="name" label="Namn" required />
                  <Field name="company" label="Företag" />
                  <Field name="email" label="Email" type="email" required />
                  <Field name="phone" label="Telefon" type="tel" />
                </div>
                <label className="block">
                  <span className="block text-rose text-[10px] tracking-[0.3em] uppercase mb-2">
                    Typ av projekt
                  </span>
                  <select
                    name="service"
                    className="w-full bg-transparent border-b border-plommon/30 py-3 text-plommon focus:outline-none focus:border-bordeaux"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Välj …
                    </option>
                    {SERVICE_OPTIONS.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                </label>
                <label className="block">
                  <span className="block text-rose text-[10px] tracking-[0.3em] uppercase mb-2">
                    Kort om vad ni vill göra
                  </span>
                  <textarea
                    name="message"
                    rows={5}
                    className="w-full bg-transparent border-b border-plommon/30 py-3 text-plommon resize-y focus:outline-none focus:border-bordeaux"
                  />
                </label>
                <button
                  type="submit"
                  className="inline-flex items-center gap-3 px-8 py-3 bg-plommon text-cream font-display text-lg hover:bg-bordeaux transition-colors"
                >
                  Skicka
                  <span aria-hidden>→</span>
                </button>
                <p className="text-xs text-plommon/55">
                  Formuläret öppnar din mejlklient. Föredrar du att skriva direkt — mejla{' '}
                  <a
                    href={`mailto:${contact.email}`}
                    className="underline decoration-rose underline-offset-4"
                  >
                    {contact.email}
                  </a>
                  .
                </p>
              </form>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}

function Field({
  name,
  label,
  type = 'text',
  required
}: {
  name: string;
  label: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <label className="block">
      <span className="block text-rose text-[10px] tracking-[0.3em] uppercase mb-2">
        {label}
        {required && <span aria-hidden> *</span>}
      </span>
      <input
        type={type}
        name={name}
        required={required}
        className="w-full bg-transparent border-b border-plommon/30 py-3 text-plommon focus:outline-none focus:border-bordeaux"
      />
    </label>
  );
}
