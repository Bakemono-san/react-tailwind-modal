import { build } from 'esbuild';

await build({
  entryPoints: ['src/Modal.tsx'],
  outfile: 'dist/index.js',
  bundle: true,
  format: 'esm',
  target: ['es2020'],
  sourcemap: true,
  minify: true,
  jsx: 'automatic',
  loader: { '.tsx': 'tsx' },
});

