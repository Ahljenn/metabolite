'use client';
import { useEffect, useState } from 'react';
import { useSession, signOut, signIn } from 'next-auth/react';
import { quote } from './my-metabolite.utils';
import Image from 'next/image';

const Results = () => {
  const { data: session, status } = useSession();
  const [data, setData] = useState<any>(null);
  const [isEffectRun, setIsEffectRun] = useState(false);

  useEffect(() => {
    if (!isEffectRun && session?.user?.email) {
      const headers = new Headers();
      headers.append('Content-Type', 'application/json');

      const userEmail = session.user.email; // Store the email in a variable
      if (userEmail) {
        headers.append('user-email', userEmail);
      }

      (async () => {
        const response = await fetch('/api/user_api', {
          method: 'GET',
          headers: headers,
        });

        const data = await response.json();

        if (data.message !== 'User data not found') {
          setData(Object.entries(data));
        }
        setIsEffectRun(true); // Set the flag to indicate that the effect has run
      })();
    }
  }, [session?.user?.email, isEffectRun]);

  // Replace with loading animation
  if (!isEffectRun) {
    return <>Loading...</>;
  }

  if (!data) {
    return (
      <div className="mt-5 mx-auto w-full max-w-md lg:max-w-xl flex flex-col items-center">
        <h1 className="text-4xl lg:text-6xl font-bold text-center mt-5">No results</h1>
        <p className="mt-5 text-center opacity-75 mx-10 w-3/4">
          Looks like you have no screening results! Let&apos;s navigate back to the nutrition page
          to get started.
        </p>
        <div className="mt-5 ">
          <a
            className="mt-5 border-neutral-800 bg-neutral-900 hover:border-neutral-700 hover:bg-neutral-800 transition-all border rounded-lg py-2 px-4 whitespace-nowrap"
            href="/nutrition"
            rel="noopener noreferrer"
          >
            Return to Nutrition
          </a>
        </div>
      </div>
    );
  } else {
    return (
      <div className="mt-5">
        <section className="flex justify-center">
          <div className="flex flex-col items-center lg:flex-row justify-between w-full gap-5 mt-10 max-w-5xl">
            <div className="w-1/2">
              <Image
                className="relative"
                src="/metabolite-m.png"
                alt="Metabolite logo"
                width={200}
                height={200}
                quality={100}
                priority
              />
            </div>

            <div className="w-1/2">
              <h2 className="whitespace-nowrap text-2xl lg:text-4xl font-bold text-center mt-5">
                Ignite Vitality.
              </h2>
              <p className="opacity-50 text-sm mt-2 text-center">{quote()}</p>
            </div>
          </div>
        </section>

        <div
          className={`w-full h-[8rem] bg-gradient-to-b from-black to-gray-700  opacity-30 -z-50`}
        />
        <div className="border w-full border-slate-700 border-y-[0.01px]" />

        <main></main>
      </div>
    );
  }
};

export default Results;
