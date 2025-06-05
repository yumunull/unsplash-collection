import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
    images: {
        remotePatterns: [{
            protocol: "https",
            hostname: "images.unsplash.com",
            pathname: "/**"
        },{
            protocol: "https",
            hostname: "plus.unsplash.com",
            pathname: "/**"
        }]
    }
};

export default nextConfig;
