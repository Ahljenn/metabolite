import './globals.css';
import { Inter } from 'next/font/google';
import { Metadata } from 'next';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Metabolite',
  description:
    'Metabolite empowers you to take charge of your fitness and nutrition journey. Elevate your well-being, achieve your goals, and unlock a healthier, stronger you with',
  icons: {
    icon: '/metabolite-m.png',
    apple: '/metabolite-m.png',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
