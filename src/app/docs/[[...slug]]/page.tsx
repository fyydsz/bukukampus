import { getPageImage, source } from '@/lib/source';
import { DocsBody, DocsDescription, DocsPage, DocsTitle } from 'fumadocs-ui/layouts/docs/page';
import { notFound } from 'next/navigation';
import { getMDXComponents } from '@/mdx-components';
import type { Metadata } from 'next';
import { createRelativeLink } from 'fumadocs-ui/mdx';
import { findSiblings, Root } from 'fumadocs-core/page-tree';
import { Cards, Card } from 'fumadocs-ui/components/card';
import { Steps, Step } from 'fumadocs-ui/components/steps';
import { Github } from 'lucide-react';

export default async function Page(props: PageProps<'/docs/[[...slug]]'>) {
  const params = await props.params;
  const page = source.getPage(params.slug)
  if (!page) notFound();

  const programStudi = page.url.includes('/program-studi/') ? page.url.split('/').pop() : undefined;

  const { body: MDX, toc, } = process.env.NODE_ENV === 'development'
    //@ts-ignore Source depends on async loading of processed markdown in dev
    ? await page.data.load()
    //@ts-ignore Source depends on async loading of processed markdown in dev
    : { body: page.data.body, toc: page.data.toc };

  const modifiedToc = toc.filter((item: any) => item.depth <= 3).map((item: any) => {
    return item;
  });
  return (
    <DocsPage
      toc={modifiedToc}
      tableOfContent={{
        style: "clerk",
        single: false
      }}
      full={false}
      
    >
      <div className="mb-6">

        <DocsTitle>{page.data.title}</DocsTitle>
        <div className="h-2" />
        <div className="flex items-center gap-2">
          <a
            href={`https://github.com/fyydsz/bukukampus/tree/master/content/docs/${page.path}`}
            target="_blank" 
            rel="noreferrer noopener"
            className="inline-flex items-center gap-1.5 px-2 py-1 text-xs text-fd-muted-foreground hover:text-fd-foreground border border-fd-border rounded hover:bg-fd-muted/50 transition-colors"
          >
            <Github className="w-3 h-3" />
            Edit this page
          </a>
        </div>
      </div>
      <DocsBody>
        <MDX
          components={getMDXComponents({
            // this allows you to link to other pages with relative file paths
            a: createRelativeLink(source, page),
            DocsCategory: (props: any) => {
              return <DocsCategory {...props} url={props.url ?? page.url} />
            },
            ProgramStudyCourses: (props: any) => {
              return <ProgramStudyCourses {...props} programStudi={programStudi} />
            },
            Steps,
            Step,
          })}
        />
        <div className="h-[20dvh]"></div>
      </DocsBody>
    </DocsPage>
  );
}

/**
 * Generate static params for documentation pages.
 * @returns 
 */
export async function generateStaticParams() {
  return source.generateParams();
}

/**
 * Generate metadata for a documentation page.
 * @param props
 * @returns Metadata
 */
export async function generateMetadata(props: PageProps<'/docs/[[...slug]]'>): Promise<Metadata> {
  const params = await props.params;
  const page = source.getPage(params.slug);
  if (!page) notFound();

  return {
    title: page.data.title,
    description: page.data.description,
    openGraph: {
      images: getPageImage(page).url,
    },
  };
}

/**
 * ProgramStudyCourses component to display courses related to a specific program studi.
 * @param programStudi: string
 * @param className: string
 * @returns 
 */
function ProgramStudyCourses({ programStudi, className }: { programStudi?: string; className?: string }) {
  if (!programStudi) return null;

  const allPages = source.getPages();
  const relevantPages = allPages.filter(p => p.data.program_studi?.includes(programStudi) && p.url.split('/').length === 5);

  return (
    <Cards className={className}>
      {relevantPages.map(p => (
        <Card key={p.url} title={p.data.title} href={p.url}>
          {p.data.description}
        </Card>
      ))}
    </Cards>
  );
}

/**
 * DocsCategory component to display sibling pages as cards.
 * @param url: string
 * @returns 
 */
function DocsCategory({ url }: { url: string }) {
  return (
    <Cards>
      {findSiblings(source.getPageTree(), url).map((item) => {
        if (item.type === 'separator') return;
        if (item.type === 'folder') {
          if (!item.index) return;
          item = item.index;
        }

        return (
          <Card key={item.url} title={item.name} href={item.url}>
            {item.description}
          </Card>
        );
      })}
    </Cards>
  );
}