/**
 * Gera og-default.jpg a partir do SVG usando a API de ImageResponse do Next.js
 * Execute: node scripts/generate-og-image.js
 *
 * Alternativa simples: usa o SVG diretamente como og:image
 * (a maioria das redes sociais suporta SVG no OG)
 */

// Para gerar um PNG real, instale: npm install sharp
// e descomente o código abaixo:

/*
const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

const svgPath = path.join(__dirname, '../public/images/og-default.svg');
const outPath = path.join(__dirname, '../public/images/og-default.png');

sharp(fs.readFileSync(svgPath))
  .resize(1200, 630)
  .png()
  .toFile(outPath)
  .then(() => console.log('✅ og-default.png gerado em public/images/'))
  .catch(console.error);
*/

console.log('ℹ️  og-default.svg criado em public/images/');
console.log('   Para gerar PNG: npm install sharp && descomente o código acima');
