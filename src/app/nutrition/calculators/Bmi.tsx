'use client';
import { useState } from 'react';

const Bmi = () => {
  const [height, setHeight] = useState<number | null>(null);
  const [weight, setWeight] = useState<number | null>(null);
  const [bmiValue, setBmiValue] = useState<string>('00.0');

  const disabledEval = !(height !== null && weight !== null);

  const calculateBmi = (height: number | null, weight: number | null): number => {
    if (height && weight) return weight / ((height / 100) * (height / 100));
    return 0;
  };

  return (
    <section>
      <div className="py-8 flex flex-col sm:items-left gap-5 justify-center">
        <div>
          <h2 className="text-3xl font-bold">Body Mass Index</h2>
        </div>
        <div className="lead-xl font-light opacity-75 max-w-4xl text-lg">
          The numerical measurement derived from an individual&apos;s height and weight, providing
          an <b>estimation</b> of body fat and overall health status.
        </div>
      </div>

      <div className="flex flex-col sm:flex-row items-center gap-5">
        <div className="w-full sm:w-1/2 px-5 sm:px-1">
          <label htmlFor="height">
            <div className="flex flex-row justify-between mb-2 items-baseline text-sm">
              <p className="">Height</p>
              <p className="text-gray-400">cm.</p>
            </div>
          </label>
          <input
            className="shadow appearance-none border w-full py-2 px-3 text-white text-opacity-50 border-neutral-800 rounded-lg bg-neutral-900 leading-tight focus:outline-none focus:shadow-outline"
            id="height"
            type="number"
            min={1}
            max={400}
            value={height != null ? height.toString() : ''}
            onChange={(e) => {
              if (e.target.value === '') setHeight(null);
              let value = Number(e.target.valueAsNumber);
              if (value <= 1000) setHeight(value);
            }}
            placeholder="Height"
          />
        </div>

        <div className="w-full sm:w-1/2 px-5 sm:px-1">
          <label htmlFor="weight">
            <div className="flex flex-row justify-between mb-2 items-baseline text-sm">
              <p className="">Weight</p>
              <p className="text-gray-400">kg.</p>
            </div>
          </label>
          <input
            className="shadow appearance-none border w-full py-2 px-3 text-white text-opacity-50 border-neutral-800 rounded-lg bg-neutral-900 leading-tight focus:outline-none focus:shadow-outline"
            id="weight"
            type="number"
            min={1}
            max={600}
            value={weight != null ? weight.toString() : ''}
            onChange={(e) => {
              if (e.target.value === '') setWeight(null);
              let value = Number(e.target.valueAsNumber);
              if (value <= 2000) setWeight(value);
            }}
            placeholder="Weight"
          />
        </div>
        <div className="mt-5 flex justify-end flex-col sm:flex-row items-center gap-10">
          <button
            className={`transition-all border rounded-lg py-2 px-4 whitespace-nowrap border-metaPrimary bg-neutral-900 ${
              disabledEval ? 'hover:border-metaAccent cursor-not-allowed opacity-50' : ''
            }`}
            disabled={disabledEval}
            onClick={() => {
              if (height && weight) {
                setBmiValue(calculateBmi(height, weight).toFixed(2));
              }
            }}
          >
            Calculate BMI
          </button>
          <span className={`${bmiValue === '00.0' ? 'opacity-50' : ''}`}>
            <p>
              BMI:
              <span className="border rounded-lg border-metaSecondary mx-2 px-2 py-1 font-semibold text-secondary">
                {bmiValue}%
              </span>
            </p>
          </span>
        </div>
      </div>
    </section>
  );
};

export default Bmi;
