const CopyPlugin = require("copy-webpack-plugin");

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Remove standalone output for serverless
  experimental: {
    serverComponentsExternalPackages: ['@rdkit/rdkit']
  },
  // Optimize for serverless
  swcMinify: true,
  compress: true,
  webpack(config, { isServer }) {
    if (!isServer) {
      config.plugins.push(
        new CopyPlugin({
          patterns: [
            {
              from: "node_modules/@rdkit/rdkit/dist/RDKit_minimal.wasm",
              to: "static/chunks/",
            },
            {
              from: "node_modules/@rdkit/rdkit/dist/RDKit_minimal.wasm",
              to: "static/chunks/app/molecule-bank/",
            },
          ],
        }),
      );
    }

    if (!isServer) {
      config.resolve.fallback = {
        fs: false,
        path: false,
        os: false,
      };
    }

    return config;
  },
};

module.exports = nextConfig;
