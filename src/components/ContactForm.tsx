'use client';

import { sendContactEmail } from '@/service/contact';
import React, { useState } from 'react';
import Banner, { BannerData } from './Banner';

export type Form = {
  from: string;
  subject: string;
  message: string;
};

const DEFAULT_DATA = { from: '', subject: '', message: '' };
export default function ContactForm() {
  const [form, setForm] = useState<Form>(DEFAULT_DATA);
  const [banner, setBanner] = useState<BannerData | null>(null);
  const [loading, setLoading] = useState(false);

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;

    setForm((prev) => ({ ...prev, [id]: value }));
  };

  const onSubmit = (e: React.FormEvent<HTMLElement>) => {
    e.preventDefault();
    setLoading(true);
    sendContactEmail(form)
      .then((res) => {
        setBanner({ state: 'success', message: '메일을 성공적으로 보냈습니다.' });
        setForm(DEFAULT_DATA);
      })
      .catch((err) => {
        console.log(err);
        setBanner({ state: 'error', message: '메일 전송에 실패하였습니다.' });
      })
      .finally(() => {
        setLoading(false);
        setTimeout(() => {
          setBanner(null);
        }, 3000);
      });
  };

  return (
    <section className='w-full bg-slate-200 max-w-lg p-6'>
      {banner && <Banner banner={banner} />}
      <form className='w-full flex flex-col  gap-2'>
        <label htmlFor='from' className='font-bold'>
          Your Email
        </label>
        <input type='text' id='from' onChange={(e) => onChange(e)} value={form.from} className='p-2  font-medium' />
        <label htmlFor='subject' className='font-bold'>
          Subject
        </label>
        <input type='text' id='subject' onChange={(e) => onChange(e)} value={form.subject} className='p-2 font-medium' />
        <label htmlFor='message' className='font-bold'>
          Message
        </label>
        <textarea id='message' rows={10} onChange={(e) => onChange(e)} value={form.message} required className='resize-none p-2 font-medium'></textarea>
        <button className={`${loading ? 'bg-red-500' : 'bg-slate-600'}  py-2 mt-2 text-slate-100`} onClick={onSubmit}>
          {!loading && `Submit`}
          {loading && `메일 전송중...`}
        </button>
      </form>
    </section>
  );
}
