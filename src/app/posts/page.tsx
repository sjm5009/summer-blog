import FilterablePosts from '@/components/FilterablePosts';
import { getAllPosts } from '@/service/post';

export default async function PostsPage() {
  const posts = await getAllPosts();
  return (
    <>
      <FilterablePosts posts={posts} />
    </>
  );
}
