import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <article className='flex flex-col text-center items-center text-slate-900'>
      <Image className='rounded-full' src={`/images/profile.jpg`} alt='Profile Picture' width={300} height={350} priority></Image>
      <h1 className='font-bold text-3xl mt-4 mb-2'>{"Hi, I'm Summer"}</h1>
      <h2 className='font-semibold text-lg'>Full-stack Engineer</h2>
      <p>Next js를 배우고 있는 사람, 드림코더 썸머</p>
      <Link href={`/contact`}>
        <button className='bg-emerald-100 p-1 rounded-md mt-2'>Contact Me</button>
      </Link>
    </article>
  );
}
