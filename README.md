# Fikon Agency — hemsida v2

Next.js 15 (App Router) + Tailwind + Framer Motion. Deployas på Vercel, domän `fikonagency.se`.

## Kör lokalt

```bash
npm install
npm run dev
```

Öppna [http://localhost:3000](http://localhost:3000).

## Innehållsuppdateringar

Allt innehåll (videos, team, kontakt, klienter) bor i `lib/data.ts`. Ingen omkompilering av komponenter behövs för att byta ut material.

### Byta hero-video
Ändra `HERO_VIMEO_ID` i `lib/data.ts` till ett nytt Vimeo-ID.

### Lägga till eller ändra portfolio-video
Redigera `projects`-arrayen i `lib/data.ts`:

```ts
{
  id: 'unik-slug',
  vimeoId: '1234567890',
  title: 'Projektnamn',
  client: 'Klientnamn',
  year: 2026,
  kind: 'film' | 'event' | 'social',
  featured: true // true = i huvudgrid, false = i "Mer"-rad
}
```

### Byta team
Redigera `team`-arrayen i `lib/data.ts`.

### Byta kontakt, sociala länkar, klientlista
Redigera `contact`- och `clients`-objekten i `lib/data.ts`.

### Bilder
1. Lägg original-JPG/PNG i `public/images/original/`.
2. Kör `npm run optimize-images` — skriver AVIF + WebP i 3 storlekar (800/1600/2400px) till `public/images/`.
3. Referera i komponenter med `next/image`: `<Image src="/images/namn-1600.webp" ... />`.

### Byta logotyp
Tillgängliga varianter i `public/brand/`:
- `fikon-white.png` — full wordmark i vitt (för mörk bakgrund, standard i hero)
- `fikon-bordeaux.png` — full wordmark i bordeaux (för cream-bakgrund)
- `fig-cream.png` — enbart fig-ikonen i cream
- `fig-bordeaux.png` — enbart fig-ikonen i bordeaux

Byt referensen i `components/Hero.tsx` eller `components/Nav.tsx` om du vill växla variant.

## Deploy

Pushar till `main` → Vercel auto-deployar. Preview-deploys per branch.

### DNS (när vi vill peka `fikonagency.se` hit)
- `A @` → `76.76.21.21` (Vercel)
- `CNAME www` → `cname.vercel-dns.com`
- MX/DKIM lämnas orörda (e-post påverkas inte)

## Struktur

```
app/              Next.js App Router (layout, page, fonts, css)
components/       UI-komponenter
lib/data.ts       ALLT redigerbart innehåll
public/brand/     Logotyp-varianter
public/images/    Optimerade bilder (genererade)
scripts/          Image-optimering
```
