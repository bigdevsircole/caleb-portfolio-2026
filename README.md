# Caleb Yinusa Portfolio

A professional, high-performance frontend developer portfolio built with Next.js 15, Framer Motion, and Tailwind CSS. This project features a custom-designed dark theme with vibrant accents and a modular architecture.

## 🚀 Deployment

This project is optimized for modern cloud hosting platforms like **Vercel**, **Netlify**, or **Firebase App Hosting**.

To deploy your changes, simply push your code to your connected Git repository:

```bash
git add .
git commit -m "Update portfolio features"
git push
```

## 🛠 Features & Configuration

### 1. Contact Integration (WhatsApp)
The contact form is designed for high conversion by redirecting inquiries directly to WhatsApp. 
- **Configuration**: Update your WhatsApp number in `src/components/ContactForm.tsx` (line 21).
- **Behavior**: The form validates user input (Name, Email, Message) using Zod and React Hook Form, then generates a pre-filled WhatsApp message.

### 2. Project Media (Google Drive)
This portfolio uses Google Drive to host project thumbnails, providing a flexible and free CDN-like experience.
- **Utility**: The `getDirectDriveLink` function in `src/components/sections/ProjectSection.tsx` automatically converts standard Drive sharing links into high-performance direct image URLs.
- **Requirement**: Ensure your images on Google Drive are set to "Anyone with the link can view".

### 3. Modern Tech Stack
- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS & Lucide Icons
- **Components**: Shadcn UI (Radix UI)
- **Animations**: Framer Motion
- **Form Handling**: React Hook Form & Zod
- **Type Safety**: TypeScript

## 📂 Project Structure

- `src/app`: Next.js App Router pages and global styles.
- `src/components`: Reusable UI components and page sections.
- `src/hooks`: Custom React hooks (e.g., `use-toast`).
- `src/lib`: Utility functions and shared data.

## 📄 License

&copy; 2026 Caleb Yinusa. All rights reserved.
