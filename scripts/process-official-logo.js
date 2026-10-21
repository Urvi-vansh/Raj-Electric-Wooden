import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const sourceImg = 'C:/Users/Urvi/.gemini/antigravity-ide/brain/ccd76cbe-921d-428d-ba77-2838431b87d2/.user_uploaded/media_1792603745010.jpg';

async function processLogo() {
  console.log('Processing official Raj Electric & Wooden logo...');

  // 1. Crop full logo (REW + RAJ ELECTRIC & WOODEN)
  // minX: 57, maxX: 740, minY: 360, maxY: 664
  // Let's add 15px padding around:
  const pad = 12;
  const left = Math.max(0, 57 - pad);
  const top = Math.max(0, 360 - pad);
  const width = (740 - 57) + pad * 2;
  const height = (664 - 360) + pad * 2;

  const croppedFull = sharp(sourceImg).extract({ left, top, width, height });

  // Save full logo in public/images/
  await croppedFull
    .clone()
    .png()
    .toFile(path.resolve('public/images/logo.png'));
  console.log('Created public/images/logo.png');

  // Also save in public/ as well for direct reference
  await croppedFull
    .clone()
    .png()
    .toFile(path.resolve('public/logo.png'));

  // 2. Crop just the REW Monogram for square icons & favicons
  // REW is from x: 57 to 740, y: 360 to 590
  const rewLeft = 57;
  const rewTop = 360;
  const rewWidth = 740 - 57;
  const rewHeight = 590 - 360;

  const croppedRew = sharp(sourceImg).extract({
    left: rewLeft,
    top: rewTop,
    width: rewWidth,
    height: rewHeight
  });

  // Fit REW monogram inside a square canvas (512x512) with clean white background
  await croppedRew
    .clone()
    .resize(450, 450, {
      fit: 'contain',
      background: { r: 255, g: 255, b: 255, alpha: 1 }
    })
    .extend({
      top: 31,
      bottom: 31,
      left: 31,
      right: 31,
      background: { r: 255, g: 255, b: 255, alpha: 1 }
    })
    .png()
    .toFile(path.resolve('public/images/logo-icon.png'));
  console.log('Created public/images/logo-icon.png');

  // Copy to public/logo-icon.png
  await sharp(path.resolve('public/images/logo-icon.png'))
    .toFile(path.resolve('public/logo-icon.png'));

  // 3. Generate PWA App Icons using the new official REW logo
  const pwaIcons = [
    { file: 'public/icons/icon-192.png', size: 192 },
    { file: 'public/icons/icon-512.png', size: 512 },
    { file: 'public/icons/maskable-icon-512.png', size: 512 },
    { file: 'public/icons/apple-touch-icon.png', size: 180 },
    { file: 'public/icon-192.png', size: 192 },
    { file: 'public/icon-512.png', size: 512 },
    { file: 'public/apple-touch-icon.png', size: 180 },
    { file: 'public/favicon.png', size: 64 }
  ];

  for (const item of pwaIcons) {
    await sharp(path.resolve('public/images/logo-icon.png'))
      .resize(item.size, item.size, { fit: 'contain', background: '#FFFFFF' })
      .png()
      .toFile(path.resolve(item.file));
  }
  console.log('Updated PWA and Favicon icons with official REW logo!');

  // 4. Update Android mipmap launcher icons
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
        await sharp(path.resolve('public/images/logo-icon.png'))
          .resize(m.size, m.size, { fit: 'contain', background: '#FFFFFF' })
          .png()
          .toFile(path.join(targetDir, 'ic_launcher.png'));

        await sharp(path.resolve('public/images/logo-icon.png'))
          .resize(m.size, m.size, { fit: 'contain', background: '#FFFFFF' })
          .png()
          .toFile(path.join(targetDir, 'ic_launcher_round.png'));
      }
    }
    console.log('Updated Android launcher mipmap icons with official REW logo!');
  }

  console.log('All logo assets generated successfully!');
}

processLogo().catch(console.error);
