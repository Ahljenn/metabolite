import UnderConstruction from '@/app/components/ui/UnderConstruction';
import { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Fitness Screening',
};

const FitnessScreening = () => {
  return (
    <section
      className={`flex flex-col items-center  justify-between 
p-12`}
    >
      <UnderConstruction />
    </section>
  );
};

export default FitnessScreening;
