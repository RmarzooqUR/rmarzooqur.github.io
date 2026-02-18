import { readdirSync, readFileSync } from "fs"
import { join } from "path"

export interface Post {
  slug: string
  title: string
  content: string
  date: string
  author: Author
  summary: string
}

interface Author {
  name: string
  picture: string
}

const postsDir = join(process.cwd(), '_posts')

export const getMappedPost = async (slug: string) => {
  const urlSlug = slug.replace(/\.mdx$/, "")
  const {data} = await import (`@/../../_posts/${urlSlug}.mdx`)

  return { ...data, slug: urlSlug } as Post
}

export const getAllPosts = async () => {
  const postsFileSlug = readdirSync(postsDir)

  const allPosts =  await Promise.allSettled(postsFileSlug.map( async (slug) => {
    const data =  await getMappedPost(slug)
    return data
  }))

  return returnFulfilledPosts(allPosts)
}

export const getRecentPosts = async (maxNum  = 5) => {
  const postSlugs = readdirSync(postsDir)
  const recentPostsSlugs = postSlugs.slice(0, maxNum)
  const recentPosts = await Promise.allSettled(recentPostsSlugs.map(async (slug) => await getMappedPost(slug)))

  return returnFulfilledPosts(recentPosts)
}

const returnFulfilledPosts = (posts: PromiseSettledResult<Post>[]) => {
  const result = [] as Post[]

  posts.forEach(post => {
    if (post.status === 'fulfilled')
      result.unshift((post as PromiseFulfilledResult<Post>).value)
  });
  return result
}
