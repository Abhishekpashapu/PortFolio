/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
  async redirects() {
    return [
      { source: "/about", destination: "/#about", permanent: false },
      { source: "/journey", destination: "/#journey", permanent: false },
      { source: "/skill", destination: "/#skills", permanent: false },
      { source: "/skills", destination: "/#skills", permanent: false },
      { source: "/projects", destination: "/#projects", permanent: false },
      { source: "/all-projects", destination: "/#projects", permanent: false },
      { source: "/domains", destination: "/#embedded", permanent: false },
      { source: "/specialties", destination: "/#embedded", permanent: false },
      { source: "/embedded", destination: "/#embedded", permanent: false },
      { source: "/iot", destination: "/#iot", permanent: false },
      { source: "/cyber", destination: "/#cybersecurity", permanent: false },
      { source: "/cybersecurity", destination: "/#cybersecurity", permanent: false },
      { source: "/education", destination: "/#education", permanent: false },
      { source: "/tools", destination: "/#education", permanent: false },
      { source: "/contact", destination: "/#contact", permanent: false },
      { source: "/home", destination: "/#top", permanent: false },
    ];
  },
};

module.exports = nextConfig;
