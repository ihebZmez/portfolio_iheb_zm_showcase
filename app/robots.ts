import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/admin/", "/private/"],
        crawlDelay: 1,
      },
    ],
    sitemap: "https://portfolio-iheb-zm.vercel.app/sitemap.xml",
  };
}
