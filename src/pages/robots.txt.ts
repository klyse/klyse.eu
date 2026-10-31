import type { APIRoute } from "astro";

// Keep photos out of Google Images; pages stay indexable.
export const GET: APIRoute = ({ site }) =>
  new Response(
    `User-agent: Googlebot-Image\nDisallow: /images/\n\nUser-agent: *\nAllow: /\n\nSitemap: ${new URL("/sitemap.xml", site)}\n`,
    { headers: { "Content-Type": "text/plain; charset=utf-8" } },
  );
