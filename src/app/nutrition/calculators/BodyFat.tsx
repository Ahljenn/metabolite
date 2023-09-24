'use client';
import { useState } from 'react';
import { genders } from '../screening/screening.utils';
import Radio, { RadioBasic } from '@/app/components/features/Radio';

const BodyFat = () => {
  const [gender, setGender] = useState<RadioBasic>({ name: 'None', desc: 'None' });
  const [weight, setWeight] = useState<number | null>(null);
  const [waist, setWaist] = useState<number | null>(null);
  const [neck, setNeck] = useState<number | null>(null);
  const [bodyFat, setBodyFat] = useState<string>('00.0');

  const disabledEval = !(weight !== null && neck !== null && waist !== null);

  const calculateBodyFat = (
    weight: number,
    waist: number,
    neck: number,
    gender: string
  ): number => {
    console.log(gender);
    let bodyFatP;
    if (gender === 'Male') {
      bodyFatP =
        495 / (1.0324 - 0.19077 * Math.log10(waist - neck) + 0.15456 * Math.log10(weight)) - 450;
    } else {
      bodyFatP =
        495 / (1.29579 - 0.35004 * Math.log10(waist + neck) + 0.221 * Math.log10(weight)) - 450;
    }
    if (Number.isNaN(bodyFatP)) {
      return 0;
    } else {
      return bodyFatP;
    }
  };

  return (
    <section>
      <div className="mt-10 py-8 flex flex-col sm:items-left gap-5 justify-center">
        <div>
          <h2 className="text-3xl font-bold">Body Fat</h2>
        </div>
        <div className="lead-xl font-light opacity-75 max-w-4xl text-lg">
          Body fat percentage represents the proportion of fat tissue in relation to total body
          weight, serving as a key indicator of overall fitness and health.
        </div>
      </div>

      <Radio
        items={genders}
        setSelection={setGender}
        label={'Gender'}
        existingSelection={gender}
        isRow={true}
      />

      <div className="mt-5 flex flex-col sm:flex-row items-center gap-5">
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
              let value = Number(e.target.valueAsNumber);
              if (value <= 2000) setWeight(value);
            }}
            placeholder="Weight"
          />
        </div>

        <div className="w-full sm:w-1/2 px-5 sm:px-1">
          <label htmlFor="Waist">
            <div className="flex flex-row justify-between mb-2 items-baseline text-sm">
              <p className="">Waist</p>
              <p className="text-gray-400">cm.</p>
            </div>
          </label>
          <input
            className="shadow appearance-none border w-full py-2 px-3 text-white text-opacity-50 border-neutral-800 rounded-lg bg-neutral-900 leading-tight focus:outline-none focus:shadow-outline"
            id="Waist"
            type="number"
            min={1}
            max={400}
            value={waist != null ? waist.toString() : ''}
            onChange={(e) => {
              let value = Number(e.target.valueAsNumber);
              if (value <= 1000) setWaist(value);
            }}
            placeholder="Waist"
          />
        </div>

        <div className="w-full sm:w-1/2 px-5 sm:px-1">
          <label htmlFor="neck">
            <div className="flex flex-row justify-between mb-2 items-baseline text-sm">
              <p className="">Neck</p>
              <p className="text-gray-400">cm.</p>
            </div>
          </label>
          <input
            className="shadow appearance-none border w-full py-2 px-3 text-white text-opacity-50 border-neutral-800 rounded-lg bg-neutral-900 leading-tight focus:outline-none focus:shadow-outline"
            id="neck"
            type="number"
            min={1}
            max={600}
            value={neck != null ? neck.toString() : ''}
            onChange={(e) => {
              let value = Number(e.target.valueAsNumber);
              if (value <= 2000) setNeck(value);
            }}
            placeholder="Neck"
          />
        </div>
      </div>

      <div className="mt-5 flex flex-col sm:flex-row justify-end items-center gap-10">
        <button
          className={`transition-all border rounded-lg py-2 px-4 whitespace-nowrap border-metaPrimary bg-neutral-900 ${
            disabledEval ? 'hover:border-metaAccent cursor-not-allowed opacity-50' : ''
          }`}
          disabled={disabledEval}
          onClick={() => {
            if (!disabledEval) {
              let fat = calculateBodyFat(weight, waist, neck, gender.name).toFixed(2);
              if (Number(fat) === 0) {
                setBodyFat('00.0');
              } else {
                setBodyFat(fat);
              }
            }
          }}
        >
          Calculate BMI
        </button>
        <span className={`${bodyFat === '00.0' ? 'opacity-50' : ''}`}>
          <p>
            Body Fat:
            <span className="border rounded-lg border-metaSecondary mx-2 px-2 py-1 font-semibold text-secondary">
              {bodyFat}%
            </span>
          </p>
        </span>
      </div>
    </section>
  );
};

export default BodyFat;
