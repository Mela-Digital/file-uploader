const { execSync } = require('child_process');

try {
  execSync('pnpm -v', { stdio: 'ignore' });
} catch (error) {
  console.error('pnpm is not installed. Please install pnpm to proceed.');
  console.log('Error details: ', error.message);
  process.exit(1);
}

try {
  execSync('pnpm install', { stdio: 'inherit' });
  execSync('pnpm start', { stdio: 'inherit' });
} catch (error) {
  console.error(
    'An error occurred while running pnpm commands:',
    error.message
  );
  process.exit(1);
}
