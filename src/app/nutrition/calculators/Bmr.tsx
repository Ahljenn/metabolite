'use client';
import Radio, { RadioBasic } from '@/app/components/features/Radio';
import UnitConverter from '@/app/components/features/UnitConverter';
import { useState } from 'react';
import { genders } from '../screening/screening.utils';
import { calculateBmr } from '@/tools/diet-rank/rank.utils';

const Bmr = () => {
  const [gender, setGender] = useState<RadioBasic>({ name: 'None', desc: 'None' });
  const [height, setHeight] = useState<number | null>(null);
  const [weight, setWeight] = useState<number | null>(null);
  const [age, setAge] = useState<number | null>(null);

  const [converterView, setConverterView] = useState<boolean>(false);
  const [bmrValue, setBmrValue] = useState<string>('0,000');

  const disabledEval = !(
    gender.name !== 'None' &&
    height !== null &&
    weight !== null &&
    age !== null
  );

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
      <div className="flex justify-center flex-col sm:flex-row items-center gap-5">
        Need to convert units?
        <button
          className="transition-all border rounded-lg py-2 px-4 whitespace-nowrap border-neutral-900 bg-neutral-900 hover:border-metaAccent cursor-pointer"
          onClick={() => {
            setConverterView(true);
          }}
        >
          Unit Converter
        </button>
      </div>
      <UnitConverter modalView={converterView} setModalView={setConverterView} />

      <div className="w-full px-4 mb-10">
        <div className="mx-auto w-full max-w-md lg:max-w-xl">
          <Radio
            items={genders}
            setSelection={setGender}
            label={'Gender'}
            existingSelection={gender}
            isRow={true}
          />
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
                  let value = Number(e.target.valueAsNumber);
                  if (value <= 2000) setWeight(value);
                }}
                placeholder="Weight"
              />
            </div>
            <div className="w-full sm:w-1/2 px-5 sm:px-1">
              <label htmlFor="age">
                <div className="flex flex-row justify-between mb-2 items-baseline text-sm">
                  <p className="">Age</p>
                  <p className="text-gray-400">yrs</p>
                </div>
              </label>
              <input
                className="shadow appearance-none border w-full py-2 px-3 text-white text-opacity-50 border-neutral-800 rounded-lg bg-neutral-900 leading-tight focus:outline-none focus:shadow-outline"
                id="age"
                type="number"
                min={1}
                max={150}
                value={age != null ? age.toString() : ''}
                onChange={(e) => {
                  let value = Number(e.target.valueAsNumber);
                  if (value <= 150) setAge(value);
                }}
                placeholder="Age"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center gap-10">
        <button
          className={`transition-all border rounded-lg py-2 px-4 whitespace-nowrap border-metaPrimary bg-neutral-900 ${
            disabledEval ? 'hover:border-metaAccent cursor-not-allowed opacity-50' : ''
          }`}
          disabled={disabledEval}
          onClick={() =>
            setBmrValue(calculateBmr(weight, height, age, gender.name).toLocaleString())
          }
        >
          Calculate BMR
        </button>
        <span className={`${bmrValue === '0,000' ? 'opacity-50' : ''}`}>
          <p>
            Cal:
            <span className="border rounded-lg border-metaSecondary mx-2 px-2 py-1 font-semibold text-secondary">
              {bmrValue}
            </span>
          </p>
        </span>
      </div>
    </section>
  );
};

export default Bmr;
