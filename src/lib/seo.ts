/**
 * Reusable SEO settings for every 6E Club page.
 *
 * Each content route calls `buildSeoHead()` inside its own `head()` so it gets
 * a unique title/description, Open Graph + Twitter tags, a self-referencing
 * canonical URL and valid JSON-LD (breadcrumbs plus any extra schemas).
 */

export const SITE_NAME = "6E Club";
export const SITE_URL = "https://6e-club.org";

export interface Crumb {
  name: string;
  /** Path starting with "/" (use "/" for the homepage). */
  path: string;
}

interface SeoHeadOptions {
  title: string;
  description: string;
  /** Path of this page, starting with "/". Defaults to "/". */
  path?: string;
  /** Open Graph type, e.g. "website" or "article". */
  ogType?: string;
  /** Absolute https:// URL of the share image (1200x630 recommended). */
  ogImage?: string;
  /** Breadcrumb trail, ordered from the homepage down. */
  crumbs?: Crumb[];
  /** Additional JSON-LD schema objects for this page. */
  jsonLd?: Record<string, unknown>[];
}

export function absoluteUrl(path: string): string {
  return path === "/" ? `${SITE_URL}/` : `${SITE_URL}${path}`;
}

export function websiteSchema(): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: `${SITE_URL}/`,
    description:
      "Independent 6E Club guide hub: how the colour prediction game works, plus plain-English answers on login, registration, APK downloads and safe play.",
    inLanguage: "en-IN",
    audience: { "@type": "PeopleAudience", recommendedMinAge: 18 },
  };
}

export function breadcrumbSchema(crumbs: Crumb[]): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((crumb, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: crumb.name,
      item: absoluteUrl(crumb.path),
    })),
  };
}

export function buildSeoHead({
  title,
  description,
  path = "/",
  ogType = "website",
  ogImage,
  crumbs,
  jsonLd = [],
}: SeoHeadOptions) {
  const url = absoluteUrl(path);
  const scripts: { type: string; children: string }[] = [websiteSchema()].concat(jsonLd).map(
    (schema) => ({
      type: "application/ld+json",
      children: JSON.stringify(schema),
    }),
  );

  if (crumbs && crumbs.length > 0) {
    scripts.push({
      type: "application/ld+json",
      children: JSON.stringify(breadcrumbSchema(crumbs)),
    });
  }

  const meta: Record<string, string>[] = [
    { title },
    { name: "description", content: description },
    { name: "robots", content: "index, follow, max-image-preview:large" },
    { name: "googlebot", content: "index, follow" },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:url", content: url },
    { property: "og:type", content: ogType },
    { property: "og:site_name", content: SITE_NAME },
    { property: "og:locale", content: "en_IN" },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },
  ];

  if (ogImage) {
    meta.push(
      { property: "og:image", content: ogImage },
      { name: "twitter:image", content: ogImage },
    );
  }

  return {
    meta,
    links: [{ rel: "canonical", href: url }],
    scripts,
  };
}
