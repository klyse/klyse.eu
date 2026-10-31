// @ts-check
import { defineConfig } from "astro/config";

export default defineConfig({
  // Vercel serves the www host (the apex 308s to it), so canonical, sitemap and og:url must use www too.
  site: "https://www.klyse.eu",
  // One page with ~20 KB of CSS: inlining it saves a render-blocking request on first paint.
  build: { inlineStylesheets: "always" },
  // Never base64 fonts into that CSS: the tiny non-Latin @fontsource subsets would ride along in every page
  // although unicode-range means the browser never needs them.
  vite: { build: { assetsInlineLimit: (file) => (/\.woff2?$/.test(file) ? false : undefined) } },
});
