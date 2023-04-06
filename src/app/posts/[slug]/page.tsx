import AdjacentPostCard from '@/components/AdjacentPostCard';
import PostContent from '@/components/PostContent';
import { getPostData } from '@/service/post';
import Image from 'next/image';

type Props = {
  params: {
    slug: string;
  };
};
export default async function PostDetailPage({ params: { slug } }: Props) {
  // 1. 전달된 slug에 해당하는 포스트 데이터를 읽어와서
  // 2. 데이터를 마크다운뷰어에 표기하면 됨
  const post = await getPostData(slug);
  const { path, title, prev, next } = post;

  return (
    <article className='rounded-t-2xl overflow-hidden'>
      <Image className='w-full h-1/5 max-h-[500px]' src={`/images/posts/${path}.png`} alt={title} width={500} height={200} />
      <PostContent post={post} />
      <section className='flex shadow-md'>
        {prev && <AdjacentPostCard post={prev} type={`prev`} />}
        {next && <AdjacentPostCard post={next} type={`next`} />}
      </section>
    </article>
  );
}
