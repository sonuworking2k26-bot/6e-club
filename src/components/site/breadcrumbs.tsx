import { ChevronRight } from "lucide-react";
import type { Crumb } from "@/lib/seo";

interface BreadcrumbsProps {
  crumbs: Crumb[];
}

/**
 * Visual breadcrumb trail for any 6E Club page. Pair it with the
 * BreadcrumbList JSON-LD that buildSeoHead() emits from the same crumbs.
 */
export function Breadcrumbs({ crumbs }: BreadcrumbsProps) {
  if (crumbs.length === 0) return null;

  return (
    <nav aria-label="Breadcrumb">
      <ol className="flex flex-wrap items-center gap-1.5 text-sm text-muted-foreground">
        {crumbs.map((crumb, index) => {
          const isLast = index === crumbs.length - 1;
          return (
            <li key={crumb.path} className="flex items-center gap-1.5">
              {index > 0 && (
                <ChevronRight className="h-3.5 w-3.5 text-muted-foreground/60" aria-hidden="true" />
              )}
              {isLast ? (
                <span aria-current="page" className="font-medium text-foreground">
                  {crumb.name}
                </span>
              ) : (
                <a href={crumb.path} className="transition-colors hover:text-foreground">
                  {crumb.name}
                </a>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
