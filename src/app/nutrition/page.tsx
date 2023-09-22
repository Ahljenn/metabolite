import HeroNutrition from './HeroNutrition';
import NutritionCards from './NutritionCards';
import QuickFacts from './QuickFacts';

import { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Nutrition',
};

const Nutrition: React.FC = (): JSX.Element => {
  return (
    <>
      <HeroNutrition />
      <section className={`flex flex-col items-center justify-between p-12`}>
        <NutritionCards />
      </section>

      {/* Divider */}

      <div className="mt-10 border w-full border-gray-700 border-y-[0.01px]" />

      {/* New section */}
      <section className={`mt-10 flex flex-col items-center justify-between p-12`}>
        <QuickFacts />
      </section>

      <p className="text-center text-sm opacity-75">
        (This web application is an iteration of the old system{' '}
        <a
          className="underline text-metaSecondary italic"
          href="https://metabolite-903ykfx3o-ahljenn.vercel.app/"
        >
          here.
        </a>
        )
      </p>
    </>
  );
};
export default Nutrition;
