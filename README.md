# Caleb Yinusa Portfolio - PixelForge Edition

A high-performance, modern digital architect portfolio built with Next.js, Framer Motion, and Firebase. This project features the signature **PixelForge** aesthetic: a deep charcoal environment paired with vibrant neon purple accents and high-tech syntax-inspired animations.

## 🚀 Key Features

- **PixelForge Aesthetic**: A custom-designed dark theme using HSL variables for consistent neon glow effects and deep contrast.
- **Dynamic Hero Section**: Includes a smooth typing animation highlighting core competencies and high-impact entrance motions.
- **Project Showcase**: A responsive grid featuring curated digital solutions with category tagging and external link integration.
- **Resource & Sales Hub**: Integrated sections for downloadable developer assets and premium training opportunities.
- **Firebase Integration**:
  - **Firestore**: Robust message handling for the contact form.
  - **App Hosting**: Configured for seamless deployment on Google's global infrastructure.
  - **Client-Side Initialization**: Optimized Firebase provider to ensure zero hydration mismatches.
- **Automated Notifications**: Serverless contact form integration using Nodemailer for instant inquiry alerts.
- **Performance Optimized**: Built with Next.js Server Components and Framer Motion's "Visible-First" animation patterns.

## 🛠 Tech Stack

- **Framework**: [Next.js 15+](https://nextjs.org/) (App Router)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Components**: [Shadcn UI](https://ui.shadcn.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **AI Backend**: [Genkit](https://firebase.google.com/docs/genkit)
- **Database/Auth**: [Firebase](https://firebase.google.com/)
- **Icons**: [Lucide React](https://lucide.dev/)

## 📂 Project Structure

- `src/app`: Core application routes, layouts, and Server Actions.
- `src/components`: Modular UI components and specialized page sections (Hero, Projects, Contact).
- `src/ai`: Genkit AI configuration and flow definitions.
- `src/firebase`: Centralized Firebase configuration, client providers, and custom hooks for Firestore/Auth.
- `src/lib`: Shared utilities, TypeScript types, and placeholder image data.
- `public`: Static assets including robots.txt and configuration files.

## 🛠 Development

### Getting Started

1.  **Install Dependencies**:
    ```bash
    npm install
    ```

2.  **Run Local Server**:
    ```bash
    npm run dev
    ```

3.  **Genkit UI**:
    To explore AI features and test Genkit flows:
    ```bash
    npm run genkit:dev
    ```

## 📄 License

&copy; 2025 Caleb Yinusa. All rights reserved. Built with passion for high-performance digital solutions.
