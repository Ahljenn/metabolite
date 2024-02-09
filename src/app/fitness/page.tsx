import HeroFitness from './HeroFitness';
import Image from 'next/image';

import { Metadata } from 'next';
import FitnessCards from './FitnessCards';

export const metadata: Metadata = {
  title: 'Fitness',
};

const Fitness = () => {
  return (
    <>
      <HeroFitness />
      <section
        className={`flex flex-col items-center  justify-between 
    p-12`}
      >
        <FitnessCards />
      </section>

      <section
        className={`flex flex-col items-center  justify-between 
    p-12`}
      >
        <h3 className="text-xl font-semibold">New Features</h3>
        <a
          href="https://strength-gpt.vercel.app/"
          className="p-5 mt-5 flex flex-col items-center rounded-lg md:flex-row md:max-w-4xl border border-neutral-800 bg-neutral-900 hover:border-metaSecondary transition-all mb-20 md:mb-10"
        >
          <Image
            className="bg-gray-800 object-cover w-full rounded-t-lg h-96 md:h-52 md:w-52 md:rounded-none md:rounded-l-lg"
            src="/bench.png"
            alt="calculate"
            width={500}
            height={500}
          />
          <div className="flex flex-col justify-between p-4 leading-normal">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              StrengthGPT
            </h5>
            <p className="mb-3 font-normal opacity-75">
              Access StrengthGPT - your personal AI Strength Coach.
            </p>
            <ul className="list-disc ml-5">
              <li>Tailored Workouts On Demand</li>
              <li>Weekly Fitness Plans Created</li>
              <li>WInstant Fitness Wisdom</li>
              <li>WExpert Health Guidance</li>
              <li>WRapid Response Time</li>
            </ul>
          </div>
        </a>
      </section>
    </>
  );
};

export default Fitness;
