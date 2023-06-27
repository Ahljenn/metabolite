import Link from 'next/link';
import Header from './components/ui/AppWrapper';
import { TopGradient } from './components/ui/TopGradient';
import Image from 'next/image';

const rootCardData: { header: string; desc: string; route: string }[] = [
  {
    header: 'Fitness',
    desc: 'Curate workouts that align perfectly with your goals, abilities, and preferences.',
    route: '/fitness',
  },
  {
    header: 'Nutrition',
    desc: 'Discover the power of nutrition and its impact on your overall well-being.',
    route: '/nutrition',
  },
  {
    header: 'User Guide',
    desc: 'Empower yourself with the knowledge and tools to make the most out of your experience.',
    route: '/user-guide',
  },
  {
    header: 'About',
    desc: 'Learn more about our commitment to empower you on your wellness journey.',
    route: '/about',
  },
];

export default function Home() {
  return (
    <>
      <TopGradient fromColor={'from-green-200'} toColor={'to-emerald-800'} />

      <Image
        // className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
        className="relative "
        src="/metabolite-full.png"
        alt="Metabolite logo"
        width={200}
        height={200}
        quality={100}
        priority
      />

      <div className="mt-20 mb-32 lg:mt-0 grid text-center lg:mb-0 lg:grid-cols-4 lg:text-left">
        {rootCardData.map(
          (card: { header: string; desc: string; route: string }, index: number) => {
            return (
              <Link
                key={index}
                href={card.route}
                className="group rounded-lg border border-transparent px-5 py-4 hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
                rel="noopener noreferrer"
              >
                <h2 className={`mb-3 text-2xl font-semibold`}>
                  {card.header}
                  <span className="inline-block transition-transform group-hover:translate-x-2 motion-reduce:transform-none">
                    -&gt;
                  </span>
                </h2>
                <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>{card.desc}</p>
              </Link>
            );
          }
        )}
      </div>
    </>
  );
}
