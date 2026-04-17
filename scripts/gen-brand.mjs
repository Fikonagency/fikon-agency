// One-shot: take the white-on-transparent source logos and create plommon-tinted
// variants for use on cream backgrounds, plus a favicon at app/icon.png.
//
// Run with: node scripts/gen-brand.mjs
import sharp from 'sharp';
import { fileURLToPath } from 'node:url';
import { join } from 'node:path';

const BRAND = fileURLToPath(new URL('../public/brand/', import.meta.url));
const APP = fileURLToPath(new URL('../app/', import.meta.url));
const PLOMMON = '#631A28';

async function darken(src, out) {
  const meta = await sharp(src).metadata();
  await sharp({ create: { width: meta.width, height: meta.height, channels: 4, background: PLOMMON } })
    .composite([{ input: src, blend: 'dest-in' }])
    .png()
    .toFile(out);
  console.log(`✓ ${out}`);
}

await darken(join(BRAND, 'fikon-wordmark.png'), join(BRAND, 'fikon-wordmark-plommon.png'));
await darken(join(BRAND, 'fikon-fig.png'), join(BRAND, 'fikon-fig-plommon.png'));

// Favicon: 512×512, plommon fig centered in transparent canvas
const figResized = await sharp(join(BRAND, 'fikon-fig.png'))
  .resize({ width: 512, height: 512, fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
  .toBuffer();

await sharp({ create: { width: 512, height: 512, channels: 4, background: PLOMMON } })
  .composite([{ input: figResized, blend: 'dest-in' }])
  .png()
  .toFile(join(APP, 'icon.png'));

console.log(`✓ ${join(APP, 'icon.png')}`);
console.log('Brand assets generated.');
