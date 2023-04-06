import { Post } from '@/service/post';
import Image from 'next/image';
import Link from 'next/link';
import { TfiAngleLeft, TfiAngleRight } from 'react-icons/tfi';

type Props = {
  post: Post;
  type: 'prev' | 'next';
};
const ICON_CLASS = 'text-4xl group-hover:text-5xl transition-all';
export default function AdjacentPostCard({ post: { title, description, path }, type }: Props) {
  return (
    <Link className='group relative w-full bg-black max-h-56' href={`/posts/${path}`}>
      <Image className='w-full opacity-40' src={`/images/posts/${path}.png`} alt={title} width={150} height={100} />
      <div className=' absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white flex w-full items-center px-8'>
        {type === 'prev' && <TfiAngleLeft className={`${ICON_CLASS}`} />}
        <div className='w-full text-center'>
          <h1 className='text-2xl font-bold'>{title}</h1>
          <span className='font-bold'>{description}</span>
        </div>
        {type === 'next' && <TfiAngleRight className={`${ICON_CLASS}`} />}
      </div>
    </Link>
  );
}
