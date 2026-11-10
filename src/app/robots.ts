import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/", disallow: ["/api/", "/website-operations/", "/newsletter/confirmed"] }],
    sitemap: "https://akigo.org/sitemap.xml",
    host: "https://akigo.org",
  };
}
