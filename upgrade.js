const { execSync } = require('child_process');

try {
  execSync('pnpm -v', { stdio: 'ignore' });
} catch (error) {
  console.error('pnpm is not installed. Please install pnpm to proceed.');
  console.log('Error details: ', error.message);
  process.exit(1);
}

try {
  console.log('Resetting changes...');
  execSync('git reset --hard HEAD && git clean -fd', { stdio: 'inherit' });

  console.log('Pulling latest code...');
  execSync('git pull', { stdio: 'inherit' });

  console.log('Starting the server...');
  execSync('pnpm run server', { stdio: 'inherit' });
} catch (error) {
  console.error('An error occurred:', error.message);
  process.exit(1);
}
