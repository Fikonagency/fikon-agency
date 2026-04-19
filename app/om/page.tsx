import TeamCards from '@/components/TeamCards';
import AboutIntro from '@/components/AboutIntro';
import Clients from '@/components/Clients';

export const metadata = {
  title: 'Om — Fikon Agency',
  description: 'Fikon är Zana och Mirna — reklambyrå i Malmö.'
};

export default function OmPage() {
  return (
    <>
      <TeamCards />
      <AboutIntro />
      <Clients />
    </>
  );
}
