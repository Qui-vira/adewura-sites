// Builds the whole site into site/: the parent page and the three brands.
// One esbuild run with code splitting, so three.js, GSAP and Lenis download once and are
// shared between pages. Then applies site.config.json to every page: the site address for
// canonical and Open Graph tags, the parent name, booking links, and whether search engines
// may index the site. Writes robots.txt and sitemap.xml.
import * as esbuild from 'esbuild';
import { existsSync, readFileSync, writeFileSync, rmSync, readdirSync } from 'node:fs';

const config = JSON.parse(readFileSync('site.config.json', 'utf8'));
const watch = process.argv.includes('--watch');
const clean = process.argv.includes('--clean');

const pages = [
  { dir: '', out: 'dist' },
  { dir: 'natural/', out: 'natural/dist' },
  { dir: 'ategbe/', out: 'ategbe/dist' },
  { dir: 'farmers/', out: 'farmers/dist' },
].filter((p) => existsSync(`site/${p.dir}src/main.js`));

const entryPoints = {};
for (const p of pages) {
  entryPoints[`${p.out}/main`] = `site/${p.dir}src/main.js`;
  entryPoints[`${p.out}/style`] = `site/${p.dir}src/style.css`;
}

if (clean) rmSync('site/shared', { recursive: true, force: true });

const ctx = await esbuild.context({
  entryPoints,
  outdir: 'site',
  bundle: true,
  splitting: true,
  chunkNames: 'shared/[name]-[hash]',
  minify: true,
  sourcemap: false,
  format: 'esm',
  target: ['es2020', 'safari15'],
  external: ['../fonts/*', '../img/*', './fonts/*', './img/*'],
  logLevel: 'info',
});

// Replace the inside of a tag marked with a data attribute, e.g. <span data-parent-name>X</span>
const setMarked = (html, attr, value) =>
  html.replace(new RegExp(`(<([a-z0-9]+)[^>]*\\s${attr}(?:=""|)[^>]*>)([^<]*)(</\\2>)`, 'gi'), (_, open, _t, _old, close) => open + value + close);

// every page that gets the config: the bundled pages, plus each brand's inner pages
// (site/<brand>/<page>/index.html), which need no script of their own
function htmlPages() {
  const dirs = pages.map((p) => p.dir);
  for (const p of pages) {
    if (!p.dir) continue;
    for (const d of readdirSync(`site/${p.dir}`, { withFileTypes: true })) {
      if (d.isDirectory() && existsSync(`site/${p.dir}${d.name}/index.html`)) dirs.push(`${p.dir}${d.name}/`);
    }
  }
  return dirs.map((dir) => ({ dir }));
}

function applyConfig() {
  const base = config.siteUrl.replace(/\/$/, '');
  const hosts = new Set([new URL(config.siteUrl).host, 'adewura-preview.netlify.app']);
  for (const p of htmlPages()) {
    const file = `site/${p.dir}index.html`;
    if (!existsSync(file)) continue;
    let html = readFileSync(file, 'utf8');
    const url = `${base}/${p.dir}`;
    html = html
      .replace(/(<link rel="canonical" href=")[^"]*(")/, `$1${url}$2`)
      .replace(/(<meta property="og:url" content=")[^"]*(")/, `$1${url}$2`)
      .replace(/(<meta property="og:image" content=")(?:https?:\/\/[^/"]+)?\/?([^"]*)(")/, `$1${base}/$2$3`)
      .replace(/(<meta name="robots" content=")[^"]*(")/, `$1${config.indexable ? 'index, follow' : 'noindex, nofollow'}$2`);
    html = setMarked(html, 'data-parent-name', config.parentName);
    html = setMarked(html, 'data-parent-note', config.parentNameIsWorkingName ? 'Working name. Prototype for client review.' : 'Prototype for client review.');
    // search-engine fields that carry the parent name
    html = html.replace(/("parentOrganization": \{ "@type": "Organization", "name": ")[^"]*(")/, `$1${config.parentName}$2`);
    if (p.dir === '') {
      html = html
        .replace(/(<title>)[^|<]*?( \|)/, `$1${config.parentName}$2`)
        .replace(/(<meta property="og:title" content=")[^"]*(")/, `$1${config.parentName}$2`)
        .replace(/("@type": "Organization",\s*"name": ")[^"]*(")/, `$1${config.parentName}$2`);
    }
    // booking links: <a data-booking="natural" href="..."> open WhatsApp with a message naming the brand;
    // with no number set they keep their email fallback
    const wa = config.whatsapp;
    const digits = (wa?.number || '').replace(/\D/g, '');
    html = html.replace(/(<a\b[^>]*\sdata-booking="(\w+)"[^>]*\shref=")([^"]*)(")/g, (m, a, brand, old, b) =>
      digits ? `${a}https://wa.me/${digits}?text=${encodeURIComponent(wa.messages?.[brand] || '')}${b}` : m);
    // JSON-LD url fields on this site point at the configured address
    html = html.replace(/"url": "https?:\/\/([^/"]+)(\/[^"]*)?"/g, (m, host, path = '/') => (hosts.has(host) ? `"url": "${base}${path}"` : m));
    writeFileSync(file, html);
  }
  writeFileSync('site/robots.txt', config.indexable
    ? `User-agent: *\nAllow: /\n\nSitemap: ${base}/sitemap.xml\n`
    : `# Preview build: keep search engines out until launch (site.config.json "indexable": false)\nUser-agent: *\nDisallow: /\n`);
  // Old domains forward to the new pages; this takes effect only once they are Netlify domain aliases
  const lines = ['# Generated from site.config.json "redirects". Do not edit by hand.'];
  for (const [domain, rule] of Object.entries(config.redirects || {})) {
    if (domain.startsWith('_')) continue;
    for (const host of [domain, `www.${domain}`]) {
      for (const scheme of ['https', 'http']) {
        // a list sends every path to rule.to; a map sends each old page to its own new page
        const map = Array.isArray(rule.paths) ? Object.fromEntries(rule.paths.map((path) => [path, rule.to])) : rule.paths;
        for (const [path, to] of Object.entries(map)) {
          for (const variant of path === '/' ? ['/'] : [path, `${path}/`]) lines.push(`${scheme}://${host}${variant}  ${base}${to}  301!`);
        }
        if (rule.catchAll) lines.push(`${scheme}://${host}/*  ${base}${rule.to}  301!`);
      }
    }
  }
  writeFileSync('site/_redirects', lines.join('\n') + '\n');

  const today = new Date().toISOString().slice(0, 10);
  writeFileSync('site/sitemap.xml', `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${
    config.pages.map((pg) => `  <url><loc>${base}${pg.path}</loc><lastmod>${today}</lastmod><priority>${pg.priority}</priority></url>`).join('\n')
  }\n</urlset>\n`);
}

if (watch) {
  await ctx.watch();
} else {
  await ctx.rebuild();
  await ctx.dispose();
  applyConfig();
}
