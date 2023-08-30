import NutritionButtons from './NutritionButtons';
import NutritionCards from './NutritionCards';

import { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Nutrition',
};

const Nutrition: React.FC = (): JSX.Element => {
  return (
    <>
      <section
        className={`flex flex-col items-center justify-between 
    p-12`}
      >
        <h1 className="text-4xl lg:text-6xl font-bold text-center mt-5 bg-gradient-to-r from-metaPrimary via-metaSecondary to-metaAccent bg-clip-text text-transparent">
          Metabolite Nutrition
        </h1>
        <p className="mt-5 text-center opacity-75 max-w-xl">
          Empower yourself with the knowledge and guidance you need to make informed dietary choices
          and simplify your journey to optimal nutrition and embrace a healthier lifestyle.
        </p>
        <NutritionButtons />
        <NutritionCards />
      </section>

      {/* Divider */}

      <div
        className={`w-full h-[8rem] bg-gradient-to-b from-black to-gray-700  opacity-30 -z-50`}
      />
      <div className="border w-full border-slate-700 border-y-[0.01px]" />
      {/* New section */}
      <section
        className={`flex flex-col items-center justify-between 
    p-12`}
      >
        <p className="mt-5 text-center opacity-75 max-w-xl">Ignite Vitality.</p>
      </section>
    </>
  );
};
export default Nutrition;
