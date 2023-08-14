import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import vue from "@astrojs/vue";
const base_config = {
}
const config = {
  site:  process.env.GH_SITE,
  base:  process.env.GH_BASE,
}
export default defineConfig({
  integrations: [tailwind(), vue()],
  ...GH_ENV ? config : {}
});

