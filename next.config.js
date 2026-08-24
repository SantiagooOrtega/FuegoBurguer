/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "s3yuumiproduction.s3.us-east-2.amazonaws.com",
      },
      {
        protocol: "https",
        hostname: "www.agenciapi.co",
      },
    ],
  },
};

module.exports = nextConfig;
