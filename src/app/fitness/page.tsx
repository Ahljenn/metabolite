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
    </>
  );
};

export default Fitness;
