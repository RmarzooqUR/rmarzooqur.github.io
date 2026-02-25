import { getAllPosts } from "@/lib/posts"
import { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: 'Blog'
}

const BlogList = async () => {
  const allPosts = await getAllPosts()

  return (
    <ul className="mt-10">
      {allPosts.map((i) => {
        return (
          <Link  key={i.slug} href={`blog/${i.slug}`}>
            <li className="mx-auto w-1/2">
              <h1 className="text-3xl mb-4">{i.title}</h1>
              <p className="font-thin text-sm">{i.date}</p>
              <hr />
            </li>
          </Link>
        )
      })}
    </ul>
  )
}

export default BlogList;