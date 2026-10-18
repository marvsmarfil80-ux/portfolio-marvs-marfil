import type { MetadataRoute } from "next";
import { navLinks, siteConfig } from "@/config/nav";

export default function sitemap(): MetadataRoute.Sitemap {
  // Only list pages when the site is indexable (flag flipped at launch).
  if (!siteConfig.indexable) return [];
  return navLinks.map(({ href }) => ({ url: `${siteConfig.siteUrl}${href}` }));
}
