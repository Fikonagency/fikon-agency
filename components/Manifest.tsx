import Reveal from './Reveal';

export default function Manifest() {
  return (
    <section id="manifest" className="bg-cream text-plommon px-6 py-32 md:py-48">
      <div className="max-w-4xl mx-auto">
        <Reveal>
          <h2 className="font-display text-display-lg text-balance">
            Reklam som ska glömmas görs enkelt.
            <span className="block italic text-bordeaux mt-2">
              Det här är det andra.
            </span>
          </h2>
        </Reveal>
      </div>
    </section>
  );
}
