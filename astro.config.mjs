import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import vue from "@astrojs/vue";
export default defineConfig({
  integrations: [tailwind(), vue()],
  ...(process.env.GH_ENV) ? {
      site:  process.env.GH_SITE,
      base:  process.env.GH_BASE,
    } : {},
    experimental: {
      assets: true
    },
});

