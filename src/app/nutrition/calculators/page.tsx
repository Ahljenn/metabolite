import UnderConstruction from '@/app/components/ui/UnderConstruction';
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
      <section>
        <div className="py-8 flex flex-col sm:items-left gap-5 justify-center">
          <div>
            <h2 className="text-3xl font-bold">Basal Metabolic Rate</h2>
          </div>
          <div className="lead-xl font-light opacity-75 max-w-2xl text-lg">
            Basal Metabolic Rate (BMR) is the <b>baseline</b> amount of energy, expressed in
            calories, that the body consumes while at complete rest to sustain fundamental bodily
            functions like breathing, circulation, and cell production.
          </div>
        </div>
      </section>

      <section>
        {' '}
        <div className="py-8 flex flex-col sm:items-left gap-5 justify-center">
          <div>
            <h2 className="text-3xl font-bold">BMR Calculator</h2>
          </div>
          <div className="lead-xl font-light opacity-75 max-w-2xl text-lg">
            The numerical measurement derived from an individual&apos;s height and weight, providing
            an <b>estimation</b> of body fat and overall health status.
          </div>
        </div>
      </section>

      <section>
        <div className="py-8 flex flex-col sm:items-left gap-5 justify-center">
          <div>
            <h2 className="text-3xl font-bold">Body Fat Calculator</h2>
          </div>
          <div className="lead-xl font-light opacity-75 max-w-2xl text-lg">
            Body fat percentage represents the proportion of fat tissue in relation to total body
            weight, serving as a key indicator of overall fitness and health.
          </div>
        </div>
      </section>
    </main>
  );
};

export default Calculators;
