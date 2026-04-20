type Props = {
  images: string[];
  className?: string;
};

/**
 * Mobile-only BTS strip — 2-col grid of BTS photos shown between
 * sections on Om-sidan. Desktop uses AboutScatter at the edges instead,
 * so this component hides itself on md+.
 */
export default function MobileBTSStrip({ images, className = '' }: Props) {
  return (
    <section className={`md:hidden relative bg-cream px-6 py-6 ${className}`}>
      <div className="grid grid-cols-2 gap-3">
        {images.map((src, i) => (
          <div
            key={src}
            className={`aspect-[4/3] overflow-hidden ring-1 ring-plommon/10 ${
              i % 3 === 1 ? 'rotate-[-2deg]' : i % 3 === 2 ? 'rotate-[3deg]' : ''
            }`}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`/images/${src}-800.webp`}
              alt=""
              loading="lazy"
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
