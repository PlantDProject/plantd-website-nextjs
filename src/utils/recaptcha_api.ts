// pages/api/contact.ts
import type { NextApiRequest, NextApiResponse } from 'next';

interface ContactRequest {
  message: string;
  captchaToken: string;
}

const SECRET_KEY = process.env.RECAPTCHA_SECRET_KEY as string;

const verifyCaptcha = async (token: string) => {
  const res = await fetch('https://www.google.com/recaptcha/api/siteverify', {
    method: 'POST',
    body: new URLSearchParams({
      secret: SECRET_KEY,
      response: token,
    }),
  });

  const data = await res.json();
  return data.success;
};

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const { message, captchaToken }: ContactRequest = req.body;

    // Verify the CAPTCHA token
    const isCaptchaValid = await verifyCaptcha(captchaToken);

    if (!isCaptchaValid) {
      return res.status(400).json({ error: 'reCAPTCHA verification failed.' });
    }

    // You can process the message, such as sending it via email or storing it in the database
    res.status(200).json({ success: 'Message sent successfully.' });
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
};

export default handler;
