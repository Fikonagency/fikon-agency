export default function Footer() {
  return (
    <footer className="bg-cream text-plommon/50 border-t border-plommon/10 px-6 py-10">
      <div className="mx-auto max-w-[1400px] flex flex-col md:flex-row items-center justify-between gap-3 text-xs tracking-wide">
        <p>Fikon Agency · Malmö</p>
        <p>© {new Date().getFullYear()} Fikon Agency</p>
      </div>
    </footer>
  );
}
