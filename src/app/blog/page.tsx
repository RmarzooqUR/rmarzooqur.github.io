import { getAllPosts } from "@/lib/posts"
import Link from "next/link"

const BlogList = () => {
  const allPosts = getAllPosts()

  return (
    <ul className="mx-auto">
      {allPosts.map((i) => {
        return (
          <Link  key={i.slug} href={`blog/${i.slug}`}>
            <li>{i.title}</li>
          </Link>
        )
      })}
    </ul>
  )
}

export default BlogList;