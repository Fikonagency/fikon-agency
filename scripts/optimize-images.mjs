import sharp from 'sharp';
import { readdir, mkdir, stat } from 'node:fs/promises';
import { join, parse } from 'node:path';
import { fileURLToPath } from 'node:url';

const SRC = fileURLToPath(new URL('../originals/', import.meta.url));
const OUT = fileURLToPath(new URL('../public/images/', import.meta.url));
const SIZES = [800, 1600, 2400];

await mkdir(OUT, { recursive: true });

let files = [];
try {
  files = await readdir(SRC);
} catch {
  console.log('No source folder at public/images/original/. Create it and drop originals there.');
  process.exit(0);
}

const images = files.filter((f) => /\.(jpe?g|png|tiff?)$/i.test(f));
if (!images.length) {
  console.log('No images to optimize.');
  process.exit(0);
}

let totalIn = 0;
let totalOut = 0;

for (const file of images) {
  const { name } = parse(file);
  const src = join(SRC, file);
  const { size } = await stat(src);
  totalIn += size;

  for (const w of SIZES) {
    for (const fmt of ['avif', 'webp']) {
      const outFile = join(OUT, `${name}-${w}.${fmt}`);
      const quality = fmt === 'avif' ? 60 : 80;
      const info = await sharp(src)
        .resize({ width: w, withoutEnlargement: true })
        .toFormat(fmt, { quality })
        .toFile(outFile);
      totalOut += info.size;
    }
  }
  console.log(`✓ ${file}`);
}

const savedPct = ((1 - totalOut / totalIn) * 100).toFixed(0);
console.log(`\nSource: ${(totalIn / 1e6).toFixed(1)}MB → Optimized: ${(totalOut / 1e6).toFixed(1)}MB (${savedPct}% reduction)`);
