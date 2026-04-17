export type ProjectKind = 'film' | 'event' | 'social';

export type Project = {
  id: string;
  vimeoId: string;
  title: string;
  client: string;
  year: number;
  kind: ProjectKind;
  featured: boolean;
};

export const HERO_VIMEO_ID = '1184235012';

export const projects: Project[] = [
  {
    id: 'flawlessface-valentine',
    vimeoId: '1184242168',
    title: 'Valentine Event',
    client: 'Flawlessface Clinic',
    year: 2026,
    kind: 'event',
    featured: true
  },
  {
    id: 'sigma-connectivity-event',
    vimeoId: '1184232565',
    title: 'Connectivity Event',
    client: 'Sigma Connectivity',
    year: 2026,
    kind: 'event',
    featured: true
  },
  {
    id: 'currylicious-reklam',
    vimeoId: '1184241031',
    title: 'Currylicious — reklamfilm',
    client: 'Currylicious',
    year: 2026,
    kind: 'film',
    featured: true
  },
  {
    id: 'currylicious-tiktok',
    vimeoId: '1184241323',
    title: 'Currylicious — TikTok',
    client: 'Currylicious',
    year: 2026,
    kind: 'social',
    featured: true
  },
  { id: 'smuts-under-naglar', vimeoId: '1184232007', title: 'Smuts under naglar', client: 'TBD', year: 2026, kind: 'film', featured: false },
  { id: 'p-final-2min', vimeoId: '1184231861', title: 'Projekt', client: 'TBD', year: 2026, kind: 'film', featured: false },
  { id: 'vertikal-30s', vimeoId: '1184232598', title: 'Vertikal', client: 'TBD', year: 2026, kind: 'social', featured: false },
  { id: 'p-1184231463', vimeoId: '1184231463', title: 'Projekt', client: 'TBD', year: 2026, kind: 'film', featured: false },
  { id: 'p-1184232574', vimeoId: '1184232574', title: 'Projekt', client: 'TBD', year: 2026, kind: 'film', featured: false },
  { id: 'p-1184232355', vimeoId: '1184232355', title: 'Projekt', client: 'TBD', year: 2026, kind: 'film', featured: false },
  { id: 'p-1184231741', vimeoId: '1184231741', title: 'Projekt', client: 'TBD', year: 2026, kind: 'film', featured: false },
  { id: 'p-1184231459', vimeoId: '1184231459', title: 'Projekt', client: 'TBD', year: 2026, kind: 'film', featured: false },
  { id: 'p-1184231460', vimeoId: '1184231460', title: 'Projekt', client: 'TBD', year: 2026, kind: 'film', featured: false },
  { id: 'p-1184231462', vimeoId: '1184231462', title: 'Projekt', client: 'TBD', year: 2026, kind: 'film', featured: false },
  { id: 'utkast-05', vimeoId: '1171381133', title: 'Utkast', client: 'TBD', year: 2025, kind: 'film', featured: false }
];

export type TeamMember = {
  name: string;
  role: string;
  bio: string;
};

export const team: TeamMember[] = [
  {
    name: 'Zana Salman',
    role: 'Film, foto, regi',
    bio: 'Bygger bilden från objektivet till filen.'
  },
  {
    name: 'Mirna',
    role: 'Strategi, sälj, digital',
    bio: 'Får arbetet att landa där det behövs.'
  }
];

export const clients: string[] = [
  'Flawlessface Clinic',
  'Sigma Connectivity',
  'Currylicious',
  'Skinsecretlab'
];

export const contact = {
  email: 'hej@fikonagency.se',
  instagram: 'https://instagram.com/fikonagency',
  linkedin: 'https://linkedin.com/company/fikonagency',
  vimeo: 'https://vimeo.com/user224887373'
};
