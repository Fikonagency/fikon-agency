// One-shot: build a 1200×630 Open Graph image with cream wordmark on wine bg.
// Run with: node scripts/gen-og.mjs
import sharp from 'sharp';
import { fileURLToPath } from 'node:url';
import { join } from 'node:path';

const ROOT = fileURLToPath(new URL('..', import.meta.url));
const W = 1200;
const H = 630;
const WINE = '#631A28';
const CREAM = '#F0E0CC';

const wordmarkResized = await sharp(join(ROOT, 'public/brand/fikon-wordmark.png'))
  .resize({ width: 900, height: 630, fit: 'inside', background: { r: 0, g: 0, b: 0, alpha: 0 } })
  .toBuffer();

const meta = await sharp(wordmarkResized).metadata();

const creamLogo = await sharp({
  create: { width: meta.width, height: meta.height, channels: 4, background: CREAM }
})
  .composite([{ input: wordmarkResized, blend: 'dest-in' }])
  .png()
  .toBuffer();

await sharp({ create: { width: W, height: H, channels: 4, background: WINE } })
  .composite([
    {
      input: creamLogo,
      left: Math.floor((W - meta.width) / 2),
      top: Math.floor((H - meta.height) / 2)
    }
  ])
  .png()
  .toFile(join(ROOT, 'public/og.png'));

console.log('✓ public/og.png');
