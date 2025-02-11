import { markdownToHtml } from "@/lib/markdownToHtml";
import { getMappedPost } from "@/lib/posts";
import styles from './styles.module.css'


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
export default BlogPage;
