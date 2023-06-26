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
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://github.com/Ahljenn/metabolite"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/github.png"
              alt="Github Logo"
              draggable="false"
              className="dark:invert"
              width={20}
              height={20}
              priority
            />
            Contribute
          </a>
        </div>
      </div>

      <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-br from-green-200 to-emerald-800 rounded-md filter blur-3xl opacity-30 -z-50" />

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
              <a
                key={index}
                href={card.route}
                className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h2 className={`mb-3 text-2xl font-semibold`}>
                  {card.header}
                  <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                    -&gt;
                  </span>
                </h2>
                <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>{card.desc}</p>
              </a>
            );
          }
        )}
      </div>
    </main>
  );
}
