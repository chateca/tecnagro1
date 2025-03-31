import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,

  images: {
    domains:['utfs.io'],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "utfs.io",
        pathname: "**",
      },
     
    ],
    minimumCacheTTL: 86400,
    
  },

};

export default nextConfig;
