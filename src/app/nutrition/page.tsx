import HeroNutrition from './HeroNutrition';
import NutritionButtons from './NutritionButtons';
import NutritionCards from './NutritionCards';

import { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Nutrition',
};

const Nutrition: React.FC = (): JSX.Element => {
  return (
    <>
      <HeroNutrition />
      <section
        className={`flex flex-col items-center justify-between 
    p-12`}
      >
        {/* <NutritionButtons /> */}
        <NutritionCards />
      </section>

      {/* Divider */}

      <div
        className={`w-full h-[8rem] bg-gradient-to-b from-black to-gray-700  opacity-30 -z-50`}
      />
      <div className="border w-full border-slate-700 border-y-[0.01px]" />
      {/* New section */}
      {/* <section
        className={`flex flex-col items-center justify-between 
    p-12`}
      >
        <p className="mt-5 text-center opacity-75 max-w-xl">Ignite Vitality.</p>
      </section> */}
    </>
  );
};
export default Nutrition;
