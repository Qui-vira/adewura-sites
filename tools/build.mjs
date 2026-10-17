// Bundles each site's src/main.js and src/style.css into dist/, minified.
// The output is plain static files, so every site folder deploys on its own.
import * as esbuild from 'esbuild';
import { existsSync } from 'node:fs';

// --only=natural builds one site
const only = process.argv.find((a) => a.startsWith('--only='))?.slice(7);
const sites = ['agfici', 'natural', 'ategbe'].filter((s) => existsSync(`${s}/src/main.js`) && (!only || s === only));
const watch = process.argv.includes('--watch');

const contexts = await Promise.all(
  sites.map((site) =>
    esbuild.context({
      entryPoints: [`${site}/src/main.js`, `${site}/src/style.css`],
      outdir: `${site}/dist`,
      bundle: true,
      minify: true,
      sourcemap: false,
      format: 'esm',
      target: ['es2020', 'safari15'],
      loader: { '.woff2': 'file', '.svg': 'text' },
      external: ['../fonts/*', '../img/*'],
      logLevel: 'info',
    }),
  ),
);

if (watch) {
  await Promise.all(contexts.map((c) => c.watch()));
} else {
  await Promise.all(contexts.map((c) => c.rebuild()));
  await Promise.all(contexts.map((c) => c.dispose()));
}
