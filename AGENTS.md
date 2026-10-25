<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Project conventions

- All page SEO (title, description, OG/Twitter tags, canonical, WebSite + BreadcrumbList JSON-LD) goes through `src/lib/seo.ts` `buildSeoHead()` — never write ad-hoc head tags on a route. Site domain is `https://6e-club.org` (baked into canonical/og:url and `public/sitemap.xml`).
- Design tokens (dark-purple theme, violet primary, gold accent) live only in `src/styles.css`; the site is dark-only by design — no light/dark toggle.
- Footer and header headings use `h2` for nav group labels — keep heading hierarchy: one `h1` per page, sections `h2`, cards `h3`.
