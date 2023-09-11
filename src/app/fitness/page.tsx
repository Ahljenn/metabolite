import HeroFitness from './HeroFitness';
import Image from 'next/image';

import { Metadata } from 'next';

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
      ></section>
    </>
  );
};

export default Fitness;
