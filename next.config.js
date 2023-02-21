/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env:{
    mysiteUrl:'www.ecommerce.com'
  },
  // basePath:'/test'
  images: {
    // remotePatterns: [
    //   {
    //     protocol: 'https',
    //     hostname: 'c8.alamy.com',
    //     port: '',
    //     pathname: '*',
    //   },
    // ],
    domains: ['i.dummyjson.com',"upload.wikimedia.org"],
  },
  
}

module.exports = nextConfig

