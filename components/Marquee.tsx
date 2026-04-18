'use client';

import { motion } from 'framer-motion';

type Token = { word: string; color: 'plommon' | 'bordeaux' | 'rose' };

const SERVICES: Token[] = [
  { word: 'Film', color: 'plommon' },
  { word: 'Foto', color: 'bordeaux' },
  { word: 'Reklamfilm', color: 'rose' },
  { word: 'Social media', color: 'plommon' },
  { word: 'SEO', color: 'bordeaux' },
  { word: 'Webb', color: 'rose' },
  { word: 'Paid social', color: 'plommon' },
  { word: 'Google Ads', color: 'bordeaux' },
  { word: 'Branding', color: 'rose' },
  { word: 'Identitet', color: 'plommon' },
  { word: 'Strategi', color: 'bordeaux' },
  { word: 'Copy', color: 'rose' },
  { word: 'Motion', color: 'plommon' },
  { word: 'Event', color: 'bordeaux' },
  { word: 'Grafisk design', color: 'rose' },
  { word: 'Analys', color: 'plommon' },
  { word: 'Retouch', color: 'bordeaux' },
  { word: 'Kampanj', color: 'rose' }
];

const COLOR_CLASS: Record<Token['color'], string> = {
  plommon: 'text-plommon',
  bordeaux: 'text-bordeaux',
  rose: 'text-rose'
};

const EDGE_MASK =
  'linear-gradient(to right, transparent, black 8%, black 92%, transparent)';

function Row() {
  return (
    <span className="inline-flex items-center whitespace-nowrap font-display text-2xl md:text-4xl italic">
      {SERVICES.map((t, i) => (
        <span key={i} className={`${COLOR_CLASS[t.color]} px-5 md:px-8 inline-flex items-center`}>
          {t.word}
          <span aria-hidden className="ml-5 md:ml-8 text-rose/70 text-base md:text-2xl not-italic">
            ·
          </span>
        </span>
      ))}
    </span>
  );
}

export default function Marquee() {
  return (
    <div className="relative bg-cream overflow-hidden py-6 md:py-8 border-y border-plommon/15">
      <motion.div
        className="flex whitespace-nowrap will-change-transform"
        style={{ WebkitMaskImage: EDGE_MASK, maskImage: EDGE_MASK }}
        animate={{ x: ['0%', '-50%'] }}
        transition={{ duration: 28, repeat: Infinity, ease: 'linear' }}
      >
        <Row />
        <Row />
      </motion.div>
    </div>
  );
}
