import Bmi from './Bmi';
import Bmr from './Bmr';
import { Metadata } from 'next';
import BodyFat from './BodyFat';
import Divider from '@/app/components/ui/Divider';
export const metadata: Metadata = {
  title: 'Calculators',
};

const Calculators = () => {
  return (
    <main
      className={`flex flex-col items-center justify-between 
p-12`}
    >
      <Bmr />
      <Divider />
      <Bmi />
      <Divider />
      <BodyFat />
    </main>
  );
};

export default Calculators;
