import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
import mdx from "@astrojs/mdx";

// https://astro.build/config
import solidJs from "@astrojs/solid-js";

// https://astro.build/config
import image from "@astrojs/image";

// https://astro.build/config

// https://astro.build/config
import imageSharp from "@astrojs/image";

// https://astro.build/config
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: "https://kenjiphang.vercel.app",
  integrations: [tailwind(), mdx(), solidJs(), image({
    serviceEntryPoint: "@astrojs/image/sharp"
  }), sitemap(), preact()]
});