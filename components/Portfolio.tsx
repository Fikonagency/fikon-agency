import { projects } from '@/lib/data';
import PortfolioClient, { type EnrichedProject } from './PortfolioClient';

async function getThumb(vimeoId: string): Promise<string> {
  try {
    const res = await fetch(
      `https://vimeo.com/api/oembed.json?url=https://vimeo.com/${vimeoId}&width=1280`,
      { next: { revalidate: 86400 } }
    );
    if (res.ok) {
      const data = await res.json();
      if (data.thumbnail_url) return data.thumbnail_url as string;
    }
  } catch {
    // fall through to fallback
  }
  return `https://vumbnail.com/${vimeoId}.jpg`;
}

export default async function Portfolio() {
  const enriched: EnrichedProject[] = await Promise.all(
    projects.map(async (p) => ({ ...p, thumb: await getThumb(p.vimeoId) }))
  );
  return <PortfolioClient projects={enriched} />;
}
