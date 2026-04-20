export type ProjectKind = 'film' | 'event' | 'social';

export type Project = {
  id: string;
  vimeoId: string;
  /** Optional unlisted-video hash from Vimeo URL like vimeo.com/123/abc — passed as ?h= to player. */
  vimeoHash?: string;
  title: string;
  client: string;
  year: number;
  kind: ProjectKind;
  featured: boolean;
  /** Photo basenames paired to this project (without extension or size suffix). */
  gallery?: string[];
  /** Short intro shown on the case page. */
  intro?: string;
  /** Optional meta rows (role, services, year etc.) */
  meta?: { label: string; value: string }[];
  /** Additional videos shown on the case page below the hero video. */
  extraVideos?: { vimeoId: string; vimeoHash?: string; title?: string }[];
  /** Whether to show this project in the /portfolio listing (default true). */
  listed?: boolean;
};

export const HERO_VIMEO_ID = '1184235012';

/**
 * NOTE: Image→project pairings below are best-guess placeholders based on available photos.
 * Adjust `gallery` arrays per project when you have the real shoot-to-project mapping.
 * All photo basenames live under /public/images/ as -800/-1600/-2400 .avif/.webp.
 */
export const projects: Project[] = [
  {
    id: 'flawlessface-clinic',
    vimeoId: '1184242168',
    title: 'Flawlessface Clinic',
    client: 'Flawlessface Clinic',
    year: 2026,
    kind: 'event',
    featured: true,
    gallery: [
      '0Y9A0047', '0Y9A0094', '0Y9A0184', '0Y9A0185', '0Y9A0193', '0Y9A0206',
      '0Y9A0229', '0Y9A0256', '0Y9A0299', '0Y9A0300', '0Y9A0323', '0Y9A0333',
      '0Y9A0389', '0Y9A0392', '0Y9A0402', '0Y9A0404', '0Y9A0443', '0Y9A0475',
      '0Y9A0479', '0Y9A0495', '0Y9A0505', '0Y9A0552', '0Y9A0635', '0Y9A9969'
    ],
    intro:
      'Event för Flawlessface Clinic, februari 2026. Film och foto från kvällen. Miljö, produkter och känsla i rummet.',
    meta: [
      { label: 'Klient', value: 'Flawlessface Clinic' },
      { label: 'Format', value: 'Event · Film · Foto' },
      { label: 'År', value: 'Februari 2026' }
    ]
  },
  {
    id: 'sigma-connectivity-event',
    vimeoId: '1184232565',
    title: 'Sigma Connectivity',
    client: 'Sigma Connectivity',
    year: 2025,
    kind: 'event',
    featured: true,
    gallery: [
      'sigma-001','sigma-002','sigma-004','sigma-005','sigma-006','sigma-007',
      'sigma-008','sigma-009','sigma-010','sigma-011','sigma-012','sigma-013',
      'sigma-014','sigma-015','sigma-016','sigma-017','sigma-018','sigma-019',
      'sigma-020','sigma-021','sigma-022','sigma-023','sigma-024','sigma-025',
      'sigma-026','sigma-027','sigma-028','sigma-029','sigma-030','sigma-031',
      'sigma-032','sigma-033','sigma-034','sigma-035','sigma-036','sigma-037',
      'sigma-038','sigma-039','sigma-040','sigma-041','sigma-042','sigma-043',
      'sigma-044','sigma-045','sigma-046','sigma-047'
    ],
    extraVideos: [
      { vimeoId: '1184231741', title: 'Intervju 1' },
      { vimeoId: '1184231463', title: 'Intervju 2' },
      { vimeoId: '1184231459', title: 'Intervju 3' }
    ],
    intro: 'Eventfilm och stillbilder från Connectivity of Things, Sigma Connectivitys event 2025. Hero-film plus tre intervjuer från dagen.',
    meta: [
      { label: 'Klient', value: 'Sigma Connectivity' },
      { label: 'Format', value: 'Event · Film · Foto · Intervjuer' },
      { label: 'År', value: '2025' }
    ]
  },
  {
    id: 's-t-petri',
    vimeoId: '1143377647',
    vimeoHash: '8b830dffe3',
    title: 'S:t Petri',
    client: 'S:t Petri gymnasie · Malmö',
    year: 2026,
    kind: 'film',
    featured: true,
    gallery: [
      'spexbusters-007','spexbusters-008','spexbusters-009','spexbusters-010',
      'spexbusters-011','spexbusters-012','spexbusters-013','spexbusters-014',
      'spexbusters-015','spexbusters-016','spexbusters-017','spexbusters-018',
      'spexbusters-019','spexbusters-020','spexbusters-021','spexbusters-022',
      'spexbusters-023','spexbusters-024','spexbusters-025','spexbusters-026',
      'spexbusters-027','spexbusters-028','spexbusters-029','spexbusters-030',
      'spexbusters-031','spexbusters-032','spexbusters-033','spexbusters-034',
      'spexbusters-035','spexbusters-036','spexbusters-037','spexbusters-038',
      'spexbusters-039','spexbusters-040'
    ],
    intro: 'Kortfilm för S:t Petri gymnasie i Malmö. Regi, film och efterarbete.',
    meta: [
      { label: 'Klient', value: 'S:t Petri gymnasie · Malmö' },
      { label: 'Format', value: 'Kortfilm' },
      { label: 'År', value: '2026' }
    ]
  },
  { id: 'currylicious-tiktok', vimeoId: '1184241323', title: 'Currylicious · TikTok', client: 'Currylicious', year: 2026, kind: 'social', featured: true, listed: false },
  { id: 'smuts-under-naglar', vimeoId: '1184232007', title: 'Smuts under naglar', client: 'Smuts under naglar', year: 2026, kind: 'film', featured: false, listed: false },
  {
    id: 'gardinex',
    vimeoId: '1184231861',
    title: 'Gardinex',
    client: 'Gardinex',
    year: 2026,
    kind: 'film',
    featured: true,
    extraVideos: [
      { vimeoId: '1184232355', title: 'Film 2' },
      { vimeoId: '1184232574', title: 'Film 3' },
      { vimeoId: '1184231462', title: 'Film 4' },
      { vimeoId: '1184231460', title: 'Film 5' }
    ],
    intro: 'Flera reklamfilmer för Gardinex. Koncept, regi, film och efterarbete.',
    meta: [
      { label: 'Klient', value: 'Gardinex' },
      { label: 'Format', value: 'Reklamfilm · Kampanj' },
      { label: 'År', value: '2026' }
    ]
  },
  { id: 'vertikal-30s', vimeoId: '1184232598', title: 'Vertikal', client: 'TBD', year: 2026, kind: 'social', featured: false, listed: false },
  { id: 'p-1184231463', vimeoId: '1184231463', title: 'Projekt', client: 'TBD', year: 2026, kind: 'film', featured: false, listed: false },
  { id: 'p-1184232574', vimeoId: '1184232574', title: 'Projekt', client: 'TBD', year: 2026, kind: 'film', featured: false, listed: false },
  { id: 'sigma-connectivity-interview', vimeoId: '1184232355', title: 'Sigma Connectivity · Intervju', client: 'Sigma Connectivity', year: 2026, kind: 'film', featured: false, listed: false },
  { id: 'p-1184231741', vimeoId: '1184231741', title: 'Sigma Connectivity', client: 'Sigma Connectivity', year: 2025, kind: 'film', featured: false, listed: false },
  { id: 'p-1184231459', vimeoId: '1184231459', title: 'Projekt', client: 'TBD', year: 2026, kind: 'film', featured: false, listed: false },
  { id: 'p-1184231460', vimeoId: '1184231460', title: 'Projekt', client: 'TBD', year: 2026, kind: 'film', featured: false, listed: false },
  { id: 'p-1184231462', vimeoId: '1184231462', title: 'Projekt', client: 'TBD', year: 2026, kind: 'film', featured: false, listed: false },
  { id: 'utkast-05', vimeoId: '1171381133', title: 'Utkast', client: 'TBD', year: 2025, kind: 'film', featured: false, listed: false },
  {
    id: 'currylicious',
    vimeoId: '1184241031',
    title: 'Currylicious YumYum',
    client: 'Currylicious',
    year: 2026,
    kind: 'film',
    featured: true,
    gallery: [
      'currylicious-0200','currylicious-0256','currylicious-0286','currylicious-0303',
      'currylicious-0320','currylicious-0339','currylicious-0343','currylicious-0371',
      'currylicious-0380','currylicious-0383','currylicious-0387','currylicious-0446',
      'currylicious-0480','currylicious-0483'
    ],
    extraVideos: [
      { vimeoId: '1184241323', title: 'TikTok' }
    ],
    intro: 'Reklamfilm och social-first content för Currylicious YumYum. Regi, film, foto och efterarbete.',
    meta: [
      { label: 'Klient', value: 'Currylicious YumYum' },
      { label: 'Format', value: 'Reklamfilm · Social · Foto' },
      { label: 'År', value: '2026' }
    ]
  }
];

