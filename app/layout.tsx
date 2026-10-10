import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'CYBERFRAME | High-Retention Video Studio & Kinetic Motion Design',
  description: 'Editorial video post-production studio engineering viral motion, kinetic typography, and cinematic soundscapes for creators and startups.',
  keywords: ['Video Editing', 'Motion Graphics', 'Short-Form Reels', 'Cinematic Edits', 'CYBERFRAME', 'After Effects'],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Space+Grotesk:wght@500;700&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-black text-white antialiased selection:bg-white selection:text-black">
        {children}
      </body>
    </html>
  );
}
