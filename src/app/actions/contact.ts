
'use server';

import nodemailer from 'nodemailer';

/**
 * Server Action to send a copy of the contact form message to Caleb's email.
 */
export async function sendContactEmailNotification(data: { name: string; email: string; message: string }) {
  const { name, email, message } = data;

  // IMPORTANT: You need to set these environment variables in your deployment platform
  // or a .env.local file for local development.
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'caleb.yinusa@gmail.com',
      // For Gmail, use an "App Password" (https://myaccount.google.com/apppasswords)
      // DO NOT use your regular password here.
      pass: process.env.EMAIL_APP_PASSWORD,
    },
  });

  const mailOptions = {
    from: `"Portfolio Contact Form" <caleb.yinusa@gmail.com>`,
    to: 'caleb.yinusa@gmail.com',
    replyTo: email,
    subject: `New Message from ${name} via Portfolio`,
    text: `
Name: ${name}
Email: ${email}

Message:
${message}
    `,
    html: `
      <div style="font-family: sans-serif; padding: 20px; color: #333;">
        <h2 style="color: #000;">New Portfolio Inquiry</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <hr style="border: 1px solid #eee;" />
        <p><strong>Message:</strong></p>
        <p style="white-space: pre-wrap;">${message}</p>
      </div>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return { success: true };
  } catch (error) {
    console.error('Error sending email:', error);
    return { success: false, error: 'Failed to send email notification' };
  }
}
