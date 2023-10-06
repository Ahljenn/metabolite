'use client';
import { useState } from 'react';

const Rpe = () => {
  const [weight, setWeight] = useState<number | null>(null);
  const [reps, setReps] = useState<number | null>(null);
  const [rpe, setRpe] = useState<number | null>(null);

  const disabledEval = !(weight !== null && reps !== null && rpe !== null);

  return (
    <section>
      <div className=" py-8 flex flex-col sm:items-left gap-5 justify-center">
        <div>
          <h2 className="text-3xl font-bold">Rate of Perceived Exertion</h2>
        </div>
        <div className="lead-xl font-light opacity-75 max-w-4xl text-lg">
          (RPE) is a subjective scale used to measure the intensity of physical activity. It&apos;s
          commonly used in sports and exercise science to gauge how hard an individual feels they
          are working during exercise.
        </div>
      </div>

      <div className="flex flex-col sm:flex-row items-center gap-5">
        <div className="w-full px-5 sm:px-1">
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
        <div className="w-full px-5 sm:px-1">
          <label htmlFor="rpe">
            <div className="flex flex-row justify-between mb-2 items-baseline text-sm">
              <p className="">RPE</p>
              <p className="text-gray-400">1-10</p>
            </div>
          </label>
          <input
            className="shadow appearance-none border w-full py-2 px-3 text-white text-opacity-50 border-neutral-800 rounded-lg bg-neutral-900 leading-tight focus:outline-none focus:shadow-outline"
            id="rpe"
            type="number"
            min={1}
            max={10}
            value={rpe != null ? rpe.toString() : ''}
            onChange={(e) => {
              if (e.target.value === '') setRpe(null);
              let value = Number(e.target.valueAsNumber);
              if (value <= 10) setRpe(value);
            }}
            placeholder="RPE"
          />
        </div>
        <div className="w-full px-5 sm:px-1">
          <label htmlFor="reps">
            <div className="flex flex-row justify-between mb-2 items-baseline text-sm">
              <p className="">Reps</p>
              <p className="text-gray-400">count</p>
            </div>
          </label>
          <input
            className="shadow appearance-none border w-full py-2 px-3 text-white text-opacity-50 border-neutral-800 rounded-lg bg-neutral-900 leading-tight focus:outline-none focus:shadow-outline"
            id="reps"
            type="number"
            min={1}
            max={500}
            value={reps != null ? reps.toString() : ''}
            onChange={(e) => {
              if (e.target.value === '') setReps(null);
              let value = Number(e.target.valueAsNumber);
              if (value <= 500) setReps(value);
            }}
            placeholder="Reps"
          />
        </div>
      </div>
      <div className="mt-5 flex justify-end flex-col sm:flex-row items-center gap-10">
        <button
          className={`transition-all border rounded-lg py-2 px-4 whitespace-nowrap border-metaPrimary bg-neutral-900 ${
            disabledEval ? 'hover:border-metaAccent cursor-not-allowed opacity-50' : ''
          }`}
          disabled={disabledEval}
          onClick={() => {
            if (weight && reps && rpe) {
            }
          }}
        >
          Calculate ERPM
        </button>
      </div>
    </section>
  );
};

export default Rpe;
