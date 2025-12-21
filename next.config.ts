import type { NextConfig } from "next";
import nextra from "nextra";
import lightTheme from './public/syntax/light.json' assert { type: 'json' } // atau baca file manual
import darkTheme from './public/syntax/dark.json' assert { type: 'json' }

// List of shared courses that appear in multiple programs
const sharedCourses = ['kalkulus', 'dasar_pemrograman_python', 'logika_matematika'];

// Generate rewrites for all programs to map to shared content
const generateSharedCourseRewrites = () => {
  const programs = ['teknik_informatika', 'sistem_informasi'];
  const rewrites: { source: string; destination: string }[] = [];
  
  for (const program of programs) {
    for (const course of sharedCourses) {
      // Rewrite /docs/{program}/{course}/* to /docs/shared/{course}/*
      rewrites.push({
        source: `/docs/${program}/${course}/:path*`,
        destination: `/docs/shared/${course}/:path*`,
      });
      // Rewrite /docs/{program}/{course} to /docs/shared/{course}
      rewrites.push({
        source: `/docs/${program}/${course}`,
        destination: `/docs/shared/${course}`,
      });
    }
  }
  
  return rewrites;
};

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  turbopack: {
    resolveAlias: {
      'next-mdx-import-source-file': './mdx-components.tsx'
    }
  },
  transpilePackages: ['shiki'],
  async rewrites() {
    return generateSharedCourseRewrites();
  },
};

const withNextra = nextra({
  latex: {
    renderer: 'katex', // 'katex' | 'mathjax'}
    options: {}
  },
  mdxOptions: {
    rehypePrettyCodeOptions: {
      theme: {
        //@ts-expect-error // shiki theme type issue
        light: lightTheme,
        //@ts-expect-error // shiki theme type issue
        dark: darkTheme
      }
    }
  }
})
export default withNextra(nextConfig);
