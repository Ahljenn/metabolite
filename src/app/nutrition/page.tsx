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

        <div className="flex sm:gap-5 flex-col sm:flex-row">
          <a
            rel="noopener noreferrer"
            href=""
            className="mt-5 border-neutral-800 bg-neutral-900 hover:border-neutral-700 hover:bg-neutral-800 transition-all border rounded-lg py-2 px-4 whitespace-nowrap"
          >
            Learn More
          </a>
          <a
            rel="noopener noreferrer"
            href="/nutrition/screening"
            className="mt-5 transition-all border rounded-lg py-2 px-4 whitespace-nowrap border-metaSecondary bg-neutral-900 hover:border-metaAccent"
          >
            Get Started
          </a>
        </div>
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
