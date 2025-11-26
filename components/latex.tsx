import katex from 'katex'

interface LatexProps {
  children: string;
  block?: boolean;
}

export function Latex({ children, block = false }: LatexProps) {
  const html = katex.renderToString(children, {
    throwOnError: false,
    displayMode: block,
    output: 'html',
  })

  return (
    <span
      dangerouslySetInnerHTML={{ __html: html }}
      // Kita gunakan 'span' tapi dengan class 'flex' dan 'w-full' agar tetap memanjang (block-like)
      className={block ? "flex justify-center overflow-x-auto w-full" : ""}
    />
  )
}