import TeamCards from '@/components/TeamCards';
import AboutIntro from '@/components/AboutIntro';
import Clients from '@/components/Clients';
import AboutScatter from '@/components/AboutScatter';

export const metadata = {
  title: 'Om oss · Fikon Agency',
  description: 'Fikon är Zana och Mirna. Reklambyrå i Malmö.'
};

export default function OmPage() {
  return (
    <section className="relative overflow-hidden bg-cream">
      <AboutScatter />
      <div className="relative z-10">
        <TeamCards />
        <AboutIntro />
        <Clients />
      </div>
    </section>
  );
}
