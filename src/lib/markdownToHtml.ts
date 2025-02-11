import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import rehypeStarryNight from "rehype-starry-night";
import rehypeStringify from "rehype-stringify";


export const markdownToHtml = async (content: string) => {
  const res = await unified()
    .use(remarkParse)
    .use(remarkRehype)
    .use(rehypeStarryNight)
    .use(rehypeStringify)
    .process(content)
  return res.toString();
}
