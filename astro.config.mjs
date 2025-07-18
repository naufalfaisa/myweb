import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://naufalfaisa.my.id",
  integrations: [tailwind()],
  markdown: {
    shikiConfig: {
      theme: "github-dark",
    },
  },
});
