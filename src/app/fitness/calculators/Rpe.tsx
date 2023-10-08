'use client';
import { useState } from 'react';

const rpeScale: { rpe: string; title: string; description: string }[] = [
  { rpe: '1', title: 'Minimal Effort', description: 'Barely any exertion required' },
  { rpe: '2-3', title: 'Warm-up', description: 'Very light, like a warm-up set' },
  { rpe: '4-5', title: 'Working Set', description: 'Noticeable effort, but manageable' },
  {
    rpe: '6-7',
    title: 'Moderate Effort',
    description: 'Moderate effort, starting to feel challenging',
  },
  {
    rpe: '8-9',
    title: 'Demanding Effort',
    description: 'Very challenging, close to maximum effort',
  },
  {
    rpe: '10',
    title: 'Maximum Effort',
    description: "Absolute maximum effort, can't do more reps",
  },
];

const Rpe = () => {
  const [load, setLoad] = useState<number | null>(null);
  const [reps, setReps] = useState<number | null>(null);
  const [rpe, setRpe] = useState<number | null>(null);
  const [estimate, setEstimate] = useState<number | null>(null);

  const disabledEval = !(load !== null && reps !== null && rpe !== null);

  const calculateRPE = () => {
    if (load && rpe && reps) {
      const onePlus0333Reps = 1 + 0.0333 * reps;
      const oneMinus0278RPE = 1.0278 - 0.0278 * rpe;
      const est = (load * onePlus0333Reps) / oneMinus0278RPE;
      setEstimate(Math.round(est));
    }
  };

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

        <div className="relative overflow-x-auto mt-10 rounded-lg">
          <div className="flex flex-col sm:flex-row sm:gap-5 sm:items-end">
            <p className="text-xl font-bold">How do I measure RPE?</p>
            <p className="lead-xl font-light opacity-75 max-w-2xl text-md">
              See below for a guideline:
            </p>
          </div>
          <table className="mt-5 w-full text-sm text-left  text-white">
            <thead className="bg-neutral-800 text-white">
              <tr>
                <th scope="col" className="px-6 py-3">
                  RPE
                </th>

                <th scope="col" className="px-6 py-3">
                  Intensity Level
                </th>
              </tr>
            </thead>
            <tbody>
              {rpeScale.map(
                (item: { rpe: string; title: string; description: string }, idx: number) => {
                  return (
                    <tr className=" border-b bg-neutral-900 border-neutral-800" key={idx}>
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-2xl  whitespace-nowrap text-white"
                      >
                        {item.rpe}
                      </th>
                      <td className="px-6 py-4">
                        <p className="font-medium">{item.title}</p>
                        <p className="opacity-75 italic">{item.description}.</p>
                      </td>
                    </tr>
                  );
                }
              )}
            </tbody>
          </table>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row items-center gap-5">
        <div className="w-full px-5 sm:px-1">
          <label htmlFor="load">
            <div className="flex flex-row justify-between mb-2 items-baseline text-sm">
              <p className="">Load</p>
              <p className="text-gray-400">kg./lb.</p>
            </div>
          </label>
          <input
            className="shadow appearance-none border w-full py-2 px-3 text-white text-opacity-50 border-neutral-800 rounded-lg bg-neutral-900 leading-tight focus:outline-none focus:shadow-outline"
            id="load"
            type="number"
            min={1}
            max={600}
            value={load != null ? load.toString() : ''}
            onChange={(e) => {
              if (e.target.value === '') setLoad(null);
              let value = Number(e.target.valueAsNumber);
              if (value <= 2000) setLoad(value);
            }}
            placeholder="Load"
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
        <span className={`${estimate === null ? 'opacity-50' : ''}`}>
          <p>
            Potential ORM at RPE-10
            <span className="border rounded-lg border-metaSecondary mx-2 px-2 py-1 font-semibold text-secondary">
              {estimate ?? '000'}
            </span>
          </p>
        </span>
        <button
          className={`transition-all border rounded-lg py-2 px-4 whitespace-nowrap border-metaPrimary bg-neutral-900 ${
            disabledEval ? 'hover:border-metaAccent cursor-not-allowed opacity-50' : ''
          }`}
          disabled={disabledEval}
          onClick={() => {
            if (load && reps && rpe) {
              calculateRPE();
            }
          }}
        >
          Calculate RPE
        </button>
      </div>
    </section>
  );
};

export default Rpe;
