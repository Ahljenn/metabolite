'use client';

import { SessionProvider } from 'next-auth/react';

interface ReactProps {
  children: React.ReactNode;
}

export default function NextAuthProvider({ children }: ReactProps) {
  return <SessionProvider> {children}</SessionProvider>;
}
