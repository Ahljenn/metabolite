'use client';
import fetchUserData from '../services/fetchUserData';
import { UserScreeningType } from '@/tools/diet-rank/rank.utils';
import { useEffect, useState } from 'react';
import { signIn, useSession } from 'next-auth/react';

const NutritionButtons = () => {
  const { data: session, status } = useSession();
  const [userData, setUserData] = useState<UserScreeningType>();
  const [isEffectRun, setIsEffectRun] = useState(false);

  useEffect(() => {
    if (!isEffectRun && session?.user?.email) {
      fetchUserData({
        userEmail: session?.user?.email || '', // Make sure to handle the case when userEmail is undefined
        setUserData,
        setIsEffectRun,
      });
    }
  }, [session?.user?.email, isEffectRun]);

  return (
    <div className="flex sm:gap-5 flex-col sm:flex-row">
      <a
        rel="noopener noreferrer"
        href=""
        className="mt-5 border-neutral-800 bg-neutral-900 hover:border-neutral-700 hover:bg-neutral-800 transition-all border rounded-lg py-2 px-4 whitespace-nowrap"
      >
        Learn More
      </a>

      {session ? (
        !isEffectRun ? (
          // User is logged in but is loading
          <p className="mt-5 transition-all border rounded-lg py-2 px-4 whitespace-nowrap max-w-sm animate-pulse cursor-not-allowed">
            Loading. . .
          </p>
        ) : !userData ? (
          // User is logged in but has no data
          <a
            rel="noopener noreferrer"
            href="/nutrition/screening"
            className="mt-5 transition-all border rounded-lg py-2 px-4 whitespace-nowrap border-metaSecondary bg-neutral-900 hover:border-metaAccent"
          >
            Get Started
          </a>
        ) : (
          // User is logged in and has data
          <a
            rel="noopener noreferrer"
            href="/nutrition/dashboard"
            className="mt-5 transition-all border rounded-lg py-2 px-4 whitespace-nowrap border-metaSecondary bg-neutral-900 hover:border-metaAccent"
          >
            Dashboard
          </a>
        )
      ) : (
        // User is not logged in
        <p
          onClick={() => signIn('google')}
          className="mt-5 transition-all border rounded-lg py-2 px-4 whitespace-nowrap border-metaSecondary bg-neutral-900 hover:border-metaAccent cursor-pointer"
        >
          Get Started
        </p>
      )}
    </div>
  );
};

export default NutritionButtons;
