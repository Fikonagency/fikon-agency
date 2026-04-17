import About from '@/components/About';
import Clients from '@/components/Clients';
import PhotoStrip from '@/components/PhotoStrip';
import Reveal from '@/components/Reveal';
import FigDecor from '@/components/FigDecor';
import ContactCTA from '@/components/ContactCTA';
import { photos } from '@/lib/data';

export const metadata = {
  title: 'Om — Fikon Agency',
  description: 'Fikon är Zana och Mirna — reklambyrå i Malmö.'
};

export default function OmPage() {
  return (
    <>
      <section className="relative bg-cream text-plommon px-6 pt-40 md:pt-48 pb-20 md:pb-28 overflow-hidden">
        <FigDecor variant="plommon" count={2} />
        <div className="relative mx-auto max-w-4xl">
          <Reveal>
            <p className="text-bordeaux text-xs tracking-[0.3em] uppercase mb-4">Om</p>
            <h1 className="font-display text-display-xl text-balance">
              Två kreatörer. <span className="italic">En byrå.</span>
            </h1>
            <p className="mt-10 md:mt-12 text-lg md:text-xl text-plommon/75 leading-relaxed max-w-2xl">
              Fikon är Zana och Mirna. Vi hjälper företag synas utan att skrika —
              med film, foto, identitet och annonsering som förtjänar att sitta kvar.
            </p>
          </Reveal>
        </div>
      </section>
      <PhotoStrip photos={photos} />
      <About />
      <Clients />
      <ContactCTA />
    </>
  );
}
