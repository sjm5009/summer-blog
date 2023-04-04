import { getNonFeaturedPosts } from '@/service/post';
import PostCard from './PostCard';
import MultiCarousel from './MultiCarousel';

export default async function CarouselPost() {
  const posts = await getNonFeaturedPosts();

  return (
    <section>
      <h1 className='text-2xl font-semibold mt-10 mb-4'>Carousel Posts</h1>
      <MultiCarousel>
        {posts.map((post) => (
          <PostCard key={post.path} post={post} />
        ))}
      </MultiCarousel>
    </section>
  );
}
