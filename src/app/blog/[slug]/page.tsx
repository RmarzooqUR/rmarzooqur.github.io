import { markdownToHtml } from "@/lib/markdownToHtml";
import { getAllPosts, getMappedPost } from "@/lib/posts";
import styles from './styles.module.css'
import { TITLE_FORMAT_SLICE } from "@/consts";


const BlogPage = async (props: Params) => {
  const params = await props.params
  const slug = params.slug
  const post = getMappedPost(slug)
  const content = await markdownToHtml(post.content)

  return (
    <div className={`max-w-2xl mx-auto ${styles.markdown}`}>
      <h1>{post.title}</h1>
      <hr />
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  )
}

type Params = {
   params: Promise<{
     slug: string,
   }>
}


export async function generateStaticParams () {
  const posts = getAllPosts()
  return posts.map(i => ({slug : i.slug}))
}

export async function generateMetadata (props: Params) {
  const sl = await props.params
  const title = sl.slug

  return {
    title: title.slice(TITLE_FORMAT_SLICE)
  }
}


export default BlogPage;
