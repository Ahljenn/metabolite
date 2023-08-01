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
      {pathname === '/' ? (
        <>
          <div
            className="w-full bg-center bg-cover"
            style={{
              backgroundImage: `url('/hero-bg2.jpeg')`,
            }}
          >
            <div className="flex max-w-screen-xl px-4 py-8 mx-auto flex-col sm:flex-row">
              <div className="col-span-6 hidden sm:block">
                <Lottie animationData={Health} loop={true} style={lottieStyle} />
              </div>
              <div className="mr-auto place-self-center">
                <h1 className="max-w-2xl mb-4 text-xl sm:text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-white m-5 sm:m-0">
                  The Comprehensive Health and Wellness Platform
                </h1>
                <p className="max-w-2xl mb-6 sm:mb-8 md:text-lg sm:text-xl text-white m-5 sm:m-0">
                  With personalized assessments and data-driven insights, we provide tailored
                  recommendations to help you reach your specific health goals.
                </p>
                <div className="flex flex-col sm:flex-row gap-5 justify-center sm:justify-start items-center">
                  <div>
                    <Link
                      href="/about"
                      className="mt-5 border-neutral-800 bg-neutral-900 hover:border-neutral-700 hover:bg-neutral-800 transition-all border rounded-lg py-2 px-4 whitespace-nowrap"
                    >
                      About
                    </Link>
                  </div>
                  <div>
                    <Link
                      href="/nutrition"
                      className="mt-5 border-green-300 bg-emerald-700/30 hover:border-green-200 hover:bg-emerald-600/30 transition-all border rounded-lg py-2 px-4 whitespace-nowrap"
                    >
                      Metabolite
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <section
            className={`flex flex-col items-center  justify-between 
        p-24`}
          >
            {children}
          </section>
        </>
      ) : (
        <>
          <Navbar currentRoute={pathname} />
          <section className={`flex min-h-screen flex-col items-center mt-10`}>{children}</section>
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
