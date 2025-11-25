import type { NextConfig } from "next";
import nextra from "nextra";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  turbopack: {
    resolveAlias: {
      'next-mdx-import-source-file': './mdx-components.tsx'
    }
  },
  transpilePackages: ['shiki']
};

const withNextra = nextra({
  contentDirBasePath: '/docs', // Or even nested e.g. `/docs/advanced`
})
export default withNextra(nextConfig);