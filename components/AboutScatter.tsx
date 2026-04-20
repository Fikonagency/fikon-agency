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
 * Absolute-positioned with top/left/right percentages relative to the parent.
 * Two columns (left & right edge) alternating down the page.
 */
const SCATTER: Point[] = [
  { src: 'bts-01', top: '2%',  left: '0%',   width: '13%', rotate: -4 },
  { src: 'bts-04', top: '4%',  right: '0%',  width: '12%', rotate: 3 },
  { src: 'bts-07', top: '14%', left: '0%',   width: '12%', rotate: 5, hideBelow: 'lg' },
  { src: 'bts-09', top: '17%', right: '0%',  width: '13%', rotate: -6, hideBelow: 'lg' },
  { src: 'bts-11', top: '29%', left: '0%',   width: '13%', rotate: -3 },
  { src: 'bts-13', top: '33%', right: '0%',  width: '12%', rotate: 4 },
  { src: 'bts-05', top: '44%', left: '0%',   width: '12%', rotate: 6, hideBelow: 'lg' },
  { src: 'bts-08', top: '48%', right: '0%',  width: '13%', rotate: -4, hideBelow: 'lg' },
  { src: 'bts-14', top: '60%', left: '0%',   width: '13%', rotate: 5 },
  { src: 'bts-16', top: '64%', right: '0%',  width: '12%', rotate: -5 },
  { src: 'bts-10', top: '76%', left: '0%',   width: '12%', rotate: 4, hideBelow: 'lg' },
  { src: 'bts-12', top: '80%', right: '0%',  width: '13%', rotate: -3, hideBelow: 'lg' },
  { src: 'bts-17', top: '91%', left: '0%',   width: '12%', rotate: 3 },
  { src: 'bts-02', top: '94%', right: '0%',  width: '13%', rotate: -4 }
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
