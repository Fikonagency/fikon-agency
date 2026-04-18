import Reveal from './Reveal';

export default function AboutHero() {
  return (
    <section className="relative bg-cream text-plommon px-6 md:px-10 pt-40 md:pt-48 pb-14 md:pb-20">
      <div className="mx-auto max-w-[1500px]">
        <Reveal>
          <p className="text-rose text-xs tracking-[0.4em] uppercase mb-5">Om Fikon</p>
          <h1 className="font-display text-display-xl text-balance max-w-[14ch]">
            Det är vi som{' '}
            <span className="italic text-bordeaux">bygger bilden.</span>
          </h1>
        </Reveal>
      </div>
    </section>
  );
}
