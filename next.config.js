/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      // {
      //   source: '/',
      //   destination: '/catalog',
      //   permanent: true
      // },
      {
        source: '/',
        destination: '/test',
        permanent: true
      }
    ]
  }
}

module.exports = nextConfig
