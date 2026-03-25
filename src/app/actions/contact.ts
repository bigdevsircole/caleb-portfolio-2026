'use server';

import nodemailer from 'nodemailer';

/**
 * Server Action to send a copy of the contact form message to Caleb's email.
 */
export async function sendContactEmailNotification(data: { name: string; email: string; message: string }) {
  const { name, email, message } = data;

  // IMPORTANT: You need to set the EMAIL_APP_PASSWORD environment variable in your deployment platform.
  // This uses your Gmail account (caleb.yinusa@gmail.com) as the sender.
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'caleb.yinusa@gmail.com',
      // Generate this at: https://myaccount.google.com/apppasswords
      pass: process.env.EMAIL_APP_PASSWORD,
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
    if (!process.env.EMAIL_APP_PASSWORD) {
      throw new Error('EMAIL_APP_PASSWORD not configured');
    }
    await transporter.sendMail(mailOptions);
    return { success: true };
  } catch (error: any) {
    console.error('Email error:', error.message);
    return { success: false, error: error.message || 'Failed to send email' };
  }
}
