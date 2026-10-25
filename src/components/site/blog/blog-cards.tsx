import { Link } from "@tanstack/react-router";
import { ChevronLeft, ChevronRight, Clock } from "lucide-react";

const CATEGORY_STYLES: Record<string, string> = {
  "How it works": "border-primary/40 bg-primary/15 text-primary-foreground",
  Safety: "border-destructive/40 bg-destructive/15 text-destructive-foreground",
  "Responsible play": "border-gold/40 bg-gold/10 text-gold",
};

export function CategoryBadge({ category }: { category: string }) {
  return (
    <span
      className={`inline-block rounded-full border px-3 py-0.5 text-xs font-semibold ${
        CATEGORY_STYLES[category] ?? "border-border bg-secondary text-foreground"
      }`}
    >
      {category}
    </span>
  );
}

interface ArticleCardProps {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  publishedAt: string;
  readingMinutes: number;
}

export function ArticleCard({
  slug,
  title,
  excerpt,
  category,
  publishedAt,
  readingMinutes,
}: ArticleCardProps) {
  const date = new Date(`${publishedAt}T00:00:00Z`).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
    timeZone: "UTC",
  });

  return (
    <article className="flex flex-col rounded-2xl border border-border bg-card p-6 transition-colors hover:border-gold/40">
      <div className="flex items-center gap-3">
        <CategoryBadge category={category} />
        <span className="text-xs text-muted-foreground">{date}</span>
      </div>
      <h3 className="mt-4 font-display text-lg font-bold leading-snug">
        <Link to="/blog/$slug" params={{ slug }} className="transition-colors hover:text-gold">
          {title}
        </Link>
      </h3>
      <p className="mt-2.5 flex-1 text-sm leading-relaxed text-muted-foreground">{excerpt}</p>
      <p className="mt-4 flex items-center gap-1.5 text-xs text-muted-foreground">
        <Clock className="h-3.5 w-3.5 text-gold" aria-hidden="true" />
        {readingMinutes} min read
      </p>
    </article>
  );
}

interface BlogPaginationProps {
  page: number;
  pageCount: number;
  category: string;
}

/** Prev/next + numbered pagination as typed Links preserving the category. */
export function BlogPagination({ page, pageCount, category }: BlogPaginationProps) {
  if (pageCount <= 1) return null;

  const toSearch = (targetPage: number) => ({ category, page: targetPage });

  const pageLink = (targetPage: number, label: string, aria: string, enabled: boolean) => (
    <Link
      to="/blog"
      search={toSearch(targetPage)}
      aria-label={aria}
      disabled={!enabled}
      className={`inline-flex h-10 items-center justify-center rounded-lg border px-4 text-sm font-semibold transition-colors ${
        enabled
          ? "border-border bg-card text-foreground hover:border-gold/50 hover:bg-accent"
          : "pointer-events-none border-border bg-card/50 text-muted-foreground/50"
      }`}
    >
      {label}
    </Link>
  );

  return (
    <nav className="mt-10 flex items-center justify-center gap-2" aria-label="Blog pages">
      {pageLink(page - 1, <ChevronLeft className="h-4 w-4" aria-hidden="true" />, "Previous page", page > 1)}
      {Array.from({ length: pageCount }, (_, i) => i + 1).map((n) => (
        <Link
          key={n}
          to="/blog"
          search={toSearch(n)}
          aria-label={`Page ${n}`}
          aria-current={n === page ? "page" : undefined}
          className={`inline-flex h-10 w-10 items-center justify-center rounded-lg border text-sm font-semibold transition-colors ${
            n === page
              ? "border-gold/50 bg-gold/15 text-gold"
              : "border-border bg-card text-foreground hover:border-gold/50 hover:bg-accent"
          }`}
        >
          {n}
        </Link>
      ))}
      {pageLink(page + 1, <ChevronRight className="h-4 w-4" aria-hidden="true" />, "Next page", page < pageCount)}
    </nav>
  );
}

interface CategoryFilterProps {
  categories: string[];
  active: string;
  counts: Record<string, number>;
}

export function CategoryFilter({ categories, active, counts }: CategoryFilterProps) {
  const chip = (value: string, label: string, count: number) => {
    const isActive = active === value;
    return (
      <Link
        key={value}
        to="/blog"
        search={{ category: value, page: 1 }}
        className={`rounded-full border px-4 py-1.5 text-sm font-semibold transition-colors ${
          isActive
            ? "border-gold/50 bg-gold/15 text-gold"
            : "border-border bg-secondary text-foreground hover:border-gold/40 hover:bg-accent"
        }`}
        aria-current={isActive ? "true" : undefined}
      >
        {label} ({count})
      </Link>
    );
  };

  return (
    <div className="flex flex-wrap gap-2.5" role="group" aria-label="Filter articles by category">
      {chip("all", "All", counts.all)}
      {categories.map((category) => chip(category, category, counts[category] ?? 0))}
    </div>
  );
}
