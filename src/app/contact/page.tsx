import ContactForm from '@/components/ContactForm';
import { AiFillYoutube } from 'react-icons/ai';
import { SiNaver, SiGmail } from 'react-icons/si';

export default function ContactPage() {
  return (
    <section className='flex flex-col items-center gap-3'>
      <h2 className='text-3xl font-bold'>Contact Me</h2>
      <p className='text-lg'>suhjm5009@dencomm.ai</p>
      <div className='flex gap-3 text-2xl items-center'>
        <a href='https://www.naver.com/' target='_blank' className='text-base'>
          <SiNaver />
        </a>
        <a href='https://www.youtube.com/' target='_blank'>
          <AiFillYoutube />
        </a>
        <a href='https://www.google.com/gmail/about/' target='_blank' className='text-xl'>
          <SiGmail />
        </a>
      </div>
      <h1>Or Send me an email</h1>
      <ContactForm />
    </section>
  );
}
