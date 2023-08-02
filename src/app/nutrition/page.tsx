import Image from 'next/image';
import { TopGradient } from '../components/ui/TopGradient';

import { Metadata } from 'next';
import Link from 'next/link';
export const metadata: Metadata = {
  title: 'Nutrition',
};

const nutritionCardData: { header: string; desc: string; route: string }[] = [
  {
    header: 'Diet',
    desc: 'The specific food and drinks a person consumes regularly to meet their nutritional needs and achieve their health and fitness goals. The goal of a diet is often to achieve specific health and fitness objectives, such as weight management, muscle gain, improved athletic performance, or the prevention of chronic diseases. Different dietary approaches, such as vegetarian, vegan, Mediterranean, or low-carb diets, exist to cater to individual needs and preferences.',
    route: '#',
  },
  {
    header: 'Basal Metabolic Rate',
    desc: 'Learn more about the amount of energy expended by your body at rest to maintain basic bodily functions such as breathing, circulation, and cell production.',
    route: '#',
  },
  {
    header: 'Nutrients',
    desc: 'The essential components of food that are vital for optimal fitness and health.',
    route: '#',
  },

  {
    header: 'Water',
    desc: 'A vital liquid essential for maintaining hydration, regulating body temperature, transporting nutrients, and eliminating waste from the body.',
    route: '#',
  },
  {
    header: 'Fasting',
    desc: 'Often practiced for various health and spiritual reasons, or as a strategy for weight management and metabolic health.',
    route: '#',
  },
];

export default function Nutrition() {
  return (
    <>
      <section
        className={`flex flex-col items-center justify-between 
    p-12`}
      >
        <h1 className="text-4xl lg:text-6xl font-bold text-center mt-5 bg-gradient-to-r from-green-600 via-emerald-200 to-lime-300 bg-clip-text text-transparent">
          Metabolite Nutrition
        </h1>
        <p className="mt-5 text-center opacity-75 max-w-xl">
          Empower yourself with the knowledge and guidance you need to make informed dietary choices
          and simplify your journey to optimal nutrition and embrace a healthier lifestyle.
        </p>

        <div className="flex sm:gap-5 flex-col sm:flex-row">
          <Link
            rel="noopener noreferrer"
            href=""
            className="mt-5 border-neutral-800 bg-neutral-900 hover:border-neutral-700 hover:bg-neutral-800 transition-all border rounded-lg py-2 px-4 whitespace-nowrap"
          >
            Learn More
          </Link>
          <Link
            rel="noopener noreferrer"
            href="/nutrition/screening"
            className="mt-5 border-green-300 bg-emerald-700/30 hover:border-green-200 hover:bg-emerald-600/30 transition-all border rounded-lg py-2 px-4 whitespace-nowrap"
          >
            Get Started
          </Link>
        </div>

        <div className="mt-20 grid text-center lg:mb-0 lg:grid-cols-3 lg:text-left gap-5 mx-10">
          {nutritionCardData.map(
            (card: { header: string; desc: string; route: string }, index: number) => {
              return (
                <a
                  key={index}
                  href={card.route}
                  className={`${
                    card.header === 'Diet' ? 'md:col-span-2' : ''
                  } rounded-lg  border px-5 py-4 border-neutral-800 bg-neutral-900 hover:border-neutral-700 hover:bg-neutral-800 transition-all`}
                  rel="noopener noreferrer"
                >
                  <h2 className={`mb-3 text-2xl font-semibold`}>{card.header}</h2>
                  <p
                    className={`m-0 ${
                      card.header === 'Diet' ? 'md:max-w-[70ch]' : 'md:max-w-[30ch]'
                    } text-sm opacity-50`}
                  >
                    {card.desc}
                  </p>
                </a>
              );
            }
          )}
        </div>
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
}
