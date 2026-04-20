import Reveal from './Reveal';

type Service = {
  number: string;
  anchor: string;
  title: string;
  lede: string;
  bullets: string[];
  image: string;
};

const SERVICES: Service[] = [
  {
    number: '01',
    anchor: 'strategi',
    title: 'Strategi & varumärke',
    lede:
      'Positionering, budskap och tonalitet. Vi börjar med att förstå var ni står idag, vad ni vill säga, och vad som faktiskt skiljer er från konkurrenterna. Sen översätter vi det till något ni kan äga.',
    bullets: ['Brand platform', 'Positionering', 'Budskapshierarki', 'Tonalitet'],
    image: 'bts-04'
  },
  {
    number: '02',
    anchor: 'brand-identity',
    title: 'Brand identity',
    lede:
      'Logotyp, designsystem, typografi, färg och bildspråk. Ett visuellt språk som känns samlat överallt där ni syns. Vi designar för att fungera, inte bara för att se bra ut i en casefilm.',
    bullets: ['Logotyp', 'Designsystem', 'Typografi & färg', 'Bildmanér'],
    image: 'bts-11'
  },
  {
    number: '03',
    anchor: 'film-foto',
    title: 'Film & foto',
    lede:
      'Reklamfilm, kampanjbilder, produkt och event. Vi producerar själva, från storyboard till färdig leverans. Det gör tempot högre och priset lägre.',
    bullets: ['Reklamfilm', 'Kampanjfoto', 'Eventdokumentation', 'Social-first content'],
    image: 'bts-13'
  },
  {
    number: '04',
    anchor: 'grafisk-design',
    title: 'Grafisk design',
    lede:
      'Trycksaker, digital grafik, presentationer och sales collateral. Vi designar de vardagliga delarna av varumärket med samma noggrannhet som kampanjerna.',
    bullets: ['Trycksaker', 'Presentationer', 'Sales collateral', 'Digital grafik'],
    image: 'bts-07'
  },
  {
    number: '05',
    anchor: 'digital',
    title: 'Digital närvaro',
    lede:
      'Webb, SEO, paid social och analys. Vi bygger infrastrukturen så att det ni producerar faktiskt når fram, och mäter så ni vet vad som fungerar.',
    bullets: ['Webb & utveckling', 'SEO', 'Paid social & Google Ads', 'Analys & rapport'],
    image: 'bts-09'
  }
];

const PROCESS = [
  {
    step: '01',
    title: 'Förstå',
    body:
      'Vi börjar med samtal. Inga kick-off-workshops med post-its och timers. Bara riktiga frågor om vad ni säljer, till vem, och vad som faktiskt står i vägen.'
  },
  {
    step: '02',
    title: 'Forma',
    body:
      'Vi föreslår en riktning. En strategi, ett koncept, en visuell grund. Det som behövs för att ni ska känna igen er själva i något som ser nyare ut.'
  },
  {
    step: '03',
    title: 'Leverera',
    body:
      'Vi producerar. Film, foto, design, webb. Vi håller deadline och budget. Om något skaver säger vi till.'
  },
  {
    step: '04',
    title: 'Fortsätta',
    body:
      'Ett varumärke byggs inte på en månad. Vi jobbar gärna vidare som extern kreativ partner, lösningar när det behövs, utan retainer-krav.'
  }
];

export default function ServicesPage() {
  return (
    <>
      <section className="relative bg-cream text-plommon px-6 md:px-10 pt-40 md:pt-48 pb-14 md:pb-20">
        <div className="mx-auto max-w-[1500px]">
          <Reveal>
            <p className="text-rose text-xs tracking-[0.4em] uppercase mb-5">Tjänster</p>
            <h1 className="font-display font-light text-display-xl text-balance max-w-[16ch] leading-[1.02]">
              Modernisering, <span className="text-bordeaux font-normal">utan omstart.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="mt-8 md:mt-10 max-w-2xl text-lg md:text-xl text-plommon/75 leading-relaxed">
              Vi jobbar med mellanstora B2B-varumärken som vill se nyare ut utan att
              förlora det som redan fungerar. Strategi, identitet, film, foto och
              webb. Vi bygger det som behövs och inget mer.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-cream text-plommon px-6 md:px-10 py-10 md:py-14">
        <div className="mx-auto max-w-[1500px]">
          <ul className="border-t border-plommon/15">
            {SERVICES.map((s, i) => (
              <li key={s.anchor} id={s.anchor} className="scroll-mt-28">
                <Reveal delay={Math.min(i * 0.04, 0.2)}>
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10 py-12 md:py-20 border-b border-plommon/15">
                    <div className="md:col-span-1">
                      <span className="font-display font-medium text-rose text-sm tabular-nums tracking-[0.2em]">
                        {s.number}
                      </span>
                    </div>
                    <div className="md:col-span-6">
                      <h2 className="font-display font-light text-display-md md:text-display-lg leading-[1.05] text-balance">
                        {s.title}
                      </h2>
                      <p className="mt-5 md:mt-7 text-plommon/75 text-base md:text-lg leading-relaxed max-w-xl">
                        {s.lede}
                      </p>
                      <ul className="mt-6 md:mt-8 grid grid-cols-2 gap-y-2 gap-x-6 text-sm text-plommon/70 max-w-md">
                        {s.bullets.map((b) => (
                          <li key={b} className="flex items-start gap-2">
                            <span aria-hidden className="text-rose">·</span>
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="md:col-span-5">
                      <div className="relative w-full aspect-[4/3] md:aspect-[5/4] overflow-hidden ring-1 ring-plommon/10">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={`/images/${s.image}-1600.webp`}
                          alt=""
                          loading="lazy"
                          className="absolute inset-0 w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-cream text-plommon px-6 md:px-10 py-16 md:py-28 border-t border-plommon/10">
        <div className="mx-auto max-w-[1500px]">
          <Reveal>
            <p className="text-rose text-xs tracking-[0.4em] uppercase mb-5">Så jobbar vi</p>
            <h2 className="font-display font-light text-display-md md:text-display-lg text-balance max-w-[18ch] mb-12 md:mb-20">
              Fyra steg. <span className="text-bordeaux font-normal">Utan onödigt oväsen.</span>
            </h2>
          </Reveal>
          <ol className="grid grid-cols-1 md:grid-cols-2 gap-x-10 md:gap-x-20 gap-y-10">
            {PROCESS.map((p, i) => (
              <Reveal key={p.step} delay={i * 0.05}>
                <li className="border-t border-plommon/15 pt-6 md:pt-8">
                  <div className="flex items-baseline gap-5">
                    <span className="font-display font-medium text-rose text-sm tabular-nums tracking-[0.2em]">
                      {p.step}
                    </span>
                    <h3 className="font-display font-normal text-2xl md:text-3xl">
                      {p.title}
                    </h3>
                  </div>
                  <p className="mt-4 md:mt-6 text-plommon/75 text-base md:text-lg leading-relaxed max-w-md">
                    {p.body}
                  </p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>
    </>
  );
}
