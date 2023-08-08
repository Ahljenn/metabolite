'use client';
// import { SessionProvider } from 'next-auth/react';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import Navbar from './Navbar';
import ReduxProvider from '&/ReduxProvider';

const variants = {
  pageInitial: { opacity: 0 },
  pageAnimate: { opacity: 1 },
};

interface AppWrapperProps {
  children: any;
}

const AppWrapper = ({ children }: AppWrapperProps) => {
  const pathname = usePathname();
  return (
    <ReduxProvider>
      <motion.div
        key={pathname}
        initial="pageInitial"
        transition={{ duration: 0.5 }}
        animate="pageAnimate"
        variants={variants}
      >
        <Navbar currentRoute={pathname} />
        {children}
      </motion.div>
    </ReduxProvider>
  );
};
export default AppWrapper;
