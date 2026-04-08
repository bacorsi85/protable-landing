import type { NextConfig } from "next";
const nextConfig: NextConfig = {
  output: "standalone",
  async rewrites() {
    const blogUrl = "https://protable-blog.vercel.app";
    return {
      beforeFiles: [
        // Blog static assets (CSS, fonts, images)
        { source: "/_astro/:path*", destination: `${blogUrl}/_astro/:path*` },
        { source: "/images/blog/:path*", destination: `${blogUrl}/images/blog/:path*` },
        // Blog pages
        { source: "/blog", destination: `${blogUrl}/blog` },
        { source: "/blog/:path*", destination: `${blogUrl}/blog/:path*` },
        // RSS & Sitemap from blog
        { source: "/rss.xml", destination: `${blogUrl}/rss.xml` },
        { source: "/sitemap-index.xml", destination: `${blogUrl}/sitemap-index.xml` },
        { source: "/sitemap-0.xml", destination: `${blogUrl}/sitemap-0.xml` },
      ],
    };
  },
};
export default nextConfig;
