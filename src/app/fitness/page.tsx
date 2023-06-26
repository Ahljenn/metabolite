import Image from 'next/image';
import { TopGradient } from '../components/ui/TopGradient';
import Header from '../components/ui/Header';

export default function Fitness() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Header h1="Fitness" />

      <TopGradient fromColor={'to-emerald-200'} toColor={'from-green-600'} />

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
    </main>
  );
}
