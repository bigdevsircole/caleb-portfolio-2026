'use server';

import nodemailer from 'nodemailer';

/**
 * Server Action to send a copy of the contact form message to Caleb's email.
 */
export async function sendContactEmailNotification(data: { name: string; email: string; message: string }) {
  const { name, email, message } = data;

  // Using the provided App Password: gnge ppoz iyac rsqf
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'caleb.yinusa@gmail.com',
      pass: 'gnge ppoz iyac rsqf',
    },
  });

  const mailOptions = {
    from: `"Portfolio Contact" <caleb.yinusa@gmail.com>`,
    to: 'caleb.yinusa@gmail.com',
    replyTo: email,
    subject: `New Inquiry from ${name}`,
    text: `
Name: ${name}
Email: ${email}

Message:
${message}
    `,
    html: `
      <div style="font-family: sans-serif; padding: 20px; color: #333; max-width: 600px; margin: auto; border: 1px solid #eee; border-radius: 10px;">
        <h2 style="color: #000; border-bottom: 2px solid #eee; padding-bottom: 10px;">New Portfolio Message</h2>
        <p style="margin: 20px 0;"><strong>From:</strong> ${name} (<a href="mailto:${email}">${email}</a>)</p>
        <div style="background: #f9f9f9; padding: 15px; border-radius: 5px; font-style: italic;">
          "${message}"
        </div>
        <p style="font-size: 12px; color: #999; margin-top: 30px;">This message was sent via your portfolio contact form.</p>
      </div>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return { success: true };
  } catch (error: any) {
    console.error('Email error:', error.message);
    return { success: false, error: error.message || 'Failed to send email' };
  }
}