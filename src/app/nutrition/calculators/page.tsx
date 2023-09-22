import Bmi from './Bmi';
import Bmr from './Bmr';
import { Metadata } from 'next';
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

      <section>
        <div className="py-8 flex flex-col sm:items-left gap-5 justify-center">
          <div>
            <h2 className="text-3xl font-bold">Body Fat</h2>
          </div>
          <div className="lead-xl font-light opacity-75 max-w-4xl text-lg">
            Body fat percentage represents the proportion of fat tissue in relation to total body
            weight, serving as a key indicator of overall fitness and health.
          </div>
        </div>
      </section>
    </main>
  );
};

export default Calculators;
