const PRODUCTION_SITE_URL = "https://akigo.org";

export function getPublicSiteUrl(
  configuredUrl = process.env.NEXT_PUBLIC_SITE_URL,
  environment = process.env.NODE_ENV,
): string {
  if (!configuredUrl?.trim()) {
    if (environment === "production") {
      throw new Error("NEXT_PUBLIC_SITE_URL must be configured in production.");
    }
    return "http://localhost:3000";
  }

  const url = new URL(configuredUrl.trim());
  if (!["http:", "https:"].includes(url.protocol) || url.username || url.password || url.search || url.hash || url.pathname !== "/") {
    throw new Error("NEXT_PUBLIC_SITE_URL must be a site origin without credentials, path, query, or hash.");
  }
  if (environment === "production" && url.origin !== PRODUCTION_SITE_URL) {
    throw new Error(`Production NEXT_PUBLIC_SITE_URL must be ${PRODUCTION_SITE_URL}.`);
  }
  return url.origin;
}
