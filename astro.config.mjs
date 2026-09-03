import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://www.nosomres.cat',
  base: '/',
  output: 'static',
  // GitHub Pages serves directory URLs, so link to '/music/' rather than
  // '/music' — otherwise every internal click takes a 301 first.
  trailingSlash: 'always',
  integrations: [sitemap()],
});
