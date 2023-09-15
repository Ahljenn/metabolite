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
      <div
        className={`w-full h-[6rem] bg-gradient-to-b from-black to-gray-700  opacity-30 -z-50`}
      />
      <div className="border w-full border-slate-700 border-y-[0.01px]" />
      {/* New section */}
      <section className={`flex flex-col items-center justify-between p-12`}>
        <QuickFacts />
      </section>
    </>
  );
};
export default Nutrition;
