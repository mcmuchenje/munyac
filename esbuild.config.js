const esbuild = require('esbuild');

esbuild.build({
  entryPoints: ['./src/index.js'],  // Path to your Worker entry file
  bundle: true,
  minify: true,
  target: 'es2020',
  outfile: './public/worker.js',  // Output file for the bundled code
  platform: 'browser',  // Important for Cloudflare Workers
}).catch(() => process.exit(1));
