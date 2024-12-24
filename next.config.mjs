/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/index',
        destination: '/',
        permanent: true, // This makes it a 301 redirect
      },
      {
        source: '/PrivacyPolicy',
        destination: '/privacy-policy',
        permanent: true, // This makes it a 301 redirect
      },
      {
        source: '/TermsAndConditions',
        destination: '/terms-and-conditions',
        permanent: true, // This makes it a 301 redirect
      },
      {
        source: '/CookiesPolicy',
        destination: '/cookies-policy',
        permanent: true, // This makes it a 301 redirect
      },
    ];
  },
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
