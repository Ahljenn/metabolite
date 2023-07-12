import { signIn } from 'next-auth/react';
import Image from 'next/image';

interface SessionProps {
  data: any;
  status: string;
}

export function onSignIn() {
  signIn('google');
}

export default function LoginWithGoogle({ data: session, status }: SessionProps) {
  if (!session)
    return (
      <button
        className="hidden sm:block border-blue-300 bg-cyan-700/30 hover:border-blue-200 hover:bg-cyan-600/30 transition-all border rounded-lg py-2 px-4 whitespace-nowrap"
        onClick={onSignIn}
      >
        <span className="flex gap-3 items-center">
          <div>
            <Image
              src="/google-logo-icon.png"
              alt="Google Logo"
              width="18"
              height="18"
              className="invert"
            />
          </div>
          Login
        </span>
      </button>
    );
}
