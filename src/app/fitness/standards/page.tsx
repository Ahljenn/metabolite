import UnderConstruction from '@/app/components/ui/UnderConstruction';
import { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Strength Standards',
};

const StrengthStandards = () => {
  return (
    <section
      className={`flex flex-col items-center  justify-between 
p-12`}
    >
      <UnderConstruction />
    </section>
  );
};

export default StrengthStandards;
