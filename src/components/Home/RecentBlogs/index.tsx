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
    <div className="gap-2 grid-rows-[2 1fr 2fr] grid-cols-3 grid">
      {posts.map((p) => {
        return (
          <Link href={`/blog/${p.slug}`} className="grid grid-rows-subgrid row-span-2" target='_blank'>
            <div className="py-5 md:px-2 grid row-span-2 grid-rows-subgrid" key={p.slug}>
              <h1 className="text-2xl row-start-1">{
                `${/*p.title.length > TITLE_FORMAT_SLICE
                  ? p.title.slice(0, TITLE_FORMAT_SLICE) + '...'
                  :*/ p.title}`}
              </h1>
              <p className="row-start-2">{p.summary.slice(0, 250) + '...'}</p>
            </div>
          </Link>
        )
      })}
    </div>
  </div>
}