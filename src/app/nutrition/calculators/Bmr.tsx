'use client';
import { useState } from 'react';

interface bmrStateProps {
  age: number;
  gender: string;
  height: number[];
  weight: number;
}

const Bmr = () => {
  const [bmrMetrics, setBmrMetrics] = useState<bmrStateProps>({
    age: 0,
    gender: 'None',
    height: [0, 0],
    weight: 0,
  });

  return (
    <section>
      <div className="py-8 flex flex-col sm:items-left gap-5 justify-center">
        <div>
          <h2 className="text-3xl font-bold">Basal Metabolic Rate</h2>
        </div>
        <div className="lead-xl font-light opacity-75 max-w-4xl text-lg">
          Basal Metabolic Rate (BMR) is the <b>baseline</b> amount of energy, expressed in calories,
          that the body consumes while at complete rest to sustain fundamental bodily functions like
          breathing, circulation, and cell production.
        </div>
      </div>
    </section>
  );
};

export default Bmr;
