import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import vue from "@astrojs/vue";

export default defineConfig({
  integrations: [tailwind(), vue()],
  // site: 'https://PichardoWilfred.github.io',
  // base: '/scarlet-website',
});