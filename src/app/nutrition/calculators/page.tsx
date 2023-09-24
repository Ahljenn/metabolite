import Bmi from './Bmi';
import Bmr from './Bmr';
import { Metadata } from 'next';
import BodyFat from './BodyFat';
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
      <Bmi />
      <BodyFat />
    </main>
  );
};

export default Calculators;
