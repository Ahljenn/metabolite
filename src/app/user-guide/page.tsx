import Image from 'next/image';
import { TopGradient } from '../components/ui/TopGradient';
import UnderConstruction from '../components/ui/UnderConstruction';

import { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'User Guide',
};

export default function UserGuide() {
  return (
    <section
      className={`flex flex-col items-center  justify-between 
  p-24`}
    >
      <TopGradient fromColor={'to-emerald-600'} toColor={'from-lime-200'} />
      <UnderConstruction />
    </section>
  );
}
