import { getAllPosts, getMappedPost, Post } from "@/lib/posts";
import styles from './styles.module.css'
import { TITLE_FORMAT_SLICE } from "@/consts";
import { SocialShare } from "@/components/BlogPage/SocialShare";
import { PostMeta } from "@/models/post-meta";

const BlogPage = async (props: Params) => {
  const params = await props.params
  const slug = params.slug
  const { default: Post, data }: { default: any, data: PostMeta } =
    await import(`@/../_posts/${slug}.mdx`)

  return <div className="flex flex-col xl:flex-row my-20">
    <div className="social
      xl:order-1 order-3 
      xl:sticky xl:top-0 
      xl:h-screen xl:w-2/12 
      flex xl:justify-end justify-center">
      <div className="flex xl:flex-col justify-center">
        <SocialShare variant="HN" title={data.title} />
        <SocialShare variant="TWITTER" title={data.title} />
        {/* <SocialShare variant="LINKEDIN" title={data.title} /> */}
        <SocialShare variant="WHATSAPP" title={data.title} />
      </div>
    </div>
    <div className={`px-10 xl:w-8/12 scrollbar-none order-2 ${styles.markdown}`}>
      <div className="post"><Post /></div>
      {/* <div className="comments">
        <Script src="https://utteranc.es/client.js"
          repo="rmarzooqur/rmarzooqur.github.io"
          issue-term="pathname"
          label="blog-comment"
          theme="github-light"
          crossOrigin="anonymous"
          async>
        </Script>
      </div> */}
    </div>
    <div className="tags
      order-1 xl:order-3 
      xl:h-screen  xl:w-2/12 
      xl:sticky xl: top-0
      flex xl:flex-col flex-row justify-center">
      {data.categories.map(i => {
        return <p className="font-thin text-sm" key={i}>#{i}</p>
      })}
    </div>
  </div>
}

type Params = {
  params: Promise<{
    slug: string,
  }>
}


export async function generateStaticParams() {
  const posts = await getAllPosts()
  return posts.map(i => ({ slug: i.slug }))
}

export async function generateMetadata(props: Params) {
  const sl = await props.params
  const title = sl.slug

  return {
    title: title.slice(TITLE_FORMAT_SLICE)
  }
}


export const dynamicParams = false
export default BlogPage