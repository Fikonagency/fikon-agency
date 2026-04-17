'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function Nav() {
  const pathname = usePathname();
  const isHome = pathname === '/';
  const [scrolled, setScrolled] = useState(!isHome);

  useEffect(() => {
    if (!isHome) {
      setScrolled(true);
      return;
    }
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [isHome]);

  const dark = scrolled;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-40 transition-colors duration-300 ${
        dark
          ? 'bg-cream/92 backdrop-blur-md border-b border-plommon/5'
          : 'bg-transparent'
      }`}
    >
      <div className="mx-auto max-w-[1500px] px-6 md:px-10 h-20 md:h-24 flex items-center justify-between">
        <Link
          href="/"
          aria-label="Fikon Agency"
          className="relative block h-10 md:h-14 w-[220px] md:w-[300px]"
        >
          <Image
            src="/brand/fikon-wordmark.png"
            alt="Fikon Agency"
            fill
            priority
            sizes="300px"
            className={`object-contain object-left transition-opacity duration-300 ${
              dark ? 'opacity-0' : 'opacity-100'
            }`}
          />
          <Image
            src="/brand/fikon-wordmark-plommon.png"
            alt=""
            aria-hidden
            fill
            priority
            sizes="300px"
            className={`object-contain object-left transition-opacity duration-300 ${
              dark ? 'opacity-100' : 'opacity-0'
            }`}
          />
        </Link>
        <ul
          className={`flex items-center gap-6 md:gap-10 text-sm tracking-wide transition-colors duration-300 ${
            dark ? 'text-plommon/70' : 'text-cream/80'
          }`}
        >
          <li>
            <Link
              href="/arbeten"
              className={`transition-colors ${
                dark ? 'hover:text-plommon' : 'hover:text-cream'
              }`}
            >
              Arbeten
            </Link>
          </li>
          <li>
            <Link
              href="/om"
              className={`transition-colors ${
                dark ? 'hover:text-plommon' : 'hover:text-cream'
              }`}
            >
              Om
            </Link>
          </li>
          <li>
            <Link
              href="/kontakt"
              className={`transition-colors ${
                dark ? 'hover:text-plommon' : 'hover:text-cream'
              }`}
            >
              Kontakt
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
