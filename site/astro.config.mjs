// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  site: 'https://battiston.dev',
  integrations: [react()],
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'it'],
    routing: { prefixDefaultLocale: false },
  },
});
