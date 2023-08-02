import Image from 'next/image';
import { TopGradient } from '../components/ui/TopGradient';
import UnderConstruction from '../components/ui/UnderConstruction';

import { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Fitness',
};

export default function Fitness() {
  return (
    <section
      className={`flex flex-col items-center  justify-between 
    p-12`}
    >
      <TopGradient fromColor={'to-emerald-200'} toColor={'from-green-600'} />
      <UnderConstruction />
    </section>
  );
}
