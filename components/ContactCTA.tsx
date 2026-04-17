import Link from 'next/link';
import Reveal from './Reveal';
import FigDecor from './FigDecor';

export default function ContactCTA() {
  return (
    <section className="relative bg-plommon text-cream px-6 py-32 md:py-48 overflow-hidden">
      <FigDecor variant="cream" count={4} />
      <div className="relative mx-auto max-w-4xl text-center">
        <Reveal>
          <p className="text-rose text-xs tracking-[0.3em] uppercase mb-6">Säg hej</p>
          <h2 className="font-display text-display-xl mb-10 md:mb-12 text-balance">
            Ska vi ta en fika <span className="italic">och prata?</span>
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <Link
            href="/kontakt"
            className="inline-flex items-center gap-4 px-8 py-4 md:px-10 md:py-5 bg-cream text-plommon font-display text-lg md:text-xl hover:bg-rose transition-colors group"
          >
            Hör av dig
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
