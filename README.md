# Caleb Yinusa Portfolio - PixelForge Edition

A professional, high-performance digital architect portfolio built with Next.js, Framer Motion, and Firebase. This project features a custom-designed dark theme with vibrant accents and industry-standard architecture.

## 🚀 Deployment

This project is optimized for **Firebase App Hosting**. 

To deploy your changes, simply push your code to your connected Git repository:

```bash
git add .
git commit -m "Enhance backend stability"
git push
```

Firebase will automatically detect the push, build the Next.js application, and deploy it globally.

## 🛠 Backend Configuration Checklist

To ensure the contact form and projects work perfectly, follow these steps:

1. **Firestore Database**: 
   - Enable Firestore in your Firebase Console.
   - Create a collection named `messages`.
   - Ensure your security rules allow `create` operations for the `messages` collection.

2. **API Keys**:
   - Update `src/firebase/config.ts` with your actual Firebase project credentials.

3. **Email System**:
   - The contact form is configured to send notifications via Nodemailer using Gmail. 
   - If you change the recipient email, ensure you update the `transporter` settings in `src/app/actions/contact.ts`.

4. **Image Hosting**:
   - Project thumbnails use Google Drive. Ensure your images are set to "Anyone with the link can view" to allow the portfolio's direct link logic to function.

## 🛠 Tech Stack

- **Framework**: Next.js 15+ (App Router)
- **Styling**: Tailwind CSS
- **UI Components**: Shadcn UI
- **Animations**: Framer Motion
- **Database**: Firebase Firestore
- **Icons**: Lucide React

## 📄 License

&copy; 2025 Caleb Yinusa. All rights reserved.
