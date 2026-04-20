import Reveal from './Reveal';

const HOW = [
  {
    title: 'Närvarande',
    body:
      'Samma två personer på briefen, produktionen och leveransen. Ni pratar aldrig med en projektledare som ska kolla med ett team som ska kolla med en byrå.'
  },
  {
    title: 'Ingen pipeline',
    body:
      'Vi producerar själva. Film, foto, design, webb. Det gör tempot högre, priset lägre och beslutsvägen kortare.'
  },
  {
    title: 'Raka rör',
    body:
      'Vi är ärliga om vad som fungerar och vad som inte gör det. Vi säger ifrån innan ett koncept hamnar fel, inte efter att det rullat i sex månader.'
  }
];

export default function AboutIntro() {
  return (
    <>
      <section className="relative text-plommon px-6 md:px-10 py-14 md:py-20">
        <div className="relative mx-auto max-w-3xl text-center">
          <Reveal>
            <p className="text-rose text-xs tracking-[0.4em] uppercase mb-5">En byrå</p>
            <h2 className="font-display font-light text-display-md md:text-display-lg text-balance leading-[1.05] mx-auto max-w-[18ch]">
              Två kreatörer, en byrå, en{' '}
              <span className="text-bordeaux font-normal">tydlig idé.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="mt-8 md:mt-10 text-lg md:text-xl text-plommon/80 leading-relaxed mx-auto max-w-2xl">
              Fikon är Zana och Mirna. Vi bygger mjuka berättelser för starka
              varumärken med film, foto, identitet och digital närvaro som
              förtjänar att sitta kvar. Vi är små, vi är närvarande och vi
              älskar det vi gör.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="relative text-plommon px-6 md:px-10 py-14 md:py-20">
        <div className="relative mx-auto max-w-3xl text-center">
          <Reveal>
            <p className="text-rose text-xs tracking-[0.4em] uppercase mb-5">Vårt team</p>
            <h2 className="font-display font-light text-display-md md:text-display-lg text-balance leading-[1.05] mx-auto max-w-[20ch]">
              Vi är två, men jobbar{' '}
              <span className="text-bordeaux font-normal">med fler.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="mt-8 md:mt-10 text-lg md:text-xl text-plommon/80 leading-relaxed mx-auto max-w-2xl">
              Till varje projekt sätter vi ihop rätt team för uppgiften.
              Ljudtekniker, klippare, illustratörer, utvecklare. Så kan vi
              växla mellan liten byrå och full produktion, utan att ni byter
              kontaktperson.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="relative text-plommon px-6 md:px-10 py-14 md:py-20">
        <div className="relative mx-auto max-w-5xl text-center">
          <Reveal>
            <p className="text-rose text-xs tracking-[0.4em] uppercase mb-5">Hur vi jobbar</p>
            <h2 className="font-display font-light text-display-md md:text-display-lg text-balance max-w-[20ch] mx-auto mb-12 md:mb-16 leading-[1.05]">
              Litet team. <span className="text-bordeaux font-normal">Stort ansvar.</span>
            </h2>
          </Reveal>
          <ul className="grid grid-cols-1 md:grid-cols-3 gap-x-10 md:gap-x-12 gap-y-10 text-left">
            {HOW.map((h, i) => (
              <Reveal key={h.title} delay={i * 0.05}>
                <li className="border-t border-plommon/15 pt-6">
                  <h3 className="font-display font-medium text-xl md:text-2xl">{h.title}</h3>
                  <p className="mt-4 text-plommon/75 text-base leading-relaxed">
                    {h.body}
                  </p>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
