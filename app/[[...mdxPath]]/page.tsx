import { generateStaticParamsFor, importPage } from "nextra/pages";
import type { FC } from "react";
import { useMDXComponents as getMDXComponents } from "../../mdx-components";
import { Metadata } from "next";

export const generateStaticParams = generateStaticParamsFor("mdxPath");

export async function generateMetadata(props: PageProps): Promise<Metadata> {
  const params = await props.params;
  const { metadata } = await importPage(params.mdxPath);
  return metadata;
}

type PageProps = Readonly<{
  params: Promise<{
    mdxPath: string[];
  }>;
}>;

//@ts-expect-error as MDXContent is a valid React Component
const Wrapper = getMDXComponents().wrapper;

const Page: FC<PageProps> = async (props) => {
  const params = await props.params;
  const result = await importPage(params.mdxPath);
  const { default: MDXContent, toc, metadata } = result;
  return (
    //@ts-expect-error as MDXContent is a valid React Component
    <Wrapper toc={toc} metadata={metadata}>
      <MDXContent {...props} params={params} />
    </Wrapper>
  );
};

export default Page;
