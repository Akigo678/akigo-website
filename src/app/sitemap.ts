import type { MetadataRoute } from "next";

const origin = "https://akigo.org";
const pages = [
  "",
  "/ride",
  "/long-distance-quote",
  "/drive",
  "/deliver",
  "/business",
  "/partners",
  "/driver-requirements",
  "/launch-markets",
  "/download",
  "/about",
  "/about/founder-letter",
  "/safety",
  "/safety-center",
  "/help",
  "/contact",
  "/faq/riders",
  "/faq/drivers",
  "/faq/business",
  "/careers",
  "/newsroom",
  "/press",
  "/terms",
  "/privacy",
  "/cookies",
  "/accessibility",
  "/community-guidelines",
  "/delete-account",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return pages.map((path) => ({
    url: `${origin}${path}`,
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : path.startsWith("/faq") ? 0.5 : 0.7,
  }));
}
