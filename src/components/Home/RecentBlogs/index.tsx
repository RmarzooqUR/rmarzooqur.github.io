import { TITLE_FORMAT_SLICE } from "@/consts"
import { Post } from "@/lib/posts"  // should be in a types dir!!
import Link from "next/link"

type Props = {
  posts: Post[]
}

export const RecentBlogs = ({ posts }: Props) => {
  return <div className=" p-5 recent-blogs h-auto flex items-center flex-col">
    {/* bg-[#FFB7C3] */}
    <h1 className='text-4xl'>From the blog</h1>
    <div className="flex justify-between flex-col md:flex-row col-auto  ">
      {posts.map((p) => {
        return (<div className="md:w-1/3 py-5 md:px-2" key={p.slug}>
          <Link href={`/blog/${p.slug}`} target='_blank'>
            <h1 className="text-2xl">{
              `${p.title.length > TITLE_FORMAT_SLICE
                ? p.title.slice(0, TITLE_FORMAT_SLICE) + '...'
                : p.title}`}
            </h1>
            <p >{p.summary.slice(0, 100) +'...'}</p>
          </Link>
        </div>)
      })}
    </div>
  </div>
}