export type Service = { title: string; description: string };

export const services: Service[] = [
  {
    title: 'Strategi & varumärke',
    description:
      'Positionering, identitet och berättelse. Vi hjälper varumärken hitta rösten som får folk att stanna.'
  },
  {
    title: 'Film & foto',
    description:
      'Reklamfilm, kampanjbilder och social-first content. Från koncept till färdig leverans.'
  },
  {
    title: 'Grafisk design',
    description:
      'Logotyp, grafiskt system, tryck och digital identitet. Form som känns genomtänkt.'
  },
  {
    title: 'Digital närvaro',
    description:
      'Annonsering, social media och webb. Vi bygger kanalerna och optimerar det som rullar.'
  }
];

export type TeamMember = {
  slug: 'zana' | 'mirna';
  name: string;
  role: string;
  email: string;
  /** Photo basename under /public/images/ (without size/extension). */
  portrait: string;
  /** Detailed craft list shown in the pitch. */
  craft: string[];
};

export const team: TeamMember[] = [
  {
    slug: 'zana',
    name: 'Zana Salman',
    role: 'Co-founder · Film, foto, regi',
    email: 'zana@fikonagency.se',
    portrait: 'zana-portrait',
    craft: ['Videograf, fotograf', 'Creative direction', 'Grafisk design']
  },
  {
    slug: 'mirna',
    name: 'Mirna Dirawi',
    role: 'Co-founder · Strategi, sälj, digital',
    email: 'mirna@fikonagency.se',
    portrait: 'mirna-portrait',
    craft: ['Strategi & sälj', 'Brand identity', 'Digital analys & SEO']
  }
];

