'use client';

import { Post, getAllPosts } from '@/service/post';
import { useState } from 'react';
import Categories from './Categories';
import PostGrid from './PostGrid';

type Props = {
  posts: Post[];
};
const ALL_POSTS = 'All Posts';
export default function FilterablePosts({ posts }: Props) {
  const [selected, setSelected] = useState(ALL_POSTS);
  const categories = [ALL_POSTS, ...new Set(posts.map((post) => post.category))];
  const filterd = selected === ALL_POSTS ? posts : posts.filter((post) => post.category === selected);

  const handleSelected = (category: string) => {
    setSelected(category);
  };

  return (
    <section className='flex m-4'>
      <PostGrid posts={filterd} />
      <Categories categories={categories} selected={selected} handleSelected={handleSelected} />
    </section>
  );
}
