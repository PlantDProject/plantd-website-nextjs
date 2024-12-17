import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    env: {
        API_URL: process.env.NEXT_PUBLIC_API_URL,
        WEBSITE_URL: process.env.NEXT_PUBLIC_WEBSITE_URL,
        WEBSITE_ENV: process.env.NEXT_PUBLIC_ENV
      },
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'plantd.life',
        },
        {
          protocol: 'https',
          hostname: 'qa.getplantd.com',
        },
      ],
    },
};

export default nextConfig;
