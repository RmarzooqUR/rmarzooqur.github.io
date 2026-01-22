import { Post } from "@/lib/posts"  // should be in a types dir!!
import Link from "next/link"

type Props = {
  posts: Post[]
}

export const RecentBlogs = ({ posts }: Props) => {
  return <div className="recent-blogs">
    <h1 className='text-4xl'>From the blog</h1>
    <div className="blogList flex justify-between">
      {posts.map((p) => {
        return (<div key={p.slug}>
          <Link href={`/blog/${p.slug}`} target='_blank'>
            <h1>{p.title}</h1>
            <p>{p.summary}</p>
          </Link>
        </div>)
      })}
    </div>
  </div>
}