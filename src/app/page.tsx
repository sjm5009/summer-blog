import CarouselPost from '@/components/CarouselPost';
import FeaturedPosts from '@/components/FeaturedPosts';
import Hero from '@/components/Hero';

export default function HomePage() {
  return (
    <section className='mt-4'>
      <Hero />
      {/* @ts-expect-error Server Component */}
      <FeaturedPosts />
      {/* @ts-expect-error Server Component */}
      <CarouselPost />
    </section>
  );
}
