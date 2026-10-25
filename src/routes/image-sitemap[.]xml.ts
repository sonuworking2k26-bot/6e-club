import { createFileRoute } from "@tanstack/react-router";
import xml from "../../public/image-sitemap.xml?raw";

export const Route = createFileRoute("/image-sitemap.xml")({
  server: {
    handlers: {
      GET: () =>
        new Response(xml, {
          status: 200,
          headers: {
            "content-type": "application/xml; charset=utf-8",
            "cache-control": "public, max-age=3600",
          },
        }),
    },
  },
});
