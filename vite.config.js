import { defineConfig } from "vite";
import Vue from "@vitejs/plugin-vue";
import Markdown from "vite-plugin-md";
import Pages from "vite-plugin-pages";
import { VitePluginFonts } from "vite-plugin-fonts";
import { imagetools as Imagetools } from "vite-imagetools";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    Vue({
      include: [/\.vue$/, /\.md$/],
    }),
    Pages({
      extensions: ["vue", "md"],
      routeStyle: "nuxt",
    }),
    Markdown({
      headEnabled: true,
    }),
    VitePluginFonts({
      google: {
        families: [{ name: "IBM Plex Sans", styles: "wght@400;500;700" }],
      },
    }),
    Imagetools({
      defaultDirectives: (_url) => {
        return new URLSearchParams({
          webp: true,
        });
      },
    }),
  ],
});