/** BTS image basenames under /public/images/ — used to frame the team portraits. */
export const btsPhotos: string[] = Array.from({ length: 17 }, (_, i) =>
  `bts-${String(i + 1).padStart(2, '0')}`
);

export const clients: string[] = [
  'Flawlessface Clinic',
  'Sigma Connectivity',
  'Currylicious',
  'Gardinex'
];

// Full photo pool (all 18 optimized basenames). Use for the scrollable gallery
// so the ribbon shows work across every shoot, not just one.
export const photos: string[] = [
  '0Y9A0047', '0Y9A0094', '0Y9A0184', '0Y9A0185', '0Y9A0193', '0Y9A0206',
  '0Y9A0229', '0Y9A0256', '0Y9A0299', '0Y9A0300', '0Y9A0323', '0Y9A0333',
  '0Y9A0389', '0Y9A0392', '0Y9A0402', '0Y9A0404', '0Y9A0443', '0Y9A0475',
  '0Y9A0479', '0Y9A0495', '0Y9A0505', '0Y9A0552', '0Y9A0635', '0Y9A9969'
];

export const contact = {
  email: 'contact@fikonagency.se',
  instagram: 'https://instagram.com/fikonagency',
  linkedin: 'https://linkedin.com/company/fikonagency',
  vimeo: 'https://vimeo.com/user224887373'
};
