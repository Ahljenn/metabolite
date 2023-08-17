'use client';
// import { SessionProvider } from 'next-auth/react';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import Navbar from './Navbar';
import ReduxProvider from '&/ReduxProvider';
import FadeWrapper from './FadeWrapper';

interface AppWrapperProps {
  children: any;
}

const AppWrapper = ({ children }: AppWrapperProps) => {
  const pathname = usePathname();
  return (
    <ReduxProvider>
      <FadeWrapper>
        <Navbar currentRoute={pathname} />
        {children}
      </FadeWrapper>
    </ReduxProvider>
  );
};
export default AppWrapper;
