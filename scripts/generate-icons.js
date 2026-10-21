import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const outDir = path.resolve('public/icons');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

// SVG design for Raj Electric Wooden App Icon
function createIconSvg(size, maskable = false) {
  const pad = maskable ? size * 0.15 : 0;
  const innerSize = size - pad * 2;
  const rx = maskable ? 0 : size * 0.22;

  return `
  <svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#1E88E5" />
        <stop offset="50%" stop-color="#1976D2" />
        <stop offset="100%" stop-color="#0D47A1" />
      </linearGradient>
      <linearGradient id="boltGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#FFF9C4" />
        <stop offset="40%" stop-color="#FFEB3B" />
        <stop offset="100%" stop-color="#FFA000" />
      </linearGradient>
      <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="0" dy="${size * 0.02}" stdDeviation="${size * 0.03}" flood-color="#000000" flood-opacity="0.35" />
      </filter>
    </defs>

    <!-- Main Background -->
    <rect x="${pad}" y="${pad}" width="${innerSize}" height="${innerSize}" rx="${rx}" fill="url(#bgGrad)" />

    <!-- Subtle Electrical Circuit Lines -->
    <circle cx="${size / 2}" cy="${size / 2}" r="${innerSize * 0.38}" fill="none" stroke="rgba(255, 255, 255, 0.15)" stroke-width="${size * 0.015}" stroke-dasharray="${size * 0.04} ${size * 0.02}" />

    <!-- Lightning Bolt (Electric Icon) -->
    <g filter="url(#glow)">
      <path
        d="M ${size * 0.53} ${size * 0.22}
           L ${size * 0.35} ${size * 0.50}
           L ${size * 0.49} ${size * 0.50}
           L ${size * 0.43} ${size * 0.78}
           L ${size * 0.67} ${size * 0.46}
           L ${size * 0.52} ${size * 0.46} Z"
        fill="url(#boltGrad)"
      />
    </g>

    <!-- App Name Banner Text -->
    <text
      x="${size / 2}"
      y="${size * 0.88}"
      text-anchor="middle"
      fill="#FFFFFF"
      font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
      font-weight="800"
      font-size="${size * 0.09}"
      letter-spacing="${size * 0.005}"
    >
      RAJ ELECTRIC
    </text>
  </svg>
  `;
}

async function generate() {
  console.log('Generating PWA and App Icons...');

  const icon192Svg = Buffer.from(createIconSvg(192, false));
  await sharp(icon192Svg).png().toFile(path.join(outDir, 'icon-192.png'));
  console.log('Created icon-192.png');

  const icon512Svg = Buffer.from(createIconSvg(512, false));
  await sharp(icon512Svg).png().toFile(path.join(outDir, 'icon-512.png'));
  console.log('Created icon-512.png');

  const maskableSvg = Buffer.from(createIconSvg(512, true));
  await sharp(maskableSvg).png().toFile(path.join(outDir, 'maskable-icon-512.png'));
  console.log('Created maskable-icon-512.png');

  const appleSvg = Buffer.from(createIconSvg(180, false));
  await sharp(appleSvg).png().toFile(path.join(outDir, 'apple-touch-icon.png'));
  console.log('Created apple-touch-icon.png');

  // Copy to public root as well for default fallbacks
  await sharp(icon192Svg).png().toFile(path.resolve('public/icon-192.png'));
  await sharp(icon512Svg).png().toFile(path.resolve('public/icon-512.png'));
  await sharp(appleSvg).png().toFile(path.resolve('public/apple-touch-icon.png'));

  // Export Android mipmap launcher icons
  const androidRes = path.resolve('android/app/src/main/res');
  if (fs.existsSync(androidRes)) {
    const mipmaps = [
      { folder: 'mipmap-mdpi', size: 48 },
      { folder: 'mipmap-hdpi', size: 72 },
      { folder: 'mipmap-xhdpi', size: 96 },
      { folder: 'mipmap-xxhdpi', size: 144 },
      { folder: 'mipmap-xxxhdpi', size: 192 }
    ];

    for (const m of mipmaps) {
      const targetDir = path.join(androidRes, m.folder);
      if (fs.existsSync(targetDir)) {
        const iconSvg = Buffer.from(createIconSvg(m.size, false));
        await sharp(iconSvg).png().toFile(path.join(targetDir, 'ic_launcher.png'));
        await sharp(iconSvg).png().toFile(path.join(targetDir, 'ic_launcher_round.png'));
      }
    }
    console.log('Updated Android mipmap app icons!');
  }

  console.log('All icons generated successfully!');
}

generate().catch(console.error);
