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
    </>
  );
};
export default Nutrition;
