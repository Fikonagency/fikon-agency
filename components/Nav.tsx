'use client';

import { useEffect, useState } from 'react';

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
        scrolled ? 'bg-plommon/85 backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <div className="mx-auto max-w-[1400px] px-6 md:px-10 h-16 flex items-center justify-between">
        <a href="#top" className="text-cream font-display text-xl tracking-tight lowercase">
          fikon
        </a>
        <ul className="flex items-center gap-6 md:gap-10 text-sm text-cream/80">
          <li>
            <a className="hover:text-cream transition-colors" href="#arbeten">
              Arbeten
            </a>
          </li>
          <li>
            <a className="hover:text-cream transition-colors" href="#om">
              Om
            </a>
          </li>
          <li>
            <a className="hover:text-cream transition-colors" href="#kontakt">
              Kontakt
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
