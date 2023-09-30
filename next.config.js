/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/reports/overview",
        permanent: true,
      },

      {
        source: "/reports",
        destination: "/reports/overview",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
