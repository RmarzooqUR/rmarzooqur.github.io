import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // output: "export",
  reactStrictMode: true,
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

export default nextConfig;
