const FitnessCards = () => {
  return (
    <>
      <h2 className="text-2xl font-semibold">Featured Strength Tools</h2>
      <p className="opacity-75 max-w-2xl mt-2 text-center">
        Explore the tools below, designed to empower you in crafting a workout plan that is uniquely
        yours. Each feature plays a crucial role in tailoring your fitness journey to your
        individual goals while also providing better insights to your progress.
      </p>
      <div className="mt-10 grid text-center lg:mb-0 sm:grid-cols-2 lg:grid-cols-4 lg:text-left gap-5 mx-10">
        {fitnessCardData.map(
          (
            card: {
              header: string;
              desc: string;
              info: string;
              route: string;
            },
            index: number
          ) => {
            return (
              <a
                href={card.route}
                key={index}
                className={`${
                  card.header === 'Diet' ? 'md:col-span-2' : ''
                } rounded-lg cursor-pointer border px-5 py-4 border-neutral-800 bg-neutral-900 hover:border-cyan-300 transition-all`}
                rel="noopener noreferrer"
              >
                <h2 className={`mb-3 text-xl font-semibold`}>{card.header}</h2>
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
    </>
  );
};

const fitnessCardData: {
  header: string;
  desc: string;
  info: string;
  route: string;
}[] = [
  {
    header: 'Fitness Calculators',
    desc: 'Access a variety of fitness calculators including One Rep Max (1RM) and Rate of Perceived Exertion (RPE). Fine-tune your workout routine for optimal performance.',
    info: 'Explore a range of calculators to enhance your fitness journey. From tracking your 1RM to gauging your training intensity with RPE, this is all you need to excel.',
    route: '/fitness/calculators',
  },
  {
    header: 'Workout Generator',
    desc: 'Access a dynamic workout generator that creates customized exercise routines tailored to your fitness goals and preferences targeting strength, hypertrophy, or endurance.',
    info: 'Specify your workout preferences, including target muscle groups, available equipment, and desired intensity. The generator will provide you with a detailed plan, complete with exercise selections, sets, reps, and rest intervals.',
    route: '/fitness/new-workout',
  },
  {
    header: 'Strength Level Standards',
    desc: 'Discover where you stand on the strength spectrum for various exercises. Gauge your performance against established strength level standards.',
    info: 'Input your lifting stats and get an instant assessment of your strength level. Compare your progress over time and set new goals.',
    route: '/fitness/standards',
  },
  {
    header: 'Fitness Rankings',
    desc: 'Get a comprehensive view of your overall strength across various lifts compared to the wider fitness community.',
    info: 'Explore leaderboards, track your performance, and get motivated by seeing how you measure up. Use this tool to set new goals and push your limits.',
    route: '/fitness/rankings',
  },
];

export default FitnessCards;
