// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  // TODO: replace with the final Cloudflare domain.
  site: 'https://pcmatteo01.github.io',
  integrations: [react()],
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'it'],
    routing: { prefixDefaultLocale: false },
  },
});
