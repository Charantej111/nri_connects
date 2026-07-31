import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const targetDir = path.resolve(__dirname, 'src/assets');
if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

// Move from Public/assets or public/assets or Public
const candidates = [
  path.resolve(__dirname, 'Public/assets'),
  path.resolve(__dirname, 'public/assets'),
  path.resolve(__dirname, 'Public')
];

candidates.forEach((fullPath) => {
  if (fs.existsSync(fullPath) && fs.statSync(fullPath).isDirectory()) {
    const files = fs.readdirSync(fullPath);
    files.forEach((file) => {
      const srcFile = path.join(fullPath, file);
      if (fs.statSync(srcFile).isFile()) {
        const destFile = path.join(targetDir, file);
        fs.copyFileSync(srcFile, destFile);
        console.log(`[Migrate] Copied ${file} -> src/assets/${file}`);
      }
    });
  }
});

const upperPublic = path.resolve(__dirname, 'Public');
if (fs.existsSync(upperPublic)) {
  try {
    fs.rmSync(upperPublic, { recursive: true, force: true });
    console.log('[Migrate] Removed legacy Public directory.');
  } catch (e) {
    // Ignore if directory lock
  }
}
