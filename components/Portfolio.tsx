import { projects } from '@/lib/data';
import PortfolioClient, { type EnrichedProject } from './PortfolioClient';

async function getThumb(vimeoId: string, vimeoHash?: string): Promise<string> {
  const url = vimeoHash ? `https://vimeo.com/${vimeoId}/${vimeoHash}` : `https://vimeo.com/${vimeoId}`;
  try {
    const res = await fetch(
      `https://vimeo.com/api/oembed.json?url=${encodeURIComponent(url)}&width=1280`,
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
  const visible = projects.filter((p) => p.listed !== false);
  const enriched: EnrichedProject[] = await Promise.all(
    visible.map(async (p) => ({ ...p, thumb: await getThumb(p.vimeoId, p.vimeoHash) }))
  );
  return <PortfolioClient projects={enriched} />;
}
