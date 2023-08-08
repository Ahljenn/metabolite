import Image from 'next/image';

import UnderConstruction from '../components/ui/UnderConstruction';

import { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Fitness',
};

const Fitness = () => {
  return (
    <section
      className={`flex flex-col items-center  justify-between 
    p-12`}
    >
      <UnderConstruction />
    </section>
  );
};

export default Fitness;
