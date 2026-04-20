import Link from 'next/link';
import Reveal from './Reveal';

const BG = '0Y9A0495';

export default function ContactCTA() {
  return (
    <section className="relative bg-cream text-plommon overflow-hidden border-t border-plommon/15">
      <div className="relative mx-auto max-w-[1500px] px-6 md:px-10 py-14 md:py-24">
        <div
          aria-hidden
          className="absolute inset-x-6 md:inset-x-10 top-8 bottom-8 md:top-12 md:bottom-12 overflow-hidden ring-1 ring-plommon/20"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={`/images/${BG}-2400.webp`}
            alt=""
            className="absolute inset-0 w-full h-full object-cover"
            style={{ filter: 'brightness(0.5) saturate(0.85)' }}
          />
          <div className="absolute inset-0 bg-plommon/55" />
          <span
            className="absolute hidden md:block"
            style={{
              left: '6%',
              top: '14%',
              width: 160,
              height: 160,
              backgroundColor: '#F5F1E8',
              WebkitMaskImage: "url('/brand/fikon-fig.png')",
              maskImage: "url('/brand/fikon-fig.png')",
              WebkitMaskSize: 'contain',
              maskSize: 'contain',
              WebkitMaskRepeat: 'no-repeat',
              maskRepeat: 'no-repeat',
              transform: 'rotate(-16deg)',
              opacity: 0.92
            }}
          />
          <span
            className="absolute hidden md:block"
            style={{
              right: '8%',
              bottom: '12%',
              width: 220,
              height: 220,
              backgroundColor: '#F5F1E8',
              WebkitMaskImage: "url('/brand/fikon-fig.png')",
              maskImage: "url('/brand/fikon-fig.png')",
              WebkitMaskSize: 'contain',
              maskSize: 'contain',
              WebkitMaskRepeat: 'no-repeat',
              maskRepeat: 'no-repeat',
              transform: 'rotate(18deg)',
              opacity: 0.88
            }}
          />
          <span
            className="absolute hidden md:block"
            style={{
              right: '28%',
              top: '10%',
              width: 90,
              height: 90,
              backgroundColor: '#C3808D',
              WebkitMaskImage: "url('/brand/fikon-fig.png')",
              maskImage: "url('/brand/fikon-fig.png')",
              WebkitMaskSize: 'contain',
              maskSize: 'contain',
              WebkitMaskRepeat: 'no-repeat',
              maskRepeat: 'no-repeat',
              transform: 'rotate(38deg)',
              opacity: 0.85
            }}
          />
        </div>

        <div className="relative py-12 md:py-20 text-center">
          <Reveal>
            <p className="text-rose text-xs md:text-sm tracking-[0.4em] uppercase mb-6">
              Hej!
            </p>
            <h2 className="font-display font-light text-cream leading-[1.05] text-balance drop-shadow-[0_6px_36px_rgba(42,19,24,0.6)] max-w-[22ch] mx-auto text-[clamp(1.8rem,5.4vw,4.2rem)]">
              Skriv till oss.
              <br />
              <span className="text-rose">Vi svarar samma dag.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <Link
              href="/kontakt"
              className="mt-10 md:mt-14 inline-flex items-center gap-4 px-8 py-4 md:px-10 md:py-5 bg-cream text-plommon font-display font-medium text-lg md:text-xl hover:bg-rose hover:text-plommon transition-colors group shadow-[0_12px_48px_-12px_rgba(42,19,24,0.5)]"
            >
              Kontakta oss
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
