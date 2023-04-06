'use client';
import { FcCalendar } from "react-icons/fc";
import { PostData } from '@/service/post';
import MarkdownViewer from "./MarkdownViewer";

export default function PostContent({post}: {post: PostData}) {
  const {title, description, date, content} = post
  return (
    <section className='w-full bg-neutral-200 px-6 py-4'>
      <div className='flex justify-end items-center text-sky-800'>
        <FcCalendar className='text-2xl mr-1'/>
        <time>{date.toString()}</time>
      </div>
      <h1 className='text-3xl font-semibold'>{title}</h1>
      <p className='text-lg font-semibold'>{description}</p>
      <div className='w-44 border-2 border-sky-600 mt-4 mb-8' />
      <MarkdownViewer content={content}/>
    </section>
  );
}
