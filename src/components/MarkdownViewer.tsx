'use client'

import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { coldarkDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import Image from 'next/image';

export default function MarkdownViewer({ content }: { content: string }) {
  return <>
        <ReactMarkdown
        className='prose max-w-none'
        remarkPlugins={[remarkGfm]}
        components={{
          code({ node, inline, className, children, ...props }) {
            const match = /language-(\w+)/.exec(className || '');
            return !inline && match ? (
              <SyntaxHighlighter children={String(children).replace(/\n$/, '')} language={match[1]} PreTag='div' {...props} style={coldarkDark} />
            ) : (
              <code className={className} {...props}>
                {children}
              </code>
            );
          },
          img: (image) => (
            <Image
            className='w-full max-h-64'
              src={image.src || ''}
              alt={image.alt || ''}
              width={500}
              height={350}
            />
          ),
        }}
      >
        {content}
      </ReactMarkdown>
  </>;
}