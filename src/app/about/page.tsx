import Hero from '@/components/Hero';

const DIV_CLASS = 'mb-3';
const H1_CLASS = 'font-bold text-2xl';
export default function AboutPage() {
  return (
    <>
      <Hero />
      <section className='bg-pink-50 p-10 text-center mt-[30px] rounded-3xl'>
        <div className={DIV_CLASS}>
          <h1 className={H1_CLASS}>Who Am I?</h1>
          <p>업무시간에만 개발에 흥미를 느끼는 풀스택 개발자</p>
          <p>그래도 공부할 땐 재밌게 열심히 합니다.</p>
        </div>
        <div className={DIV_CLASS}>
          <h1 className={H1_CLASS}>Career</h1>
          <p>Dencomm (~ Now)</p>
          <p>ITkey (~ 2018)</p>
        </div>
        <div className={DIV_CLASS}>
          <h1 className={H1_CLASS}>Skills</h1>
          <p>React, Node</p>
          <p>Git</p>
          <p>VS Code, Eclipse, IntelliJ</p>
          <p>Oracle, Mysql, Firebase, MongoDB</p>
        </div>
      </section>
    </>
  );
}
