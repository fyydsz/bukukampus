import { register } from 'node:module';
register('fumadocs-mdx/node/loader', import.meta.url);

const { source } = await import('../src/lib/source');
import { findNeighbour } from 'fumadocs-core/page-tree';
import { getBreadcrumbItems } from 'fumadocs-core/breadcrumb';

const rawPages = source.getPages();
const pageTree = source.getPageTree();

console.log("[LOG] PAGE TREE :", pageTree);

// // Get all pages with their full data including custom fields
// const pages = rawPages.map(page => ({
//   url: page.url,
//   name: page.data.title,
//   description: page.data.description,
//   fakultas: page.data.fakultas,
//   program_studi: page.data.program_studi,
// }));

// console.log("[LOG] PAGES :", pages);

// // Get Breadcrumb for an example from this page
// const breadcrumb = getBreadcrumbItems('/docs/fasilkom/mata-kuliah/dasar_pemrograman_python/install', pageTree);
// console.log("[LOG] BREADCRUMB /docs/fasilkom/mata-kuliah/dasar_pemrograman_python/install :", breadcrumb);

// // Get The next and previous pages
// const neighbours = findNeighbour(pageTree, '/docs/fasilkom/mata-kuliah/dasar_pemrograman_python/install');

// console.log("[LOG] NEIGHBOURS /docs/mata_kuliah/dasar_pemrograman_python/install :", neighbours);