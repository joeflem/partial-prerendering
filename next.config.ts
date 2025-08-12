import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      new URL(
        "https://melvinnicholsonphotography.co.uk/wp-content/uploads/2019/04/0C5A4247-1-scaled.jpg"
      ),
    ],
  },
  experimental: {
    ppr: "incremental",
  },
};

export default nextConfig;
