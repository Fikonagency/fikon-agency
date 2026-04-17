'use client';

import { motion } from 'framer-motion';

type Props = {
  variant?: 'plommon' | 'cream';
  count?: number;
};

type Pos = {
  x: string;
  y: string;
  size: number;
  rotate: number;
  opacity: number;
  dur: number;
};

const POSITIONS: Pos[] = [
  { x: '5%', y: '15%', size: 140, rotate: -15, opacity: 0.07, dur: 9 },
  { x: '82%', y: '60%', size: 200, rotate: 25, opacity: 0.05, dur: 11 },
  { x: '78%', y: '18%', size: 90, rotate: 45, opacity: 0.09, dur: 8 },
  { x: '10%', y: '65%', size: 120, rotate: -35, opacity: 0.08, dur: 10 }
];

export default function FigDecor({ variant = 'plommon', count = 4 }: Props) {
  const src = variant === 'plommon' ? '/brand/fikon-fig-plommon.png' : '/brand/fikon-fig.png';
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {POSITIONS.slice(0, count).map((p, i) => (
        // eslint-disable-next-line @next/next/no-img-element
        <motion.img
          key={i}
          src={src}
          alt=""
          width={p.size}
          height={p.size}
          className="absolute select-none"
          style={{ left: p.x, top: p.y, opacity: p.opacity }}
          initial={{ rotate: p.rotate, y: 0 }}
          animate={{ y: [0, -14, 0], rotate: [p.rotate, p.rotate + 4, p.rotate] }}
          transition={{ duration: p.dur, repeat: Infinity, ease: 'easeInOut' }}
        />
      ))}
    </div>
  );
}
