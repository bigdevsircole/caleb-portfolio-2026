import type { Metadata } from 'next';
import { Space_Grotesk, Cormorant_Garamond } from 'next/font/google';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import BackToTop from "@/components/BackToTop";
import Script from 'next/script';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
});

const cormorantGaramond = Cormorant_Garamond({
  subsets: ['latin'],
  variable: '--font-cormorant-garamond',
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  display: 'swap',
});

const siteUrl = 'https://calebportfolio2026.web.app';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Caleb Yinusa | Frontend Developer',
  description: 'Frontend Developer',
  icons: {
    icon: [
      {
        url: '/favicon-16x16.png',
        sizes: '16x16',
        type: 'image/png',
      },
    ],
  },
  keywords: [
    'Caleb Yinusa',
    'Frontend Developer',
    'UI Architect',
    'React Developer',
    'Next.js Engineer',
    'TypeScript Specialist',
    'Web Developer Portfolio',
    'Abuja Software Engineer',
    'Interactive Web Design'
  ],
  authors: [{ name: 'Caleb Yinusa', url: siteUrl }],
  creator: 'Caleb Yinusa',
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    title: 'Caleb Yinusa | Frontend Developer',
    description: 'Frontend Developer',
    siteName: 'Caleb Yinusa Portfolio',
    images: [
      {
        url: 'https://lh3.googleusercontent.com/d/1KV1aWxu5NMYZ2t_znz-jt25_zONN4KEN',
        width: 1200,
        height: 630,
        alt: 'Caleb Yinusa Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Caleb Yinusa | Frontend Developer',
    description: 'Frontend Developer',
    creator: '@calebyinusaa',
    images: ['https://lh3.googleusercontent.com/d/1KV1aWxu5NMYZ2t_znz-jt25_zONN4KEN'],
  },
  verification: {
    google: 'googlea2f61936a5381509',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const GA_MEASUREMENT_ID = 'G-EHH6B5V9MH';
  const GTAG_ID = 'AW-18037669008';

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Person',
        '@id': `${siteUrl}/#person`,
        name: 'Caleb Yinusa',
        url: siteUrl,
        image: 'https://lh3.googleusercontent.com/d/1KV1aWxu5NMYZ2t_znz-jt25_zONN4KEN',
        jobTitle: 'Frontend Developer',
        description: 'Frontend Developer',
        sameAs: [
          'https://x.com/calebyinusaa',
          'https://github.com/bigdevsircole',
          'https://www.linkedin.com/in/caleb-yinusa/',
        ],
        knowsAbout: [
          'Frontend Development',
          'User Interface Design',
          'React.js',
          'Next.js',
          'TypeScript',
          'Tailwind CSS',
          'Framer Motion',
          'Web Application Development',
          'JavaScript',
        ],
      },
      {
        '@type': 'WebSite',
        '@id': `${siteUrl}/#website`,
        url: siteUrl,
        name: 'Caleb Yinusa | Frontend Developer',
        description: 'Frontend Developer',
        publisher: {
          '@id': `${siteUrl}/#person`,
        },
      },
    ],
  };

  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${cormorantGaramond.variable} dark`} suppressHydrationWarning>
      <body 
        className="font-body antialiased bg-background text-foreground overflow-x-hidden"
        suppressHydrationWarning
      >
        {/* Schema.org Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', '${GA_MEASUREMENT_ID}');
            gtag('config', '${GTAG_ID}');
          `}
        </Script>

        {children}
        <BackToTop />
        <Toaster />
      </body>
    </html>
  );
}
