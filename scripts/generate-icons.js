// Gera favicons e logo.png a partir dos SVGs em public/images/
// Uso: node scripts/generate-icons.js

import sharp from 'sharp';
import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const ROOT = path.resolve(path.dirname(__filename), '..');

const ICON_SRC = path.join(ROOT, 'public/images/icon-source.svg');
const LOGO_SRC = path.join(ROOT, 'public/images/logo.svg');
const ICONS_DIR = path.join(ROOT, 'public/icons');

async function main() {
  await fs.mkdir(ICONS_DIR, { recursive: true });

  const iconSvg = await fs.readFile(ICON_SRC);
  const logoSvg = await fs.readFile(LOGO_SRC);

  // Favicons quadrados (a partir do icon-source.svg)
  const sizes = [
    { size: 32,  name: 'icon-32x32.png' },
    { size: 180, name: 'icon-180x180.png' },     // apple-touch-icon
    { size: 192, name: 'icon-192x192.png' },     // PWA
    { size: 512, name: 'icon-512x512.png' },     // PWA maskable
  ];

  for (const { size, name } of sizes) {
    await sharp(iconSvg)
      .resize(size, size)
      .png({ compressionLevel: 9 })
      .toFile(path.join(ICONS_DIR, name));
    console.log(`✓ /icons/${name}`);
  }

  // Logo PNG raster (300x60 — usado no schema Organization)
  await sharp(logoSvg)
    .resize(300, 60, { fit: 'contain', background: { r: 13, g: 13, b: 13, alpha: 1 } })
    .png({ compressionLevel: 9 })
    .toFile(path.join(ROOT, 'public/images/logo.png'));
  console.log('✓ /images/logo.png (300x60)');

  // Favicon ICO (multi-size — opcional, mantém o existente se já houver)
  // Sharp não gera ICO nativamente, mas o favicon.ico já existe em app/
}

main().catch(err => {
  console.error('Erro gerando ícones:', err);
  process.exit(1);
});
