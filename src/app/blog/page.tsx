import { getAllPosts } from "@/lib/posts"
import { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: 'Blog'
}

const BlogList = async () => {
  const allPosts = await getAllPosts()

  return (
    <ul className="">
      {allPosts.map((i) => {
        return (
          <Link key={i.slug} href={`blog/${i.slug}`}>
            <li className="mx-auto my-2 w-5/6 md:w-1/2">
              <h1 className="text-3xl mb-4">{i.title}</h1>
              <p className="font-thin text-sm">{new Date(i.date).toDateString()}</p>
              <hr />
            </li>
          </Link>
        )
      })}
    </ul>
  )
}

export default BlogList;