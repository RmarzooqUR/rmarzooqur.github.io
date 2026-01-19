import { readdirSync, readFileSync } from "fs"
import matter from "gray-matter"
import { join } from "path"

export interface Post {
  slug: string
  title: string
  content: string
  date: string
  author: Author
}

interface Author {
  name: string
  picture: string
}

const postsDir = join(process.cwd(), '_posts')

export const getMappedPost = (slug: string) => {
  const urlSlug = slug.replace(/\.md$/, "")
  const file = readFileSync(join(postsDir, `${urlSlug}.md`), 'utf-8')
  const {content, data} = matter(file)

  return { ...data, content, slug: urlSlug } as Post
}

export const getAllPosts = () => {
  const postsFileSlug = readdirSync(postsDir)

  return postsFileSlug.map(slug => getMappedPost(slug))
}

export const getRecentPosts = (maxNum  = 5) => {
  const posts = getAllPosts()

  return posts.slice(0, maxNum)
}