/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'gunpowderinnovations.s3.eu-west-2.amazonaws.com',
        pathname: '/images/**',
      },
    ],
  },
    env: {
        PUBLIC_KEY : 'wVXjRD64yAfQuxeOf',
        SERVICE_ID : 'service_9ejx517',
        TEMPLATE_ID : 'template_q2dbvif'
      },
};

export default nextConfig;
