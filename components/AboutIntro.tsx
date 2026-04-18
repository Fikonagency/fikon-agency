import Reveal from './Reveal';

export default function AboutIntro() {
  return (
    <section className="bg-cream text-plommon px-6 md:px-10 py-20 md:py-28 border-t border-plommon/15">
      <div className="mx-auto max-w-[1500px] grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16">
        <div className="md:col-span-5">
          <Reveal>
            <p className="text-rose text-xs tracking-[0.4em] uppercase mb-5">
              En byrå
            </p>
            <h2 className="font-display text-display-md md:text-display-lg text-balance">
              Två kreatörer, en byrå och en{' '}
              <span className="italic text-bordeaux">tydlig idé.</span>
            </h2>
          </Reveal>
        </div>
        <div className="md:col-span-7">
          <Reveal delay={0.08}>
            <p className="text-lg md:text-2xl text-plommon/80 leading-relaxed max-w-2xl">
              Fikon är <span className="italic">Zana</span> och{' '}
              <span className="italic">Mirna</span>. Vi hjälper varumärken synas
              utan att skrika — med film, foto, identitet och annonsering som
              förtjänar att sitta kvar. Vi är små, vi är närvarande och vi
              älskar det vi gör.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
