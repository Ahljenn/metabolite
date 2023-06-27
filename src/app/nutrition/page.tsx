import Image from 'next/image';
import { TopGradient } from '../components/ui/TopGradient';

const nutritionCardData: { header: string; desc: string; route: string }[] = [
  // {
  //   header: 'Fitness',
  //   desc: 'Curate workouts that align perfectly with your goals, abilities, and preferences.',
  //   route: '/fitness',
  // },
  // {
  //   header: 'Nutrition',
  //   desc: 'Discover the power of nutrition and its impact on your overall well-being.',
  //   route: '/nutrition',
  // },
  // {
  //   header: 'User Guide',
  //   desc: 'Empower yourself with the knowledge and tools to make the most out of your experience.',
  //   route: '/user-guide',
  // },
  // {
  //   header: 'About',
  //   desc: 'Learn more about our commitment to empower you on your wellness journey.',
  //   route: '/about',
  // },
];

export default function Home() {
  return (
    <>
      <TopGradient fromColor={'to-emerald-400'} toColor={'from-green-400'} />

      {/* 
      <div className="mt-20 mb-32 lg:mt-0 grid text-center lg:mb-0 lg:grid-cols-4 lg:text-left">
        {nutritionCardData.map(
          (card: { header: string; desc: string; route: string }, index: number) => {
            return (
              <a
                key={index}
                href={card.route}
                className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
                rel="noopener noreferrer"
              >
                <h2 className={`mb-3 text-2xl font-semibold`}>
                  {card.header}
                  <span className="inline-block transition-transform group-hover:translate-x-2 motion-reduce:transform-none">
                    -&gt;
                  </span>
                </h2>
                <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>{card.desc}</p>
              </a>
            );
          }
        )}
      </div> */}
    </>
  );
}
