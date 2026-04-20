import TeamCards from '@/components/TeamCards';
import AboutIntro from '@/components/AboutIntro';
import Clients from '@/components/Clients';

export const metadata = {
  title: 'Om oss · Fikon Agency',
  description: 'Fikon är Zana och Mirna. Reklambyrå i Malmö.'
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
