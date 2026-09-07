import { PostMeta } from "@/models/post-meta"
import { readdirSync } from "fs"
import { join } from "path"

export interface Post {
  slug: string
  title: string
  content: string
  date: string
  author: Author
  summary: string
  category: string[]
}

interface Author {
  name: string
  picture: string
}

const postsDir = join(process.cwd(), '_posts')

export const getMappedPost = async (slug: string) => {
  const urlSlug = slug.replace(/\.mdx$/, "")
  const { data } = await import(`@posts/${urlSlug}/index.mdx`)

  return { ...data, slug: urlSlug } as PostMeta
}

export const getAllPosts = async () => {
  const postsFileSlug = readdirSync(postsDir)

  const allPosts = await Promise.allSettled(postsFileSlug.map(async (slug) => {
    const data = await getMappedPost(slug)
    return data
  }))

  return returnFulfilledPosts(allPosts)
}

export const getRecentPosts = async (maxNum = 3) => {
  const postSlugs = readdirSync(postsDir)
  const draft = postSlugs.findIndex((i) => i === 'drafts')
  postSlugs.splice(draft, 1)
  const recentPostsSlugs = postSlugs.slice(0 - maxNum)
  const recentPosts = await Promise.allSettled(recentPostsSlugs.map(async (slug) => await getMappedPost(slug)))

  return returnFulfilledPosts(recentPosts)
}

const returnFulfilledPosts = (posts: PromiseSettledResult<PostMeta>[]) => {
  const result = [] as PostMeta[]

  posts.forEach(post => {
    if (post.status === 'fulfilled')
      result.unshift((post as PromiseFulfilledResult<PostMeta>).value)
  });
  return result
}
