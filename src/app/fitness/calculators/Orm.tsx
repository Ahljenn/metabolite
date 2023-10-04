'use client';
import { useState } from 'react';

const Orm = () => {
  const [weight, setWeight] = useState<number | null>(null);
  const [reps, setReps] = useState<number | null>(null);

  const disabledEval = !(weight !== null && reps !== null);

  return (
    <section>
      <div className="mt-10 py-8 flex flex-col sm:items-left gap-5 justify-center">
        <div>
          <h2 className="text-3xl font-bold">One Rep Max</h2>
        </div>
        <div className="lead-xl font-light opacity-75 max-w-4xl text-lg">
          One Rep Max (1RM) is a crucial metric in strength training. It represents the maximum
          weight you can lift for a single repetition of a given exercise. It&apos;s a valuable tool
          for designing effective workout routines and tracking progress over time.
        </div>
      </div>

      <div className="flex flex-col sm:flex-row items-center gap-5">
        <div className="w-full sm:w-1/2 px-5 sm:px-1">
          <label htmlFor="weight">
            <div className="flex flex-row justify-between mb-2 items-baseline text-sm">
              <p className="">Weight</p>
              <p className="text-gray-400">kg./lb.</p>
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
        <div className="w-full sm:w-1/2 px-5 sm:px-1">
          <label htmlFor="weight">
            <div className="flex flex-row justify-between mb-2 items-baseline text-sm">
              <p className="">Reps</p>
              <p className="text-gray-400">count</p>
            </div>
          </label>
          <input
            className="shadow appearance-none border w-full py-2 px-3 text-white text-opacity-50 border-neutral-800 rounded-lg bg-neutral-900 leading-tight focus:outline-none focus:shadow-outline"
            id="weight"
            type="number"
            min={1}
            max={400}
            value={reps != null ? reps.toString() : ''}
            onChange={(e) => {
              if (e.target.value === '') setReps(null);
              let value = Number(e.target.valueAsNumber);
              if (value <= 1000) setReps(value);
            }}
            placeholder="Reps"
          />
        </div>
        <div className="mt-5 flex justify-end flex-col sm:flex-row items-center gap-10">
          <button
            className={`transition-all border rounded-lg py-2 px-4 whitespace-nowrap border-metaPrimary bg-neutral-900 ${
              disabledEval ? 'hover:border-metaAccent cursor-not-allowed opacity-50' : ''
            }`}
            disabled={disabledEval}
            onClick={() => {
              if (weight && reps) {
                // setBmiValue(calculateBmi(weight, weight).toFixed(2));
              }
            }}
          >
            Calculate ORM
          </button>
        </div>
      </div>
    </section>
  );
};

export default Orm;
