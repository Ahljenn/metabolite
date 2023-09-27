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
      <div className="mt-20 border w-full border-gray-700 border-y-[0.01px]" />
      <Bmi />
      <div className="mt-20 border w-full border-gray-700 border-y-[0.01px]" />
      <BodyFat />
    </main>
  );
};

export default Calculators;
