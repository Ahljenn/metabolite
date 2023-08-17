'use client';

import { SessionProvider } from 'next-auth/react';

interface ReactProps {
  children: React.ReactNode;
}

const NextAuthProvider = ({ children }: ReactProps) => {
  return <SessionProvider>{children}</SessionProvider>;
};
export default NextAuthProvider;
