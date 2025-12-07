/** @type {import('next').NextConfig} */
const nextConfig = {
    transpilePackages: ["clarityui"],
    output: "export",
    images: {
        unoptimized: true,
    },
};

module.exports = nextConfig;
