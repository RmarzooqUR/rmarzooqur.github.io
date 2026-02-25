import { HeroBanner } from '@/components/Home/HeroBanner';
import { RecentBlogs } from '@/components/Home/RecentBlogs';
import { Showcase } from '@/components/Home/Showcase';
import { SHOWCASE } from '@/consts';
import { getRecentPosts } from '@/lib/posts';

export default async function Home() {
  const recentPosts = await getRecentPosts()

  return (
    <>
      <HeroBanner />
      <Showcase showcase={SHOWCASE} />
      <RecentBlogs posts={recentPosts} />
      <div className="bg-[#CDE5D7] footer">
        <h1 className='text-4xl'>Contact Us</h1>
        <p>Fill form for services</p>
      </div>
    </>
  );
}
