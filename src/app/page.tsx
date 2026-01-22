import { RecentBlogs } from '@/components/Home/RecentBlogs';
import { Showcase } from '@/components/Home/Showcase';
import { SHOWCASE } from '@/consts';
import { getRecentPosts, Post } from '@/lib/posts';
import * as motion from 'motion/react-client'
import Link from 'next/link';

export default async function Home() {
  const recentPosts = await getRecentPosts()

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
      <Showcase showcase={SHOWCASE} />
      <RecentBlogs posts={recentPosts} />
      <div className="footer">
        <h1 className='text-4xl'>Contact Us</h1>
        <p>Fill form for services</p>
      </div>
    </div>
  );
}
