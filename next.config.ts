import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    env: {
        API_URL: process.env.NEXT_PUBLIC_API_URL,
        WEBSITE_URL: process.env.NEXT_PUBLIC_WEBSITE_URL,
      },
};

export default nextConfig;
