import type { NextConfig } from "next";
import createMdx from "@next/mdx";
import rehypeHighlight from "rehype-highlight";

const withMdx = createMdx({
  extension: /\.(md|mdx)$/,
  options: {
    rehypePlugins: [rehypeHighlight],
  }
})

const nextConfig: NextConfig = {
  /* config options here */
  // output: "export",
  reactStrictMode: true,
  pageExtensions: ['md', 'mdx', 'tsx', 'ts', 'jsx', 'js'],
  async rewrites () {
    return [
      {
        source: '/ph/static/:path*',
        destination: `${process.env.NEXT_PUBLIC_STATIC_HOST}/static/:path*`
      },
      {
        source: '/ph/:path*',
        destination: `${process.env.NEXT_PUBLIC_POSTHOG_HOST}/:path*`
      }
    ]
  },
  skipTrailingSlashRedirect: true
};

export default withMdx(nextConfig);
