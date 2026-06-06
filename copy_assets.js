const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const brainDir = 'C:\\Users\\Lenovo\\.gemini\\antigravity-ide\\brain\\4f9495fd-0801-407a-aa4d-e8e6aa8a6265';
const publicDir = 'd:\\portfolio -next\\f\\public';
const appDir = 'd:\\portfolio -next\\f\\app';

const copyMap = [
  { src: 'why_me_communication_1780759723185.png', dest: 'why_me_communication.png' },
  { src: 'why_me_code_1780759740259.png', dest: 'why_me_code.png' },
  { src: 'why_me_architecture_1780759754757.png', dest: 'why_me_architecture.png' },
  { src: 'why_me_delivery_1780759768216.png', dest: 'why_me_delivery.png' }
];

// 1. Copy generated illustrations to public directory
copyMap.forEach(item => {
  const srcPath = path.join(brainDir, item.src);
  const destPath = path.join(publicDir, item.dest);
  if (fs.existsSync(srcPath)) {
    fs.copyFileSync(srcPath, destPath);
    console.log(`Copied ${item.src} to ${item.dest}`);
  } else {
    console.error(`Source file not found: ${srcPath}`);
  }
});

// 2. Generate favicon from hero-image.png
const heroPath = path.join(publicDir, 'hero-image.png');
const faviconPath = path.join(appDir, 'favicon.ico');

if (fs.existsSync(heroPath)) {
  sharp(heroPath)
    .resize(32, 32)
    .toFormat('png')
    .toBuffer()
    .then(data => {
      fs.writeFileSync(faviconPath, data);
      console.log('Favicon generated successfully from hero-image.png');
    })
    .catch(err => {
      console.error('Error generating favicon:', err);
    });
} else {
  console.error(`Hero image not found: ${heroPath}`);
}
