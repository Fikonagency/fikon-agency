type Kind = 'strategi' | 'brand-identity' | 'film-foto' | 'grafisk-design' | 'digital';

export default function ServiceSymbol({ kind, className }: { kind: Kind; className?: string }) {
  switch (kind) {
    case 'strategi':
      return (
        <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth={1.4} className={className} aria-hidden>
          <circle cx="50" cy="50" r="38" />
          <circle cx="50" cy="50" r="22" />
          <circle cx="50" cy="50" r="5" fill="currentColor" stroke="none" />
          <line x1="50" y1="50" x2="78" y2="22" strokeLinecap="round" />
          <polyline points="68,22 78,22 78,32" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case 'brand-identity':
      return (
        <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth={1.4} className={className} aria-hidden>
          <circle cx="38" cy="50" r="28" />
          <circle cx="62" cy="50" r="28" />
          <circle cx="50" cy="50" r="2" fill="currentColor" stroke="none" />
        </svg>
      );
    case 'film-foto':
      return (
        <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth={1.4} className={className} aria-hidden>
          <polygon points="50,8 82,24 92,55 78,86 50,94 22,86 8,55 18,24" />
          <circle cx="50" cy="54" r="18" />
          <circle cx="50" cy="54" r="6" fill="currentColor" stroke="none" />
        </svg>
      );
    case 'grafisk-design':
      return (
        <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth={1.4} className={className} aria-hidden>
          <rect x="14" y="14" width="22" height="22" />
          <rect x="39" y="14" width="22" height="22" fill="currentColor" stroke="none" />
          <rect x="64" y="14" width="22" height="22" />
          <rect x="14" y="39" width="22" height="22" />
          <rect x="39" y="39" width="22" height="22" />
          <rect x="64" y="39" width="22" height="22" fill="currentColor" stroke="none" />
          <rect x="14" y="64" width="22" height="22" fill="currentColor" stroke="none" />
          <rect x="39" y="64" width="22" height="22" />
          <rect x="64" y="64" width="22" height="22" />
        </svg>
      );
    case 'digital':
      return (
        <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth={1.4} className={className} aria-hidden>
          <line x1="22" y1="26" x2="50" y2="52" strokeLinecap="round" />
          <line x1="78" y1="22" x2="50" y2="52" strokeLinecap="round" />
          <line x1="26" y1="80" x2="50" y2="52" strokeLinecap="round" />
          <line x1="76" y1="80" x2="50" y2="52" strokeLinecap="round" />
          <circle cx="22" cy="26" r="5" fill="currentColor" stroke="none" />
          <circle cx="78" cy="22" r="5" fill="currentColor" stroke="none" />
          <circle cx="26" cy="80" r="5" fill="currentColor" stroke="none" />
          <circle cx="76" cy="80" r="5" fill="currentColor" stroke="none" />
          <circle cx="50" cy="52" r="8" fill="currentColor" stroke="none" />
        </svg>
      );
  }
}
