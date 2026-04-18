import { notFound } from 'next/navigation';
import { projects } from '@/lib/data';
import CaseFlash from '@/components/CaseFlash';
import CaseGallery from '@/components/CaseGallery';

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.id }));
}

export async function generateMetadata({
  params
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.id === slug);
  if (!project) return { title: 'Fikon Agency' };
  return {
    title: `${project.title} — Fikon Agency`,
    description: project.intro ?? `${project.title} för ${project.client}.`
  };
}

export default async function CasePage({
  params
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.id === slug);
  if (!project) notFound();

  return (
    <>
      <CaseFlash title={project.title} images={project.gallery ?? []} />
      <CaseGallery project={project} />
    </>
  );
}
