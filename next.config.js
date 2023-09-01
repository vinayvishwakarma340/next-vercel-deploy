/** @type {import('next').NextConfig} */
let withWebPack = require("./webpack.config.js")
const ContentSecurityPolicy = `
  default-src 'self';
  
`;
const securityHeaders = [
  {
    key: "Content-Security-Policy",
    value: ContentSecurityPolicy.replace(/\s{2,}/g, " ").trim(),
  },
];
withWebPack = {
  //for opening job pages
  async rewrites() {
    return [
      {
        source: "/job-detail-:jobId/:companyName/:city/:positionTitle",
        destination: "/job-detail/:jobId/:companyName/:city/:positionTitle",
      },
      {
        source: "/job-detail-:jobId/:companyName/:city/:positionTitle/:extra",
        destination: "/job-detail/:jobId/:companyName/:city/:positionTitle",
      },
      {
        source: "/jobs-Openings-:companyId-New/:companyName",
        destination: "/jobs-Openings/:companyId-New/:companyName",
      },

      {
        source: "/job-openings/:keyword/:type",
        destination: "/:keyword/:type",
      },
    ];
  },
  env: {

    API_TOKEN_AUTH_CLIENT: "Token 77927b69bb144b065ca11bf2a9d452819cd852db",
    API_TOKEN_AUTH_SERVER: "Token 4YzpGk8Vf8IcxzxQ68teZ2KM5iX8SktW5RN4iz92",

    Live_API_URL: "https://api.timesascent.com",

  },
  /* async headers() {
    return [
      {
        // Apply these headers to all routes in your application.
        source: '/:path*',
        headers: securityHeaders,
      },
    ]
  }, */
  reactStrictMode: false,

  images: {

    domains: [
      "timesascent.com",
      "api.timesascent.com",
      "paperads.timesascent.com",
      "images.unsplash.com",
      "tailwindui.com",
      "www.rozgaarindia.com",
      "images.snaphunt.com",
      "cdn.cutshort.io",
      "cutshort-data.s3.amazonaws.com",
      "www.timesascent.com",
      "appointmentads.timesgroup.com",
      "logo.clearbit.com",
    ],
    unoptimized: true
  },
};

module.exports = withWebPack;
