// @ts-check
import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://klyse.eu",
  // One page with ~20 KB of CSS: inlining it saves a render-blocking request on first paint.
  build: { inlineStylesheets: "always" },
  // Never base64 fonts into that CSS: the tiny non-Latin @fontsource subsets would ride along in every page
  // although unicode-range means the browser never needs them.
  vite: { build: { assetsInlineLimit: (file) => (/\.woff2?$/.test(file) ? false : undefined) } },
});
