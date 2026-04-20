import TeamCards from '@/components/TeamCards';
import AboutIntro from '@/components/AboutIntro';
import Clients from '@/components/Clients';
import AboutScatter from '@/components/AboutScatter';
import MobileBTSStrip from '@/components/MobileBTSStrip';

export const metadata = {
  title: 'Om oss · Fikon Agency',
  description: 'Fikon är Zana och Mirna. Reklambyrå i Malmö.'
};

export default function OmPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-cream">
        <AboutScatter />
        <div className="relative z-10">
          <TeamCards />
          <MobileBTSStrip images={['bts-01', 'bts-07', 'bts-11', 'bts-14']} />
          <AboutIntro />
          <MobileBTSStrip images={['bts-06', 'bts-09', 'bts-17', 'bts-02']} />
        </div>
      </section>
      <Clients />
    </>
  );
}
