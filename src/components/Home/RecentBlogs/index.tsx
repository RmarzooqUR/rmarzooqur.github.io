import { TITLE_FORMAT_SLICE } from "@/consts"
import { Post } from "@/lib/posts"  // should be in a types dir!!
import Link from "next/link"

type Props = {
  posts: Post[]
}

export const RecentBlogs = ({ posts }: Props) => {
  return <div className="bg-[#FFB7C3] p-5 recent-blogs h-auto flex items-center flex-col">
    <h1 className='m-2 text-4xl'>From the blog</h1>
    <div className="m-2 flex justify-between col-auto h-80 ">
      {posts.map((p) => {
        return (<div className="w-1/3 m-2" key={p.slug}>
          <Link href={`/blog/${p.slug}`} target='_blank'>
            <h1 className="text-3xl h-1/4">{
              `${p.title.length > TITLE_FORMAT_SLICE
                ? p.title.slice(0, TITLE_FORMAT_SLICE) + '...'
                : p.title}`}
            </h1>
            <p >{p.summary}</p>
          </Link>
        </div>)
      })}
    </div>
  </div>
}