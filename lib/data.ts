export type ProjectKind = 'film' | 'event' | 'social';

export type Project = {
  id: string;
  vimeoId: string;
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
};

export const HERO_VIMEO_ID = '1184235012';

/**
 * NOTE: Image→project pairings below are best-guess placeholders based on available photos.
 * Adjust `gallery` arrays per project when you have the real shoot-to-project mapping.
 * All photo basenames live under /public/images/ as -800/-1600/-2400 .avif/.webp.
 */
export const projects: Project[] = [
  {
    id: 'flawlessface-valentine',
    vimeoId: '1184242168',
    title: 'Valentine Event',
    client: 'Flawlessface Clinic',
    year: 2026,
    kind: 'event',
    featured: true,
    gallery: ['0Y9A0047', '0Y9A0094', '0Y9A0256', '0Y9A0323', '0Y9A0402', '0Y9A0475'],
    intro:
      'Eventfilm och stillbilder från Flawlessface Clinics Alla hjärtans dag. Miljö, produkter och känsla.',
    meta: [
      { label: 'Klient', value: 'Flawlessface Clinic' },
      { label: 'Format', value: 'Event · Film · Foto' },
      { label: 'År', value: '2026' }
    ]
  },
  {
    id: 'currylicious-reklam',
    vimeoId: '1184241031',
    title: 'Currylicious — reklamfilm',
    client: 'Currylicious',
    year: 2026,
    kind: 'film',
    featured: true,
    gallery: ['0Y9A0185', '0Y9A0193', '0Y9A0206', '0Y9A0229'],
    intro: 'Reklamfilm för Currylicious. Regi, film och efterarbete.',
    meta: [
      { label: 'Klient', value: 'Currylicious' },
      { label: 'Format', value: 'Reklamfilm' },
      { label: 'År', value: '2026' }
    ]
  },
  {
    id: 'sigma-connectivity-event',
    vimeoId: '1184232565',
    title: 'Connectivity Event',
    client: 'Sigma Connectivity',
    year: 2026,
    kind: 'event',
    featured: true,
    gallery: ['0Y9A0333', '0Y9A0392', '0Y9A0495', '0Y9A0505', '0Y9A0635'],
    intro: 'Dokumenterad eventfilm för Sigma Connectivity. Keynotes, mingel, känsla i rummet.',
    meta: [
      { label: 'Klient', value: 'Sigma Connectivity' },
      { label: 'Format', value: 'Event · Film · Foto' },
      { label: 'År', value: '2026' }
    ]
  },
  {
    id: 'currylicious-tiktok',
    vimeoId: '1184241323',
    title: 'Currylicious — TikTok',
    client: 'Currylicious',
    year: 2026,
    kind: 'social',
    featured: true,
    gallery: ['0Y9A0300', '0Y9A0479'],
    intro: 'Social-first content för Currylicious. Snabbt tempo, tight klipp.',
    meta: [
      { label: 'Klient', value: 'Currylicious' },
      { label: 'Format', value: 'Social · TikTok' },
      { label: 'År', value: '2026' }
    ]
  },
  { id: 'smuts-under-naglar', vimeoId: '1184232007', title: 'Smuts under naglar', client: 'Smuts under naglar', year: 2026, kind: 'film', featured: false },
  { id: 'gardinex', vimeoId: '1184231861', title: 'Gardinex', client: 'Gardinex', year: 2026, kind: 'film', featured: false },
  { id: 'vertikal-30s', vimeoId: '1184232598', title: 'Vertikal', client: 'TBD', year: 2026, kind: 'social', featured: false },
  { id: 'p-1184231463', vimeoId: '1184231463', title: 'Projekt', client: 'TBD', year: 2026, kind: 'film', featured: false },
  { id: 'p-1184232574', vimeoId: '1184232574', title: 'Projekt', client: 'TBD', year: 2026, kind: 'film', featured: false },
  { id: 'sigma-connectivity-interview', vimeoId: '1184232355', title: 'Sigma Connectivity — Intervju', client: 'Sigma Connectivity', year: 2026, kind: 'film', featured: false },
  { id: 'p-1184231741', vimeoId: '1184231741', title: 'Projekt', client: 'TBD', year: 2026, kind: 'film', featured: false },
  { id: 'p-1184231459', vimeoId: '1184231459', title: 'Projekt', client: 'TBD', year: 2026, kind: 'film', featured: false },
  { id: 'p-1184231460', vimeoId: '1184231460', title: 'Projekt', client: 'TBD', year: 2026, kind: 'film', featured: false },
  { id: 'p-1184231462', vimeoId: '1184231462', title: 'Projekt', client: 'TBD', year: 2026, kind: 'film', featured: false },
  { id: 'utkast-05', vimeoId: '1171381133', title: 'Utkast', client: 'TBD', year: 2025, kind: 'film', featured: false }
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

export type TeamMember = { slug: 'zana' | 'mirna'; name: string; role: string; email: string };

export const team: TeamMember[] = [
  {
    slug: 'zana',
    name: 'Zana Salman',
    role: 'Co-founder · Film, foto, regi',
    email: 'zana@fikonagency.se'
  },
  {
    slug: 'mirna',
    name: 'Mirna',
    role: 'Co-founder · Strategi, sälj, digital',
    email: 'mirna@fikonagency.se'
  }
];

export const clients: string[] = [
  'Flawlessface Clinic',
  'Sigma Connectivity',
  'Currylicious',
  'Gardinex'
];

// Full photo pool (all 18 optimized basenames). Use for the scrollable gallery
// so the ribbon shows work across every shoot, not just one.
export const photos: string[] = [
  '0Y9A0047',
  '0Y9A0094',
  '0Y9A0185',
  '0Y9A0193',
  '0Y9A0206',
  '0Y9A0229',
  '0Y9A0256',
  '0Y9A0300',
  '0Y9A0323',
  '0Y9A0333',
  '0Y9A0392',
  '0Y9A0402',
  '0Y9A0475',
  '0Y9A0479',
  '0Y9A0495',
  '0Y9A0505',
  '0Y9A0635',
  '0Y9A9969'
];

export const contact = {
  email: 'Contact@fikonagency.se',
  instagram: 'https://instagram.com/fikonagency',
  linkedin: 'https://linkedin.com/company/fikonagency',
  vimeo: 'https://vimeo.com/user224887373'
};
