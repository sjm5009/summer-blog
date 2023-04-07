import { sendMail } from '@/service/email';

export async function POST(req: Request) {
  const body = await req.json();
  body.message = body.message.replaceAll('\n', '<br>');

  return await sendMail(body)
    .then(() => new Response(JSON.stringify({ message: '메일을 성공적으로 보냄' }), { status: 200 }))
    .catch((err) => {
      console.log(err);

      return new Response(JSON.stringify({ message: '메일 전송에 실패함' }), { status: 500 });
    });
}
