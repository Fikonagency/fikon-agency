import Link from 'next/link';
import { contact } from '@/lib/data';

const FIG_STYLE: React.CSSProperties = {
  backgroundColor: '#2A1318',
  WebkitMaskImage: "url('/brand/fikon-fig.png')",
  maskImage: "url('/brand/fikon-fig.png')",
  WebkitMaskSize: 'contain',
  maskSize: 'contain',
  WebkitMaskRepeat: 'no-repeat',
  maskRepeat: 'no-repeat',
  WebkitMaskPosition: 'center',
  maskPosition: 'center'
};

export default function Footer() {
  return (
    <footer className="bg-cream text-plommon border-t border-plommon/10">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10 py-16 md:py-24">
        <div className="max-w-xl">
          <Link
            href="/"
            aria-label="Fikon Agency"
            className="block w-14 h-14 md:w-16 md:h-16 mb-6"
            style={FIG_STYLE}
          />
          <p className="font-display text-xl md:text-2xl">Fikon Agency</p>
          <p className="mt-2 text-plommon/60 text-sm max-w-xs">
            Reklambyrå i Malmö. Film, foto och identitet för varumärken som vill
            synas utan att skrika.
          </p>
        </div>

        <ul className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-xs tracking-[0.2em] uppercase text-plommon/65">
          <li>
            <Link href="/portfolio" className="hover:text-bordeaux transition-colors">
              Portfolio
            </Link>
          </li>
          <li aria-hidden className="text-rose">·</li>
          <li>
            <Link href="/om" className="hover:text-bordeaux transition-colors">
              Om
            </Link>
          </li>
          <li aria-hidden className="text-rose">·</li>
          <li>
            <Link href="/kontakt" className="hover:text-bordeaux transition-colors">
              Kontakt
            </Link>
          </li>
          <li aria-hidden className="text-rose">·</li>
          <li>
            <a
              href={`mailto:${contact.email}`}
              className="hover:text-bordeaux transition-colors normal-case tracking-normal text-sm"
            >
              {contact.email}
            </a>
          </li>
          <li aria-hidden className="text-rose">·</li>
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

        <div className="mt-12 pt-6 border-t border-plommon/10 flex flex-col md:flex-row md:items-center justify-between gap-3 text-xs text-plommon/50 tracking-wide">
          <p>© {new Date().getFullYear()} Fikon Agency</p>
          <p>Malmö · Sverige</p>
        </div>
      </div>
    </footer>
  );
}
