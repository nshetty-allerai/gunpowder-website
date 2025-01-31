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
      {
        source: '/blog',
        destination: '/',
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
    domains: ['images.ctfassets.net'], 
  },
    env: {
        PUBLIC_KEY : 'wVXjRD64yAfQuxeOf',
        SERVICE_ID : 'service_9ejx517',
        TEMPLATE_ID : 'template_q2dbvif',

        SPACE_ID : 's010gsnc7awr',
        ACCESS_TOKEN : 'sCY0-iR5NfmLmJp_E9UqQ8EahTIeFUL8-8s1TKOXuiE'
      },
};

export default nextConfig;
