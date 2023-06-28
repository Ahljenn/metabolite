import Image from 'next/image';
import { TopGradient } from '../components/ui/TopGradient';

const nutritionCardData: { header: string; desc: string; route: string }[] = [
  {
    header: 'Diet',
    desc: 'The specific food and drinks a person consumes regularly to meet their nutritional needs and achieve their health and fitness goals. The goal of a diet is often to achieve specific health and fitness objectives, such as weight management, muscle gain, improved athletic performance, or the prevention of chronic diseases. Different dietary approaches, such as vegetarian, vegan, Mediterranean, or low-carb diets, exist to cater to individual needs and preferences.',
    route: '#',
  },
  {
    header: 'Basal Metaboic Rate',
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
      <h1 className="text-4xl lg:text-6xl font-bold text-center mt-5">Metabolite Nutrition</h1>
      <TopGradient fromColor={'to-emerald-400'} toColor={'from-green-400'} />

      <div className="mt-20 grid text-center lg:mb-0 lg:grid-cols-3 lg:text-left gap-5">
        {nutritionCardData.map(
          (card: { header: string; desc: string; route: string }, index: number) => {
            return (
              <a
                key={index}
                href={card.route}
                className={`${
                  card.header === 'Diet' ? 'col-span-2' : ''
                } rounded-lg  border border-transparent px-5 py-4 border-neutral-800 bg-neutral-900 hover:border-neutral-700 hover:bg-neutral-800 transition-all`}
                rel="noopener noreferrer"
              >
                <h2 className={`mb-3 text-2xl font-semibold`}>{card.header}</h2>
                <p
                  className={`m-0 ${
                    card.header === 'Diet' ? 'max-w-[70ch]' : 'max-w-[30ch]'
                  } text-sm opacity-50`}
                >
                  {card.desc}
                </p>
              </a>
            );
          }
        )}
      </div>
    </>
  );
}
