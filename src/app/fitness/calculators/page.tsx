import UnderConstruction from '@/app/components/ui/UnderConstruction';
import { Metadata } from 'next';
import Orm from './Orm';
export const metadata: Metadata = {
  title: 'Calculators',
};

const OneRepMax = () => {
  return (
    <main
      className={`flex flex-col items-center  justify-between 
p-12`}
    >
      <Orm />
    </main>
  );
};

export default OneRepMax;
