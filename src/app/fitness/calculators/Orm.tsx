'use client';
import { useState } from 'react';

const ormPercents: { percent: number; rep: number }[] = [
  { percent: 100, rep: 1 },
  { percent: 95, rep: 2 },
  { percent: 90, rep: 4 },
  { percent: 85, rep: 6 },
  { percent: 80, rep: 8 },
  { percent: 75, rep: 10 },
  { percent: 70, rep: 12 },
  { percent: 65, rep: 16 },
  { percent: 60, rep: 20 },
  { percent: 55, rep: 24 },
  { percent: 50, rep: 30 },
];

const Orm = () => {
  const [weight, setWeight] = useState<number | null>(null);
  const [reps, setReps] = useState<number | null>(null);
  const [omrEstimation, setOmrEstimation] = useState<number | null>(null);
  const disabledEval = !(weight !== null && reps !== null);

  const onOmrCalculate = () => {
    // TODO: Will add support for other algorithms in the future
    // Jim Wendler:
    if (weight && reps) setOmrEstimation(Math.floor(weight * reps * 0.0333 + weight));
  };

  return (
    <section>
      <div className=" py-8 flex flex-col sm:items-left gap-5 justify-center">
        <div>
          <h2 className="text-3xl font-bold">One Rep Max</h2>
        </div>
        <div className="lead-xl font-light opacity-75 max-w-4xl text-lg">
          One Rep Max (1RM) is a crucial metric in strength training. It represents the maximum
          weight you can lift for a single repetition of a given exercise. It&apos;s a valuable tool
          for designing effective workout routines and tracking progress over time.
        </div>
        <a
          className="text-sm opacity-75 italic text-metaPrimary hover:text-metaAccent hover:underline"
          href="https://www.jimwendler.com/blogs/jimwendler-com/from-average-to-athlete"
          target="_blank"
        >
          Jim Wendler and the one rep max formula
        </a>
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
            max={3000}
            value={weight != null ? weight.toString() : ''}
            onChange={(e) => {
              if (e.target.value === '') setWeight(null);
              let value = Number(e.target.valueAsNumber);
              if (value <= 3000) setWeight(value);
            }}
            placeholder="Weight"
          />
        </div>
        <div className="w-full sm:w-1/2 px-5 sm:px-1">
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
        <div className="mt-5 flex justify-end flex-col sm:flex-row items-center gap-10">
          <button
            className={`transition-all border rounded-lg py-2 px-4 whitespace-nowrap border-metaPrimary bg-neutral-900 ${
              disabledEval ? 'hover:border-metaAccent cursor-not-allowed opacity-50' : ''
            }`}
            disabled={disabledEval}
            onClick={() => {
              if (weight && reps) {
                onOmrCalculate();
              }
            }}
          >
            Calculate ORM
          </button>
        </div>
      </div>

      <div className="relative overflow-x-auto mt-10 rounded-lg">
        <table className="block md:hidden w-full text-sm text-left  text-white">
          <thead className="bg-neutral-800 text-white">
            <tr>
              <th scope="col" className="px-6 py-3">
                Percent of Max
              </th>
              <th scope="col" className="px-6 py-3">
                Repetitions of Max
              </th>
              <th scope="col" className="px-6 py-3">
                Weight
              </th>
            </tr>
          </thead>
          <tbody>
            {ormPercents.map((item: { percent: number; rep: number }, idx: number) => {
              return (
                <tr className=" border-b bg-neutral-900 border-neutral-800" key={idx}>
                  <th scope="row" className="px-6 py-4 font-medium  whitespace-nowrap text-white">
                    {item.percent}%
                  </th>
                  <td className="px-6 py-4">{item.rep}</td>
                  <td className="px-6 py-4">
                    {omrEstimation === null
                      ? '-'
                      : Math.round(omrEstimation * (item.percent / 100))}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div className="relative overflow-x-auto mt-10 rounded-lg">
        <table className="hidden md:block w-full text-sm text-left text-white">
          <thead className="bg-neutral-800 text-white">
            <tr>
              <th scope="col" className="px-6 py-3">
                Weight
              </th>
              {ormPercents.map((item: { percent: number; rep: number }, idx: number) => {
                return (
                  <th scope="col" className="px-6 py-3" key={idx}>
                    {item.percent}%
                  </th>
                );
              })}
            </tr>
          </thead>
          <tbody>
            <tr className="border-b bg-neutral-900 border-neutral-800">
              <th scope="row" className="px-6 py-4 font-medium  whitespace-nowrap text-white">
                Repetitions of Max
              </th>
              {ormPercents.map((item: { percent: number; rep: number }, idx: number) => {
                return (
                  <td className="px-6 py-4" key={idx}>
                    {item.rep}
                  </td>
                );
              })}
            </tr>
            <tr className="border-b bg-neutral-900 border-neutral-800">
              <th scope="row" className="px-6 py-4 font-medium  whitespace-nowrap text-white">
                Weight
              </th>
              {ormPercents.map((item: { percent: number; rep: number }, idx: number) => {
                return (
                  <td className="px-6 py-4" key={idx}>
                    {omrEstimation === null
                      ? '-'
                      : Math.round(omrEstimation * (item.percent / 100))}
                  </td>
                );
              })}
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Orm;
