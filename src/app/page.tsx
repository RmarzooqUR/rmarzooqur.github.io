import { SHOWCASE } from '@/consts';
import { getRecentPosts, Post } from '@/lib/posts';
import * as motion from 'motion/react-client'
import Link from 'next/link';

export default function Home() {
  const recentPosts = getRecentPosts()

  return (
    <div className='m-5'>
      <motion.div initial={{opacity: 0}} animate={{opacity: 1}}>
        <div className="mx-2">
          <p className="font-light">{">"}_ whoami</p>
        </div>
      </motion.div>
      <motion.div initial={{opacity: 0}} animate={{opacity: 1, animationDelay: '10'}}>
        <div className="flex h-72 items-center justify-center">
          <div>
            <p className="font-light">rmarzooqur</p>
            <p>Md Marzooq Ur Rahman</p>
            <p className="font-extralight">{">"}_ react dev</p>
          </div>
        </div>
      </motion.div>

        <hr />
        <div className="projects flex flex-col justify-center items-center">
          <h1 className='text-4xl'>Showcase</h1>
          <div className="showcaseList">
            {SHOWCASE.map(proj => {
              return <div key={proj.title}>
                  <h1>{proj.title}</h1>
                  <p>{proj.description}</p>
                  {proj.link && <Link href={proj.link}>{proj.title}</Link>}
                </div>
            })}
          </div>
        </div>
        <hr />
        <div className="recent-blogs">
          <h1 className='text-4xl'>From the blog</h1>
          <div className="blogList flex justify-between">
            {recentPosts.map((p) => {
              return (<div key={p.slug}>
                <Link href={`/blog/${p.slug}`} target='_blank'>
                  <h1>{p.title}</h1>
                  <p>{p.content.slice(0, 100)}</p>
                </Link>
              </div>)
            })}
          </div>
        </div>
        <div className="footer">
          <h1 className='text-4xl'>Contact Us</h1>
          <p>Fill form for services</p>
        </div>
    </div>
  );
}
