import './globals.css';
import { Inter } from 'next/font/google';
import { Metadata } from 'next';
import AppWrapper from './components/ui/AppWrapper';
import NextAuthProvider from './services/providers';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Metabolite',
  description:
    'Metabolite empowers you to take charge of your fitness and nutrition journey. Elevate your well-being, achieve your goals, and unlock a healthier, stronger you.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NextAuthProvider>
          <AppWrapper>{children}</AppWrapper>
        </NextAuthProvider>
      </body>
    </html>
  );
}
