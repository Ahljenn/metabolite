import UnderConstruction from '@/app/components/ui/UnderConstruction';
import { Metadata } from 'next';
import Orm from './Orm';
import Divider from '@/app/components/ui/Divider';
import Rpe from './Rpe';

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
      <Divider />
      <Rpe />
    </main>
  );
};

export default OneRepMax;
