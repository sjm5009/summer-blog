'use client';

import { FunctionComponent } from 'react';
import { FunctionTypeNode } from 'typescript';

type Props = {
  categories: string[];
  selected: string;
  handleSelected: (category: string) => void;
};
export default function Categories({ categories, selected, handleSelected }: Props) {
  return (
    <section className='text-center pl-6'>
      <h2 className='text-lg font-bold border-b border-sky-600 mb-2'>Category</h2>
      <ul>
        {categories.map((category) => (
          <li
            className={`cursor-pointer hover:text-sky-500 ${selected === category ? 'text-sky-500' : ''}`}
            key={category}
            onClick={() => handleSelected(category)}
          >
            {category}
          </li>
        ))}
      </ul>
    </section>
  );
}
