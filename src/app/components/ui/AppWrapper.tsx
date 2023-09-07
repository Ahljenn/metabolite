'use client';
// import { SessionProvider } from 'next-auth/react';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import Navbar from './Navbar';
import ReduxProvider from '&/ReduxProvider';
import FadeWrapper from './FadeWrapper';
import Footer from './Footer';

interface AppWrapperProps {
  children: any;
}

const AppWrapper = ({ children }: AppWrapperProps) => {
  const pathname = usePathname();
  return (
    <ReduxProvider>
      <FadeWrapper>
        <div className="flex flex-col justify-between min-h-screen">
          <Navbar currentRoute={pathname} />
          <section className="mb-20">{children}</section>
          <Footer />
        </div>
      </FadeWrapper>
    </ReduxProvider>
  );
};
export default AppWrapper;
