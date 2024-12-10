import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    env: {
        API_URL: process.env.NEXT_PUBLIC_API_URL,
        WEBSITE_URL: process.env.NEXT_PUBLIC_WEBSITE_URL,
        WEBSITE_ENV: process.env.NEXT_PUBLIC_ENV,
        NEXT_PUBLIC_RECAPTCHA_SITE_KEY: process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY,
        RECAPTCHA_SECRET_KEY: process.env.RECAPTCHA_SECRET_KEY
      },
};
console.log(process.env.RECAPTCHA_SECRET_KEY)

export default nextConfig;
