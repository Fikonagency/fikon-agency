type Point = {
  src: string;
  top: string;
  left?: string;
  right?: string;
  width: string;
  rotate: number;
  hideBelow?: 'md' | 'lg';
};

/**
 * BTS scatter spanning only the TeamCards + AboutIntro stage
 * (Clients is rendered outside this section on /om).
 *
 * Balanced 8 + 8. bts-04 (IMG_2765) omitted per user preference.
 * Left + right columns interleaved vertically with ~13% gaps.
 */
const SCATTER: Point[] = [
  // LEFT column (8)
  { src: 'bts-01', top: '2%',  left: '5%',  width: '12%', rotate: -4 },
  { src: 'bts-07', top: '15%', left: '4%',  width: '11%', rotate: 3 },
  { src: 'bts-15', top: '28%', left: '5%',  width: '11%', rotate: 4,  hideBelow: 'lg' },
  { src: 'bts-11', top: '41%', left: '4%',  width: '12%', rotate: -2 },
  { src: 'bts-08', top: '54%', left: '5%',  width: '11%', rotate: 6,  hideBelow: 'lg' },
  { src: 'bts-14', top: '67%', left: '4%',  width: '12%', rotate: 5 },
  { src: 'bts-10', top: '80%', left: '5%',  width: '13%', rotate: 4,  hideBelow: 'lg' },
  { src: 'bts-17', top: '93%', left: '4%',  width: '11%', rotate: 3 },

  // RIGHT column (8)
  { src: 'bts-06', top: '5%',  right: '5%', width: '11%', rotate: 3 },
  { src: 'bts-03', top: '18%', right: '4%', width: '11%', rotate: 5,  hideBelow: 'lg' },
  { src: 'bts-09', top: '31%', right: '5%', width: '12%', rotate: -6 },
  { src: 'bts-13', top: '44%', right: '4%', width: '13%', rotate: 4,  hideBelow: 'lg' },
  { src: 'bts-05', top: '57%', right: '5%', width: '11%', rotate: -3 },
  { src: 'bts-16', top: '70%', right: '4%', width: '12%', rotate: -5, hideBelow: 'lg' },
  { src: 'bts-02', top: '83%', right: '5%', width: '12%', rotate: -4 },
  { src: 'bts-12', top: '95%', right: '4%', width: '12%', rotate: -3, hideBelow: 'lg' }
];

export default function AboutScatter() {
  return (
    <div aria-hidden className="absolute inset-0 pointer-events-none hidden md:block">
      {SCATTER.map((p, i) => (
        <div
          key={p.src + i}
          className={`absolute ${p.hideBelow === 'lg' ? 'hidden lg:block' : ''}`}
          style={{
            top: p.top,
            left: p.left,
            right: p.right,
            width: p.width,
            transform: `rotate(${p.rotate}deg)`
          }}
        >
          <div className="aspect-[4/3] overflow-hidden ring-1 ring-plommon/15 shadow-[0_10px_40px_-12px_rgba(42,19,24,0.4)]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`/images/${p.src}-800.webp`}
              alt=""
              loading="lazy"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      ))}
    </div>
  );
}
