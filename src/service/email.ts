import nodemailer from 'nodemailer';

export type EmailData = {
  from: string;
  subject: string;
  message: string;
};

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true, // true for 465, false for other ports
  auth: {
    user: process.env.AUTH_USER,
    pass: process.env.AUTH_PASS,
  },
});

export async function sendMail({ subject, from, message }: EmailData) {
  let mailData = {
    from, // sender address
    to: process.env.AUTH_USER, // list of receivers
    subject: subject, // Subject line
    html: `
    <h1>${subject}</h1>
    <p>${message}</p>
    <br/>
    <p>보낸사람: ${from}</p>
    `, // html body
  };

  return transporter.sendMail(mailData);
}
