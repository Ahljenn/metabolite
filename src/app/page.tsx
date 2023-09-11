import Header from './components/ui/AppWrapper';
import HeroRoot from './HeroRoot';

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
  // {
  //   header: 'About',
  //   desc: 'Learn more about our commitment to empower you on your wellness journey.',
  //   route: '/about',
  // },
];

const Home: React.FC = (): JSX.Element => {
  return (
    <>
      <HeroRoot />
      <section
        className={`flex flex-col items-center  justify-between 
    p-12`}
      >
        <div className="flex flex-col lg:flex-row items-center">
          <div className="mb-10 lg:mt-0 grid text-center lg:mb-0 lg:grid-cols-4 lg:text-left">
            {rootCardData.map(
              (card: { header: string; desc: string; route: string }, index: number) => {
                return (
                  <a
                    key={index}
                    href={card.route}
                    className="group rounded-lg border border-transparent px-5 py-4 hover:border-neutral-700 hover:bg-neutral-800/50 mx-2 my-5 sm:my-0"
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
          </div>
          <div>
            {/* <p className="text-sm mb-2 text-gray-400 text-center">Powered by</p>
            <Image
              className="relative "
              src="/metabolite-full.png"
              alt="Metabolite logo"
              width={200}
              height={200}
              quality={100}
              priority
            /> */}
          </div>
        </div>
      </section>
    </>
  );
};
export default Home;
