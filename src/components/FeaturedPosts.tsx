import { getFeaturedPosts } from '@/service/post';
import PostGrid from './PostGrid';

export default async function FeaturedPosts() {
  const featuredPost = await getFeaturedPosts();

  return (
    <section>
      <h1 className='text-2xl font-semibold mt-10 mb-4'>Featured Posts</h1>
      <PostGrid posts={featuredPost} />
    </section>
  );
}
