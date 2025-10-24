import { execSync } from 'child_process';
import { copyFileSync, mkdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

try {
  console.log('Building frontend and backend...');
  execSync('vite build && esbuild server/index.ts --platform=node --packages=external --bundle --format=esm --outdir=dist', {
    stdio: 'inherit',
  });

  console.log('Copying content.json to dist/public...');
  const sourcePath = join(__dirname, 'server', 'content.json');
  const destPath = join(__dirname, 'dist', 'public', 'content.json');
  
  copyFileSync(sourcePath, destPath);
  
  console.log('Build completed successfully!');
} catch (error) {
  console.error('Build failed:', error);
  process.exit(1);
}
