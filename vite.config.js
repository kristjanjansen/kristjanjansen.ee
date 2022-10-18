import { defineConfig } from "vite";
import Vue from "@vitejs/plugin-vue";
import Markdown from "vite-plugin-md";
import { VitePluginFonts } from "vite-plugin-fonts";

const wrapperClasses = `content`;

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    Vue({
      include: [/\.vue$/, /\.md$/],
    }),
    Markdown({ wrapperClasses }),
    VitePluginFonts({
      google: {
        families: [{ name: "IBM Plex Sans", styles: "wght@400;500;700" }],
      },
    }),
  ],
});
