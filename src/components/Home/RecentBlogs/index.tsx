import { PostMeta } from "@/models/post-meta"
import Link from "next/link"

type Props = {
  posts: PostMeta[]
}

export const RecentBlogs = ({ posts }: Props) => {
  return <div className="p-5 recent-blogs h-auto flex items-center flex-col">
    {/* bg-[#FFB7C3] */}
    <h1 className='text-4xl p-5'>From the blog</h1>
    <div className="p-5 gap-8 md:gap-4 md:grid-cols-3 grid w-5/6">
      {posts.map((p) => {
        return (
          <Link key={p.slug} href={`/blog/${p.slug}`} className="border-2 border-transparent hover:border-red-400 hover:shadow-red-300 grid grid-rows-subgrid row-span-4 rounded shadow-xl" target='_blank'>
            <div className="grid grid-rows-subgrid row-start-1">
              <div className="h-36 md:h-48 bg-black"></div>
            </div>
            <div className="p-5 grid row-start-2 row-span-3 grid-rows-subgrid" key={p.slug}>
              <h1 className="text-2xl row-start-1">{
                `${/*p.title.length > TITLE_FORMAT_SLICE
                  ? p.title.slice(0, TITLE_FORMAT_SLICE) + '...'
                  :*/ p.title}`}
              </h1>
              <p className="row-start-2">{p.categories.map(i => `#${i}`).join(', ')}</p>
              <p className="row-start-3">{p.summary.slice(0, 250) + '...'}</p>
            </div>
          </Link>
        )
      })}

    </div>
    <Link href={'/blog'} className="p-5 hover:opacity-35">Read More...</Link>
  </div>
}