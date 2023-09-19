'use client';
import UnitConverter from '@/app/components/features/UnitConverter';
import { useState } from 'react';

interface BmrType {
  label: string;
  value: string;
}

const genderChoices = ['male', 'female', 'other'];
const bmrTypes: BmrType[] = [
  { label: 'Mifflin St Jeor (Common)', value: 'mifflin' },
  { label: 'Revised Harris-Benedict', value: 'revised-hb' },
];

interface BmrData_T {
  age: number;
  gender: string;
  feet: number;
  inches: number;
  pounds: number;
  estimationFormula: string;
}

const toCm = (feet: number, inches: number): number => {
  return feet * 30.48 + inches * 2.54;
};

const toKg = (pound: number): number => {
  return pound / 2.2046;
};

const Calculate = (
  age: number,
  gender: string,
  feet: number,
  inches: number,
  pounds: number,
  estimationFormula: string
): string => {
  let val: string;
  switch (estimationFormula) {
    case 'mifflin':
      if (gender === 'male') {
        val = (10 * toKg(pounds) + (6.25 * toCm(feet, inches) - 5 * age) - 5).toFixed(1);
      } else {
        val = (10 * toKg(pounds) + (6.25 * toCm(feet, inches) - 5 * age) - 161).toFixed(1);
      }
      break;
    case 'revised-hb':
      if (gender === 'male') {
        val = (88.4 + (13.4 * toKg(pounds) + (4.8 * toCm(feet, inches) - 5.68 * age))).toFixed(1);
      } else {
        val = (447.6 + (9.25 * toKg(pounds) + (3.1 * toCm(feet, inches) - 4.33 * age))).toFixed(1);
      }
      break;
    case 'katch':
      return '0';
    default:
      return `(${(1799).toLocaleString()})`;
  }
  return `(${val.toLocaleString()})`;
};

interface bmrStateProps {
  age: number;
  gender: string;
  height: number[];
  weight: number;
  unit: string;
}

const Bmr = () => {
  const [bmrMetrics, setBmrMetrics] = useState<bmrStateProps>({
    age: 0,
    gender: 'None',
    height: [0, 0],
    weight: 0,
    unit: 'metric',
  });
  const [converterView, setConverterView] = useState<boolean>(false);

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
      <button
        className="mt-5 transition-all border rounded-lg py-2 px-4 whitespace-nowrap border-metaSecondary bg-neutral-900 hover:border-metaAccent cursor-pointer"
        onClick={() => {
          setConverterView(true);
        }}
      >
        Unit Converter
      </button>
      <UnitConverter modalView={converterView} setModalView={setConverterView} />
    </section>
  );
};

export default Bmr;
