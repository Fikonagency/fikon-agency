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
 * BTS scatter that spans the full height of the Om-page.
 * All 17 BTS images used — alternating left/right columns down the page.
 * Positioned 4–5% inward from the edge so they feel anchored rather than clinging.
 */
const SCATTER: Point[] = [
  { src: 'bts-01', top: '1%',  left: '5%',  width: '12%', rotate: -4 },
  { src: 'bts-06', top: '3%',  right: '5%', width: '11%', rotate: 3 },

  { src: 'bts-03', top: '10%', left: '4%',  width: '10%', rotate: 5,  hideBelow: 'lg' },
  { src: 'bts-04', top: '12%', right: '4%', width: '12%', rotate: -4, hideBelow: 'lg' },

  { src: 'bts-07', top: '20%', left: '5%',  width: '11%', rotate: 3 },
  { src: 'bts-09', top: '22%', right: '5%', width: '12%', rotate: -6 },

  { src: 'bts-15', top: '30%', left: '4%',  width: '11%', rotate: 4,  hideBelow: 'lg' },
  { src: 'bts-05', top: '32%', right: '4%', width: '12%', rotate: -3, hideBelow: 'lg' },

  { src: 'bts-11', top: '40%', left: '5%',  width: '12%', rotate: -2 },
  { src: 'bts-13', top: '42%', right: '5%', width: '13%', rotate: 4 },

  { src: 'bts-08', top: '52%', left: '4%',  width: '11%', rotate: 6,  hideBelow: 'lg' },
  { src: 'bts-02', top: '54%', right: '4%', width: '12%', rotate: -4, hideBelow: 'lg' },

  { src: 'bts-14', top: '62%', left: '5%',  width: '12%', rotate: 5 },
  { src: 'bts-16', top: '64%', right: '5%', width: '11%', rotate: -5 },

  { src: 'bts-10', top: '73%', left: '4%',  width: '13%', rotate: 4,  hideBelow: 'lg' },
  { src: 'bts-12', top: '75%', right: '4%', width: '12%', rotate: -3, hideBelow: 'lg' },

  { src: 'bts-17', top: '88%', left: '5%',  width: '11%', rotate: 3 }
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
