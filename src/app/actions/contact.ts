'use server';

import nodemailer from 'nodemailer';

/**
 * Server Action to send a copy of the contact form message to Caleb's email.
 * Includes improved error handling and connection verification.
 */
export async function sendContactEmailNotification(data: { name: string; email: string; message: string }) {
  const { name, email, message } = data;

  // Using the provided App Password for Gmail
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: 'caleb.yinusa@gmail.com',
      pass: 'gnge ppoz iyac rsqf',
    },
    // Adding timeout for better resilience in serverless environments
    connectionTimeout: 1000, 
    greetingTimeout: 1000,
    socketTimeout: 1000,
  });

  const mailOptions = {
    from: `"Portfolio System" <caleb.yinusa@gmail.com>`,
    to: 'caleb.yinusa@gmail.com',
    replyTo: email,
    subject: `🚀 New Project Inquiry from ${name}`,
    text: `
Name: ${name}
Email: ${email}

Message Summary:
${message}

---
Sent via Caleb Yinusa Portfolio Contact System
    `,
    html: `
      <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; padding: 40px; color: #1a1a1a; max-width: 600px; margin: auto; border: 1px solid #e1e1e1; border-radius: 16px; background-color: #ffffff;">
        <div style="text-align: center; margin-bottom: 30px;">
          <h2 style="color: #6d28d9; margin: 0; font-size: 24px; letter-spacing: -0.025em;">New Portfolio Inquiry</h2>
          <p style="color: #6b7280; font-size: 14px;">Incoming message from your digital showcase</p>
        </div>
        
        <div style="background: #f8fafc; padding: 25px; border-radius: 12px; margin-bottom: 25px;">
          <p style="margin: 0 0 10px 0;"><strong>Name:</strong> ${name}</p>
          <p style="margin: 0;"><strong>Email:</strong> <a href="mailto:${email}" style="color: #6d28d9; text-decoration: none;">${email}</a></p>
        </div>

        <div style="border-left: 4px solid #6d28d9; padding-left: 20px; margin: 25px 0;">
          <p style="font-style: italic; color: #374151; line-height: 1.6; font-size: 16px;">
            "${message}"
          </p>
        </div>

        <div style="border-top: 1px solid #f1f5f9; padding-top: 20px; text-align: center;">
          <p style="font-size: 12px; color: #94a3b8; margin: 0;">This inquiry was captured and synced with your Firebase database.</p>
        </div>
      </div>
    `,
  };

  try {
    // Verify connection before sending to catch auth issues early
    await transporter.verify();
    await transporter.sendMail(mailOptions);
    return { success: true };
  } catch (error: any) {
    console.error('Email Dispatch Error:', error.message);
    // Even if email fails, we return the error so the UI can inform the user
    return { success: false, error: 'The email notification service is temporarily unavailable, but your message has been saved to the database.' };
  }
}
