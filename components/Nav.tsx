'use client';

import { useEffect, useState } from 'react';

const MASK_STYLE: React.CSSProperties = {
  WebkitMaskImage: "url('/brand/fikon-fig.png')",
  maskImage: "url('/brand/fikon-fig.png')",
  WebkitMaskSize: 'contain',
  maskSize: 'contain',
  WebkitMaskRepeat: 'no-repeat',
  maskRepeat: 'no-repeat',
  WebkitMaskPosition: 'center',
  maskPosition: 'center'
};

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-40 transition-colors duration-300 ${
        scrolled
          ? 'bg-cream/90 backdrop-blur-md border-b border-plommon/5'
          : 'bg-transparent'
      }`}
    >
      <div className="mx-auto max-w-[1400px] px-6 md:px-10 h-16 flex items-center justify-between">
        <a href="#top" aria-label="Fikon Agency" className="block">
          <span
            aria-hidden
            className={`block w-7 h-7 md:w-8 md:h-8 transition-colors duration-300 ${
              scrolled ? 'bg-plommon' : 'bg-cream'
            }`}
            style={MASK_STYLE}
          />
        </a>
        <ul
          className={`flex items-center gap-6 md:gap-10 text-sm tracking-wide transition-colors duration-300 ${
            scrolled ? 'text-plommon/70' : 'text-cream/80'
          }`}
        >
          <li>
            <a
              href="#arbeten"
              className={`transition-colors ${
                scrolled ? 'hover:text-plommon' : 'hover:text-cream'
              }`}
            >
              Arbeten
            </a>
          </li>
          <li>
            <a
              href="#om"
              className={`transition-colors ${
                scrolled ? 'hover:text-plommon' : 'hover:text-cream'
              }`}
            >
              Om
            </a>
          </li>
          <li>
            <a
              href="#kontakt"
              className={`transition-colors ${
                scrolled ? 'hover:text-plommon' : 'hover:text-cream'
              }`}
            >
              Kontakt
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
