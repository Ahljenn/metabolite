'use client';
import Image from 'next/image';
import Link from 'next/link';
import { SessionProvider } from 'next-auth/react';
import { usePathname } from 'next/navigation';
import Lottie from 'lottie-react';
import Health from '#/health2.json';
import { motion } from 'framer-motion';
import Navbar from './Navbar';

const variants = {
  pageInitial: { opacity: 0 },
  pageAnimate: { opacity: 1 },
};

interface AppWrapperProps {
  children: any;
}

const lottieStyle = {
  height: 500,
};

export default function AppWrapper({ children }: AppWrapperProps) {
  const pathname = usePathname();
  return (
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
  );
}

function HomeIcon() {
  return (
    <Link href="/">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6 cursor-pointer hover:animate-pulse"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
        />
      </svg>
    </Link>
  );
}
