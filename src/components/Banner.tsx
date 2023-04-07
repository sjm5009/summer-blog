'use client';

export type BannerData = {
  state: 'success' | 'error';
  message: string;
};
export default function Banner({ banner: { state, message } }: { banner: BannerData }) {
  return (
    <div className='text-center'>
      <h1 className={`${state === 'success' ? `bg-green-300` : `bg-red-300`} p-1 mb-2`}>{`${state === 'success' ? '✅' : '🔥'} ${message}`}</h1>
    </div>
  );
}
