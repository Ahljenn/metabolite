'use client';
import { useState } from 'react';

const BodyFat = () => {
  const [weight, setWeight] = useState<number | ''>('');
  const [waist, setWaist] = useState<number | ''>('');
  const [neck, setNeck] = useState<number | ''>('');
  const [bodyFatResult, setBodyFatResult] = useState<number | null>(null);

  return (
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
  );
};

export default BodyFat;
