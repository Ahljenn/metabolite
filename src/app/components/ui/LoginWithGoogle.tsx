import { signIn } from 'next-auth/react';

interface SessionProps {
  data: any;
  status: string;
}

export default function LoginWithGoogle({ data: session, status }: SessionProps) {
  function onSignIn() {
    signIn('google');
  }

  if (!session)
    return (
      <button
        className="border-green-300 bg-emerald-700/30 hover:border-green-200 hover:bg-emerald-600/30 transition-all border rounded-lg py-2 px-4 whitespace-nowrap"
        onClick={onSignIn}
      >
        Login with Google
      </button>
    );
}
