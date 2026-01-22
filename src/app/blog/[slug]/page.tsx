import { getAllPosts, getMappedPost, Post } from "@/lib/posts";
import styles from './styles.module.css'
import { TITLE_FORMAT_SLICE } from "@/consts";


const BlogPage = async (props: Params) => {
  const params = await props.params
  const slug = params.slug
  const {default: Post, data} = await import (`@/../_posts/${slug}.mdx`)

  return <div className={`max-w-2xl mx-auto ${styles.markdown}`}>
    <Post />
  </div>
}

type Params = {
   params: Promise<{
     slug: string,
   }>
}


export async function generateStaticParams () {
  const posts = await getAllPosts()
  return posts.map(i => ({slug : i.slug}))      
}

export async function generateMetadata (props: Params) {
  const sl = await props.params
  const title = sl.slug

  return {
    title: title.slice(TITLE_FORMAT_SLICE)
  }
}


export const dynamicParams = false
export default BlogPage