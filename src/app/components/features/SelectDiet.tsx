'use client';

import { UserScreeningType, dietDescriptions } from '@/tools/diet-rank/rank.utils';
import Image from 'next/image';
import Link from 'next/link';
import Disclaimer from './../ui/Disclaimer';
interface SelectDietProps {
  diets: string[];
  user: UserScreeningType | undefined;
  bmr: number | undefined;
}

const SelectDiet = ({ user, diets, bmr }: SelectDietProps) => {
  const callback = async (user: UserScreeningType, selection: string, bmrValue: number) => {
    let userCopy = user;
    userCopy.dietChoice = selection;
    userCopy.bmr = bmrValue;
    const response = await fetch('/api/user-api', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userCopy, null, 2),
    });
  };

  return (
    <section className="flex max-w-screen-xl px-4 py-8 mx-auto flex-col">
      <div className="flex justify-center mt-10 flex-col sm:flex-row gap-2 items-center">
        <div className="flex flex-col items-center">
          <Image
            className="grayscale"
            src="/eating.png"
            alt="Person eating food"
            width={2000}
            height={2000}
            quality={100}
            priority
          />
          <p className="text-center">
            Your Basal Metabolic Rate is: <b className="font-semibold text-metaAccent">{bmr}</b>
          </p>
          <p>
            Fasting procedure: <b className="font-semibold text-metaAccent">{user?.fast}</b>
          </p>
          <p>
            Health goal: <b className="font-semibold text-metaAccent">{user?.healthGoal}</b>
          </p>
        </div>
        <div className="sm:border-l-[0.01px] sm:border-slate-300 sm:px-5">
          <p className="text-center font-semibold mb-5">Select your journey</p>
          <p className="mb-5 text-center">
            Congratulations on completing the screening process! Now that we have a better
            understanding of your preferences and goals, it&apos;s time for you to embark on your
            personalized nutritional journey. Below are the diet options tailored to your needs:
          </p>
          {diets?.map((diet: string, index: number) => (
            <div className="mb-5 p-2" key={index}>
              <p className="font-bold text-metaAccent text-xl">
                {index + 1}. {diet}
              </p>
              <p>{dietDescriptions[diet]}</p>
              <div className="flex justify-between items-center">
                <Link className="italic text-metaSecondary cursor-pointer" href="#">
                  Learn more <b className="bold">&gt;</b>
                </Link>
                <button
                  className="transition-all border rounded-lg py-2 px-4 whitespace-nowrap border-metaSecondary bg-neutral-900 hover:border-metaAccent"
                  onClick={() => {
                    if (user && bmr) {
                      callback(user, diet, bmr);
                      window.location.href = '/nutrition/dashboard';
                    }
                  }}
                >
                  Select
                </button>
              </div>
            </div>
          ))}
          <p className="text-sm">
            Not satisfied with your results? Navigate{' '}
            <Link
              href="/nutrition"
              className="cursor-pointer font-bold text-metaPrimary opacity-75"
            >
              here
            </Link>{' '}
            or refresh to retry.
          </p>
          <Disclaimer />
        </div>
      </div>
    </section>
  );
};
export default SelectDiet;
