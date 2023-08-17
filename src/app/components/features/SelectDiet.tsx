'use client';

import { UserScreeningType, dietDescriptions } from '@/tools/diet-rank/rank.utils';
import Image from 'next/image';
import Link from 'next/link';

interface SelectDietProps {
  diets: string[];
  user: UserScreeningType | undefined;
  bmr: number | undefined;
}

const SelectDiet = ({ user, diets, bmr }: SelectDietProps) => {
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
                <button className="transition-all border rounded-lg py-2 px-4 whitespace-nowrap border-metaSecondary bg-neutral-900 hover:border-metaAccent">
                  Select
                </button>
              </div>
            </div>
          ))}
          <p className="text-sm opacity-50 tracking-tighter">
            Disclaimer: The nutrition recommendations provided by Metabolite are intended for
            general informational purposes only and are not a substitute for professional medical
            advice, diagnosis, or treatment. Always seek the advice of a qualified healthcare
            provider or registered dietitian before making any significant changes to your diet,
            exercise routine, or lifestyle.
          </p>
        </div>
      </div>
    </section>
  );
};
export default SelectDiet;
