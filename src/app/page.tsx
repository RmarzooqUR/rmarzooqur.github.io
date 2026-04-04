import { HeroBanner } from '@/components/Home/HeroBanner';
import { RecentBlogs } from '@/components/Home/RecentBlogs';
import { Showcase } from '@/components/Home/Showcase';
import { TechStack } from '@/components/Home/TechStack';
import { SHOWCASE } from '@/consts';
import { getRecentPosts } from '@/lib/posts';

export default async function Home() {
  const recentPosts = await getRecentPosts(3)

  return (
    <>
      <HeroBanner />
      <TechStack />
      {/* Services - web, mobile with link to see works (showcase) */}
      <Showcase showcase={SHOWCASE} />
      <RecentBlogs posts={recentPosts} />
    </>
  );
}
