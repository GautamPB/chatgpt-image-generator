/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        appDir: true,
    },
    images: {
        domains: ['static.vecteezy.com'],
    },
}

module.exports = nextConfig
