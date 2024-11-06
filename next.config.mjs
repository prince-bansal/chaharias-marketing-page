/** @type {import('next').NextConfig} */

const domains = [
  "res.cloudinary.com",
  "youthincmag.com",
  "images.unsplash.com",
  "plus.unsplash.com",
  "preview.colorlib.com",
];

const nextConfig = {
  images: {
    remotePatterns: domains.map((domain) => {
      return {
        hostname: domain,
      };
    }),
  },
};

export default nextConfig;
