'use client';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { motion } from 'framer-motion';
import Navbar from './Navbar';

const variants = {
  pageInitial: { opacity: 0 },
  pageAnimate: { opacity: 1 },
};

interface AppWrapperProps {
  children: any;
}

export default function AppWrapper({ children }: AppWrapperProps) {
  const pathname = usePathname();
  return (
    <motion.div
      key={pathname}
      initial="pageInitial"
      transition={{ duration: 1 }}
      animate="pageAnimate"
      variants={variants}
    >
      {pathname === '/' ? (
        <section
          className={`flex min-h-screen flex-col items-center  justify-between 
        p-24`}
        >
          <header className="z-10 w-full max-w-5xl items-center justify-between text-sm lg:flex">
            <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none hover:animate-pulse">
              <a
                className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
                href="https://github.com/Ahljenn/metabolite"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/github.png"
                  alt="Github Logo"
                  draggable="false"
                  className="dark:invert"
                  width={20}
                  height={20}
                  priority
                />
                Contribute
              </a>
            </div>
          </header>
          {children}
        </section>
      ) : (
        <>
          <Navbar currentRoute={pathname} />
          <section
            className={`flex min-h-screen flex-col items-center  
      p-24`}
          >
            {children}
          </section>
        </>
      )}
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
