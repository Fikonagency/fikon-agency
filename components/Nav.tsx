'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const LINKS = [
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/tjanster', label: 'Tjänster' },
  { href: '/om', label: 'Om oss' },
  { href: '/kontakt', label: 'Kontakt' }
];

export default function Nav() {
  const pathname = usePathname();
  const isHome = pathname === '/';
  const [scrolled, setScrolled] = useState(!isHome);

  useEffect(() => {
    if (!isHome) {
      setScrolled(true);
      return;
    }
    const onScroll = () => setScrolled(window.scrollY > 120);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [isHome]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-40 h-16 md:h-20 transition-[background-color,border-color] duration-500 ${
        scrolled
          ? 'bg-cream border-b border-plommon/10'
          : 'bg-cream/0 border-b border-transparent'
      }`}
    >
      <div className="mx-auto max-w-[1500px] h-full pl-3 pr-4 md:pl-4 md:pr-10 flex items-center justify-between">
        <Link
          href="/"
          aria-label="Fikon Agency"
          className={`relative block shrink-0 transition-opacity duration-500 ${
            isHome && !scrolled ? 'opacity-0 pointer-events-none' : 'opacity-100'
          }`}
          style={{ width: 52, height: 52 }}
        >
          <span
            aria-hidden
            className="block w-full h-full bg-plommon"
            style={{
              WebkitMaskImage: "url('/brand/bb-03.png')",
              maskImage: "url('/brand/bb-03.png')",
              WebkitMaskSize: 'contain',
              maskSize: 'contain',
              WebkitMaskRepeat: 'no-repeat',
              maskRepeat: 'no-repeat',
              WebkitMaskPosition: 'center',
              maskPosition: 'center'
            }}
          />
        </Link>
        <ul
          className={`flex items-center gap-0.5 sm:gap-1 md:gap-3 text-sm tracking-wide transition-colors duration-500 ${
            scrolled
              ? 'text-plommon/75'
              : 'text-cream/95 [text-shadow:0_2px_10px_rgba(42,19,24,0.7)]'
          }`}
        >
          {LINKS.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className={`inline-flex items-center min-h-[44px] px-2 sm:px-3 py-2 transition-colors ${scrolled ? 'hover:text-bordeaux' : 'hover:text-rose'}`}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
