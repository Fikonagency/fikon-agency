'use client';

import { useEffect } from 'react';

export default function VideoLightbox({
  vimeoId,
  onClose
}: {
  vimeoId: string;
  onClose: () => void;
}) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [onClose]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-[100] bg-plommon/95 backdrop-blur flex items-center justify-center p-4 md:p-12 animate-in fade-in duration-300"
      onClick={onClose}
    >
      <button
        type="button"
        onClick={onClose}
        className="absolute top-6 right-6 text-cream/60 hover:text-cream text-xs tracking-[0.3em] uppercase"
      >
        Stäng · ESC
      </button>
      <div
        className="relative w-full max-w-6xl aspect-video"
        onClick={(e) => e.stopPropagation()}
      >
        <iframe
          src={`https://player.vimeo.com/video/${vimeoId}?autoplay=1&title=0&byline=0&portrait=0&dnt=1`}
          title="Fikon Agency video"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
          className="w-full h-full"
        />
      </div>
    </div>
  );
}
